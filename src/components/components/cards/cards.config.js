const faker = require('faker')

const itemCount = 6
const items = []

for (let i = 0; i < itemCount; i++) {
  items.push({
    card: {
      title: faker.lorem.sentence(),
      text: faker.lorem.paragraph(),
      link: '',
      media: {
        src: faker.image.imageUrl(400, 225, 'nature', true),
        modifiers: ['widescreen']
      },
      banner: 'Banner',
      meta: '',
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
    id: faker.random.uuid(),
    title: 'General card listing',
    cards: items,
    woodlands: false,
    simple: false,
    blog: false,
    listing: {
      modifiers: ['grid']
    }
  },
  variants: [
    {
      name: 'default',
      label: 'General'
    },
    {
      name: 'single',
      label: 'Single',
      context: {
        title: 'Single column card listing',
        modifiers: ['single']
      }
    }
  ]
}
