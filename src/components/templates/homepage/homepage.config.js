const faker = require('faker')

const make = 6
const items = []

for (let i = 0; i < make; i++) {
  items.push({
    card: {
      title: faker.lorem.sentence(),
      text: faker.random.arrayElement([
        'About 5 ½ acres',
        'Almost 4 acres',
        'About 3 ¼ acres'
      ]),
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

module.exports = {
  order: 1,
  title: 'Homepage',
  handle: 'page-homepage',
  status: 'prototype',
  context: {
    header: {
      navigation: {
        active: 'page-homepage'
      }
    },
    search: {
      search: {
        modifiers: ['alt']
      }
    },
    woods: {
      title: 'New woodlands for sale',
      cards: items,
      button: {
        text: 'See all woodlands for sale',
        modifiers: ['inline', 'green', 'green--outline']
      }
    },
    topics: {
      title: 'Popular topics'
    },
    blog: {
      title: 'Blogs, videos & guides'
    },
    instagram: {
      button: {
        text: 'Follow us on Instagram',
        modifiers: ['green', 'green--outline', 'inline']
      }
    }
  }
}
