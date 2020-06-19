const faker = require('faker')

const itemCount = 10
const tags = []
const topics = []

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
    }
  }
}
