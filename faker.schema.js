const faker = require('faker')
const { helpers } = require('./fractal.helpers')

// Override the imageUrl faker image function.
faker.image.imageUrl = (width, height, category, randomize, https) => {
  const protocol = typeof https !== 'undefined' && https === true ? 'https://' : 'http://'

  var url = `${protocol}picsum.photos/${width || 640}/${height || 480}`

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
        latitude: 51.0618,
        longitude: 0.195558
      },
      {
        latitude: 51.2148,
        longitude: 1.0148
      },
      {
        latitude: 50.9428,
        longitude: 0.637193
      },
      {
        latitude: 51.1072,
        longitude: -1.01212
      },
      {
        latitude: 51.2495,
        longitude: 0.639071
      },
      {
        latitude: 51.1267,
        longitude: 0.017139
      },
      {
        latitude: 51.1065,
        longitude: -1.01441
      },
      {
        latitude: 51.0598,
        longitude: 0.199746
      },
      {
        latitude: 51.1695,
        longitude: 0.286227
      },
      {
        latitude: 51.1684,
        longitude: 0.286625
      },
      {
        latitude: 51.2234,
        longitude: 1.01088
      },
      {
        latitude: 51.2371,
        longitude: 1.1662
      },
      {
        latitude: 51.1073,
        longitude: -1.01361
      },
      {
        latitude: 51.2363,
        longitude: 1.16438
      },
      {
        latitude: 50.853,
        longitude: -0.583575
      },
      {
        latitude: 50.8522,
        longitude: -0.586424
      },
      {
        latitude: 51.1576,
        longitude: 0.348011
      },
      {
        latitude: 51.1564,
        longitude: 0.346766
      },
      {
        latitude: 51.1588,
        longitude: 0.350633
      },
      {
        latitude: 51.234,
        longitude: 1.16485
      },
      {
        latitude: 51.2325,
        longitude: 1.16252
      },
      {
        latitude: 51.2331,
        longitude: 1.16044
      },
      {
        latitude: 51.2296,
        longitude: 0.604271
      },
      {
        latitude: 51.234,
        longitude: 0.601902
      },
      {
        latitude: 51.2322,
        longitude: 0.601613
      },
      {
        latitude: 51.233,
        longitude: 0.604208
      },
      {
        latitude: 51.2342,
        longitude: 0.608671
      },
      {
        latitude: 51.2328,
        longitude: 0.608438
      },
      {
        latitude: 51.2336,
        longitude: 0.610572
      },
      {
        latitude: 51.2164,
        longitude: 1.01703
      },
      {
        latitude: 51.2169,
        longitude: 1.01736
      },
      {
        latitude: 51.2179,
        longitude: 1.01953
      },
      {
        latitude: 51.114,
        longitude: 0.22118
      },
      {
        latitude: 51.0599,
        longitude: 0.190418
      },
      {
        latitude: 51.1155,
        longitude: 0.213422
      },
      {
        latitude: 51.1706,
        longitude: 0.28886
      },
      {
        latitude: 51.1699,
        longitude: 0.28978
      },
      {
        latitude: 51.0998,
        longitude: 0.644051
      },
      {
        latitude: 51.22,
        longitude: 1.0121
      },
      {
        latitude: 50.8505,
        longitude: -0.586818
      },
      {
        latitude: 51.0601,
        longitude: 0.193125
      },
      {
        latitude: 51.0596,
        longitude: 0.19216
      },
      {
        latitude: 51.1283,
        longitude: 0.551742
      },
      {
        latitude: 51.133,
        longitude: -0.242816
      },
      {
        latitude: 51.2751,
        longitude: 0.960194
      },
      {
        latitude: 51.2757,
        longitude: 0.959027
      },
      {
        latitude: 51.2736,
        longitude: 0.95869
      },
      {
        latitude: 51.1196,
        longitude: 0.403002
      },
      {
        latitude: 51.0609,
        longitude: 0.194919
      },
      {
        latitude: 51.1005,
        longitude: 0.641832
      },
      {
        latitude: 51.0992,
        longitude: 0.641774
      },
      {
        latitude: 51.1205,
        longitude: 0.404422
      },
      {
        latitude: 51.1211,
        longitude: 0.406269
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
