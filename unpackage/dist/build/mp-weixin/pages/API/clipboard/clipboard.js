(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/clipboard/clipboard"],{"2e89":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{title:"get/setClipboardData",data:""}},methods:{dataChange:function(t){this.data=t.detail.value},getClipboard:function(){t.getClipboardData({success:function(n){console.log(n.data);var a=n.data?"剪贴板内容为:"+n.data:"剪贴板暂无内容";t.showModal({content:a,title:"读取剪贴板",showCancel:!1})},fail:function(){t.showModal({content:"读取剪贴板失败!",showCancel:!1})}})},setClipboard:function(){var n=this.data;0===n.length?t.showModal({title:"设置剪贴板失败",content:"内容不能为空",showCancel:!1}):t.setClipboardData({data:n,success:function(){},fail:function(){}})}}};n.default=a}).call(this,a("543d")["default"])},6129:function(t,n,a){"use strict";a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return u})),a.d(n,"a",(function(){return e}));var e={pageHead:function(){return a.e("components/page-head/page-head").then(a.bind(null,"838f"))}},o=function(){var t=this,n=t.$createElement;t._self._c},u=[]},"83bd":function(t,n,a){"use strict";a.r(n);var e=a("2e89"),o=a.n(e);for(var u in e)"default"!==u&&function(t){a.d(n,t,(function(){return e[t]}))}(u);n["default"]=o.a},be06:function(t,n,a){"use strict";a.r(n);var e=a("6129"),o=a("83bd");for(var u in o)"default"!==u&&function(t){a.d(n,t,(function(){return o[t]}))}(u);var c,i=a("f0c5"),l=Object(i["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],c);n["default"]=l.exports},f34d:function(t,n,a){"use strict";(function(t){a("688c");e(a("66fd"));var n=e(a("be06"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("543d")["createPage"])}},[["f34d","common/runtime","common/vendor"]]]);