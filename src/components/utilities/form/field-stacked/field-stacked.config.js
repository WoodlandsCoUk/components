const faker = require('faker')

const optionCount = 6
const options = []

for (let i = 0; i < optionCount; i++) {
  options.push({
    value: i,
    text: faker.lorem.words(3)
  })
}

module.exports = {
  collated: true,
  order: 1,
  title: 'Form Fields (Stacked)',
  label: 'Fields (Stacked)',
  handle: 'form--field--stacked',
  status: 'wip',
  default: 'text',
  context: {
    id: 'form__example__field',
    name: 'example-field',
    label: faker.lorem.words(3),
    type: 'text',
    placeholder: 'Placeholder',
    modifiers: ['stacked']
  },
  variants: [
    {
      name: 'text',
      label: 'Text',
      context: {
        label: 'Text Field'
      }
    },
    {
      name: 'password',
      label: 'Password',
      context: {
        label: 'Password Field',
        id: 'form__example__field--password',
        name: 'example-field--password',
        type: 'password'
      }
    },
    {
      name: 'number',
      label: 'Number',
      context: {
        label: 'Number Field',
        id: 'form__example__field--number',
        name: 'example-field--number',
        type: 'number'
      }
    },
    {
      name: 'select',
      label: 'Select',
      context: {
        label: 'Select Field',
        id: 'form__example__field--select',
        name: 'example-field--select',
        type: 'select',
        options
      }
    }
  ]
}
