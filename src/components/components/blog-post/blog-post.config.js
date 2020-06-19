const faker = require('faker')

module.exports = {
  order: 20,
  title: 'Blog Post',
  label: 'Blog Post',
  handle: 'components--blog-post',
  status: 'wip',
  default: 'default',
  context: {
    title: faker.lorem.words(5),
    text: faker.lorem.paragraphs(10),
    date: new Date(),
    tag: 'Tag x',
    tags: ['Tag 1', 'Tag B']
  }
}
