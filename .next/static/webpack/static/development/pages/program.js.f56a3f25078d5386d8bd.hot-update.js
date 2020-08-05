webpackHotUpdate("static/development/pages/program.js",{

/***/ "./pages/program.tsx":
/*!***************************!*\
  !*** ./pages/program.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Container */ "./components/Container.tsx");
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_catalog_DepList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/catalog/DepList */ "./components/catalog/DepList.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_catalog_ProgramSummaryContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/catalog/ProgramSummaryContent */ "./components/catalog/ProgramSummaryContent.tsx");
/* harmony import */ var _components_catalog_TrainingSummary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/catalog/TrainingSummary */ "./components/catalog/TrainingSummary.tsx");
/* harmony import */ var _lib_with_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/with-apollo */ "./lib/with-apollo.jsx");
/* harmony import */ var _lib_with_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/with-auth */ "./lib/with-auth.jsx");


var _jsxFileName = "/data/apps/opensource/SchoolMan/web-client/pages/program.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query getDepartments {\n    departments {\n      id \n      title\n      programs {\n        id \n        title \n        description \n        logo \n        link \n        trainings { id title description banner link }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}













var GET_DEPARTMENTS_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

function ProgramPage(_ref) {
  var programId = _ref.programId,
      departments = _ref.departments;
  var filtered = departments.flatMap(function (d) {
    return d.programs;
  }).filter(function (p) {
    return p.id == programId;
  });
  var program = filtered.length > 0 ? filtered[0] : null;
  if (!program) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Program not found");
  return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "".concat(program.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    container: true,
    spacing: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Hidden"], {
    smDown: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    sm: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_components_catalog_DepList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    deps: departments,
    selectedProgramId: programId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12,
    md: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginTop: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Paper"], {
    style: {
      padding: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_components_catalog_ProgramSummaryContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    program: program,
    displayLink: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    variant: "h5",
    color: "primary",
    style: {
      textAlign: 'center',
      margin: '15px 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Available training courses"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, program.trainings.map(function (t) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
      item: true,
      sm: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: {
        pathname: '/training',
        query: {
          trainingId: t.id
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("a", {
      style: {
        textDecoration: 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(_components_catalog_TrainingSummary__WEBPACK_IMPORTED_MODULE_10__["default"], {
      training: t,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }))));
  })))))));
}

ProgramPage.getInitialProps = function _callee(_ref2) {
  var query, apolloClient, token, _ref3, departments;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref2.query, apolloClient = _ref2.apolloClient, token = _ref2.token;
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
            programId: query.programId,
            authRequired: false
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_apollo__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_lib_with_auth__WEBPACK_IMPORTED_MODULE_12__["default"])(ProgramPage)));

/***/ })

})
//# sourceMappingURL=program.js.f56a3f25078d5386d8bd.hot-update.js.map