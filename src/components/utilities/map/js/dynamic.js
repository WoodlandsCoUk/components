const System = require('mapbox-gl/dist/mapbox-gl.js')
const config = require('./config/map')
const steps = require('./config/steps')
const markerLayer = require('./config/marker')
const markerObject = require('./config/markerObject')
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
    center = [latitude, longitude]
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
      id: 'woodlands',
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
      id: 'woodland-count',
      type: 'symbol',
      source: 'woodlands',
      filter: ['has', 'point_count'],
      layout: countLayer
    })

    mapElement.addLayer({
      id: 'woodland-detail',
      type: 'circle',
      source: 'woodlands',
      filter: ['!', ['has', 'point_count']],
      paint: markerLayer
    })

    mapElement.on('click', 'woodlands', (event) => {
      const features = mapElement.queryRenderedFeatures(event.point, {
        layers: ['woodlands']
      })

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

    mapElement.on('click', 'woodland-detail', (event) => {
      const coordinates = event.features[0].geometry.coordinates.slice()
      const html = event.features[0].properties.html

      // Ensure that if the map is zoomed out such that
      // multiple copies of the feature are visible, the
      // popup appears over the copy being pointed to.
      while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360
      }

      new System.Popup({ offset: 20 })
        .setLngLat(coordinates)
        .setHTML(html)
        .addTo(mapElement)
    })

    mapElement.on('mouseenter', 'woodlands', function () {
      mapElement.getCanvas().style.cursor = 'pointer'
    })

    mapElement.on('mouseleave', 'woodlands', function () {
      mapElement.getCanvas().style.cursor = ''
    })

    mapElement.on('mouseenter', 'woodland-detail', function () {
      mapElement.getCanvas().style.cursor = 'zoom'
    })

    mapElement.on('mouseleave', 'woodland-detail', function () {
      mapElement.getCanvas().style.cursor = ''
    })
  })
})
