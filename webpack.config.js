const path = require('path')
const webpack = require('webpack')
const globImporter = require('node-sass-glob-importer')
const StylelintPlugin = require('stylelint-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'sass-loader',
            options: {
              sourceMap: process.env.NODE_ENV === 'development',
              prependData: () => {
                const data = [
                  '$env: ' + process.env.NODE_ENV + ';'
                ]

                if (['development', 'production'].includes(process.env.NODE_ENV)) {
                  data.push('@import "../components/dna/**/*.scss";')
                }

                return data.join('')
              },
              sassOptions: {
                outputStyle: process.env.NODE_ENV === 'development' ? 'expanded' : 'compressed',
                importer: globImporter()
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      DEBUG: false,
      MAPBOX_KEY: ''
    }),
    new Dotenv(),
    new StylelintPlugin({
      files: 'src/sass/site.scss'
    })
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      helpers: path.resolve(__dirname, 'src/js/helpers/')
    }
  }
}
