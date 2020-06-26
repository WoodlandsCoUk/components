const faker = require('faker')

const itemCount = 6
const items = []
const squareItems = []

for (let i = 0; i < itemCount; i++) {
  items.push({
    media: {
      src: faker.image.imageUrl(400, 225, 'nature', true),
      modifiers: []
    }
  })
}

for (let i = 0; i < itemCount; i++) {
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
    },
    {
      name: 'carousel',
      label: 'Carousel',
      context: {
        gallery: items,
        modifiers: ['carousel']
      }
    }
  ]
}
