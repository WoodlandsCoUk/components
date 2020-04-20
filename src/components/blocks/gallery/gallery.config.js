const make = 4
const items = []
const squareItems = []

for (let i = 0; i < make; i++) {
  items.push({
    media: {
      src: 'http://placehold.it/450x300/333' // faker.image.abstract(),
    }
  })
}

for (let i = 0; i < make; i++) {
  squareItems.push({
    media: {
      src: 'http://placehold.it/400x400/333', // faker.image.abstract(),
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
