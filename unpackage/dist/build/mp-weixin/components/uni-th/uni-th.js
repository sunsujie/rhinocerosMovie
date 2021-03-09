(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-th/uni-th"],{4013:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"uniTh",options:{virtualHost:!0},props:{width:{type:[String,Number],default:""},align:{type:String,default:"left"}},data:function(){return{border:!1}},created:function(){this.root=this.getTable("uniTable"),this.rootTr=this.getTable("uniTr"),this.rootTr.minWidthUpdate(this.width?this.width:140),this.border=this.root.border},methods:{getTable:function(t){var n=this.$parent,e=n.$options.name;while(e!==t){if(n=n.$parent,!n)return!1;e=n.$options.name}return n}}};n.default=r},"53a7":function(t,n,e){"use strict";var r=e("cba9"),i=e.n(r);i.a},"80f0d":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return r}));var i=function(){var t=this,n=t.$createElement;t._self._c},u=[]},c5f5:function(t,n,e){"use strict";e.r(n);var r=e("80f0d"),i=e("eeed7");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("53a7");var a,o=e("f0c5"),f=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"5d8f8415",null,!1,r["a"],a);n["default"]=f.exports},cba9:function(t,n,e){},eeed7:function(t,n,e){"use strict";e.r(n);var r=e("4013"),i=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-th/uni-th-create-component',
    {
        'components/uni-th/uni-th-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c5f5"))
        })
    },
    [['components/uni-th/uni-th-create-component']]
]);
