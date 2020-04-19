document.querySelectorAll('.js--navigation').forEach((item) => {
  item.addEventListener('click', () => {
    document.body.classList.toggle('navigation--shown')
    item.classList.toggle('is-active')
  })
})
