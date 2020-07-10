const faker = require('faker')

const itemCount = 6
const woodlands = []
const blog = []

const topicCount = 7
const topics = []

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
      modifiers: ['woodland'],
      woodland: true
    }
  })

  blog.push({
    card: {
      title: faker.lorem.words(3),
      text: faker.lorem.paragraph(),
      link: 'page-blog-post',
      banner: faker.random.arrayElement([
        'Blog',
        'Video',
        'Guide'
      ]),
      media: {
        src: faker.image.imageUrl(400, 225, 'nature', true),
        modifiers: []
      },
      modifiers: []
    }
  })
}

for (let i = 0; i < topicCount; i++) {
  topics.push({
    text: faker.lorem.sentence(),
    link: '#'
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
    woodlands: {
      title: 'New woodlands for sale',
      cards: woodlands,
      woodlands: true,
      button: {
        text: 'See all woodlands for sale',
        modifiers: ['inline', 'green', 'green--outline']
      }
    },
    buy: {
      title: 'Buying and owning a woodland',
      card: {
        title: 'Why buy a woodland?'
      }
    },
    topics: {
      title: 'Popular topics',
      list: topics
    },
    blog: {
      title: 'Blogs, videos & guides',
      cards: blog
    },
    instagram: {
      button: {
        text: 'Follow us on Instagram',
        modifiers: ['green', 'green--outline', 'inline']
      }
    }
  }
}
