module.exports = {
  order: 1,
  title: 'Buttons',
  label: 'Buttons',
  handle: 'button',
  status: 'wip',
  default: 'default',
  context: {
    button: {
      text: 'Default Button'
    }
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
        button: {
          text: 'Red Button',
          modifiers: ['red']
        }
      }
    },
    {
      name: 'green',
      label: 'Green',
      context: {
        button: {
          text: 'Green Button',
          modifiers: ['green']
        }
      }
    },
    {
      name: 'yellow',
      label: 'Yellow',
      context: {
        button: {
          text: 'Yellow Button',
          modifiers: ['yellow']
        }
      }
    },
    {
      name: 'inline',
      label: 'Inline (Default)',
      context: {
        button: {
          text: 'Inline Button',
          modifiers: ['inline']
        }
      }
    },
    {
      name: 'inline-red',
      label: 'Inline (Red)',
      context: {
        button: {
          text: 'Inline Button',
          modifiers: ['inline', 'red']
        }
      }
    },
    {
      name: 'inline-green',
      label: 'Inline (Green)',
      context: {
        button: {
          text: 'Inline Button',
          modifiers: ['inline', 'green']
        }
      }
    },
    {
      name: 'inline-yellow',
      label: 'Inline (Yellow)',
      context: {
        button: {
          text: 'Inline Button',
          modifiers: ['inline', 'yellow']
        }
      }
    }
  ]
}
