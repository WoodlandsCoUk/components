const faker = require('faker')

const itemCount = 6
const items = []

for (let i = 0; i < itemCount; i++) {
  items.push({
    card: {
      title: faker.lorem.sentence(),
      text: faker.lorem.paragraph(),
      link: 'page-wood',
      media: {
        src: faker.image.imageUrl(400, 225, 'nature', true),
        modifiers: []
      },
      banner: 'Banner',
      modifiers: ['link']
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
    title: 'General card listing',
    cards: items,
    listing: {
      modifiers: ['grid', 'gray']
    }
  }
}
