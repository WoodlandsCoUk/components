module.exports = {
  purge: [
    './src/components/**/*.html',
    './src/components/**/*.hbs',
    './src/components/**/*.js'
  ],
  theme: {
    fontFamily: {
      display: ['FreightNeo Pro Bold', 'FreightNeoProBold-Regular', 'serif'],
      body: ['Sofia Pro', 'SofiaPro-Medium', 'sans-serif']
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
        default: '#414141'
      },

      gray: {
        default: '#e5e7e8',
        dark: '#c0ced2',
        light: '#f4f5f7',
        text: '#333'
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
    textIndent: (theme, { negative }) => ({
      ...theme('spacing'),
      full: '100%',
      ...negative({
        ...theme('spacing'),
        full: '100%'
      })
    }),
    extend: {
      gridTemplateColumns: {
        '2/3': 'auto minmax(25%, 30%)'
      },
      screens: {
        nav: '1024px',
        md: '800px',
        dark: { raw: '(prefers-color-scheme: dark)' }
      },
      cursor: {
        zoom: 'zoom-in'
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('tailwindcss-text-indent')()
  ]
}
