const options = [
  'Woodland',
  'Mixed Deciduous',
  'Coniferous',
  'Coppice',
  'Ancient Woodland'
].map((text) => {
  return {
    value: text.toLowerCase(),
    text
  }
})

module.exports = {
  order: 2,
  title: 'Search',
  label: 'Search',
  handle: 'block--search',
  status: 'wip',
  default: 'default',
  context: {
    title: 'Search for woodlands',
    fields: {
      location: {
        id: 'form__search_location',
        name: 'location',
        label: 'Location',
        placeholder: 'Enter location / postcode'
      },
      type: {
        id: 'form__search_type',
        name: 'type',
        label: 'Type',
        type: 'select',
        options
      },
      sold: {
        id: 'form__search_sold',
        name: 'sold',
        label: 'Show Sold',
        modifiers: ['reverse']
      }
    },
    button: {
      button: {
        text: 'Search',
        link: null,
        modifiers: ['green', 'inline']
      }
    }
  },
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'alt',
      label: 'Alternative',
      context: {
        button: {
          button: {
            text: 'Search',
            link: null,
            modifiers: ['red', 'inline']
          }
        },
        modifiers: ['alt']
      }
    },
    {
      name: 'simple',
      label: 'Simple',
      context: {
        button: {
          button: {
            text: 'Search',
            link: null,
            modifiers: ['red', 'inline']
          }
        },
        modifiers: ['simple']
      }
    }
  ]
}
