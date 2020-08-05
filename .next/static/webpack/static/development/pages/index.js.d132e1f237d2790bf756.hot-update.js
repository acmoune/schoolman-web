webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/catalog/DepartmentBox.tsx":
/*!**********************************************!*\
  !*** ./components/catalog/DepartmentBox.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DepartmentBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProgramSummaryContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProgramSummaryContent */ "./components/catalog/ProgramSummaryContent.tsx");
var _jsxFileName = "/data/apps/opensource/SchoolMan/web-client/components/catalog/DepartmentBox.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];






function compare(a, b) {
  if (a.title < b.title) {
    return -1;
  }

  if (a.title > b.title) {
    return 1;
  }

  return 0;
}

function DepartmentBox(_ref) {
  var department = _ref.department;
  var classes = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
    return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
      root: {
        marginTop: 40
      },
      title: {
        color: '#FABD03',
        fontSize: '10pt',
        padding: 5,
        fontWeight: 'bold',
        marginBottom: 15,
        borderBottom: '1px solid #DFDFDF'
      },
      programRoot: {
        marginBottom: 20,
        display: 'block',
        textDecoration: 'none',
        '&:hover': {
          opacity: 0.8,
          cursor: 'pointer'
        }
      }
    });
  })();
  var title = department.title,
      programs = department.programs;
  return __jsx("div", {
    className: classes.root,
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
    variant: "subtitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, title)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, programs.map(function (p) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: 12,
      md: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: p.id,
      href: {
        pathname: '/program',
        query: {
          programId: p.id
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("a", {
      className: classes.programRoot,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx(_ProgramSummaryContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      program: p,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }))));
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.d132e1f237d2790bf756.hot-update.js.map