const faker = require('faker')

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
      title: 'Topics'
    },
    tags: {
      title: 'tags'
    }
  }
}
