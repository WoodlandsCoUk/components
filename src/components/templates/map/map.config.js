const faker = require('faker')

const itemCount = 6
const woodlands = []

for (let i = 0; i < itemCount; i++) {
  woodlands.push({
    card: {
      title: faker.lorem.sentence(),
      text: faker.lorem.paragraph(),
      extra: faker.random.arrayElement([
        'About 5 ½ acres',
        'Almost 4 acres',
        'About 3 ¼ acres'
      ]),
      link: 'page-woodland',
      meta: [
        `NR. ${faker.address.streetName()}`,
        faker.address.city(),
        faker.address.county()
      ].join(', '),
      media: {
        src: faker.image.imageUrl(400, 225, 'nature', true),
        modifiers: []
      },
      banner: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(faker.random.number()).slice(0, -3),
      modifiers: ['woodland', 'woodland--map'],
      woodland: true
    }
  })
}

module.exports = {
  order: 16,
  title: 'Map',
  handle: 'page-map',
  status: 'prototype',
  context: {
    title: 'Woodlands for sale in this location',
    woodlands: {
      title: false,
      cards: woodlands,
      woodlands: true,
      simple: true,
      modifiers: ['single']
    },
    back: {
      button: {
        text: '← Exit map view',
        modifiers: ['inline', 'inline--small', 'green--dark', 'left']
      }
    }
  }
}
