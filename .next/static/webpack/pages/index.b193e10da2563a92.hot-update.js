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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _democard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./democard */ \"./pages/demo/democard.jsx\");\n/* harmony import */ var _public_constants_colors_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/constants/colors/colors */ \"./public/constants/colors/colors.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"E:\\\\projects\\\\divisha\\\\vidhi-website\\\\pages\\\\demo\\\\demovideo.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Demovideo = () => {\n  _s();\n\n  const {\n    0: windowWidth,\n    1: setWindowWidth\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n\n  const handleResize = () => {\n    setWindowWidth(window.innerWidth);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    handleResize();\n    window.addEventListener(\"resize\", handleResize);\n    return () => {\n      window.removeEventListener(\"resize\", handleResize);\n    };\n  }, []);\n  const isSmallScreen = windowWidth < 600;\n  const headingFontSize = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useBreakpointValue)({\n    base: \"20px\",\n    md: \"32px\",\n    lg: \"40px\"\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n    className: \"container\",\n    bg: _public_constants_colors_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].siteBg,\n    mt: isSmallScreen ? 10 : 30,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n      className: \"header\",\n      px: 4,\n      width: \"100%\",\n      children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n          className: \"top-heading\",\n          fontSize: headingFontSize,\n          mt: 7,\n          fontFamily: \"Rubik\",\n          fontWeight: 400,\n          letterSpacing: \"0.46px\",\n          children: \"Vidhi Business Owner and Staff App Demonstration Videos\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        width: \"100%\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n          alignItems: \"center\",\n          justifyContent: \"center\",\n          gap: \"20px\",\n          py: 2,\n          my: 3,\n          flexDirection: isSmallScreen ? \"column\" : \"row\",\n          width: \"100%\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.HStack, {\n            mt: isSmallScreen ? 10 : 30,\n            spacing: 10,\n            justifyContent: \"center\",\n            flexDir: isSmallScreen ? \"column\" : \"row\",\n            marginLeft: isSmallScreen ? 0 : \"90%\" // Remove marginLeft\n            ,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n              showArrows: true,\n              showStatus: true,\n              showThumbs: true,\n              emulateTouch: true,\n              marginLeft: true,\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"English\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Hindi\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Odia\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Tamil\",\n                link: \"https://www.youtube.com/watch?v=xjalD-NM_zU\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Bengali\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Gujarati\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Kannada\",\n                link: \"https://www.youtube.com/watch?v=YnVQv1caqCQ&t=9s\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Telugu\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 81,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_democard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Nepali\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 17\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 15\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Demovideo, \"KgVJTfgLN5TfLX5BKt552NgxDwI=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useBreakpointValue];\n});\n\n_c = Demovideo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demovideo);\n\nvar _c;\n\n$RefreshReg$(_c, \"Demovideo\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZW1vL2RlbW92aWRlby5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTVcsU0FBUyxHQUFHLE1BQU07RUFBQTs7RUFDdEIsTUFBTTtJQUFBLEdBQUNDLFdBQUQ7SUFBQSxHQUFjQztFQUFkLElBQWdDWCwrQ0FBUSxFQUE5Qzs7RUFFQSxNQUFNWSxZQUFZLEdBQUcsTUFBTTtJQUN6QkQsY0FBYyxDQUFDRSxNQUFNLENBQUNDLFVBQVIsQ0FBZDtFQUNELENBRkQ7O0VBSUFmLGdEQUFTLENBQUMsTUFBTTtJQUNkYSxZQUFZO0lBQ1pDLE1BQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NILFlBQWxDO0lBRUEsT0FBTyxNQUFNO01BQ1hDLE1BQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNKLFlBQXJDO0lBQ0QsQ0FGRDtFQUdELENBUFEsRUFPTixFQVBNLENBQVQ7RUFTQSxNQUFNSyxhQUFhLEdBQUdQLFdBQVcsR0FBRyxHQUFwQztFQUVBLE1BQU1RLGVBQWUsR0FBR1gsb0VBQWtCLENBQUM7SUFBRVksSUFBSSxFQUFFLE1BQVI7SUFBZ0JDLEVBQUUsRUFBRSxNQUFwQjtJQUE0QkMsRUFBRSxFQUFFO0VBQWhDLENBQUQsQ0FBMUM7RUFFQSxvQkFDRSw4REFBQyxpREFBRDtJQUFLLFNBQVMsRUFBQyxXQUFmO0lBQTJCLEVBQUUsRUFBRWYsOEVBQS9CO0lBQThDLEVBQUUsRUFBRVcsYUFBYSxHQUFHLEVBQUgsR0FBUSxFQUF2RTtJQUFBLHVCQUNFLDhEQUFDLGlEQUFEO01BQUssU0FBUyxFQUFDLFFBQWY7TUFBd0IsRUFBRSxFQUFFLENBQTVCO01BQStCLEtBQUssRUFBQyxNQUFyQztNQUFBLDZCQUNFLDhEQUFDLGlEQUFEO1FBQUEsdUJBQ0UsOERBQUMscURBQUQ7VUFDRSxTQUFTLEVBQUMsYUFEWjtVQUVFLFFBQVEsRUFBRUMsZUFGWjtVQUdFLEVBQUUsRUFBRSxDQUhOO1VBSUUsVUFBVSxFQUFDLE9BSmI7VUFLRSxVQUFVLEVBQUUsR0FMZDtVQU1FLGFBQWEsRUFBQyxRQU5oQjtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFERixlQWFFLDhEQUFDLGtEQUFEO1FBQU0sVUFBVSxFQUFDLFFBQWpCO1FBQTBCLGNBQWMsRUFBQyxRQUF6QztRQUFrRCxLQUFLLEVBQUMsTUFBeEQ7UUFBQSx1QkFDRSw4REFBQyxrREFBRDtVQUNFLFVBQVUsRUFBQyxRQURiO1VBRUUsY0FBYyxFQUFDLFFBRmpCO1VBR0UsR0FBRyxFQUFDLE1BSE47VUFJRSxFQUFFLEVBQUUsQ0FKTjtVQUtFLEVBQUUsRUFBRSxDQUxOO1VBTUUsYUFBYSxFQUFFRCxhQUFhLEdBQUcsUUFBSCxHQUFjLEtBTjVDO1VBT0UsS0FBSyxFQUFDLE1BUFI7VUFBQSx1QkFTRSw4REFBQyxvREFBRDtZQUNFLEVBQUUsRUFBRUEsYUFBYSxHQUFHLEVBQUgsR0FBUSxFQUQzQjtZQUVFLE9BQU8sRUFBRSxFQUZYO1lBR0UsY0FBYyxFQUFDLFFBSGpCO1lBSUUsT0FBTyxFQUFFQSxhQUFhLEdBQUcsUUFBSCxHQUFjLEtBSnRDO1lBS0csVUFBVSxFQUFFQSxhQUFhLEdBQUcsQ0FBSCxHQUFPLEtBTG5DLENBSzJDO1lBTDNDO1lBQUEsdUJBT0UsOERBQUMsK0RBQUQ7Y0FDRSxVQUFVLEVBQUUsSUFEZDtjQUVFLFVBQVUsRUFBRSxJQUZkO2NBR0UsVUFBVSxFQUFFLElBSGQ7Y0FJRSxZQUFZLEVBQUUsSUFKaEI7Y0FLRSxVQUFVLE1BTFo7Y0FBQSx3QkFPRSw4REFBQyxpREFBRDtnQkFBVSxJQUFJLEVBQUM7Y0FBZjtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBLGFBUEYsZUFRRSw4REFBQyxpREFBRDtnQkFBVSxJQUFJLEVBQUM7Y0FBZjtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBLGFBUkYsZUFTRSw4REFBQyxpREFBRDtnQkFBVSxJQUFJLEVBQUM7Y0FBZjtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBLGFBVEYsZUFVRSw4REFBQyxpREFBRDtnQkFDRSxJQUFJLEVBQUMsT0FEUDtnQkFFRSxJQUFJLEVBQUM7Y0FGUDtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBLGFBVkYsZUFjRSw4REFBQyxpREFBRDtnQkFBVSxJQUFJLEVBQUM7Y0FBZjtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBLGFBZEYsZUFlRSw4REFBQyxpREFBRDtnQkFBVSxJQUFJLEVBQUM7Y0FBZjtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBLGFBZkYsZUFnQkUsOERBQUMsaURBQUQ7Z0JBQ0UsSUFBSSxFQUFDLFNBRFA7Z0JBRUUsSUFBSSxFQUFDO2NBRlA7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSxhQWhCRixlQW9CRSw4REFBQyxpREFBRDtnQkFBVSxJQUFJLEVBQUM7Y0FBZjtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBLGFBcEJGLGVBcUJFLDhEQUFDLGlEQUFEO2dCQUFVLElBQUksRUFBQztjQUFmO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUEsYUFyQkY7WUFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBO1VBUEY7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQVRGO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFERjtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBYkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREY7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQURGO0FBNkRELENBakZEOztHQUFNUjtVQWtCb0JGOzs7S0FsQnBCRTtBQW1GTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kZW1vL2RlbW92aWRlby5qc3g/YTM0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIEhlYWRpbmcsIEZsZXgsIEhTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBEZW1vY2FyZCBmcm9tIFwiLi9kZW1vY2FyZFwiO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCIuLi8uLi9wdWJsaWMvY29uc3RhbnRzL2NvbG9ycy9jb2xvcnNcIjtcclxuaW1wb3J0IHsgdXNlQnJlYWtwb2ludFZhbHVlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xyXG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xyXG5cclxuY29uc3QgRGVtb3ZpZGVvID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt3aW5kb3dXaWR0aCwgc2V0V2luZG93V2lkdGhdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBoYW5kbGVSZXNpemUoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBpc1NtYWxsU2NyZWVuID0gd2luZG93V2lkdGggPCA2MDA7XHJcblxyXG4gIGNvbnN0IGhlYWRpbmdGb250U2l6ZSA9IHVzZUJyZWFrcG9pbnRWYWx1ZSh7IGJhc2U6IFwiMjBweFwiLCBtZDogXCIzMnB4XCIsIGxnOiBcIjQwcHhcIiB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgYmc9e2NvbG9ycy5zaXRlQmd9IG10PXtpc1NtYWxsU2NyZWVuID8gMTAgOiAzMH0+XHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lPVwiaGVhZGVyXCIgcHg9ezR9IHdpZHRoPVwiMTAwJVwiPiB7LyogQWx3YXlzIHVzZSBmdWxsIHdpZHRoICovfVxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICA8SGVhZGluZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0b3AtaGVhZGluZ1wiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPXtoZWFkaW5nRm9udFNpemV9XHJcbiAgICAgICAgICAgIG10PXs3fVxyXG4gICAgICAgICAgICBmb250RmFtaWx5PVwiUnViaWtcIlxyXG4gICAgICAgICAgICBmb250V2VpZ2h0PXs0MDB9XHJcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc9XCIwLjQ2cHhcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBWaWRoaSBCdXNpbmVzcyBPd25lciBhbmQgU3RhZmYgQXBwIERlbW9uc3RyYXRpb24gVmlkZW9zXHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEZsZXggYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgd2lkdGg9XCIxMDAlXCI+XHJcbiAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBnYXA9XCIyMHB4XCJcclxuICAgICAgICAgICAgcHk9ezJ9XHJcbiAgICAgICAgICAgIG15PXszfVxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPXtpc1NtYWxsU2NyZWVuID8gXCJjb2x1bW5cIiA6IFwicm93XCJ9XHJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxIU3RhY2tcclxuICAgICAgICAgICAgICBtdD17aXNTbWFsbFNjcmVlbiA/IDEwIDogMzB9XHJcbiAgICAgICAgICAgICAgc3BhY2luZz17MTB9XHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgIGZsZXhEaXI9e2lzU21hbGxTY3JlZW4gPyBcImNvbHVtblwiIDogXCJyb3dcIn1cclxuICAgICAgICAgICAgICAgbWFyZ2luTGVmdD17aXNTbWFsbFNjcmVlbiA/IDAgOiBcIjkwJVwifSAgLy8gUmVtb3ZlIG1hcmdpbkxlZnRcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgc2hvd0Fycm93cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNob3dTdGF0dXM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzaG93VGh1bWJzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZW11bGF0ZVRvdWNoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdFxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEZW1vY2FyZCB0ZXh0PVwiRW5nbGlzaFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8RGVtb2NhcmQgdGV4dD1cIkhpbmRpXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEZW1vY2FyZCB0ZXh0PVwiT2RpYVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8RGVtb2NhcmRcclxuICAgICAgICAgICAgICAgICAgdGV4dD1cIlRhbWlsXCJcclxuICAgICAgICAgICAgICAgICAgbGluaz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9eGphbEQtTk1felVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxEZW1vY2FyZCB0ZXh0PVwiQmVuZ2FsaVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8RGVtb2NhcmQgdGV4dD1cIkd1amFyYXRpXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEZW1vY2FyZFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PVwiS2FubmFkYVwiXHJcbiAgICAgICAgICAgICAgICAgIGxpbms9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVluVlF2MWNhcUNRJnQ9OXNcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxEZW1vY2FyZCB0ZXh0PVwiVGVsdWd1XCIgLz5cclxuICAgICAgICAgICAgICAgIDxEZW1vY2FyZCB0ZXh0PVwiTmVwYWxpXCIgLz5cclxuICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbW92aWRlbztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCb3giLCJIZWFkaW5nIiwiRmxleCIsIkhTdGFjayIsIkRlbW9jYXJkIiwiY29sb3JzIiwidXNlQnJlYWtwb2ludFZhbHVlIiwiQ2Fyb3VzZWwiLCJEZW1vdmlkZW8iLCJ3aW5kb3dXaWR0aCIsInNldFdpbmRvd1dpZHRoIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNTbWFsbFNjcmVlbiIsImhlYWRpbmdGb250U2l6ZSIsImJhc2UiLCJtZCIsImxnIiwic2l0ZUJnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/demo/demovideo.jsx\n"));

/***/ })

});