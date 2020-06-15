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
          modifiers: ['red']
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
          // button: false,
          items
        }
      }
    }
  ]
}
