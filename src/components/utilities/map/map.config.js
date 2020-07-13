const fs = require('fs')
const path = require('path')

const svg = fs.readFileSync(path.resolve(__dirname, 'assets', 'regions.svg'), 'utf8')

module.exports = {
  title: 'Map',
  label: 'Map',
  handle: 'map',
  status: 'wip',
  default: 'full',
  context: {},
  variants: [
    {
      name: 'full',
      label: 'Full'
    },
    {
      name: 'svg',
      label: 'SVG',
      context: {
        update: false,
        svg
      }
    }
  ]
}
