(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-popup-message/uni-popup-message"],{"0a56":function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return u}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"44e3":function(t,e,n){},b6b3:function(t,e,n){"use strict";n.r(e);var u=n("f558"),i=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(e,t,(function(){return u[t]}))}(o);e["default"]=i.a},cebf:function(t,e,n){"use strict";var u=n("44e3"),i=n.n(u);i.a},ea86:function(t,e,n){"use strict";n.r(e);var u=n("0a56"),i=n("b6b3");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("cebf");var r,a=n("f0c5"),c=Object(a["a"])(i["default"],u["b"],u["c"],!1,null,"fa14cf40",null,!1,u["a"],r);e["default"]=c.exports},f558:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniPopupMessage",props:{type:{type:String,default:"success"},message:{type:String,default:""},duration:{type:Number,default:3e3}},inject:["popup"],data:function(){return{}},created:function(){this.popup.childrenMsg=this},methods:{open:function(){var t=this;0!==this.duration&&(clearTimeout(this.popuptimer),this.popuptimer=setTimeout((function(){t.popup.close()}),this.duration))},close:function(){clearTimeout(this.popuptimer)}}};e.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-popup-message/uni-popup-message-create-component',
    {
        'components/uni-popup-message/uni-popup-message-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ea86"))
        })
    },
    [['components/uni-popup-message/uni-popup-message-create-component']]
]);
