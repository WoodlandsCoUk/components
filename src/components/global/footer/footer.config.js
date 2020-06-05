module.exports = {
  order: 2,
  title: 'Footer',
  handle: 'layout-footer',
  status: 'ready',
  default: 'default',
  context: {
    footer: {
      org: 'Woodlands.co.uk',
      text: 'Woodland Investment Management Ltd',
      year: new Date().getFullYear()
    },
    social: {
      modifiers: ['medium']
    }
  }
}
