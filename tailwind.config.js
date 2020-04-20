module.exports = {
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
        dark: '#640a0a'
      },
      'brand-green': {
        default: '#02532f',
        dark: '#02532f'
      },
      'brand-yellow': {
        default: '#fccb6e',
        light: '#faf5ed'
      }
    },
    extend: {}
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: []
}
