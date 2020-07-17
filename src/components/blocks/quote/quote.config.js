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
      drawing: true
    }
  },
  variants: [
    {
      name: 'default',
      label: 'Simple'
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
      name: 'with-link',
      label: 'With Link',
      context: {
        quote: {
          link: {
            href: '#',
            text: 'Read blog post'
          }
        }
      }
    },
    {
      name: 'full',
      label: 'Full',
      context: {
        quote: {
          cite: faker.name.findName(),
          company: faker.name.jobTitle(),
          link: {
            href: '#',
            text: 'Read blog post'
          }
        }
      }
    }
  ]
}
