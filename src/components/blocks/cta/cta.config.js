const faker = require('faker')

const itemCount = 4
const items = []

for (let i = 0; i < itemCount; i++) {
  const title = faker.lorem.words()

  items.push({
    title: title,
    icon: {
      icon: 'tick',
      modifiers: ['medium', 'yellow-dark']
    }
  })
}

module.exports = {
  order: 4,
  title: 'Call To Action',
  label: 'Call To Action',
  handle: 'block--cta',
  status: 'wip',
  default: 'default',
  context: {
    cta: {
      title: 'Call to Action',
      text: faker.lorem.paragraph(),
      button: {
        button: {
          text: 'Call to Action',
          modifiers: ['red', 'inline']
        }
      }
    }
  },
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'listing',
      label: 'Listing',
      context: {
        cta: {
          title: 'Call to Action Listing',
          button: false,
          items
        }
      }
    },
    {
      name: 'need-help',
      label: 'Help',
      context: {
        cta: {
          title: faker.lorem.words(4),
          text: faker.lorem.paragraph(),
          extra: faker.lorem.sentences(2),
          button: false
        }
      }
    }
  ]
}
