const faker = require('faker')

const itemCount = 3
const items = []

for (let i = 0; i < itemCount; i++) {
  items.push({
    rows: {
      col1: faker.lorem.words(),
      col2: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(faker.random.number()).slice(0, -3),
      col3: faker.lorem.words()
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
    rows: items
  }
}
