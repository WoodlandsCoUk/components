const faker = require('faker')

const blogCount = 3
const itemCount = 10
const tags = []
const topics = []
const items = []

for (let i = 0; i < blogCount; i++) {
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
      modifiers: ['link']
    }
  })
}

for (let i = 0; i < itemCount; i++) {
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
  order: 21,
  title: 'Blog Post',
  handle: 'page-blog-post',
  status: 'prototype',
  context: {
    post: {
      title: '20 20 vision for 2020 – is even 20% tree coverage enough?',
      text: faker.lorem.paragraphs(5),
      meta: faker.woodland.blogMeta()
    },
    comments: {
      title: 'Discussion',
      form: {
        title: 'Leave a comment'
      }
    },
    related: {
      title: 'Related articles'
    },
    topics: {
      title: 'Topics',
      list: topics,
      modifiers: ['linked', 'linked--alt']
    },
    tags: {
      title: 'Tags',
      tags
    },
    card: {
      card: {
        title: 'Wild Flower Guide',
        text: 'Read our guide to wild flowers of woodland and hedgerow',
        button: false
      }
    },
    blog: {
      title: 'More from inside the woodlands',
      cards: items,
      button: {
        text: 'More from inside the woodlands',
        modifiers: ['inline', 'green', 'green--outline', 'transparent']
      }
    }
  }
}
