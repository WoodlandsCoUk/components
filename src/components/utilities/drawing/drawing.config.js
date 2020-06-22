// const _ = require('lodash')
// const fractal = require('../../../../fractal.config')

// const variants = _.clone(fractal.components.get('default.context.drawings'))

module.exports = {
  collated: true,
  title: 'Drawings',
  label: 'Drawings',
  handle: 'drawing',
  status: 'wip',
  default: 'badger', // variants[0].name,
  variants: [
    {
      name: 'badger',
      label: 'Badger',
      context: {
        asset: '/images/drawings/badger.png'
      }
    },
    {
      name: 'bird',
      label: 'Bird',
      context: {
        asset: '/images/drawings/bird.png'
      }
    },
    {
      name: 'butterfly',
      label: 'Butterfly',
      context: {
        asset: '/images/drawings/butterfly.png'
      }
    },
    {
      name: 'flowers',
      label: 'Flowers',
      context: {
        asset: '/images/drawings/flowers.png'
      }
    },
    {
      name: 'landscape',
      label: 'Landscape',
      context: {
        asset: '/images/drawings/landscape.png'
      }
    },
    {
      name: 'logs',
      label: 'Logs',
      context: {
        asset: '/images/drawings/logs.png'
      }
    },
    {
      name: 'moth',
      label: 'Moth',
      context: {
        asset: '/images/drawings/moth.png'
      }
    },
    {
      name: 'trees',
      label: 'Trees',
      context: {
        asset: '/images/drawings/trees.png'
      }
    }
  ]
}
