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

/***/ "./pages/demo/demovideo.jsx":
/*!**********************************!*\
  !*** ./pages/demo/demovideo.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _democard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./democard */ \"./pages/demo/democard.jsx\");\n/* harmony import */ var _public_constants_colors_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/constants/colors/colors */ \"./public/constants/colors/colors.js\");\n/* harmony import */ var carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! carousel */ \"./node_modules/carousel/index.js\");\n/* harmony import */ var carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(carousel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"E:\\\\projects\\\\divisha\\\\vidhi-website\\\\pages\\\\demo\\\\demovideo.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n // Import the Carousel component\n\n\n\nconst Demovideo = () => {\n  _s();\n\n  const {\n    0: windowWidth,\n    1: setWindowWidth\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n\n  const handleResize = () => {\n    setWindowWidth(window.innerWidth);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    handleResize();\n    window.addEventListener(\"resize\", handleResize);\n    return () => {\n      window.removeEventListener(\"resize\", handleResize);\n    };\n  }, []);\n  const isSmallScreen = windowWidth < 600;\n  const headingFontSize = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useBreakpointValue)({\n    base: \"20px\",\n    md: \"32px\",\n    lg: \"40px\"\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n    className: \"container\",\n    bg: _public_constants_colors_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].siteBg,\n    mt: isSmallScreen ? 10 : 30,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n      className: \"header\",\n      px: 4,\n      width: windowWidth > 600 ? \"80%\" : \"100%\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n          className: \"top-heading\",\n          fontSize: headingFontSize,\n          mt: 7,\n          fontFamily: \"Rubik\",\n          fontWeight: 400,\n          letterSpacing: \"0.46px\",\n          children: \"Vidhi Business Owner and Staff App Demonstration Videos\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        width: \"100%\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n          alignItems: \"center\",\n          justifyContent: \"center\",\n          gap: \"20px\",\n          py: 2,\n          my: 3,\n          flexDirection: isSmallScreen ? \"column\" : \"row\",\n          width: \"100%\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {\n            mt: isSmallScreen ? 10 : 30,\n            spacing: 10,\n            justifyContent: \"center\",\n            flexDir: isSmallScreen ? \"column\" : \"row\",\n            marginLeft: isSmallScreen ? 0 : \"-17px\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((carousel__WEBPACK_IMPORTED_MODULE_3___default()), {\n              itemsToShow: 3,\n              children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"English\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Hindi\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Odia\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Tamil\",\n                link: \"https://www.youtube.com/watch?v=xjalD-NM_zU\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Bengali\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Gujarati\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Kannada\",\n                link: \"https://www.youtube.com/watch?v=YnVQv1caqCQ&t=9s\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Telugu\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Nepali\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 17\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 15\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Demovideo, \"KgVJTfgLN5TfLX5BKt552NgxDwI=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useBreakpointValue];\n});\n\n_c = Demovideo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demovideo);\n\nvar _c;\n\n$RefreshReg$(_c, \"Demovideo\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxFQUFDLE9BRFA7Z0JBRUUsSUFBSSxFQUFDO2NBRlA7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSxhQUpGLGVBUUUsOERBQUMsaURBQUQ7Z0JBQVUsSUFBSSxFQUFDO2NBQWY7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSxhQVJGLGVBU0UsOERBQUMsaURBQUQ7Z0JBQVUsSUFBSSxFQUFDO2NBQWY7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSxhQVRGLGVBVUUsOERBQUMsaURBQUQ7Z0JBQ0UsSUFBSSxFQUFDLFNBRFA7Z0JBRUUsSUFBSSxFQUFDO2NBRlA7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSxhQVZGLGVBY0UsOERBQUMsaURBQUQ7Z0JBQVUsSUFBSSxFQUFDO2NBQWY7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSxhQWRGLGVBZUUsOERBQUMsaURBQUQ7Z0JBQVUsSUFBSSxFQUFDO2NBQWY7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSxhQWZGO1lBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQVBGO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFURjtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQWJGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFERjtBQXVERCxDQTNFRDs7R0FBTVI7VUFrQm9CRjs7O0tBbEJwQkU7QUE2RU4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGVtby9kZW1vdmlkZW8uanN4P2EzNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBGbGV4LCBIU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgRGVtb2NhcmQgZnJvbSBcIi4vZGVtb2NhcmRcIjtcclxuaW1wb3J0IGNvbG9ycyBmcm9tIFwiLi4vLi4vcHVibGljL2NvbnN0YW50cy9jb2xvcnMvY29sb3JzXCI7XHJcbmltcG9ydCB7IHVzZUJyZWFrcG9pbnRWYWx1ZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiY2Fyb3VzZWxcIjsgLy8gSW1wb3J0IHRoZSBDYXJvdXNlbCBjb21wb25lbnRcclxuXHJcbmNvbnN0IERlbW92aWRlbyA9ICgpID0+IHtcclxuICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaGFuZGxlUmVzaXplKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaXNTbWFsbFNjcmVlbiA9IHdpbmRvd1dpZHRoIDwgNjAwO1xyXG5cclxuICBjb25zdCBoZWFkaW5nRm9udFNpemUgPSB1c2VCcmVha3BvaW50VmFsdWUoeyBiYXNlOiBcIjIwcHhcIiwgbWQ6IFwiMzJweFwiLCBsZzogXCI0MHB4XCIgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGJnPXtjb2xvcnMuc2l0ZUJnfSBtdD17aXNTbWFsbFNjcmVlbiA/IDEwIDogMzB9PlxyXG4gICAgICA8Qm94IGNsYXNzTmFtZT1cImhlYWRlclwiIHB4PXs0fSB3aWR0aD17d2luZG93V2lkdGggPiA2MDAgPyBcIjgwJVwiIDogXCIxMDAlXCJ9PlxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICA8SGVhZGluZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0b3AtaGVhZGluZ1wiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPXtoZWFkaW5nRm9udFNpemV9XHJcbiAgICAgICAgICAgIG10PXs3fVxyXG4gICAgICAgICAgICBmb250RmFtaWx5PVwiUnViaWtcIlxyXG4gICAgICAgICAgICBmb250V2VpZ2h0PXs0MDB9XHJcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc9XCIwLjQ2cHhcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBWaWRoaSBCdXNpbmVzcyBPd25lciBhbmQgU3RhZmYgQXBwIERlbW9uc3RyYXRpb24gVmlkZW9zXHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEZsZXggYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgd2lkdGg9XCIxMDAlXCI+XHJcbiAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBnYXA9XCIyMHB4XCJcclxuICAgICAgICAgICAgcHk9ezJ9XHJcbiAgICAgICAgICAgIG15PXszfVxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPXtpc1NtYWxsU2NyZWVuID8gXCJjb2x1bW5cIiA6IFwicm93XCJ9XHJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxIU3RhY2tcclxuICAgICAgICAgICAgICBtdD17aXNTbWFsbFNjcmVlbiA/IDEwIDogMzB9XHJcbiAgICAgICAgICAgICAgc3BhY2luZz17MTB9XHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgIGZsZXhEaXI9e2lzU21hbGxTY3JlZW4gPyBcImNvbHVtblwiIDogXCJyb3dcIn1cclxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0PXtpc1NtYWxsU2NyZWVuID8gMCA6IFwiLTE3cHhcIn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbCBpdGVtc1RvU2hvdz17M30+IHsvKiBDb25maWd1cmUgaXRlbXNUb1Nob3cgYXMgbmVlZGVkICovfVxyXG4gICAgICAgICAgICAgICAgPERlbW9jYXJkIHRleHQ9XCJFbmdsaXNoXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEZW1vY2FyZCB0ZXh0PVwiSGluZGlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPERlbW9jYXJkIHRleHQ9XCJPZGlhXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEZW1vY2FyZFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PVwiVGFtaWxcIlxyXG4gICAgICAgICAgICAgICAgICBsaW5rPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj14amFsRC1OTV96VVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPERlbW9jYXJkIHRleHQ9XCJCZW5nYWxpXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEZW1vY2FyZCB0ZXh0PVwiR3VqYXJhdGlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPERlbW9jYXJkXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9XCJLYW5uYWRhXCJcclxuICAgICAgICAgICAgICAgICAgbGluaz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9WW5WUXYxY2FxQ1EmdD05c1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPERlbW9jYXJkIHRleHQ9XCJUZWx1Z3VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPERlbW9jYXJkIHRleHQ9XCJOZXBhbGlcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVtb3ZpZGVvO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIkhlYWRpbmciLCJGbGV4IiwiSFN0YWNrIiwiRGVtb2NhcmQiLCJjb2xvcnMiLCJ1c2VCcmVha3BvaW50VmFsdWUiLCJDYXJvdXNlbCIsIkRlbW92aWRlbyIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc1NtYWxsU2NyZWVuIiwiaGVhZGluZ0ZvbnRTaXplIiwiYmFzZSIsIm1kIiwibGciLCJzaXRlQmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/demo/demovideo.jsx\n"));

/***/ })

});