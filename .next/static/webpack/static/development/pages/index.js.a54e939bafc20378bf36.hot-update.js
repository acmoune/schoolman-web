webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Container */ "./components/Container.tsx");
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.tsx");
/* harmony import */ var _components_catalog_DepartmentList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/catalog/DepartmentList */ "./components/catalog/DepartmentList.tsx");
/* harmony import */ var _lib_with_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/with-apollo */ "./lib/with-apollo.jsx");
/* harmony import */ var _lib_with_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/with-auth */ "./lib/with-auth.jsx");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "/data/apps/opensource/SchoolMan/web-client/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query getDepartments {\n    departments {\n      id\n      title\n      programs {\n        id \n        title \n        description \n        logo \n        link \n        trainings { id title description banner link }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var GET_DEPARTMENTS_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_8__["gql"])(_templateObject());

function IndexPage(_ref) {
  var departments = _ref.departments;
  return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "SchoolMan - Your light Opensource School Manager",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("img", {
    src: "/images/banner.jpg",
    alt: "",
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
    variant: "h4",
    color: "primary",
    style: {
      textAlign: 'center',
      marginTop: 30
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "All Training Programs"), __jsx(_components_catalog_DepartmentList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    departments: departments,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })));
}

IndexPage.getInitialProps = function _callee(_ref2) {
  var apolloClient, token, _ref3, departments;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          apolloClient = _ref2.apolloClient, token = _ref2.token;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(apolloClient.query({
            query: GET_DEPARTMENTS_QUERY,
            context: {
              headers: {
                'schoolman_token': token
              }
            }
          }));

        case 3:
          _ref3 = _context.sent;
          departments = _ref3.data.departments;
          return _context.abrupt("return", {
            departments: departments,
            authRequired: false
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_apollo__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_lib_with_auth__WEBPACK_IMPORTED_MODULE_7__["default"])(IndexPage)));

/***/ })

})
//# sourceMappingURL=index.js.a54e939bafc20378bf36.hot-update.js.map