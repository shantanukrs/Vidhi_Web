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

/***/ "./pages/demo/democard.jsx":
/*!*********************************!*\
  !*** ./pages/demo/democard.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var E_projects_divisha_vidhi_website_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"E:\\\\projects\\\\divisha\\\\vidhi-website\\\\pages\\\\demo\\\\democard.jsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,E_projects_divisha_vidhi_website_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\nconst Democard = _ref => {\n  _s();\n\n  let {\n    text,\n    link\n  } = _ref;\n  const {\n    0: windowWidth,\n    1: setWindowWidth\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const {\n    0: isHovered,\n    1: setIsHovered\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const handleResize = () => {\n      setWindowWidth(window.innerWidth);\n    };\n\n    window.addEventListener(\"resize\", handleResize);\n    handleResize();\n    return () => {\n      window.removeEventListener(\"resize\", handleResize);\n    };\n  }, []);\n\n  const handleMouseEnter = () => {\n    setIsHovered(true);\n  };\n\n  const handleMouseLeave = () => {\n    setIsHovered(false);\n  };\n\n  const cardWidth = windowWidth > 600 ? \"180px\" : \"120px\";\n  const cardHeight = windowWidth > 600 ? \"100px\" : \"60px\";\n  const cardMargin = windowWidth > 600 ? \"20px\" : \"10px\";\n  const cardStyles = {\n    width: cardWidth,\n    height: cardHeight,\n    margin: cardMargin,\n    position: \"relative\",\n    backgroundColor: isHovered ? \"#2C2F37\" : \"transparent\",\n    transition: \"background-color 0.2s\",\n    cursor: \"pointer\"\n  };\n  const textFontSize = windowWidth > 600 ? \"20px\" : \"16px\";\n  const textStyles = {\n    marginTop: \"10px\",\n    textAlign: \"center\",\n    color: isHovered ? \"white\" : \"black\",\n    fontSize: textFontSize,\n    transition: \"color 0.2s, font-size 0.2s\",\n    cursor: \"pointer\"\n  };\n  const buttonFontSize = windowWidth > 600 ? \"18px\" : \"14px\";\n  const buttonStyles = {\n    marginTop: \"10px\",\n    fontSize: buttonFontSize\n  };\n\n  const handleClick = () => {\n    window.open(link, \"_blank\");\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n    className: \"card\",\n    sx: cardStyles,\n    onMouseEnter: handleMouseEnter,\n    onMouseLeave: handleMouseLeave,\n    onClick: handleClick,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n      sx: textStyles,\n      children: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, _objectSpread(_objectSpread({}, buttonStyles), {}, {\n      onClick: handleClick,\n      children: \"Watch Video\"\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Democard, \"Z+5L/pbVYDLcDD6wVzxdSlU+I4w=\");\n\n_c = Democard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Democard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Democard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sRUFBRUMsV0FBbkM7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFSRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFERjtBQWNELENBekVEOztHQUFNakM7O0tBQUFBO0FBMkVOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RlbW8vZGVtb2NhcmQuanN4P2MxZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBEZW1vY2FyZCA9ICh7IHRleHQsIGxpbmsgfSkgPT4ge1xyXG4gIGNvbnN0IFt3aW5kb3dXaWR0aCwgc2V0V2luZG93V2lkdGhdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICBoYW5kbGVSZXNpemUoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0hvdmVyZWQodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcclxuICAgIHNldElzSG92ZXJlZChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FyZFdpZHRoID0gd2luZG93V2lkdGggPiA2MDAgPyBcIjE4MHB4XCIgOiBcIjEyMHB4XCI7XHJcbiAgY29uc3QgY2FyZEhlaWdodCA9IHdpbmRvd1dpZHRoID4gNjAwID8gXCIxMDBweFwiIDogXCI2MHB4XCI7XHJcbiAgY29uc3QgY2FyZE1hcmdpbiA9IHdpbmRvd1dpZHRoID4gNjAwID8gXCIyMHB4XCIgOiBcIjEwcHhcIjtcclxuXHJcbiAgY29uc3QgY2FyZFN0eWxlcyA9IHtcclxuICAgIHdpZHRoOiBjYXJkV2lkdGgsXHJcbiAgICBoZWlnaHQ6IGNhcmRIZWlnaHQsXHJcbiAgICBtYXJnaW46IGNhcmRNYXJnaW4sXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0hvdmVyZWQgPyBcIiMyQzJGMzdcIiA6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIHRyYW5zaXRpb246IFwiYmFja2dyb3VuZC1jb2xvciAwLjJzXCIsXHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRleHRGb250U2l6ZSA9IHdpbmRvd1dpZHRoID4gNjAwID8gXCIyMHB4XCIgOiBcIjE2cHhcIjtcclxuICBjb25zdCB0ZXh0U3R5bGVzID0ge1xyXG4gICAgbWFyZ2luVG9wOiBcIjEwcHhcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGNvbG9yOiBpc0hvdmVyZWQgPyBcIndoaXRlXCIgOiBcImJsYWNrXCIsXHJcbiAgICBmb250U2l6ZTogdGV4dEZvbnRTaXplLFxyXG4gICAgdHJhbnNpdGlvbjogXCJjb2xvciAwLjJzLCBmb250LXNpemUgMC4yc1wiLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICB9O1xyXG5cclxuICBjb25zdCBidXR0b25Gb250U2l6ZSA9IHdpbmRvd1dpZHRoID4gNjAwID8gXCIxOHB4XCIgOiBcIjE0cHhcIjtcclxuICBjb25zdCBidXR0b25TdHlsZXMgPSB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxyXG4gICAgZm9udFNpemU6IGJ1dHRvbkZvbnRTaXplLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgd2luZG93Lm9wZW4obGluaywgXCJfYmxhbmtcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXHJcbiAgICAgIHN4PXtjYXJkU3R5bGVzfVxyXG4gICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZU1vdXNlRW50ZXJ9XHJcbiAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIDxUZXh0IHN4PXt0ZXh0U3R5bGVzfT57dGV4dH08L1RleHQ+XHJcbiAgICAgIDxCdXR0b24gey4uLmJ1dHRvblN0eWxlc30gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIFdhdGNoIFZpZGVvXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbW9jYXJkO1xyXG4iXSwibmFtZXMiOlsiQm94IiwiVGV4dCIsIkJ1dHRvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRGVtb2NhcmQiLCJ0ZXh0IiwibGluayIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJpc0hvdmVyZWQiLCJzZXRJc0hvdmVyZWQiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsImNhcmRXaWR0aCIsImNhcmRIZWlnaHQiLCJjYXJkTWFyZ2luIiwiY2FyZFN0eWxlcyIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc2l0aW9uIiwiY3Vyc29yIiwidGV4dEZvbnRTaXplIiwidGV4dFN0eWxlcyIsIm1hcmdpblRvcCIsInRleHRBbGlnbiIsImNvbG9yIiwiZm9udFNpemUiLCJidXR0b25Gb250U2l6ZSIsImJ1dHRvblN0eWxlcyIsImhhbmRsZUNsaWNrIiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/demo/democard.jsx\n"));

/***/ })

});