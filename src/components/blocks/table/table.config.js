const faker = require('faker')

const itemCount = 3
const items = []

for (let i = 0; i < itemCount; i++) {
  items.push({
    tablerows: {
      text: faker.lorem.words()
    }
  })
}

module.exports = {
  order: 24,
  title: 'Table',
  label: 'table',
  handle: 'block--table',
  status: 'wip',
  default: 'default',
  context: {
    tablerows: items
  }
}
