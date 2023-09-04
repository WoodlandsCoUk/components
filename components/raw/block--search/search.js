const searchForms = document.querySelectorAll('.form--search[data-search]')

searchForms.forEach(searchForm => {
  const toggle = searchForm.querySelector('.button--toggle')
  const form = searchForm.querySelector('.form__inner')

  const html = '<button class="button button--close" type="button">×</button>'

  form.insertAdjacentHTML('beforeend', html)

  toggle.addEventListener('click', event => {
    event.preventDefault()

    searchForm.classList.add('form--search--shown')
  })

  const close = searchForm.querySelector('.button--close')

  close.addEventListener('click', event => {
    event.preventDefault()

    searchForm.classList.remove('form--search--shown')
  })
})
