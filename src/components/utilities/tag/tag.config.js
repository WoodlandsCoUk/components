const faker = require('faker')

module.exports = {
  title: 'Tag',
  label: 'Tag',
  handle: 'tag',
  status: 'ready',
  default: 'default',
  context: {
    text: faker.lorem.word(),
    link: '#'
  }
}
