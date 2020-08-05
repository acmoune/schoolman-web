webpackHotUpdate("static/development/pages/program.js",{

/***/ "./components/catalog/TrainingSummary.tsx":
/*!************************************************!*\
  !*** ./components/catalog/TrainingSummary.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TrainingSummary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.config */ "./app.config.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_s3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/s3 */ "./lib/s3.ts");
var _jsxFileName = "/data/apps/opensource/SchoolMan/web-client/components/catalog/TrainingSummary.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];






function TrainingSummary(_ref) {
  var training = _ref.training,
      displayLink = _ref.displayLink,
      href = _ref.href;
  var classes = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
    return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
      root: {
        marginBottom: 15,
        '&:hover': {
          opacity: 0.8,
          cursor: 'pointer'
        }
      },
      imgBox: {},
      contentBox: {
        padding: 0
      },
      title: {
        fontSize: '12pt',
        textDecoration: 'none',
        color: '#000000',
        fontWeight: 'bold'
      },
      link: {
        textDecoration: 'none',
        fontSize: '8pt',
        display: 'inline-block',
        color: '#FABD03',
        marginTop: 5
      }
    });
  })();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var banner = training.banner ? _lib_s3__WEBPACK_IMPORTED_MODULE_5__["default"].getFileUrl(training.banner) : "".concat(_app_config__WEBPACK_IMPORTED_MODULE_4__["apiServer"], "/assets/images/trainings/no-banner.jpg");
  return __jsx("div", {
    className: classes.root,
    onClick: function onClick() {
      return href && router.push(href);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: classes.imgBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("img", {
    src: banner,
    alt: "",
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), __jsx("div", {
    className: classes.contentBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, training.title)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "caption",
    style: {
      color: '#808080'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, training.description)), displayLink && training.link ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("a", {
    className: classes.link,
    href: training.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Official  vendor link")) : null));
}
TrainingSummary.defaultProps = {
  displayLink: false,
  href: null
};

/***/ })

})
//# sourceMappingURL=program.js.dcf32f12d20e4a7c82c2.hot-update.js.map