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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _democard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./democard */ \"./pages/demo/democard.jsx\");\n/* harmony import */ var _public_constants_colors_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/constants/colors/colors */ \"./public/constants/colors/colors.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"E:\\\\projects\\\\divisha\\\\vidhi-website\\\\pages\\\\demo\\\\demovideo.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Demovideo = () => {\n  _s();\n\n  const {\n    0: windowWidth,\n    1: setWindowWidth\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n\n  const handleResize = () => {\n    setWindowWidth(window.innerWidth);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    handleResize();\n    window.addEventListener(\"resize\", handleResize);\n    return () => {\n      window.removeEventListener(\"resize\", handleResize);\n    };\n  }, []);\n  const isSmallScreen = windowWidth < 600;\n  const headingFontSize = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useBreakpointValue)({\n    base: \"20px\",\n    md: \"32px\",\n    lg: \"40px\"\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n    className: \"container\",\n    bg: _public_constants_colors_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].siteBg,\n    mt: isSmallScreen ? 10 : 30,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n      className: \"header\",\n      px: 4,\n      width: windowWidth > 600 ? \"80%\" : \"100%\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n          className: \"top-heading\",\n          fontSize: headingFontSize,\n          mt: 7,\n          fontFamily: \"Rubik\",\n          fontWeight: 400,\n          letterSpacing: \"0.46px\",\n          children: \"Vidhi Business Owner and Staff App Demonstration Videos\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        width: \"100%\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n          alignItems: \"center\",\n          justifyContent: \"center\",\n          gap: \"20px\",\n          py: 2,\n          my: 3,\n          flexDirection: isSmallScreen ? \"column\" : \"row\",\n          width: \"100%\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.HStack, {\n            mt: isSmallScreen ? 10 : 30,\n            spacing: 10,\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            flexDir: isSmallScreen ? \"column\" : \"row\",\n            marginLeft: isSmallScreen ? 0 : \"17px\",\n            children: isSmallScreen ?\n            /*#__PURE__*/\n            // Mobile View Carousel\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n              showArrows: true,\n              showStatus: true,\n              showThumbs: true,\n              emulateTouch: true,\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"English\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 19\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Hindi\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 19\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Odia\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 19\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Tamil\",\n                link: \"https://www.youtube.com/watch?v=xjalD-NM_zU\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 19\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Bengali\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 19\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Gujarati\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 19\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Kannada\",\n                link: \"https://www.youtube.com/watch?v=YnVQv1caqCQ&t=9s\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 19\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Telugu\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 19\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Nepali\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 73,\n                columnNumber: 19\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 17\n            }, undefined) :\n            /*#__PURE__*/\n            // Desktop View Carousel\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n              showArrows: true,\n              showStatus: true,\n              showThumbs: true,\n              emulateTouch: true,\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"English\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 19\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Hindi\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 19\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Odia\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 19\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Tamil\",\n                link: \"https://www.youtube.com/watch?v=xjalD-NM_zU\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 81,\n                columnNumber: 19\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Bengali\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 19\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Gujarati\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 83,\n                columnNumber: 19\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Kannada\",\n                link: \"https://www.youtube.com/watch?v=YnVQv1caqCQ&t=9s\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 84,\n                columnNumber: 19\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Telugu\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 19\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Nepali\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 19\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 17\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Demovideo, \"KgVJTfgLN5TfLX5BKt552NgxDwI=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useBreakpointValue];\n});\n\n_c = Demovideo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demovideo);\n\nvar _c;\n\n$RefreshReg$(_c, \"Demovideo\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsT0FBZjtnQkFBdUIsSUFBSSxFQUFDO2NBQTVCO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUEsYUFKRixlQUtFLDhEQUFDLGlEQUFEO2dCQUFVLElBQUksRUFBQztjQUFmO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUEsYUFMRixlQU1FLDhEQUFDLGlEQUFEO2dCQUFVLElBQUksRUFBQztjQUFmO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUEsYUFORixlQU9FLDhEQUFDLGlEQUFEO2dCQUFVLElBQUksRUFBQyxTQUFmO2dCQUF5QixJQUFJLEVBQUM7Y0FBOUI7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSxhQVBGLGVBUUUsOERBQUMsaURBQUQ7Z0JBQVUsSUFBSSxFQUFDO2NBQWY7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSxhQVJGLGVBU0UsOERBQUMsaURBQUQ7Z0JBQVUsSUFBSSxFQUFDO2NBQWY7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSxhQVRGO1lBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQXZCSjtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBVEY7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFiRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERjtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUFrRUQsQ0F0RkQ7O0dBQU1SO1VBa0JvQkY7OztLQWxCcEJFO0FBd0ZOLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RlbW8vZGVtb3ZpZGVvLmpzeD9hMzRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCwgSGVhZGluZywgRmxleCwgSFN0YWNrIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IERlbW9jYXJkIGZyb20gXCIuL2RlbW9jYXJkXCI7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcIi4uLy4uL3B1YmxpYy9jb25zdGFudHMvY29sb3JzL2NvbG9yc1wiO1xyXG5pbXBvcnQgeyB1c2VCcmVha3BvaW50VmFsdWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCI7XHJcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7XHJcblxyXG5jb25zdCBEZW1vdmlkZW8gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3dpbmRvd1dpZHRoLCBzZXRXaW5kb3dXaWR0aF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGhhbmRsZVJlc2l6ZSgpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGlzU21hbGxTY3JlZW4gPSB3aW5kb3dXaWR0aCA8IDYwMDtcclxuXHJcbiAgY29uc3QgaGVhZGluZ0ZvbnRTaXplID0gdXNlQnJlYWtwb2ludFZhbHVlKHsgYmFzZTogXCIyMHB4XCIsIG1kOiBcIjMycHhcIiwgbGc6IFwiNDBweFwiIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBjbGFzc05hbWU9XCJjb250YWluZXJcIiBiZz17Y29sb3JzLnNpdGVCZ30gbXQ9e2lzU21hbGxTY3JlZW4gPyAxMCA6IDMwfT5cclxuICAgICAgPEJveCBjbGFzc05hbWU9XCJoZWFkZXJcIiBweD17NH0gd2lkdGg9e3dpbmRvd1dpZHRoID4gNjAwID8gXCI4MCVcIiA6IFwiMTAwJVwifT5cclxuICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgPEhlYWRpbmdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9wLWhlYWRpbmdcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT17aGVhZGluZ0ZvbnRTaXplfVxyXG4gICAgICAgICAgICBtdD17N31cclxuICAgICAgICAgICAgZm9udEZhbWlseT1cIlJ1YmlrXCJcclxuICAgICAgICAgICAgZm9udFdlaWdodD17NDAwfVxyXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nPVwiMC40NnB4XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVmlkaGkgQnVzaW5lc3MgT3duZXIgYW5kIFN0YWZmIEFwcCBEZW1vbnN0cmF0aW9uIFZpZGVvc1xyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgZ2FwPVwiMjBweFwiXHJcbiAgICAgICAgICAgIHB5PXsyfVxyXG4gICAgICAgICAgICBteT17M31cclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj17aXNTbWFsbFNjcmVlbiA/IFwiY29sdW1uXCIgOiBcInJvd1wifVxyXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SFN0YWNrXHJcbiAgICAgICAgICAgICAgbXQ9e2lzU21hbGxTY3JlZW4gPyAxMCA6IDMwfVxyXG4gICAgICAgICAgICAgIHNwYWNpbmc9ezEwfVxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICBmbGV4RGlyPXtpc1NtYWxsU2NyZWVuID8gXCJjb2x1bW5cIiA6IFwicm93XCJ9XHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdD17aXNTbWFsbFNjcmVlbiA/IDAgOiBcIjE3cHhcIn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpc1NtYWxsU2NyZWVuID8gKFxyXG4gICAgICAgICAgICAgICAgLy8gTW9iaWxlIFZpZXcgQ2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBzaG93QXJyb3dzPXt0cnVlfSBzaG93U3RhdHVzPXt0cnVlfSBzaG93VGh1bWJzPXt0cnVlfSBlbXVsYXRlVG91Y2g9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICA8RGVtb2NhcmQgdGV4dD1cIkVuZ2xpc2hcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8RGVtb2NhcmQgdGV4dD1cIkhpbmRpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPERlbW9jYXJkIHRleHQ9XCJPZGlhXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPERlbW9jYXJkIHRleHQ9XCJUYW1pbFwiIGxpbms9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXhqYWxELU5NX3pVXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPERlbW9jYXJkIHRleHQ9XCJCZW5nYWxpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPERlbW9jYXJkIHRleHQ9XCJHdWphcmF0aVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxEZW1vY2FyZCB0ZXh0PVwiS2FubmFkYVwiIGxpbms9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVluVlF2MWNhcUNRJnQ9OXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8RGVtb2NhcmQgdGV4dD1cIlRlbHVndVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxEZW1vY2FyZCB0ZXh0PVwiTmVwYWxpXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIC8vIERlc2t0b3AgVmlldyBDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsIHNob3dBcnJvd3M9e3RydWV9IHNob3dTdGF0dXM9e3RydWV9IHNob3dUaHVtYnM9e3RydWV9IGVtdWxhdGVUb3VjaD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxEZW1vY2FyZCB0ZXh0PVwiRW5nbGlzaFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxEZW1vY2FyZCB0ZXh0PVwiSGluZGlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8RGVtb2NhcmQgdGV4dD1cIk9kaWFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8RGVtb2NhcmQgdGV4dD1cIlRhbWlsXCIgbGluaz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9eGphbEQtTk1felVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8RGVtb2NhcmQgdGV4dD1cIkJlbmdhbGlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8RGVtb2NhcmQgdGV4dD1cIkd1amFyYXRpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPERlbW9jYXJkIHRleHQ9XCJLYW5uYWRhXCIgbGluaz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9WW5WUXYxY2FxQ1EmdD05c1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxEZW1vY2FyZCB0ZXh0PVwiVGVsdWd1XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPERlbW9jYXJkIHRleHQ9XCJOZXBhbGlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbW92aWRlbztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCb3giLCJIZWFkaW5nIiwiRmxleCIsIkhTdGFjayIsIkRlbW9jYXJkIiwiY29sb3JzIiwidXNlQnJlYWtwb2ludFZhbHVlIiwiQ2Fyb3VzZWwiLCJEZW1vdmlkZW8iLCJ3aW5kb3dXaWR0aCIsInNldFdpbmRvd1dpZHRoIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNTbWFsbFNjcmVlbiIsImhlYWRpbmdGb250U2l6ZSIsImJhc2UiLCJtZCIsImxnIiwic2l0ZUJnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/demo/demovideo.jsx\n"));

/***/ })

});