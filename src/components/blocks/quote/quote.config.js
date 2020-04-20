const faker = require('faker')

module.exports = {
  order: 21,
  title: 'Quotes',
  handle: 'block--quote',
  status: 'wip',
  default: 'default',
  context: {
    quote: {
      text: faker.lorem.paragraph(),
      cite: faker.name.findName(),
      company: faker.name.jobTitle(),
      modifiers: ['with-image']
    }
  }
}
