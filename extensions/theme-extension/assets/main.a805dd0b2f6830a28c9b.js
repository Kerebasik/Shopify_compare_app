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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/modern-normalize/modern-normalize.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/modern-normalize/modern-normalize.css ***!
  \**************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*! modern-normalize v2.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\nhtml {\n\t/* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */\n\tfont-family:\n\t\tsystem-ui,\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n\tline-height: 1.15; /* 1. Correct the line height in all browsers. */\n\t-webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */\n\t-moz-tab-size: 4; /* 3. Use a more readable tab size (opinionated). */\n\ttab-size: 4; /* 3 */\n}\n\n/*\nSections\n========\n*/\n\nbody {\n\tmargin: 0; /* Remove the margin in all browsers. */\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-comparison/./node_modules/modern-normalize/modern-normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_modern_normalize_modern_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/modern-normalize/modern-normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/modern-normalize/modern-normalize.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_modern_normalize_modern_normalize_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\n::after,\n::before {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.15;\n  letter-spacing: 0, 8px;\n  font-weight: 500;\n  font-family: \"Roboto\", sans-serif;\n}\n\nh1,\nh2,\nh3,\np {\n  margin: 0;\n  padding: 0;\n}\n\nul,\nol {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\nbutton {\n  font-family: inherit;\n  cursor: pointer;\n  border: none;\n  padding: 0;\n}\n\nsvg {\n  display: block;\n}\n\n.compare-btn {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background-color: #fbeee0;\n  border: 2px solid #000000;\n  border-radius: 10px;\n  box-shadow: #000000 4px 4px 0 0;\n  color: #000000;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 600;\n  font-size: 18px;\n  padding: 0 18px;\n  line-height: 50px;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n\n.compare-btn:hover {\n  background-color: #fff;\n}\n\n.compare-btn:active {\n  box-shadow: #000000 2px 2px 0 0;\n  transform: translate(2px, 2px);\n}\n\n@media (min-width: 768px) {\n  .compare-btn {\n    min-width: 120px;\n    padding: 0 25px;\n  }\n}\n.compare-btn-prod-int-text {\n  position: absolute;\n  top: -15px;\n  left: 0px;\n  width: 25px;\n  height: 25px;\n  background-color: #000000;\n  color: #ffffff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n\n.compare-menu {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100px;\n  background-color: rgba(70, 69, 69, 0.767);\n  transition: transform 250ms linear;\n  transform: translateY(100%);\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 10px;\n  z-index: 999;\n  padding: 20px;\n}\n.btn-box {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  max-width: 200px;\n  min-width: 200px;\n  padding: 10px;\n}\n.open-menu {\n  transform: translateY(0);\n}\n.to-compare-btn {\n  padding: 10px;\n  width: 100%;\n  background-color: #fbeee0;\n  border: 2px solid #0067dd;\n  border-radius: 10px;\n  box-shadow: #0067dd 4px 4px 0 0;\n  color: #0067dd;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 30px;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n\n.to-compare-btn:hover {\n  background-color: #fff;\n}\n\n.to-compare-btn:active {\n  box-shadow: #0067dd 2px 2px 0 0;\n  transform: translate(2px, 2px);\n}\n\n.close-btn {\n  padding: 10px;\n  width: calc(50% - 5px);\n  background-color: #fbeee0;\n  border: 2px solid #000000;\n  border-radius: 10px;\n  box-shadow: #000000 4px 4px 0 0;\n  color: #000000;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 30px;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n.close-btn:hover {\n  background-color: #fff;\n}\n\n.close-btn:active {\n  box-shadow: #000000 2px 2px 0 0;\n  transform: translate(2px, 2px);\n}\n\n.clean-btn {\n  padding: 10px;\n  width: calc(50% - 5px);\n  background-color: #fbeee0;\n  border: 2px solid #fc893c;\n  border-radius: 10px;\n  box-shadow: #fc893c 4px 4px 0 0;\n  color: #fc893c;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 30px;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n.clean-btn:hover {\n  background-color: #fff;\n}\n\n.clean-btn:active {\n  box-shadow: #fc893c 2px 2px 0 0;\n  transform: translate(2px, 2px);\n}\n\n.add-to-compare-btn {\n  margin-top: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 1em 2em;\n  border: 1px solid #000000;\n  fill: currentColor;\n  text-align: center;\n}\n\n.in-compare-btn {\n  color: #ff0000;\n}\n\n.products-compare-list {\n  display: flex;\n  gap: 10px;\n  overflow-x: auto;\n}\n\n.product-compare-item {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  gap: 10px;\n  min-width: 200px;\n  padding: 20px;\n}\n.product-compare-img-box {\n  position: relative;\n}\n.product-compare-img {\n  height: 120px;\n  width: 100px;\n  overflow: hidden;\n  border-radius: 10px;\n}\n.product-compare-title {\n  font-size: 14px;\n  max-width: 200px;\n  text-align: center;\n  color: inherit;\n}\n.remove-compare-product-bnt {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 15px;\n  height: 15px;\n}\n\n.backdrop {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(43, 42, 42, 0.63);\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 250ms linear, visibility 250ms linear;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.on-close {\n  visibility: hidden;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.modal {\n  position: absolute;\n  /* top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); */\n  background-color: #ffffffad;\n  color: #000000;\n  overflow-y: auto;\n  overflow-x: hidden;\n  gap: 50px;\n  max-height: calc(100vh - 10%);\n  max-width: 700px;\n  border-radius: 10px;\n  padding: 20px;\n}\n\n@media screen and (max-width: 700px) {\n  .modal {\n    min-width: 280px;\n    width: 100vw;\n  }\n}\n\n.table-box {\n  border-radius: 10px;\n  width: 100%;\n  overflow-x: auto;\n  border: 2px solid #c4c4c4e3;\n  box-shadow: #c4c4c4e3 2px 2px 0 0;\n}\n\n@media screen and (max-width: 700px) {\n  .table-box {\n    min-width: 280px;\n  }\n}\n\n.product-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-width: 200px;\n}\n\n.product-info-box {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n\n.product-action-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n\n.modal-product-img {\n  width: 100px;\n  height: 120px;\n  overflow: hidden;\n  border-radius: 10px;\n}\n\n.modal-product-title {\n  text-align: center;\n  font-size: 18px;\n}\n\n.add-to-cart-modal-btn {\n  padding: 10px;\n  width: 100%;\n  background-color: #fbeee0;\n  border: 2px solid #0067dd;\n  border-radius: 10px;\n  box-shadow: #0067dd 2px 2px 0 0;\n  color: #0067dd;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 10px;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n.add-to-cart-modal-btn:hover {\n  background-color: #fff;\n}\n\n.add-to-cart-modal-btn:active {\n  box-shadow: #0067dd 1px 1px 0 0;\n  transform: translate(1px, 1px);\n}\n\n.modal-product-link {\n  font-size: 14px;\n}\n\n.modal-product-link:hover {\n  text-decoration: underline;\n}\n\n.compare-table {\n  border-radius: 10px;\n  border-collapse: collapse;\n  background-color: #ffffff;\n}\n\n.compare-table-cell {\n  padding: 10px;\n  border: 2px solid #c4c4c4e3;\n  border-right: 0px solid #c4c4c4e3;\n  border-top: 0px solid #c4c4c4e3;\n}\n\n.border-cell-left {\n  padding: 10px;\n  border-right: 2px solid #c4c4c4e3;\n  border-bottom: 2px solid #c4c4c4e3;\n}\n\n.modal-text {\n  text-align: center;\n}\n\n.thead-bg {\n  background-color: rgb(241, 241, 241);\n  position: sticky;\n  left: 0;\n  z-index: 999;\n}\n\n.close-modal-btn {\n  position: absolute;\n  top: 2px;\n  right: 5px;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  background-color: #fbeee0;\n  border: 2px solid #707070e3;\n  box-shadow: #707070e3 2px 2px 0 0;\n  color: #707070e3;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 600;\n  font-size: 14px;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n\n.close-modal-btn:hover {\n  background-color: #fff;\n}\n\n.close-modal-btn:active {\n  box-shadow: #707070e3 1px 1px 0 0;\n  transform: translate(1px, 1px);\n}\n\n.remove-compare-product-bnt {\n  position: absolute;\n  top: -2px;\n  right: -5px;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  background-color: #fbeee0;\n  border: 2px solid #f84040e3;\n  box-shadow: #f84040e3 2px 2px 0 0;\n  color: #f84040e3;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 600;\n  font-size: 14px;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n\n.remove-compare-product-bnt:hover {\n  background-color: #fff;\n}\n\n.remove-compare-product-bnt:active {\n  box-shadow: #f84040e3 1px 1px 0 0;\n  transform: translate(1px, 1px);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-comparison/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-comparison/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-comparison/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n  var p;\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (!a[p]) {\n      return false;\n    }\n  }\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-comparison/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-comparison/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-comparison/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-comparison/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-comparison/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-comparison/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-comparison/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api/addProductToCard.ts":
/*!*************************************!*\
  !*** ./src/api/addProductToCard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProductToCard: () => (/* binding */ addProductToCard)\n/* harmony export */ });\n/* harmony import */ var _updateCartInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateCartInfo */ \"./src/api/updateCartInfo.ts\");\n\nvar addProductToCard = function (id) {\n    var requestData = {\n        items: [\n            {\n                id: id,\n                quantity: 1,\n            },\n        ],\n        sections: \"cart-icon-bubble,cart-live-region-text,main-cart-items,main-cart-footer,shopify-section-template--15788854575310__cart-footer\",\n    };\n    fetch(\"/cart/add.js\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify(requestData),\n    })\n        .then(function (response) { return response.json(); })\n        .then(function (data) {\n        (0,_updateCartInfo__WEBPACK_IMPORTED_MODULE_0__.updateCartInfo)(data.sections);\n    })\n        .catch(function (error) {\n        console.error(\"Error adding product to cart:\", error);\n    });\n};\n\n\n//# sourceURL=webpack://project-comparison/./src/api/addProductToCard.ts?");

/***/ }),

/***/ "./src/api/updateCartInfo.ts":
/*!***********************************!*\
  !*** ./src/api/updateCartInfo.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateCartInfo: () => (/* binding */ updateCartInfo)\n/* harmony export */ });\nvar updateCartInfo = function (section) {\n    var cardIconBubble = document.getElementById(\"cart-icon-bubble\");\n    var cartLiveRegionText = document.getElementById(\"cart-live-region-text\");\n    if (section[\"cart-icon-bubble\"]) {\n        cardIconBubble.innerHTML = section[\"cart-icon-bubble\"];\n    }\n    if (section[\"cart-live-region-text\"] && location.pathname === \"/cart\") {\n        cartLiveRegionText.innerHTML = section[\"cart-live-region-text\"];\n    }\n    fetch(\"/cart.js\", {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"X-Requested-With\": \"XMLHttpRequest\",\n        },\n    })\n        .then(function (response) { return response.json(); })\n        .then(function (cartData) {\n        document.documentElement.dispatchEvent(new CustomEvent(\"cart:refresh\", {\n            bubbles: !0,\n            detail: cartData.items,\n        }));\n        document.dispatchEvent(new CustomEvent(\"cart:build\", { bubbles: true }));\n        document.dispatchEvent(new CustomEvent(\"cart:refresh\", {\n            bubbles: true,\n            detail: cartData.items,\n        }));\n    })\n        .catch(function (error) {\n        console.error(\"Error updating cart information:\", error);\n    });\n};\n\n\n//# sourceURL=webpack://project-comparison/./src/api/updateCartInfo.ts?");

/***/ }),

/***/ "./src/helpers/addToCompareBtnStyle.ts":
/*!*********************************************!*\
  !*** ./src/helpers/addToCompareBtnStyle.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToCompareBtnTextSTyle: () => (/* binding */ addToCompareBtnTextSTyle)\n/* harmony export */ });\n/* harmony import */ var _ts_mark_up_iconsMarkUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ts/mark-up/iconsMarkUp */ \"./src/ts/mark-up/iconsMarkUp.ts\");\n/* harmony import */ var _attributesParsedData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributesParsedData */ \"./src/helpers/attributesParsedData.ts\");\n\n\nvar addToCompareBtnTextSTyle = function (isToggle) {\n    var btnEl = document.querySelector(\".add-to-compare-btn\");\n    btnEl.style.display = _attributesParsedData__WEBPACK_IMPORTED_MODULE_1__.attributesData.parsedProdBtnStyle.show\n        ? \"flex\"\n        : \"none\";\n    if (isToggle) {\n        btnEl.innerHTML = \"\";\n        btnEl.textContent = _attributesParsedData__WEBPACK_IMPORTED_MODULE_1__.attributesData.parsedProdBtnStyle.showLabel\n            ? \"Remove from compare\"\n            : \"\";\n        if (_attributesParsedData__WEBPACK_IMPORTED_MODULE_1__.attributesData.parsedProdBtnStyle.showIcon) {\n            btnEl.insertAdjacentHTML(\"afterbegin\", _ts_mark_up_iconsMarkUp__WEBPACK_IMPORTED_MODULE_0__.minusMarkUp);\n        }\n        btnEl.style.color = _attributesParsedData__WEBPACK_IMPORTED_MODULE_1__.attributesData.parsedProdBtnStyle\n            .removeFromCompareTextColor\n            ? _attributesParsedData__WEBPACK_IMPORTED_MODULE_1__.attributesData.parsedProdBtnStyle.removeFromCompareTextColor\n            : \"red\";\n    }\n    else {\n        btnEl.innerHTML = \"\";\n        btnEl.textContent = _attributesParsedData__WEBPACK_IMPORTED_MODULE_1__.attributesData.parsedProdBtnStyle.showLabel\n            ? \"Add to compare\"\n            : \"\";\n        if (_attributesParsedData__WEBPACK_IMPORTED_MODULE_1__.attributesData.parsedProdBtnStyle.showIcon) {\n            btnEl.insertAdjacentHTML(\"afterbegin\", _ts_mark_up_iconsMarkUp__WEBPACK_IMPORTED_MODULE_0__.plusMarkUp);\n        }\n        btnEl.style.color = _attributesParsedData__WEBPACK_IMPORTED_MODULE_1__.attributesData.parsedProdBtnStyle.addToCompareTextColor\n            ? _attributesParsedData__WEBPACK_IMPORTED_MODULE_1__.attributesData.parsedProdBtnStyle.addToCompareTextColor\n            : \"red\";\n    }\n};\n\n\n//# sourceURL=webpack://project-comparison/./src/helpers/addToCompareBtnStyle.ts?");

/***/ }),

/***/ "./src/helpers/attributesParsedData.ts":
/*!*********************************************!*\
  !*** ./src/helpers/attributesParsedData.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   attributesData: () => (/* binding */ attributesData)\n/* harmony export */ });\nvar dataTableStyleEl = document.getElementById(\"myTableStyle\");\nvar tableStyleAttributeData = dataTableStyleEl.getAttribute(\"data-table-style\");\nvar parsedTableStyle = JSON.parse(tableStyleAttributeData);\nvar dataProdEl = document.getElementById(\"myProductData\");\nvar myProductData = dataProdEl.getAttribute(\"data-my-var\");\nvar defProdMeta = JSON.parse(myProductData);\nvar dataFixedBtnStyle = document.getElementById(\"myFixedBtnStyle\");\nvar fixedBtnStyleAttribute = dataFixedBtnStyle === null || dataFixedBtnStyle === void 0 ? void 0 : dataFixedBtnStyle.getAttribute(\"data-fixed-btn\");\nvar fixedBtnStyle = JSON.parse(fixedBtnStyleAttribute);\nvar dataToolbarStyleEl = document.getElementById(\"myToolbarStyle\");\nvar toolbarAttributeData = dataToolbarStyleEl === null || dataToolbarStyleEl === void 0 ? void 0 : dataToolbarStyleEl.getAttribute(\"data-toolbar-style\");\nvar parsedToolbarStyle = JSON.parse(toolbarAttributeData);\nvar dataProdBtnStyle = document.getElementById(\"myProductButtonStyle\");\nvar prodBtnStyleAttributeData = dataProdBtnStyle === null || dataProdBtnStyle === void 0 ? void 0 : dataProdBtnStyle.getAttribute(\"data-prod-btn-style\");\nvar parsedProdBtnStyle = JSON.parse(prodBtnStyleAttributeData);\nvar attributesData = {\n    parsedTableStyle: parsedTableStyle,\n    defProdMeta: defProdMeta,\n    fixedBtnStyle: fixedBtnStyle,\n    parsedToolbarStyle: parsedToolbarStyle,\n    parsedProdBtnStyle: parsedProdBtnStyle,\n};\n\n\n//# sourceURL=webpack://project-comparison/./src/helpers/attributesParsedData.ts?");

/***/ }),

/***/ "./src/helpers/modalButtonsStyle.ts":
/*!******************************************!*\
  !*** ./src/helpers/modalButtonsStyle.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modalButtonsStyle: () => (/* binding */ modalButtonsStyle)\n/* harmony export */ });\n/* harmony import */ var _toolbarBtnsStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbarBtnsStyle */ \"./src/helpers/toolbarBtnsStyle.ts\");\n\nvar modalButtonsStyle = function (style) {\n    var addToCardBtnEls = document.querySelectorAll(\".add-to-cart-modal-btn\");\n    var closeModalBtn = document.querySelector(\".close-modal-btn\");\n    addToCardBtnEls.forEach(function (btn) {\n        (0,_toolbarBtnsStyle__WEBPACK_IMPORTED_MODULE_0__.toolbarBtnStyle)(btn, {\n            textColor: style.attributesTextColor,\n            backColor: style.attributesBackColor,\n        }, \"#0067dd\", 2);\n    });\n    (0,_toolbarBtnsStyle__WEBPACK_IMPORTED_MODULE_0__.toolbarBtnStyle)(closeModalBtn, {\n        textColor: style.topbarTextColor,\n        backColor: style.topbarBackColor,\n    }, \"#707070e3\", 2);\n};\n\n\n//# sourceURL=webpack://project-comparison/./src/helpers/modalButtonsStyle.ts?");

/***/ }),

/***/ "./src/helpers/priceRefactore.ts":
/*!***************************************!*\
  !*** ./src/helpers/priceRefactore.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRefactorPrice: () => (/* binding */ getRefactorPrice)\n/* harmony export */ });\nvar getRefactorPrice = function (price) {\n    var refactorPrice = price.toString().split(\"\");\n    refactorPrice.splice(refactorPrice.length - 2, 0, \".\");\n    refactorPrice.splice(refactorPrice.length - 6, 0, \",\");\n    return refactorPrice.join(\"\");\n};\n\n\n//# sourceURL=webpack://project-comparison/./src/helpers/priceRefactore.ts?");

/***/ }),

/***/ "./src/helpers/toolbarBtnsStyle.ts":
/*!*****************************************!*\
  !*** ./src/helpers/toolbarBtnsStyle.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toolbarBtnStyle: () => (/* binding */ toolbarBtnStyle)\n/* harmony export */ });\nvar toolbarBtnStyle = function (el, style, defaultColor, shadowSize) {\n    if (shadowSize === void 0) { shadowSize = 4; }\n    el.style.color = style.textColor ? style.textColor : defaultColor;\n    el.style.borderColor = style.backColor ? style.backColor : defaultColor;\n    el.style.boxShadow = style.backColor\n        ? \"\".concat(style.backColor, \" \").concat(shadowSize, \"px \").concat(shadowSize, \"px 0 0\")\n        : \"\".concat(defaultColor, \" \").concat(shadowSize, \"px \").concat(shadowSize, \"px 0 0\");\n    el.addEventListener(\"mousedown\", function () {\n        el.style.boxShadow = style.backColor\n            ? \"\".concat(style.backColor, \" \").concat(shadowSize / 2, \"px \").concat(shadowSize / 2, \"px 0 0\")\n            : \"\".concat(defaultColor, \" \").concat(shadowSize / 2, \"px \").concat(shadowSize / 2, \"px 0 0\");\n        el.style.transform = \"translate(\".concat(shadowSize / 2, \"px, \").concat(shadowSize / 2, \"px)\");\n    });\n    el.addEventListener(\"mouseup\", function () {\n        el.style.boxShadow = style.backColor\n            ? \"\".concat(style.backColor, \" \").concat(shadowSize, \"px \").concat(shadowSize, \"px 0 0\")\n            : \"\".concat(defaultColor, \" \").concat(shadowSize, \"px \").concat(shadowSize, \"px 0 0\");\n        el.style.transform = \"translate(0px, 0px)\";\n    });\n};\n\n\n//# sourceURL=webpack://project-comparison/./src/helpers/toolbarBtnsStyle.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _ts_mark_up_compareMenuMarkUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts/mark-up/compareMenuMarkUp */ \"./src/ts/mark-up/compareMenuMarkUp.ts\");\n/* harmony import */ var _ts_mark_up_compareBtnMarkUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ts/mark-up/compareBtnMarkUp */ \"./src/ts/mark-up/compareBtnMarkUp.ts\");\n/* harmony import */ var _ts_mark_up_productCompareItemMarkUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ts/mark-up/productCompareItemMarkUp */ \"./src/ts/mark-up/productCompareItemMarkUp.ts\");\n/* harmony import */ var _ts_interactionWithCompareMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ts/interactionWithCompareMenu */ \"./src/ts/interactionWithCompareMenu.ts\");\n/* harmony import */ var _ts_createAddCompareBtnn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ts/createAddCompareBtnn */ \"./src/ts/createAddCompareBtnn.ts\");\n/* harmony import */ var _ts_clearCompareList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ts/clearCompareList */ \"./src/ts/clearCompareList.ts\");\n/* harmony import */ var _ts_removeProductFromCompareList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ts/removeProductFromCompareList */ \"./src/ts/removeProductFromCompareList.ts\");\n/* harmony import */ var _ts_interactionWithAddCompareBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ts/interactionWithAddCompareBtn */ \"./src/ts/interactionWithAddCompareBtn.ts\");\n\n\n\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    var parsedProdData = JSON.parse(localStorage.getItem(\"product-data\"));\n    var products = JSON.parse(localStorage.getItem(\"products-compare\"));\n    (0,_ts_mark_up_compareBtnMarkUp__WEBPACK_IMPORTED_MODULE_2__.compareBtnMarkUp)(products);\n    (0,_ts_mark_up_compareMenuMarkUp__WEBPACK_IMPORTED_MODULE_1__.compareMenuMarkUp)();\n    if (products) {\n        (0,_ts_mark_up_productCompareItemMarkUp__WEBPACK_IMPORTED_MODULE_3__.productCompareItemMarkUp)(products);\n    }\n    (0,_ts_interactionWithCompareMenu__WEBPACK_IMPORTED_MODULE_4__.interactionWithCompareMenu)();\n    (0,_ts_createAddCompareBtnn__WEBPACK_IMPORTED_MODULE_5__.createAddCompareBtn)(parsedProdData === null || parsedProdData === void 0 ? void 0 : parsedProdData.id);\n    (0,_ts_interactionWithAddCompareBtn__WEBPACK_IMPORTED_MODULE_8__.interactionWithAddCompareBtn)(parsedProdData);\n    (0,_ts_removeProductFromCompareList__WEBPACK_IMPORTED_MODULE_7__.removeProductFromCompareList)();\n    (0,_ts_clearCompareList__WEBPACK_IMPORTED_MODULE_6__.clearCompareList)();\n    document.addEventListener(\"cart:refresh\", function (event) {\n        if (location.pathname === \"/cart\") {\n            location.reload();\n        }\n    });\n});\n\n\n//# sourceURL=webpack://project-comparison/./src/index.ts?");

/***/ }),

/***/ "./src/ts/clearCompareList.ts":
/*!************************************!*\
  !*** ./src/ts/clearCompareList.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearCompareList: () => (/* binding */ clearCompareList)\n/* harmony export */ });\n/* harmony import */ var _helpers_addToCompareBtnStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/addToCompareBtnStyle */ \"./src/helpers/addToCompareBtnStyle.ts\");\n\nvar clearCompareList = function () {\n    var cleanBtn = document.querySelector(\".clean-btn\");\n    var addToCompareBtn = document.querySelector(\".add-to-compare-btn\");\n    var compareBtnEl = document.querySelector(\".compare-btn\");\n    var compareBtnProdIntText = document.querySelector(\".compare-btn-prod-int-text\");\n    cleanBtn.addEventListener(\"click\", function () {\n        var products = JSON.parse(localStorage.getItem(\"products-compare\"));\n        if (products) {\n            var productsCompareList = document.querySelector(\".products-compare-list\");\n            compareBtnEl.style.display = \"none\";\n            productsCompareList.innerHTML = \"\";\n            if (products.some(function (product) {\n                return product.id === Number(addToCompareBtn.id);\n            })) {\n                addToCompareBtn === null || addToCompareBtn === void 0 ? void 0 : addToCompareBtn.classList.toggle(\"in-compare-btn\");\n            }\n            (0,_helpers_addToCompareBtnStyle__WEBPACK_IMPORTED_MODULE_0__.addToCompareBtnTextSTyle)(addToCompareBtn.classList.contains(\"in-compare-btn\"));\n            compareBtnProdIntText.textContent = \"\".concat(products.length);\n            localStorage.setItem(\"products-compare\", JSON.stringify(null));\n        }\n    });\n};\n\n\n//# sourceURL=webpack://project-comparison/./src/ts/clearCompareList.ts?");

/***/ }),

/***/ "./src/ts/createAddCompareBtnn.ts":
/*!****************************************!*\
  !*** ./src/ts/createAddCompareBtnn.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAddCompareBtn: () => (/* binding */ createAddCompareBtn)\n/* harmony export */ });\n/* harmony import */ var _helpers_addToCompareBtnStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/addToCompareBtnStyle */ \"./src/helpers/addToCompareBtnStyle.ts\");\n/* harmony import */ var _mark_up_addCompareBtnMarkUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mark-up/addCompareBtnMarkUp */ \"./src/ts/mark-up/addCompareBtnMarkUp.ts\");\n\n\nvar createAddCompareBtn = function (id) {\n    var paymentBtnBox = document.querySelector(\".product-form__buttons\");\n    if (paymentBtnBox) {\n        var products = JSON.parse(localStorage.getItem(\"products-compare\"));\n        var compareBtn = (0,_mark_up_addCompareBtnMarkUp__WEBPACK_IMPORTED_MODULE_1__.addCompareBtnMarkUp)(id);\n        paymentBtnBox.appendChild(compareBtn);\n        if (products && products.some(function (product) { return product.id === id; })) {\n            compareBtn.classList.toggle(\"in-compare-btn\");\n            (0,_helpers_addToCompareBtnStyle__WEBPACK_IMPORTED_MODULE_0__.addToCompareBtnTextSTyle)(compareBtn.classList.contains(\"in-compare-btn\"));\n        }\n    }\n};\n\n\n//# sourceURL=webpack://project-comparison/./src/ts/createAddCompareBtnn.ts?");

/***/ }),

/***/ "./src/ts/interactionWithAddCompareBtn.ts":
/*!************************************************!*\
  !*** ./src/ts/interactionWithAddCompareBtn.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   interactionWithAddCompareBtn: () => (/* binding */ interactionWithAddCompareBtn)\n/* harmony export */ });\n/* harmony import */ var _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/attributesParsedData */ \"./src/helpers/attributesParsedData.ts\");\n/* harmony import */ var _helpers_addToCompareBtnStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/addToCompareBtnStyle */ \"./src/helpers/addToCompareBtnStyle.ts\");\n/* harmony import */ var _mark_up_productCompareItemMarkUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mark-up/productCompareItemMarkUp */ \"./src/ts/mark-up/productCompareItemMarkUp.ts\");\n/* harmony import */ var _removeProductFromCompareList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeProductFromCompareList */ \"./src/ts/removeProductFromCompareList.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\n\n\n\n\nvar interactionWithAddCompareBtn = function (parsedProdData) {\n    var addToCompareBtn = document.querySelector(\".add-to-compare-btn\");\n    var compareBtnEl = document.querySelector(\".compare-btn\");\n    var compareBtnProdIntText = document.querySelector(\".compare-btn-prod-int-text\");\n    var compareMenuEl = document.querySelector(\".compare-menu\");\n    addToCompareBtn === null || addToCompareBtn === void 0 ? void 0 : addToCompareBtn.addEventListener(\"click\", function (e) {\n        var btn = e.currentTarget;\n        var products = JSON.parse(localStorage.getItem(\"products-compare\"));\n        if (btn.classList.contains(\"in-compare-btn\")) {\n            btn.classList.toggle(\"in-compare-btn\");\n            (0,_helpers_addToCompareBtnStyle__WEBPACK_IMPORTED_MODULE_1__.addToCompareBtnTextSTyle)(btn.classList.contains(\"in-compare-btn\"));\n            var filteringProducts = products.filter(function (product) { return product.id !== parsedProdData.id; });\n            if (!filteringProducts.length) {\n                compareBtnEl.style.display = _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.fixedBtnStyle.show\n                    ? \"block\"\n                    : \"none\";\n                localStorage.setItem(\"products-compare\", JSON.stringify(null));\n            }\n            else {\n                localStorage.setItem(\"products-compare\", JSON.stringify(filteringProducts));\n            }\n            compareBtnProdIntText.textContent = \"\".concat(filteringProducts.length);\n            (0,_mark_up_productCompareItemMarkUp__WEBPACK_IMPORTED_MODULE_2__.productCompareItemMarkUp)(filteringProducts);\n        }\n        else {\n            btn.classList.toggle(\"in-compare-btn\");\n            (0,_helpers_addToCompareBtnStyle__WEBPACK_IMPORTED_MODULE_1__.addToCompareBtnTextSTyle)(btn.classList.contains(\"in-compare-btn\"));\n            compareBtnEl.style.display = \"block\";\n            if (products) {\n                var productsToCompare = __spreadArray(__spreadArray([], products, true), [__assign({}, parsedProdData)], false);\n                localStorage.setItem(\"products-compare\", JSON.stringify(productsToCompare));\n                compareBtnProdIntText.textContent = \"\".concat(productsToCompare.length);\n                (0,_mark_up_productCompareItemMarkUp__WEBPACK_IMPORTED_MODULE_2__.productCompareItemMarkUp)(productsToCompare);\n            }\n            else {\n                var productsToCompare = [__assign({}, parsedProdData)];\n                localStorage.setItem(\"products-compare\", JSON.stringify(productsToCompare));\n                compareBtnProdIntText.textContent = \"\".concat(productsToCompare.length);\n                (0,_mark_up_productCompareItemMarkUp__WEBPACK_IMPORTED_MODULE_2__.productCompareItemMarkUp)(productsToCompare);\n            }\n            if (_helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.parsedToolbarStyle.showToolbarAfterClickOnProductPage) {\n                compareMenuEl === null || compareMenuEl === void 0 ? void 0 : compareMenuEl.classList.add(\"open-menu\");\n            }\n        }\n        (0,_removeProductFromCompareList__WEBPACK_IMPORTED_MODULE_3__.removeProductFromCompareList)();\n    });\n};\n\n\n//# sourceURL=webpack://project-comparison/./src/ts/interactionWithAddCompareBtn.ts?");

/***/ }),

/***/ "./src/ts/interactionWithCompareMenu.ts":
/*!**********************************************!*\
  !*** ./src/ts/interactionWithCompareMenu.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   interactionWithCompareMenu: () => (/* binding */ interactionWithCompareMenu)\n/* harmony export */ });\n/* harmony import */ var _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/attributesParsedData */ \"./src/helpers/attributesParsedData.ts\");\n/* harmony import */ var _api_addProductToCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/addProductToCard */ \"./src/api/addProductToCard.ts\");\n/* harmony import */ var _mark_up_modalCompareMarkUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mark-up/modalCompareMarkUp */ \"./src/ts/mark-up/modalCompareMarkUp.ts\");\n/* harmony import */ var _removeProductFromCompareList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeProductFromCompareList */ \"./src/ts/removeProductFromCompareList.ts\");\n\n\n\n\nvar interactionWithCompareMenu = function () {\n    var compareBtnEl = document.querySelector(\".compare-btn\");\n    var closeBtnEl = document.querySelector(\".close-btn\");\n    var compareMenuEl = document.querySelector(\".compare-menu\");\n    var toCompareBtn = document.querySelector(\".to-compare-btn\");\n    compareBtnEl === null || compareBtnEl === void 0 ? void 0 : compareBtnEl.addEventListener(\"click\", function () {\n        if (_helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.parsedToolbarStyle.showToolbar) {\n            compareMenuEl === null || compareMenuEl === void 0 ? void 0 : compareMenuEl.classList.add(\"open-menu\");\n        }\n    });\n    closeBtnEl === null || closeBtnEl === void 0 ? void 0 : closeBtnEl.addEventListener(\"click\", function () {\n        compareMenuEl === null || compareMenuEl === void 0 ? void 0 : compareMenuEl.classList.remove(\"open-menu\");\n    });\n    toCompareBtn === null || toCompareBtn === void 0 ? void 0 : toCompareBtn.addEventListener(\"click\", function () {\n        var products = JSON.parse(localStorage.getItem(\"products-compare\"));\n        (0,_mark_up_modalCompareMarkUp__WEBPACK_IMPORTED_MODULE_2__.modalCompareMarkUp)(products, _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.defProdMeta);\n        var closeModalBtn = document.querySelector(\".close-modal-btn\");\n        var backdrop = document.querySelector(\".backdrop\");\n        var addToCartBtn = document.querySelectorAll(\".add-to-cart-modal-btn\");\n        addToCartBtn === null || addToCartBtn === void 0 ? void 0 : addToCartBtn.forEach(function (btn) {\n            return btn.addEventListener(\"click\", function () {\n                var productId = btn.id;\n                (0,_api_addProductToCard__WEBPACK_IMPORTED_MODULE_1__.addProductToCard)(productId);\n            });\n        });\n        backdrop === null || backdrop === void 0 ? void 0 : backdrop.classList.toggle(\"on-close\");\n        document.body.style.overflow = \"hidden\";\n        closeModalBtn === null || closeModalBtn === void 0 ? void 0 : closeModalBtn.addEventListener(\"click\", function () {\n            backdrop === null || backdrop === void 0 ? void 0 : backdrop.classList.toggle(\"on-close\");\n            window.removeEventListener(\"keydown\", handleEsc);\n            document.body.style.overflow = \"auto\";\n            backdrop === null || backdrop === void 0 ? void 0 : backdrop.remove();\n        });\n        window.addEventListener(\"keydown\", handleEsc);\n        function handleEsc(e) {\n            if (e.code === \"Escape\") {\n                backdrop === null || backdrop === void 0 ? void 0 : backdrop.classList.toggle(\"on-close\");\n                window.removeEventListener(\"keydown\", handleEsc);\n                document.body.style.overflow = \"auto\";\n                backdrop === null || backdrop === void 0 ? void 0 : backdrop.remove();\n            }\n        }\n        (0,_removeProductFromCompareList__WEBPACK_IMPORTED_MODULE_3__.removeProductFromCompareList)();\n    });\n};\n// window.location.href = \"/pages/compare-products\";\n// const shopifyDomain = \"sandbox2023.myshopify.com\";\n// const products = JSON.parse(\n//   localStorage.getItem(\"products-compare\") as string\n// );\n// const itemsToCompare = products.map((product: any) => product.id);\n// console.log(itemsToCompare);\n// const compareUrl =\n//   \"https://\" +\n//   shopifyDomain +\n//   \"/apps/products-compare/?items=\" +\n//   itemsToCompare.join(\"%2C\");\n// window.location.href = compareUrl;\n\n\n//# sourceURL=webpack://project-comparison/./src/ts/interactionWithCompareMenu.ts?");

/***/ }),

/***/ "./src/ts/mark-up/addCompareBtnMarkUp.ts":
/*!***********************************************!*\
  !*** ./src/ts/mark-up/addCompareBtnMarkUp.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCompareBtnMarkUp: () => (/* binding */ addCompareBtnMarkUp)\n/* harmony export */ });\n/* harmony import */ var _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/attributesParsedData */ \"./src/helpers/attributesParsedData.ts\");\n/* harmony import */ var _iconsMarkUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconsMarkUp */ \"./src/ts/mark-up/iconsMarkUp.ts\");\n\n\nvar addCompareBtnMarkUp = function (id) {\n    var btnEl = document.createElement(\"button\");\n    btnEl.type = \"button\";\n    btnEl.id = id ? id.toString() : \"\";\n    btnEl.textContent = _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.parsedProdBtnStyle.showLabel\n        ? \" Add to compare\"\n        : \"\";\n    btnEl.classList.add(\"add-to-compare-btn\");\n    btnEl.style.fill = \"currentColor\";\n    btnEl.style.backgroundColor = _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.parsedProdBtnStyle.backColor\n        ? _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.parsedProdBtnStyle.backColor\n        : \"inherit\";\n    btnEl.style.borderColor = _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.parsedProdBtnStyle.borderColor\n        ? _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.parsedProdBtnStyle.borderColor\n        : \"#000000\";\n    if (_helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.parsedProdBtnStyle.showIcon) {\n        btnEl.insertAdjacentHTML(\"afterbegin\", _iconsMarkUp__WEBPACK_IMPORTED_MODULE_1__.plusMarkUp);\n    }\n    return btnEl;\n};\n\n\n//# sourceURL=webpack://project-comparison/./src/ts/mark-up/addCompareBtnMarkUp.ts?");

/***/ }),

/***/ "./src/ts/mark-up/compareBtnMarkUp.ts":
/*!********************************************!*\
  !*** ./src/ts/mark-up/compareBtnMarkUp.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compareBtnMarkUp: () => (/* binding */ compareBtnMarkUp)\n/* harmony export */ });\n/* harmony import */ var _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/attributesParsedData */ \"./src/helpers/attributesParsedData.ts\");\n/* harmony import */ var _helpers_toolbarBtnsStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/toolbarBtnsStyle */ \"./src/helpers/toolbarBtnsStyle.ts\");\n\n\nvar compareBtnMarkUp = function (products) {\n    var element = document.createElement(\"button\");\n    var textEl = document.createElement(\"span\");\n    element.style.display = products ? \"block\" : \"none\";\n    (0,_helpers_toolbarBtnsStyle__WEBPACK_IMPORTED_MODULE_1__.toolbarBtnStyle)(element, {\n        textColor: _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.fixedBtnStyle.textColor,\n        backColor: _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.fixedBtnStyle.backColor,\n    }, \"#000000\");\n    textEl.style.backgroundColor = _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.fixedBtnStyle.backColor\n        ? _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.fixedBtnStyle.backColor\n        : \"#000000\";\n    element.textContent = \"Compare\";\n    element.style.color = _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.fixedBtnStyle.showLabel\n        ? _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.fixedBtnStyle.textColor\n        : \"transparent\";\n    textEl.textContent = \"\".concat(products ? products.length : 0);\n    textEl.classList.add(\"compare-btn-prod-int-text\");\n    element.classList.add(\"compare-btn\");\n    element.appendChild(textEl);\n    document.body.appendChild(element);\n};\n\n\n//# sourceURL=webpack://project-comparison/./src/ts/mark-up/compareBtnMarkUp.ts?");

/***/ }),

/***/ "./src/ts/mark-up/compareMenuMarkUp.ts":
/*!*********************************************!*\
  !*** ./src/ts/mark-up/compareMenuMarkUp.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compareMenuMarkUp: () => (/* binding */ compareMenuMarkUp)\n/* harmony export */ });\n/* harmony import */ var _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/attributesParsedData */ \"./src/helpers/attributesParsedData.ts\");\n/* harmony import */ var _helpers_toolbarBtnsStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/toolbarBtnsStyle */ \"./src/helpers/toolbarBtnsStyle.ts\");\n\n\nvar compareMenuMarkUp = function () {\n    var menuEl = document.createElement(\"div\");\n    var closeBtn = document.createElement(\"button\");\n    var cleanBtn = document.createElement(\"button\");\n    var toCompareBtn = document.createElement(\"button\");\n    var btnBox = document.createElement(\"div\");\n    var productsList = document.createElement(\"ul\");\n    closeBtn.textContent = \"Close\";\n    cleanBtn.textContent = \"Clean up\";\n    toCompareBtn.textContent = \"Compare\";\n    menuEl.style.backgroundColor = _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.parsedToolbarStyle\n        .backgroundColor\n        ? _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.parsedToolbarStyle.backgroundColor\n        : \"rgba(70, 69, 69, 0.767)\";\n    productsList.style.color = _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.parsedToolbarStyle.textColor\n        ? _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.parsedToolbarStyle.textColor\n        : \"#ffffff\";\n    (0,_helpers_toolbarBtnsStyle__WEBPACK_IMPORTED_MODULE_1__.toolbarBtnStyle)(closeBtn, {\n        textColor: _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.parsedToolbarStyle.closeButtonTextColor,\n        backColor: _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.parsedToolbarStyle.closeButtonBackColor,\n    }, \"#000000\");\n    (0,_helpers_toolbarBtnsStyle__WEBPACK_IMPORTED_MODULE_1__.toolbarBtnStyle)(cleanBtn, {\n        textColor: _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.parsedToolbarStyle.cleanUpButtonTextColor,\n        backColor: _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.parsedToolbarStyle.cleanUpButtonBackColor,\n    }, \"#fc893c\");\n    (0,_helpers_toolbarBtnsStyle__WEBPACK_IMPORTED_MODULE_1__.toolbarBtnStyle)(toCompareBtn, {\n        textColor: _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.parsedToolbarStyle.viewCompareButtonTextColor,\n        backColor: _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_0__.attributesData.parsedToolbarStyle.viewCompareButtonBackColor,\n    }, \"#0067dd\");\n    menuEl.classList.add(\"compare-menu\");\n    closeBtn.classList.add(\"close-btn\");\n    cleanBtn.classList.add(\"clean-btn\");\n    toCompareBtn.classList.add(\"to-compare-btn\");\n    btnBox.classList.add(\"btn-box\");\n    productsList.classList.add(\"products-compare-list\");\n    btnBox.append(toCompareBtn, cleanBtn, closeBtn);\n    menuEl.append(productsList, btnBox);\n    document.body.appendChild(menuEl);\n};\n\n\n//# sourceURL=webpack://project-comparison/./src/ts/mark-up/compareMenuMarkUp.ts?");

/***/ }),

/***/ "./src/ts/mark-up/compareOptionMarkup.ts":
/*!***********************************************!*\
  !*** ./src/ts/mark-up/compareOptionMarkup.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compareOptionMarkUp: () => (/* binding */ compareOptionMarkUp)\n/* harmony export */ });\n/* harmony import */ var _helpers_priceRefactore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/priceRefactore */ \"./src/helpers/priceRefactore.ts\");\n\nvar compareOptionMarkUp = function (products) {\n    return {\n        variantsTitle: products\n            .map(function (product) {\n            return \"<td class=\\\"compare-table-cell del-\".concat(product.id, \"\\\"><p class=\\\"modal-text\\\">\").concat(product.variants[0].title ? product.variants[0].title : \"-\", \"</p></td>\");\n        })\n            .join(\"\"),\n        price: products\n            .map(function (product) {\n            return \"<td class=\\\"compare-table-cell del-\".concat(product.id, \"\\\"><p class=\\\"modal-text\\\">\").concat(product.price ? \"\\u20B4\".concat((0,_helpers_priceRefactore__WEBPACK_IMPORTED_MODULE_0__.getRefactorPrice)(product.price), \" UAH\") : \"-\", \"</p></td>\");\n        })\n            .join(\"\"),\n        comparedAtPrice: products\n            .map(function (product) {\n            return \"<td class=\\\"compare-table-cell del-\".concat(product.id, \"\\\"><p class=\\\"modal-text\\\">\").concat(product.compare_at_price ? product.compare_at_price : \"-\", \"</p></td>\");\n        })\n            .join(\"\"),\n        sku: products\n            .map(function (product) {\n            return \"<td class=\\\"compare-table-cell del-\".concat(product.id, \"\\\"><p class=\\\"modal-text\\\">\").concat(product.variants[0].sku ? product.variants[0].sku : \"-\", \"</p></td>\");\n        })\n            .join(\"\"),\n        barcode: products\n            .map(function (product) {\n            return \"<td class=\\\"compare-table-cell del-\".concat(product.id, \"\\\"><p class=\\\"modal-text\\\">\").concat(product.variants[0].barcode ? product.variants[0].barcode : \"-\", \"</p></td>\");\n        })\n            .join(\"\"),\n        type: products\n            .map(function (product) {\n            return \"<td class=\\\"compare-table-cell del-\".concat(product.id, \"\\\"><p class=\\\"modal-text\\\">\").concat(product.type ? product.type : \"-\", \"</p></td>\");\n        })\n            .join(\"\"),\n        vendor: products\n            .map(function (product) {\n            return \"<td class=\\\"compare-table-cell del-\".concat(product.id, \"\\\"><p class=\\\"modal-text\\\">\").concat(product.vendor ? product.vendor : \"-\", \"</p></td>\");\n        })\n            .join(\"\"),\n        available: products\n            .map(function (product) {\n            return \"<td class=\\\"compare-table-cell del-\".concat(product.id, \"\\\"><p class=\\\"modal-text\\\">\").concat(product.available ? product.available : \"-\", \"</p></td>\");\n        })\n            .join(\"\"),\n        description: products\n            .map(function (product) {\n            return \"<td class=\\\"compare-table-cell del-\".concat(product.id, \"\\\"><p class=\\\"modal-text\\\">\").concat(product.description ? product.description : \"-\", \"</p></td>\");\n        })\n            .join(\"\"),\n        tags: products\n            .map(function (product) {\n            return \"<td class=\\\"compare-table-cell del-\".concat(product.id, \"\\\"><p class=\\\"modal-text\\\">\").concat(product.tags.length ? product.tags : \"-\", \"</p></td>\");\n        })\n            .join(\"\"),\n    };\n};\n\n\n//# sourceURL=webpack://project-comparison/./src/ts/mark-up/compareOptionMarkup.ts?");

/***/ }),

/***/ "./src/ts/mark-up/iconsMarkUp.ts":
/*!***************************************!*\
  !*** ./src/ts/mark-up/iconsMarkUp.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   minusMarkUp: () => (/* binding */ minusMarkUp),\n/* harmony export */   plusMarkUp: () => (/* binding */ plusMarkUp)\n/* harmony export */ });\nvar plusMarkUp = \"<svg version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"10\\\" height=\\\"10\\\" viewBox=\\\"0 0 32 32\\\">\\n<title>plus</title>\\n<path d=\\\"M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z\\\"></path>\\n</svg>\";\nvar minusMarkUp = \"<svg version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"10\\\" height=\\\"10\\\" viewBox=\\\"0 0 32 32\\\">\\n<title>minus</title>\\n<path d=\\\"M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z\\\"></path>\\n</svg>\";\n\n\n//# sourceURL=webpack://project-comparison/./src/ts/mark-up/iconsMarkUp.ts?");

/***/ }),

/***/ "./src/ts/mark-up/modalCompareMarkUp.ts":
/*!**********************************************!*\
  !*** ./src/ts/mark-up/modalCompareMarkUp.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modalCompareMarkUp: () => (/* binding */ modalCompareMarkUp)\n/* harmony export */ });\n/* harmony import */ var _helpers_modalButtonsStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/modalButtonsStyle */ \"./src/helpers/modalButtonsStyle.ts\");\n/* harmony import */ var _compareOptionMarkup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compareOptionMarkup */ \"./src/ts/mark-up/compareOptionMarkup.ts\");\n/* harmony import */ var _tableProductsMarkUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableProductsMarkUp */ \"./src/ts/mark-up/tableProductsMarkUp.ts\");\n/* harmony import */ var _tableCompareOptionMarkUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tableCompareOptionMarkUp */ \"./src/ts/mark-up/tableCompareOptionMarkUp.ts\");\n/* harmony import */ var _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/attributesParsedData */ \"./src/helpers/attributesParsedData.ts\");\n\n\n\n\n\nvar modalCompareMarkUp = function (products, defProdMeta) {\n    var markUpProduct = (0,_tableProductsMarkUp__WEBPACK_IMPORTED_MODULE_2__.tableProductsMarkUp)(products);\n    var option = (0,_compareOptionMarkup__WEBPACK_IMPORTED_MODULE_1__.compareOptionMarkUp)(products);\n    var modalMarkUp = \"<div class=\\\"backdrop on-close\\\">\\n      <div class=\\\"modal\\\">\\n      <button class=\\\"close-modal-btn\\\">X</button>\\n      <div class=\\\"table-box\\\">\\n      <table class=\\\"compare-table\\\"\\n      style=\\\"background-color:\".concat(_helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_4__.attributesData.parsedTableStyle.backColor, \" ; color:\").concat(_helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_4__.attributesData.parsedTableStyle.textColor, \" ;\\\">\\n          <tbody>\\n          <tr>\\n              <th class=\\\"thead-bg border-cell-left\\\" style=\\\"background-color:\").concat(_helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_4__.attributesData.parsedTableStyle.attributesGroupBackColor, \" ; color:\").concat(_helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_4__.attributesData.parsedTableStyle.attributesGroupTextColor, \" ;\\\">Products</th>\\n              \").concat(markUpProduct, \"             \\n            </tr>\\n          \").concat((0,_tableCompareOptionMarkUp__WEBPACK_IMPORTED_MODULE_3__.tableCompareOptionMarkUp)({\n        defProdMeta: defProdMeta,\n        parsedTableStyle: _helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_4__.attributesData.parsedTableStyle,\n        option: option,\n        products: products,\n    }), \"\\n          </tbody>\\n        </table>\\n      </div>\\n      </div>\\n    </div>\");\n    document.body.insertAdjacentHTML(\"beforeend\", modalMarkUp);\n    (0,_helpers_modalButtonsStyle__WEBPACK_IMPORTED_MODULE_0__.modalButtonsStyle)(_helpers_attributesParsedData__WEBPACK_IMPORTED_MODULE_4__.attributesData.parsedTableStyle);\n};\n\n\n//# sourceURL=webpack://project-comparison/./src/ts/mark-up/modalCompareMarkUp.ts?");

/***/ }),

/***/ "./src/ts/mark-up/productCompareItemMarkUp.ts":
/*!****************************************************!*\
  !*** ./src/ts/mark-up/productCompareItemMarkUp.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   productCompareItemMarkUp: () => (/* binding */ productCompareItemMarkUp)\n/* harmony export */ });\nvar productCompareItemMarkUp = function (products) {\n    var productsCompareList = document.querySelector(\".products-compare-list\");\n    productsCompareList.innerHTML = \"\";\n    var markUp = products\n        .map(function (product) { return \" <li class=\\\"product-compare-item\\\">\\n      <div class=\\\"product-compare-img-box\\\">\\n      <img src=\\\"\".concat(product.images[0], \"\\\" alt=\\\"mobile phone picture\\\" class=\\\"product-compare-img\\\" width=\\\"100\\\" height=\\\"100\\\">\\n      <button id=\\\"\").concat(product.id, \"\\\" class=\\\"remove-compare-product-bnt\\\" type=\\\"button\\\">X</button>\\n      </div>\\n      <h3 class=\\\"product-compare-title\\\">\").concat(product.title, \"</h3>\\n    </li>\"); })\n        .join(\"\");\n    productsCompareList.insertAdjacentHTML(\"afterbegin\", markUp);\n};\n\n\n//# sourceURL=webpack://project-comparison/./src/ts/mark-up/productCompareItemMarkUp.ts?");

/***/ }),

/***/ "./src/ts/mark-up/tableCompareOptionMarkUp.ts":
/*!****************************************************!*\
  !*** ./src/ts/mark-up/tableCompareOptionMarkUp.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tableCompareOptionMarkUp: () => (/* binding */ tableCompareOptionMarkUp)\n/* harmony export */ });\nvar tableCompareOptionMarkUp = function (dataObj) {\n    return dataObj.defProdMeta\n        .map(function (item) {\n        return \"\".concat(item.active\n            ? \"<tr>\\n              <th class=\\\"thead-bg border-cell-left\\\" style=\\\"background-color:\".concat(dataObj.parsedTableStyle.attributesGroupBackColor, \" ; color:\").concat(dataObj.parsedTableStyle.attributesGroupTextColor, \" ;\\\">\").concat(item.content, \"</th>\\n              \").concat(dataObj.option[\"\".concat(item.value)] ||\n                dataObj.products\n                    .map(function (product) {\n                    return \"<td class=\\\"compare-table-cell del-\".concat(product.id, \"\\\"><p class=\\\"modal-text\\\">\").concat(product[item.key] ? product[item.key] : \"-\", \"</p></td>\");\n                })\n                    .join(\"\"), \"\\n            </tr>\")\n            : \"\");\n    })\n        .join(\"\");\n};\n\n\n//# sourceURL=webpack://project-comparison/./src/ts/mark-up/tableCompareOptionMarkUp.ts?");

/***/ }),

/***/ "./src/ts/mark-up/tableProductsMarkUp.ts":
/*!***********************************************!*\
  !*** ./src/ts/mark-up/tableProductsMarkUp.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tableProductsMarkUp: () => (/* binding */ tableProductsMarkUp)\n/* harmony export */ });\nvar tableProductsMarkUp = function (products) {\n    return products\n        .map(function (product) {\n        return \"<th  scope=\\\"col\\\" class=\\\"compare-table-cell del-\".concat(product.id, \"\\\">\\n                <div class=\\\"product-container\\\">\\n                <div class=\\\"product-info-box\\\">\\n                <button id=\\\"\").concat(product.id, \"\\\" class=\\\"remove-compare-product-bnt\\\" type=\\\"button\\\">X</button>\\n                  <img src=\\\"\").concat(product.images[0], \"\\\" alt=\\\"product picture\\\" class=\\\"modal-product-img\\\"/>\\n                  <h3 class=\\\"modal-product-title\\\">\").concat(product.title, \"</h3>\\n                </div>\\n                <div class=\\\"product-action-box\\\">\\n                  <button id=\\\"\").concat(product.variants[0].id, \"\\\" class=\\\"add-to-cart-modal-btn\\\">Add to cart</button>\\n                  <a href=\\\"\").concat(product.url, \"\\\" class=\\\"modal-product-link\\\">Learn more</a>\\n                </div>\\n                </div>\\n              </th>\");\n    })\n        .join(\"\");\n};\n\n\n//# sourceURL=webpack://project-comparison/./src/ts/mark-up/tableProductsMarkUp.ts?");

/***/ }),

/***/ "./src/ts/removeProductFromCompareList.ts":
/*!************************************************!*\
  !*** ./src/ts/removeProductFromCompareList.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeProductFromCompareList: () => (/* binding */ removeProductFromCompareList)\n/* harmony export */ });\n/* harmony import */ var _helpers_addToCompareBtnStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/addToCompareBtnStyle */ \"./src/helpers/addToCompareBtnStyle.ts\");\n/* harmony import */ var _mark_up_productCompareItemMarkUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mark-up/productCompareItemMarkUp */ \"./src/ts/mark-up/productCompareItemMarkUp.ts\");\n\n\nvar removeProductFromCompareList = function () {\n    var addToCompareBtn = document.querySelector(\".add-to-compare-btn\");\n    var removeButtons = document.querySelectorAll(\".remove-compare-product-bnt\");\n    var compareBtnEl = document.querySelector(\".compare-btn\");\n    var compareBtnProdIntText = document.querySelector(\".compare-btn-prod-int-text\");\n    removeButtons.forEach(function (btn) {\n        return btn.addEventListener(\"click\", function () {\n            var products = JSON.parse(localStorage.getItem(\"products-compare\"));\n            if ((addToCompareBtn === null || addToCompareBtn === void 0 ? void 0 : addToCompareBtn.id) === btn.id) {\n                addToCompareBtn.classList.toggle(\"in-compare-btn\");\n                (0,_helpers_addToCompareBtnStyle__WEBPACK_IMPORTED_MODULE_0__.addToCompareBtnTextSTyle)(addToCompareBtn.classList.contains(\"in-compare-btn\"));\n            }\n            var filteringProducts = products.filter(function (product) { return product.id !== Number(btn.id); });\n            if (!filteringProducts.length) {\n                compareBtnEl.style.display = \"none\";\n                localStorage.setItem(\"products-compare\", JSON.stringify(null));\n            }\n            else {\n                localStorage.setItem(\"products-compare\", JSON.stringify(filteringProducts));\n            }\n            compareBtnProdIntText.textContent = \"\".concat(filteringProducts.length);\n            (0,_mark_up_productCompareItemMarkUp__WEBPACK_IMPORTED_MODULE_1__.productCompareItemMarkUp)(filteringProducts);\n            var allElWithId = document.querySelectorAll(\".del-\".concat(btn.id));\n            allElWithId.forEach(function (el) {\n                el.remove();\n            });\n            removeProductFromCompareList();\n        });\n    });\n};\n\n\n//# sourceURL=webpack://project-comparison/./src/ts/removeProductFromCompareList.ts?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
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
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("4f4deffbf27ebb9a10f0")
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "project-comparison:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
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
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, oldTag, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateproject_comparison"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
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
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;