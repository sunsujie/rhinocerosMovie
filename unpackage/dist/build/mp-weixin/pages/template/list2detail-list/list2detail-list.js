(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/list2detail-list/list2detail-list"],{"5ad4":function(t,e,n){},"73b2":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){n.e("components/uni-load-more/uni-load-more").then(function(){return resolve(n("6b4f"))}.bind(null,n)).catch(n.oe)},a=n("264b").dateUtils,o={components:{uniLoadMore:i},data:function(){return{banner:{},listData:[],last_id:"",reload:!1,status:"more",adpid:"",contentText:{contentdown:"上拉加载更多",contentrefresh:"加载中",contentnomore:"没有更多"}}},onLoad:function(){this.adpid=this.$adpid,this.getBanner(),this.getList()},onPullDownRefresh:function(){this.reload=!0,this.last_id="",this.getBanner(),this.getList()},onReachBottom:function(){this.status="more",this.getList()},methods:{getBanner:function(){var e=this,n={column:"id,post_id,title,author_name,cover,published_at"};t.request({url:"https://unidemo.dcloud.net.cn/api/banner/36kr",data:n,success:function(n){t.stopPullDownRefresh(),200==n.statusCode&&(e.banner=n.data)},fail:function(t,e){console.log("fail"+JSON.stringify(t))}})},getList:function(){var e=this,n={column:"id,post_id,title,author_name,cover,published_at"};this.last_id&&(this.status="loading",n.minId=this.last_id,n.time=(new Date).getTime()+"",n.pageSize=10),t.request({url:"https://unidemo.dcloud.net.cn/api/news",data:n,success:function(t){if(200==t.statusCode){var n=e.setTime(t.data);e.listData=e.reload?n:e.listData.concat(n),e.last_id=n[n.length-1].id,e.reload=!1}},fail:function(t,e){console.log("fail"+JSON.stringify(t))}})},goDetail:function(e){var n={author_name:e.author_name,cover:e.cover,id:e.id,post_id:e.post_id,published_at:e.published_at,title:e.title};t.navigateTo({url:"../list2detail-detail/list2detail-detail?detailDate="+encodeURIComponent(JSON.stringify(n))})},setTime:function(t){var e=[];return t.forEach((function(t){e.push({author_name:t.author_name,cover:t.cover,id:t.id,post_id:t.post_id,published_at:a.format(t.published_at),title:t.title})})),e},aderror:function(t){console.log("aderror: "+JSON.stringify(t.detail))}}};e.default=o}).call(this,n("543d")["default"])},bb2d:function(t,e,n){"use strict";var i=n("5ad4"),a=n.n(i);a.a},bbe9:function(t,e,n){"use strict";n.r(e);var i=n("73b2"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},dbaa:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniLoadMore:function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"6b4f"))}},a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},e23f:function(t,e,n){"use strict";(function(t){n("688c");i(n("66fd"));var e=i(n("fa8c"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},fa8c:function(t,e,n){"use strict";n.r(e);var i=n("dbaa"),a=n("bbe9");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("bb2d");var u,s=n("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=r.exports}},[["e23f","common/runtime","common/vendor"]]]);