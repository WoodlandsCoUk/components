const selector = document.querySelectorAll('.read-more[data-show][data-hide]')

selector.forEach((block) => {
  const toggle = block.querySelector('.read-more__toggle button')
  const showText = block.dataset.show
  const hideText = block.dataset.hide

  toggle.addEventListener('click', (event) => {
    let text = hideText

    event.preventDefault()

    if (block.classList.contains('read-more--visible')) {
      text = showText
    }

    toggle.textContent = text
    block.classList.toggle('read-more--visible')
  })
})
