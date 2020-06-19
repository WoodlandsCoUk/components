const faker = require('faker')

const itemCount = 4
const items = []

for (let i = 0; i < itemCount; i++) {
  items.push({
    text: faker.lorem.paragraphs(2),
    author: faker.name.firstName(),
    date: new Date()
  })
}

module.exports = {
  order: 21,
  title: 'Blog Comments',
  label: 'Blog Comments',
  handle: 'components--blog-comments',
  status: 'wip',
  default: 'default',
  context: {
    title: 'Comments',
    comments: items,
    modifiers: ['short']
  }
}
