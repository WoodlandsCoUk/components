const faker = require('faker')

const maps = require('./../../../data/maps.js')

const map = {
  ...faker.woodland.coordinates(),
  id: '#map'
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
