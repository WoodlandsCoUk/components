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
  },
  variants: [
    {
      name: 'default',
      label: 'Tag'
    },
    {
      name: 'large',
      label: 'Large',
      context: {
        modifiers: ['large']
      }
    },
    {
      name: 'dismiss',
      label: 'Dismiss',
      context: {
        modifiers: ['dismiss']
      }
    },
    {
      name: 'dismiss--large',
      label: 'Dismiss (Large)',
      template: 'dismiss',
      context: {
        modifiers: ['dismiss', 'large']
      }
    }
  ]
}
