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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_constants_colors_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/constants/colors/colors */ \"./public/constants/colors/colors.js\");\n/* harmony import */ var _democard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./democard */ \"./pages/demo/democard.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"E:\\\\projects\\\\divisha\\\\vidhi-website\\\\pages\\\\demo\\\\demovideo.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Demovideo = () => {\n  _s();\n\n  const {\n    0: windowWidth,\n    1: setWindowWidth\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n\n  const handleResize = () => {\n    setWindowWidth(window.innerWidth);\n  };\n\n  const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n\n  const nextSlide = () => {\n    if (carouselRef) {\n      carouselRef.next();\n    }\n  };\n\n  const prevSlide = () => {\n    if (carouselRef) {\n      carouselRef.prev();\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    handleResize();\n    window.addEventListener(\"resize\", handleResize);\n    return () => {\n      window.removeEventListener(\"resize\", handleResize);\n    };\n  }, []);\n  const isSmallScreen = windowWidth < 600;\n  const headingFontSize = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useBreakpointValue)({\n    base: \"20px\",\n    md: \"32px\",\n    lg: \"40px\"\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n    className: \"container\",\n    bg: _public_constants_colors_colors__WEBPACK_IMPORTED_MODULE_3__[\"default\"].siteBg,\n    mt: isSmallScreen ? 10 : 30,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n      className: \"header\",\n      px: 4,\n      width: windowWidth > 600 ? \"80%\" : \"100%\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n          className: \"top-heading\",\n          fontSize: headingFontSize,\n          mt: 7,\n          fontFamily: \"Rubik\",\n          fontWeight: 400,\n          letterSpacing: \"0.46px\",\n          children: \"Vidhi Business Owner and Staff App Demonstration Videos\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        width: \"100%\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n          alignItems: \"center\",\n          justifyContent: \"center\",\n          gap: \"20px\",\n          py: 2,\n          my: 3,\n          flexDirection: isSmallScreen ? \"column\" : \"row\",\n          width: \"100%\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.HStack, {\n            mt: isSmallScreen ? 10 : 30,\n            spacing: 10,\n            justifyContent: \"center\",\n            flexDir: isSmallScreen ? \"column\" : \"row\",\n            marginLeft: isSmallScreen ? 0 : \"-17px\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {\n              autoPlay: false,\n              emulateTouch: true,\n              ref: el => carouselRef = el,\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                  text: \"English\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 77,\n                  columnNumber: 19\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                  text: \"Hindi\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 80,\n                  columnNumber: 19\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                  text: \"Odia\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 83,\n                  columnNumber: 19\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                  text: \"Tamil\",\n                  link: \"https://www.youtube.com/watch?v=xjalD-NM_zU\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 86,\n                  columnNumber: 19\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                  text: \"Bengali\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 89,\n                  columnNumber: 19\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 88,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                  text: \"Gujarati\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 92,\n                  columnNumber: 19\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 91,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                  text: \"Kannada\",\n                  link: \"https://www.youtube.com/watch?v=YnVQv1caqCQ&t=9s\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 95,\n                  columnNumber: 19\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 94,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                  text: \"Telugu\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 98,\n                  columnNumber: 19\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 97,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                  text: \"Nepali\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 101,\n                  columnNumber: 19\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 100,\n                columnNumber: 17\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n              onClick: prevSlide,\n              children: \"Previous\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n              onClick: nextSlide,\n              children: \"Next\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Demovideo, \"222iq/rZOth+s7TJOf2zrQkYWzE=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useBreakpointValue];\n});\n\n_c = Demovideo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demovideo);\n\nvar _c;\n\n$RefreshReg$(_c, \"Demovideo\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxFQUFDO2dCQUFmO2tCQUFBO2tCQUFBO2tCQUFBO2dCQUFBO2NBREY7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSxhQXRCRixlQXlCRTtnQkFBQSx1QkFDRSw4REFBQyxpREFBRDtrQkFBVSxJQUFJLEVBQUM7Z0JBQWY7a0JBQUE7a0JBQUE7a0JBQUE7Z0JBQUE7Y0FERjtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBLGFBekJGO1lBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQSxhQVBGLGVBb0NFO2NBQVEsT0FBTyxFQUFFVixTQUFqQjtjQUFBO1lBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQSxhQXBDRixlQXFDRTtjQUFRLE9BQU8sRUFBRUYsU0FBakI7Y0FBQTtZQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUEsYUFyQ0Y7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBVEY7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFiRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERjtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUFxRUQsQ0F2R0Q7O0dBQU1QO1VBZ0NvQko7OztLQWhDcEJJO0FBeUdOLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RlbW8vZGVtb3ZpZGVvLmpzeD9hMzRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBGbGV4LCBIU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VCcmVha3BvaW50VmFsdWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCI7XHJcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcIi4uLy4uL3B1YmxpYy9jb25zdGFudHMvY29sb3JzL2NvbG9yc1wiO1xyXG5pbXBvcnQgRGVtb2NhcmQgZnJvbSBcIi4vZGVtb2NhcmRcIjtcclxuXHJcbmNvbnN0IERlbW92aWRlbyA9ICgpID0+IHtcclxuICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2Fyb3VzZWxSZWYpIHtcclxuICAgICAgY2Fyb3VzZWxSZWYubmV4dCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcclxuICAgIGlmIChjYXJvdXNlbFJlZikge1xyXG4gICAgICBjYXJvdXNlbFJlZi5wcmV2KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGhhbmRsZVJlc2l6ZSgpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGlzU21hbGxTY3JlZW4gPSB3aW5kb3dXaWR0aCA8IDYwMDtcclxuXHJcbiAgY29uc3QgaGVhZGluZ0ZvbnRTaXplID0gdXNlQnJlYWtwb2ludFZhbHVlKHsgYmFzZTogXCIyMHB4XCIsIG1kOiBcIjMycHhcIiwgbGc6IFwiNDBweFwiIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBjbGFzc05hbWU9XCJjb250YWluZXJcIiBiZz17Y29sb3JzLnNpdGVCZ30gbXQ9e2lzU21hbGxTY3JlZW4gPyAxMCA6IDMwfT5cclxuICAgICAgPEJveCBjbGFzc05hbWU9XCJoZWFkZXJcIiBweD17NH0gd2lkdGg9e3dpbmRvd1dpZHRoID4gNjAwID8gXCI4MCVcIiA6IFwiMTAwJVwifT5cclxuICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgPEhlYWRpbmdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9wLWhlYWRpbmdcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT17aGVhZGluZ0ZvbnRTaXplfVxyXG4gICAgICAgICAgICBtdD17N31cclxuICAgICAgICAgICAgZm9udEZhbWlseT1cIlJ1YmlrXCJcclxuICAgICAgICAgICAgZm9udFdlaWdodD17NDAwfVxyXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nPVwiMC40NnB4XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVmlkaGkgQnVzaW5lc3MgT3duZXIgYW5kIFN0YWZmIEFwcCBEZW1vbnN0cmF0aW9uIFZpZGVvc1xyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgZ2FwPVwiMjBweFwiXHJcbiAgICAgICAgICAgIHB5PXsyfVxyXG4gICAgICAgICAgICBteT17M31cclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj17aXNTbWFsbFNjcmVlbiA/IFwiY29sdW1uXCIgOiBcInJvd1wifVxyXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SFN0YWNrXHJcbiAgICAgICAgICAgICAgbXQ9e2lzU21hbGxTY3JlZW4gPyAxMCA6IDMwfVxyXG4gICAgICAgICAgICAgIHNwYWNpbmc9ezEwfVxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICBmbGV4RGlyPXtpc1NtYWxsU2NyZWVuID8gXCJjb2x1bW5cIiA6IFwicm93XCJ9XHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdD17aXNTbWFsbFNjcmVlbiA/IDAgOiBcIi0xN3B4XCJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWwgYXV0b1BsYXk9e2ZhbHNlfSBlbXVsYXRlVG91Y2ggcmVmPXsoZWwpID0+IChjYXJvdXNlbFJlZiA9IGVsKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8RGVtb2NhcmQgdGV4dD1cIkVuZ2xpc2hcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8RGVtb2NhcmQgdGV4dD1cIkhpbmRpXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPERlbW9jYXJkIHRleHQ9XCJPZGlhXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPERlbW9jYXJkIHRleHQ9XCJUYW1pbFwiIGxpbms9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXhqYWxELU5NX3pVXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPERlbW9jYXJkIHRleHQ9XCJCZW5nYWxpXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPERlbW9jYXJkIHRleHQ9XCJHdWphcmF0aVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxEZW1vY2FyZCB0ZXh0PVwiS2FubmFkYVwiIGxpbms9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVluVlF2MWNhcUNRJnQ9OXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8RGVtb2NhcmQgdGV4dD1cIlRlbHVndVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxEZW1vY2FyZCB0ZXh0PVwiTmVwYWxpXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmV2U2xpZGV9PlByZXZpb3VzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0U2xpZGV9Pk5leHQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZW1vdmlkZW87XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiQm94IiwiSGVhZGluZyIsIkZsZXgiLCJIU3RhY2siLCJ1c2VCcmVha3BvaW50VmFsdWUiLCJDYXJvdXNlbCIsImNvbG9ycyIsIkRlbW9jYXJkIiwiRGVtb3ZpZGVvIiwid2luZG93V2lkdGgiLCJzZXRXaW5kb3dXaWR0aCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjYXJvdXNlbFJlZiIsIm5leHRTbGlkZSIsIm5leHQiLCJwcmV2U2xpZGUiLCJwcmV2IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc1NtYWxsU2NyZWVuIiwiaGVhZGluZ0ZvbnRTaXplIiwiYmFzZSIsIm1kIiwibGciLCJzaXRlQmciLCJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/demo/demovideo.jsx\n"));

/***/ })

});