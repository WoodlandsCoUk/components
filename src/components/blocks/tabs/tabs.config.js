const faker = require('faker')

const itemCount = 4
const buttons = []
const tabs = []

for (let i = 0; i < itemCount; i++) {
  const uuid = faker.random.uuid()
  const title = faker.lorem.words()

  buttons.push({
    uuid,
    text: title,
    modifiers: ['small', 'green', 'green--outline']
  })

  tabs.push({
    uuid,
    title,
    content: faker.lorem.sentences(5)
  })
}

module.exports = {
  order: 30,
  title: 'Tabs',
  label: 'Tabs',
  handle: 'block--tabs',
  status: 'wip',
  default: 'default',
  context: {
    tab: {
      uuid: faker.random.uuid(),
      tabs,
      nav: buttons
    }
  }
}
