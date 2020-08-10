module.exports = {
  title: 'Sections',
  label: 'Section Blocks',
  handle: 'section',
  status: 'wip',
  default: 'default',
  context: {
    classes: ''
  },
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
      name: 'full',
      label: 'Full Width',
      context: {
        modifiers: ['full']
      }
    },
    {
      name: 'shadow',
      label: 'With Shadow',
      context: {
        modifiers: ['shadow']
      }
    }
  ]
}
