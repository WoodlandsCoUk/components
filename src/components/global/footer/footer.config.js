const fractal = require('../../../../fractal.config.js')
const _ = require('lodash')

let navigation = []

// Merge navigation and sub navigation in to one list for footer.
fractal.components.get('default.context.navigation').forEach((nav) => {
  if (_.isObject(nav.navigation[0])) {
    nav.navigation.forEach((subNav) => {
      navigation.push(subNav)
    })
  } else {
    navigation.push(nav)
  }
})

// Filter out only main items.
navigation = navigation.filter((navigation) => navigation && navigation.main)

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
    },
    navigation
  }
}
