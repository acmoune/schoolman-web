module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		5: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+7Ea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TkGN");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WZpn");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("KNS6");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Q1Ss");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_date_io_date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Hz3a");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("RPRI");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function ProfileForm({
  profile,
  submitText,
  onSubmit
}) {
  const classes = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
    fieldGroup: {
      marginBottom: 25,
      padding: 10
    },
    groupTitle: {
      fontSize: '16pt',
      color: '#808080',
      paddingBottom: 5,
      borderBottom: '1px solid #DFDFDF',
      marginBottom: 15
    },
    field: {
      marginBottom: 30
    }
  }))();
  const {
    0: inputErrors,
    1: setInputErrors
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    birthDateErrors: [],
    birthPlaceErrors: [],
    residenceErrors: [],
    phoneNumberErrors: [],
    nationalityErrors: []
  });
  const {
    0: alertOptions,
    1: setAlertOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    open: false,
    level: 'info',
    message: ''
  });

  function contentFrom(content) {
    if (false) {}

    return draft_js__WEBPACK_IMPORTED_MODULE_7__["ContentState"].createFromText(content);
  } // Fields state variables


  const {
    0: birthDate,
    1: setBirthDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(profile && profile.birthDate ? new Date(profile.birthDate) : null);
  const {
    0: birthPlace,
    1: setBirthPlace
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(profile && profile.birthPlace ? profile.birthPlace : '');
  const {
    0: residence,
    1: setResidence
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(profile && profile.residence ? profile.residence : '');
  const {
    0: phoneNumber,
    1: setPhoneNumber
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(profile && profile.phoneNumber ? profile.phoneNumber : '');
  const {
    0: nationality,
    1: setNationality
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(profile && profile.nationality ? profile.nationality : '');
  const {
    0: otherDetails,
    1: setOtherDetails
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(profile && profile.otherDetails ? draft_js__WEBPACK_IMPORTED_MODULE_7__["EditorState"].createWithContent(contentFrom(profile.otherDetails)) : draft_js__WEBPACK_IMPORTED_MODULE_7__["EditorState"].createEmpty());

  const validateData = () => {
    const birthDateErrors = [];
    const birthPlaceErrors = [];
    const residenceErrors = [];
    const phoneNumberErrors = [];
    const nationalityErrors = [];
    if (!birthDate) birthDateErrors.push('Your birth day is required');
    if (validator__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(birthPlace)) birthPlaceErrors.push('Your birth place is required');
    if (validator__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(residence)) residenceErrors.push('Your residence is required');
    if (validator__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(phoneNumber)) phoneNumberErrors.push('Your phone number is required');
    if (validator__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(nationality)) nationalityErrors.push('Your nationality is required');
    const isValid = birthDateErrors.length == 0 && birthPlaceErrors.length == 0 && residenceErrors.length == 0 && phoneNumberErrors.length == 0 && nationalityErrors.length == 0;
    const errors = {
      birthDateErrors,
      birthPlaceErrors,
      residenceErrors,
      phoneNumberErrors,
      nationalityErrors
    };
    return {
      isValid,
      errors
    };
  };

  const submit = cb => {
    const {
      isValid,
      errors
    } = validateData();
    setInputErrors(errors);
    if (!isValid) return cb('Please enter valid inputs');
    return cb('', {
      birthDate: birthDate ? birthDate.toISOString() : null,
      birthPlace,
      residence,
      phoneNumber,
      nationality,
      otherDetails: draftjs_to_html__WEBPACK_IMPORTED_MODULE_8___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_7__["convertToRaw"])(otherDetails.getCurrentContent()))
    });
  };

  function onChange(command, editorState) {
    const newState = draft_js__WEBPACK_IMPORTED_MODULE_7__["RichUtils"].handleKeyCommand(editorState, command);

    if (newState) {
      setOtherDetails(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  return __jsx("div", {
    style: {
      textAlign: 'left'
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"], {
    className: classes.fieldGroup
  }, __jsx("div", {
    className: classes.groupTitle
  }, "Personal Information"), __jsx("div", null, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_5__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_6___default.a
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_5__["DatePicker"], {
    className: classes.field,
    autoOk: true,
    fullWidth: true,
    format: "MM/dd/yyyy",
    variant: "inline",
    id: "birthDate",
    label: "Birthdate",
    value: birthDate,
    onChange: setBirthDate,
    error: inputErrors.birthDateErrors.length > 0,
    helperText: inputErrors.birthDateErrors.join(', ')
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    className: classes.field,
    id: "birthPlace",
    name: "birthPlace",
    label: "Birth place",
    fullWidth: true,
    value: birthPlace,
    onChange: e => setBirthPlace(e.target.value),
    error: inputErrors.birthPlaceErrors.length > 0,
    helperText: inputErrors.birthPlaceErrors.join(', ')
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    className: classes.field,
    id: "residence",
    name: "residence",
    label: "Residence",
    fullWidth: true,
    value: residence,
    onChange: e => setResidence(e.target.value),
    error: inputErrors.residenceErrors.length > 0,
    helperText: inputErrors.residenceErrors.join(', ')
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    className: classes.field,
    id: "phoneNumber",
    name: "phoneNumber",
    label: "Phone number",
    fullWidth: true,
    value: phoneNumber,
    onChange: e => setPhoneNumber(e.target.value),
    error: inputErrors.phoneNumberErrors.length > 0,
    helperText: inputErrors.phoneNumberErrors.join(', ')
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    id: "nationality",
    name: "nationality",
    label: "Nationality",
    fullWidth: true,
    value: nationality,
    onChange: e => setNationality(e.target.value),
    error: inputErrors.nationalityErrors.length > 0,
    helperText: inputErrors.nationalityErrors.join(', ')
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"], {
    className: classes.fieldGroup
  }, __jsx("div", {
    className: classes.groupTitle
  }, "Other Details"), __jsx("div", {
    style: {
      fontSize: '9pt',
      color: '#808080',
      marginBottom: 10
    }
  }, "Please provide additional details here, anything that is valuable for you. For example, if you already have records with Cisco, ACCA, CIPS, or whichever program you want to apply for, kindly provide references here."), __jsx("div", {
    style: {
      border: '1px solid #DFDFDF',
      padding: 5,
      borderRadius: 5
    }
  },  false && false)), __jsx("div", {
    style: {
      textAlign: 'center'
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    color: "secondary",
    onClick: () => submit((errMessage, data) => {
      if (errMessage) return setAlertOptions({
        open: true,
        level: 'error',
        message: errMessage
      });
      if (data) return onSubmit(data);
      return;
    })
  }, `${submitText || 'Save'}`)), __jsx(_components_Alert__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    level: alertOptions.level,
    message: alertOptions.message,
    open: alertOptions.open,
    onClose: () => setAlertOptions({
      open: false,
      level: alertOptions.level,
      message: alertOptions.message
    })
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (ProfileForm);

/***/ }),

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "/muT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("qNsG");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// EXTERNAL MODULE: external "apollo-link-context"
var external_apollo_link_context_ = __webpack_require__("LvlT");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./app.config.js
var app_config = __webpack_require__("lIVI");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: ./lib/cookie.ts
var cookie = __webpack_require__("1heK");

// CONCATENATED MODULE: ./lib/graphql/clientSchema.ts

const typeDefs = external_apollo_boost_["gql"]`
  type Applier {
    name: String!
    email: String!
  }

  type ProfileData {
    birthDate: Date
    birthPlace: String
    residence: String
    phoneNumber: String
    nationality: String
    otherDetails: String
  }

  extend type Query {
    applier: Applier
    applicationProfile: ProfileData
  }
`;
const resolvers = {};
// CONCATENATED MODULE: ./lib/with-apollo.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withApollo; });








var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }










let with_apollo_apolloClient = null;

function createApolloClient(initialState = {}) {
  const httpLink = new external_apollo_boost_["HttpLink"]({
    uri: `${app_config["baseUrl"]}/graphql`,
    credentials: 'same-origin',
    fetch: external_isomorphic_unfetch_default.a
  });
  const authLink = Object(external_apollo_link_context_["setContext"])((_, prevCtxt) => {
    let headers = prevCtxt.headers || {};

    if (!headers['schoolman_token']) {
      const token = Object(cookie["a" /* getCookieFromBrowser */])(app_config["authCookieName"]);
      headers = _objectSpread({}, headers, {
        'schoolman_token': token || ''
      });
    }

    return {
      headers
    };
  });
  const cache = new external_apollo_boost_["InMemoryCache"]().restore(initialState);
  const client = new external_apollo_boost_["ApolloClient"]({
    ssrMode: true,
    cache,
    link: authLink.concat(httpLink),
    typeDefs: typeDefs,
    resolvers: resolvers,
    connectToDevTools: true
  });
  const data = {
    // initial LocalState
    applier: {
      __typename: 'Applier',
      name: '',
      email: ''
    },
    applicationProfile: {
      __typename: 'ProfileData',
      birthDate: null,
      birthPlace: '',
      residence: '',
      phoneNumber: '',
      nationality: '',
      nicNumber: '',
      nicDateOfIssue: null,
      nicPlaceOfIssue: '',
      highestAcademicQualification: '',
      yearOfIssue: new Date().getFullYear(),
      englishGradeInGCEOL: '',
      mathematicsGradeInGCEOL: '',
      professionalQualification: '',
      employmentStatus: 'JobSeeker',
      jobTitle: '',
      yearsOfExperience: 0,
      employerName: '',
      employerAddress: '',
      otherDetails: null
    }
  };
  cache.writeData({
    data
  });
  client.onResetStore(() => cache.writeData({
    data
  }));
  return client;
}

function initApolloClient(initialState) {
  if (true) return createApolloClient(initialState);
  if (!with_apollo_apolloClient) with_apollo_apolloClient = createApolloClient(initialState);
  return with_apollo_apolloClient;
}

function withApollo(PageComponent, {
  ssr = true
} = {}) {
  const WithApollo = (_ref) => {
    let {
      apolloClient,
      apolloState
    } = _ref,
        pageProps = Object(objectWithoutProperties["a" /* default */])(_ref, ["apolloClient", "apolloState"]);

    const client = apolloClient || initApolloClient(apolloState);
    return __jsx(react_hooks_["ApolloProvider"], {
      client: client
    }, __jsx(PageComponent, pageProps));
  };

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async ctx => {
      // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.
      const apolloClient = initApolloClient();
      ctx.apolloClient = apolloClient;
      let pageProps = {};
      if (PageComponent.getInitialProps) pageProps = await PageComponent.getInitialProps(ctx); // Only on the server

      if (true) {
        // When redirecting, the response is finished. No point in continuing to render
        if (ctx.res && ctx.res.finished) return pageProps;

        if (ssr) {
          try {
            // Run all GraphQL queries
            const {
              getDataFromTree
            } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "7fVs", 7));
            const {
              AppTree
            } = ctx;
            await getDataFromTree(__jsx(AppTree, {
              pageProps: _objectSpread({}, pageProps, {
                apolloClient
              })
            }));
          } catch (error) {
            console.error('Error while running `getDataFromTree`', error);
          } // getDataFromTree does not call componentWillUnmount head side effect therefore need to be cleared manually


          head_default.a.rewind();
        }
      } // Extract query data from the Apollo store


      const apolloState = apolloClient.cache.extract();
      return _objectSpread({}, pageProps, {
        apolloState
      });
    };
  }

  return WithApollo;
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "1heK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCookieFromBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCookieFromServer; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);


const onBrowser = () => !false;

const ONE_HUNDRED_DAYS = 100;
const setCookie = (key, value) => {
  if (onBrowser()) {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(key, value, {
      expires: ONE_HUNDRED_DAYS,
      path: '/'
    });
  } else {
    throw new Error("Cannot set cookie on server");
  }
};
const removeCookie = key => {
  if (onBrowser()) js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(key);
};
const getCookieFromBrowser = key => js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);
const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) return undefined;
  const rawCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${key}=`));
  if (!rawCookie) return undefined;
  return rawCookie.split('=')[1];
};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qXxU");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _typeof = __webpack_require__("iZP3");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7fVs":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "BMua":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


function Container(props) {
  return __jsx("div", {
    style: {
      textAlign: 'center'
    }
  }, __jsx("div", {
    style: {
      maxWidth: props.maxWidth,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, __jsx("div", {
    style: {
      margin: '0px 15px',
      textAlign: 'left'
    }
  }, props.children)));
}

Container.defaultProps = {
  maxWidth: 1024
};
/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),

/***/ "DME6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "Dq7+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withAuth; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Eek");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XoMD");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Jo+v");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4mXO");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("qNsG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_AuthContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("uxnT");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("tlnx");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("YvTO");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("1heK");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("lIVI");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_app_config__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }









const GET_ACCOUNT_QUERY = apollo_boost__WEBPACK_IMPORTED_MODULE_11__["gql"]`
  query getProfile($email: String!) {
    account(email: $email) {
      id
      email
      fullName
      profile {
        id birthDate birthPlace residence phoneNumber nationality otherDetails
      }
    }
  }
`;
function withAuth(PageComponent) {
  const getToken = req => true ? Object(_lib_cookie__WEBPACK_IMPORTED_MODULE_13__[/* getCookieFromServer */ "b"])(_app_config__WEBPACK_IMPORTED_MODULE_14__["authCookieName"], req) : undefined;

  function WithAuth(_ref) {
    let {
      currentUser
    } = _ref,
        pageProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_ref, ["currentUser"]);

    return __jsx(_components_AuthContext__WEBPACK_IMPORTED_MODULE_9__[/* AuthProvider */ "a"], {
      currentUser: currentUser
    }, __jsx(PageComponent, pageProps));
  }

  WithAuth.getInitialProps = async ctx => {
    const token = getToken(ctx.req);
    let currentUser = undefined;
    let tokenIsValid = false;

    if (token) {
      try {
        await axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(`${_app_config__WEBPACK_IMPORTED_MODULE_14__["apiBaseUrl"]}/validateToken`, {
          token
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        tokenIsValid = true;
      } catch (ex) {}

      if (tokenIsValid) {
        const {
          data: {
            account
          }
        } = await ctx.apolloClient.query({
          query: GET_ACCOUNT_QUERY,
          variables: {
            email: jwt_decode__WEBPACK_IMPORTED_MODULE_10___default()(token).ema
          },
          context: {
            headers: {
              'schoolman_token': token
            }
          }
        });
        currentUser = account;
      }
    } // add token and currentUser to context, so they can be used in PageComponent.getInitialProps


    ctx.token = token;
    ctx.currentUser = currentUser;
    let pageProps = {};
    if (PageComponent.getInitialProps) pageProps = await PageComponent.getInitialProps(ctx);
    const {
      authRequired
    } = pageProps;

    if (authRequired && !currentUser) {
      if (true) ctx.res.redirect('/signIn');else {}
    }

    if (!tokenIsValid && false) Object(_lib_cookie__WEBPACK_IMPORTED_MODULE_13__[/* removeCookie */ "c"])(_app_config__WEBPACK_IMPORTED_MODULE_14__["authCookieName"]);
    return _objectSpread({
      currentUser
    }, pageProps);
  };

  return WithAuth;
}

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "Hz3a":
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "KNS6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/pickers");

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "LvlT":
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "Q1Ss":
/***/ (function(module, exports) {

module.exports = require("@date-io/date-fns");

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "RPRI":
/***/ (function(module, exports) {

module.exports = require("draftjs-to-html");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "TkGN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("j08L");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];






function Alert({
  level,
  message,
  open,
  onClose
}) {
  const classes = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
    success: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["green"][600]
    },
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["lightBlue"][700]
    },
    warning: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["amber"][700]
    },
    icon: {
      fontSize: 20
    }
  }))();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Snackbar"], {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    open: open,
    onClose: () => onClose()
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["SnackbarContent"], {
    className: classes[level],
    "aria-describedby": "client-snackbar",
    message: __jsx("span", null, message),
    action: [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
      key: "close",
      "aria-label": "close",
      color: "inherit",
      onClick: () => onClose()
    }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.icon
    }))]
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (Alert);

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "WZpn":
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) { var exact, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("eVuF");

var _Object$assign = __webpack_require__("UXZV");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (false) {} else {
            console.error(error);
          }

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kILo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BMua");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ProfileView({
  profile
}) {
  const classes = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    profileBox: {
      marginBottom: 25,
      padding: 10
    },
    boxTitle: {
      fontSize: '14pt',
      color: '#808080',
      paddingBottom: 5
    },
    boxContent: {}
  }))();
  return __jsx(_Container__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    maxWidth: 600
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], null, __jsx("div", {
    className: classes.profileBox
  }, __jsx("div", {
    className: classes.boxTitle
  }, "Personal Information"), __jsx("div", {
    className: classes.boxContent
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    size: "small",
    style: {
      border: '1px solid #DFDFDF'
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableBody"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
    key: "duration"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    component: "th",
    scope: "row",
    style: {
      color: '#808080'
    }
  }, "Birth date"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "right"
  }, profile.birthDate ? new Date(profile.birthDate).toLocaleDateString() : '(missing)')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
    key: "duration"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    component: "th",
    scope: "row",
    style: {
      color: '#808080'
    }
  }, "Birth place"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "right"
  }, profile.birthPlace)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
    key: "duration"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    component: "th",
    scope: "row",
    style: {
      color: '#808080'
    }
  }, "Residence"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "right"
  }, profile.residence)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
    key: "duration"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    component: "th",
    scope: "row",
    style: {
      color: '#808080'
    }
  }, "Phone number"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "right"
  }, profile.phoneNumber)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
    key: "duration"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    component: "th",
    scope: "row",
    style: {
      color: '#808080'
    }
  }, "Nationality"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "right"
  }, profile.nationality)))))), __jsx("div", {
    className: classes.profileBox,
    style: {
      marginBottom: 0
    }
  }, __jsx("div", {
    className: classes.boxTitle,
    style: {
      borderBottom: '1px solid #DFDFDF'
    }
  }, "Other details"), __jsx("div", {
    className: classes.boxContent,
    dangerouslySetInnerHTML: {
      __html: profile.otherDetails || '(empty)'
    },
    style: {
      textAlign: 'left'
    }
  }))));
}

/***/ }),

/***/ "lIVI":
/***/ (function(module, exports) {

const ENVIRONMENT = 'Prod';
exports.baseUrl = ENVIRONMENT === 'Prod' ? 'http://schoolman-web.herokuapp.com' : 'http://localhost:4000';
exports.apiServer = ENVIRONMENT === 'Prod' ? 'http://schoolman-server.herokuapp.com' : 'http://localhost:9000';
exports.apiBaseUrl = exports.apiServer + '/api';
exports.authCookieName = 'schoolman_token';
exports.applicationReceiver = 'training@schoolman.org';

/***/ }),

/***/ "lUOW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isEmpty */
/* unused harmony export makeFormData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return currency; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

const isEmpty = value => value === undefined || value === null || typeof value === 'object' && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(value).length === 0 || typeof value === 'string' && value.trim().length === 0;
const makeFormData = inputs => {
  let data = new FormData();
  inputs.forEach(input => data.append(input.field, input.value));
  return data;
};
const currency = amount => 'USD ' + Intl.NumberFormat().format(amount);

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qNsG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "qXxU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__("BMua");

// EXTERNAL MODULE: ./layouts/MainLayout.tsx + 1 modules
var MainLayout = __webpack_require__("rbhw");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./components/AuthContext.tsx
var AuthContext = __webpack_require__("uxnT");

// EXTERNAL MODULE: ./components/ProfileForm.tsx
var ProfileForm = __webpack_require__("+7Ea");

// EXTERNAL MODULE: ./components/ProfileView.tsx
var ProfileView = __webpack_require__("kILo");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./components/Alert.tsx
var Alert = __webpack_require__("TkGN");

// EXTERNAL MODULE: external "validator"
var external_validator_ = __webpack_require__("WZpn");
var external_validator_default = /*#__PURE__*/__webpack_require__.n(external_validator_);

// CONCATENATED MODULE: ./components/ApplierForm.tsx
var __jsx = external_react_default.a.createElement;






function ApplierForm({
  data,
  onSubmit
}) {
  const classes = Object(styles_["makeStyles"])(theme => Object(styles_["createStyles"])({
    fieldGroup: {
      marginBottom: 25,
      padding: 10
    },
    groupTitle: {
      fontSize: '12pt',
      color: '#808080',
      paddingBottom: 5,
      borderBottom: '1px solid #DFDFDF',
      fontWeight: 'bold',
      marginBottom: 15
    },
    field: {
      marginBottom: 30
    }
  }))();
  const {
    0: inputErrors,
    1: setInputErrors
  } = Object(external_react_["useState"])({
    nameErrors: [],
    emailErrors: []
  });
  const {
    0: alertOptions,
    1: setAlertOptions
  } = Object(external_react_["useState"])({
    open: false,
    level: 'info',
    message: ''
  }); // Fields state variables

  const {
    0: name,
    1: setName
  } = Object(external_react_["useState"])(data.name);
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])(data.email);

  const validateData = () => {
    const nameErrors = [];
    const emailErrors = [];
    if (external_validator_default.a.isEmpty(name)) nameErrors.push('Your name is required');
    if (external_validator_default.a.isEmpty(email)) emailErrors.push('Your email is required');
    const isValid = nameErrors.length == 0 && emailErrors.length == 0;
    const errors = {
      nameErrors,
      emailErrors
    };
    return {
      isValid,
      errors
    };
  };

  const submit = cb => {
    const {
      isValid,
      errors
    } = validateData();
    setInputErrors(errors);
    if (!isValid) return cb('Please enter valid inputs');
    return cb('', {
      name,
      email
    });
  };

  return __jsx("div", {
    style: {
      textAlign: 'left'
    }
  }, __jsx(core_["Paper"], {
    className: classes.fieldGroup
  }, __jsx("div", {
    className: classes.groupTitle
  }, "Provide your name and email"), __jsx("div", null, __jsx(core_["TextField"], {
    className: classes.field,
    id: "name",
    name: "name",
    label: "Full Name",
    fullWidth: true,
    value: name,
    onChange: e => setName(e.target.value),
    error: inputErrors.nameErrors.length > 0,
    helperText: inputErrors.nameErrors.join(', ')
  }), __jsx(core_["TextField"], {
    className: classes.field,
    id: "email",
    name: "email",
    label: "Email",
    fullWidth: true,
    value: email,
    onChange: e => setEmail(e.target.value),
    error: inputErrors.emailErrors.length > 0,
    helperText: inputErrors.emailErrors.join(', ')
  }))), __jsx("div", {
    style: {
      textAlign: 'center'
    }
  }, __jsx(core_["Button"], {
    variant: "contained",
    color: "secondary",
    onClick: () => submit((errMessage, data) => {
      if (errMessage) return setAlertOptions({
        open: true,
        level: 'error',
        message: errMessage
      });
      if (data) return onSubmit(data);
      return;
    })
  }, "Save and Fill application form")), __jsx(Alert["a" /* default */], {
    level: alertOptions.level,
    message: alertOptions.message,
    open: alertOptions.open,
    onClose: () => setAlertOptions({
      open: false,
      level: alertOptions.level,
      message: alertOptions.message
    })
  }));
}

/* harmony default export */ var components_ApplierForm = (ApplierForm);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./app.config.js
var app_config = __webpack_require__("lIVI");

// CONCATENATED MODULE: ./lib/send-mail.tsx


function sendMail(options) {
  return external_axios_default.a.post(`${app_config["baseUrl"]}/sendMail`, {
    subject: options.subject,
    html: options.body,
    to: options.to
  });
}
// EXTERNAL MODULE: ./lib/utilities.ts
var utilities = __webpack_require__("lUOW");

// CONCATENATED MODULE: ./components/ApplicationStepper.tsx








var ApplicationStepper_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }
















const GET_APPLICATION_PROFILE_QUERY = external_apollo_boost_["gql"]`
  query getApplicationProfile {
    applicationProfile @client {
      birthDate
      birthPlace
      residence
      phoneNumber
      nationality
      otherDetails
    }
  }
`;
const GET_APPLIER_QUERY = external_apollo_boost_["gql"]`
  query getApplier {
    applier @client {
      name
      email
    }
  }
`;

const resetApplicationData = client => {
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
  const classes = Object(styles_["makeStyles"])(theme => Object(styles_["createStyles"])({
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
  }))();
  const {
    0: alertOptions,
    1: setAlertOptions
  } = Object(external_react_["useState"])({
    open: false,
    level: 'info',
    message: ''
  });
  const {
    0: sending,
    1: setSending
  } = Object(external_react_["useState"])(false);
  const {
    currentUser
  } = Object(AuthContext["b" /* useAuth */])();
  const client = Object(react_hooks_["useApolloClient"])();
  const {
    applicationProfile
  } = client.readQuery({
    query: GET_APPLICATION_PROFILE_QUERY
  });
  const {
    applier
  } = client.readQuery({
    query: GET_APPLIER_QUERY
  });
  const steps = getSteps(!!currentUser);
  const {
    0: step,
    1: setStep
  } = Object(external_react_["useState"])('ConfirmAccount');
  const activeStep = step === 'ApplicationConfirmation' ? currentUser ? 3 : 4 : steps.filter(s => s.step === step)[0].id;

  const idBody = data => {
    return `
      <div>
        <p>Dear ${data.name}, your application is being processed; you will have a response as soon as possible. See details below:</p>

        <h3>Name and Email</h3>
        <p><strong>Name</strong><br/>${data.name}</p>
        <p><strong>Email</strong><br/>${data.email}</p>
        <br />
        <br />
      </div>
    `;
  };

  const sessionBody = () => {
    return `
      <div>
        <h3>Session details</h3>
        <p><strong>Department</strong><br/>${props.departmentTitle}</p>
        <p><strong>Program</strong><br/>${props.programTitle}</p>
        <p><strong>Plan</strong><br/>${props.planTitle}</p>
        <p><strong>Training</strong><br/>${props.trainingTitle}</p>
        <p><strong>Session</strong><br/>${props.session.title}</p>
        <p><strong>Start date</strong><br/>${props.session.startDate && new Date(props.session.startDate).toLocaleDateString()}</p>
        <p><strong>Duration</strong><br/>${props.planDuration}</p>
        <br />
        <br />
      </div>
    `;
  };

  const profileBody = profile => {
    return `
      <div>
        <h3>Profile details</h3>
        <p><strong>Birthdate</strong><br/>${new Date(profile.birthDate).toLocaleDateString()}</p>
        <p><strong>Birth place</strong><br/>${profile.birthPlace}</p>
        <p><strong>Residence</strong><br/>${profile.residence}</p>
        <p><strong>Phone number</strong><br/>${profile.phoneNumber}</p>
        <p><strong>Nationality</strong><br/>${profile.nationality}</p>
        <p><strong>Other details</strong><br/>${profile.otherDetails || '(missing)'}</p>
        <br />
        <br />
      </div>
    `;
  };

  const goToStep = nextStep => setStep(nextStep);

  const handleBack = () => {
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
    const steps = [];
    let index = 0;
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
    const classes = Object(styles_["makeStyles"])(theme => Object(styles_["createStyles"])({
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
    }))();
    return ApplicationStepper_jsx(Container["a" /* default */], {
      maxWidth: 500
    }, ApplicationStepper_jsx("div", {
      style: {
        padding: 10,
        textAlign: 'center'
      }
    }, ApplicationStepper_jsx(core_["Typography"], {
      variant: "h5"
    }, "Confirm your account")), ApplicationStepper_jsx("div", {
      className: classes.root
    }, currentUser ? ApplicationStepper_jsx("div", null, ApplicationStepper_jsx("div", null, "You are applying as"), ApplicationStepper_jsx("div", null, ApplicationStepper_jsx(core_["Typography"], {
      variant: "h4",
      color: "secondary"
    }, currentUser.fullName)), ApplicationStepper_jsx("div", {
      style: {
        fontSize: '10pt',
        color: '#808080',
        marginBottom: 10
      }
    }, "(", currentUser.email, ")"), ApplicationStepper_jsx("div", null, ApplicationStepper_jsx(core_["Button"], {
      size: "large",
      variant: "contained",
      color: "secondary",
      onClick: () => goToStep('ReviewProfileData')
    }, "Review your profile")), ApplicationStepper_jsx(Container["a" /* default */], {
      maxWidth: 300
    }, ApplicationStepper_jsx("div", {
      style: {
        fontSize: '9pt',
        color: '#808080',
        textAlign: 'center',
        paddingTop: 10
      }
    }, "If you want to use a different account, sign out first, then sign in with the right account."))) : ApplicationStepper_jsx("div", null, ApplicationStepper_jsx("div", {
      className: classes.noAccount
    }, ApplicationStepper_jsx("div", {
      style: {
        fontWeight: 'bold',
        marginBottom: 15
      }
    }, "Don't have an account yet ?"), ApplicationStepper_jsx("div", null, ApplicationStepper_jsx(components_ApplierForm, {
      data: applier,
      onSubmit: data => {
        client.writeQuery({
          query: GET_APPLIER_QUERY,
          data: {
            applier: _objectSpread({
              __typename: 'Applier'
            }, data)
          }
        });
        goToStep('FillApplicationForm');
      }
    })), ApplicationStepper_jsx(Container["a" /* default */], {
      maxWidth: 300
    }, ApplicationStepper_jsx("div", {
      style: {
        fontSize: '9pt',
        color: '#808080',
        textAlign: 'center',
        paddingTop: 10
      }
    }, "If your application is successfull, those information will be used to create your account."))), ApplicationStepper_jsx("div", {
      className: classes.hasAccount
    }, "Already have an account ? \xA0", ApplicationStepper_jsx(link_default.a, {
      href: {
        pathname: '/signIn',
        query: {
          backTo: `/application?tsId=${props.session.id}`
        }
      }
    }, ApplicationStepper_jsx("a", null, "Sign in"))))));
  }

  function FillApplicationFormStep(props) {
    return ApplicationStepper_jsx("div", null, ApplicationStepper_jsx("div", {
      style: {
        textAlign: 'center'
      }
    }, ApplicationStepper_jsx("div", {
      style: {
        padding: 10,
        textAlign: 'center'
      }
    }, ApplicationStepper_jsx(core_["Typography"], {
      variant: "h5"
    }, "Application form")), ApplicationStepper_jsx(Container["a" /* default */], {
      maxWidth: 600
    }, ApplicationStepper_jsx(ProfileForm["a" /* default */], {
      profile: applicationProfile,
      submitText: "Save and Review your data",
      onSubmit: data => props.onSubmit(data)
    })), ApplicationStepper_jsx("br", null)));
  }

  function ReviewProfileDataStep() {
    if (currentUser && !props.profile) return ApplicationStepper_jsx("div", {
      style: {
        textAlign: 'center',
        padding: 50
      }
    }, "You don't have a profile yet. Please ", ApplicationStepper_jsx(link_default.a, {
      href: "/myProfile"
    }, ApplicationStepper_jsx("a", null, "create your profile")), " and retry to apply.");
    return ApplicationStepper_jsx("div", {
      style: {
        textAlign: 'center'
      }
    }, ApplicationStepper_jsx("div", {
      style: {
        padding: 10,
        textAlign: 'center'
      }
    }, ApplicationStepper_jsx(core_["Typography"], {
      variant: "h5"
    }, "Review your Profile")), currentUser ? ApplicationStepper_jsx("div", null, ApplicationStepper_jsx("div", {
      style: {
        fontSize: '9pt',
        color: '#808080',
        margin: '10px 0px'
      }
    }, "If your profile is not up to date, please update it first then try to apply again."), ApplicationStepper_jsx(ProfileView["a" /* default */], {
      profile: currentUser.profile
    })) : ApplicationStepper_jsx("div", null, ApplicationStepper_jsx(ProfileView["a" /* default */], {
      profile: applicationProfile
    })), ApplicationStepper_jsx("br", null), ApplicationStepper_jsx("div", null, (currentUser && currentUser.profile || !currentUser) && ApplicationStepper_jsx(core_["Button"], {
      size: "large",
      variant: "contained",
      color: "secondary",
      onClick: () => goToStep('ReviewTrainingSession')
    }, "Review Training Session Details")), ApplicationStepper_jsx("br", null));
  }

  function ReviewTrainingSessionStep() {
    const classes = Object(styles_["makeStyles"])(theme => Object(styles_["createStyles"])({
      root: {
        marginBottom: 40,
        textAlign: 'center'
      }
    }))();
    if (currentUser && !props.profile) return ApplicationStepper_jsx("div", {
      style: {
        textAlign: 'center',
        padding: 50
      }
    }, "You don't have a profile yet. Please ", ApplicationStepper_jsx(link_default.a, {
      href: "/myProfile"
    }, ApplicationStepper_jsx("a", null, "create your profile")), " and retry to apply.");
    return ApplicationStepper_jsx(Container["a" /* default */], {
      maxWidth: 600
    }, ApplicationStepper_jsx("div", {
      style: {
        padding: 10,
        textAlign: 'center'
      }
    }, ApplicationStepper_jsx(core_["Typography"], {
      variant: "h5"
    }, "Review Training Session Details")), ApplicationStepper_jsx("div", {
      className: classes.root
    }, ApplicationStepper_jsx("div", null, ApplicationStepper_jsx(core_["Paper"], null, ApplicationStepper_jsx("div", {
      style: {
        padding: 10
      }
    }, ApplicationStepper_jsx(core_["Table"], {
      size: "small",
      style: {
        border: '1px solid #DFDFDF'
      }
    }, ApplicationStepper_jsx(core_["TableBody"], null, ApplicationStepper_jsx(core_["TableRow"], {
      key: "dep"
    }, ApplicationStepper_jsx(core_["TableCell"], {
      component: "th",
      scope: "row",
      style: {
        color: '#808080'
      }
    }, "Department"), ApplicationStepper_jsx(core_["TableCell"], {
      align: "right"
    }, props.departmentTitle)), ApplicationStepper_jsx(core_["TableRow"], {
      key: "program"
    }, ApplicationStepper_jsx(core_["TableCell"], {
      component: "th",
      scope: "row",
      style: {
        color: '#808080'
      }
    }, "Program"), ApplicationStepper_jsx(core_["TableCell"], {
      align: "right"
    }, props.programTitle)), ApplicationStepper_jsx(core_["TableRow"], {
      key: "plan"
    }, ApplicationStepper_jsx(core_["TableCell"], {
      component: "th",
      scope: "row",
      style: {
        color: '#808080'
      }
    }, "Plan"), ApplicationStepper_jsx(core_["TableCell"], {
      align: "right"
    }, props.planTitle)), ApplicationStepper_jsx(core_["TableRow"], {
      key: "training"
    }, ApplicationStepper_jsx(core_["TableCell"], {
      component: "th",
      scope: "row",
      style: {
        color: '#808080'
      }
    }, "Training"), ApplicationStepper_jsx(core_["TableCell"], {
      align: "right"
    }, props.trainingTitle)), ApplicationStepper_jsx(core_["TableRow"], {
      key: "session"
    }, ApplicationStepper_jsx(core_["TableCell"], {
      component: "th",
      scope: "row",
      style: {
        color: '#808080'
      }
    }, "Session"), ApplicationStepper_jsx(core_["TableCell"], {
      align: "right"
    }, props.session.title)), ApplicationStepper_jsx(core_["TableRow"], {
      key: "sdate"
    }, ApplicationStepper_jsx(core_["TableCell"], {
      component: "th",
      scope: "row",
      style: {
        color: '#808080'
      }
    }, "Start date"), ApplicationStepper_jsx(core_["TableCell"], {
      align: "right"
    }, props.session.startDate)), ApplicationStepper_jsx(core_["TableRow"], {
      key: "duration"
    }, ApplicationStepper_jsx(core_["TableCell"], {
      component: "th",
      scope: "row",
      style: {
        color: '#808080'
      }
    }, "Duration"), ApplicationStepper_jsx(core_["TableCell"], {
      align: "right"
    }, props.planDuration))))), props.session.fees.length > 0 ? ApplicationStepper_jsx("div", {
      style: {
        padding: 10
      }
    }, ApplicationStepper_jsx("div", {
      style: {
        marginBottom: 5,
        color: '#808080'
      }
    }, "Fees"), ApplicationStepper_jsx(core_["Table"], {
      size: "small",
      style: {
        border: '1px solid #DFDFDF'
      }
    }, ApplicationStepper_jsx(core_["TableHead"], null, ApplicationStepper_jsx(core_["TableRow"], {
      style: {
        backgroundColor: '#DFDFDF'
      }
    }, ApplicationStepper_jsx(core_["TableCell"], null, "Description"), ApplicationStepper_jsx(core_["TableCell"], null, "Type"), ApplicationStepper_jsx(core_["TableCell"], {
      align: "right"
    }, "Amount"))), ApplicationStepper_jsx(core_["TableBody"], null, props.session.fees.map(f => ApplicationStepper_jsx(core_["TableRow"], {
      key: f.id
    }, ApplicationStepper_jsx(core_["TableCell"], null, f.description, " ", f.optional && ApplicationStepper_jsx("span", {
      style: {
        color: '#808080'
      }
    }, "(Optional)")), ApplicationStepper_jsx(core_["TableCell"], null, f.feeType), ApplicationStepper_jsx(core_["TableCell"], {
      align: "right"
    }, f.promotionalAmount > 0 ? ApplicationStepper_jsx("div", null, ApplicationStepper_jsx("span", {
      style: {
        textDecoration: 'line-through'
      }
    }, Object(utilities["a" /* currency */])(f.amount)), " \xA0", ApplicationStepper_jsx("span", {
      style: {
        color: 'orange'
      }
    }, Object(utilities["a" /* currency */])(f.promotionalAmount))) : ApplicationStepper_jsx("span", null, Object(utilities["a" /* currency */])(f.amount))))))), ApplicationStepper_jsx(Container["a" /* default */], {
      maxWidth: 400
    }, ApplicationStepper_jsx("div", {
      style: {
        fontSize: '9pt',
        color: '#808080',
        textAlign: 'center',
        paddingTop: 10
      }
    }, ApplicationStepper_jsx("strong", null, "Note: "), " These fees are the training fees at the time the session was created, they might be different from the current training fees."))) : ApplicationStepper_jsx("div", {
      style: {
        padding: 20
      }
    }, "No fees")), ApplicationStepper_jsx("div", null, ApplicationStepper_jsx(core_["Button"], {
      size: "large",
      variant: "contained",
      color: "secondary",
      style: {
        marginTop: 15
      },
      disabled: sending,
      onClick: async () => {
        let messageBody = currentUser ? idBody({
          name: currentUser.fullName,
          email: currentUser.email
        }) : idBody(applier);
        messageBody += sessionBody();
        if (currentUser) messageBody += '<p><h3>Profile details</h3> (Existing user)</p>';else messageBody += profileBody(applicationProfile);

        try {
          setSending(true);
          await sendMail({
            subject: `Application form (${currentUser ? currentUser.fullName : applier.name})`,
            body: messageBody,
            to: app_config["applicationReceiver"]
          });
          goToStep('ApplicationConfirmation');
          resetApplicationData(client);
        } catch (ex) {
          let errorMessage = ex.message;
          if (ex.response) errorMessage = stringify_default()(ex.response.data.err);
          setAlertOptions({
            open: true,
            level: 'error',
            message: `Could not send email: ${errorMessage}`
          });
        } finally {
          setSending(false);

          try {
            // send an email to the applier. If an error occured, do nothing.
            await sendMail({
              subject: `Application form received (${currentUser ? currentUser.fullName : applier.name})`,
              body: messageBody,
              to: applier.email
            });
          } catch (ex) {
            /* Do nothing */
          }
        }
      }
    }, sending ? ApplicationStepper_jsx(core_["CircularProgress"], null) : 'Apply')))));
  }

  function ApplicationConfirmationStep() {
    return ApplicationStepper_jsx("div", {
      style: {
        textAlign: 'center',
        margin: '50px 0px',
        fontSize: '10pt',
        color: '#808080'
      }
    }, ApplicationStepper_jsx("img", {
      src: "/images/success.png",
      width: "100",
      height: "100"
    }), ApplicationStepper_jsx("br", null), ApplicationStepper_jsx("br", null), ApplicationStepper_jsx("div", null, "Your application has been received and is being processed. We will contact you shortly."));
  }

  return ApplicationStepper_jsx("div", {
    className: classes.root
  }, ApplicationStepper_jsx(core_["Paper"], {
    style: {
      padding: 5
    }
  }, ApplicationStepper_jsx(core_["Hidden"], {
    smDown: true
  }, ApplicationStepper_jsx(core_["Stepper"], {
    activeStep: activeStep,
    alternativeLabel: true
  }, steps.map(s => ApplicationStepper_jsx(core_["Step"], {
    key: s.id
  }, ApplicationStepper_jsx(core_["StepLabel"], null, s.caption))))), ApplicationStepper_jsx(core_["Hidden"], {
    mdUp: true
  }, ApplicationStepper_jsx("div", {
    style: {
      textAlign: 'center'
    }
  }, step !== 'ApplicationConfirmation' ? ApplicationStepper_jsx("span", null, "Step ", activeStep + 1, " / ", steps.length) : ApplicationStepper_jsx("span", null, "Done")))), ApplicationStepper_jsx("div", {
    style: {
      minHeight: 250
    }
  }, step === 'ConfirmAccount' && ApplicationStepper_jsx(ConfirmAccountStep, null), step === 'FillApplicationForm' && ApplicationStepper_jsx(FillApplicationFormStep, {
    onSubmit: data => {
      goToStep('ReviewProfileData');
      client.writeQuery({
        query: GET_APPLICATION_PROFILE_QUERY,
        data: {
          applicationProfile: _objectSpread({
            __typename: 'ProfileData'
          }, data)
        }
      });
    }
  }), step === 'ReviewProfileData' && ApplicationStepper_jsx(ReviewProfileDataStep, null), step === 'ReviewTrainingSession' && ApplicationStepper_jsx(ReviewTrainingSessionStep, null), step === 'ApplicationConfirmation' && ApplicationStepper_jsx(ApplicationConfirmationStep, null)), ApplicationStepper_jsx("div", null, step !== 'ApplicationConfirmation' && ApplicationStepper_jsx("div", {
    className: classes.btnBar
  }, ApplicationStepper_jsx("div", {
    className: classes.btnLeft
  }, ApplicationStepper_jsx(core_["Button"], {
    variant: "contained",
    color: "default",
    disabled: activeStep === 0,
    onClick: handleBack
  }, "Back")), ApplicationStepper_jsx("div", {
    className: classes.btnRight
  }, ApplicationStepper_jsx(core_["Button"], {
    variant: "contained",
    color: "default",
    onClick: () => {
      resetApplicationData(client);
      props.handleCancel();
    }
  }, "Cancel")))), ApplicationStepper_jsx(Alert["a" /* default */], {
    level: alertOptions.level,
    message: alertOptions.message,
    open: alertOptions.open,
    onClose: () => setAlertOptions({
      open: false,
      level: alertOptions.level,
      message: alertOptions.message
    })
  }));
}
// EXTERNAL MODULE: ./lib/with-apollo.jsx + 1 modules
var with_apollo = __webpack_require__("/muT");

// EXTERNAL MODULE: ./lib/with-auth.jsx
var with_auth = __webpack_require__("Dq7+");

// CONCATENATED MODULE: ./pages/application.tsx
var application_jsx = external_react_default.a.createElement;








const GET_SESSION_QUERY = external_apollo_boost_["gql"]`
  query getTrainingSession($trainingSessionId: ID!) {
    trainingSession(trainingSessionId: $trainingSessionId) {
      id
      title
      startDate
      status
      fees {id description amount feeType optional}
      plan {
        id
        title
        duration
        training {
          id
          title
          program {
            id
            title
            department { id title }
          }
        }
      }
    }
  }
`;

function ApplicationPage({
  profile,
  tSession
}) {
  const handleCancel = () => router_default.a.push({
    pathname: '/training',
    query: {
      trainingId: tSession.plan.training.id
    }
  });

  return application_jsx(MainLayout["a" /* default */], {
    title: `Applying for ${tSession.plan.training.title} (${tSession.plan.title})`
  }, application_jsx(Container["a" /* default */], null, application_jsx("br", null), application_jsx(ApplicationStepper, {
    handleCancel: handleCancel,
    trainingTitle: tSession.plan.training.title,
    programTitle: tSession.plan.training.program.title,
    departmentTitle: tSession.plan.training.program.department.title,
    planTitle: tSession.plan.title,
    planDuration: tSession.plan.duration,
    session: tSession,
    profile: profile
  })));
}

const GET_PROFILE_QUERY = external_apollo_boost_["gql"]`
  query getProfile($email: String!) {
    account(email: $email) {
      id
      email
      fullName
      profile {
        id birthDate birthPlace residence phoneNumber nationality
        nicNumber nicDateOfIssue nicPlaceOfIssue
        highestAcademicQualification yearOfIssue englishGradeInGCEOL mathematicsGradeInGCEOL
        professionalQualification employmentStatus jobTitle yearsOfExperience employerName employerAddress
        otherDetails
      }
    }
  }
`;

ApplicationPage.getInitialProps = async ({
  query,
  apolloClient,
  token,
  currentUser
}) => {
  var profile = null;

  if (currentUser) {
    const {
      data: {
        account
      }
    } = await apolloClient.query({
      query: GET_PROFILE_QUERY,
      variables: {
        email: currentUser.email
      },
      context: {
        headers: {
          'schoolman_token': token
        }
      }
    });
    profile = account.profile;
  }

  const {
    data: {
      trainingSession
    }
  } = await apolloClient.query({
    query: GET_SESSION_QUERY,
    variables: {
      trainingSessionId: query.tsId
    },
    context: {
      headers: {
        'schoolman_token': token
      }
    }
  });
  return {
    profile,
    tSession: trainingSession,
    authReuired: true
  };
};

/* harmony default export */ var application = __webpack_exports__["default"] = (Object(with_apollo["a" /* default */])(Object(with_auth["a" /* default */])(ApplicationPage)));

/***/ }),

/***/ "rbhw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__("4D1s");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@material-ui/icons/AccountCircle"
var AccountCircle_ = __webpack_require__("DME6");
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./lib/cookie.ts
var cookie = __webpack_require__("1heK");

// EXTERNAL MODULE: ./components/AuthContext.tsx
var AuthContext = __webpack_require__("uxnT");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./app.config.js
var app_config = __webpack_require__("lIVI");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/MainNavbar.tsx







var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }













function ProfileMenu({
  currentUser,
  onSignout
}) {
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);

  const handleClick = event => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return __jsx("div", {
    style: {
      marginLeft: 15
    }
  }, __jsx(core_["IconButton"], {
    "aria-controls": "simple-menu",
    "aria-haspopup": "true",
    onClick: handleClick,
    style: {
      color: 'white'
    }
  }, __jsx(AccountCircle_default.a, null)), __jsx(core_["Menu"], {
    id: "simple-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, __jsx(core_["Typography"], {
    style: {
      padding: '5px 15px',
      color: '#808080'
    }
  }, currentUser.fullName), __jsx(core_["Divider"], null), __jsx(core_["MenuItem"], {
    onClick: () => {
      handleClose();
      router_default.a.push('/myProfile');
    }
  }, "My profile"), __jsx(core_["MenuItem"], {
    onClick: () => {
      handleClose();
      router_default.a.push('/resetPassword');
    }
  }, "Reset my password"), __jsx(core_["Divider"], null), __jsx(core_["MenuItem"], {
    onClick: () => {
      handleClose();
      onSignout();
    }
  }, "Sign Out")));
}

function MobileMenu(props) {
  const classes = Object(styles_["makeStyles"])({
    list: {
      width: 250
    },
    fullList: {
      width: 'auto'
    },
    menuItem: {
      display: 'block',
      padding: 10,
      marginBottom: 5
    }
  })();
  const router = Object(router_["useRouter"])();
  return __jsx(core_["Drawer"], {
    anchor: "right",
    open: props.drawerOpen,
    onClose: props.closeDrawer()
  }, __jsx("div", {
    className: classes.list,
    role: "presentation",
    onClick: props.closeDrawer(),
    onKeyDown: props.closeDrawer()
  }, __jsx("div", null, __jsx(link_default.a, {
    href: "/"
  }, __jsx("a", {
    className: classes.menuItem
  }, "Home")), props.currentUser && __jsx(link_default.a, {
    href: "/myTrainings"
  }, __jsx("a", {
    className: classes.menuItem
  }, "My Training courses"))), __jsx(core_["Divider"], null), props.currentUser ? __jsx("div", null, __jsx(core_["Typography"], {
    style: {
      padding: 10,
      color: '#808080'
    }
  }, props.currentUser.fullName), __jsx(link_default.a, {
    href: "/myProfile"
  }, __jsx("a", {
    className: classes.menuItem
  }, "My Profile")), __jsx(link_default.a, {
    href: "/resetPassword"
  }, __jsx("a", {
    className: classes.menuItem
  }, "Reset password")), __jsx("a", {
    href: "#",
    onClick: () => props.onSignout(),
    className: classes.menuItem
  }, "Sign Out")) : __jsx("div", null, __jsx(link_default.a, {
    href: "/signIn"
  }, __jsx("a", {
    className: classes.menuItem
  }, "Sign In")))));
}

function MainNavbar() {
  const classes = Object(styles_["makeStyles"])(theme => Object(styles_["createStyles"])({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      height: 54,
      display: 'flex',
      alignItems: 'center'
    },
    appBar: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    toolBar: {
      width: '100%',
      maxWidth: 1024
    },
    menuItem: {
      display: 'inline-block',
      marginLeft: 15,
      color: 'white',
      fontWeight: 'bold'
    }
  }))();
  const router = Object(router_["useRouter"])();
  const client = Object(react_hooks_["useApolloClient"])();
  const {
    currentUser
  } = Object(AuthContext["b" /* useAuth */])();
  const [state, setState] = external_react_default.a.useState({
    drawerOpen: false
  });

  const closeDrawer = () => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    return setState(_objectSpread({}, state, {
      drawerOpen: false
    }));
  };

  return __jsx("div", {
    className: classes.root
  }, __jsx(core_["AppBar"], {
    position: "fixed",
    className: classes.appBar
  }, __jsx(core_["Toolbar"], {
    variant: "dense",
    className: classes.toolBar
  }, __jsx("div", {
    className: classes.title
  }, __jsx(link_default.a, {
    href: "/"
  }, __jsx("a", null, __jsx("img", {
    src: "/images/logo.png",
    alt: ""
  })))), __jsx(core_["Hidden"], {
    xsDown: true
  }, __jsx(link_default.a, {
    href: "/"
  }, __jsx("a", {
    className: classes.menuItem
  }, "Home"))), currentUser ? __jsx(core_["Hidden"], {
    xsDown: true
  }, __jsx(link_default.a, {
    href: "/myTrainings"
  }, __jsx("a", {
    className: classes.menuItem
  }, "My Training courses")), __jsx(ProfileMenu, {
    currentUser: currentUser,
    onSignout: () => {
      client.resetStore();
      router.push('/');
      Object(cookie["c" /* removeCookie */])(app_config["authCookieName"]);
    }
  })) : __jsx(core_["Hidden"], {
    xsDown: true
  }, __jsx(link_default.a, {
    href: "/signIn"
  }, __jsx("a", {
    className: classes.menuItem
  }, "Sign In"))), __jsx(core_["Hidden"], {
    smUp: true
  }, __jsx(core_["IconButton"], {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    onClick: () => setState({
      drawerOpen: !state.drawerOpen
    })
  }, __jsx(Menu_default.a, null))))), __jsx(core_["Hidden"], {
    smUp: true
  }, __jsx(MobileMenu, {
    drawerOpen: state.drawerOpen,
    closeDrawer: closeDrawer,
    currentUser: currentUser,
    onSignout: () => {
      client.resetStore();
      router.push('/');
      Object(cookie["c" /* removeCookie */])(app_config["authCookieName"]);
    }
  })));
}

/* harmony default export */ var components_MainNavbar = (MainNavbar);
// CONCATENATED MODULE: ./layouts/MainLayout.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainLayout; });
var MainLayout_jsx = external_react_["createElement"];



function MainLayout(props) {
  const {
    title,
    children
  } = props;
  return MainLayout_jsx("div", {
    className: "main-layout"
  }, MainLayout_jsx(head_default.a, null, MainLayout_jsx("title", null, title)), MainLayout_jsx(components_MainNavbar, null), MainLayout_jsx("div", null, children), MainLayout_jsx("div", {
    style: {
      color: '#808080',
      textAlign: 'center',
      padding: '50px 0px'
    }
  }, MainLayout_jsx("span", null, "\xA9 ", new Date().getFullYear(), " - SchoolMan")));
}

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "uxnT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  currentUser: undefined
});
const useAuth = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(AuthContext);
function AuthProvider({
  currentUser,
  children
}) {
  return __jsx(AuthContext.Provider, {
    value: {
      currentUser
    }
  }, children);
}
/* unused harmony default export */ var _unused_webpack_default_export = (AuthContext);

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });