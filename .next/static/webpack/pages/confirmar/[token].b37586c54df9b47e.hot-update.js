"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/confirmar/[token]",{

/***/ "./pages/confirmar/[token].jsx":
/*!*************************************!*\
  !*** ./pages/confirmar/[token].jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_Documentos_Documentos_Cursos_Curso_React_Proyectos_Ciber_cliente_stock_ciber_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_Documentos_Documentos_Cursos_Curso_React_Proyectos_Ciber_cliente_stock_ciber_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Documentos_Documentos_Cursos_Curso_React_Proyectos_Ciber_cliente_stock_ciber_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/axios */ \"./config/axios.jsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ConfirmarToken = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), token = ref[0], setToken = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var confirmarCuenta = function() {\n            var _ref = _asyncToGenerator(D_Documentos_Documentos_Cursos_Curso_React_Proyectos_Ciber_cliente_stock_ciber_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var url;\n                return D_Documentos_Documentos_Cursos_Curso_React_Proyectos_Ciber_cliente_stock_ciber_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            set;\n                            try {\n                                url = \"http://localhost:4000/api/auth/confirmar/\".concat(router.query.token);\n                                console.log(url);\n                            } catch (error) {\n                                console.log(error);\n                            }\n                        case 2:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function confirmarCuenta() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        confirmarCuenta();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: \"Ola\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Documentos\\\\Documentos\\\\Cursos\\\\Curso React\\\\Proyectos\\\\Ciber\\\\cliente\\\\stock-ciber\\\\pages\\\\confirmar\\\\[token].jsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(ConfirmarToken, \"0CvbIMnmVVVZNv9aoeUk9mZKRjk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ConfirmarToken;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConfirmarToken);\nvar _c;\n$RefreshReg$(_c, \"ConfirmarToken\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb25maXJtYXIvW3Rva2VuXS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0o7QUFDTTs7QUFFN0MsR0FBSyxDQUFDSSxjQUFjLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBQzFCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHSCxzREFBUztJQUV4QixHQUFLLENBQXFCRCxHQUFVLEdBQVZBLCtDQUFRLElBQTNCSyxLQUFLLEdBQWNMLEdBQVUsS0FBdEJNLFFBQVEsR0FBSU4sR0FBVTtJQUVwQ0QsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNiLEdBQUssQ0FBQ1EsZUFBZTttT0FBRyxRQUFRLFdBQUksQ0FBQztvQkFHdkJDLEdBQUc7Ozs7NEJBRmJDLEdBQUc7NEJBQ0gsR0FBRyxDQUFDLENBQUM7Z0NBQ0tELEdBQUcsR0FBSSxDQUF5QywyQ0FBcUIsT0FBbkJKLE1BQU0sQ0FBQ00sS0FBSyxDQUFDTCxLQUFLO2dDQUUxRU0sT0FBTyxDQUFDQyxHQUFHLENBQUNKLEdBQUc7NEJBQ25CLENBQUMsQ0FBQyxLQUFLLEVBQUVLLEtBQUssRUFBRSxDQUFDO2dDQUNiRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsS0FBSzs0QkFDckIsQ0FBQzs7Ozs7O1lBQ0wsQ0FBQzs0QkFUS04sZUFBZTs7OztRQVVyQkEsZUFBZTtJQUNuQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRVAsTUFBTTs4RkFFRE8sQ0FBRztzQkFBQyxDQUFHOzs7Ozs7O0FBR2QsQ0FBQztHQXhCS1gsY0FBYzs7UUFDREYsa0RBQVM7OztLQUR0QkUsY0FBYztBQTBCcEIsK0RBQWVBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29uZmlybWFyL1t0b2tlbl0uanN4PzM4NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tIFwiLi4vLi4vY29uZmlnL2F4aW9zXCI7XHJcblxyXG5jb25zdCBDb25maXJtYXJUb2tlbiA9ICgpID0+IHsgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29uZmlybWFyQ3VlbnRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL2F1dGgvY29uZmlybWFyLyR7cm91dGVyLnF1ZXJ5LnRva2VufWBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXJsKVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uZmlybWFyQ3VlbnRhKClcclxuICAgIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5PbGE8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1hclRva2VuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiY2xpZW50ZUF4aW9zIiwiQ29uZmlybWFyVG9rZW4iLCJyb3V0ZXIiLCJ0b2tlbiIsInNldFRva2VuIiwiY29uZmlybWFyQ3VlbnRhIiwidXJsIiwic2V0IiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/confirmar/[token].jsx\n");

/***/ })

});