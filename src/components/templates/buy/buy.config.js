const faker = require('faker')

const itemCount = 6
const items = []

for (let i = 0; i < itemCount; i++) {
  items.push({
    card: {
      title: faker.lorem.sentence(),
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

const count = 28

const buttons = [
  {
    button: {
      text: 'List View',
      modifiers: ['small', 'green', 'green--outline']
    }
  },
  {
    button: {
      text: 'Map View',
      modifiers: ['small', 'green', 'green--outline']
    }
  }
]

module.exports = {
  order: 2,
  title: 'Buy',
  handle: 'page-buy',
  status: 'prototype',
  context: {
    header: {
      navigation: {
        active: 'page-buy'
      }
    },
    hero: {
      text: 'Choosing the right woodland for you and your family.'
    },
    woodlands: {
      title: null,
      cards: items,
      button: {
        text: 'See more woodlands for sale',
        modifiers: ['inline', 'green', 'green--outline']
      },
      count,
      type: 'Woodlands',
      location: 'South Wales and Herefordshire',
      buttons
    },
    help: {
      cta: {
        title: 'Can’t find what you’re looking for?',
        text: 'We have other woods, some much larger, which will be available soon. Contact the manager for this region for more details.',
        extra: 'Or visit <a href="http://forests.co.uk" rel="nofollow">forests.co.uk</a> for other woodlands for sale'
      }
    }
  }
}
