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
    name: faker.name.firstName(),
    text: faker.lorem.paragraphs(10),
    commentCount: faker.random.number(),
    date: new Date(),
    topic: faker.lorem.word(),
    tags: ['Tag 1', 'Tag B']
  }
}
