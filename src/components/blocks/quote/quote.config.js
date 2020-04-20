const faker = require('faker')

module.exports = {
  order: 4,
  title: 'Quotes',
  handle: 'block--quote',
  status: 'wip',
  default: 'default',
  context: {
    quote: {
      text: faker.lorem.paragraph(),
      cite: faker.name.findName(),
      company: faker.name.jobTitle()
    }
  }
}
