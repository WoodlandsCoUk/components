const faker = require('faker')

module.exports = {
  order: 50,
  title: 'Blog Comment',
  label: 'Blog Comment',
  handle: 'block--blog-comment',
  status: 'wip',
  default: 'default',
  context: {
    text: faker.lorem.paragraphs(2),
    author: faker.name.firstName(),
    date: new Date()
  }
}
