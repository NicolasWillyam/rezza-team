"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "../../packages/ui/src/HomeContent.tsx":
/*!*********************************************!*\
  !*** ../../packages/ui/src/HomeContent.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomeContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tamagui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tamagui */ \"../../node_modules/tamagui/dist/esm/index.js\");\n\n\n\nfunction HomeContent() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(tamagui__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n        \"data-at\": \"HomeContent.tsx:6\",\n        \"data-is\": \"Stack\",\n        maxWidth: 1024,\n        marginHorizontal: \"auto\",\n        pt: \"60px\",\n        w: \"100%\",\n        h: \"100vh\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(tamagui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                \"data-at\": \"HomeContent.tsx:7\",\n                \"data-is\": \"Text\",\n                fontSize: 30,\n                mt: 30,\n                fontWeight: \"bold\",\n                color: \"white\",\n                children: \"Typeracer\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Tamagui/typeracer-stats/packages/ui/src/HomeContent.tsx\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(tamagui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                \"data-at\": \"HomeContent.tsx:10\",\n                \"data-is\": \"Text\",\n                fontSize: 30,\n                mt: 30,\n                fontWeight: \"bold\",\n                color: \"white\",\n                children: \"Leaderboard\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Tamagui/typeracer-stats/packages/ui/src/HomeContent.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Tamagui/typeracer-stats/packages/ui/src/HomeContent.tsx\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n_c = HomeContent;\nvar _c;\n$RefreshReg$(_c, \"HomeContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvdWkvc3JjL0hvbWVDb250ZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQ21CO0FBRTdCLFNBQVNHO0lBQ3RCLHFCQUNFLDhEQUFDRiwwQ0FBS0E7UUFBQUcsV0FBQTtRQUFBQyxXQUFBO1FBQUNDLFVBQVU7UUFBTUMsa0JBQWlCO1FBQU9DLElBQUc7UUFBT0MsR0FBRTtRQUFPQyxHQUFFOzswQkFDbEUsOERBQUNSLHlDQUFJQTtnQkFBQUUsV0FBQTtnQkFBQUMsV0FBQTtnQkFBQ00sVUFBVTtnQkFBSUMsSUFBSTtnQkFBSUMsWUFBVztnQkFBT0MsT0FBTzswQkFBUTs7Ozs7OzBCQUc3RCw4REFBQ1oseUNBQUlBO2dCQUFBRSxXQUFBO2dCQUFBQyxXQUFBO2dCQUFDTSxVQUFVO2dCQUFJQyxJQUFJO2dCQUFJQyxZQUFXO2dCQUFPQyxPQUFPOzBCQUFROzs7Ozs7Ozs7Ozs7QUFLbkU7S0FYd0JYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9wYWNrYWdlcy91aS9zcmMvSG9tZUNvbnRlbnQudHN4PzIwNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSW1hZ2UsIFN0YWNrLCBUZXh0IH0gZnJvbSAndGFtYWd1aSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZUNvbnRlbnQoKSB7XG4gIHJldHVybiAoXG4gICAgPFN0YWNrIG1heFdpZHRoPXsxMDI0fSBtYXJnaW5Ib3Jpem9udGFsPVwiYXV0b1wiIHB0PVwiNjBweFwiIHc9XCIxMDAlXCIgaD1cIjEwMHZoXCI+XG4gICAgICA8VGV4dCBmb250U2l6ZT17MzB9IG10PXszMH0gZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj17J3doaXRlJ30+XG4gICAgICAgIFR5cGVyYWNlclxuICAgICAgPC9UZXh0PlxuICAgICAgPFRleHQgZm9udFNpemU9ezMwfSBtdD17MzB9IGZvbnRXZWlnaHQ9XCJib2xkXCIgY29sb3I9eyd3aGl0ZSd9PlxuICAgICAgICBMZWFkZXJib2FyZFxuICAgICAgPC9UZXh0PlxuICAgIDwvU3RhY2s+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlN0YWNrIiwiVGV4dCIsIkhvbWVDb250ZW50IiwiZGF0YS1hdCIsImRhdGEtaXMiLCJtYXhXaWR0aCIsIm1hcmdpbkhvcml6b250YWwiLCJwdCIsInciLCJoIiwiZm9udFNpemUiLCJtdCIsImZvbnRXZWlnaHQiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../packages/ui/src/HomeContent.tsx\n"));

/***/ })

});