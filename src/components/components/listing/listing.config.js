const faker = require('faker')

const itemCount = 4
const items = []
const buttons = []

for (let i = 0; i < itemCount; i++) {
  items.push({
    text: faker.lorem.sentence(),
    link: '#'
  })

  buttons.push({
    button: {
      text: faker.lorem.sentence(),
      modifiers: ['small']
    }
  })
}

module.exports = {
  order: 10,
  title: 'Listings',
  label: 'Listings',
  handle: 'components--list',
  status: 'wip',
  default: 'default',
  context: {
    title: 'General Listing',
    list: items
  },
  variants: [
    {
      name: 'default',
      label: 'General'
    },
    {
      name: 'link',
      label: 'Linked',
      context: {
        title: 'Linked List',
        modifiers: ['linked']
      }
    },
    {
      name: 'buttons',
      label: 'Buttons',
      context: {
        title: 'Button List',
        list: buttons,
        modifiers: ['buttons']
      }
    },
  ]
}
