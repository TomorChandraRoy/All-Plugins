/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/Common/PriceCard.js":
/*!********************************************!*\
  !*** ./src/Components/Common/PriceCard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const PriceCard = ({
  attributes
}) => {
  const {
    plans,
    title,
    description,
    showUpdateDelete
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "main-card-contener"
  }, showUpdateDelete ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, description)) : "", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pricing"
  }, plans.map((plan, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, plan.isVisible && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: `plan ${plan.title === "Pro" && plan.isPopular ? "popular" : ""}`
  }, plan.title === "Pro" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: ""
  }, plan.isPopular === true ? "Most Popular" : "") : "", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, plan.title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "price"
  }, plan.price), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "features"
  }, plan.features.map((feature, featureIndex) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: featureIndex
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: feature?.iconType,
    style: {
      color: feature.iconType === "fa-solid fa-circle-check" ? " #6ab04c" : feature.iconType === "fa fa-times-circle" ? "#eb4d4b" : "rgba(39, 154, 67, 0.86)",
      marginRight: "10px"
    }
  }), feature.text))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", null, plan.buttonLabel))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PriceCard);

/***/ }),

/***/ "./src/Components/Common/Style.js":
/*!****************************************!*\
  !*** ./src/Components/Common/Style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// import { getColorsCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({
  attributes,
  id
}) => {
  const {
    headerStyle,
    headerDecStyle,
    planStyle
  } = attributes;
  const {
    titleColor,
    fontSize,
    titleMargin,
    titleAlign
  } = headerStyle;
  const {
    decColor,
    decSize,
    decAlign,
    decMargin
  } = headerDecStyle;
  const {
    planBackgroundColor,
    planBackgroundColorOpacity,
    planPadding,
    planMargin,
    planRadius,
    planAlign
  } = planStyle;
  const mainSl = `#${id}`;
  const mainCardContener = `${mainSl} .main-card-contener`;
  const pricing = `${mainCardContener} .pricing`;
  const plan = `${pricing} .plan`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `
		${mainCardContener}{
		}
		${mainCardContener} h1{
			color: ${titleColor};
			font-size: ${fontSize}px;
			margin: ${titleMargin?.top} ${titleMargin?.right} ${titleMargin?.bottom} ${titleMargin?.left};
			text-align:${titleAlign};
			}
		${mainCardContener} p{
			color: ${decColor};
            font-size: ${decSize}px;
			margin: ${decMargin?.top} ${decMargin?.right} ${decMargin?.bottom} ${decMargin?.left};
			text-align:${decAlign};
			}

		${pricing}{
			display: flex;
			flex-wrap: wrap;
			justify-content: ${planAlign};
			font-family: "Source Sans Pro", sans-serif;
		}

		${plan}{
			background: ${planBackgroundColor?.includes('gradient') ? planBackgroundColor : `${planBackgroundColor}`};
			opacity: ${planBackgroundColorOpacity};
			padding: ${planPadding?.top} ${planPadding?.right} ${planPadding?.bottom} ${planPadding?.left};
			margin: ${planMargin?.top} ${planMargin?.right} ${planMargin?.bottom} ${planMargin?.left};
            border-radius: ${planRadius?.top} ${planRadius?.right} ${planRadius?.bottom} ${planRadius?.left};
			
		}
	`
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/Components/Common/Style.js");
/* harmony import */ var _Components_Common_PriceCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Common/PriceCard */ "./src/Components/Common/PriceCard.js");





document.addEventListener('DOMContentLoaded', () => {
  const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-price-card'); //aey name ta block.json file ar "name": "b-blocks/basic-plugins",  dite  hobe na hole a kaj korbe na 
  blockNameEls.forEach(blockNameEl => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(blockNameEl).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      id: blockNameEl.id
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_PriceCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: attributes
    })));
    blockNameEl?.removeAttribute('data-attributes');
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map