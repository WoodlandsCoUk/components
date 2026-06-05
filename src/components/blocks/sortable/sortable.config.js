const fs = require('fs')
const path = require('path')
const faker = require('faker')

const itemCount = 6
const items = []

for (let i = 0; i < itemCount; i++) {
  items.push({
    media: {
      src: faker.image.imageUrl(400, 225, 'nature ', true) + '?uniq=' + i,
      modifiers: []
    }
  })
}

const template = fs.readFileSync(
  path.resolve(__dirname, 'sortable.html'),
  'utf8'
)

module.exports = {
  order: 60,
  title: 'Sortable',
  handle: 'block--sortable',
  status: 'wip',
  default: 'default',
  context: {
    gallery: items,
    template
  },
  variants: [
    {
      name: 'default',
      label: 'Default'
    }
  ]
}
