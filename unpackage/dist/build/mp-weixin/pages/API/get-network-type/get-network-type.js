(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/get-network-type/get-network-type"],{"3b9a":function(t,e,n){"use strict";(function(t){n("688c");o(n("66fd"));var e=o(n("d728"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"6acc":function(t,e,n){"use strict";n.r(e);var o=n("faa2"),c=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=c.a},c558:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,"838f"))}},c=function(){var t=this,e=t.$createElement;t._self._c},i=[]},d728:function(t,e,n){"use strict";n.r(e);var o=n("c558"),c=n("6acc");for(var i in c)"default"!==i&&function(t){n.d(e,t,(function(){return c[t]}))}(i);var a,u=n("f0c5"),r=Object(u["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=r.exports},faa2:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("2f62");var o={data:function(){return{title:"getNetworkType",hasNetworkType:!1,networkType:"",connectedWifi:""}},onUnload:function(){this.networkType="",this.hasNetworkType=!1},methods:{getNetworkType:function(){var e=this;t.getNetworkType({success:function(t){console.log(t),e.hasNetworkType=!0,e.networkType=t.subtype||t.networkType},fail:function(){t.showModal({content:"获取失败！",showCancel:!1})}})},clear:function(){this.hasNetworkType=!1,this.networkType="",this.connectedWifi=""},getConnectedWifi:function(){var e=this;t.startWifi({success:function(){t.getConnectedWifi({success:function(t){var n=t.wifi;e.connectedWifi=JSON.stringify(n)},fail:function(t){}})},fail:function(t){}})}}};e.default=o}).call(this,n("543d")["default"])}},[["3b9a","common/runtime","common/vendor"]]]);