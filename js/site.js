(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/site"],{

/***/ "./src/components/blocks/accordion/accordion.js":
/*!******************************************************!*\
  !*** ./src/components/blocks/accordion/accordion.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! accordion-js */ "./node_modules/accordion-js/dist/accordion.min.js");
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(accordion_js__WEBPACK_IMPORTED_MODULE_0__);


var getPath = __webpack_require__(/*! helpers/get-path.js */ "./src/js/helpers/get-path.js");

var selector = document.querySelectorAll('.accordion');
var options = {
  elementClass: 'accordion__item',
  questionClass: 'accordion__item__title',
  answerClass: 'accordion__item__content',
  itemNumber: 0,
  duration: 500,
  closeOthers: true,
  showItem: false
};
selector.forEach(function (item) {
  new accordion_js__WEBPACK_IMPORTED_MODULE_0___default.a(getPath(item), options); // eslint-disable-line no-new
});

/***/ }),

/***/ "./src/components/blocks/read-more/read-more.js":
/*!******************************************************!*\
  !*** ./src/components/blocks/read-more/read-more.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var selector = document.querySelectorAll('.read-more[data-show][data-hide]');
selector.forEach(function (block) {
  var toggle = block.querySelector('.read-more__toggle > button, .read-more__toggle > a');
  var showText = block.dataset.show;
  var hideText = block.dataset.hide;
  toggle.addEventListener('click', function (event) {
    var text = hideText;
    event.preventDefault();

    if (block.classList.contains('read-more--visible')) {
      text = showText;
    }

    toggle.textContent = text;
    block.classList.toggle('read-more--visible');
  });
});

/***/ }),

/***/ "./src/components/blocks/tabs/tabs.js":
/*!********************************************!*\
  !*** ./src/components/blocks/tabs/tabs.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var tabs = document.querySelectorAll('.tab[data-tab]');
var classes = {
  active: 'tab--active'
};
tabs.forEach(function (tab) {
  var nav = tab.querySelector('.tab__navigation');
  var navItems = nav.querySelectorAll('[data-tab-for]');
  var content = tab.querySelector('.tab__items');
  var items = content.querySelectorAll('[data-tab-item]');
  navItems.forEach(function (item, i) {
    item.addEventListener('click', function (event) {
      item.classList.add(classes.active);
      Array.from(items).filter(function (i) {
        return i.dataset.tabItem === item.dataset.tabFor;
      }).forEach(function (i) {
        i.classList.add(classes.active);
      });
      Array.from(navItems).filter(function (i) {
        return i.dataset.tabFor !== item.dataset.tabFor;
      }).forEach(function (i) {
        i.classList.remove(classes.active);
      });
      Array.from(items).filter(function (i) {
        return i.dataset.tabItem !== item.dataset.tabFor;
      }).forEach(function (i) {
        i.classList.remove(classes.active);
      });
    });

    if (i === 0) {
      item.click();
    }
  });
});

/***/ }),

/***/ "./src/components/global/navigation/navigation.js":
/*!********************************************************!*\
  !*** ./src/components/global/navigation/navigation.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.querySelectorAll('.js--navigation').forEach(function (item) {
  item.addEventListener('click', function () {
    document.body.classList.toggle('navigation--shown');
    item.classList.toggle('is-active');
  });
});

/***/ }),

/***/ "./src/js/helpers/get-path.js":
/*!************************************!*\
  !*** ./src/js/helpers/get-path.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getPath = function getPath(element) {
  if (element.id) {
    return '#' + element.id;
  }

  if (element.tagName === 'BODY') {
    return '';
  }

  var path = getPath(element.parentNode);

  if (element.className) {
    return path + ' ' + element.tagName.toLowerCase() + '.' + _toConsumableArray(element.classList).join('.').replace(/\//g, '\\/');
  }

  return path + ' ' + element.tagName.toLowerCase();
};

module.exports = function (element) {
  return getPath(element);
};

/***/ }),

/***/ "./src/js/site.js":
/*!************************!*\
  !*** ./src/js/site.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// require('components/blocks/search/search')
__webpack_require__(/*! components/blocks/accordion/accordion */ "./src/components/blocks/accordion/accordion.js");

__webpack_require__(/*! components/blocks/tabs/tabs */ "./src/components/blocks/tabs/tabs.js");

__webpack_require__(/*! components/blocks/read-more/read-more */ "./src/components/blocks/read-more/read-more.js");

__webpack_require__(/*! components/global/navigation/navigation */ "./src/components/global/navigation/navigation.js");

/***/ }),

/***/ "./src/sass/site.scss":
/*!****************************!*\
  !*** ./src/sass/site.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/site.js ./src/sass/site.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/runner/work/components/components/src/js/site.js */"./src/js/site.js");
module.exports = __webpack_require__(/*! /home/runner/work/components/components/src/sass/site.scss */"./src/sass/site.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);