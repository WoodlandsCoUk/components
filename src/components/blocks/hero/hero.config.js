const faker = require('faker')

module.exports = {
  order: 20,
  title: 'Hero',
  handle: 'block--hero',
  status: 'wip',
  default: 'default',
  context: {
    text: faker.lorem.words(4),
    src: null
  },
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'with-image',
      label: 'With Image',
      context: {
        text: faker.lorem.words(4),
        src: faker.image.imageUrl(800, 300, 'nature', true),
        modifiers: ['with-image']
      }
    },
    {
      name: 'woodland',
      label: 'Woodland',
      context: {
        text: faker.lorem.words(3),
        extra: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(faker.random.number()).slice(0, -3)
      }
    },
    {
      name: 'intro',
      label: 'Intro with Map',
      context: {
        title: faker.lorem.sentence(),
        text: faker.lorem.sentences(2),
        map: {
          type: 'link'
        },
        image: '/images/banner.jpg',
        modifiers: ['intro']
      }
    }
  ]
}
