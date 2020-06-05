const faker = require('faker')

module.exports = {
  order: 21,
  title: 'Quotes',
  handle: 'block--quote',
  status: 'wip',
  default: 'default',
  context: {
    quote: {
      text: faker.lorem.paragraph()
    }
  },
  variants: [
    {
      name: 'default',
      label: 'Simple'
    },
    {
      name: 'full',
      label: 'Full',
      context: {
        quote: {
          cite: faker.name.findName(),
          company: faker.name.jobTitle(),
          modifiers: ['with-image']
        }
      }
    },
    {
      name: 'with-cite',
      label: 'With Citation',
      context: {
        quote: {
          cite: faker.name.findName(),
          company: faker.name.jobTitle()
        }
      }
    },
    {
      name: 'with-image',
      label: 'With Image',
      context: {
        quote: {
          modifiers: ['with-image']
        }
      }
    }
  ]
}
