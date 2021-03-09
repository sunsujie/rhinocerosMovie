(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/u-link/u-link"],{5771:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"u-link",props:{href:{type:String,default:""},text:{type:String,default:""},inWhiteList:{type:Boolean,default:!1}},methods:{openURL:function(){this.inWhiteList?t.navigateTo({url:"/pages/component/web-view/web-view?url="+this.href}):(t.setClipboardData({data:this.href}),t.showModal({content:"本网址无法直接在小程序内打开。已自动复制网址，请在手机浏览器里粘贴该网址",showCancel:!1}))}}};n.default=e}).call(this,e("543d")["default"])},"5f13":function(t,n,e){"use strict";e.r(n);var u=e("8516"),a=e("628d");for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);var r,o=e("f0c5"),l=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=l.exports},"628d":function(t,n,e){"use strict";e.r(n);var u=e("5771"),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);n["default"]=a.a},8516:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/u-link/u-link-create-component',
    {
        'components/u-link/u-link-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5f13"))
        })
    },
    [['components/u-link/u-link-create-component']]
]);
