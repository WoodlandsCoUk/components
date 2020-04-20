const globImporter = require('node-sass-glob-importer')
const StylelintPlugin = require('stylelint-webpack-plugin')

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

                if (process.env.NODE_ENV === 'development') {
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
    new StylelintPlugin({
      files: 'src/sass/site.scss'
    })
  ],
  resolve: {
    alias: {}
  }
}
