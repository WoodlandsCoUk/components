const faker = require('faker')

const itemCount = 4
const items = []

for (let i = 1; i < itemCount + 1; i++) {
  items.push(`List Item #${i}`)
}

module.exports = {
  order: 2,
  title: 'Typography',
  handle: 'dna-typography',
  status: 'ready',
  default: 'default',
  context: {
    text: faker.lorem.paragraph(),
    list: items
  }
}
