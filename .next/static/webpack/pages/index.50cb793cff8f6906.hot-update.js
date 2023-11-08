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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _democard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./democard */ \"./pages/demo/democard.jsx\");\n/* harmony import */ var _public_constants_colors_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/constants/colors/colors */ \"./public/constants/colors/colors.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"E:\\\\projects\\\\divisha\\\\vidhi-website\\\\pages\\\\demo\\\\demovideo.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Demovideo = () => {\n  _s();\n\n  const {\n    0: windowWidth,\n    1: setWindowWidth\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n\n  const handleResize = () => {\n    setWindowWidth(window.innerWidth);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    handleResize();\n    window.addEventListener(\"resize\", handleResize);\n    return () => {\n      window.removeEventListener(\"resize\", handleResize);\n    };\n  }, []);\n  const isSmallScreen = windowWidth < 600;\n  const headingFontSize = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBreakpointValue)({\n    base: \"20px\",\n    md: \"32px\",\n    lg: \"40px\"\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n    className: \"container\",\n    bg: _public_constants_colors_colors__WEBPACK_IMPORTED_MODULE_1__[\"default\"].siteBg,\n    mt: isSmallScreen ? 10 : 30,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      className: \"header\",\n      px: 4,\n      width: windowWidth > 600 ? \"80%\" : \"100%\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n          className: \"top-heading\",\n          fontSize: headingFontSize,\n          mt: 7,\n          fontFamily: \"Rubik\",\n          fontWeight: 400,\n          letterSpacing: \"0.46px\",\n          children: \"Vidhi Business Owner and Staff App Demonstration Videos\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        width: \"100%\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n          alignItems: \"center\",\n          justifyContent: \"center\",\n          gap: \"20px\",\n          py: 2,\n          my: 3,\n          flexDirection: isSmallScreen ? \"column\" : \"row\",\n          width: \"100%\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.HStack, {\n            mt: isSmallScreen ? 10 : 30,\n            spacing: 10,\n            justifyContent: \"center\",\n            flexDir: isSmallScreen ? \"column\" : \"row\",\n            marginLeft: isSmallScreen ? 0 : \"-17px\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n              text: \"English\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n              text: \"Hindi\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n              text: \"Odia\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n              text: \"Tamil\",\n              link: \"https://www.youtube.com/watch?v=xjalD-NM_zU\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n              text: \"Bengali\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n              text: \"Gujarati\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n              text: \"Kannada\",\n              link: \"https://www.youtube.com/watch?v=YnVQv1caqCQ&t=9s\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n              text: \"Telugu\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n              text: \"Nepali\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Demovideo, \"KgVJTfgLN5TfLX5BKt552NgxDwI=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBreakpointValue];\n});\n\n_c = Demovideo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demovideo);\n\nvar _c;\n\n$RefreshReg$(_c, \"Demovideo\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxpREFBRDtjQUFVLElBQUksRUFBQztZQUFmO2NBQUE7Y0FBQTtjQUFBO1lBQUEsYUFkRixlQWVFLDhEQUFDLGlEQUFEO2NBQVUsSUFBSSxFQUFDO1lBQWY7Y0FBQTtjQUFBO2NBQUE7WUFBQSxhQWZGLGVBZ0JFLDhEQUFDLGlEQUFEO2NBQ0UsSUFBSSxFQUFDLFNBRFA7Y0FHRSxJQUFJLEVBQUM7WUFIUDtjQUFBO2NBQUE7Y0FBQTtZQUFBLGFBaEJGLGVBcUJFLDhEQUFDLGlEQUFEO2NBQVUsSUFBSSxFQUFDO1lBQWY7Y0FBQTtjQUFBO2NBQUE7WUFBQSxhQXJCRixlQXNCRSw4REFBQyxpREFBRDtjQUFVLElBQUksRUFBQztZQUFmO2NBQUE7Y0FBQTtjQUFBO1lBQUEsYUF0QkY7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBVEY7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFiRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERjtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUFzREQsQ0ExRUQ7O0dBQU1SO1VBa0JvQkQ7OztLQWxCcEJDO0FBNEVOLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RlbW8vZGVtb3ZpZGVvLmpzeD9hMzRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSGVhZGluZywgRmxleCwgSFN0YWNrIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IERlbW9jYXJkIGZyb20gXCIuL2RlbW9jYXJkXCI7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcIi4uLy4uL3B1YmxpYy9jb25zdGFudHMvY29sb3JzL2NvbG9yc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUJyZWFrcG9pbnRWYWx1ZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5cclxuY29uc3QgRGVtb3ZpZGVvID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt3aW5kb3dXaWR0aCwgc2V0V2luZG93V2lkdGhdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBoYW5kbGVSZXNpemUoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBpc1NtYWxsU2NyZWVuID0gd2luZG93V2lkdGggPCA2MDA7XHJcblxyXG4gIGNvbnN0IGhlYWRpbmdGb250U2l6ZSA9IHVzZUJyZWFrcG9pbnRWYWx1ZSh7IGJhc2U6IFwiMjBweFwiLCBtZDogXCIzMnB4XCIsIGxnOiBcIjQwcHhcIiB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgYmc9e2NvbG9ycy5zaXRlQmd9IG10PXtpc1NtYWxsU2NyZWVuID8gMTAgOiAzMH0+XHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lPVwiaGVhZGVyXCIgcHg9ezR9IHdpZHRoPXt3aW5kb3dXaWR0aCA+IDYwMCA/IFwiODAlXCIgOiBcIjEwMCVcIn0+XHJcbiAgICAgICAgPEJveD5cclxuICAgICAgICAgIDxIZWFkaW5nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvcC1oZWFkaW5nXCJcclxuICAgICAgICAgICAgZm9udFNpemU9e2hlYWRpbmdGb250U2l6ZX1cclxuICAgICAgICAgICAgbXQ9ezd9XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJSdWJpa1wiXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9ezQwMH1cclxuICAgICAgICAgICAgbGV0dGVyU3BhY2luZz1cIjAuNDZweFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFZpZGhpIEJ1c2luZXNzIE93bmVyIGFuZCBTdGFmZiBBcHAgRGVtb25zdHJhdGlvbiBWaWRlb3NcclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiB3aWR0aD1cIjEwMCVcIj5cclxuICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIGdhcD1cIjIwcHhcIlxyXG4gICAgICAgICAgICBweT17Mn1cclxuICAgICAgICAgICAgbXk9ezN9XHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249e2lzU21hbGxTY3JlZW4gPyBcImNvbHVtblwiIDogXCJyb3dcIn1cclxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEhTdGFja1xyXG4gICAgICAgICAgICAgIG10PXtpc1NtYWxsU2NyZWVuID8gMTAgOiAzMH1cclxuICAgICAgICAgICAgICBzcGFjaW5nPXsxMH1cclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgZmxleERpcj17aXNTbWFsbFNjcmVlbiA/IFwiY29sdW1uXCIgOiBcInJvd1wifVxyXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ9e2lzU21hbGxTY3JlZW4gPyAwIDogXCItMTdweFwifVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPERlbW9jYXJkIHRleHQ9XCJFbmdsaXNoXCIgLz5cclxuICAgICAgICAgICAgICA8RGVtb2NhcmQgdGV4dD1cIkhpbmRpXCIgLz5cclxuICAgICAgICAgICAgICA8RGVtb2NhcmQgdGV4dD1cIk9kaWFcIiAvPlxyXG4gICAgICAgICAgICAgIDxEZW1vY2FyZFxyXG4gICAgICAgICAgICAgICAgdGV4dD1cIlRhbWlsXCJcclxuICAgICAgICAgICAgICAgIGxpbms9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXhqYWxELU5NX3pVXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEZW1vY2FyZCB0ZXh0PVwiQmVuZ2FsaVwiIC8+XHJcbiAgICAgICAgICAgICAgPERlbW9jYXJkIHRleHQ9XCJHdWphcmF0aVwiIC8+XHJcbiAgICAgICAgICAgICAgPERlbW9jYXJkXHJcbiAgICAgICAgICAgICAgICB0ZXh0PVwiS2FubmFkYVwiXHJcblxyXG4gICAgICAgICAgICAgICAgbGluaz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9WW5WUXYxY2FxQ1EmdD05c1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RGVtb2NhcmQgdGV4dD1cIlRlbHVndVwiIC8+XHJcbiAgICAgICAgICAgICAgPERlbW9jYXJkIHRleHQ9XCJOZXBhbGlcIiAvPlxyXG4gICAgICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbW92aWRlbztcclxuIl0sIm5hbWVzIjpbIkJveCIsIkhlYWRpbmciLCJGbGV4IiwiSFN0YWNrIiwiRGVtb2NhcmQiLCJjb2xvcnMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUJyZWFrcG9pbnRWYWx1ZSIsIkRlbW92aWRlbyIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc1NtYWxsU2NyZWVuIiwiaGVhZGluZ0ZvbnRTaXplIiwiYmFzZSIsIm1kIiwibGciLCJzaXRlQmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/demo/demovideo.jsx\n"));

/***/ })

});