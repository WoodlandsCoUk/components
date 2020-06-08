const faker = require('faker')

const itemCount = 3
const items = []

for (let i = 0; i < itemCount; i++) {
  items.push({
    button: {
      text: faker.lorem.words(),
      modifiers: ['small', 'inline']
    }
  })
}

module.exports = {
  order: 24,
  title: 'Button Group',
  label: 'Button Group',
  handle: 'block--button-group',
  status: 'wip',
  default: 'default',
  context: {
    buttons: items
  }
}
