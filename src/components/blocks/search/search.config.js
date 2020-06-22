module.exports = {
  order: 2,
  title: 'Search',
  label: 'Search',
  handle: 'block--search',
  status: 'wip',
  default: 'default',
  context: {
    options: [
      'Woodland',
      'Mixed Deciduous',
      'Coniferous',
      'Coppice',
      'Ancient Woodland'
    ],
    button: {
      button: {
        text: 'Search',
        link: null,
        modifiers: ['green', 'inline']
      }
    }
  }
}
