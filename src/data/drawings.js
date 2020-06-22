const path = require('path')
const fs = require('fs')

const directory = path.join('images', 'drawings')
const localPath = path.join('src', 'assets', directory)
const files = fs.readdirSync(localPath)
const images = []

files.forEach(function (file) {
  const index = file.indexOf('.png')

  if (index >= 0) {
    const fileName = file.substr(0, index)

    images.push({
      name: fileName.toLowerCase(),
      label: fileName.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()),
      context: {
        asset: path.join('/', directory, file)
      }
    })
  }
})

module.exports = images
