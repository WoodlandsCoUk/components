module.exports = {
  title: 'Sections',
  label: 'Section Blocks',
  handle: 'section',
  status: 'wip',
  default: 'default',
  context: {},
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'yellow',
      label: 'Yellow',
      context: {
        modifiers: ['bg-yellow']
      }
    },
    {
      name: 'red',
      label: 'Red',
      context: {
        modifiers: ['bg-red']
      }
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
