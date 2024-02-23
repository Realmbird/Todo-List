/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/OpenSans-VariableFont_wdth,wght.ttf */ \"./src/fonts/OpenSans-VariableFont_wdth,wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Pacifico-Regular.ttf */ \"./src/fonts/Pacifico-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Poppins-Black.ttf */ \"./src/fonts/Poppins-Black.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `h1, h2, h3 {\n    font-family: Poppins-Black;\n    /* src/fonts/Poppins-Black.ttf */\n}\n\np {\n    font-family: OpenSans;\n    /* OpenSans-Italic-VariableFont_wdth,wght.ttf */\n\n}\n.project-title{\n    text-decoration: underline;\n}\n\nbutton {\n    font-family: Pacifico;\n    /* Pacifico-Regular.ttf */\n}\ntable {\n    font-family: OpenSans;\n}\n\n.headers {\n    background-color: var(--leaf-green);\n}\n\n.taskItem {\n    background-color: var(--sunset-orange);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 3px solid black;\n    padding: 16px;\n    border-radius: 8px;\n    cursor: pointer;\n    gap: 8px;\n    margin-bottom: 4px;\n}\n\n.dropdown {\n    position: relative;\n    /* display: inline-block; */\n}\n.dropdown-content {\n    display: none;\n    position: relative;\n    background-color: var(--twig-brown);\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n}\n.project-content {\n    display: none;\n    position: relative;\n    background-color: var(--leaf-green);\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n}\n.show {\n    display: block;\n}\n\n\n.project-list button\n{\n  background-color: var(--sky-blue);\n  border-top: 1px solid black;\n  border-left: 1px solid black;\n  border-right: 1px solid black;\n  border-bottom: 0px solid black;\n  border-radius: 5px 5px 0px 0px;\n  padding-top: 8px;\n}\n.project-list {\n    margin-bottom: 10px;\n}\nbutton.selected\n{\n  background-color: var(--sunset-orange);\n}\n\n\n/* for dialog */\ndialog {\n    position: relative;\n}\n.close{\n    position: absolute;\n    background: transparent;\n    border: none;\n    top: 0.25px;\n    right: 0.5px;\n}\n.close span {\n    font-size: 1.5rem;\n    color: grey;\n}\n\n:root {\n    --sky-blue: #7BC8F6;\n    --leaf-green: #76B947;\n    --sunset-orange: #F2A65A;\n    --white: #FFFFFF;\n    --twig-brown: #8B572A;\n    --robin-blue: #1FCECB;\n}\n\n\n/* font imports */\n@font-face {\n    font-family: OpenSans;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n \n@font-face {\n    font-family: Pacifico;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n@font-face {\n    font-family: Poppins-Black;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/class.js":
/*!**********************!*\
  !*** ./src/class.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project: () => (/* binding */ project),\n/* harmony export */   todo: () => (/* binding */ todo)\n/* harmony export */ });\nconst todo = class Todo {\n    constructor(title, description, duedate, priority) {\n        this.title = title;\n        this.description = description;\n        this.duedate = duedate;\n        this.priority = priority;\n    }\n    \n}\nconst project = class Project {\n    constructor(name, tasklist){\n        this.name = name\n        this.tasklist = tasklist\n    }\n}\n\n\n//# sourceURL=webpack://todolist/./src/class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class.js */ \"./src/class.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_birdcute_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/birdcute.jpg */ \"./src/images/birdcute.jpg\");\n/* harmony import */ var _images_birdmage_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/birdmage.jpg */ \"./src/images/birdmage.jpg\");\n/* harmony import */ var _images_delete_FILL0_wght400_GRAD0_opsz24_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/delete_FILL0_wght400_GRAD0_opsz24.png */ \"./src/images/delete_FILL0_wght400_GRAD0_opsz24.png\");\n/* harmony import */ var _images_edit_square_FILL0_wght400_GRAD0_opsz24_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/edit_square_FILL0_wght400_GRAD0_opsz24.png */ \"./src/images/edit_square_FILL0_wght400_GRAD0_opsz24.png\");\n\n\n\n\n\n\n\n\n\nconst DOMController = (() => {\n    const project_list = []\n    let current_project_index = 0\n    \n\n    const projectbtn = () => {\n    \n        const projectbtns = document.querySelectorAll('.projectbtn')\n        projectbtns.forEach((projectbtn) => {\n            projectbtn.addEventListener(\"click\", (event) => {\n                const target = event.target\n                console.log(target)\n                const number = target.id\n                console.log(number)\n                DOMController.change_project(number)\n                DOMController.load()\n            })\n        })\n    }\n    const initialSetup = () => {\n        //inital setup code for todo\n        const my_project = new _class_js__WEBPACK_IMPORTED_MODULE_0__.project(\"My Project\", [new _class_js__WEBPACK_IMPORTED_MODULE_0__.todo(\"Todolist\", \"Completing Todo\", new Date(), true)]);\n        project_list.push(my_project)\n\n        // title, description, duedate, priority, notes, checklist\n\n        // console.log(project_list)\n        load()\n    }\n    const change_project = (num) => {\n        current_project_index = num\n    }\n    const remove_project = (num\n        ) => {\n        project_list.splice(num, 1)\n    }\n    const load = () => {\n        loadTabs()\n        loadProject()\n        projectbtn()\n    }\n    const taskModify = (taskItem) => {\n        const modifybtns = document.createElement('div')\n        \n        const taskEdit = document.createElement('img')\n        taskEdit.src = _images_edit_square_FILL0_wght400_GRAD0_opsz24_png__WEBPACK_IMPORTED_MODULE_5__\n        taskEdit.classList.add('taskedit')\n     \n        modifybtns.append(taskEdit)\n\n        const taskDelete = document.createElement('img')\n        taskDelete.src = _images_delete_FILL0_wght400_GRAD0_opsz24_png__WEBPACK_IMPORTED_MODULE_4__\n        taskDelete.classList.add('taskdelete')\n     \n        modifybtns.append(taskDelete)\n        taskItem.append(modifybtns)\n    }\n    const projectEditForm = (dropdown) => {\n        const form = document.createElement('form')\n        dropdown.append(form)\n\n        //title, description, duedate, priority\n        \n        //title\n        const title_label = document.createElement('label')\n        title_label.textContent = \"Name:\"\n        title_label.setAttribute(\"for\", \"name\")\n        form.append(title_label)\n        const title_input = document.createElement('input')\n        title_input.setAttribute('type', \"text\")\n        title_input.setAttribute('id', \"name\")\n        title_input.setAttribute('name', \"name\")\n        form.append(title_input)\n\n        //buttons cancel submit\n        const buttons = document.createElement('div')\n        buttons.classList.add(\"buttons\")\n        form.append(buttons)\n        const cancelbtn = document.createElement('button')\n        cancelbtn.textContent = \"Cancel\"\n        buttons.append(cancelbtn)\n        const submitbtn = document.createElement('button')\n        submitbtn.textContent = \"Submit\"\n        buttons.append(submitbtn)\n    }\n    const todoEditForm = (dropdown) => {\n        const form = document.createElement('form')\n        dropdown.append(form)\n\n        //title, description, duedate, priority\n        \n        //title\n        const title_label = document.createElement('label')\n        title_label.textContent = \"Title:\"\n        title_label.setAttribute(\"for\", \"title\")\n        form.append(title_label)\n        const title_input = document.createElement('input')\n        title_input.setAttribute('type', \"text\")\n        title_input.setAttribute('id', \"title\")\n        title_input.setAttribute('name', \"title\")\n        form.append(title_input)\n\n        //description\n        const description_label = document.createElement('label')\n        description_label.textContent = \"Description: \"\n        description_label.setAttribute(\"for\", \"description\")\n        form.append(description_label)\n        const description_input = document.createElement('input')\n        description_input.setAttribute('type', 'text')\n        description_input.setAttribute('id', \"description\")\n        description_input.setAttribute('name', \"description\")\n        form.append(description_input)\n\n        //duedate\n        const due_date_label = document.createElement('label')\n        due_date_label.textContent = \"Due Date: \"\n        due_date_label.setAttribute(\"for\", \"due_date\")\n        form.append(due_date_label)\n        const due_date_input = document.createElement('input')\n        due_date_input.setAttribute('type', 'date')\n        due_date_input.setAttribute('id', 'due_date')\n        due_date_input.setAttribute('name', 'due_date')\n        form.append(due_date_input) \n        \n        //priority\n        const priority_label = document.createElement('label')\n        priority_label.textContent = \"Priority: \"\n        priority_label.setAttribute(\"for\", \"priority\")\n        form.append(priority_label)\n        const priority_input = document.createElement('input')\n        priority_input.setAttribute('type', 'checkbox')\n        priority_input.setAttribute('id', 'priority')\n        priority_input.setAttribute('name', 'priority')\n        form.append(priority_input)\n        \n        //buttons cancel submit\n        const buttons = document.createElement('div')\n        buttons.classList.add(\"buttons\")\n        form.append(buttons)\n        const cancelbtn = document.createElement('button')\n        cancelbtn.textContent = \"Cancel\"\n        buttons.append(cancelbtn)\n        const submitbtn = document.createElement('button')\n        submitbtn.textContent = \"Submit\"\n        buttons.append(submitbtn)\n    }\n    const loadTabs = () => {\n        const projectlist = document.querySelector('.project-list')\n        projectlist.innerHTML = \"\"\n        project_list.forEach((project, index) => {\n            \n            console.log(project)\n            const projectbtn = document.createElement('button')\n            projectbtn.textContent = project.name\n            projectbtn.setAttribute(\"id\", `${index}`)\n            projectlist.append(projectbtn)\n            projectbtn.classList.add('projectbtn')\n\n            if (index == current_project_index){\n                projectbtn.classList.add('selected')\n            }\n        })\n    }\n    const loadProject = () => {\n        //project\n        const project = project_list[current_project_index]\n        //table\n        const todo = document.querySelector('.todo')\n        todo.innerHTML = \"\"\n        // console.log(todo)\n\n        //Adding Project title to dom\n        const projectName = document.createElement('h3')\n        projectName.textContent = project.name\n        projectName.classList.add(\"project-title\")\n        todo.prepend(projectName)\n\n        // console.log(project.tasklist)\n        project.tasklist.forEach((task, index) => {\n            const dropdown = document.createElement('div')\n            dropdown.classList.add('dropdown')\n            todo.append(dropdown)\n            \n            //makes table row\n            const taskItem = document.createElement('div')\n            dropdown.append(taskItem)\n            taskItem.classList.add('taskItem')\n\n            //Task title\n            const taskTitle = document.createElement('h4')\n            taskTitle.textContent = task.title\n         \n            taskItem.append(taskTitle)\n           //adds edit\n           taskModify(taskItem)\n           \n\n           const dropdownContent = document.createElement('div')\n            dropdownContent.classList.add('dropdown-content')\n            dropdown.append(dropdownContent)\n\n            const projectEditContent = document.createElement('div')\n            projectEditContent.classList.add('project-content')\n            dropdown.append(projectEditContent)\n\n            taskItem.setAttribute(\"id\", index)\n\n            const taskEdit = document.querySelector('.taskedit')\n            taskEdit.addEventListener(\"click\", (event) => {\n                const parent = event.target.parentNode\n                const id = parent.id\n                console.log(id)\n                projectEditContent.classList.toggle(\"show\")\n                dropdownContent.classList.remove(\"show\")             \n            })\n            const taskDelete = document.querySelector('.taskdelete')\n            taskDelete.addEventListener(\"click\", (event) => {\n                const target = event.target.parentElement.parentElement\n                const id = target.id\n                console.log(id)\n                remove_project(id)\n                load()\n            })\n\n            const projectEdit = document.querySelector('.taskItem')\n            projectEdit.addEventListener(\"click\", (event) => {\n                const target = event.target\n                const parent = target.parentNode\n                const id = parent.id\n                if(!target.matches(\".taskedit\")){\n                    \n                    console.log(id)\n                    dropdownContent.classList.toggle(\"show\")\n                    projectEditContent.classList.remove(\"show\")\n                }\n                \n               \n            })\n\n            // adds dropdown content\n           todoEditForm(dropdownContent)\n           projectEditForm(projectEditContent)\n            \n\n        });\n\n        \n       \n    }\n    const addProject = () => {\n        console.log(\"Added Project\")\n        let title = document.querySelector('#name')\n        console.log(title)\n        let new_project = new _class_js__WEBPACK_IMPORTED_MODULE_0__.project(title.value, []);\n        console.log(new_project)\n        \n        project_list.push(new_project)\n        \n        load()\n    }\n\n    return {load, initialSetup, change_project, addProject}\n})()\nDOMController.initialSetup()\n\n\n\nconst dialogbtn = () => {\n    const dialog = document.querySelector(\"dialog\")\n    const addtask = document.querySelector(\"#new_project\")\n    const closebtn = document.querySelector(\"dialog .close\")\n    const submitbtn = document.querySelector(\".submit\")\n\n    addtask.addEventListener(\"click\", () => {\n        dialog.showModal();\n    });\n    closebtn.addEventListener(\"click\", () => {\n        dialog.close();\n    })\n\n    submitbtn.addEventListener(\"click\", (event) => {\n        dialog.close()\n        event.preventDefault()\n        DOMController.addProject()\n    })\n}\nconst todoitembtns = () => {\n\n}\n\n\nconst dialogController = (() => {\n    // adds event buttons\n    dialogbtn()\n    todoitembtns()\n})()\n\n\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/fonts/OpenSans-VariableFont_wdth,wght.ttf":
/*!*******************************************************!*\
  !*** ./src/fonts/OpenSans-VariableFont_wdth,wght.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"19ba637387f1d6142f55.ttf\";\n\n//# sourceURL=webpack://todolist/./src/fonts/OpenSans-VariableFont_wdth,wght.ttf?");

/***/ }),

/***/ "./src/fonts/Pacifico-Regular.ttf":
/*!****************************************!*\
  !*** ./src/fonts/Pacifico-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c0d735fc04154e03a691.ttf\";\n\n//# sourceURL=webpack://todolist/./src/fonts/Pacifico-Regular.ttf?");

/***/ }),

/***/ "./src/fonts/Poppins-Black.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Poppins-Black.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d8b850b920a5ef49d752.ttf\";\n\n//# sourceURL=webpack://todolist/./src/fonts/Poppins-Black.ttf?");

/***/ }),

/***/ "./src/images/birdcute.jpg":
/*!*********************************!*\
  !*** ./src/images/birdcute.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"94040983296d88397864.jpg\";\n\n//# sourceURL=webpack://todolist/./src/images/birdcute.jpg?");

/***/ }),

/***/ "./src/images/birdmage.jpg":
/*!*********************************!*\
  !*** ./src/images/birdmage.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"db698fbf334e81bc1ff7.jpg\";\n\n//# sourceURL=webpack://todolist/./src/images/birdmage.jpg?");

/***/ }),

/***/ "./src/images/delete_FILL0_wght400_GRAD0_opsz24.png":
/*!**********************************************************!*\
  !*** ./src/images/delete_FILL0_wght400_GRAD0_opsz24.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e21b7bb87e5de83975b9.png\";\n\n//# sourceURL=webpack://todolist/./src/images/delete_FILL0_wght400_GRAD0_opsz24.png?");

/***/ }),

/***/ "./src/images/edit_square_FILL0_wght400_GRAD0_opsz24.png":
/*!***************************************************************!*\
  !*** ./src/images/edit_square_FILL0_wght400_GRAD0_opsz24.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e3d533dff0b8c6df9b4.png\";\n\n//# sourceURL=webpack://todolist/./src/images/edit_square_FILL0_wght400_GRAD0_opsz24.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;