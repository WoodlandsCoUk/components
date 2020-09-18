const System = require('mapbox-gl/dist/mapbox-gl.js')
const config = require('./config/map')
const steps = require('./config/steps')
const markerLayer = require('./config/markerLayer')
const markerObject = require('./config/markerObject')
const popupObject = require('./config/popupObject')
const countLayer = require('./config/count')

const maps = document.querySelectorAll('[data-map]')

maps.forEach(container => {
  const { map, longitude, latitude } = container.dataset
  const listing = document.querySelector(map)

  let markers = []
  let bounds = null
  let { center, zoom } = config

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

      return {
        ...markerObject(latitude, longitude),
        properties: {
          title,
          description,
          html
        }
      }
    })

    bounds = markers.map(marker => {
      return marker.geometry.coordinates
    })
  }

  const mapElement = new System.Map({
    ...config,
    container,
    bounds,
    center,
    zoom,
    accessToken: process.env.MAPBOX_KEY
  })

  mapElement.addControl(new System.NavigationControl())

  mapElement.on('load', () => {
    mapElement.loadImage('/images/marker.png', (error, image) => {
      if (!error) {
        mapElement.addImage('marker', image)
      }
    })

    mapElement.addSource('woodlands', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: markers
      },
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50
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

    document.querySelector('[data-tab-item="maps"]').addEventListener('tabActive', (event) => {
      const map = event.target.querySelector('[data-map]')

      if (map && map === container) {
        mapElement.resize()
      }
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

      new System.Popup(popupObject)
        .setLngLat(coordinates)
        .setHTML(html)
        .addTo(mapElement)
    })

    mapElement.on('mouseenter', 'woodlands-map', function () {
      mapElement.getCanvas().style.cursor = 'pointer'
    })

    mapElement.on('mouseleave', 'woodlands-map', function () {
      mapElement.getCanvas().style.cursor = ''
    })

    mapElement.on('mouseenter', 'woodlands-map-detail', function () {
      mapElement.getCanvas().style.cursor = 'pointer'
    })

    mapElement.on('mouseleave', 'woodlands-map-detail', function () {
      mapElement.getCanvas().style.cursor = ''
    })
  })
})
