document.querySelectorAll('.hero[data-src]').forEach((hero) => {
  hero.style.backgroundImage = `url(${hero.dataset.src})`
})
