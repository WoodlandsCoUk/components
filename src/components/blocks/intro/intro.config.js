const itemCount = 3
const items = []

for (let i = 1; i < itemCount + 1; i++) {
  items.push({
    link: false,
    text: `Intro text #${i}`
  })
}

items.push({
  link: '#',
  text: 'Link Intro'
})

module.exports = {
  order: 21,
  title: 'Intro',
  handle: 'block--intro',
  status: 'wip',
  default: 'default',
  context: {
    items
  }
}
