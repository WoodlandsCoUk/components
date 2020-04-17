const path = require('path')
const packageJson = require('./package.json')

/* Create a new Fractal instance and export it for use elsewhere if required. */
const fractal = (module.exports = require('@frctl/fractal').create())

// Theme configuration.
const theme = require('@frctl/mandelbrot')({
  lang: 'en-gb',
  nav: ['docs', 'components'],
  panels: ['notes', 'html', 'view', 'info']
})

// Setup handlebar helpers.
const hbs = require('@frctl/handlebars')(require('./fractal.helpers'))

/* Set the title of the project. */
fractal.set('project.title', packageJson.title)

/* Component Setup */
fractal.components.engine(hbs)
fractal.components.set('path', path.join(__dirname, 'src', 'components'))
fractal.components.set('default.preview', '@preview')
fractal.components.set('default.status', 'wip')
fractal.components.set('ext', '.hbs')
fractal.components.set('default.context', {
  'site-name': packageJson.title
})

/* Documentation */
fractal.docs.set('path', path.join(__dirname, 'src', 'docs'))
fractal.docs.set('default.status', 'draft')
fractal.docs.set('ext', '.md')

/* Specify a directory of static assets. */
fractal.web.set('static.path', path.join(__dirname, 'public'))

/* Set the static HTML build destination. */
fractal.web.set('builder.dest', path.join(__dirname, 'build'))

/* Set the theme. */
fractal.web.theme(theme)
