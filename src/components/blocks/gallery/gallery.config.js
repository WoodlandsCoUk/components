const faker = require('faker')

const make = 4
const items = []
const squareItems = []

for (let i = 0; i < make; i++) {
  items.push({
    media: {
      src: faker.image.imageUrl(400, 225, 'nature', true)
    }
  })
}

for (let i = 0; i < make; i++) {
  squareItems.push({
    media: {
      src: faker.image.imageUrl(400, 225, 'nature', true),
      modifiers: ['square']
    }
  })
}

module.exports = {
  order: 5,
  title: 'Gallery',
  handle: 'block--gallery',
  status: 'wip',
  default: 'default',
  context: {
    gallery: items
  },
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'square',
      label: 'Square',
      context: {
        gallery: squareItems
      }
    }
  ]
}
