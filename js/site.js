(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/site"],{

/***/ "./node_modules/micromodal/dist/micromodal.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/micromodal/dist/micromodal.es.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var MicroModal = function () {

  var FOCUSABLE_ELEMENTS = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];

  var Modal = /*#__PURE__*/function () {
    function Modal(_ref) {
      var targetModal = _ref.targetModal,
          _ref$triggers = _ref.triggers,
          triggers = _ref$triggers === void 0 ? [] : _ref$triggers,
          _ref$onShow = _ref.onShow,
          onShow = _ref$onShow === void 0 ? function () {} : _ref$onShow,
          _ref$onClose = _ref.onClose,
          onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
          _ref$openTrigger = _ref.openTrigger,
          openTrigger = _ref$openTrigger === void 0 ? 'data-micromodal-trigger' : _ref$openTrigger,
          _ref$closeTrigger = _ref.closeTrigger,
          closeTrigger = _ref$closeTrigger === void 0 ? 'data-micromodal-close' : _ref$closeTrigger,
          _ref$openClass = _ref.openClass,
          openClass = _ref$openClass === void 0 ? 'is-open' : _ref$openClass,
          _ref$disableScroll = _ref.disableScroll,
          disableScroll = _ref$disableScroll === void 0 ? false : _ref$disableScroll,
          _ref$disableFocus = _ref.disableFocus,
          disableFocus = _ref$disableFocus === void 0 ? false : _ref$disableFocus,
          _ref$awaitCloseAnimat = _ref.awaitCloseAnimation,
          awaitCloseAnimation = _ref$awaitCloseAnimat === void 0 ? false : _ref$awaitCloseAnimat,
          _ref$awaitOpenAnimati = _ref.awaitOpenAnimation,
          awaitOpenAnimation = _ref$awaitOpenAnimati === void 0 ? false : _ref$awaitOpenAnimati,
          _ref$debugMode = _ref.debugMode,
          debugMode = _ref$debugMode === void 0 ? false : _ref$debugMode;

      _classCallCheck(this, Modal);

      // Save a reference of the modal
      this.modal = document.getElementById(targetModal); // Save a reference to the passed config

      this.config = {
        debugMode: debugMode,
        disableScroll: disableScroll,
        openTrigger: openTrigger,
        closeTrigger: closeTrigger,
        openClass: openClass,
        onShow: onShow,
        onClose: onClose,
        awaitCloseAnimation: awaitCloseAnimation,
        awaitOpenAnimation: awaitOpenAnimation,
        disableFocus: disableFocus
      }; // Register click events only if pre binding eventListeners

      if (triggers.length > 0) this.registerTriggers.apply(this, _toConsumableArray(triggers)); // pre bind functions for event listeners

      this.onClick = this.onClick.bind(this);
      this.onKeydown = this.onKeydown.bind(this);
    }
    /**
     * Loops through all openTriggers and binds click event
     * @param  {array} triggers [Array of node elements]
     * @return {void}
     */


    _createClass(Modal, [{
      key: "registerTriggers",
      value: function registerTriggers() {
        var _this = this;

        for (var _len = arguments.length, triggers = new Array(_len), _key = 0; _key < _len; _key++) {
          triggers[_key] = arguments[_key];
        }

        triggers.filter(Boolean).forEach(function (trigger) {
          trigger.addEventListener('click', function (event) {
            return _this.showModal(event);
          });
        });
      }
    }, {
      key: "showModal",
      value: function showModal() {
        var _this2 = this;

        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        this.activeElement = document.activeElement;
        this.modal.setAttribute('aria-hidden', 'false');
        this.modal.classList.add(this.config.openClass);
        this.scrollBehaviour('disable');
        this.addEventListeners();

        if (this.config.awaitOpenAnimation) {
          var handler = function handler() {
            _this2.modal.removeEventListener('animationend', handler, false);

            _this2.setFocusToFirstNode();
          };

          this.modal.addEventListener('animationend', handler, false);
        } else {
          this.setFocusToFirstNode();
        }

        this.config.onShow(this.modal, this.activeElement, event);
      }
    }, {
      key: "closeModal",
      value: function closeModal() {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var modal = this.modal;
        this.modal.setAttribute('aria-hidden', 'true');
        this.removeEventListeners();
        this.scrollBehaviour('enable');

        if (this.activeElement && this.activeElement.focus) {
          this.activeElement.focus();
        }

        this.config.onClose(this.modal, this.activeElement, event);

        if (this.config.awaitCloseAnimation) {
          var openClass = this.config.openClass; // <- old school ftw

          this.modal.addEventListener('animationend', function handler() {
            modal.classList.remove(openClass);
            modal.removeEventListener('animationend', handler, false);
          }, false);
        } else {
          modal.classList.remove(this.config.openClass);
        }
      }
    }, {
      key: "closeModalById",
      value: function closeModalById(targetModal) {
        this.modal = document.getElementById(targetModal);
        if (this.modal) this.closeModal();
      }
    }, {
      key: "scrollBehaviour",
      value: function scrollBehaviour(toggle) {
        if (!this.config.disableScroll) return;
        var body = document.querySelector('body');

        switch (toggle) {
          case 'enable':
            Object.assign(body.style, {
              overflow: ''
            });
            break;

          case 'disable':
            Object.assign(body.style, {
              overflow: 'hidden'
            });
            break;
        }
      }
    }, {
      key: "addEventListeners",
      value: function addEventListeners() {
        this.modal.addEventListener('touchstart', this.onClick);
        this.modal.addEventListener('click', this.onClick);
        document.addEventListener('keydown', this.onKeydown);
      }
    }, {
      key: "removeEventListeners",
      value: function removeEventListeners() {
        this.modal.removeEventListener('touchstart', this.onClick);
        this.modal.removeEventListener('click', this.onClick);
        document.removeEventListener('keydown', this.onKeydown);
      }
    }, {
      key: "onClick",
      value: function onClick(event) {
        if (event.target.hasAttribute(this.config.closeTrigger)) {
          this.closeModal(event);
        }
      }
    }, {
      key: "onKeydown",
      value: function onKeydown(event) {
        if (event.keyCode === 27) this.closeModal(event); // esc

        if (event.keyCode === 9) this.retainFocus(event); // tab
      }
    }, {
      key: "getFocusableNodes",
      value: function getFocusableNodes() {
        var nodes = this.modal.querySelectorAll(FOCUSABLE_ELEMENTS);
        return Array.apply(void 0, _toConsumableArray(nodes));
      }
      /**
       * Tries to set focus on a node which is not a close trigger
       * if no other nodes exist then focuses on first close trigger
       */

    }, {
      key: "setFocusToFirstNode",
      value: function setFocusToFirstNode() {
        var _this3 = this;

        if (this.config.disableFocus) return;
        var focusableNodes = this.getFocusableNodes(); // no focusable nodes

        if (focusableNodes.length === 0) return; // remove nodes on whose click, the modal closes
        // could not think of a better name :(

        var nodesWhichAreNotCloseTargets = focusableNodes.filter(function (node) {
          return !node.hasAttribute(_this3.config.closeTrigger);
        });
        if (nodesWhichAreNotCloseTargets.length > 0) nodesWhichAreNotCloseTargets[0].focus();
        if (nodesWhichAreNotCloseTargets.length === 0) focusableNodes[0].focus();
      }
    }, {
      key: "retainFocus",
      value: function retainFocus(event) {
        var focusableNodes = this.getFocusableNodes(); // no focusable nodes

        if (focusableNodes.length === 0) return;
        /**
         * Filters nodes which are hidden to prevent
         * focus leak outside modal
         */

        focusableNodes = focusableNodes.filter(function (node) {
          return node.offsetParent !== null;
        }); // if disableFocus is true

        if (!this.modal.contains(document.activeElement)) {
          focusableNodes[0].focus();
        } else {
          var focusedItemIndex = focusableNodes.indexOf(document.activeElement);

          if (event.shiftKey && focusedItemIndex === 0) {
            focusableNodes[focusableNodes.length - 1].focus();
            event.preventDefault();
          }

          if (!event.shiftKey && focusableNodes.length > 0 && focusedItemIndex === focusableNodes.length - 1) {
            focusableNodes[0].focus();
            event.preventDefault();
          }
        }
      }
    }]);

    return Modal;
  }();
  /**
   * Modal prototype ends.
   * Here on code is responsible for detecting and
   * auto binding event handlers on modal triggers
   */
  // Keep a reference to the opened modal


  var activeModal = null;
  /**
   * Generates an associative array of modals and it's
   * respective triggers
   * @param  {array} triggers     An array of all triggers
   * @param  {string} triggerAttr The data-attribute which triggers the module
   * @return {array}
   */

  var generateTriggerMap = function generateTriggerMap(triggers, triggerAttr) {
    var triggerMap = [];
    triggers.forEach(function (trigger) {
      var targetModal = trigger.attributes[triggerAttr].value;
      if (triggerMap[targetModal] === undefined) triggerMap[targetModal] = [];
      triggerMap[targetModal].push(trigger);
    });
    return triggerMap;
  };
  /**
   * Validates whether a modal of the given id exists
   * in the DOM
   * @param  {number} id  The id of the modal
   * @return {boolean}
   */


  var validateModalPresence = function validateModalPresence(id) {
    if (!document.getElementById(id)) {
      console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(id, "'"), 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'ID somewhere in your code. Refer example below to resolve it.');
      console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<div class=\"modal\" id=\"".concat(id, "\"></div>"));
      return false;
    }
  };
  /**
   * Validates if there are modal triggers present
   * in the DOM
   * @param  {array} triggers An array of data-triggers
   * @return {boolean}
   */


  var validateTriggerPresence = function validateTriggerPresence(triggers) {
    if (triggers.length <= 0) {
      console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'data attribute.');
      console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<a href=\"#\" data-micromodal-trigger=\"my-modal\"></a>");
      return false;
    }
  };
  /**
   * Checks if triggers and their corresponding modals
   * are present in the DOM
   * @param  {array} triggers   Array of DOM nodes which have data-triggers
   * @param  {array} triggerMap Associative array of modals and their triggers
   * @return {boolean}
   */


  var validateArgs = function validateArgs(triggers, triggerMap) {
    validateTriggerPresence(triggers);
    if (!triggerMap) return true;

    for (var id in triggerMap) {
      validateModalPresence(id);
    }

    return true;
  };
  /**
   * Binds click handlers to all modal triggers
   * @param  {object} config [description]
   * @return void
   */


  var init = function init(config) {
    // Create an config object with default openTrigger
    var options = Object.assign({}, {
      openTrigger: 'data-micromodal-trigger'
    }, config); // Collects all the nodes with the trigger

    var triggers = _toConsumableArray(document.querySelectorAll("[".concat(options.openTrigger, "]"))); // Makes a mappings of modals with their trigger nodes


    var triggerMap = generateTriggerMap(triggers, options.openTrigger); // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateArgs(triggers, triggerMap) === false) return; // For every target modal creates a new instance

    for (var key in triggerMap) {
      var value = triggerMap[key];
      options.targetModal = key;
      options.triggers = _toConsumableArray(value);
      activeModal = new Modal(options); // eslint-disable-line no-new
    }
  };
  /**
   * Shows a particular modal
   * @param  {string} targetModal [The id of the modal to display]
   * @param  {object} config [The configuration object to pass]
   * @return {void}
   */


  var show = function show(targetModal, config) {
    var options = config || {};
    options.targetModal = targetModal; // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateModalPresence(targetModal) === false) return; // clear events in case previous modal wasn't close

    if (activeModal) activeModal.removeEventListeners(); // stores reference to active modal

    activeModal = new Modal(options); // eslint-disable-line no-new

    activeModal.showModal();
  };
  /**
   * Closes the active modal
   * @param  {string} targetModal [The id of the modal to close]
   * @return {void}
   */


  var close = function close(targetModal) {
    targetModal ? activeModal.closeModalById(targetModal) : activeModal.closeModal();
  };

  return {
    init: init,
    show: show,
    close: close
  };
}();
window.MicroModal = MicroModal;

/* harmony default export */ __webpack_exports__["default"] = (MicroModal);


/***/ }),

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

/***/ "./src/components/blocks/gallery/gallery--carousel.js":
/*!************************************************************!*\
  !*** ./src/components/blocks/gallery/gallery--carousel.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! photoswipe */ "./node_modules/photoswipe/dist/photoswipe.js");
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(photoswipe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! photoswipe/dist/photoswipe-ui-default */ "./node_modules/photoswipe/dist/photoswipe-ui-default.js");
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var carousels = document.querySelectorAll('.gallery--carousel');
var template = document.querySelector('#photoswipe');
var pswp;
var carouselConfig = {
  axis: 'horizontal',
  items: 1,
  slideBy: 'page',
  controls: true,
  controlsPosition: 'top',
  controlsText: ['Previous', 'Next'],
  nav: true,
  navPosition: 'bottom',
  mouseDrag: true,
  arrowKeys: true,
  loop: true,
  autoplay: false,
  rewind: false
};
var photoSwipeConfig = {
  index: 0,
  spacing: 0.1,
  maxSpreadZoom: 2,
  showHideOpacity: true,
  loop: true,
  pinchToClose: true,
  closeOnScroll: true,
  escKey: true,
  arrowKeys: true,
  focus: true,
  modal: true,
  history: false
}; // Create the HTML from the <template>.

if ('content' in document.createElement('template') && template) {
  document.body.append(template.content.cloneNode(true));
  pswp = document.querySelector('.pswp');
}

var gallery = function gallery(carousel, index) {
  var images = carousel.querySelectorAll('[data-src]'); // Map the images to build the gallery items.

  var items = Array.from(images).map(function (item) {
    var _item$dataset = item.dataset,
        src = _item$dataset.src,
        height = _item$dataset.height,
        width = _item$dataset.width;
    var description = item.querySelector('.gallery__description');
    var title = description ? description.innerText : '';
    return {
      w: width,
      h: height,
      src: src,
      title: title
    };
  }); // Enable PhotoSwipe if we have PSWP template, the library and any items.

  if (pswp && photoswipe__WEBPACK_IMPORTED_MODULE_1___default.a && items.length) {
    var _gallery = new photoswipe__WEBPACK_IMPORTED_MODULE_1___default.a(pswp, photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_2___default.a, items, _objectSpread({}, photoSwipeConfig, {
      index: index,
      getThumbBoundsFn: function getThumbBoundsFn(index) {
        var thumbnail = images.item(index);
        var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
        var rect = thumbnail.getBoundingClientRect();
        return {
          x: rect.left,
          y: rect.top + pageYScroll,
          w: rect.width
        };
      }
    }));

    _gallery.init();
  }
}; // Setup each of the carousel galleries.


carousels.forEach(function (carousel) {
  var listContainer = carousel.querySelector('.gallery__list');
  var listImages = listContainer.querySelectorAll('[data-src]');
  var thumbnailContainer = carousel.querySelector('.gallery__thumbnails');
  var thumbnails = thumbnailContainer.querySelectorAll('a'); // Setup the slider.

  var slider = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])(_objectSpread({}, carouselConfig, {
    container: listContainer
  })); // Manual navigation for slider using the thumbnails.

  thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', function (event) {
      event.preventDefault();
      var index = Array.from(thumbnails).indexOf(thumbnail);
      slider.goTo(index);
    });
  }); // Clicking of the main images opens the gallery.

  listImages.forEach(function (image) {
    image.addEventListener('click', function (event) {
      event.preventDefault();
      var index = Array.from(listImages).indexOf(image);
      gallery(carousel, index);
    });
  });
});

/***/ }),

/***/ "./src/components/blocks/hero/hero.js":
/*!********************************************!*\
  !*** ./src/components/blocks/hero/hero.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.querySelectorAll('.hero[data-src]').forEach(function (hero) {
  hero.style.backgroundImage = "url(".concat(hero.dataset.src, ")");
});

/***/ }),

/***/ "./src/components/blocks/modal/modal.js":
/*!**********************************************!*\
  !*** ./src/components/blocks/modal/modal.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");

var modalConfig = {
  openTrigger: 'data-modal-open',
  closeTrigger: 'data-modal-close',
  openClass: 'modal--is-open',
  disableScroll: false,
  disableFocus: true,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true,
  debugMode: false
};
micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].init(modalConfig);

/***/ }),

/***/ "./src/components/blocks/read-more/read-more.js":
/*!******************************************************!*\
  !*** ./src/components/blocks/read-more/read-more.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var selector = document.querySelectorAll('.read-more[data-show][data-hide]');
selector.forEach(function (block) {
  var toggle = block.querySelector('.read-more__toggle > button span, .read-more__toggle > a span');
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

/***/ "./src/components/global/header/search.js":
/*!************************************************!*\
  !*** ./src/components/global/header/search.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var header = document.querySelector('.header');
var navigationSearch = header.querySelector('.form--search:not(.form--search--simple)');
var navigationSearchToggle = header.querySelector('.js--navigation-search');

if (navigationSearch && navigationSearchToggle) {
  navigationSearchToggle.addEventListener('click', function (event) {
    event.preventDefault();
    navigationSearch.classList.toggle('is-shown');
    navigationSearch.querySelector('input').focus();
  });
}

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

__webpack_require__(/*! components/blocks/accordion/accordion */ "./src/components/blocks/accordion/accordion.js");

__webpack_require__(/*! components/blocks/hero/hero */ "./src/components/blocks/hero/hero.js");

__webpack_require__(/*! components/blocks/modal/modal */ "./src/components/blocks/modal/modal.js");

__webpack_require__(/*! components/blocks/tabs/tabs */ "./src/components/blocks/tabs/tabs.js");

__webpack_require__(/*! components/blocks/gallery/gallery--carousel */ "./src/components/blocks/gallery/gallery--carousel.js");

__webpack_require__(/*! components/blocks/read-more/read-more */ "./src/components/blocks/read-more/read-more.js");

__webpack_require__(/*! components/blocks/tabs/tabs */ "./src/components/blocks/tabs/tabs.js");

__webpack_require__(/*! components/global/header/search */ "./src/components/global/header/search.js");

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