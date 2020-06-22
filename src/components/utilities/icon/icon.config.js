module.exports = {
  collated: true,
  title: 'Icon',
  handle: 'icon',
  status: 'wip',
  default: 'default',
  context: {
    icon: {
      icon: 'tick',
      modifiers: ['yellow']
    }
  },
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'medium',
      label: 'Medium',
      context: {
        icon: {
          modifiers: ['medium', 'yellow']
        }
      }
    },
    {
      name: 'large',
      label: 'Large',
      context: {
        icon: {
          modifiers: ['large', 'yellow']
        }
      }
    }
  ]
}
