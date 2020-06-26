import { tns } from 'tiny-slider/src/tiny-slider'
import PhotoSwipe from 'photoswipe'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'

const carousels = document.querySelectorAll('.gallery--carousel')
const template = document.querySelector('#photoswipe')
let pswp

const carouselConfig = {
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

const photoSwipeConfig = {
  index: 0
}

if ('content' in document.createElement('template') && template) {
  document.body.append(template.content.cloneNode(true))
  pswp = document.querySelector('.pswp')
}

carousels.forEach((carousel) => {
  const listContainer = carousel.querySelector('.gallery__list')
  const listImages = listContainer.querySelectorAll('[data-src]')
  const thumbnailContainer = carousel.querySelector('.gallery__thumbnails')
  const thumbnails = thumbnailContainer.querySelectorAll('a')

  const slider = tns({
    ...carouselConfig,
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

  if (pswp && PhotoSwipe) {
    const items = []

    const gallery = new PhotoSwipe(pswp, PhotoSwipeUI_Default, items, {
      ...photoSwipeConfig
    })

    console.log('PhotoSwipe gallery', gallery, photoSwipeConfig, items)
    gallery.init()
  }
})
