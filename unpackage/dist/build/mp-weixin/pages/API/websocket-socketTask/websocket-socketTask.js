(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/websocket-socketTask/websocket-socketTask"],{"04ab":function(n,t,o){"use strict";o.r(t);var e=o("542f"),c=o("1bf9");for(var s in c)"default"!==s&&function(n){o.d(t,n,(function(){return c[n]}))}(s);o("bc9e");var a,i=o("f0c5"),u=Object(i["a"])(c["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],a);t["default"]=u.exports},"1bf9":function(n,t,o){"use strict";o.r(t);var e=o("dc01"),c=o.n(e);for(var s in e)"default"!==s&&function(n){o.d(t,n,(function(){return e[n]}))}(s);t["default"]=c.a},"3fdd":function(n,t,o){},"542f":function(n,t,o){"use strict";o.d(t,"b",(function(){return c})),o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return e}));var e={pageHead:function(){return o.e("components/page-head/page-head").then(o.bind(null,"838f"))}},c=function(){var n=this,t=n.$createElement;n._self._c},s=[]},bc9e:function(n,t,o){"use strict";var e=o("3fdd"),c=o.n(e);c.a},dc01:function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n.getSystemInfoSync().platform,e={data:function(){return{connected:!1,connecting:!1,socketTask:!1,msg:!1}},computed:{showMsg:function(){return this.connected?this.msg?"收到消息："+this.msg:"等待接收消息":"尚未连接"}},onUnload:function(){n.hideLoading(),this.socketTask&&this.socketTask.close&&this.socketTask.close()},methods:{connect:function(){var t=this;if(this.connected||this.connecting)return n.showModal({content:"正在连接或者已经连接，请勿重复连接",showCancel:!1}),!1;this.connecting=!0,n.showLoading({title:"连接中..."}),this.socketTask=n.connectSocket({url:"wss://echo.websocket.org",data:function(){return{msg:"Hello"}},header:{"content-type":"application/json"},method:"GET",success:function(n){},fail:function(n){}}),console.log(this.socketTask),this.socketTask.onOpen((function(o){t.connecting=!1,t.connected=!0,n.hideLoading(),n.showToast({icon:"none",title:"连接成功"}),console.log("onOpen",o)})),this.socketTask.onError((function(o){t.connecting=!1,t.connected=!1,n.hideLoading(),n.showModal({content:"连接失败，可能是websocket服务不可用，请稍后再试",showCancel:!1}),console.log("onError",o)})),this.socketTask.onMessage((function(n){t.msg=n.data,console.log("onMessage",n)})),this.socketTask.onClose((function(n){t.connected=!1,t.startRecive=!1,t.socketTask=!1,t.msg=!1,console.log("onClose",n)})),console.log("task",this.socketTask)},send:function(){this.socketTask.send({data:"from "+o+" : "+parseInt(1e4*Math.random()).toString(),success:function(n){console.log(n)},fail:function(n){console.log(n)}})},close:function(){this.socketTask&&this.socketTask.close&&this.socketTask.close()}}};t.default=e}).call(this,o("543d")["default"])},f8d2:function(n,t,o){"use strict";(function(n){o("688c");e(o("66fd"));var t=e(o("04ab"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,o("543d")["createPage"])}},[["f8d2","common/runtime","common/vendor"]]]);