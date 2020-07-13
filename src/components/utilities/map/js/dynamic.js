const maps = document.querySelectorAll('[data-map]')

maps.forEach((map) => {
  const { type } = map.dataset

  console.log('Map:', map, type)
})
