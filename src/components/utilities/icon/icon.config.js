module.exports = {
  title: 'Icon',
  handle: 'icon',
  status: 'wip',
  default: 'default',
  context: {
    icon: {
      icon: 'x'
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
          modifiers: ['medium']
        }
      }
    },
    {
      name: 'large',
      label: 'Large',
      context: {
        icon: {
          modifiers: ['large']
        }
      }
    }
  ]
}