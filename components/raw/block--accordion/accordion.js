import Accordion from 'accordion-js'

const getPath = require('helpers/get-path.js')

const selector = document.querySelectorAll('.accordion')

const options = {
  elementClass: 'accordion__item',
  questionClass: 'accordion__item__title',
  answerClass: 'accordion__item__content',
  itemNumber: 0,
  duration: 500,
  closeOthers: true,
  showItem: false
}

selector.forEach((item) => {
  new Accordion(getPath(item), options) // eslint-disable-line no-new
})
