const maps = require('./../../../data/maps.js')

const map = {
  id: '#map',
  longitude: 51.0618,
  latitude: 0.195558
}

module.exports = {
  order: 11,
  title: 'Woodland Maps',
  label: 'Woodland Maps',
  handle: 'components--woodland-map',
  status: 'wip',
  default: 'default',
  context: {
    maps,
    map
  }
}
