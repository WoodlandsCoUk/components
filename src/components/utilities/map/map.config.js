const fs = require('fs')
const path = require('path')
const faker = require('faker')

const svg = fs.readFileSync(path.resolve(__dirname, 'assets', 'regions.svg'), 'utf8')

module.exports = {
  title: 'Map',
  label: 'Map',
  handle: 'map',
  status: 'wip',
  default: 'full',
  context: {
    map: faker.random.uuid()
  },
  variants: [
    {
      name: 'full',
      label: 'Full'
    },
    {
      name: 'svg',
      label: 'SVG',
      context: {
        reference: false,
        type: false,
        svg
      }
    }
  ]
}
