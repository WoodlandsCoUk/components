import { tns } from 'tiny-slider/src/tiny-slider'
import PhotoSwipe from 'photoswipe'
import PhotoSwipeUIDefault from 'photoswipe/dist/photoswipe-ui-default'

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
  loop: true,
  autoplay: false,
  rewind: false
}

const photoSwipeConfig = {
  index: 0,
  spacing: 0.1,
  maxSpreadZoom: 2,
  showHideOpacity: true,
  loop: true,
  pinchToClose: true,
  closeOnScroll: true,
  escKey: true,
  arrowKeys: true,
  focus: true,
  modal: true,
  history: false,
  // this should disable the idle hiding of the toolbar
  timeToIdle: 0,
  // this is not currently possible to disable, so we make it very long
  timeToIdleOutside: 100000
}

// Create the HTML from the <template>.
if ('content' in document.createElement('template') && template) {
  document.body.append(template.content.cloneNode(true))
  pswp = document.querySelector('.pswp')
}

const gallery = (carousel, index) => {
  const images = carousel.querySelectorAll('[data-src]')

  // Map the images to build the gallery items.
  const items = Array.from(images).filter(item => !item.dataset.video)
    .filter((item) => {
      return !Array.from(item.classList).includes('tns-slide-cloned')
    }).map((item) => {
      const { src, height, width } = item.dataset
      const description = item.querySelector('.gallery__description')
      const title = description ? description.innerText : ''

      return {
        w: width,
        h: height,
        src,
        title
      }
    })

  console.log(items.length)

  // Enable PhotoSwipe if we have PSWP template, the library and any items.
  if (pswp && PhotoSwipe && items.length) {
    const gallery = new PhotoSwipe(pswp, PhotoSwipeUIDefault, items, {
      ...photoSwipeConfig,
      index,
      getThumbBoundsFn: (index) => {
        const thumbnail = images.item(index)
        const pageYScroll = window.pageYOffset || document.documentElement.scrollTop
        const rect = thumbnail.getBoundingClientRect()

        return {
          x: rect.left,
          y: rect.top + pageYScroll,
          w: rect.width
        }
      }
    })

    gallery.init()
  }
}

// Setup each of the carousel galleries.
carousels.forEach((carousel) => {
  const listContainer = carousel.querySelector('.gallery__list')
  const listImages = listContainer.querySelectorAll('[data-src]')
  const thumbnailContainer = carousel.querySelector('.gallery__thumbnails')
  const thumbnails = thumbnailContainer.querySelectorAll('a')
  const iframes = listContainer.querySelectorAll('iframe')

  // Setup the slider.
  const slider = tns({
    ...carouselConfig,
    container: listContainer
  })

  // Manual navigation for slider using the thumbnails.
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (event) => {
      event.preventDefault()

      const index = Array.from(thumbnails).indexOf(thumbnail)

      slider.goTo(index)
    })
  })

  // Listen to slider changes and pause any video.
  slider.events.on('indexChanged', () => {
    iframes.forEach(iframe => {
      iframe.contentWindow.postMessage('{"event": "command","func": "pauseVideo"}', '*')
    })
  })

  // Clicking of the main images opens the gallery.
  listImages.forEach((image) => {
    image.addEventListener('click', (event) => {
      event.preventDefault()

      const index = Array.from(listImages).indexOf(image)

      gallery(carousel, index)
    })
  })
})
