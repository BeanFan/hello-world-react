/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/configStore.js":
/*!****************************!*\
  !*** ./src/configStore.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_toolkit_couter_CounterSliceA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redux-toolkit/couter/CounterSliceA */ "./src/redux-toolkit/couter/CounterSliceA.js");
/* harmony import */ var _redux_toolkit_couter_CounterSliceB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redux-toolkit/couter/CounterSliceB */ "./src/redux-toolkit/couter/CounterSliceB.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");






var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.configureStore)({
  reducer: {
    counterA: _redux_toolkit_couter_CounterSliceA__WEBPACK_IMPORTED_MODULE_0__["default"],
    counterB: _redux_toolkit_couter_CounterSliceB__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});
[_redux_toolkit_couter_CounterSliceA__WEBPACK_IMPORTED_MODULE_0__.add, _redux_toolkit_couter_CounterSliceB__WEBPACK_IMPORTED_MODULE_1__.increment, A, _redux_toolkit_couter_CounterSliceB__WEBPACK_IMPORTED_MODULE_1__.addTwo].forEach(function (actionCreator) {
  store.dispatch(actionCreator());
  console.log("After action '".concat(actionCreator, "': "), store.getState());
});
var mapState = function mapState(state) {
  return state;
};
var actionCreators = {
  addA: _redux_toolkit_couter_CounterSliceA__WEBPACK_IMPORTED_MODULE_0__.add,
  incrementB: _redux_toolkit_couter_CounterSliceB__WEBPACK_IMPORTED_MODULE_1__.increment,
  addTwo: _redux_toolkit_couter_CounterSliceB__WEBPACK_IMPORTED_MODULE_1__.addTwo,
  addFive: addFive
};
function App(_ref) {
  var counterA = _ref.counterA,
    counterB = _ref.counterB,
    addA = _ref.addA,
    incrementB = _ref.incrementB,
    addTwo = _ref.addTwo,
    addFive = _ref.addFive;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1", null, "Circular Slice Dependencies Example")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h2", null, "Counter Values"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("b", null, "Counter A"), ": ", counterA), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("b", null, "Counter B"), ": ", counterB)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
    onClick: function onClick() {
      return incrementA();
    }
  }, "Increment A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
    onClick: function onClick() {
      return incrementB();
    }
  }, "Increment B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
    onClick: function onClick() {
      return addTwo();
    }
  }, "Add Two to Both"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
    onClick: function onClick() {
      return addFive();
    }
  }, "Add Five to Both")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "Notice that \"Add Five\" only adds to A, not B. This is caused by circular imports between the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("code", null, "counterA.tsx"), " and", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("code", null, "counterB.tsx"), " files. When B imports ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("code", null, "addFive()"), " ", "from A, A hasn't finished initializing yet, so ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("code", null, "addFive()"), " is still undefined."));
}
var ConnectedApp = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapState, actionCreators)(App);
var rootElement = document.getElementById("root");
(0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createRoot)(rootElement).render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
  store: store
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ConnectedApp, null)));

/***/ }),

/***/ "./src/redux-toolkit/couter/CounterSliceA.js":
/*!***************************************************!*\
  !*** ./src/redux-toolkit/couter/CounterSliceA.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "add5": () => (/* binding */ add5),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _CounterSliceB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CounterSliceB */ "./src/redux-toolkit/couter/CounterSliceB.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var counterSliceA = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  countSlice: "counterSliceA",
  initialState: 0,
  reudcers: {
    add: function add(state, action) {
      return state + 1;
    },
    add5: function add5(state, action) {
      return state + 5;
    }
  },
  extraReducers: _defineProperty({}, _CounterSliceB__WEBPACK_IMPORTED_MODULE_0__.addTwo, function (state, action) {
    return state + 2;
  })
});
var actions = counterSliceA.actions,
  reudcers = counterSliceA.reudcers;
var add = actions.add,
  add5 = actions.add5;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./src/redux-toolkit/couter/CounterSliceB.js":
/*!***************************************************!*\
  !*** ./src/redux-toolkit/couter/CounterSliceB.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTwo": () => (/* binding */ addTwo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "increment": () => (/* binding */ increment)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _CounterSliceA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CounterSliceA */ "./src/redux-toolkit/couter/CounterSliceA.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var counterSliceB = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  slice: "sliceB",
  initialState: 0,
  reducers: {
    increment: function increment(state, action) {
      return state + 1;
    },
    addTwo: function addTwo(state, action) {
      return state + 2;
    }
  },
  extraReducers: _defineProperty({}, _CounterSliceA__WEBPACK_IMPORTED_MODULE_0__.add5, function (state, action) {
    return state + 5;
  })
});
console.log(counterSliceB);
console.log("addFive, imported from A to B: ", addFive);
var actions = counterSliceB.actions,
  reducer = counterSliceB.reducer;
var increment = actions.increment,
  addTwo = actions.addTwo;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhello_world_react"] = self["webpackChunkhello_world_react"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/configStore.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=maina65c5c7dfa5b244b1372.js.map