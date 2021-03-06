const faker = require('faker')

const itemCount = 7
const items = []

for (let i = 0; i < itemCount; i++) {
  items.push({
    card: {
      title: faker.lorem.words(3),
      text: faker.lorem.paragraph(),
      extra: faker.woodland.acre(),
      link: 'page-woodland',
      meta: faker.woodland.meta(),
      media: {
        src: faker.image.imageUrl(400, 225, 'nature', true),
        modifiers: ['widescreen']
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
        {
          text: woodland.meta
        },

        {
          text: woodland.extra
        },
        {
          text: '2.6 miles away'
        },
        {
          link: '#',
          text: 'Region Link'
        }
      ]
    },
    woodland: {
      modal: {
        title: `Visit ${woodland.title}`
      }
    },
    woodlands: {
      title: 'Other woodlands for sale',
      cards: items,
      button: {
        text: 'See more woodlands for sale',
        modifiers: ['inline', 'green', 'green--outline', 'transparent']
      }
    },
    cta: {
      cta: {
        title: 'How we support our buyers',
        button: false,
        items: [
          {
            title: 'Member of the <a href="#">small woodland owners’</a> group',
            icon: {
              icon: 'tick',
              modifiers: ['medium', 'yellow-dark']
            }
          },
          {
            title: 'Membership of the <a href="#">royal forestry society</a>',
            icon: {
              icon: 'tick',
              modifiers: ['medium', 'yellow-dark']
            }
          },
          {
            title: '£300 for a woodland <a href="#">course of your choice</a>',
            icon: {
              icon: 'tick',
              modifiers: ['medium', 'yellow-dark']
            }
          },
          {
            title: 'Free copies of <a href="#">two woodland books</a>',
            icon: {
              icon: 'tick',
              modifiers: ['medium', 'yellow-dark']
            }
          }
        ]
      }
    }
  }
}
