const path = require('path')
const faker = require('faker')
const packageJson = require('./package.json')

const paths = {
  build: path.join(__dirname, 'build'),
  src: path.join(__dirname, 'src'),
  static: path.join(__dirname, 'public'),
  components: path.join(__dirname, 'src', 'components'),
  docs: path.join(__dirname, 'src', 'docs')
}

/* Create a new Fractal instance and export it for use elsewhere if required. */
const fractal = (module.exports = require('@frctl/fractal').create())

// Theme configuration.
const theme = require('@frctl/mandelbrot')({
  skin: 'black',
  styles: ['default'],
  lang: 'en-gb',
  nav: ['docs', 'components'],
  panels: ['notes', 'html', 'view', 'info'],
  favicon: '/favicon.ico'
})

// Setup handlebar helpers.
const hbs = require('@frctl/handlebars')(require('./fractal.helpers'))

/* Set the title of the project. */
fractal.set('project.title', packageJson.title)

/* Component Setup */
fractal.components.engine(hbs)
fractal.components.set('path', paths.components)
fractal.components.set('default.preview', '@preview')
fractal.components.set('default.status', 'wip')
fractal.components.set('ext', '.hbs')
fractal.components.set('default.context', {
  'site-name': packageJson.title
})

/* Documentation */
fractal.docs.set('path', paths.docs)
fractal.docs.set('default.status', 'draft')
fractal.docs.set('ext', '.md')

/* Specify a directory of static assets. */
fractal.web.set('static.path', paths.static)

/* Set the static HTML build destination. */
fractal.web.set('builder.dest', paths.build)

/* Set the theme. */
fractal.web.theme(theme)

// Override the default faker image URL.
faker.image.imageUrl = function (width, height, category, randomize, https) {
  const protocol = typeof https !== 'undefined' && https === true ? 'https://' : 'http://'

  var url = `${protocol}placeimg.com/${width || 640}/${height || 480}`

  if (typeof category !== 'undefined') {
    url += '/' + category
  }

  if (randomize) {
    url += '?' + faker.random.number()
  }

  return url
}
