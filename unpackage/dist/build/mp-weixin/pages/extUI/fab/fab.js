(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/fab/fab"],{1615:function(t,n,e){"use strict";var c=e("386c"),o=e.n(c);o.a},2035:function(t,n,e){"use strict";e.r(n);var c=e("4a32"),o=e.n(c);for(var i in c)"default"!==i&&function(t){e.d(n,t,(function(){return c[t]}))}(i);n["default"]=o.a},3077:function(t,n,e){"use strict";var c=e("aa45"),o=e.n(c);o.a},"386c":function(t,n,e){},"43c7":function(t,n,e){"use strict";e.r(n);var c=e("9937"),o=e("2035");for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("3077"),e("1615");var a,r=e("f0c5"),u=Object(r["a"])(o["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],a);n["default"]=u.exports},"4a32":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={components:{},data:function(){return{title:"uni-fab",directionStr:"垂直",horizontal:"left",vertical:"bottom",direction:"horizontal",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF"},content:[{iconPath:"/static/component.png",selectedIconPath:"/static/componentHL.png",text:"组件",active:!1},{iconPath:"/static/api.png",selectedIconPath:"/static/apiHL.png",text:"API",active:!1},{iconPath:"/static/template.png",selectedIconPath:"/static/templateHL.png",text:"模版",active:!1}]}},onBackPress:function(){return!!this.$refs.fab.isShow&&(this.$refs.fab.close(),!0)},methods:{trigger:function(n){console.log(n),this.content[n.index].active=!n.item.active,t.showModal({title:"提示",content:"您".concat(this.content[n.index].active?"选中了":"取消了").concat(n.item.text),success:function(t){t.confirm?console.log("用户点击确定"):t.cancel&&console.log("用户点击取消")}})},fabClick:function(){t.showToast({title:"点击了悬浮按钮",icon:"none"})},switchBtn:function(t,n){0===t?(this.direction="horizontal"===this.direction?"vertical":"horizontal",this.directionStr="horizontal"===this.direction?"垂直":"水平"):(this.horizontal=t,this.vertical=n),this.$forceUpdate()}}};n.default=e}).call(this,e("543d")["default"])},"6ce7":function(t,n,e){"use strict";(function(t){e("688c");c(e("66fd"));var n=c(e("43c7"));function c(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},9937:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return c}));var c={uniFab:function(){return e.e("components/uni-fab/uni-fab").then(e.bind(null,"fca4"))}},o=function(){var t=this,n=t.$createElement;t._self._c},i=[]},aa45:function(t,n,e){}},[["6ce7","common/runtime","common/vendor"]]]);