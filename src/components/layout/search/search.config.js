module.exports = {
  order: 4,
  title: 'Search',
  handle: 'layout-search',
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
        modifiers: ['red']
      }
    }
  }
}
