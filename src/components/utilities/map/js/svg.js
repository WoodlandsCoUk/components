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
      const type = region.classList.contains(classes.selected) ? 'remove' : 'add'
      const { update, updateType } = map.dataset

      let methodName

      if (updateType) {
        // Convert the updateType to camelCase which is our method name.
        methodName = updateType.replace('--', ' ').replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase()).replace(/\s+/g, '')
      }

      if (methodName && update && methodName in Methods) {
        // Call a custom method to update the interface.
        Methods[methodName](type, update, region)
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
