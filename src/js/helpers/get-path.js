const getPath = (element) => {
  if (element.id) {
    return '#' + element.id
  }

  if (element.tagName === 'BODY') {
    return ''
  }

  const path = getPath(element.parentNode)

  if (element.className) {
    return path + ' ' + element.tagName.toLowerCase() + '.' + [...element.classList].join('.').replace(/\//g, '\\/')
  }

  return path + ' ' + element.tagName.toLowerCase()
}

module.exports = (element) => getPath(element)
