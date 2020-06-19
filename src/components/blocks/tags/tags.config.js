const faker = require('faker')

const itemCount = 5
const items = []

for (let i = 0; i < itemCount; i++) {
  items.push({
    text: faker.lorem.word(),
    link: '#'
  })
}

module.exports = {
  order: 31,
  title: 'Tags',
  label: 'Tags',
  handle: 'block--tags',
  status: 'wip',
  default: 'default',
  context: {
    title: 'Tags',
    tags: items
  }
}
