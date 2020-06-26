import { tns } from 'tiny-slider/src/tiny-slider'

const carousels = document.querySelectorAll('.gallery--carousel')

const config = {
  axis: 'horizontal',
  items: 1,
  slideBy: 'page',
  controls: true,
  controlsPosition: 'top',
  controlsText: ['Previous', 'Next'],
  nav: true,
  navPosition: 'bottom',
  mouseDrag: true,
  arrowKeys: true,
  autoplay: false,
  loop: false,
  rewind: false
}

carousels.forEach((carousel) => {
  const listContainer = carousel.querySelector('.gallery__list')
  const listImages = listContainer.querySelectorAll('[data-src]')
  const thumbnailContainer = carousel.querySelector('.gallery__thumbnails')
  const thumbnails = thumbnailContainer.querySelectorAll('a')

  const slider = tns({
    ...config,
    container: listContainer
  })

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (event) => {
      event.preventDefault()

      const index = Array.from(thumbnails).indexOf(thumbnail)

      slider.goTo(index)
    })
  })

  listImages.forEach((image) => {
    image.addEventListener('click', (event) => {
      event.preventDefault()

      // const { src } = image.dataset
    })
  })
})
