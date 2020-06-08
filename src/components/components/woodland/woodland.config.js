const faker = require('faker')

const items = []
const accordionTitles = [
  'Trees',
  'Wildlife',
  'Access',
  'Footpaths',
  'Features',
  'Acitivites'
]

for (let i = 0; i < accordionTitles.length; i++) {
  items.push({
    title: accordionTitles[i],
    text: faker.lorem.paragraph()
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
    },
    accordion: {
      title: 'Summary',
      items
    }
  }
}
