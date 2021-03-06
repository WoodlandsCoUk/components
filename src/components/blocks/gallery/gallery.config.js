const fs = require('fs')
const path = require('path')
const faker = require('faker')

const width = 1156
const height = 650
const carouselCount = 10
const itemCount = 6
const items = []
const squareItems = []
const carousel = []

for (let i = 0; i < itemCount; i++) {
  items.push({
    media: {
      src: faker.image.imageUrl(400, 225, 'nature', true),
      modifiers: []
    }
  })
}

for (let i = 0; i < itemCount; i++) {
  squareItems.push({
    media: {
      src: faker.image.imageUrl(400, 225, 'nature', true),
      modifiers: ['square']
    }
  })
}

for (let i = 0; i < carouselCount; i++) {
  carousel.push({
    text: faker.lorem.sentence(),
    gallery: {
      media: {
        src: faker.image.imageUrl(width, height, 'nature', true),
        width,
        height,
        modifiers: []
      }
    },
    thumbnail: {
      media: {
        src: faker.image.imageUrl(400, 225, 'nature', true),
        video: false,
        modifiers: []
      }
    }
  })
}

carousel.push({
  gallery: {
    media: {
      src: 'http://www.youtube.com/embed/dP15zlyra3c?html5=1',
      video: 'http://www.youtube.com/embed/dP15zlyra3c?html5=1&enablejsapi=1',
      modifiers: ['video']
    }
  },
  thumbnail: {
    media: {
      src: faker.image.imageUrl(400, 225, 'nature', true),
      video: false,
      modifiers: []
    }
  }
})

const template = fs.readFileSync(path.resolve(__dirname, 'photoswipe.html'), 'utf8')

module.exports = {
  order: 5,
  title: 'Gallery',
  handle: 'block--gallery',
  status: 'wip',
  default: 'default',
  context: {
    gallery: items,
    template
  },
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'square',
      label: 'Square',
      context: {
        gallery: squareItems
      }
    },
    {
      name: 'carousel',
      label: 'Carousel',
      context: {
        gallery: carousel,
        modifiers: ['carousel']
      }
    }
  ]
}
