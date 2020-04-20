const faker = require('faker')

const make = 4
const items = []

for (let i = 1; i < make + 1; i++) {
  items.push(`List Item #${i}`)
}

module.exports = {
  order: 2,
  title: 'Typography',
  handle: 'dna-typography',
  status: 'wip',
  default: 'default',
  context: {
    text: faker.lorem.paragraph(),
    list: items
  }
}
