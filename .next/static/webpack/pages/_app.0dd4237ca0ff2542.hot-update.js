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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ comprareducer; }\n/* harmony export */ });\n/* harmony import */ var _types_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../types/index */ \"./types/index.jsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nfunction comprareducer(state, action) {\n    switch(action.type){\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.CREAR_COMPRA:\n            return _objectSpread({}, state, {\n                compras: state.compras.map(function(compra) {\n                    return compra.idProducto === action.payload.idProducto ? action.payload : _toConsumableArray(state.compras).concat([\n                        action.payload\n                    ]);\n                })\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.TRAER_COMPRAS:\n            return _objectSpread({}, state, {\n                compras: action.payload\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.FILTRO_COMPRA:\n            return _objectSpread({}, state, {\n                filtrados: state.compras.filter(function(compra) {\n                    return compra.nombre.toString().toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\").includes(action.payload.toLowerCase() ? action.payload : compra) || compra.marca.toString().toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\").includes(action.payload.toLowerCase() ? action.payload : compra) || compra.modelo.toString().toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\").includes(action.payload.toLowerCase() ? action.payload : compra) || compra.historial.map;\n                })\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_CODIGO_COMPRA:\n            return _objectSpread({}, state, {\n                compras: action.payload ? state.compras.sort(function(a, b) {\n                    return b.codigo - a.codigo;\n                }) : !action.payload ? state.compras.sort(function(a, b) {\n                    return a.codigo - b.codigo;\n                }) : state.compras\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_NOMBRE_COMPRA:\n            return _objectSpread({}, state, {\n                //ordeno el state segun letra. El primer payload es false(por default el state está asi), entonces devuelve el objeto arreglado de menor a mayor, y si es true lo devuelve de mayor a menor.\n                compras: action.payload ? state.compras.sort(function(a, b) {\n                    return b.nombre > a.nombre ? 1 : -1;\n                }) : !action.payload ? state.compras.sort(function(a, b) {\n                    return a.nombre > b.nombre ? 1 : -1;\n                }) : state.compras\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_MARCA_COMPRA:\n            return _objectSpread({}, state, {\n                //ordeno el state segun letra. El primer payload es false(por default el state está asi), entonces devuelve el objeto arreglado de menor a mayor, y si es true lo devuelve de mayor a menor.\n                compras: action.payload ? state.compras.sort(function(a, b) {\n                    return b.marca > a.marca ? 1 : -1;\n                }) : !action.payload ? state.compras.sort(function(a, b) {\n                    return a.marca > b.marca ? 1 : -1;\n                }) : state.compras\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_MODELO_COMPRA:\n            return _objectSpread({}, state, {\n                //ordeno el state segun letra. El primer payload es false(por default el state está asi), entonces devuelve el objeto arreglado de menor a mayor, y si es true lo devuelve de mayor a menor.\n                compras: action.payload ? state.compras.sort(function(a, b) {\n                    return b.modelo > a.modelo ? 1 : -1;\n                }) : !action.payload ? state.compras.sort(function(a, b) {\n                    return a.modelo > b.modelo ? 1 : -1;\n                }) : state.compras\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_RUBRO_COMPRA:\n            return _objectSpread({}, state, {\n                //ordeno el state segun letra. El primer payload es false(por default el state está asi), entonces devuelve el objeto arreglado de menor a mayor, y si es true lo devuelve de mayor a menor.\n                compras: action.payload ? state.compras.sort(function(a, b) {\n                    return b.rubro > a.rubro ? 1 : -1;\n                }) : !action.payload ? state.compras.sort(function(a, b) {\n                    return a.rubro > b.rubro ? 1 : -1;\n                }) : state.compras\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_PROVEEDOR_COMPRA:\n            return _objectSpread({}, state, {\n                //ordeno el state segun letra. El primer payload es false(por default el state está asi), entonces devuelve el objeto arreglado de menor a mayor, y si es true lo devuelve de mayor a menor.\n                compras: action.payload ? state.compras.sort(function(a, b) {\n                    return b.proveedor > a.proveedor ? 1 : -1;\n                }) : !action.payload ? state.compras.sort(function(a, b) {\n                    return a.proveedor > b.proveedor ? 1 : -1;\n                }) : state.compras\n            });\n        case ORDENAR_DISPONIBLES_COMPRA:\n            return _objectSpread({}, state, {\n                compras: action.payload ? state.compras.sort(function(a, b) {\n                    return b.disponibles - a.disponibles;\n                }) : !action.payload ? state.compras.sort(function(a, b) {\n                    return a.disponibles - b.disponibles;\n                }) : state.compras\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_CODIGO_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.codigo - a.codigo;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.codigo - b.codigo;\n                }) : state.filtrados\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_NOMBRE_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.nombre > a.nombre ? 1 : -1;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.nombre > b.nombre ? 1 : -1;\n                }) : state.filtrados\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_MARCA_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.marca > a.marca ? 1 : -1;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.marca > b.marca ? 1 : -1;\n                }) : state.filtrados\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_MODELO_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.modelo > a.modelo ? 1 : -1;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.modelo > b.modelo ? 1 : -1;\n                }) : state.filtrados\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_RUBRO_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.rubro > a.rubro ? 1 : -1;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.rubro > b.rubro ? 1 : -1;\n                }) : state.filtrados\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_PROVEEDOR_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.proveedor > a.proveedor ? 1 : -1;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.proveedor > b.proveedor ? 1 : -1;\n                }) : state.filtrados\n            });\n        case ORDENAR_DISPONIBLES_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.disponibles > a.disponibles ? 1 : -1;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.disponibles > b.disponibles ? 1 : -1;\n                }) : state.filtrados\n            });\n        default:\n            return state;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2hpc3RvcmlhbC9jb21wcmFzL2NvbXByYVJlZHVjZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0I2QjtBQUVkLFNBQVNlLGFBQWEsQ0FBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUU7SUFDbEQsT0FBT0EsTUFBTSxDQUFDQyxJQUFJO1FBQ2QsS0FBS2xCLHNEQUFZO1lBQ2IsT0FBTyxrQkFDQWdCLEtBQUs7Z0JBQ1JHLE9BQU8sRUFBRUgsS0FBSyxDQUFDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBQUEsTUFBTTsyQkFBSUEsTUFBTSxDQUFDQyxVQUFVLEtBQUtMLE1BQU0sQ0FBQ00sT0FBTyxDQUFDRCxVQUFVLEdBQUdMLE1BQU0sQ0FBQ00sT0FBTyxHQUFHLG1CQUFJUCxLQUFLLENBQUNHLE9BQU8sQ0FBYkgsUUFBSjt3QkFBbUJDLE1BQU0sQ0FBQ00sT0FBTztxQkFBQztpQkFBQSxDQUFDO2NBQzlJO1FBQ0wsS0FBS3RCLHVEQUFhO1lBQ2QsT0FBTyxrQkFDQWUsS0FBSztnQkFDUkcsT0FBTyxFQUFFRixNQUFNLENBQUNNLE9BQU87Y0FDMUI7UUFDRCxLQUFLckIsdURBQWE7WUFDZCxPQUFPLGtCQUNBYyxLQUFLO2dCQUNSUSxTQUFTLEVBQUVSLEtBQUssQ0FBQ0csT0FBTyxDQUFDTSxNQUFNLENBQUNKLFNBQUFBLE1BQU07MkJBQ2xDQSxNQUFNLENBQUNLLE1BQU0sQ0FDSkMsUUFBUSxFQUFFLENBQ1ZDLFdBQVcsRUFBRSxDQUNiQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUNDLE9BQU8scUJBQXFCLEVBQUUsQ0FBQyxDQUNoREMsUUFBUSxDQUFDZCxNQUFNLENBQUNNLE9BQU8sQ0FBQ0ssV0FBVyxFQUFFLEdBQUdYLE1BQU0sQ0FBQ00sT0FBTyxHQUFHRixNQUFNLENBQUMsSUFDdEVBLE1BQU0sQ0FBQ1csS0FBSyxDQUNOTCxR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QUNDLENBQUM7MkJBQUtBLENBQUMsQ0FBQ0csU0FBUyxHQUFHSixDQUFDLENBQUNJLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUFBLENBQUMsR0FBRyxDQUFDdkIsTUFBTSxDQUFDTSxPQUFPLEdBQUdQLEtBQUssQ0FBQ1EsU0FBUyxDQUFDVyxJQUFJLENBQUMsU0FBQ0MsQ0FBQyxFQUFDQyxDQUFDOzJCQUFLRCxDQUFDLENBQUNJLFNBQVMsR0FBR0gsQ0FBQyxDQUFDRyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFBQSxDQUFDLEdBQUd4QixLQUFLLENBQUNRLFNBQVM7Y0FFeE07UUFDTCxLQUFLbUIsbUNBQW1DO1lBQ3BDLE9BQU8sa0JBQ0EzQixLQUFLO2dCQUNSUSxTQUFTLEVBQUVQLE1BQU0sQ0FBQ00sT0FBTyxHQUFHUCxLQUFLLENBQUNRLFNBQVMsQ0FBQ1csSUFBSSxDQUFDLFNBQUNDLENBQUMsRUFBQ0MsQ0FBQzsyQkFBS0EsQ0FBQyxDQUFDSyxXQUFXLEdBQUdOLENBQUMsQ0FBQ00sV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQUEsQ0FBQyxHQUFHLENBQUN6QixNQUFNLENBQUNNLE9BQU8sR0FBR1AsS0FBSyxDQUFDUSxTQUFTLENBQUNXLElBQUksQ0FBQyxTQUFDQyxDQUFDLEVBQUNDLENBQUM7MkJBQUtELENBQUMsQ0FBQ00sV0FBVyxHQUFHTCxDQUFDLENBQUNLLFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUFBLENBQUMsR0FBRzFCLEtBQUssQ0FBQ1EsU0FBUztjQUVoTjtRQUNUO1lBQ0ksT0FBT1IsS0FBSyxDQUFDO0tBQ3BCO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9oaXN0b3JpYWwvY29tcHJhcy9jb21wcmFSZWR1Y2VyLmpzeD80YWE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDUkVBUl9DT01QUkEsXHJcbiAgICBUUkFFUl9DT01QUkFTLFxyXG4gICAgRklMVFJPX0NPTVBSQSxcclxuICAgIE9SREVOQVJfQ09ESUdPX0NPTVBSQSxcclxuICAgIE9SREVOQVJfTk9NQlJFX0NPTVBSQSxcclxuICAgIE9SREVOQVJfTUFSQ0FfQ09NUFJBLFxyXG4gICAgT1JERU5BUl9NT0RFTE9fQ09NUFJBLFxyXG4gICAgT1JERU5BUl9SVUJST19DT01QUkEsXHJcbiAgICBPUkRFTkFSX1BST1ZFRURPUl9DT01QUkEsXHJcbiAgICBPUkRFTkFSX0NPRElHT19DT01QUkFfRklMVFJBRE8sXHJcbiAgICBPUkRFTkFSX05PTUJSRV9DT01QUkFfRklMVFJBRE8sXHJcbiAgICBPUkRFTkFSX01BUkNBX0NPTVBSQV9GSUxUUkFETyxcclxuICAgIE9SREVOQVJfTU9ERUxPX0NPTVBSQV9GSUxUUkFETyxcclxuICAgIE9SREVOQVJfUlVCUk9fQ09NUFJBX0ZJTFRSQURPLFxyXG4gICAgT1JERU5BUl9QUk9WRUVET1JfQ09NUFJBX0ZJTFRSQURPLFxyXG59IGZyb20gXCIuLi8uLi8uLi90eXBlcy9pbmRleFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wcmFyZWR1Y2VyIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIENSRUFSX0NPTVBSQTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY29tcHJhczogc3RhdGUuY29tcHJhcy5tYXAoY29tcHJhID0+IGNvbXByYS5pZFByb2R1Y3RvID09PSBhY3Rpb24ucGF5bG9hZC5pZFByb2R1Y3RvID8gYWN0aW9uLnBheWxvYWQgOiBbLi4uc3RhdGUuY29tcHJhcywgYWN0aW9uLnBheWxvYWRdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBUUkFFUl9DT01QUkFTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjb21wcmFzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgRklMVFJPX0NPTVBSQTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhZG9zOiBzdGF0ZS5jb21wcmFzLmZpbHRlcihjb21wcmEgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByYS5ub21icmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5vcm1hbGl6ZShcIk5GRFwiKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhhY3Rpb24ucGF5bG9hZC50b0xvd2VyQ2FzZSgpID8gYWN0aW9uLnBheWxvYWQgOiBjb21wcmEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IGNvbXByYS5tYXJjYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKGFjdGlvbi5wYXlsb2FkLnRvTG93ZXJDYXNlKCkgPyBhY3Rpb24ucGF5bG9hZCA6IGNvbXByYSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgY29tcHJhLm1vZGVsb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKGFjdGlvbi5wYXlsb2FkLnRvTG93ZXJDYXNlKCkgPyBhY3Rpb24ucGF5bG9hZCA6IGNvbXByYSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgY29tcHJhLmhpc3RvcmlhbC5tYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIE9SREVOQVJfQ09ESUdPX0NPTVBSQTogXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXByYXM6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuY29tcHJhcy5zb3J0KChhLGIpID0+IGIuY29kaWdvIC0gYS5jb2RpZ28pIDogIWFjdGlvbi5wYXlsb2FkID8gc3RhdGUuY29tcHJhcy5zb3J0KChhLGIpID0+IGEuY29kaWdvIC0gYi5jb2RpZ28gKSA6IHN0YXRlLmNvbXByYXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBPUkRFTkFSX05PTUJSRV9DT01QUkE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vb3JkZW5vIGVsIHN0YXRlIHNlZ3VuIGxldHJhLiBFbCBwcmltZXIgcGF5bG9hZCBlcyBmYWxzZShwb3IgZGVmYXVsdCBlbCBzdGF0ZSBlc3TDoSBhc2kpLCBlbnRvbmNlcyBkZXZ1ZWx2ZSBlbCBvYmpldG8gYXJyZWdsYWRvIGRlIG1lbm9yIGEgbWF5b3IsIHkgc2kgZXMgdHJ1ZSBsbyBkZXZ1ZWx2ZSBkZSBtYXlvciBhIG1lbm9yLlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXByYXM6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuY29tcHJhcy5zb3J0KChhLGIpID0+IGIubm9tYnJlID4gYS5ub21icmUgPyAxIDogLTEgKSA6ICFhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmNvbXByYXMuc29ydCgoYSxiKSA9PiBhLm5vbWJyZSA+IGIubm9tYnJlID8gMSA6IC0xICkgOiBzdGF0ZS5jb21wcmFzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgT1JERU5BUl9NQVJDQV9DT01QUkE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vb3JkZW5vIGVsIHN0YXRlIHNlZ3VuIGxldHJhLiBFbCBwcmltZXIgcGF5bG9hZCBlcyBmYWxzZShwb3IgZGVmYXVsdCBlbCBzdGF0ZSBlc3TDoSBhc2kpLCBlbnRvbmNlcyBkZXZ1ZWx2ZSBlbCBvYmpldG8gYXJyZWdsYWRvIGRlIG1lbm9yIGEgbWF5b3IsIHkgc2kgZXMgdHJ1ZSBsbyBkZXZ1ZWx2ZSBkZSBtYXlvciBhIG1lbm9yLlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXByYXM6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuY29tcHJhcy5zb3J0KChhLGIpID0+IGIubWFyY2EgPiBhLm1hcmNhID8gMSA6IC0xICkgOiAhYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5jb21wcmFzLnNvcnQoKGEsYikgPT4gYS5tYXJjYSA+IGIubWFyY2EgPyAxIDogLTEgKSA6IHN0YXRlLmNvbXByYXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBPUkRFTkFSX01PREVMT19DT01QUkE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vb3JkZW5vIGVsIHN0YXRlIHNlZ3VuIGxldHJhLiBFbCBwcmltZXIgcGF5bG9hZCBlcyBmYWxzZShwb3IgZGVmYXVsdCBlbCBzdGF0ZSBlc3TDoSBhc2kpLCBlbnRvbmNlcyBkZXZ1ZWx2ZSBlbCBvYmpldG8gYXJyZWdsYWRvIGRlIG1lbm9yIGEgbWF5b3IsIHkgc2kgZXMgdHJ1ZSBsbyBkZXZ1ZWx2ZSBkZSBtYXlvciBhIG1lbm9yLlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXByYXM6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuY29tcHJhcy5zb3J0KChhLGIpID0+IGIubW9kZWxvID4gYS5tb2RlbG8gPyAxIDogLTEgKSA6ICFhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmNvbXByYXMuc29ydCgoYSxiKSA9PiBhLm1vZGVsbyA+IGIubW9kZWxvID8gMSA6IC0xICkgOiBzdGF0ZS5jb21wcmFzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgT1JERU5BUl9SVUJST19DT01QUkE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vb3JkZW5vIGVsIHN0YXRlIHNlZ3VuIGxldHJhLiBFbCBwcmltZXIgcGF5bG9hZCBlcyBmYWxzZShwb3IgZGVmYXVsdCBlbCBzdGF0ZSBlc3TDoSBhc2kpLCBlbnRvbmNlcyBkZXZ1ZWx2ZSBlbCBvYmpldG8gYXJyZWdsYWRvIGRlIG1lbm9yIGEgbWF5b3IsIHkgc2kgZXMgdHJ1ZSBsbyBkZXZ1ZWx2ZSBkZSBtYXlvciBhIG1lbm9yLlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXByYXM6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuY29tcHJhcy5zb3J0KChhLGIpID0+IGIucnVicm8gPiBhLnJ1YnJvID8gMSA6IC0xICkgOiAhYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5jb21wcmFzLnNvcnQoKGEsYikgPT4gYS5ydWJybyA+IGIucnVicm8gPyAxIDogLTEgKSA6IHN0YXRlLmNvbXByYXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBPUkRFTkFSX1BST1ZFRURPUl9DT01QUkE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vb3JkZW5vIGVsIHN0YXRlIHNlZ3VuIGxldHJhLiBFbCBwcmltZXIgcGF5bG9hZCBlcyBmYWxzZShwb3IgZGVmYXVsdCBlbCBzdGF0ZSBlc3TDoSBhc2kpLCBlbnRvbmNlcyBkZXZ1ZWx2ZSBlbCBvYmpldG8gYXJyZWdsYWRvIGRlIG1lbm9yIGEgbWF5b3IsIHkgc2kgZXMgdHJ1ZSBsbyBkZXZ1ZWx2ZSBkZSBtYXlvciBhIG1lbm9yLlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXByYXM6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuY29tcHJhcy5zb3J0KChhLGIpID0+IGIucHJvdmVlZG9yID4gYS5wcm92ZWVkb3IgPyAxIDogLTEgKSA6ICFhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmNvbXByYXMuc29ydCgoYSxiKSA9PiBhLnByb3ZlZWRvciA+IGIucHJvdmVlZG9yID8gMSA6IC0xICkgOiBzdGF0ZS5jb21wcmFzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgT1JERU5BUl9ESVNQT05JQkxFU19DT01QUkE6IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wcmFzOiBhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmNvbXByYXMuc29ydCgoYSxiKSA9PiBiLmRpc3BvbmlibGVzIC0gYS5kaXNwb25pYmxlcykgOiAhYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5jb21wcmFzLnNvcnQoKGEsYikgPT4gYS5kaXNwb25pYmxlcyAtIGIuZGlzcG9uaWJsZXMgKSA6IHN0YXRlLmNvbXByYXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBPUkRFTkFSX0NPRElHT19DT01QUkFfRklMVFJBRE86IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFkb3M6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYi5jb2RpZ28gLSBhLmNvZGlnbykgOiAhYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5maWx0cmFkb3Muc29ydCgoYSxiKSA9PiBhLmNvZGlnbyAtIGIuY29kaWdvICkgOiBzdGF0ZS5maWx0cmFkb3NcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBPUkRFTkFSX05PTUJSRV9DT01QUkFfRklMVFJBRE86IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFkb3M6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYi5ub21icmUgPiBhLm5vbWJyZSA/IDEgOiAtMSkgOiAhYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5maWx0cmFkb3Muc29ydCgoYSxiKSA9PiBhLm5vbWJyZSA+IGIubm9tYnJlID8gMSA6IC0xICkgOiBzdGF0ZS5maWx0cmFkb3NcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIE9SREVOQVJfTUFSQ0FfQ09NUFJBX0ZJTFRSQURPOiBcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhZG9zOiBhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmZpbHRyYWRvcy5zb3J0KChhLGIpID0+IGIubWFyY2EgPiBhLm1hcmNhID8gMSA6IC0xKSA6ICFhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmZpbHRyYWRvcy5zb3J0KChhLGIpID0+IGEubWFyY2EgPiBiLm1hcmNhID8gMSA6IC0xKSA6IHN0YXRlLmZpbHRyYWRvc1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgT1JERU5BUl9NT0RFTE9fQ09NUFJBX0ZJTFRSQURPOiBcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhZG9zOiBhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmZpbHRyYWRvcy5zb3J0KChhLGIpID0+IGIubW9kZWxvID4gYS5tb2RlbG8gPyAxIDogLTEpIDogIWFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYS5tb2RlbG8gPiBiLm1vZGVsbyA/IDEgOiAtMSkgOiBzdGF0ZS5maWx0cmFkb3NcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIE9SREVOQVJfUlVCUk9fQ09NUFJBX0ZJTFRSQURPOiBcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhZG9zOiBhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmZpbHRyYWRvcy5zb3J0KChhLGIpID0+IGIucnVicm8gPiBhLnJ1YnJvID8gMSA6IC0xKSA6ICFhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmZpbHRyYWRvcy5zb3J0KChhLGIpID0+IGEucnVicm8gPiBiLnJ1YnJvID8gMSA6IC0xKSA6IHN0YXRlLmZpbHRyYWRvc1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgT1JERU5BUl9QUk9WRUVET1JfQ09NUFJBX0ZJTFRSQURPOiBcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhZG9zOiBhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmZpbHRyYWRvcy5zb3J0KChhLGIpID0+IGIucHJvdmVlZG9yID4gYS5wcm92ZWVkb3IgPyAxIDogLTEpIDogIWFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYS5wcm92ZWVkb3IgPiBiLnByb3ZlZWRvciA/IDEgOiAtMSkgOiBzdGF0ZS5maWx0cmFkb3NcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIE9SREVOQVJfRElTUE9OSUJMRVNfQ09NUFJBX0ZJTFRSQURPOiBcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhZG9zOiBhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmZpbHRyYWRvcy5zb3J0KChhLGIpID0+IGIuZGlzcG9uaWJsZXMgPiBhLmRpc3BvbmlibGVzID8gMSA6IC0xKSA6ICFhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmZpbHRyYWRvcy5zb3J0KChhLGIpID0+IGEuZGlzcG9uaWJsZXMgPiBiLmRpc3BvbmlibGVzID8gMSA6IC0xKSA6IHN0YXRlLmZpbHRyYWRvc1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIkNSRUFSX0NPTVBSQSIsIlRSQUVSX0NPTVBSQVMiLCJGSUxUUk9fQ09NUFJBIiwiT1JERU5BUl9DT0RJR09fQ09NUFJBIiwiT1JERU5BUl9OT01CUkVfQ09NUFJBIiwiT1JERU5BUl9NQVJDQV9DT01QUkEiLCJPUkRFTkFSX01PREVMT19DT01QUkEiLCJPUkRFTkFSX1JVQlJPX0NPTVBSQSIsIk9SREVOQVJfUFJPVkVFRE9SX0NPTVBSQSIsIk9SREVOQVJfQ09ESUdPX0NPTVBSQV9GSUxUUkFETyIsIk9SREVOQVJfTk9NQlJFX0NPTVBSQV9GSUxUUkFETyIsIk9SREVOQVJfTUFSQ0FfQ09NUFJBX0ZJTFRSQURPIiwiT1JERU5BUl9NT0RFTE9fQ09NUFJBX0ZJTFRSQURPIiwiT1JERU5BUl9SVUJST19DT01QUkFfRklMVFJBRE8iLCJPUkRFTkFSX1BST1ZFRURPUl9DT01QUkFfRklMVFJBRE8iLCJjb21wcmFyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29tcHJhcyIsIm1hcCIsImNvbXByYSIsImlkUHJvZHVjdG8iLCJwYXlsb2FkIiwiZmlsdHJhZG9zIiwiZmlsdGVyIiwibm9tYnJlIiwidG9TdHJpbmciLCJ0b0xvd2VyQ2FzZSIsIm5vcm1hbGl6ZSIsInJlcGxhY2UiLCJpbmNsdWRlcyIsIm1hcmNhIiwibW9kZWxvIiwiaGlzdG9yaWFsIiwic29ydCIsImEiLCJiIiwiY29kaWdvIiwicnVicm8iLCJwcm92ZWVkb3IiLCJPUkRFTkFSX0RJU1BPTklCTEVTX0NPTVBSQSIsImRpc3BvbmlibGVzIiwiT1JERU5BUl9ESVNQT05JQkxFU19DT01QUkFfRklMVFJBRE8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/historial/compras/compraReducer.jsx\n");

/***/ })

});