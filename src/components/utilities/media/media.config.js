const faker = require('faker')

const itemCount = 4
const items = []

for (let i = 1; i < itemCount + 1; i++) {
  items.push(`List Item #${i}`)
}

module.exports = {
  title: 'Media',
  label: 'Media',
  handle: 'media',
  status: 'wip',
  default: 'default',
  context: {
    media: {
      src: faker.image.imageUrl(400, 225, 'nature', true),
      video: false,
      modifiers: []
    }
  },
  variants: [
    {
      name: 'default',
      label: 'Default',
      context: {
        media: {
          modifiers: ['image']
        }
      }
    },
    {
      name: 'widescreen',
      label: 'Widescreen',
      context: {
        media: {
          modifiers: ['widescreen']
        }
      }
    },
    {
      name: 'wide',
      label: 'Wide',
      context: {
        media: {
          modifiers: ['wide']
        }
      }
    },
    {
      name: 'square',
      label: 'Square',
      context: {
        media: {
          modifiers: ['square']
        }
      }
    },
    {
      name: 'video',
      label: 'Video',
      context: {
        media: {
          video: 'http://www.youtube.com/embed/dP15zlyra3c?html5=1&enablejsapi=1',
          modifiers: ['video']
        }
      }
    }
  ]
}
