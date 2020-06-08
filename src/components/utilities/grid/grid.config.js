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
      name: 'two-column',
      label: 'Two Column',
      context: {
        modifiers: ['2']
      }
    },
    {
      name: 'three-column',
      label: 'Three Column',
      context: {
        modifiers: ['3']
      }
    },
    {
      name: 'four-column',
      label: 'Four Column',
      context: {
        modifiers: ['4']
      }
    },
    {
      name: 'two-thirds-column',
      label: 'Two Thirds Column',
      context: {
        modifiers: ['2/3']
      }
    },
  ]
}
