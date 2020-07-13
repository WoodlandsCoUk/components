const Methods = require('./methods.js')

const maps = document.querySelectorAll('[data-map-svg]')

const classes = {
  selected: 'selected'
}

maps.forEach((map) => {
  const key = map.querySelector('.map__key')
  const regions = map.querySelectorAll('[title][key]')

  regions.forEach((region) => {
    region.addEventListener('click', (event) => {
      const action = region.classList.contains(classes.selected) ? 'remove' : 'add'
      const { reference, type } = map.dataset

      let methodName

      if (type) {
        // Convert the type to camelCase which is our method name.
        methodName = type.replace('--', ' ').replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase()).replace(/\s+/g, '')
      }

      if (methodName && reference && methodName in Methods) {
        // Call a custom method to update the interface.
        Methods[methodName](action, reference, region)
      }
    })

    region.addEventListener('mouseenter', (event) => {
      if (key) {
        key.innerHTML = region.getAttribute('title')
      }
    })

    region.addEventListener('mouseleave', (event) => {
      if (key) {
        key.innerHTML = ''
      }
    })

    // Custom event for the region, to listen when it is updated.
    region.addEventListener('updated', (event) => {
      if (event.detail.type === 'add') {
        region.classList.add(classes.selected)
      } else {
        region.classList.remove(classes.selected)
      }
    })
  })
})
