const System = require('mapbox-gl/dist/mapbox-gl.js')
const config = require('./config')

const maps = document.querySelectorAll('[data-map]')

maps.forEach((container) => {
  const reference = container.dataset.map
  const listing = document.querySelector(reference)
  let markers = []
  let bounds = []

  if (listing) {
    const elements = listing.querySelectorAll('[data-longitude][data-latitude]')

    markers = Array.from(elements).map((marker) => {
      const { longitude, latitude } = marker.dataset
      const title = marker.querySelector('.card__title').innerHTML
      const description = marker.querySelector('.card__meta').innerHTML
      const html = marker.cloneNode(true).innerHTML

      return {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
            parseFloat(latitude),
            parseFloat(longitude)
          ]
        },
        properties: {
          title,
          description,
          html
        }
      }
    })

    bounds = markers.map((marker) => {
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

  // Loop through the markers and add them to the map.
  markers.forEach((data) => {
    const element = document.createElement('div')
    element.className = 'map__marker'

    const marker = new System.Marker(element)

    // Position the marker.
    marker.setLngLat(data.geometry.coordinates)

    // Set the marker popup.
    marker.setPopup(
      new System.Popup({ offset: 20 }).setHTML(data.properties.html)
    )

    element.addEventListener('click', (event) => {
      map.flyTo({
        speed: 0.75,
        curve: 1.5,
        essential: false,
        center: marker.getLngLat()
      })
    })

    // Finally, add the marker to the map.
    marker.addTo(map)
  })
})
