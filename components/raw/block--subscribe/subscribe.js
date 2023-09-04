const forms = document.querySelectorAll('.form--subscribe')

forms.forEach((form) => {
  const tagsContainer = form.querySelector('.tags[data-empty]')
  const tagSelector = '.tag'
  const dismissSelector = '.tag__dismiss.js--dismiss'

  if (tagsContainer) {
    tagsContainer.addEventListener('updated', (event) => {
      const tags = tagsContainer.querySelectorAll('.tag')
      const { empty } = tagsContainer.dataset

      const emptyElement = tagsContainer.querySelector(empty)

      if (emptyElement) {
        if (tags.length === 0) {
          emptyElement.classList.remove('hidden')
        } else {
          emptyElement.classList.add('hidden')
        }
      }
    })

    tagsContainer.addEventListener('click', (event) => {
      const query = tagsContainer.querySelectorAll(dismissSelector)

      if (query) {
        let element = event.target || event.srcElement
        let index = -1

        while (element && ((index = Array.prototype.indexOf.call(query, element)) === -1)) {
          element = element.parentElement
        }

        if (index > -1) {
          const item = element.closest(tagSelector)

          item.dispatchEvent(new CustomEvent('removed'))
          item.remove()

          tagsContainer.dispatchEvent(new CustomEvent('updated', {
            detail: {
              item,
              type: 'remove'
            }
          }))
        }
      }
    })
  }
})
