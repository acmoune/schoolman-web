webpackHotUpdate("static/development/pages/myTrainings.js",{

/***/ "./components/Bill.tsx":
/*!*****************************!*\
  !*** ./components/Bill.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bill; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/utilities */ "./lib/utilities.ts");
/* harmony import */ var _lib_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/cookie */ "./lib/cookie.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.config */ "./app.config.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_config__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/data/apps/opensource/SchoolMan/web-client/components/Bill.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Bill(_ref) {
  var bill = _ref.bill;
  var isPaid = bill.payments.reduce(function (s, p) {
    return s + p.amount;
  }, 0) >= bill.amount;

  var statusColor = function statusColor() {
    if (isPaid) return 'green';
    return 'red';
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    style: {
      padding: 10,
      marginBottom: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      paddingBottom: 5,
      marginBottom: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    style: {
      flexGrow: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, bill.description), __jsx("div", {
    style: {
      color: '#808080',
      fontSize: '9pt'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Fee type: ", __jsx("span", {
    style: {
      color: '#000000'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, bill.feeType), " \xA0 Amount: ", __jsx("span", {
    style: {
      color: '#000000'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, Object(_lib_utilities__WEBPACK_IMPORTED_MODULE_3__["currency"])(bill.amount)), " \xA0 Status: ", __jsx("span", {
    style: {
      color: statusColor()
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, isPaid ? 'Paid' : 'Not Paid'))), __jsx("div", {
    style: {
      color: '#808080',
      fontSize: '9pt'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    onClick: function onClick() {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_app_config__WEBPACK_IMPORTED_MODULE_5__["apiBaseUrl"], "/printpdf/bills/").concat(bill.billId), {
        responseType: 'blob',
        // important
        headers: {
          'schoolman_token': Object(_lib_cookie__WEBPACK_IMPORTED_MODULE_4__["getCookieFromBrowser"])(_app_config__WEBPACK_IMPORTED_MODULE_5__["authCookieName"])
        }
      }).then(function (res) {
        var url = window.URL.createObjectURL(new Blob([res.data]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', "imit-bill-".concat(bill.billId, ".pdf"));
        document.body.appendChild(link);
        link.click();
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Print Bill"))), __jsx("div", {
    style: {
      color: '#808080',
      marginBottom: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Payments"), bill.payments.length > 0 ? bill.payments.map(function (p) {
    return __jsx("div", {
      style: {
        display: 'flex',
        padding: '5px 0px',
        borderTop: '1px solid #DFDFDF',
        color: '#808080',
        fontSize: '9pt'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("div", {
      style: {
        flexGrow: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Amount: ", __jsx("span", {
      style: {
        color: '#000000'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, Object(_lib_utilities__WEBPACK_IMPORTED_MODULE_3__["currency"])(p.amount)), " \xA0 Date: ", __jsx("span", {
      style: {
        color: '#000000'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, p.date)));
  }) : __jsx("div", {
    style: {
      padding: '10px 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "(No payment)"), __jsx("div", {
    style: {
      color: '#808080',
      fontSize: '9pt',
      paddingTop: 5,
      marginTop: 10,
      textAlign: 'right'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Total paid: ", __jsx("span", {
    style: {
      color: '#000000'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, Object(_lib_utilities__WEBPACK_IMPORTED_MODULE_3__["currency"])(bill.payments.map(function (p) {
    return p.amount;
  }).reduce(function (s, p) {
    return s + p;
  }, 0))), " \xA0 Remaining: ", __jsx("span", {
    style: {
      color: 'orange'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, Object(_lib_utilities__WEBPACK_IMPORTED_MODULE_3__["currency"])(Math.max(0, bill.amount - bill.payments.map(function (p) {
    return p.amount;
  }).reduce(function (s, p) {
    return s + p;
  }, 0))))));
}

/***/ })

})
//# sourceMappingURL=myTrainings.js.1e1977583ce6937381fa.hot-update.js.map