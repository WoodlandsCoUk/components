const faker = require('faker')

const fieldCount = 6
const fields = []
const reverse = []
const inline = []

for (let i = 0; i < fieldCount; i++) {
  fields.push({
    id: `form__example__radio--${i}`,
    label: faker.lorem.words(3)
  })

  reverse.push({
    id: `form__example__radio--${i}--reverse`,
    label: faker.lorem.words(3)
  })

  inline.push({
    id: `form__example__radio--${i}--inline`,
    label: faker.lorem.words(3)
  })
}

module.exports = {
  collated: true,
  order: 20,
  title: 'Form Radio',
  label: 'Radio',
  handle: 'form--radio',
  status: 'wip',
  default: 'default',
  context: {
    name: 'example-radio',
    radios: fields
  },
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'reverse',
      label: 'Reverse',
      context: {
        name: 'example-radio--reverse',
        radios: reverse,
        modifiers: ['reverse']
      }
    },
    {
      name: 'inline',
      label: 'Inline',
      context: {
        name: 'example-radio--inline',
        radios: inline,
        modifiers: ['inline']
      }
    }
  ]
}
