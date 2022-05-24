"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/historial/compras/compraReducer.jsx":
/*!*****************************************************!*\
  !*** ./context/historial/compras/compraReducer.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ comprareducer; }\n/* harmony export */ });\n/* harmony import */ var _types_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../types/index */ \"./types/index.jsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nfunction comprareducer(state, action) {\n    switch(action.type){\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.CREAR_COMPRA:\n            return _objectSpread({}, state, {\n                compras: state.compras.map(function(compra) {\n                    return compra.idProducto === action.payload.idProducto ? action.payload : _toConsumableArray(state.compras).concat([\n                        action.payload\n                    ]);\n                })\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.TRAER_COMPRAS:\n            return _objectSpread({}, state, {\n                compras: action.payload\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.FILTRO_COMPRA:\n            return _objectSpread({}, state, {\n                filtrados: state.compras.filter(function(compra) {\n                    return compra.nombre.toString().toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\").includes(action.payload.toLowerCase() ? action.payload : compra) || compra.marca.toString().toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\").includes(action.payload.toLowerCase() ? action.payload : compra) || compra.modelo.toString().toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\").includes(action.payload.toLowerCase() ? action.payload : compra);\n                })\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_NOMBRE_COMPRA:\n            return _objectSpread({}, state, {\n                //ordeno el state segun letra. El primer payload es false(por default el state está asi), entonces devuelve el objeto arreglado de menor a mayor, y si es true lo devuelve de mayor a menor.\n                compras: action.payload ? state.compras.sort(function(a, b) {\n                    return b.nombre > a.nombre ? 1 : -1;\n                }) : !action.payload ? state.compras.sort(function(a, b) {\n                    return a.nombre > b.nombre ? 1 : -1;\n                }) : state.compras\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_MARCA_COMPRA:\n            return _objectSpread({}, state, {\n                //ordeno el state segun letra. El primer payload es false(por default el state está asi), entonces devuelve el objeto arreglado de menor a mayor, y si es true lo devuelve de mayor a menor.\n                compras: action.payload ? state.compras.sort(function(a, b) {\n                    return b.marca > a.marca ? 1 : -1;\n                }) : !action.payload ? state.compras.sort(function(a, b) {\n                    return a.marca > b.marca ? 1 : -1;\n                }) : state.compras\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_MODELO_COMPRA:\n            return _objectSpread({}, state, {\n                //ordeno el state segun letra. El primer payload es false(por default el state está asi), entonces devuelve el objeto arreglado de menor a mayor, y si es true lo devuelve de mayor a menor.\n                compras: action.payload ? state.compras.sort(function(a, b) {\n                    return b.modelo > a.modelo ? 1 : -1;\n                }) : !action.payload ? state.compras.sort(function(a, b) {\n                    return a.modelo > b.modelo ? 1 : -1;\n                }) : state.compras\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_PROVEEDOR_COMPRA:\n            return _objectSpread({}, state, {\n                //ordeno el state segun letra. El primer payload es false(por default el state está asi), entonces devuelve el objeto arreglado de menor a mayor, y si es true lo devuelve de mayor a menor.\n                compras: action.payload ? state.compras.sort(function(a, b) {\n                    return b.proveedor > a.proveedor ? 1 : -1;\n                }) : !action.payload ? state.compras.sort(function(a, b) {\n                    return a.proveedor > b.proveedor ? 1 : -1;\n                }) : state.compras\n            });\n        case ORDENAR_DISPONIBLES_COMPRA:\n            return _objectSpread({}, state, {\n                compras: action.payload ? state.compras.sort(function(a, b) {\n                    return b.disponibles - a.disponibles;\n                }) : !action.payload ? state.compras.sort(function(a, b) {\n                    return a.disponibles - b.disponibles;\n                }) : state.compras\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_CODIGO_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.codigo - a.codigo;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.codigo - b.codigo;\n                }) : state.filtrados\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_NOMBRE_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.nombre > a.nombre ? 1 : -1;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.nombre > b.nombre ? 1 : -1;\n                }) : state.filtrados\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_MARCA_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.marca > a.marca ? 1 : -1;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.marca > b.marca ? 1 : -1;\n                }) : state.filtrados\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_MODELO_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.modelo > a.modelo ? 1 : -1;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.modelo > b.modelo ? 1 : -1;\n                }) : state.filtrados\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_RUBRO_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.rubro > a.rubro ? 1 : -1;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.rubro > b.rubro ? 1 : -1;\n                }) : state.filtrados\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_PROVEEDOR_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.proveedor > a.proveedor ? 1 : -1;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.proveedor > b.proveedor ? 1 : -1;\n                }) : state.filtrados\n            });\n        case ORDENAR_DISPONIBLES_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.disponibles > a.disponibles ? 1 : -1;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.disponibles > b.disponibles ? 1 : -1;\n                }) : state.filtrados\n            });\n        default:\n            return state;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2hpc3RvcmlhbC9jb21wcmFzL2NvbXByYVJlZHVjZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0I2QjtBQUVkLFNBQVNlLGFBQWEsQ0FBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUU7SUFDbEQsT0FBT0EsTUFBTSxDQUFDQyxJQUFJO1FBQ2QsS0FBS2xCLHNEQUFZO1lBQ2IsT0FBTyxrQkFDQWdCLEtBQUs7Z0JBQ1JHLE9BQU8sRUFBRUgsS0FBSyxDQUFDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBQUEsTUFBTTsyQkFBSUEsTUFBTSxDQUFDQyxVQUFVLEtBQUtMLE1BQU0sQ0FBQ00sT0FBTyxDQUFDRCxVQUFVLEdBQUdMLE1BQU0sQ0FBQ00sT0FBTyxHQUFHLG1CQUFJUCxLQUFLLENBQUNHLE9BQU8sQ0FBYkgsUUFBSjt3QkFBbUJDLE1BQU0sQ0FBQ00sT0FBTztxQkFBQztpQkFBQSxDQUFDO2NBQzlJO1FBQ0wsS0FBS3RCLHVEQUFhO1lBQ2QsT0FBTyxrQkFDQWUsS0FBSztnQkFDUkcsT0FBTyxFQUFFRixNQUFNLENBQUNNLE9BQU87Y0FDMUI7UUFDRCxLQUFLckIsdURBQWE7WUFDZCxPQUFPLGtCQUNBYyxLQUFLO2dCQUNSUSxTQUFTLEVBQUVSLEtBQUssQ0FBQ0csT0FBTyxDQUFDTSxNQUFNLENBQUNKLFNBQUFBLE1BQU07MkJBQ2xDQSxNQUFNLENBQUNLLE1BQU0sQ0FDSkMsUUFBUSxFQUFFLENBQ1ZDLFdBQVcsRUFBRSxDQUNiQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUNDLE9BQU8scUJBQXFCLEVBQUUsQ0FBQyxDQUNoREMsUUFBUSxDQUFDZCxNQUFNLENBQUNNLE9BQU8sQ0FBQ0ssV0FBVyxFQUFFLEdBQUdYLE1BQU0sQ0FBQ00sT0FBTyxHQUFHRixNQUFNLENBQUMsSUFDdEVBLE1BQU0sQ0FBQ1csS0FBSyxDQUNOTCxR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LE1BQU0sQ0FBQ00sT0FBTyxHQUFHUCxLQUFLLENBQUNRLFNBQVMsQ0FBQ1UsSUFBSSxDQUFDLFNBQUNDLENBQUMsRUFBQ0MsQ0FBQzsyQkFBS0EsQ0FBQyxDQUFDQyxTQUFTLEdBQUdGLENBQUMsQ0FBQ0UsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQUEsQ0FBQyxHQUFHLENBQUNwQixNQUFNLENBQUNNLE9BQU8sR0FBR1AsS0FBSyxDQUFDUSxTQUFTLENBQUNVLElBQUksQ0FBQyxTQUFDQyxDQUFDLEVBQUNDLENBQUM7MkJBQUtELENBQUMsQ0FBQ0UsU0FBUyxHQUFHRCxDQUFDLENBQUNDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUFBLENBQUMsR0FBR3JCLEtBQUssQ0FBQ1EsU0FBUztjQUV4TTtRQUNMLEtBQUtrQixtQ0FBbUM7WUFDcEMsT0FBTyxrQkFDQTFCLEtBQUs7Z0JBQ1JRLFNBQVMsRUFBRVAsTUFBTSxDQUFDTSxPQUFPLEdBQUdQLEtBQUssQ0FBQ1EsU0FBUyxDQUFDVSxJQUFJLENBQUMsU0FBQ0MsQ0FBQyxFQUFDQyxDQUFDOzJCQUFLQSxDQUFDLENBQUNHLFdBQVcsR0FBR0osQ0FBQyxDQUFDSSxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFBQSxDQUFDLEdBQUcsQ0FBQ3RCLE1BQU0sQ0FBQ00sT0FBTyxHQUFHUCxLQUFLLENBQUNRLFNBQVMsQ0FBQ1UsSUFBSSxDQUFDLFNBQUNDLENBQUMsRUFBQ0MsQ0FBQzsyQkFBS0QsQ0FBQyxDQUFDSSxXQUFXLEdBQUdILENBQUMsQ0FBQ0csV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQUEsQ0FBQyxHQUFHdkIsS0FBSyxDQUFDUSxTQUFTO2NBRWhOO1FBQ1Q7WUFDSSxPQUFPUixLQUFLLENBQUM7S0FDcEI7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L2hpc3RvcmlhbC9jb21wcmFzL2NvbXByYVJlZHVjZXIuanN4PzRhYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENSRUFSX0NPTVBSQSxcclxuICAgIFRSQUVSX0NPTVBSQVMsXHJcbiAgICBGSUxUUk9fQ09NUFJBLFxyXG4gICAgT1JERU5BUl9DT0RJR09fQ09NUFJBLFxyXG4gICAgT1JERU5BUl9OT01CUkVfQ09NUFJBLFxyXG4gICAgT1JERU5BUl9NQVJDQV9DT01QUkEsXHJcbiAgICBPUkRFTkFSX01PREVMT19DT01QUkEsXHJcbiAgICBPUkRFTkFSX1JVQlJPX0NPTVBSQSxcclxuICAgIE9SREVOQVJfUFJPVkVFRE9SX0NPTVBSQSxcclxuICAgIE9SREVOQVJfQ09ESUdPX0NPTVBSQV9GSUxUUkFETyxcclxuICAgIE9SREVOQVJfTk9NQlJFX0NPTVBSQV9GSUxUUkFETyxcclxuICAgIE9SREVOQVJfTUFSQ0FfQ09NUFJBX0ZJTFRSQURPLFxyXG4gICAgT1JERU5BUl9NT0RFTE9fQ09NUFJBX0ZJTFRSQURPLFxyXG4gICAgT1JERU5BUl9SVUJST19DT01QUkFfRklMVFJBRE8sXHJcbiAgICBPUkRFTkFSX1BST1ZFRURPUl9DT01QUkFfRklMVFJBRE8sXHJcbn0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzL2luZGV4XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXByYXJlZHVjZXIgKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQ1JFQVJfQ09NUFJBOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjb21wcmFzOiBzdGF0ZS5jb21wcmFzLm1hcChjb21wcmEgPT4gY29tcHJhLmlkUHJvZHVjdG8gPT09IGFjdGlvbi5wYXlsb2FkLmlkUHJvZHVjdG8gPyBhY3Rpb24ucGF5bG9hZCA6IFsuLi5zdGF0ZS5jb21wcmFzLCBhY3Rpb24ucGF5bG9hZF0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFRSQUVSX0NPTVBSQVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNvbXByYXM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBGSUxUUk9fQ09NUFJBOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFkb3M6IHN0YXRlLmNvbXByYXMuZmlsdGVyKGNvbXByYSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJhLm5vbWJyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKGFjdGlvbi5wYXlsb2FkLnRvTG93ZXJDYXNlKCkgPyBhY3Rpb24ucGF5bG9hZCA6IGNvbXByYSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgY29tcHJhLm1hcmNhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ub3JtYWxpemUoXCJORkRcIikucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoYWN0aW9uLnBheWxvYWQudG9Mb3dlckNhc2UoKSA/IGFjdGlvbi5wYXlsb2FkIDogY29tcHJhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCBjb21wcmEubW9kZWxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ub3JtYWxpemUoXCJORkRcIikucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoYWN0aW9uLnBheWxvYWQudG9Mb3dlckNhc2UoKSA/IGFjdGlvbi5wYXlsb2FkIDogY29tcHJhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgT1JERU5BUl9OT01CUkVfQ09NUFJBOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAvL29yZGVubyBlbCBzdGF0ZSBzZWd1biBsZXRyYS4gRWwgcHJpbWVyIHBheWxvYWQgZXMgZmFsc2UocG9yIGRlZmF1bHQgZWwgc3RhdGUgZXN0w6EgYXNpKSwgZW50b25jZXMgZGV2dWVsdmUgZWwgb2JqZXRvIGFycmVnbGFkbyBkZSBtZW5vciBhIG1heW9yLCB5IHNpIGVzIHRydWUgbG8gZGV2dWVsdmUgZGUgbWF5b3IgYSBtZW5vci5cclxuICAgICAgICAgICAgICAgICAgICBjb21wcmFzOiBhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmNvbXByYXMuc29ydCgoYSxiKSA9PiBiLm5vbWJyZSA+IGEubm9tYnJlID8gMSA6IC0xICkgOiAhYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5jb21wcmFzLnNvcnQoKGEsYikgPT4gYS5ub21icmUgPiBiLm5vbWJyZSA/IDEgOiAtMSApIDogc3RhdGUuY29tcHJhc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIE9SREVOQVJfTUFSQ0FfQ09NUFJBOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAvL29yZGVubyBlbCBzdGF0ZSBzZWd1biBsZXRyYS4gRWwgcHJpbWVyIHBheWxvYWQgZXMgZmFsc2UocG9yIGRlZmF1bHQgZWwgc3RhdGUgZXN0w6EgYXNpKSwgZW50b25jZXMgZGV2dWVsdmUgZWwgb2JqZXRvIGFycmVnbGFkbyBkZSBtZW5vciBhIG1heW9yLCB5IHNpIGVzIHRydWUgbG8gZGV2dWVsdmUgZGUgbWF5b3IgYSBtZW5vci5cclxuICAgICAgICAgICAgICAgICAgICBjb21wcmFzOiBhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmNvbXByYXMuc29ydCgoYSxiKSA9PiBiLm1hcmNhID4gYS5tYXJjYSA/IDEgOiAtMSApIDogIWFjdGlvbi5wYXlsb2FkID8gc3RhdGUuY29tcHJhcy5zb3J0KChhLGIpID0+IGEubWFyY2EgPiBiLm1hcmNhID8gMSA6IC0xICkgOiBzdGF0ZS5jb21wcmFzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgT1JERU5BUl9NT0RFTE9fQ09NUFJBOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAvL29yZGVubyBlbCBzdGF0ZSBzZWd1biBsZXRyYS4gRWwgcHJpbWVyIHBheWxvYWQgZXMgZmFsc2UocG9yIGRlZmF1bHQgZWwgc3RhdGUgZXN0w6EgYXNpKSwgZW50b25jZXMgZGV2dWVsdmUgZWwgb2JqZXRvIGFycmVnbGFkbyBkZSBtZW5vciBhIG1heW9yLCB5IHNpIGVzIHRydWUgbG8gZGV2dWVsdmUgZGUgbWF5b3IgYSBtZW5vci5cclxuICAgICAgICAgICAgICAgICAgICBjb21wcmFzOiBhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmNvbXByYXMuc29ydCgoYSxiKSA9PiBiLm1vZGVsbyA+IGEubW9kZWxvID8gMSA6IC0xICkgOiAhYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5jb21wcmFzLnNvcnQoKGEsYikgPT4gYS5tb2RlbG8gPiBiLm1vZGVsbyA/IDEgOiAtMSApIDogc3RhdGUuY29tcHJhc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIE9SREVOQVJfUFJPVkVFRE9SX0NPTVBSQTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vcmRlbm8gZWwgc3RhdGUgc2VndW4gbGV0cmEuIEVsIHByaW1lciBwYXlsb2FkIGVzIGZhbHNlKHBvciBkZWZhdWx0IGVsIHN0YXRlIGVzdMOhIGFzaSksIGVudG9uY2VzIGRldnVlbHZlIGVsIG9iamV0byBhcnJlZ2xhZG8gZGUgbWVub3IgYSBtYXlvciwgeSBzaSBlcyB0cnVlIGxvIGRldnVlbHZlIGRlIG1heW9yIGEgbWVub3IuXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcHJhczogYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5jb21wcmFzLnNvcnQoKGEsYikgPT4gYi5wcm92ZWVkb3IgPiBhLnByb3ZlZWRvciA/IDEgOiAtMSApIDogIWFjdGlvbi5wYXlsb2FkID8gc3RhdGUuY29tcHJhcy5zb3J0KChhLGIpID0+IGEucHJvdmVlZG9yID4gYi5wcm92ZWVkb3IgPyAxIDogLTEgKSA6IHN0YXRlLmNvbXByYXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBPUkRFTkFSX0RJU1BPTklCTEVTX0NPTVBSQTogXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXByYXM6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuY29tcHJhcy5zb3J0KChhLGIpID0+IGIuZGlzcG9uaWJsZXMgLSBhLmRpc3BvbmlibGVzKSA6ICFhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmNvbXByYXMuc29ydCgoYSxiKSA9PiBhLmRpc3BvbmlibGVzIC0gYi5kaXNwb25pYmxlcyApIDogc3RhdGUuY29tcHJhc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIE9SREVOQVJfQ09ESUdPX0NPTVBSQV9GSUxUUkFETzogXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYWRvczogYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5maWx0cmFkb3Muc29ydCgoYSxiKSA9PiBiLmNvZGlnbyAtIGEuY29kaWdvKSA6ICFhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmZpbHRyYWRvcy5zb3J0KChhLGIpID0+IGEuY29kaWdvIC0gYi5jb2RpZ28gKSA6IHN0YXRlLmZpbHRyYWRvc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIE9SREVOQVJfTk9NQlJFX0NPTVBSQV9GSUxUUkFETzogXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYWRvczogYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5maWx0cmFkb3Muc29ydCgoYSxiKSA9PiBiLm5vbWJyZSA+IGEubm9tYnJlID8gMSA6IC0xKSA6ICFhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmZpbHRyYWRvcy5zb3J0KChhLGIpID0+IGEubm9tYnJlID4gYi5ub21icmUgPyAxIDogLTEgKSA6IHN0YXRlLmZpbHRyYWRvc1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgT1JERU5BUl9NQVJDQV9DT01QUkFfRklMVFJBRE86IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFkb3M6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYi5tYXJjYSA+IGEubWFyY2EgPyAxIDogLTEpIDogIWFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYS5tYXJjYSA+IGIubWFyY2EgPyAxIDogLTEpIDogc3RhdGUuZmlsdHJhZG9zXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBPUkRFTkFSX01PREVMT19DT01QUkFfRklMVFJBRE86IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFkb3M6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYi5tb2RlbG8gPiBhLm1vZGVsbyA/IDEgOiAtMSkgOiAhYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5maWx0cmFkb3Muc29ydCgoYSxiKSA9PiBhLm1vZGVsbyA+IGIubW9kZWxvID8gMSA6IC0xKSA6IHN0YXRlLmZpbHRyYWRvc1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgT1JERU5BUl9SVUJST19DT01QUkFfRklMVFJBRE86IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFkb3M6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYi5ydWJybyA+IGEucnVicm8gPyAxIDogLTEpIDogIWFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYS5ydWJybyA+IGIucnVicm8gPyAxIDogLTEpIDogc3RhdGUuZmlsdHJhZG9zXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBPUkRFTkFSX1BST1ZFRURPUl9DT01QUkFfRklMVFJBRE86IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFkb3M6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYi5wcm92ZWVkb3IgPiBhLnByb3ZlZWRvciA/IDEgOiAtMSkgOiAhYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5maWx0cmFkb3Muc29ydCgoYSxiKSA9PiBhLnByb3ZlZWRvciA+IGIucHJvdmVlZG9yID8gMSA6IC0xKSA6IHN0YXRlLmZpbHRyYWRvc1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgT1JERU5BUl9ESVNQT05JQkxFU19DT01QUkFfRklMVFJBRE86IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFkb3M6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYi5kaXNwb25pYmxlcyA+IGEuZGlzcG9uaWJsZXMgPyAxIDogLTEpIDogIWFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYS5kaXNwb25pYmxlcyA+IGIuZGlzcG9uaWJsZXMgPyAxIDogLTEpIDogc3RhdGUuZmlsdHJhZG9zXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiQ1JFQVJfQ09NUFJBIiwiVFJBRVJfQ09NUFJBUyIsIkZJTFRST19DT01QUkEiLCJPUkRFTkFSX0NPRElHT19DT01QUkEiLCJPUkRFTkFSX05PTUJSRV9DT01QUkEiLCJPUkRFTkFSX01BUkNBX0NPTVBSQSIsIk9SREVOQVJfTU9ERUxPX0NPTVBSQSIsIk9SREVOQVJfUlVCUk9fQ09NUFJBIiwiT1JERU5BUl9QUk9WRUVET1JfQ09NUFJBIiwiT1JERU5BUl9DT0RJR09fQ09NUFJBX0ZJTFRSQURPIiwiT1JERU5BUl9OT01CUkVfQ09NUFJBX0ZJTFRSQURPIiwiT1JERU5BUl9NQVJDQV9DT01QUkFfRklMVFJBRE8iLCJPUkRFTkFSX01PREVMT19DT01QUkFfRklMVFJBRE8iLCJPUkRFTkFSX1JVQlJPX0NPTVBSQV9GSUxUUkFETyIsIk9SREVOQVJfUFJPVkVFRE9SX0NPTVBSQV9GSUxUUkFETyIsImNvbXByYXJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjb21wcmFzIiwibWFwIiwiY29tcHJhIiwiaWRQcm9kdWN0byIsInBheWxvYWQiLCJmaWx0cmFkb3MiLCJmaWx0ZXIiLCJub21icmUiLCJ0b1N0cmluZyIsInRvTG93ZXJDYXNlIiwibm9ybWFsaXplIiwicmVwbGFjZSIsImluY2x1ZGVzIiwibWFyY2EiLCJtb2RlbG8iLCJzb3J0IiwiYSIsImIiLCJwcm92ZWVkb3IiLCJPUkRFTkFSX0RJU1BPTklCTEVTX0NPTVBSQSIsImRpc3BvbmlibGVzIiwiY29kaWdvIiwicnVicm8iLCJPUkRFTkFSX0RJU1BPTklCTEVTX0NPTVBSQV9GSUxUUkFETyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/historial/compras/compraReducer.jsx\n");

/***/ })

});