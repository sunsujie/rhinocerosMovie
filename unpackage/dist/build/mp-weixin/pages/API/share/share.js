(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/share/share"],{5042:function(e,t,n){"use strict";(function(e){n("688c");a(n("66fd"));var t=a(n("dcdb"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"714e":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,a,o,r,s){try{var i=e[r](s),c=i.value}catch(u){return void n(u)}i.done?t(c):Promise.resolve(c).then(a,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var s=e.apply(t,n);function i(e){r(s,a,o,i,c,"next",e)}function c(e){r(s,a,o,i,c,"throw",e)}i(void 0)}))}}var i={data:function(){return{title:"share",shareText:"uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",href:"https://uniapp.dcloud.io",image:"",shareType:1,providerList:[]}},computed:{isDisableButton:function(){return function(e){return 0===this.shareType&&"qq"===e.id||5===this.shareType&&"分享到微信好友"!==e.name}}},onShareAppMessage:function(){return{title:this.shareText?this.shareText:"欢迎体验uni-app",path:"/pages/tabBar/component/component",imageUrl:this.image?this.image:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b6304f00-5168-11eb-bd01-97bc1429a9ff.png"}},onUnload:function(){this.shareText="uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",this.href="https://uniapp.dcloud.io",this.image=""},onLoad:function(){var t=this;e.getProvider({service:"share",success:function(e){console.log("success",e);for(var n=[],a=0;a<e.provider.length;a++)switch(e.provider[a]){case"weixin":n.push({name:"分享到微信好友",id:"weixin",sort:0}),n.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline",sort:1});break;case"sinaweibo":n.push({name:"分享到新浪微博",id:"sinaweibo",sort:2});break;case"qq":n.push({name:"分享到QQ",id:"qq",sort:3});break;default:break}t.providerList=n.sort((function(e,t){return e.sort-t.sort}))},fail:function(t){console.log("获取分享通道失败",t),e.showModal({content:"获取分享通道失败",showCancel:!1})}})},methods:{share:function(t){var n=this;return s(a.default.mark((function o(){var r;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(console.log("分享通道:"+t.id+"； 分享类型:"+n.shareType),n.shareText||1!==n.shareType&&0!==n.shareType){a.next=4;break}return e.showModal({content:"分享内容不能为空",showCancel:!1}),a.abrupt("return");case 4:if(n.image||2!==n.shareType&&0!==n.shareType){a.next=7;break}return e.showModal({content:"分享图片不能为空",showCancel:!1}),a.abrupt("return");case 7:r={provider:t.id,scene:t.type&&"WXSenceTimeline"===t.type?"WXSenceTimeline":"WXSceneSession",type:n.shareType,success:function(t){console.log("success",t),e.showModal({content:"已分享",showCancel:!1})},fail:function(t){console.log("fail",t),e.showModal({content:t.errMsg,showCancel:!1})},complete:function(){console.log("分享操作结束!")}},a.t0=n.shareType,a.next=0===a.t0?11:1===a.t0?16:2===a.t0?18:5===a.t0?20:24;break;case 11:return r.summary=n.shareText,r.imageUrl=n.image,r.title="欢迎体验uniapp",r.href="https://uniapp.dcloud.io",a.abrupt("break",25);case 16:return r.summary=n.shareText,a.abrupt("break",25);case 18:return r.imageUrl=n.image,a.abrupt("break",25);case 20:return r.imageUrl=n.image?n.image:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b6304f00-5168-11eb-bd01-97bc1429a9ff.png",r.title="欢迎体验uniapp",r.miniProgram={id:"gh_33446d7f7a26",path:"/pages/tabBar/component/component",webUrl:"https://uniapp.dcloud.io",type:0},a.abrupt("break",25);case 24:return a.abrupt("break",25);case 25:if(0!==r.type||"iOS"!==plus.os.name){a.next=29;break}return a.next=28,n.compress();case 28:r.imageUrl=a.sent;case 29:1===r.type&&"qq"===r.provider&&(r.href="https://uniapp.dcloud.io",r.title="欢迎体验uniapp"),e.share(r);case 31:case"end":return a.stop()}}),o)})))()},radioChange:function(e){console.log("type:"+e.detail.value),this.shareType=parseInt(e.detail.value)},chooseImage:function(){var t=this;e.chooseImage({count:1,sourceType:["album","camera"],sizeType:["compressed","original"],success:function(e){t.image=e.tempFilePaths[0]},fail:function(t){e.getSetting({success:function(t){var n=t.authSetting["scope.album"]&&t.authSetting["scope.camera"];n||e.showModal({title:"授权失败",content:"Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限",success:function(t){t.confirm&&e.openSetting()}})}})}})},compress:function(){console.log("开始压缩");var t=this.image;return new Promise((function(n){var a=plus.io.convertAbsoluteFileSystem(t.replace("file://",""));console.log("after"+a),plus.io.resolveLocalFileSystemURL(a,(function(a){a.file((function(a){console.log("getFile:"+JSON.stringify(a)),a.size>20480&&plus.zip.compressImage({src:t,dst:t.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG"),width:"10%",height:"10%",quality:1,overwrite:!0},(function(e){console.log("success zip****"+e.size);var a=t.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG");n(a)}),(function(t){e.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})}))}))}),(function(t){console.log("Resolve file URL failed: "+t.message),e.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})}))}))}}};t.default=i}).call(this,n("543d")["default"])},"9d6e":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,"838f"))}},o=function(){var e=this,t=e.$createElement;e._self._c},r=[]},b567:function(e,t,n){"use strict";n.r(t);var a=n("714e"),o=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=o.a},dcdb:function(e,t,n){"use strict";n.r(t);var a=n("9d6e"),o=n("b567");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);var s,i=n("f0c5"),c=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);t["default"]=c.exports}},[["5042","common/runtime","common/vendor"]]]);