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
      name: 'red',
      label: 'Red',
      context: {
        id: 'form__example__checkbox--red',
        name: 'example-checkbox--red',
        modifiers: ['red']
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
      name: 'red--large',
      label: 'Large Red',
      context: {
        id: 'form__example__checkbox--red--large',
        name: 'example-checkbox--large',
        modifiers: ['red', 'large']
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
      name: 'reverse--red',
      label: 'Reversed (Red)',
      context: {
        id: 'form__example__checkbox--red--reverse',
        name: 'example-checkbox--red--reverse',
        modifiers: ['reverse', 'red']
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
      name: 'reverse--red--large',
      label: 'Reversed (Large Red)',
      context: {
        id: 'form__example__checkbox--red--reverse--large',
        name: 'example-checkbox--red--reverse--large',
        modifiers: ['reverse', 'red', 'large']
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
      name: 'standalone--red',
      label: 'Standalone (Red)',
      context: {
        id: 'form__example__checkbox--standalone--red',
        name: 'example-checkbox--standalone--red',
        modifiers: ['standalone', 'red']
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
      name: 'standalone--red-large',
      label: 'Standalone (Red Large)',
      context: {
        id: 'form__example__checkbox--standalone--red-large',
        name: 'example-checkbox--standalone--red-large',
        modifiers: ['standalone', 'red', 'large']
      }
    }
  ]
}
