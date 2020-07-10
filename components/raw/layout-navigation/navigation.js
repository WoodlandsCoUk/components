import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../../tailwind.config.js'

const config = resolveConfig(tailwindConfig)
const media = `(min-width: ${config.theme.screens.nav})`

const navigation = document.querySelector('.navigation')
const listItems = navigation.querySelectorAll('li')
const classes = {
  toggle: 'is-active',
  shown: 'navigation--shown',
  active: 'navigation__item--is-active'
}

// Toggle the visibilty of the navigation.
document.querySelectorAll('.js--navigation').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle(classes.shown)
    toggle.classList.toggle(classes.toggle)

    // Reset the sub-navigations, making sure they're closed.
    listItems.forEach((listItem) => {
      listItem.classList.remove(classes.active)
    })
  })
})

// Bind click events for mobile navigation.
listItems.forEach((listItem) => {
  listItem.querySelector('a').addEventListener('click', (event) => {
    const sub = listItem.querySelector('ul')
    const isActive = listItem.classList.contains(classes.active)

    if (sub) {
      // Only restrict click event if on mobile layout.
      if (!window.matchMedia(media).matches) {
        event.preventDefault()
      }

      if (isActive) {
        listItem.classList.remove(classes.active)
      } else {
        listItem.classList.add(classes.active)
      }
    }
  })
})
