const faker = require('faker')

module.exports = {
  order: 10,
  title: 'Read More',
  label: 'Read More',
  handle: 'block--read-more',
  status: 'wip',
  default: 'default',
  context: {
    text: faker.lorem.paragraphs(5),
    button: {
      button: {
        text: 'Read more',
        hide: 'Read less',
        modifiers: ['small']
      }
    }
  }
}
