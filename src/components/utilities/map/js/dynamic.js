const System = require('mapbox-gl/dist/mapbox-gl.js')
const config = require('./config')

const maps = document.querySelectorAll('[data-map]')

maps.forEach((container) => {
  const map = new System.Map({
    ...config,
    container,
    accessToken: process.env.MAPBOX_KEY
  })

  map.addControl(new System.NavigationControl())
})
