const faker = require('faker')

module.exports = {
  order: 22,
  title: 'Call To Action',
  label: 'Call To Action',
  handle: 'block--cta',
  status: 'wip',
  default: 'default',
  context: {
    title: 'Ready to buy?',
    text: faker.lorem.paragraph(),
    button: {
      button: {
        text: 'Call to Action',
        modifiers: ['red']
      }
    }
  }
}
