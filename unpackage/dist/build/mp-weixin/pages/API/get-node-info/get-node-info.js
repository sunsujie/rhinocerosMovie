(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/get-node-info/get-node-info"],{3207:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"createSelectorQuery",top:0,left:"0px",info:[]}},onReady:function(){this.getNodeInfo()},methods:{setPosition:function(){this.left=Math.random()*t.upx2px(320)+"px",this.top=Math.random()*t.upx2px(320)+"px",this.getNodeInfo()},getNodeInfo:function(){var e=this;t.createSelectorQuery().select(".target").boundingClientRect().exec((function(t){var n=t[0];if(n){var o=["left","right","top","bottom","width","height"],u=[];for(var a in o){var r=o[a];u.push({key:r,val:n[r]})}e.info=u}}))}}};e.default=n}).call(this,n("543d")["default"])},"4c9a":function(t,e,n){"use strict";(function(t){n("688c");o(n("66fd"));var e=o(n("f450"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"8a7d":function(t,e,n){},c641:function(t,e,n){"use strict";n.r(e);var o=n("3207"),u=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=u.a},e22b:function(t,e,n){"use strict";var o=n("8a7d"),u=n.n(o);u.a},f450:function(t,e,n){"use strict";n.r(e);var o=n("fdbb"),u=n("c641");for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("e22b");var r,i=n("f0c5"),c=Object(i["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=c.exports},fdbb:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,"838f"))}},u=function(){var t=this,e=t.$createElement;t._self._c},a=[]}},[["4c9a","common/runtime","common/vendor"]]]);