(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-collapse/uni-collapse"],{3655:function(n,t,e){"use strict";var a=e("9a95"),u=e.n(a);u.a},"87a2":function(n,t,e){"use strict";e.r(t);var a=e("b622"),u=e("9d4d");for(var c in u)"default"!==c&&function(n){e.d(t,n,(function(){return u[n]}))}(c);e("3655");var r,o=e("f0c5"),i=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,"506c0e2e",null,!1,a["a"],r);t["default"]=i.exports},"9a95":function(n,t,e){},"9d4d":function(n,t,e){"use strict";e.r(t);var a=e("bb20"),u=e.n(a);for(var c in a)"default"!==c&&function(n){e.d(t,n,(function(){return a[n]}))}(c);t["default"]=u.a},b622:function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return a}));var u=function(){var n=this,t=n.$createElement;n._self._c},c=[]},bb20:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"UniCollapse",props:{accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach((function(t,e){t.isOpen&&n.push(t.nameSync)})),this.$emit("change",n)}}};t.default=a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("87a2"))
        })
    },
    [['components/uni-collapse/uni-collapse-create-component']]
]);
