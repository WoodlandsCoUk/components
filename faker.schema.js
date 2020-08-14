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
        longitude: 51.0618,
        latitude: 0.195558
      },
      {
        longitude: 51.2148,
        latitude: 1.0148
      },
      {
        longitude: 50.9428,
        latitude: 0.637193
      },
      {
        longitude: 51.1072,
        latitude: -1.01212
      },
      {
        longitude: 51.2495,
        latitude: 0.639071
      },
      {
        longitude: 51.1267,
        latitude: 0.017139
      },
      {
        longitude: 51.1065,
        latitude: -1.01441
      },
      {
        longitude: 51.0598,
        latitude: 0.199746
      },
      {
        longitude: 51.1695,
        latitude: 0.286227
      },
      {
        longitude: 51.1684,
        latitude: 0.286625
      },
      {
        longitude: 51.2234,
        latitude: 1.01088
      },
      {
        longitude: 51.2371,
        latitude: 1.1662
      },
      {
        longitude: 51.1073,
        latitude: -1.01361
      },
      {
        longitude: 51.2363,
        latitude: 1.16438
      },
      {
        longitude: 50.853,
        latitude: -0.583575
      },
      {
        longitude: 50.8522,
        latitude: -0.586424
      },
      {
        longitude: 51.1576,
        latitude: 0.348011
      },
      {
        longitude: 51.1564,
        latitude: 0.346766
      },
      {
        longitude: 51.1588,
        latitude: 0.350633
      },
      {
        longitude: 51.234,
        latitude: 1.16485
      },
      {
        longitude: 51.2325,
        latitude: 1.16252
      },
      {
        longitude: 51.2331,
        latitude: 1.16044
      },
      {
        longitude: 51.2296,
        latitude: 0.604271
      },
      {
        longitude: 51.234,
        latitude: 0.601902
      },
      {
        longitude: 51.2322,
        latitude: 0.601613
      },
      {
        longitude: 51.233,
        latitude: 0.604208
      },
      {
        longitude: 51.2342,
        latitude: 0.608671
      },
      {
        longitude: 51.2328,
        latitude: 0.608438
      },
      {
        longitude: 51.2336,
        latitude: 0.610572
      },
      {
        longitude: 51.2164,
        latitude: 1.01703
      },
      {
        longitude: 51.2169,
        latitude: 1.01736
      },
      {
        longitude: 51.2179,
        latitude: 1.01953
      },
      {
        longitude: 51.114,
        latitude: 0.22118
      },
      {
        longitude: 51.0599,
        latitude: 0.190418
      },
      {
        longitude: 51.1155,
        latitude: 0.213422
      },
      {
        longitude: 51.1706,
        latitude: 0.28886
      },
      {
        longitude: 51.1699,
        latitude: 0.28978
      },
      {
        longitude: 51.0998,
        latitude: 0.644051
      },
      {
        longitude: 51.22,
        latitude: 1.0121
      },
      {
        longitude: 50.8505,
        latitude: -0.586818
      },
      {
        longitude: 51.0601,
        latitude: 0.193125
      },
      {
        longitude: 51.0596,
        latitude: 0.19216
      },
      {
        longitude: 51.1283,
        latitude: 0.551742
      },
      {
        longitude: 51.133,
        latitude: -0.242816
      },
      {
        longitude: 51.2751,
        latitude: 0.960194
      },
      {
        longitude: 51.2757,
        latitude: 0.959027
      },
      {
        longitude: 51.2736,
        latitude: 0.95869
      },
      {
        longitude: 51.1196,
        latitude: 0.403002
      },
      {
        longitude: 51.0609,
        latitude: 0.194919
      },
      {
        longitude: 51.1005,
        latitude: 0.641832
      },
      {
        longitude: 51.0992,
        latitude: 0.641774
      },
      {
        longitude: 51.1205,
        latitude: 0.404422
      },
      {
        longitude: 51.1211,
        latitude: 0.406269
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
