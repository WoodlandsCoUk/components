const faker = require('faker')

module.exports = {
  collated: true,
  order: 20,
  title: 'Form Checkbox',
  label: 'Checkbox',
  handle: 'form--checkbox',
  status: 'wip',
  default: 'default',
  context: {
    id: 'form__example__checkbox',
    name: 'example-checkbox',
    label: faker.lorem.words(3)
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
        id: 'form__example__checkbox--reverse',
        name: 'example-checkbox--reverse',
        modifiers: ['reverse']
      }
    }
  ]
}
