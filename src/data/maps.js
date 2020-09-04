const path = require('path')
const fs = require('fs')

const directory = path.join('images', 'maps')
const localPath = path.join('src', 'assets', directory)
const files = fs.readdirSync(localPath)
const images = []

files.forEach(function (file) {
  const index = file.indexOf('.gif')

  if (index >= 0) {
    const fileName = file.substr(0, index)

    images.push({
      name: fileName.toLowerCase(),
      link: path.join('/', directory, file),
      src: path.join('/', directory, file)
    })
  }
})

module.exports = images
