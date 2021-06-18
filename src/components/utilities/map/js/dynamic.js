const System = require('mapbox-gl/dist/mapbox-gl.js')
const { accessToken } = require('./config/env')
const config = require('./config/map')
const osConfig = require('./config/map-os')
const steps = require('./config/steps')
const calculateBounds = require('./config/calculateBounds')
const countLayerMapbox = require('./config/countLayerMapbox')
const countLayerOS = require('./config/countLayerOS')
const markerLayer = require('./config/markerLayer')
const markerObject = require('./config/markerObject')
const popupObject = require('./config/popupObject')

const maps = document.querySelectorAll('[data-map]')
const tab = document.querySelector('[data-tab-map]')

maps.forEach(container => {
  const { map, style, longitude, latitude } = container.dataset
  const listing = document.querySelector(map)

  let markers = []
  let bounds = null
  let { center, zoom } = config
  let countLayer = null

  if (latitude && longitude) {
    markers.push(markerObject(latitude, longitude))
    center = [longitude, latitude]
    zoom = 12
  }

  if (listing) {
    const elements = listing.querySelectorAll('[data-longitude][data-latitude]')

    markers = Array.from(elements).map(marker => {
      const { latitude, longitude } = marker.dataset
      const title = marker.querySelector('.card__title').innerHTML
      const description = marker.querySelector('.card__meta').innerHTML
      const html = marker.cloneNode(true).innerHTML
      const markerId = marker.id || (function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
          const r = Math.random() * 16 | 0
          const v = c === 'x' ? r : (r & 0x3 | 0x8)
          return v.toString(16)
        })
      }())

      marker.setAttribute('id', markerId)

      return {
        ...markerObject(latitude, longitude),
        properties: {
          id: markerId,
          title,
          description,
          html
        }
      }
    })

    bounds = calculateBounds(markers)
  }

  let mapElementConfig = {}

  if (style === 'mapbox') {
    mapElementConfig = {
      ...config,
      container,
      center,
      zoom,
      bounds,
      accessToken
    }
    countLayer = countLayerMapbox
  } else {
    // assume style === 'os'
    mapElementConfig = {
      ...config,
      container,
      center,
      zoom,
      bounds,
      accessToken,
      ...osConfig
    }
    countLayer = countLayerOS
  }

  const mapElement = new System.Map(mapElementConfig)

  mapElement.loadImage('/images/marker.png', (error, image) => {
    if (!error) {
      mapElement.addImage('marker', image)
    }
  })

  mapElement.addControl(new System.NavigationControl())

  mapElement.on('load', () => {
    mapElement.addSource('woodlands', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: markers
      },
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50,
      clusterMinPoints: 3
    })

    mapElement.addLayer({
      id: 'woodlands-map',
      type: 'circle',
      source: 'woodlands',
      filter: ['has', 'point_count'],
      paint: {
        'circle-color': [
          'step',
          ['get', 'point_count'],
          steps.small.color,
          steps.small.at,
          steps.medium.color,
          steps.medium.at,
          steps.large.color
        ],
        'circle-radius': [
          'step',
          ['get', 'point_count'],
          steps.small.size,
          steps.small.at,
          steps.medium.size,
          steps.medium.at,
          steps.large.size
        ]
      }
    })

    mapElement.addLayer({
      id: 'woodlands-map-count',
      type: 'symbol',
      source: 'woodlands',
      filter: ['has', 'point_count'],
      layout: countLayer
    })

    mapElement.addLayer({
      id: 'woodlands-map-detail',
      type: 'symbol',
      source: 'woodlands',
      filter: ['!', ['has', 'point_count']],
      layout: markerLayer
    })

    mapElement.on('click', 'woodlands-map', (event) => {
      const features = mapElement.queryRenderedFeatures(event.point, {
        layers: ['woodlands-map']
      })

      if (!features) {
        return
      }

      const center = features[0].geometry.coordinates
      const clusterId = features[0].properties.cluster_id

      mapElement.getSource('woodlands').getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) return

        mapElement.easeTo({
          center,
          zoom
        })
      })
    })

    const titlePopup = new System.Popup({
      ...popupObject,
      closeOnClick: false
    })

    mapElement.on('click', 'woodlands-map-detail', (event) => {
      const coordinates = event.features[0].geometry.coordinates.slice()
      const html = event.features[0].properties.html

      if (!html) {
        return
      }

      // Ensure that if the map is zoomed out such that
      // multiple copies of the feature are visible, the
      // popup appears over the copy being pointed to.
      while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360
      }

      titlePopup.remove()
      new System.Popup(popupObject)
        .setLngLat(coordinates)
        .setHTML(html)
        .addTo(mapElement)
    })

    mapElement.on('mouseenter', 'woodlands-map', () => {
      mapElement.getCanvas().style.cursor = 'pointer'
    })

    mapElement.on('mouseleave', 'woodlands-map', () => {
      mapElement.getCanvas().style.cursor = ''
    })

    mapElement.on('mouseenter', 'woodlands-map-detail', (event) => {
      const coordinates = event.features[0].geometry.coordinates.slice()
      const description = event.features[0].properties.title

      mapElement.getCanvas().style.cursor = 'pointer'

      // Ensure that if the map is zoomed out such that
      // multiple copies of the feature are visible, the
      // popup appears over the copy being pointed to.
      while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360
      }

      titlePopup
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(mapElement)
    })

    mapElement.on('mouseleave', 'woodlands-map-detail', () => {
      mapElement.getCanvas().style.cursor = ''
      titlePopup.remove()
    })

    const countPopup = new System.Popup({
      ...popupObject,
      closeOnClick: false
    })

    mapElement.on('mouseenter', 'woodlands-map-count', (event) => {
      const count = event.features[0].properties.point_count
      const coordinates = event.features[0].geometry.coordinates.slice()
      const description = event.features[0].properties.description ?? `Zoom in to see ${count} woodlands`

      mapElement.getCanvas().style.cursor = 'pointer'

      // Ensure that if the map is zoomed out such that
      // multiple copies of the feature are visible, the
      // popup appears over the copy being pointed to.
      while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360
      }

      countPopup
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(mapElement)
    })

    mapElement.on('mouseleave', 'woodlands-map-count', () => {
      mapElement.getCanvas().style.cursor = ''
      countPopup.remove()
    })

    mapElement.on('render', () => {
      var markersTimeout
      const getVisibleMarkers = () => {
        const mapBounds = mapElement.getBounds()
        const visibleMarkers = []

        for (let i = 0; i < markers.length; i++) {
          const mapMarker = markers[i]
          const markerCoordinates = mapMarker.geometry.coordinates
          const markerLngLat = new System.LngLat(markerCoordinates[0], markerCoordinates[1])
          const markerVisible = mapBounds.contains(markerLngLat)

          if (markerVisible) {
            visibleMarkers.push(mapMarker)
          }
        }

        mapElement.getContainer().dispatchEvent(new CustomEvent('updateVisibleMarkers', {
          detail: {
            markers: visibleMarkers
          }
        }))
      }

      window.clearTimeout(markersTimeout)
      markersTimeout = window.setTimeout(() => {
        getVisibleMarkers()
      }, 100)
    })

    mapElement.getContainer().addEventListener('updateVisibleMarkers', (event) => {
      const { map } = event.target.dataset
      const listing = document.querySelector(map)

      if (listing) {
        const elements = listing.querySelectorAll('[data-longitude][data-latitude]')
        const visibleIds = Array.from(event.detail.markers).map(marker => {
          return marker.properties.id
        })

        Array.from(elements).forEach(marker => {
          if (visibleIds.includes(marker.id)) {
            marker.classList.remove('hidden')
          } else {
            marker.classList.add('hidden')
          }
        })
      }
    })

    if (tab) {
      tab.addEventListener('tabActive', (event) => {
        const map = event.target.querySelector('[data-map]')

        if (map && map === container) {
          mapElement.resize()
        }
      })
    }
  })
})
