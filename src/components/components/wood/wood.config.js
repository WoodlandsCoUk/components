const faker = require('faker')

module.exports = {
  order: 10,
  title: 'Wood',
  label: 'Wood',
  handle: 'components--wood',
  status: 'wip',
  default: 'default',
  context: {
    wood: {
      text: faker.lorem.paragraphs(5)
    },
    more: {
      button: {
        text: 'Read more',
        modifiers: ['small']
      }
    },
    visit: {
      button: {
        text: 'Visit this woodland',
        modifiers: ['green']
      }
    },
    pdf: {
      button: {
        text: 'Download PDF Details',
        modifiers: ['green']
      }
    },
    buttons: {
      description: {
        button: {
          text: 'Description',
          modifiers: ['small', 'inline']
        }
      },
      maps: {
        button: {
          text: 'Maps',
          modifiers: ['small', 'inline']
        }
      },
      directions: {
        button: {
          text: 'Directions',
          modifiers: ['small', 'inline']
        }
      }
    }
  }
}
