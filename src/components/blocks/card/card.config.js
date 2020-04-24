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
      category: faker.address.county(),
      media: {
        src: faker.image.imageUrl(400, 225, 'nature', true)
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
          category: faker.address.county(),
          banner: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(faker.random.number()).slice(0, -3)
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
          video: 'http://www.youtube.com/embed/dP15zlyra3c?html5=1'
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
          link: 'https://www.woodlands.co.uk'
        }
      }
    }
  ]
}
