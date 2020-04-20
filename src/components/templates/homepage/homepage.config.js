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
      title: 'New woods for sale',
      button: {
        text: 'See all woods for sale',
        modifiers: ['green']
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
        modifiers: ['green']
      }
    }
  }
}
