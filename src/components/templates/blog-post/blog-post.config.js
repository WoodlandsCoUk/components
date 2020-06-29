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
      link: '',
      media: {
        src: faker.image.imageUrl(400, 225, 'nature', true),
        modifiers: []
      },
      banner: 'Blog',
      location: '',
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
      text: faker.lorem.paragraphs(5)
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
      list: topics
    },
    tags: {
      title: 'Tags',
      tags
    },
    blog: {
      title: 'More from inside the woodlands',
      cards: items,
      button: {
        text: 'More from inside the woodlands',
        modifiers: ['inline', 'green', 'green--outline']
      }
    }
  }
}