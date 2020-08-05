webpackHotUpdate("static/development/pages/training.js",{

/***/ "./components/catalog/DepList.tsx":
false,

/***/ "./pages/training.tsx":
/*!****************************!*\
  !*** ./pages/training.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.config */ "./app.config.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_app_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_with_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/with-apollo */ "./lib/with-apollo.jsx");
/* harmony import */ var _lib_with_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/with-auth */ "./lib/with-auth.jsx");
/* harmony import */ var _lib_s3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/s3 */ "./lib/s3.ts");
/* harmony import */ var _lib_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/utilities */ "./lib/utilities.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Container */ "./components/Container.tsx");
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.tsx");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");




var _jsxFileName = "/data/apps/opensource/SchoolMan/web-client/pages/training.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  query getTrainingById($trainingId: ID!) {\n    training(trainingId: $trainingId) {\n      id\n      title\n      description\n      banner\n      link\n      requiredOptionalUnits\n      prerequisites\n      qualifications\n      units { id title syllabus optional }\n      plans {\n        id\n        title\n        description\n        duration\n        fees { id description feeType amount promotionalAmount optional }\n        currentSessions {\n          id\n          title\n          startDate\n          status\n          fees { id description feeType amount promotionalAmount optional }\n        }\n      }\n      program {id title logo }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
















function Units(props) {
  var classes = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__["makeStyles"])(function (theme) {
    return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__["createStyles"])({
      root: {
        marginTop: 20
      },
      heading: {
        flexGrow: 1
      },
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary
      }
    });
  })();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(-1),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      currPanelId = _React$useState2[0],
      setCurrPanelId = _React$useState2[1];

  var handleChange = function handleChange(id) {
    return function (event) {
      if (id === currPanelId) setCurrPanelId(-1);else setCurrPanelId(id);
    };
  };

  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginBottom: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Typography"], {
    variant: "subtitle2",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Units")), props.units.length > 0 ? props.units.map(function (u) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ExpansionPanel"], {
      expanded: currPanelId === u.id,
      onChange: handleChange(u.id),
      key: u.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ExpansionPanelSummary"], {
      expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }),
      "aria-controls": "panel".concat(u.id),
      id: "panel".concat(u.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Typography"], {
      className: classes.heading,
      variant: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, u.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Typography"], {
      className: classes.secondaryHeading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, u.optional ? 'Optional' : 'Required')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ExpansionPanelDetails"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("div", {
      style: {
        flexGrow: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("div", {
      dangerouslySetInnerHTML: {
        __html: u.syllabus
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }))));
  }) : __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "No Units"));
}

function Plan(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    style: {
      paddingLeft: 15,
      borderLeft: '1px solid #DFDFDF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Typography"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, props.plan.title)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Typography"], {
    variant: "caption",
    style: {
      color: '#808080'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, props.plan.description)), __jsx("div", {
    style: {
      marginTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Table"], {
    size: "small",
    style: {
      border: '1px solid #DFDFDF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableRow"], {
    key: "duration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
    component: "th",
    scope: "row",
    style: {
      color: '#808080'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Duration"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, props.plan.duration))))), __jsx("div", {
    style: {
      color: '#808080',
      marginTop: 15,
      fontSize: '11pt'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Fees"), props.plan.fees.length > 0 ? __jsx("div", {
    style: {
      marginTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Table"], {
    size: "small",
    style: {
      border: '1px solid #DFDFDF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableHead"], {
    style: {
      backgroundColor: '#DFDFDF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableRow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Description"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Type"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Amount"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, props.plan.fees.map(function (f) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableRow"], {
      key: f.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, f.description, " ", f.optional && __jsx("span", {
      style: {
        color: '#808080'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "(Optional)")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, f.feeType), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, f.promotionalAmount > 0 ? __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx("span", {
      style: {
        textDecoration: 'line-through'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, Object(_lib_utilities__WEBPACK_IMPORTED_MODULE_12__["currency"])(f.amount)), " \xA0", __jsx("span", {
      style: {
        color: 'orange'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, Object(_lib_utilities__WEBPACK_IMPORTED_MODULE_12__["currency"])(f.promotionalAmount))) : __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, Object(_lib_utilities__WEBPACK_IMPORTED_MODULE_12__["currency"])(f.amount))));
  })))) : __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "No fees"), __jsx("div", {
    style: {
      color: '#808080',
      marginTop: 15,
      fontSize: '11pt'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Current Sessions"), props.plan.currentSessions.length > 0 ? __jsx("div", {
    style: {
      marginTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Table"], {
    size: "small",
    style: {
      border: '1px solid #DFDFDF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableHead"], {
    style: {
      backgroundColor: '#DFDFDF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableRow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Title"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Start date"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Status"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, props.plan.currentSessions.map(function (s) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableRow"], {
      key: s.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, s.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, s.startDate), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, s.status), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Button"], {
      variant: "contained",
      color: "secondary",
      size: "small",
      onClick: function onClick() {
        return router.push({
          pathname: '/application',
          query: {
            tsId: s.id
          }
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, "Apply")));
  })))) : __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "There is no new session right now, we should schedule one shortly, please check again later")));
}

function Plans(props) {
  var classes = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__["makeStyles"])(function (theme) {
    return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__["createStyles"])({
      root: {
        marginTop: 20
      },
      planItem: {
        fontSize: '11pt',
        color: '#808080',
        cursor: 'pointer',
        padding: 5,
        borderRadius: 3
      },
      selectedPlanItem: {
        backgroundColor: '#DFDFDF'
      }
    });
  })();

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(props.plans.length > 0 ? 0 : -1),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      currentPlanId = _React$useState4[0],
      setCurrentPlanId = _React$useState4[1];

  var handleClick = function handleClick(id) {
    return function (event) {
      return setCurrentPlanId(id);
    };
  };

  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginBottom: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Typography"], {
    variant: "subtitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "Plans")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Paper"], {
    style: {
      padding: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Grid"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, props.plans.map(function (p, i) {
    return __jsx("div", {
      key: p.id,
      className: "".concat(classes.planItem, " ").concat(i === currentPlanId ? classes.selectedPlanItem : ''),
      onClick: handleClick(i),
      style: {
        position: 'relative',
        paddingRight: 22
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, p.title, p.currentSessions.length > 0 && __jsx("span", {
      style: {
        fontSize: '8pt',
        width: 16,
        height: 16,
        textAlign: 'center',
        borderRadius: '50%',
        backgroundColor: '#444444',
        color: 'white',
        position: 'absolute',
        right: 5,
        top: 7,
        display: 'inline-block'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, p.currentSessions.length));
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Grid"], {
    item: true,
    xs: 12,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, currentPlanId !== -1 ? __jsx(Plan, {
    plan: props.plans[currentPlanId],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }) : __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "No plan selected")))));
}

var GET_ONE_TRAINING_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_7__["gql"])(_templateObject());

function TrainingPage(props) {
  var t = props.training;
  var banner = t.banner ? _lib_s3__WEBPACK_IMPORTED_MODULE_11__["default"].getFileUrl(t.banner) : "".concat(_app_config__WEBPACK_IMPORTED_MODULE_8__["apiServer"], "/assets/images/trainings/no-banner.jpg");
  return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_15__["default"], {
    title: "".concat(props.training.title, " - Training -  IMIT"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, __jsx("img", {
    src: banner,
    alt: "",
    style: {
      width: '100%',
      marginTop: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Paper"], {
    style: {
      padding: 15,
      marginTop: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Typography"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, t.title)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Typography"], {
    variant: "caption",
    style: {
      color: '#808080'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, t.description)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, t.link ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, __jsx("a", {
    href: t.link,
    style: {
      textDecoration: 'none',
      fontSize: '8pt',
      color: '#339967'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, "Official  vendor link")) : null), __jsx("div", {
    style: {
      marginTop: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Table"], {
    size: "small",
    style: {
      border: '1px solid #DFDFDF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableRow"], {
    key: t.prerequisites,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
    component: "th",
    scope: "row",
    style: {
      color: '#808080'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, "Program"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: {
      pathname: "/program",
      query: {
        programId: t.program.id
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, t.program.title)))), t.prerequisites && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableRow"], {
    key: t.prerequisites,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
    component: "th",
    scope: "row",
    style: {
      color: '#808080'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, "Prerequisites"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, t.prerequisites)), t.qualifications && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableRow"], {
    key: t.qualifications,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
    component: "th",
    scope: "row",
    style: {
      color: '#808080'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, "Qualifications"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, t.qualifications)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableRow"], {
    key: "reqNum",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
    component: "th",
    scope: "row",
    style: {
      color: '#808080'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, "Required number of optional units"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TableCell"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, t.requiredOptionalUnits || 0)))))), __jsx(Plans, {
    plans: t.plans,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }), __jsx(Units, {
    units: t.units,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  })));
}

TrainingPage.getInitialProps = function _callee(_ref) {
  var query, apolloClient, token, _ref2, training;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref.query, apolloClient = _ref.apolloClient, token = _ref.token;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(apolloClient.query({
            query: GET_ONE_TRAINING_QUERY,
            variables: {
              trainingId: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(query.trainingId, 10)
            },
            context: {
              headers: {
                'schoolman_token': token
              }
            }
          }));

        case 3:
          _ref2 = _context.sent;
          training = _ref2.data.training;
          return _context.abrupt("return", {
            training: training,
            authRequired: false
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_apollo__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_lib_with_auth__WEBPACK_IMPORTED_MODULE_10__["default"])(TrainingPage)));

/***/ })

})
//# sourceMappingURL=training.js.9ae5ae53cd6184527ded.hot-update.js.map