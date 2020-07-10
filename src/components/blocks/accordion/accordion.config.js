const faker = require('faker')

const itemCount = 6
const items = []

for (let i = 0; i < itemCount; i++) {
  items.push({
    title: `Accordion #${i + 1}`,
    text: faker.lorem.paragraph()
  })
}

module.exports = {
  order: 10,
  title: 'Accordion',
  handle: 'block--accordion',
  status: 'wip',
  default: 'default',
  context: {
    items
  }
}
