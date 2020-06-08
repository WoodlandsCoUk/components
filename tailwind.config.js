module.exports = {
  purge: false,
  theme: {
    fontFamily: {
      display: ['FreightNeo Pro Bold', 'serif'],
      body: ['Sofia Pro', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      white: '#fff',
      black: '#000',

      background: {
        default: '#fff'
      },

      text: {
        default: '#000'
      },

      gray: {
        default: '#e5e7e8',
        dark: '#c0ced2',
        light: '#f4f5f7'
      },

      'brand-red': {
        default: '#c30028',
        dark: '#982c2c'
      },
      'brand-green': {
        default: '#02532f',
        dark: '#0b3824',
        light: '#007a43'
      },
      'brand-yellow': {
        default: '#f2eadc',
        dark: '#f4d196',
        light: '#faf5ed'
      }
    },
    extend: {
      gridTemplateColumns: {
        '2/3': 'auto minmax(25%, 30%)'
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: []
}
