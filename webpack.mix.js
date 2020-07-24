const mix = require('laravel-mix')
const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const webpackConfig = require('./webpack.config')

/*
 | — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
 | Mix Asset Management
 | — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig(webpackConfig)

mix.setPublicPath('public')

mix.sass('src/sass/site.scss', 'css/site.css')
  .options({
    processCssUrls: false,
    postCss: [
      tailwindcss('./tailwind.config.js'),
      autoprefixer({
        grid: 'autoplace',
        supports: true
      })
    ]
  })

mix.js('src/js/site.js', 'js').extract([
  'accordion-js',
  'tiny-slider',
  'photoswipe',
  'mapbox-gl'
])

mix.copyDirectory('src/assets/', 'public')
mix.copy('node_modules/photoswipe/dist/default-skin/', 'public/css/')
