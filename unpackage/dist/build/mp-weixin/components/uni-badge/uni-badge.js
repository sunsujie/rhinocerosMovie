(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-badge/uni-badge"],{"1ed4":function(t,e,n){"use strict";n.r(e);var u=n("ecc8"),c=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);e["default"]=c.a},ac40:function(t,e,n){"use strict";var u=n("c9e3"),c=n.n(u);c.a},c9e3:function(t,e,n){},ceec:function(t,e,n){"use strict";n.r(e);var u=n("f554"),c=n("1ed4");for(var a in c)"default"!==a&&function(t){n.d(e,t,(function(){return c[t]}))}(a);n("ac40");var i,r=n("f0c5"),o=Object(r["a"])(c["default"],u["b"],u["c"],!1,null,"04822422",null,!1,u["a"],i);e["default"]=o.exports},ecc8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=u},f554:function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return u}));var c=function(){var t=this,e=t.$createElement;t._self._c},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-badge/uni-badge-create-component',
    {
        'components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ceec"))
        })
    },
    [['components/uni-badge/uni-badge-create-component']]
]);
