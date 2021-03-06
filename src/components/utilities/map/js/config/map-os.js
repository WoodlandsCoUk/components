const { osApiKey } = require('./env')

const baseUrl = 'https://api.os.uk/maps/vector/v1/vts'

module.exports = {
  style: `${baseUrl}/resources/styles?key=${osApiKey}`,
  transformRequest: url => {
    if (url.includes('?')) {
      url += '&srs=3857'
    }

    return {
      url
    }
  }
}
