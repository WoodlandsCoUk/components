module.exports = {
  title: 'Grid',
  label: 'Grid',
  handle: 'grid',
  status: 'wip',
  default: 'default',
  context: {},
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'narrow',
      label: 'Narrow',
      context: {
        modifiers: ['narrow']
      }
    },
    {
      name: 'full',
      label: 'Full Width',
      context: {
        modifiers: ['full']
      }
    }
  ]
}
