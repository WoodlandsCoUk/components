const faker = require('faker')

const make = 6
const items = []

for (let i = 0; i < make; i++) {
  items.push({
    card: {
      title: 'Default Card',
      text: faker.lorem.paragraph(),
      category: faker.address.county(),
      media: 'http://placehold.it/450x300/333', // faker.image.abstract(),
      banner: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(faker.random.number())
    }
  })
}

module.exports = {
  order: 10,
  title: 'Cards Listing',
  label: 'Cards Listing',
  handle: 'components--cards',
  status: 'wip',
  default: 'default',
  context: {
    title: 'New woods for sale',
    cards: items,
    listing: {
      modifiers: ['grid', 'gray']
    }
  }
}
