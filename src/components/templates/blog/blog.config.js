const faker = require('faker')

const itemCount = 12
const items = []

for (let i = 0; i < itemCount; i++) {
  items.push({
    card: {
      title: faker.lorem.sentence(),
      text: faker.lorem.paragraph(),
      media: {
        src: faker.image.imageUrl(400, 225, 'nature', true),
        modifiers: []
      },
      banner: 'Blog',
      meta: '',
      modifiers: ['blog']
    }
  })
}

module.exports = {
  order: 20,
  title: 'Blog',
  handle: 'page-blog',
  status: 'prototype',
  context: {
    hero: {
      text: 'Blog'
    },
    blog: {
      title: null,
      cards: items,
      button: {
        text: 'See more blog posts',
        link: '#more-blog-posts',
        modifiers: ['inline', 'green', 'green--outline']
      }
    }
  }
}
