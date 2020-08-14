const System = require('mapbox-gl/dist/mapbox-gl.js')
const config = require('./config/map')
const steps = require('./config/steps')
const markerLayer = require('./config/marker')
const countLayer = require('./config/count')

const maps = document.querySelectorAll('[data-map]')

maps.forEach(container => {
  const reference = container.dataset.map
  const listing = document.querySelector(reference)
  let markers = []
  let bounds = null

  if (listing) {
    const elements = listing.querySelectorAll('[data-longitude][data-latitude]')

    markers = Array.from(elements).map(marker => {
      const { longitude, latitude } = marker.dataset
      const title = marker.querySelector('.card__title').innerHTML
      const description = marker.querySelector('.card__meta').innerHTML
      const html = marker.cloneNode(true).innerHTML

      return {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [parseFloat(latitude), parseFloat(longitude)]
        },
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

  const map = new System.Map({
    ...config,
    container,
    bounds,
    accessToken: process.env.MAPBOX_KEY
  })

  map.addControl(new System.NavigationControl())

  map.on('load', () => {
    map.addSource('woodlands', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: markers
      },
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50
    })

    map.addLayer({
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

    map.addLayer({
      id: 'woodland-count',
      type: 'symbol',
      source: 'woodlands',
      filter: ['has', 'point_count'],
      layout: countLayer
    })

    map.addLayer({
      id: 'woodland-detail',
      type: 'circle',
      source: 'woodlands',
      filter: ['!', ['has', 'point_count']],
      paint: markerLayer
    })

    map.on('click', 'woodlands', (event) => {
      const features = map.queryRenderedFeatures(event.point, {
        layers: ['woodlands']
      })

      const center = features[0].geometry.coordinates
      const clusterId = features[0].properties.cluster_id

      map.getSource('woodlands').getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) return

        map.easeTo({
          center,
          zoom
        })
      })
    })

    map.on('click', 'woodland-detail', (event) => {
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
        .addTo(map)
    })

    map.on('mouseenter', 'woodlands', function () {
      map.getCanvas().style.cursor = 'pointer'
    })

    map.on('mouseleave', 'woodlands', function () {
      map.getCanvas().style.cursor = ''
    })

    map.on('mouseenter', 'woodland-detail', function () {
      map.getCanvas().style.cursor = 'zoom'
    })

    map.on('mouseleave', 'woodland-detail', function () {
      map.getCanvas().style.cursor = ''
    })
  })
})
