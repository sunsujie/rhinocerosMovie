(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/video/video"],{"13e0":function(t,e,n){"use strict";n.r(e);var o=n("5636"),a=n("fc72");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("582c");var r,i=n("f0c5"),c=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=c.exports},"2eb7":function(t,e,n){"use strict";(function(t){n("688c");o(n("66fd"));var e=o(n("13e0"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"39eb":function(t,e,n){},5636:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var o={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,"838f"))}},a=function(){var t=this,e=t.$createElement;t._self._c},u=[]},"582c":function(t,e,n){"use strict";var o=n("39eb"),a=n.n(o);a.a},f10a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"video",src:"",danmuList:[{text:"第 1s 出现的弹幕",color:"#ff0000",time:1},{text:"第 3s 出现的弹幕",color:"#ff00ff",time:3}],danmuValue:"",showVideo:!1}},onReady:function(e){this.videoContext=t.createVideoContext("myVideo"),this.showVideo=!0},methods:{sendDanmu:function(){this.videoContext.sendDanmu({text:this.danmuValue,color:this.getRandomColor()}),this.danmuValue=""},videoErrorCallback:function(e){t.showModal({content:e.target.errMsg,showCancel:!1})},getRandomColor:function(){for(var t=[],e=0;e<3;++e){var n=Math.floor(256*Math.random()).toString(16);n=1==n.length?"0"+n:n,t.push(n)}return"#"+t.join("")}}};e.default=n}).call(this,n("543d")["default"])},fc72:function(t,e,n){"use strict";n.r(e);var o=n("f10a"),a=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=a.a}},[["2eb7","common/runtime","common/vendor"]]]);