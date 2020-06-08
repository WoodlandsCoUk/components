const faker = require('faker')

const itemCount = 7
const items = []

for (let i = 0; i < itemCount; i++) {
  items.push({
    card: {
      title: faker.lorem.words(3),
      text: faker.random.arrayElement([
        'About 5 ½ acres',
        'Almost 4 acres',
        'About 3 ¼ acres'
      ]),
      link: 'page-woodland',
      location: [
        `NR. ${faker.address.streetName()}`,
        faker.address.city(),
        faker.address.county()
      ].join(', '),
      media: {
        src: faker.image.imageUrl(400, 225, 'nature', true),
        modifiers: []
      },
      banner: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(faker.random.number()).slice(0, -3),
      modifiers: ['woodland']
    }
  })
}

const woodland = items.pop().card

module.exports = {
  order: 10,
  title: 'Woodland Detail',
  label: 'Woodland Detail',
  handle: 'page-woodland',
  status: 'prototype',
  context: {
    hero: {
      text: woodland.title,
      extra: woodland.banner
    },
    intro: {
      items: [
        woodland.location,
        woodland.text,
      ]
    },
    woodland: {
      title: 'More woods for sale',
      cards: items,
      button: {
        text: 'See all woods for sale',
        modifiers: ['inline', 'green', 'green--outline']
      }
    }
  }
}
