const faker = require('faker')

const make = 4
const items = []

for (let i = 0; i < make; i++) {
  items.push({
    button: {
      text: faker.lorem.sentence(),
      modifiers: ['small']
    }
  })
}

module.exports = {
  order: 10,
  title: 'Button Listing',
  label: 'Button Listing',
  handle: 'components-buttons',
  status: 'wip',
  default: 'default',
  context: {
    title: 'Popular topics',
    buttons: items,
    listing: {
      modifiers: ['gray']
    }
  }
}
