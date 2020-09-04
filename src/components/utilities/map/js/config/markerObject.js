module.exports = (latitude, longitude, properties = {}) => {
  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [parseFloat(longitude), parseFloat(latitude)]
    },
    properties
  }
}
