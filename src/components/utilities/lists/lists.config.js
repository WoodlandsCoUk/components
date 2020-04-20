const make = 4
const items = []

for (let i = 1; i < make + 1; i++) {
  items.push(`List Item #${i}`)
}

module.exports = {
  title: 'Lists',
  label: 'Lists',
  handle: 'list',
  status: 'wip',
  default: 'unordered',
  context: {
    list: {
      items: items
    }
  },
  variants: [
    {
      name: 'unordered',
      label: 'Un-Ordered'
    },
    {
      name: 'ordered',
      label: 'Ordered',
      context: {
        list: {
          modifiers: ['ordered']
        }
      }
    },
    {
      name: 'unstyled',
      label: 'Un-Styled',
      context: {
        list: {
          modifiers: ['unstyled']
        }
      }
    }
  ]
}
