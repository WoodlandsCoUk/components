const tabs = document.querySelectorAll('.tab[data-tab]')
const classes = {
  active: 'tab--active'
}

tabs.forEach((tab) => {
  const nav = tab.querySelector('.tab__navigation')
  const navItems = nav.querySelectorAll('[data-tab-for]')
  const content = tab.querySelector('.tab__items')
  const items = content.querySelectorAll('[data-tab-item]')

  navItems.forEach((item, i) => {
    item.addEventListener('click', (event) => {
      item.classList.add(classes.active)

      Array.from(items).filter((i) => i.dataset.tabItem === item.dataset.tabFor).forEach((i) => {
        i.classList.add(classes.active)

        i.dispatchEvent(new CustomEvent('tabActive'))
      })

      Array.from(navItems).filter((i) => i.dataset.tabFor !== item.dataset.tabFor).forEach((i) => {
        i.classList.remove(classes.active)
      })

      Array.from(items).filter((i) => i.dataset.tabItem !== item.dataset.tabFor).forEach((i) => {
        i.classList.remove(classes.active)

        i.dispatchEvent(new CustomEvent('tabInactive'))
      })
    })

    if (i === 0) {
      item.click()
    }
  })
})
