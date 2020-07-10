const dismissElements = document.querySelectorAll('.js--dismiss')

dismissElements.forEach((dismiss) => {
  const tag = dismiss.closest('.tag')

  dismiss.addEventListener('click', (event) => {
    tag.remove()
  })
})
