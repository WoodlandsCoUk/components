const header = document.querySelector('.header')
const navigationSearch = header.querySelector('.form--search')
const navigationSearchToggle = header.querySelector('.js--navigation-search')

if (navigationSearch && navigationSearchToggle) {
  navigationSearchToggle.addEventListener('click', (event) => {
    event.preventDefault()

    navigationSearch.classList.toggle('is-shown')
  })
}
