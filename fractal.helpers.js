const path = require('path')
const faker = require('faker')
const markdown = require('marked')
const _ = require('lodash')

module.exports = {
  helpers: {
    titlecase: (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()),
    lowercase: (str) => str.toLowerCase(),
    uppercase: (str) => str.toUpperCase(),
    markdown: (str) => markdown(str),
    json: (json) => JSON.stringify(json),
    icon: (icon, options, ext = 'png', directory = 'icons') => {
      return path.join('/', directory, `${icon}.${ext}`)
    },
    modifier: (prefix, modifiers) => {
      if (typeof modifiers === 'string' || modifiers instanceof String) {
        modifiers = modifiers.split(',')
      }
      if (!Array.isArray(modifiers)) {
        modifiers = null
      }

      return (modifiers || []).map((modifier) => {
        return `${prefix}--${modifier}`
      }).concat([prefix]).map((e, i, arr) => i === 0 ? arr[arr.length - 1] : arr[i - 1]).join(' ')
    },
    date: (x) => {
      const date = faker.date.past()

      const getOrdinalNum = (n) => {
        return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '')
      }

      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]

      const day = getOrdinalNum(date.getDate())
      const month = monthNames[date.getMonth()]
      const year = date.getFullYear()

      return `${day} ${month} ${year}`
    },
    navigationContext: (context) => {
      if (_.isObject(context)) {
        return context
      }

      return {
        main: true,
        text: context,
        link: '#',
        navigation: null
      }
    },
    ifeq: (a, b, options) => {
      if (a === b) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
    ternary: (statement, isTrue, isFalse) => {
      return statement ? isTrue : isFalse
    }
  }
}
