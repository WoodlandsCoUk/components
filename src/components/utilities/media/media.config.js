const make = 4
const items = []

for (let i = 1; i < make + 1; i++) {
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
      src: 'http://placehold.it/450x300/333'
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
          video: 'http://www.youtube.com/embed/dP15zlyra3c?html5=1',
          modifiers: ['video']
        }
      }
    }
  ]
}
