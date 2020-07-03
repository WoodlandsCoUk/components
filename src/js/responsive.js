import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const element = document.body
const config = resolveConfig(tailwindConfig)
const keys = Object.keys(config.theme.screens)
const classPrefix = 'mq-'

Object.entries(config.theme.screens).forEach((screen, i) => {
  const [name, size] = screen
  let maxSize = false
  let media = `(min-width: ${size})`

  if (typeof size === 'object' && Object.prototype.hasOwnProperty.call(size, 'raw')) {
    media = size.raw
  } else if (typeof config.theme.screens[keys[i + 1]] === 'string') {
    maxSize = config.theme.screens[keys[i + 1]]
  }

  if (maxSize) {
    media += ` and (max-width: ${maxSize})`
  }

  window.matchMedia(media).addListener((event) => {
    const classes = element.className.split(' ').filter(c => !c.startsWith(classPrefix))
    element.className = classes.join(' ').trim()

    if (event.matches) {
      element.classList.add(classPrefix + name)
    }
  })
})
