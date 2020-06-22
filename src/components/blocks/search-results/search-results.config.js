const faker = require('faker')

const itemCount = 2
const buttons = []

for (let i = 0; i < itemCount; i++) {
  buttons.push({
    button: {
      text: faker.lorem.words(),
      modifiers: ['small', 'green', 'green--outline']
    }
  })
}

module.exports = {
  order: 3,
  title: 'Search Results',
  label: 'Search Results',
  handle: 'block--search-results',
  status: 'wip',
  default: 'default',
  context: {
    count: faker.random.number(),
    type: faker.lorem.word(),
    location: faker.address.county(),
    buttons
  }
}
