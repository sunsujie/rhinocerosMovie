(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/component-communication/reciver"],{3809:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=u(n("582f"));function u(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{msg:""}},created:function(){t.$on("cc",this.recive),c.default.$on("cc",this.recive)},beforeDestroy:function(){t.$off("cc",this.recive),c.default.$off("cc",this.recive)},methods:{recive:function(t){this.msg=t.msg}}};e.default=r}).call(this,n("543d")["default"])},"75b2":function(t,e,n){},"76a6":function(t,e,n){"use strict";n.r(e);var c=n("bac6"),u=n("879e");for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);n("f2fa");var f,a=n("f0c5"),i=Object(a["a"])(u["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],f);e["default"]=i.exports},"879e":function(t,e,n){"use strict";n.r(e);var c=n("3809"),u=n.n(c);for(var r in c)"default"!==r&&function(t){n.d(e,t,(function(){return c[t]}))}(r);e["default"]=u.a},bac6:function(t,e,n){"use strict";var c;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return c}));var u=function(){var t=this,e=t.$createElement;t._self._c},r=[]},f2fa:function(t,e,n){"use strict";var c=n("75b2"),u=n.n(c);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/template/component-communication/reciver-create-component',
    {
        'pages/template/component-communication/reciver-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("76a6"))
        })
    },
    [['pages/template/component-communication/reciver-create-component']]
]);
