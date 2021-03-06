const facebook = require('simple-icons/icons/facebook')
const youtube = require('simple-icons/icons/youtube')
const instagram = require('simple-icons/icons/instagram')

module.exports = {
  title: 'Social Media Icons',
  label: 'Social Media',
  handle: 'social',
  status: 'ready',
  default: 'default',
  context: {
    icons: [
      {
        ...instagram,
        url: 'https://instagram.com'
      },
      {
        ...youtube,
        url: 'https://youtube.com'
      },
      {
        ...facebook,
        url: 'https://www.facebook.com'
      }
    ]
  },
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'medium',
      label: 'Medium',
      context: {
        modifiers: ['medium']
      }
    },
    {
      name: 'large',
      label: 'Large',
      context: {
        modifiers: ['large']
      }
    }
  ]
}
