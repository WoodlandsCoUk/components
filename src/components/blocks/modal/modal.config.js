const faker = require('faker')

module.exports = {
  order: 15,
  title: 'Modal',
  handle: 'block--modal',
  status: 'wip',
  default: 'default',
  context: {
    title: 'Default Modal',
    content: faker.lorem.paragraphs(3),
    uuid: faker.random.uuid()
  },
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'footer',
      label: 'With Footer',
      context: {
        footer: faker.lorem.paragraphs(1)
      }
    },
    {
      name: 'small',
      label: 'Small',
      context: {
        modifiers: ['small']
      }
    }
  ]
}
