(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/checkbox/checkbox"],{"29b4":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{title:"checkbox 复选框",items:[{value:"USA",name:"美国"},{value:"CHN",name:"中国",checked:"true"},{value:"BRA",name:"巴西"},{value:"JPN",name:"日本"},{value:"ENG",name:"英国"},{value:"FRA",name:"法国"}]}},methods:{checkboxChange:function(e){for(var n=this.items,t=e.detail.value,a=0,u=n.length;a<u;++a){var c=n[a];t.indexOf(c.value)>=0?this.$set(c,"checked",!0):this.$set(c,"checked",!1)}}}};n.default=a},"7aac":function(e,n,t){"use strict";t.r(n);var a=t("29b4"),u=t.n(a);for(var c in a)"default"!==c&&function(e){t.d(n,e,(function(){return a[e]}))}(c);n["default"]=u.a},d41f:function(e,n,t){"use strict";t.r(n);var a=t("ee7f"),u=t("7aac");for(var c in u)"default"!==c&&function(e){t.d(n,e,(function(){return u[e]}))}(c);t("f188");var r,f=t("f0c5"),o=Object(f["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);n["default"]=o.exports},dea9:function(e,n,t){},ee7f:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return a}));var a={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,"838f"))}},u=function(){var e=this,n=e.$createElement;e._self._c},c=[]},f188:function(e,n,t){"use strict";var a=t("dea9"),u=t.n(a);u.a},f278:function(e,n,t){"use strict";(function(e){t("688c");a(t("66fd"));var n=a(t("d41f"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["f278","common/runtime","common/vendor"]]]);