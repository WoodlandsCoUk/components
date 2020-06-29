const faker = require('faker')

const itemCount = 12
const items = []
const tags = []
const topics = []

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

  tags.push({
    text: faker.lorem.word(),
    link: '#'
  })

  topics.push({
    text: faker.lorem.words(3),
    link: '#'
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
    topics: {
      title: 'Topics',
      list: topics
    },
    tags: {
      title: 'Tags',
      tags
    },
    blog: {
      title: null,
      cards: items,
      blog: true,
      modifiers: ['single'],
      button: {
        text: 'See more blog posts',
        link: '#more-blog-posts',
        modifiers: ['inline', 'green', 'green--outline']
      }
    }
  }
}
