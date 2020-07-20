const faker = require('faker')

const itemCount = 6
const tagCount = 12
const topicCount = 8
const items = []
const tags = []
const topics = []

for (let i = 0; i < itemCount; i++) {
  items.push({
    card: {
      title: faker.lorem.words(3),
      text: faker.lorem.sentences(10),
      media: {
        src: faker.image.imageUrl(400, 225, 'nature', true),
        modifiers: []
      },
      banner: 'Blog',
      meta: faker.woodland.blogMeta(),
      modifiers: ['blog']
    }
  })
}

for (let i = 0; i < topicCount; i++) {
  topics.push({
    text: faker.lorem.words(3),
    link: '#'
  })
}

for (let i = 0; i < tagCount; i++) {
  tags.push({
    text: faker.lorem.word(),
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
