const faker = require('faker')

const items = []
const tabs = []
const buttons = []

const accordionTitles = [
  'Trees',
  'Wildlife',
  'Access',
  'Footpaths',
  'Features',
  'Acitivites'
]

const buttonTitles = [
  'Description',
  'Maps',
  'Directions'
]

for (let i = 0; i < accordionTitles.length; i++) {
  items.push({
    title: accordionTitles[i],
    text: faker.lorem.paragraph()
  })
}

for (let i = 0; i < buttonTitles.length; i++) {
  buttons.push({
    uuid: i,
    text: buttonTitles[i],
    modifiers: ['small', 'inline', 'green', 'green--outline']
  })

  tabs.push({
    uuid: i,
    title: buttonTitles[i],
    text: buttonTitles[i] // render '@block--accordion'
  })
}

module.exports = {
  order: 10,
  title: 'Woodland',
  label: 'Woodland',
  handle: 'components--woodland',
  status: 'wip',
  default: 'default',
  context: {
    lede: faker.lorem.paragraph(3),
    'read-more': {
      text: faker.lorem.paragraphs(6),
      button: {
        button: {
          text: 'Read more',
          modifiers: ['small']
        }
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
        modifiers: ['green--dark']
      }
    },
    tab: {
      tabs,
      nav: buttons
    },
    buttons: {
      description: {
        button: {
          text: 'Description',
          modifiers: ['small', 'inline', 'green', 'green--outline']
        }
      },
      maps: {
        button: {
          text: 'Maps',
          modifiers: ['small', 'inline', 'green', 'green--outline']
        }
      },
      directions: {
        button: {
          text: 'Directions',
          modifiers: ['small', 'inline', 'green', 'green--outline']
        }
      }
    },
    accordion: {
      title: 'Summary',
      items
    }
  }
}
