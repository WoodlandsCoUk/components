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

const tabSections = {
  description: {
    title: 'Description',
    content: 'Description'
  },
  maps: {
    title: 'Maps',
    content: 'Maps'
  },
  directions: {
    title: 'Directions',
    content: 'Directions'
  }
}

for (let i = 0; i < accordionTitles.length; i++) {
  items.push({
    title: accordionTitles[i],
    text: faker.lorem.paragraph()
  })
}

for (const [key, button] of Object.entries(tabSections)) {
  buttons.push({
    uuid: key,
    text: button.title,
    modifiers: ['small', 'inline', 'green', 'green--outline']
  })

  tabs.push({
    uuid: key,
    title: button.title,
    content: button.content
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
      button: false
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
    modal: {
      uuid: faker.random.uuid(),
      title: 'Visit Woodland',
      intro: faker.lorem.paragraphs(2),
      extra: faker.lorem.sentences(3),
      modifiers: ['small'],
      pdf: {
        button: {
          text: 'Download PDF Details',
          modifiers: ['green']
        }
      },
      print: {
        button: {
          text: 'Print PDF Details',
          modifiers: ['green--dark']
        }
      }
    },
    tab: {
      tabs,
      nav: buttons
    },
    description: {
      content: tabSections.description.content
    },
    maps: {
      content: tabSections.maps.content
    },
    directions: {
      content: tabSections.directions.content
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
