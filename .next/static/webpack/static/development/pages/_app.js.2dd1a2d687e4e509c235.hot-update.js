webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/material-ui/theme.ts":
/*!**********************************!*\
  !*** ./lib/material-ui/theme.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
 // Create a theme instance.

var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  overrides: {
    MuiStepIcon: {
      root: {
        color: '#DFDFDF',
        fontWeight: 'bold',
        '&$completed': {
          color: '#FABD03'
        },
        '&$active': {
          color: '#FABD03'
        }
      },
      active: {},
      completed: {}
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      main: '#FABD03'
    },
    secondary: {
      main: '#FABD03'
    }
    /*
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
    */

  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ })

})
//# sourceMappingURL=_app.js.2dd1a2d687e4e509c235.hot-update.js.map