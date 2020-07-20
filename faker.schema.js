const faker = require('faker')
const { helpers } = require('./fractal.helpers')

// Override the imageUrl faker image function.
faker.image.imageUrl = (width, height, category, randomize, https) => {
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

// Setup woodlands.co.uk specific fake data.
faker.woodland = {
  acre: () => {
    return faker.random.arrayElement([
      'About 5 ½ acres',
      'Almost 4 acres',
      'About 3 ¼ acres'
    ])
  },
  meta: () => {
    return [
      `NR. ${faker.address.streetName()}`,
      faker.address.city(),
      faker.address.county()
    ].join(', ')
  },
  coordinates: () => {
    return faker.random.arrayElement([
      {
        longitude: 52.5248441,
        latitude: -2.5737944
      },
      {
        longitude: 52.6016074,
        latitude: -2.3530738
      }
    ])
  },
  blogMeta: () => {
    return [
      faker.name.firstName(),
      helpers.date(faker.date.recent(), 'd/m/Y'),
      `${faker.random.number()} comments`
    ].join(', ')
  }
}

module.exports = faker
