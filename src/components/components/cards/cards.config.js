const faker = require('faker')

const make = 6
const items = []

for (let i = 0; i < make; i++) {
  items.push({
    card: {
      title: 'Default Card',
      text: faker.lorem.paragraph(),
      category: faker.address.county(),
      media: {
        src: faker.image.imageUrl(400, 225, 'nature', true)
      },
      banner: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(faker.random.number()).slice(0, -3)
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
