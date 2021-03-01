// https://stackoverflow.com/a/59893445
module.exports = (markers) => {
  let w, s, e, n

  markers.forEach(marker => {
    const [lng, lat] = marker.geometry.coordinates

    if (w === undefined) {
      n = s = lat
      w = e = lng
    }

    if (lat > n) {
      n = lat
    } else if (lat < s) {
      s = lat
    }

    if (lng > e) {
      e = lng
    } else if (lng < w) {
      w = lng
    }
  })

  return [
    [w, s],
    [e, n]
  ]
}
