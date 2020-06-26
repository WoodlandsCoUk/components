const faker = require('faker')

module.exports = {
  collated: true,
  order: 100,
  title: 'Form Checkbox Switch',
  label: 'Switch',
  handle: 'form--switch',
  status: 'wip',
  default: 'default',
  context: {
    id: 'form__example__checkbox--switch',
    name: 'example-checkbox--switch',
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
    },
    {
      name: 'non-label',
      label: 'No Label',
      context: {
        id: 'form__example__checkbox--non-label',
        name: 'example-checkbox--non-label',
        modifiers: ['non-label']
      }
    }
  ]
}
