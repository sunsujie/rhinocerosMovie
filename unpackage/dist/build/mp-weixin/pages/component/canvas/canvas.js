(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/canvas/canvas"],{"1d9d":function(t,a,n){"use strict";n.r(a);var i=n("7f2f"),s=n("3a8b");for(var e in s)"default"!==e&&function(t){n.d(a,t,(function(){return s[t]}))}(e);n("6f7a");var c,u=n("f0c5"),r=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);a["default"]=r.exports},"3a8b":function(t,a,n){"use strict";n.r(a);var i=n("3cd9"),s=n.n(i);for(var e in i)"default"!==e&&function(t){n.d(a,t,(function(){return i[t]}))}(e);a["default"]=s.a},"3cd9":function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=null,i=null;function s(t,a,n,i,s,e,c){this.canvasWidth=s,this.canvasHeight=e,this.ctx=c,this.x=t,this.y=a,this.vx=n,this.vy=i,this.radius=5}function e(t,a){return Math.pow(Math.pow(t,2)+Math.pow(a,2),.5)}s.prototype.draw=function(){this.ctx.setFillStyle("#007AFF"),this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.closePath(),this.ctx.fill()},s.prototype.move=function(){this.x+=this.vx,this.y+=this.vy,this.x<this.radius?this.vx=Math.abs(this.vx):(this.x>this.canvasWidth-this.radius&&(this.vx=-Math.abs(this.vx)),this.y<this.radius?this.vy=Math.abs(this.vy):this.y>this.canvasWidth-this.radius&&(this.vy=-Math.abs(this.vy)))};var c={data:function(){return{title:"canvas",canvasWidth:0,startStatus:!1,ballList:[]}},onReady:function(){var a=this;this.$nextTick((function(){t.createSelectorQuery().select(".canvas").boundingClientRect((function(i){a.canvasWidth=i.width,n=t.createCanvasContext("canvas"),a.drawBall()})).exec()}))},onUnload:function(){clearInterval(i)},methods:{drawBall:function(){for(var t=this.canvasWidth,a=this.canvasWidth,c=3,u=[],r=3,h=20,o=0;o<r;o++)for(var d=e(t/2,a/2)/r*o,f=0;f<h;f++){var l=2*f*Math.PI/h,v=Math.sin(l),p=Math.cos(l),x=d*p+t/2,b=d*v+a/2,y=c*p,M=c*v;u.push(new s(x,b,y,M,t,a,n))}function w(t){t.forEach((function(t){t.move(),t.draw()})),n.draw()}i=setInterval((function(){w(u)}),17)}}};a.default=c}).call(this,n("543d")["default"])},"5a8d":function(t,a,n){"use strict";(function(t){n("688c");i(n("66fd"));var a=i(n("1d9d"));function i(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,n("543d")["createPage"])},"6f7a":function(t,a,n){"use strict";var i=n("e87d"),s=n.n(i);s.a},"7f2f":function(t,a,n){"use strict";n.d(a,"b",(function(){return s})),n.d(a,"c",(function(){return e})),n.d(a,"a",(function(){return i}));var i={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,"838f"))}},s=function(){var t=this,a=t.$createElement;t._self._c},e=[]},e87d:function(t,a,n){}},[["5a8d","common/runtime","common/vendor"]]]);