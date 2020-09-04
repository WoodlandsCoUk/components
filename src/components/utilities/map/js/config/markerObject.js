module.exports = (latitude, longitude, properties = {}) => {
  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [parseFloat(latitude), parseFloat(longitude)]
    },
    properties
  }
}
