(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/download-file/download-file"],{"0069":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{title:"downloadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{downloadImage:function(){n.showLoading({title:"下载中"});var e=this;n.downloadFile({url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",success:function(t){console.log("downloadFile success, res is",t),e.imageSrc=t.tempFilePath,n.hideLoading()},fail:function(n){console.log("downloadFile fail, err is:",n)}})}}};e.default=t}).call(this,t("543d")["default"])},"39e1":function(n,e,t){},"647a":function(n,e,t){"use strict";t.r(e);var o=t("0069"),a=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=a.a},8389:function(n,e,t){"use strict";var o=t("39e1"),a=t.n(o);a.a},b25f:function(n,e,t){"use strict";t.r(e);var o=t("eec3"),a=t("647a");for(var i in a)"default"!==i&&function(n){t.d(e,n,(function(){return a[n]}))}(i);t("8389");var u,c=t("f0c5"),l=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=l.exports},d4f7:function(n,e,t){"use strict";(function(n){t("688c");o(t("66fd"));var e=o(t("b25f"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},eec3:function(n,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return o}));var o={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,"838f"))}},a=function(){var n=this,e=n.$createElement;n._self._c},i=[]}},[["d4f7","common/runtime","common/vendor"]]]);