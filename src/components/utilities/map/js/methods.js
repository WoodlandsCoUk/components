module.exports = class Methods {
  static link (region, type, reference) {
    const slug = region.getAttribute('key')

    window.location.href = `/buying-a-wood/${slug}`
  }

  static tagDismiss (region, type, reference) {
    const title = region.getAttribute('title')
    const value = region.getAttribute('key')

    let element
    let item

    if (reference) {
      element = document.querySelector(reference)
    }

    const html = `<span class="tag tag--dismiss" data-value="${value}">
      <span class="tag__title">${title}</span>
      <input type="hidden" name="region[]" value="${value}" />
      <button type="button" class="tag__dismiss js--dismiss">⨉</button>
    </span>`

    const itemSelector = `.tag[data-value="${value}"]`

    if (element) {
      if (type === 'add') {
        element.insertAdjacentHTML('beforeend', html)
      }

      item = element.querySelector(itemSelector)

      if (type === 'remove' && item) {
        item.remove()
      }

      // Listen to the "removed" event and update the region accordingly.
      item.addEventListener('removed', () => {
        region.dispatchEvent(new CustomEvent('updated', {
          detail: {
            type: 'remove'
          }
        }))
      })

      // Fire custom event to update the region.
      region.dispatchEvent(new CustomEvent('updated', {
        detail: {
          type
        }
      }))

      // Fire custom event to update the tag list.
      element.dispatchEvent(new CustomEvent('updated', {
        detail: {
          item,
          type
        }
      }))
    }
  }
}
