(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/navigator/navigator"],{7568:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("2f62");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c="/pages/extUI/calendar/calendar",i={data:function(){return{title:"navigate"}},computed:o({},(0,a.mapState)({hasLeftWin:function(e){return!e.noMatchLeftWindow}})),methods:{navigateTo:function(){e.navigateTo({url:"new-page/new-vue-page-1?data=Hello"})},navigateBack:function(){e.navigateBack()},redirectTo:function(){e.redirectTo({url:"new-page/new-vue-page-1"})},switchTab:function(){e.switchTab({url:"/pages/tabBar/template/template"})},reLaunch:function(){this.hasLeftWin?e.reLaunch({url:"/pages/component/view/view"}):e.reLaunch({url:"/pages/tabBar/component/component"})},customAnimation:function(){e.navigateTo({url:"new-page/new-vue-page-1?data=使用自定义动画打开页面",animationType:"slide-in-bottom",animationDuration:200})},preloadPage:function(){e.preloadPage({url:c,success:function(){e.showToast({title:"页面预载成功"})},fail:function(){e.showToast({title:"页面预载失败"})}})},unPreloadPage:function(){e.unPreloadPage({url:c})},navigateToPreloadPage:function(){e.navigateTo({url:c})}}};t.default=i}).call(this,n("543d")["default"])},"85a2":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,"838f"))}},r=function(){var e=this,t=e.$createElement;e._self._c},o=[]},"97ca":function(e,t,n){"use strict";n.r(t);var a=n("7568"),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=r.a},c5fa:function(e,t,n){"use strict";n.r(t);var a=n("85a2"),r=n("97ca");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);var u,c=n("f0c5"),i=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=i.exports},db8e:function(e,t,n){"use strict";(function(e){n("688c");a(n("66fd"));var t=a(n("c5fa"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["db8e","common/runtime","common/vendor"]]]);