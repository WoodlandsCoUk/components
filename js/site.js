(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/site"],{

/***/ "./src/components/blocks/read-more/read-more.js":
/*!******************************************************!*\
  !*** ./src/components/blocks/read-more/read-more.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var selector = document.querySelectorAll('.read-more[data-show][data-hide]');
selector.forEach(function (block) {
  var toggle = block.querySelector('.read-more__toggle button');
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

/***/ "./src/components/blocks/search/search.js":
/*!************************************************!*\
  !*** ./src/components/blocks/search/search.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.querySelectorAll('.js--search').forEach(function (item) {
  item.addEventListener('click', function () {
    console.log('search');
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

/***/ "./src/js/site.js":
/*!************************!*\
  !*** ./src/js/site.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../components/blocks/search/search */ "./src/components/blocks/search/search.js");

__webpack_require__(/*! ../components/blocks/read-more/read-more */ "./src/components/blocks/read-more/read-more.js");

__webpack_require__(/*! ../components/global/navigation/navigation */ "./src/components/global/navigation/navigation.js");

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