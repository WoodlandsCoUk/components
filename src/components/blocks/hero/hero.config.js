const faker = require('faker')

module.exports = {
  order: 20,
  title: 'Hero',
  handle: 'block--hero',
  status: 'wip',
  default: 'default',
  context: {
    text: 'Woodlands for sale for conservation and enjoyment.'
  },
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'woodland',
      label: 'Woodland',
      context: {
        text: faker.lorem.words(3),
        extra: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(faker.random.number()).slice(0, -3)
      }
    }
  ]
}
