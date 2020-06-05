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
      media: {
        src: faker.image.imageUrl(400, 225, 'nature', true),
        modifiers: []
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
          text: faker.random.arrayElement([
            'About 5 ½ acres',
            'Almost 4 acres',
            'About 3 ¼ acres'
          ]),
          link: 'page-wood',
          location: [
            `NR. ${faker.address.streetName()}`,
            faker.address.city(),
            faker.address.county()
          ].join(', '),
          banner: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(faker.random.number()).slice(0, -3)
        }
      }
    }
  ]
}
