const headerHeight = '104px'

module.exports = {
  purge: [
    './src/components/**/*.html',
    './src/components/**/*.hbs',
    './src/components/**/*.js'
  ],
  theme: {
    fontFamily: {
      display: ['FreightNeo Pro Bold', 'FreightNeoProBold-Regular', 'serif'],
      body: ['Sofia Pro Medium', 'SofiaPro-Medium', 'sans-serif'],
      quote: ['FreightNeo Pro Semi Italic', 'FreightNeo Pro Semi-Italic', 'FreightNeoProSemi-Italic', 'serif'],
      'body-italic': ['Sofia Pro Medium Italic', 'Sofia Pro MediumItalic', 'SofiaPro-Mediumitalic', 'sans-serif'],
      'body-semi-bold': ['Sofia Pro Semi-Bold', 'Sofia Pro SemiBold', 'SofiaPro-SemiBold', 'sans-serif'],
      'body-bold': ['Sofia Pro Bold', 'SofiaPro-Bold', 'sans-serif'],
      'body-bold-italic': ['Sofia Pro Bold Italic', 'Sofia Pro BoldItalic', 'SofiaPro-Bolditalic', 'sans-serif'],
      'body-black': ['Sofia Pro Black', 'SofiaPro-Black', 'sans-serif']
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

      map: {
        default: '#b9cfb9',
        hover: '#92a892',
        selected: '#5F755F'
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
        '2/3': 'auto minmax(25%, 30%)',
        '3/2': 'minmax(30%, 35%) auto'
      },
      lineHeight: {
        snug: '1.333'
      },
      height: {
        screen: `calc(100vh - ${headerHeight})`, // Compensate for the fixed header.
        'screen-teaser': `calc(100vh - ${headerHeight} - 4rem)` // Compensate for the fixed header and leave room for scrolling passed.
      },
      maxHeight: {
        screen: `calc(100vh - ${headerHeight})`, // Compensate for the fixed header.
        'screen-teaser': `calc(100vh - ${headerHeight} - 4rem)` // Compensate for the fixed header and leave room for scrolling passed.
      },
      screens: {
        nav: '1024px',
        md: '800px',
        '2xl': '2000px',
        dark: { raw: '(prefers-color-scheme: dark)' }
      },
      padding: {
        header: headerHeight
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
