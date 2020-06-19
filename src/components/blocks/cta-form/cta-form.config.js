module.exports = {
  order: 4,
  title: 'Call to Action Form',
  label: 'Call to Action Form',
  handle: 'block--cta-form',
  status: 'ready',
  default: 'default',
  context: {
    form: {
      label: 'Woodlands for sale for conservation and enjoyment',
      placeholder: 'Enter locations eg. Suffolk'
    },
    button: {
      button: {
        text: 'Search woodlands for sale',
        link: null,
        modifiers: ['green']
      }
    }
  },
  variants: [
    {
      name: 'default',
      label: 'Search'
    },
    {
      name: 'subscribe',
      label: 'Subscribe',
      context: {
        form: {
          label: 'Subscribe to email updates',
          sub: 'Get an email when new woods come on to the market',
          placeholder: 'Enter email address…'
        },
        button: {
          button: {
            text: 'Sign up to mailing list',
            link: null,
            modifiers: ['green']
          }
        }
      }
    },
    {
      name: 'subscribe--alt',
      label: 'Subscribe (Alt)',
      context: {
        form: {
          label: 'Hear about new woodlands first',
          sub: 'Get emailed as soon as new woodlands go on the market',
          placeholder: 'Enter email address…',
          modifiers: ['alt']
        },
        button: {
          button: {
            text: 'Sign up to mailing list',
            link: null,
            modifiers: ['green', 'green--dark']
          }
        }
      }
    }
  ]
}
