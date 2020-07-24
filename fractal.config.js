const path = require('path')
const packageJson = require('./package.json')
const faker = require('./faker.schema') // eslint-disable-line no-unused-vars

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
  nav: ['search', 'docs', 'components', 'information'],
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
  'site-name': packageJson.title,
  navigation: require('./src/data/navigation.js'),
  drawings: require('./src/data/drawings.js')
})
fractal.components.set('default.display', {
  'min-width': '320px'
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

module.exports = fractal
