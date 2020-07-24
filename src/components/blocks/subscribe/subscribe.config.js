const regions = [
  // 'Northen Scotland',
  // 'Cornwall',
  // 'West and South Wales and Herefordshire',
  // 'North Wales and The Welsh Marches'
]

module.exports = {
  order: 5,
  title: 'Subscribe Form',
  label: 'Subscribe Form',
  handle: 'block--subscribe',
  status: 'wip',
  default: 'default',
  context: {
    email: {
      label: 'Email*',
      placeholder: 'name@example.com'
    },
    region: {
      label: 'Selected regions*',
      empty: 'Please select at least one region from the map.',
      tags: regions.map((region) => {
        return {
          text: region
        }
      })
    },
    button: {
      button: {
        text: 'Subscribe to email updates',
        link: null,
        modifiers: ['green--dark', 'inline--small']
      }
    },
    policy: {
      text: 'Our email policy',
      link: '#'
    }
  }
}
