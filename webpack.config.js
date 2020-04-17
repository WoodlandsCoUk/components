const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  module: {},
  plugins: [
    new StylelintPlugin({
      files: 'src/sass/site.scss'
    })
  ],
  resolve: {
    alias: {}
  }
}
