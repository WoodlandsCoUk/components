module.exports = {
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
      name: 'red--outline',
      label: 'Red (Outline)',
      context: {
        button: {
          text: 'Red Button',
          modifiers: ['red', 'red--outline']
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
      name: 'green--dark',
      label: 'Green (Dark)',
      context: {
        button: {
          text: 'Dark Green Button',
          modifiers: ['green-dark']
        }
      }
    },
    {
      name: 'green--outline',
      label: 'Green (Outline)',
      context: {
        button: {
          text: 'Green Button',
          modifiers: ['green', 'green--outline']
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
      name: 'yellow--outline',
      label: 'Yellow (Outline)',
      context: {
        button: {
          text: 'Yellow Button',
          modifiers: ['yellow', 'yellow--outline']
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
