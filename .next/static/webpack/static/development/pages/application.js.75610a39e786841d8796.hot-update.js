webpackHotUpdate("static/development/pages/application.js",{

/***/ "./components/ApplicationStepper.tsx":
/*!*******************************************!*\
  !*** ./components/ApplicationStepper.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApplicationStepper; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Container */ "./components/Container.tsx");
/* harmony import */ var _components_AuthContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/AuthContext */ "./components/AuthContext.tsx");
/* harmony import */ var _components_ProfileForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/ProfileForm */ "./components/ProfileForm.tsx");
/* harmony import */ var _ProfileView__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ProfileView */ "./components/ProfileView.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _ApplierForm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ApplierForm */ "./components/ApplierForm.tsx");
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/Alert */ "./components/Alert.tsx");
/* harmony import */ var _lib_send_mail__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../lib/send-mail */ "./lib/send-mail.tsx");
/* harmony import */ var _lib_utilities__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../lib/utilities */ "./lib/utilities.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../app.config */ "./app.config.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_app_config__WEBPACK_IMPORTED_MODULE_24__);










var _jsxFileName = "/data/apps/opensource/SchoolMan/web-client/components/ApplicationStepper.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n  query getApplier {\n    applier @client {\n      name\n      email\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n  query getApplicationProfile {\n    applicationProfile @client {\n      birthDate\n      birthPlace\n      residence\n      phoneNumber\n      nationality\n      otherDetails\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
















var GET_APPLICATION_PROFILE_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_18__["gql"])(_templateObject());
var GET_APPLIER_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_18__["gql"])(_templateObject2());

var resetApplicationData = function resetApplicationData(client) {
  client.writeQuery({
    query: GET_APPLIER_QUERY,
    data: {
      applier: {
        __typename: 'Applier',
        name: '',
        email: ''
      }
    }
  });
  client.writeQuery({
    query: GET_APPLICATION_PROFILE_QUERY,
    data: {
      applicationProfile: {
        __typename: 'ProfileData',
        birthDate: null,
        birthPlace: '',
        residence: '',
        phoneNumber: '',
        nationality: '',
        otherDetails: null
      }
    }
  });
};

function ApplicationStepper(props) {
  var classes = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(function (theme) {
    return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["createStyles"])({
      root: {
        width: '100%'
      },
      btnBar: {
        display: 'flex',
        padding: '10px 0px',
        borderTop: '1px solid #DFDFDF'
      },
      btnLeft: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'flex-start'
      },
      btnRight: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'flex-end'
      }
    });
  })();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])({
    open: false,
    level: 'info',
    message: ''
  }),
      alertOptions = _useState[0],
      setAlertOptions = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(false),
      sending = _useState2[0],
      setSending = _useState2[1];

  var _useAuth = Object(_components_AuthContext__WEBPACK_IMPORTED_MODULE_14__["useAuth"])(),
      currentUser = _useAuth.currentUser;

  var client = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_19__["useApolloClient"])();

  var _client$readQuery = client.readQuery({
    query: GET_APPLICATION_PROFILE_QUERY
  }),
      applicationProfile = _client$readQuery.applicationProfile;

  var _client$readQuery2 = client.readQuery({
    query: GET_APPLIER_QUERY
  }),
      applier = _client$readQuery2.applier;

  var steps = getSteps(!!currentUser);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])('ConfirmAccount'),
      step = _useState3[0],
      setStep = _useState3[1];

  var activeStep = step === 'ApplicationConfirmation' ? currentUser ? 3 : 4 : steps.filter(function (s) {
    return s.step === step;
  })[0].id;

  var idBody = function idBody(data) {
    return "\n      <div>\n        <p>Dear ".concat(data.name, ", your application is being processed; you will have a response as soon as possible. See details below:</p>\n\n        <h3>Name and Email</h3>\n        <p><strong>Name</strong><br/>").concat(data.name, "</p>\n        <p><strong>Email</strong><br/>").concat(data.email, "</p>\n        <br />\n        <br />\n      </div>\n    ");
  };

  var sessionBody = function sessionBody() {
    return "\n      <div>\n        <h3>Session details</h3>\n        <p><strong>Department</strong><br/>".concat(props.departmentTitle, "</p>\n        <p><strong>Program</strong><br/>").concat(props.programTitle, "</p>\n        <p><strong>Plan</strong><br/>").concat(props.planTitle, "</p>\n        <p><strong>Training</strong><br/>").concat(props.trainingTitle, "</p>\n        <p><strong>Session</strong><br/>").concat(props.session.title, "</p>\n        <p><strong>Start date</strong><br/>").concat(props.session.startDate && new Date(props.session.startDate).toLocaleDateString(), "</p>\n        <p><strong>Duration</strong><br/>").concat(props.planDuration, "</p>\n        <br />\n        <br />\n      </div>\n    ");
  };

  var profileBody = function profileBody(profile) {
    return "\n      <div>\n        <h3>Profile details</h3>\n        <p><strong>Birthdate</strong><br/>".concat(new Date(profile.birthDate).toLocaleDateString(), "</p>\n        <p><strong>Birth place</strong><br/>").concat(profile.birthPlace, "</p>\n        <p><strong>Residence</strong><br/>").concat(profile.residence, "</p>\n        <p><strong>Phone number</strong><br/>").concat(profile.phoneNumber, "</p>\n        <p><strong>Nationality</strong><br/>").concat(profile.nationality, "</p>\n        <p><strong>Other details</strong><br/>").concat(profile.otherDetails || '(missing)', "</p>\n        <br />\n        <br />\n      </div>\n    ");
  };

  var goToStep = function goToStep(nextStep) {
    return setStep(nextStep);
  };

  var handleBack = function handleBack() {
    switch (step) {
      case 'ConfirmAccount':
        return;

      case 'FillApplicationForm':
        return goToStep('ConfirmAccount');

      case 'ReviewProfileData':
        if (currentUser) return goToStep('ConfirmAccount');else return goToStep('FillApplicationForm');

      case 'ReviewTrainingSession':
        return goToStep('ReviewProfileData');
    }
  };

  function getSteps(loggedIn) {
    var steps = [];
    var index = 0;
    steps.push({
      step: 'ConfirmAccount',
      caption: 'Confirm your account',
      id: index
    });
    index += 1;

    if (!loggedIn) {
      steps.push({
        step: 'FillApplicationForm',
        caption: 'Fill application form',
        id: index
      });
      index += 1;
    }

    steps.push({
      step: 'ReviewProfileData',
      caption: 'Review your profile',
      id: index
    });
    index += 1;
    steps.push({
      step: 'ReviewTrainingSession',
      caption: 'Review training session',
      id: index
    });
    return steps;
  }

  function ConfirmAccountStep() {
    var classes = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(function (theme) {
      return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["createStyles"])({
        root: {
          marginBottom: 40,
          paddingTop: 30,
          paddingBottom: 15,
          textAlign: 'center'
        },
        hasAccount: {},
        noAccount: {
          marginBottom: 30
        }
      });
    })();
    return __jsx(_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
      maxWidth: 500,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, __jsx("div", {
      style: {
        padding: 10,
        textAlign: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
      variant: "h5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, "Confirm your account")), __jsx("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, currentUser ? __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, "You are applying as"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
      variant: "h4",
      color: "secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, currentUser.fullName)), __jsx("div", {
      style: {
        fontSize: '10pt',
        color: '#808080',
        marginBottom: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, "(", currentUser.email, ")"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
      size: "large",
      variant: "contained",
      color: "secondary",
      onClick: function onClick() {
        return goToStep('ReviewProfileData');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }, "Review your profile")), __jsx(_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
      maxWidth: 300,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }, __jsx("div", {
      style: {
        fontSize: '9pt',
        color: '#808080',
        textAlign: 'center',
        paddingTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, "If you want to use a different account, sign out first, then sign in with the right account."))) : __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, __jsx("div", {
      className: classes.noAccount,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }, __jsx("div", {
      style: {
        fontWeight: 'bold',
        marginBottom: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      },
      __self: this
    }, "Don't have an account yet ?"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    }, __jsx(_ApplierForm__WEBPACK_IMPORTED_MODULE_20__["default"], {
      data: applier,
      onSubmit: function onSubmit(data) {
        client.writeQuery({
          query: GET_APPLIER_QUERY,
          data: {
            applier: _objectSpread({
              __typename: 'Applier'
            }, data)
          }
        });
        goToStep('FillApplicationForm');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    })), __jsx(_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
      maxWidth: 300,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }, __jsx("div", {
      style: {
        fontSize: '9pt',
        color: '#808080',
        textAlign: 'center',
        paddingTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }, "If your application is successfull, those information will be used to create your account."))), __jsx("div", {
      className: classes.hasAccount,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }, "Already have an account ? \xA0", __jsx(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
      href: {
        pathname: '/signIn',
        query: {
          backTo: "/application?tsId=".concat(props.session.id)
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: this
    }, __jsx("a", {
      style: {
        textDecoration: 'none',
        color: '#FABD03'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: this
    }, "Sign in"))))));
  }

  function FillApplicationFormStep(props) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      },
      __self: this
    }, __jsx("div", {
      style: {
        textAlign: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }, __jsx("div", {
      style: {
        padding: 10,
        textAlign: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
      variant: "h5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }, "Application form")), __jsx(_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
      maxWidth: 600,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    }, __jsx(_components_ProfileForm__WEBPACK_IMPORTED_MODULE_15__["default"], {
      profile: applicationProfile,
      submitText: "Save and Review your data",
      onSubmit: function onSubmit(data) {
        return props.onSubmit(data);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    })), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312
      },
      __self: this
    })));
  }

  function ReviewProfileDataStep() {
    if (currentUser && !props.profile) return __jsx("div", {
      style: {
        textAlign: 'center',
        padding: 50
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: this
    }, "You don't have a profile yet. Please ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
      href: "/myProfile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: this
    }, "create your profile")), " and retry to apply.");
    return __jsx("div", {
      style: {
        textAlign: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327
      },
      __self: this
    }, __jsx("div", {
      style: {
        padding: 10,
        textAlign: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
      variant: "h5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329
      },
      __self: this
    }, "Review your Profile")), currentUser ? __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    }, __jsx("div", {
      style: {
        fontSize: '9pt',
        color: '#808080',
        margin: '10px 0px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334
      },
      __self: this
    }, "If your profile is not up to date, please update it first then try to apply again."), __jsx(_ProfileView__WEBPACK_IMPORTED_MODULE_16__["default"], {
      profile: currentUser.profile,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    })) : __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341
      },
      __self: this
    }, __jsx(_ProfileView__WEBPACK_IMPORTED_MODULE_16__["default"], {
      profile: applicationProfile,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342
      },
      __self: this
    })), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348
      },
      __self: this
    }, (currentUser && currentUser.profile || !currentUser) && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
      size: "large",
      variant: "contained",
      color: "secondary",
      onClick: function onClick() {
        return goToStep('ReviewTrainingSession');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }, "Review Training Session Details")), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361
      },
      __self: this
    }));
  }

  function ReviewTrainingSessionStep() {
    var classes = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(function (theme) {
      return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["createStyles"])({
        root: {
          marginBottom: 40,
          textAlign: 'center'
        }
      });
    })();
    if (currentUser && !props.profile) return __jsx("div", {
      style: {
        textAlign: 'center',
        padding: 50
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376
      },
      __self: this
    }, "You don't have a profile yet. Please ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
      href: "/myProfile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377
      },
      __self: this
    }, "create your profile")), " and retry to apply.");
    return __jsx(_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
      maxWidth: 600,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382
      },
      __self: this
    }, __jsx("div", {
      style: {
        padding: 10,
        textAlign: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
      variant: "h5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384
      },
      __self: this
    }, "Review Training Session Details")), __jsx("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Paper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389
      },
      __self: this
    }, __jsx("div", {
      style: {
        padding: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Table"], {
      size: "small",
      style: {
        border: '1px solid #DFDFDF'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableBody"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableRow"], {
      key: "dep",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      component: "th",
      scope: "row",
      style: {
        color: '#808080'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394
      },
      __self: this
    }, "Department"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395
      },
      __self: this
    }, props.departmentTitle)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableRow"], {
      key: "program",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      component: "th",
      scope: "row",
      style: {
        color: '#808080'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399
      },
      __self: this
    }, "Program"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400
      },
      __self: this
    }, props.programTitle)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableRow"], {
      key: "plan",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      component: "th",
      scope: "row",
      style: {
        color: '#808080'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404
      },
      __self: this
    }, "Plan"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405
      },
      __self: this
    }, props.planTitle)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableRow"], {
      key: "training",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      component: "th",
      scope: "row",
      style: {
        color: '#808080'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409
      },
      __self: this
    }, "Training"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410
      },
      __self: this
    }, props.trainingTitle)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableRow"], {
      key: "session",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      component: "th",
      scope: "row",
      style: {
        color: '#808080'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414
      },
      __self: this
    }, "Session"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415
      },
      __self: this
    }, props.session.title)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableRow"], {
      key: "sdate",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      component: "th",
      scope: "row",
      style: {
        color: '#808080'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419
      },
      __self: this
    }, "Start date"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420
      },
      __self: this
    }, props.session.startDate)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableRow"], {
      key: "duration",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      component: "th",
      scope: "row",
      style: {
        color: '#808080'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424
      },
      __self: this
    }, "Duration"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425
      },
      __self: this
    }, props.planDuration))))), props.session.fees.length > 0 ? __jsx("div", {
      style: {
        padding: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432
      },
      __self: this
    }, __jsx("div", {
      style: {
        marginBottom: 5,
        color: '#808080'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433
      },
      __self: this
    }, "Fees"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Table"], {
      size: "small",
      style: {
        border: '1px solid #DFDFDF'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableHead"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableRow"], {
      style: {
        backgroundColor: '#DFDFDF'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438
      },
      __self: this
    }, "Description"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439
      },
      __self: this
    }, "Type"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 440
      },
      __self: this
    }, "Amount"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableBody"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444
      },
      __self: this
    }, props.session.fees.map(function (f) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableRow"], {
        key: f.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }, f.description, " ", f.optional && __jsx("span", {
        style: {
          color: '#808080'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }, "(Optional)")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        },
        __self: this
      }, f.feeType), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], {
        align: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        __self: this
      }, f.promotionalAmount > 0 ? __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }, __jsx("span", {
        style: {
          textDecoration: 'line-through'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, Object(_lib_utilities__WEBPACK_IMPORTED_MODULE_23__["currency"])(f.amount)), " \xA0", __jsx("span", {
        style: {
          color: 'orange'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        __self: this
      }, Object(_lib_utilities__WEBPACK_IMPORTED_MODULE_23__["currency"])(f.promotionalAmount))) : __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      }, Object(_lib_utilities__WEBPACK_IMPORTED_MODULE_23__["currency"])(f.amount))));
    }))), __jsx(_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
      maxWidth: 400,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463
      },
      __self: this
    }, __jsx("div", {
      style: {
        fontSize: '9pt',
        color: '#808080',
        textAlign: 'center',
        paddingTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465
      },
      __self: this
    }, "Note: "), " These fees are the training fees at the time the session was created, they might be different from the current training fees."))) : __jsx("div", {
      style: {
        padding: 20
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470
      },
      __self: this
    }, "No fees")), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 474
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
      size: "large",
      variant: "contained",
      color: "secondary",
      style: {
        marginTop: 15
      },
      disabled: sending,
      onClick: function _callee() {
        var messageBody, errorMessage;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                messageBody = currentUser ? idBody({
                  name: currentUser.fullName,
                  email: currentUser.email
                }) : idBody(applier);
                messageBody += sessionBody();
                if (currentUser) messageBody += '<p><h3>Profile details</h3> (Existing user)</p>';else messageBody += profileBody(applicationProfile);
                _context.prev = 3;
                setSending(true);
                _context.next = 7;
                return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(Object(_lib_send_mail__WEBPACK_IMPORTED_MODULE_22__["default"])({
                  subject: "Application form (".concat(currentUser ? currentUser.fullName : applier.name, ")"),
                  body: messageBody,
                  to: _app_config__WEBPACK_IMPORTED_MODULE_24__["applicationReceiver"]
                }));

              case 7:
                goToStep('ApplicationConfirmation');
                resetApplicationData(client);
                _context.next = 16;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                errorMessage = _context.t0.message;
                if (_context.t0.response) errorMessage = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default()(_context.t0.response.data.err);
                setAlertOptions({
                  open: true,
                  level: 'error',
                  message: "Could not send email: ".concat(errorMessage)
                });

              case 16:
                _context.prev = 16;
                setSending(false);
                _context.prev = 18;
                _context.next = 21;
                return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(Object(_lib_send_mail__WEBPACK_IMPORTED_MODULE_22__["default"])({
                  subject: "Application form received (".concat(currentUser ? currentUser.fullName : applier.name, ")"),
                  body: messageBody,
                  to: applier.email
                }));

              case 21:
                _context.next = 25;
                break;

              case 23:
                _context.prev = 23;
                _context.t1 = _context["catch"](18);

              case 25:
                return _context.finish(16);

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, null, null, [[3, 11, 16, 26], [18, 23]]);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 475
      },
      __self: this
    }, sending ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["CircularProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517
      },
      __self: this
    }) : 'Apply')))));
  }

  function ApplicationConfirmationStep() {
    return __jsx("div", {
      style: {
        textAlign: 'center',
        margin: '50px 0px',
        fontSize: '10pt',
        color: '#808080'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528
      },
      __self: this
    }, __jsx("img", {
      src: "/images/success.png",
      width: "100",
      height: "100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 531
      },
      __self: this
    }, "Your application has been received and is being processed. We will contact you shortly."));
  }

  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Paper"], {
    style: {
      padding: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Hidden"], {
    smDown: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Stepper"], {
    activeStep: activeStep,
    alternativeLabel: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542
    },
    __self: this
  }, steps.map(function (s) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Step"], {
      key: s.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 544
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["StepLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 545
      },
      __self: this
    }, s.caption));
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Hidden"], {
    mdUp: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551
    },
    __self: this
  }, __jsx("div", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: this
  }, step !== 'ApplicationConfirmation' ? __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: this
  }, "Step ", activeStep + 1, " / ", steps.length) : __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555
    },
    __self: this
  }, "Done")))), __jsx("div", {
    style: {
      minHeight: 250
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561
    },
    __self: this
  }, step === 'ConfirmAccount' && __jsx(ConfirmAccountStep, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562
    },
    __self: this
  }), step === 'FillApplicationForm' && __jsx(FillApplicationFormStep, {
    onSubmit: function onSubmit(data) {
      goToStep('ReviewProfileData');
      client.writeQuery({
        query: GET_APPLICATION_PROFILE_QUERY,
        data: {
          applicationProfile: _objectSpread({
            __typename: 'ProfileData'
          }, data)
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565
    },
    __self: this
  }), step === 'ReviewProfileData' && __jsx(ReviewProfileDataStep, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582
    },
    __self: this
  }), step === 'ReviewTrainingSession' && __jsx(ReviewTrainingSessionStep, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583
    },
    __self: this
  }), step === 'ApplicationConfirmation' && __jsx(ApplicationConfirmationStep, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
    },
    __self: this
  }, step !== 'ApplicationConfirmation' && __jsx("div", {
    className: classes.btnBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589
    },
    __self: this
  }, __jsx("div", {
    className: classes.btnLeft,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    variant: "contained",
    color: "default",
    disabled: activeStep === 0,
    onClick: handleBack,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591
    },
    __self: this
  }, "Back")), __jsx("div", {
    className: classes.btnRight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    variant: "contained",
    color: "default",
    onClick: function onClick() {
      resetApplicationData(client);
      props.handleCancel();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595
    },
    __self: this
  }, "Cancel")))), __jsx(_components_Alert__WEBPACK_IMPORTED_MODULE_21__["default"], {
    level: alertOptions.level,
    message: alertOptions.message,
    open: alertOptions.open,
    onClose: function onClose() {
      return setAlertOptions({
        open: false,
        level: alertOptions.level,
        message: alertOptions.message
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=application.js.75610a39e786841d8796.hot-update.js.map