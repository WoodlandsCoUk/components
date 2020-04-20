module.exports = {
  order: 4,
  title: 'Search',
  handle: 'block--search',
  status: 'ready',
  default: 'default',
  context: {
    search: {
      label: 'Search woods for sale',
      placeholder: 'Enter locations eg. Suffolk'
    },
    button: {
      button: {
        text: 'Search woods for sale',
        modifiers: ['yellow']
      }
    }
  },
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'alt',
      label: 'Alternative',
      context: {
        search: {
          modifiers: ['alt']
        },
        button: {
          button: {
            text: 'Search woods for sale',
            modifiers: ['green']
          }
        }
      }
    }
  ]
}
