const faker = require('faker')

module.exports = {
  order: 10,
  title: 'Cards',
  label: 'Cards',
  handle: 'block--card',
  status: 'wip',
  default: 'default',
  context: {
    card: {
      title: 'Default Card',
      text: faker.lorem.paragraph(),
      classes: '',
      media: {
        src: faker.image.imageUrl(400, 225, 'nature', true),
        modifiers: ['widescreen']
      }
    }
  },
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'banner',
      label: 'With Banner',
      context: {
        card: {
          title: 'Card with Banner',
          text: faker.lorem.paragraph(),
          banner: 'Banner'
        }
      }
    },
    {
      name: 'banner-sold',
      label: 'With Sold Banner',
      context: {
        card: {
          title: 'Card with Sold Banner',
          text: faker.lorem.paragraph(),
          banner: 'Sold',
          modifiers: ['sold']
        }
      }
    },
    {
      name: 'video',
      label: 'With Video',
      context: {
        card: {
          title: 'Card with Video',
          text: faker.lorem.paragraph(),
          media: {
            video: 'http://www.youtube.com/embed/dP15zlyra3c?html5=1',
            modifiers: ['video']
          }
        }
      }
    },
    {
      name: 'link',
      label: 'With Link',
      context: {
        card: {
          title: 'Card with Link',
          text: faker.lorem.paragraph(),
          link: '#link'
        }
      }
    },
    {
      name: 'woodland',
      label: 'Woodland',
      context: {
        card: {
          title: 'Woodland Card',
          text: faker.lorem.paragraph(),
          extra: faker.woodland.acre(),
          link: 'page-woodland',
          meta: faker.woodland.meta(),
          banner: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(faker.random.number()).slice(0, -3),
          modifiers: ['woodland']
        }
      }
    },
    {
      name: 'woodland-map',
      label: 'Woodland (Map)',
      context: {
        card: {
          title: 'Woodland Map Card',
          text: faker.lorem.paragraph(),
          extra: faker.woodland.acre(),
          link: 'page-woodland',
          meta: faker.woodland.meta(),
          coordinates: faker.woodland.coordinates(),
          banner: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(faker.random.number()).slice(0, -3),

          modifiers: ['woodland', 'woodland--map']
        }
      }
    },
    {
      name: 'blog',
      label: 'Blog',
      context: {
        card: {
          title: 'Blog Card',
          text: faker.lorem.paragraph(),
          link: 'page-blog-post',
          banner: '',
          meta: faker.woodland.blogMeta(),
          modifiers: ['blog']
        }
      }
    },
    {
      name: 'cta',
      label: 'Call To Action',
      context: {
        card: {
          title: 'Call to Action',
          text: faker.lorem.sentences(2),
          button: {
            button: {
              modifiers: ['green--dark', 'inline']
            }
          },
          modifiers: ['cta']
        }
      }
    },
    {
      name: 'cta-link',
      label: 'Call To Action (with Link)',
      context: {
        card: {
          title: 'Call to Action',
          text: faker.lorem.sentences(2),
          button: false,
          modifiers: ['cta', 'link']
        }
      }
    },
    {
      name: 'cta-form',
      label: 'Call To Action Form',
      context: {
        card: {
          title: 'Call to Action',
          text: faker.lorem.sentences(2),
          placeholder: faker.lorem.words(3),
          button: {
            button: {
              modifiers: ['green--dark']
            }
          },
          modifiers: ['cta']
        }
      }
    }
  ]
}
