const faker = require('faker')

module.exports = {
  order: 30,
  title: 'Managed By',
  handle: 'block--managed-by',
  status: 'wip',
  default: 'default',
  context: {
    name: faker.name.findName(),
    avatar: faker.image.avatar(),
    telephone: faker.phone.phoneNumber(),
    email: faker.internet.exampleEmail()
  },
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'manager',
      label: 'Manager',
      context: {
        modifiers: ['manager']
      }
    }
  ]
}
