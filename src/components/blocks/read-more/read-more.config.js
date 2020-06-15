const faker = require('faker')

const text = 'Read more'
const hide = 'Read less'

module.exports = {
  order: 10,
  title: 'Read More',
  label: 'Read More',
  handle: 'block--read-more',
  status: 'wip',
  default: 'default',
  context: {
    text: faker.lorem.paragraphs(5),
    trigger: {
      text,
      hide,
    },
    button: {
      button: {
        text,
        modifiers: ['small']
      }
    }
  }
}
