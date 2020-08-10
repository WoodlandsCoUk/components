module.exports = {
  collated: true,
  title: 'Buttons',
  label: 'Buttons',
  handle: 'button',
  status: 'wip',
  default: 'default',
  context: {
    button: {
      text: 'Default Button',
      link: null,
      classes: ''
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
          link: null,
          modifiers: ['red']
        }
      }
    },
    {
      name: 'red--dark',
      label: 'Red (Dark)',
      context: {
        button: {
          text: 'Dark Red Button',
          link: null,
          modifiers: ['red--dark']
        }
      }
    },
    {
      name: 'red--outline',
      label: 'Red (Outline)',
      context: {
        button: {
          text: 'Red Outlined Button',
          link: null,
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
          link: null,
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
          link: null,
          modifiers: ['green--dark']
        }
      }
    },
    {
      name: 'green--outline',
      label: 'Green (Outline)',
      context: {
        button: {
          text: 'Green Outlined Button',
          link: null,
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
          link: null,
          modifiers: ['yellow']
        }
      }
    },
    {
      name: 'yellow--outline',
      label: 'Yellow (Outline)',
      context: {
        button: {
          text: 'Yellow Outlined Button',
          link: null,
          modifiers: ['yellow', 'yellow--outline']
        }
      }
    },
    {
      name: 'inline',
      label: 'Inline (Default)',
      context: {
        button: {
          text: 'Default Inline Button',
          link: null,
          modifiers: ['inline']
        }
      }
    },
    {
      name: 'inline-red',
      label: 'Inline (Red)',
      context: {
        button: {
          text: 'Dark Red Inline Button',
          link: null,
          modifiers: ['inline', 'red--dark']
        }
      }
    },
    {
      name: 'inline-green',
      label: 'Inline (Green)',
      context: {
        button: {
          text: 'Green Inline Button',
          link: null,
          modifiers: ['inline', 'green']
        }
      }
    },
    {
      name: 'inline-yellow',
      label: 'Inline (Yellow)',
      context: {
        button: {
          text: 'Yellow Inline Button',
          link: null,
          modifiers: ['inline', 'yellow']
        }
      }
    },
    {
      name: 'small--inline',
      label: 'Small Inline (Default)',
      context: {
        button: {
          text: 'Default Small Inline Button',
          link: null,
          modifiers: ['inline--small']
        }
      }
    }
  ]
}
