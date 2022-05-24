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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ comprareducer; }\n/* harmony export */ });\n/* harmony import */ var _types_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../types/index */ \"./types/index.jsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nfunction comprareducer(state, action) {\n    switch(action.type){\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.CREAR_COMPRA:\n            return _objectSpread({}, state, {\n                compras: state.compras.map(function(compra) {\n                    return compra.idProducto === action.payload.idProducto ? action.payload : _toConsumableArray(state.compras).concat([\n                        action.payload\n                    ]);\n                })\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.TRAER_COMPRAS:\n            return _objectSpread({}, state, {\n                compras: action.payload\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.FILTRO_COMPRA:\n            return _objectSpread({}, state, {\n                filtrados: state.compras.filter(function(compra) {\n                    return compra.nombre.toString().toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\").includes(action.payload.toLowerCase() ? action.payload : compra) || compra.marca.toString().toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\").includes(action.payload.toLowerCase() ? action.payload : compra) || compra.modelo.toString().toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\").includes(action.payload.toLowerCase() ? action.payload : compra) || compra.historial.map(function(historia) {\n                        return historia.proveedor.toString();\n                    });\n                })\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_CODIGO_COMPRA:\n            return _objectSpread({}, state, {\n                compras: action.payload ? state.compras.sort(function(a, b) {\n                    return b.codigo - a.codigo;\n                }) : !action.payload ? state.compras.sort(function(a, b) {\n                    return a.codigo - b.codigo;\n                }) : state.compras\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_NOMBRE_COMPRA:\n            return _objectSpread({}, state, {\n                //ordeno el state segun letra. El primer payload es false(por default el state está asi), entonces devuelve el objeto arreglado de menor a mayor, y si es true lo devuelve de mayor a menor.\n                compras: action.payload ? state.compras.sort(function(a, b) {\n                    return b.nombre > a.nombre ? 1 : -1;\n                }) : !action.payload ? state.compras.sort(function(a, b) {\n                    return a.nombre > b.nombre ? 1 : -1;\n                }) : state.compras\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_MARCA_COMPRA:\n            return _objectSpread({}, state, {\n                //ordeno el state segun letra. El primer payload es false(por default el state está asi), entonces devuelve el objeto arreglado de menor a mayor, y si es true lo devuelve de mayor a menor.\n                compras: action.payload ? state.compras.sort(function(a, b) {\n                    return b.marca > a.marca ? 1 : -1;\n                }) : !action.payload ? state.compras.sort(function(a, b) {\n                    return a.marca > b.marca ? 1 : -1;\n                }) : state.compras\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_MODELO_COMPRA:\n            return _objectSpread({}, state, {\n                //ordeno el state segun letra. El primer payload es false(por default el state está asi), entonces devuelve el objeto arreglado de menor a mayor, y si es true lo devuelve de mayor a menor.\n                compras: action.payload ? state.compras.sort(function(a, b) {\n                    return b.modelo > a.modelo ? 1 : -1;\n                }) : !action.payload ? state.compras.sort(function(a, b) {\n                    return a.modelo > b.modelo ? 1 : -1;\n                }) : state.compras\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_RUBRO_COMPRA:\n            return _objectSpread({}, state, {\n                //ordeno el state segun letra. El primer payload es false(por default el state está asi), entonces devuelve el objeto arreglado de menor a mayor, y si es true lo devuelve de mayor a menor.\n                compras: action.payload ? state.compras.sort(function(a, b) {\n                    return b.rubro > a.rubro ? 1 : -1;\n                }) : !action.payload ? state.compras.sort(function(a, b) {\n                    return a.rubro > b.rubro ? 1 : -1;\n                }) : state.compras\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_PROVEEDOR_COMPRA:\n            return _objectSpread({}, state, {\n                //ordeno el state segun letra. El primer payload es false(por default el state está asi), entonces devuelve el objeto arreglado de menor a mayor, y si es true lo devuelve de mayor a menor.\n                compras: action.payload ? state.compras.sort(function(a, b) {\n                    return b.proveedor > a.proveedor ? 1 : -1;\n                }) : !action.payload ? state.compras.sort(function(a, b) {\n                    return a.proveedor > b.proveedor ? 1 : -1;\n                }) : state.compras\n            });\n        case ORDENAR_DISPONIBLES_COMPRA:\n            return _objectSpread({}, state, {\n                compras: action.payload ? state.compras.sort(function(a, b) {\n                    return b.disponibles - a.disponibles;\n                }) : !action.payload ? state.compras.sort(function(a, b) {\n                    return a.disponibles - b.disponibles;\n                }) : state.compras\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_CODIGO_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.codigo - a.codigo;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.codigo - b.codigo;\n                }) : state.filtrados\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_NOMBRE_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.nombre > a.nombre ? 1 : -1;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.nombre > b.nombre ? 1 : -1;\n                }) : state.filtrados\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_MARCA_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.marca > a.marca ? 1 : -1;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.marca > b.marca ? 1 : -1;\n                }) : state.filtrados\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_MODELO_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.modelo > a.modelo ? 1 : -1;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.modelo > b.modelo ? 1 : -1;\n                }) : state.filtrados\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_RUBRO_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.rubro > a.rubro ? 1 : -1;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.rubro > b.rubro ? 1 : -1;\n                }) : state.filtrados\n            });\n        case _types_index__WEBPACK_IMPORTED_MODULE_0__.ORDENAR_PROVEEDOR_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.proveedor > a.proveedor ? 1 : -1;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.proveedor > b.proveedor ? 1 : -1;\n                }) : state.filtrados\n            });\n        case ORDENAR_DISPONIBLES_COMPRA_FILTRADO:\n            return _objectSpread({}, state, {\n                filtrados: action.payload ? state.filtrados.sort(function(a, b) {\n                    return b.disponibles > a.disponibles ? 1 : -1;\n                }) : !action.payload ? state.filtrados.sort(function(a, b) {\n                    return a.disponibles > b.disponibles ? 1 : -1;\n                }) : state.filtrados\n            });\n        default:\n            return state;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2hpc3RvcmlhbC9jb21wcmFzL2NvbXByYVJlZHVjZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0I2QjtBQUVkLFNBQVNlLGFBQWEsQ0FBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUU7SUFDbEQsT0FBT0EsTUFBTSxDQUFDQyxJQUFJO1FBQ2QsS0FBS2xCLHNEQUFZO1lBQ2IsT0FBTyxrQkFDQWdCLEtBQUs7Z0JBQ1JHLE9BQU8sRUFBRUgsS0FBSyxDQUFDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBQUEsTUFBTTsyQkFBSUEsTUFBTSxDQUFDQyxVQUFVLEtBQUtMLE1BQU0sQ0FBQ00sT0FBTyxDQUFDRCxVQUFVLEdBQUdMLE1BQU0sQ0FBQ00sT0FBTyxHQUFHLG1CQUFJUCxLQUFLLENBQUNHLE9BQU8sQ0FBYkgsUUFBSjt3QkFBbUJDLE1BQU0sQ0FBQ00sT0FBTztxQkFBQztpQkFBQSxDQUFDO2NBQzlJO1FBQ0wsS0FBS3RCLHVEQUFhO1lBQ2QsT0FBTyxrQkFDQWUsS0FBSztnQkFDUkcsT0FBTyxFQUFFRixNQUFNLENBQUNNLE9BQU87Y0FDMUI7UUFDRCxLQUFLckIsdURBQWE7WUFDZCxPQUFPLGtCQUNBYyxLQUFLO2dCQUNSUSxTQUFTLEVBQUVSLEtBQUssQ0FBQ0csT0FBTyxDQUFDTSxNQUFNLENBQUNKLFNBQUFBLE1BQU07MkJBQ2xDQSxNQUFNLENBQUNLLE1BQU0sQ0FDSkMsUUFBUSxFQUFFLENBQ1ZDLFdBQVcsRUFBRSxDQUNiQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUNDLE9BQU8scUJBQXFCLEVBQUUsQ0FBQyxDQUNoREMsUUFBUSxDQUFDZCxNQUFNLENBQUNNLE9BQU8sQ0FBQ0ssV0FBVyxFQUFFLEdBQUdYLE1BQU0sQ0FBQ00sT0FBTyxHQUFHRixNQUFNLENBQUMsSUFDdEVBLE1BQU0sQ0FBQ1csS0FBSyxDQUNOTCxR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TUFBTSxDQUFDTSxPQUFPLEdBQUdQLEtBQUssQ0FBQ1EsU0FBUyxDQUFDYSxJQUFJLENBQUMsU0FBQ0MsQ0FBQyxFQUFDQyxDQUFDOzJCQUFLQSxDQUFDLENBQUNILFNBQVMsR0FBR0UsQ0FBQyxDQUFDRixTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFBQSxDQUFDLEdBQUcsQ0FBQ25CLE1BQU0sQ0FBQ00sT0FBTyxHQUFHUCxLQUFLLENBQUNRLFNBQVMsQ0FBQ2EsSUFBSSxDQUFDLFNBQUNDLENBQUMsRUFBQ0MsQ0FBQzsyQkFBS0QsQ0FBQyxDQUFDRixTQUFTLEdBQUdHLENBQUMsQ0FBQ0gsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQUEsQ0FBQyxHQUFHcEIsS0FBSyxDQUFDUSxTQUFTO2NBRXhNO1FBQ0wsS0FBS29CLG1DQUFtQztZQUNwQyxPQUFPLGtCQUNBNUIsS0FBSztnQkFDUlEsU0FBUyxFQUFFUCxNQUFNLENBQUNNLE9BQU8sR0FBR1AsS0FBSyxDQUFDUSxTQUFTLENBQUNhLElBQUksQ0FBQyxTQUFDQyxDQUFDLEVBQUNDLENBQUM7MkJBQUtBLENBQUMsQ0FBQ0ksV0FBVyxHQUFHTCxDQUFDLENBQUNLLFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUFBLENBQUMsR0FBRyxDQUFDMUIsTUFBTSxDQUFDTSxPQUFPLEdBQUdQLEtBQUssQ0FBQ1EsU0FBUyxDQUFDYSxJQUFJLENBQUMsU0FBQ0MsQ0FBQyxFQUFDQyxDQUFDOzJCQUFLRCxDQUFDLENBQUNLLFdBQVcsR0FBR0osQ0FBQyxDQUFDSSxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFBQSxDQUFDLEdBQUczQixLQUFLLENBQUNRLFNBQVM7Y0FFaE47UUFDVDtZQUNJLE9BQU9SLEtBQUssQ0FBQztLQUNwQjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvaGlzdG9yaWFsL2NvbXByYXMvY29tcHJhUmVkdWNlci5qc3g/NGFhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ1JFQVJfQ09NUFJBLFxyXG4gICAgVFJBRVJfQ09NUFJBUyxcclxuICAgIEZJTFRST19DT01QUkEsXHJcbiAgICBPUkRFTkFSX0NPRElHT19DT01QUkEsXHJcbiAgICBPUkRFTkFSX05PTUJSRV9DT01QUkEsXHJcbiAgICBPUkRFTkFSX01BUkNBX0NPTVBSQSxcclxuICAgIE9SREVOQVJfTU9ERUxPX0NPTVBSQSxcclxuICAgIE9SREVOQVJfUlVCUk9fQ09NUFJBLFxyXG4gICAgT1JERU5BUl9QUk9WRUVET1JfQ09NUFJBLFxyXG4gICAgT1JERU5BUl9DT0RJR09fQ09NUFJBX0ZJTFRSQURPLFxyXG4gICAgT1JERU5BUl9OT01CUkVfQ09NUFJBX0ZJTFRSQURPLFxyXG4gICAgT1JERU5BUl9NQVJDQV9DT01QUkFfRklMVFJBRE8sXHJcbiAgICBPUkRFTkFSX01PREVMT19DT01QUkFfRklMVFJBRE8sXHJcbiAgICBPUkRFTkFSX1JVQlJPX0NPTVBSQV9GSUxUUkFETyxcclxuICAgIE9SREVOQVJfUFJPVkVFRE9SX0NPTVBSQV9GSUxUUkFETyxcclxufSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvaW5kZXhcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHJhcmVkdWNlciAoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBDUkVBUl9DT01QUkE6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNvbXByYXM6IHN0YXRlLmNvbXByYXMubWFwKGNvbXByYSA9PiBjb21wcmEuaWRQcm9kdWN0byA9PT0gYWN0aW9uLnBheWxvYWQuaWRQcm9kdWN0byA/IGFjdGlvbi5wYXlsb2FkIDogWy4uLnN0YXRlLmNvbXByYXMsIGFjdGlvbi5wYXlsb2FkXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVFJBRVJfQ09NUFJBUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY29tcHJhczogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEZJTFRST19DT01QUkE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYWRvczogc3RhdGUuY29tcHJhcy5maWx0ZXIoY29tcHJhID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wcmEubm9tYnJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ub3JtYWxpemUoXCJORkRcIikucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoYWN0aW9uLnBheWxvYWQudG9Mb3dlckNhc2UoKSA/IGFjdGlvbi5wYXlsb2FkIDogY29tcHJhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCBjb21wcmEubWFyY2FcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5vcm1hbGl6ZShcIk5GRFwiKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhhY3Rpb24ucGF5bG9hZC50b0xvd2VyQ2FzZSgpID8gYWN0aW9uLnBheWxvYWQgOiBjb21wcmEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IGNvbXByYS5tb2RlbG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5vcm1hbGl6ZShcIk5GRFwiKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhhY3Rpb24ucGF5bG9hZC50b0xvd2VyQ2FzZSgpID8gYWN0aW9uLnBheWxvYWQgOiBjb21wcmEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IGNvbXByYS5oaXN0b3JpYWwubWFwKGhpc3RvcmlhID0+IGhpc3RvcmlhLnByb3ZlZWRvci50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgT1JERU5BUl9DT0RJR09fQ09NUFJBOiBcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcHJhczogYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5jb21wcmFzLnNvcnQoKGEsYikgPT4gYi5jb2RpZ28gLSBhLmNvZGlnbykgOiAhYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5jb21wcmFzLnNvcnQoKGEsYikgPT4gYS5jb2RpZ28gLSBiLmNvZGlnbyApIDogc3RhdGUuY29tcHJhc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIE9SREVOQVJfTk9NQlJFX0NPTVBSQTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vcmRlbm8gZWwgc3RhdGUgc2VndW4gbGV0cmEuIEVsIHByaW1lciBwYXlsb2FkIGVzIGZhbHNlKHBvciBkZWZhdWx0IGVsIHN0YXRlIGVzdMOhIGFzaSksIGVudG9uY2VzIGRldnVlbHZlIGVsIG9iamV0byBhcnJlZ2xhZG8gZGUgbWVub3IgYSBtYXlvciwgeSBzaSBlcyB0cnVlIGxvIGRldnVlbHZlIGRlIG1heW9yIGEgbWVub3IuXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcHJhczogYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5jb21wcmFzLnNvcnQoKGEsYikgPT4gYi5ub21icmUgPiBhLm5vbWJyZSA/IDEgOiAtMSApIDogIWFjdGlvbi5wYXlsb2FkID8gc3RhdGUuY29tcHJhcy5zb3J0KChhLGIpID0+IGEubm9tYnJlID4gYi5ub21icmUgPyAxIDogLTEgKSA6IHN0YXRlLmNvbXByYXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBPUkRFTkFSX01BUkNBX0NPTVBSQTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vcmRlbm8gZWwgc3RhdGUgc2VndW4gbGV0cmEuIEVsIHByaW1lciBwYXlsb2FkIGVzIGZhbHNlKHBvciBkZWZhdWx0IGVsIHN0YXRlIGVzdMOhIGFzaSksIGVudG9uY2VzIGRldnVlbHZlIGVsIG9iamV0byBhcnJlZ2xhZG8gZGUgbWVub3IgYSBtYXlvciwgeSBzaSBlcyB0cnVlIGxvIGRldnVlbHZlIGRlIG1heW9yIGEgbWVub3IuXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcHJhczogYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5jb21wcmFzLnNvcnQoKGEsYikgPT4gYi5tYXJjYSA+IGEubWFyY2EgPyAxIDogLTEgKSA6ICFhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmNvbXByYXMuc29ydCgoYSxiKSA9PiBhLm1hcmNhID4gYi5tYXJjYSA/IDEgOiAtMSApIDogc3RhdGUuY29tcHJhc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIE9SREVOQVJfTU9ERUxPX0NPTVBSQTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vcmRlbm8gZWwgc3RhdGUgc2VndW4gbGV0cmEuIEVsIHByaW1lciBwYXlsb2FkIGVzIGZhbHNlKHBvciBkZWZhdWx0IGVsIHN0YXRlIGVzdMOhIGFzaSksIGVudG9uY2VzIGRldnVlbHZlIGVsIG9iamV0byBhcnJlZ2xhZG8gZGUgbWVub3IgYSBtYXlvciwgeSBzaSBlcyB0cnVlIGxvIGRldnVlbHZlIGRlIG1heW9yIGEgbWVub3IuXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcHJhczogYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5jb21wcmFzLnNvcnQoKGEsYikgPT4gYi5tb2RlbG8gPiBhLm1vZGVsbyA/IDEgOiAtMSApIDogIWFjdGlvbi5wYXlsb2FkID8gc3RhdGUuY29tcHJhcy5zb3J0KChhLGIpID0+IGEubW9kZWxvID4gYi5tb2RlbG8gPyAxIDogLTEgKSA6IHN0YXRlLmNvbXByYXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBPUkRFTkFSX1JVQlJPX0NPTVBSQTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vcmRlbm8gZWwgc3RhdGUgc2VndW4gbGV0cmEuIEVsIHByaW1lciBwYXlsb2FkIGVzIGZhbHNlKHBvciBkZWZhdWx0IGVsIHN0YXRlIGVzdMOhIGFzaSksIGVudG9uY2VzIGRldnVlbHZlIGVsIG9iamV0byBhcnJlZ2xhZG8gZGUgbWVub3IgYSBtYXlvciwgeSBzaSBlcyB0cnVlIGxvIGRldnVlbHZlIGRlIG1heW9yIGEgbWVub3IuXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcHJhczogYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5jb21wcmFzLnNvcnQoKGEsYikgPT4gYi5ydWJybyA+IGEucnVicm8gPyAxIDogLTEgKSA6ICFhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmNvbXByYXMuc29ydCgoYSxiKSA9PiBhLnJ1YnJvID4gYi5ydWJybyA/IDEgOiAtMSApIDogc3RhdGUuY29tcHJhc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIE9SREVOQVJfUFJPVkVFRE9SX0NPTVBSQTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vcmRlbm8gZWwgc3RhdGUgc2VndW4gbGV0cmEuIEVsIHByaW1lciBwYXlsb2FkIGVzIGZhbHNlKHBvciBkZWZhdWx0IGVsIHN0YXRlIGVzdMOhIGFzaSksIGVudG9uY2VzIGRldnVlbHZlIGVsIG9iamV0byBhcnJlZ2xhZG8gZGUgbWVub3IgYSBtYXlvciwgeSBzaSBlcyB0cnVlIGxvIGRldnVlbHZlIGRlIG1heW9yIGEgbWVub3IuXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcHJhczogYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5jb21wcmFzLnNvcnQoKGEsYikgPT4gYi5wcm92ZWVkb3IgPiBhLnByb3ZlZWRvciA/IDEgOiAtMSApIDogIWFjdGlvbi5wYXlsb2FkID8gc3RhdGUuY29tcHJhcy5zb3J0KChhLGIpID0+IGEucHJvdmVlZG9yID4gYi5wcm92ZWVkb3IgPyAxIDogLTEgKSA6IHN0YXRlLmNvbXByYXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBPUkRFTkFSX0RJU1BPTklCTEVTX0NPTVBSQTogXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXByYXM6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuY29tcHJhcy5zb3J0KChhLGIpID0+IGIuZGlzcG9uaWJsZXMgLSBhLmRpc3BvbmlibGVzKSA6ICFhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmNvbXByYXMuc29ydCgoYSxiKSA9PiBhLmRpc3BvbmlibGVzIC0gYi5kaXNwb25pYmxlcyApIDogc3RhdGUuY29tcHJhc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIE9SREVOQVJfQ09ESUdPX0NPTVBSQV9GSUxUUkFETzogXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYWRvczogYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5maWx0cmFkb3Muc29ydCgoYSxiKSA9PiBiLmNvZGlnbyAtIGEuY29kaWdvKSA6ICFhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmZpbHRyYWRvcy5zb3J0KChhLGIpID0+IGEuY29kaWdvIC0gYi5jb2RpZ28gKSA6IHN0YXRlLmZpbHRyYWRvc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIE9SREVOQVJfTk9NQlJFX0NPTVBSQV9GSUxUUkFETzogXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYWRvczogYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5maWx0cmFkb3Muc29ydCgoYSxiKSA9PiBiLm5vbWJyZSA+IGEubm9tYnJlID8gMSA6IC0xKSA6ICFhY3Rpb24ucGF5bG9hZCA/IHN0YXRlLmZpbHRyYWRvcy5zb3J0KChhLGIpID0+IGEubm9tYnJlID4gYi5ub21icmUgPyAxIDogLTEgKSA6IHN0YXRlLmZpbHRyYWRvc1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgT1JERU5BUl9NQVJDQV9DT01QUkFfRklMVFJBRE86IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFkb3M6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYi5tYXJjYSA+IGEubWFyY2EgPyAxIDogLTEpIDogIWFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYS5tYXJjYSA+IGIubWFyY2EgPyAxIDogLTEpIDogc3RhdGUuZmlsdHJhZG9zXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBPUkRFTkFSX01PREVMT19DT01QUkFfRklMVFJBRE86IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFkb3M6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYi5tb2RlbG8gPiBhLm1vZGVsbyA/IDEgOiAtMSkgOiAhYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5maWx0cmFkb3Muc29ydCgoYSxiKSA9PiBhLm1vZGVsbyA+IGIubW9kZWxvID8gMSA6IC0xKSA6IHN0YXRlLmZpbHRyYWRvc1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgT1JERU5BUl9SVUJST19DT01QUkFfRklMVFJBRE86IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFkb3M6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYi5ydWJybyA+IGEucnVicm8gPyAxIDogLTEpIDogIWFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYS5ydWJybyA+IGIucnVicm8gPyAxIDogLTEpIDogc3RhdGUuZmlsdHJhZG9zXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBPUkRFTkFSX1BST1ZFRURPUl9DT01QUkFfRklMVFJBRE86IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFkb3M6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYi5wcm92ZWVkb3IgPiBhLnByb3ZlZWRvciA/IDEgOiAtMSkgOiAhYWN0aW9uLnBheWxvYWQgPyBzdGF0ZS5maWx0cmFkb3Muc29ydCgoYSxiKSA9PiBhLnByb3ZlZWRvciA+IGIucHJvdmVlZG9yID8gMSA6IC0xKSA6IHN0YXRlLmZpbHRyYWRvc1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgT1JERU5BUl9ESVNQT05JQkxFU19DT01QUkFfRklMVFJBRE86IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFkb3M6IGFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYi5kaXNwb25pYmxlcyA+IGEuZGlzcG9uaWJsZXMgPyAxIDogLTEpIDogIWFjdGlvbi5wYXlsb2FkID8gc3RhdGUuZmlsdHJhZG9zLnNvcnQoKGEsYikgPT4gYS5kaXNwb25pYmxlcyA+IGIuZGlzcG9uaWJsZXMgPyAxIDogLTEpIDogc3RhdGUuZmlsdHJhZG9zXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiQ1JFQVJfQ09NUFJBIiwiVFJBRVJfQ09NUFJBUyIsIkZJTFRST19DT01QUkEiLCJPUkRFTkFSX0NPRElHT19DT01QUkEiLCJPUkRFTkFSX05PTUJSRV9DT01QUkEiLCJPUkRFTkFSX01BUkNBX0NPTVBSQSIsIk9SREVOQVJfTU9ERUxPX0NPTVBSQSIsIk9SREVOQVJfUlVCUk9fQ09NUFJBIiwiT1JERU5BUl9QUk9WRUVET1JfQ09NUFJBIiwiT1JERU5BUl9DT0RJR09fQ09NUFJBX0ZJTFRSQURPIiwiT1JERU5BUl9OT01CUkVfQ09NUFJBX0ZJTFRSQURPIiwiT1JERU5BUl9NQVJDQV9DT01QUkFfRklMVFJBRE8iLCJPUkRFTkFSX01PREVMT19DT01QUkFfRklMVFJBRE8iLCJPUkRFTkFSX1JVQlJPX0NPTVBSQV9GSUxUUkFETyIsIk9SREVOQVJfUFJPVkVFRE9SX0NPTVBSQV9GSUxUUkFETyIsImNvbXByYXJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjb21wcmFzIiwibWFwIiwiY29tcHJhIiwiaWRQcm9kdWN0byIsInBheWxvYWQiLCJmaWx0cmFkb3MiLCJmaWx0ZXIiLCJub21icmUiLCJ0b1N0cmluZyIsInRvTG93ZXJDYXNlIiwibm9ybWFsaXplIiwicmVwbGFjZSIsImluY2x1ZGVzIiwibWFyY2EiLCJtb2RlbG8iLCJoaXN0b3JpYWwiLCJoaXN0b3JpYSIsInByb3ZlZWRvciIsInNvcnQiLCJhIiwiYiIsImNvZGlnbyIsInJ1YnJvIiwiT1JERU5BUl9ESVNQT05JQkxFU19DT01QUkEiLCJkaXNwb25pYmxlcyIsIk9SREVOQVJfRElTUE9OSUJMRVNfQ09NUFJBX0ZJTFRSQURPIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/historial/compras/compraReducer.jsx\n");

/***/ })

});