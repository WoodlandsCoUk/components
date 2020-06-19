const faker = require('faker')
const markdown = require('marked')

module.exports = {
  helpers: {
    titlecase: (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()),
    lowercase: (str) => str.toLowerCase(),
    uppercase: (str) => str.toUpperCase(),
    markdown: (str) => markdown(str),
    json: (json) => JSON.stringify(json),
    modifier: (prefix, modifiers) => {
      if (typeof modifiers === 'string' || modifiers instanceof String) {
        modifiers = modifiers.split(',')
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
    ifeq: (a, b, options) => {
      if (a === b) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
    navigationText: (item) => {
      return item.textAlt || item.text
    }
  }
}
