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
      name: 'green',
      label: 'Green',
      context: {
        id: 'form__example__checkbox--green',
        name: 'example-checkbox--green',
        modifiers: ['green']
      }
    },
    {
      name: 'large',
      label: 'Large',
      context: {
        id: 'form__example__checkbox--large',
        name: 'example-checkbox--large',
        modifiers: ['large']
      }
    },
    {
      name: 'green--large',
      label: 'Large Green',
      context: {
        id: 'form__example__checkbox--green--large',
        name: 'example-checkbox--large',
        modifiers: ['green', 'large']
      }
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
      name: 'reverse--green',
      label: 'Reversed (Green)',
      context: {
        id: 'form__example__checkbox--green--reverse',
        name: 'example-checkbox--green--reverse',
        modifiers: ['reverse', 'green']
      }
    },
    {
      name: 'reverse--large',
      label: 'Reverse (Large)',
      context: {
        id: 'form__example__checkbox--reverse--large',
        name: 'example-checkbox--reverse--large',
        modifiers: ['reverse', 'large']
      }
    },
    {
      name: 'reverse--green--large',
      label: 'Reversed (Large Green)',
      context: {
        id: 'form__example__checkbox--green--reverse--large',
        name: 'example-checkbox--green--reverse--large',
        modifiers: ['reverse', 'green', 'large']
      }
    },
    {
      name: 'standalone',
      label: 'Standalone',
      context: {
        id: 'form__example__checkbox--standalone',
        name: 'example-checkbox--standalone',
        modifiers: ['standalone']
      }
    },
    {
      name: 'standalone--green',
      label: 'Standalone (Green)',
      context: {
        id: 'form__example__checkbox--standalone--green',
        name: 'example-checkbox--standalone--green',
        modifiers: ['standalone', 'green']
      }
    },
    {
      name: 'standalone--large',
      label: 'Standalone (Large)',
      context: {
        id: 'form__example__checkbox--standalone--large',
        name: 'example-checkbox--standalone--large',
        modifiers: ['standalone', 'large']
      }
    },
    {
      name: 'standalone--green-large',
      label: 'Standalone (Green Large)',
      context: {
        id: 'form__example__checkbox--standalone--green-large',
        name: 'example-checkbox--standalone--green-large',
        modifiers: ['standalone', 'green', 'large']
      }
    }
  ]
}
