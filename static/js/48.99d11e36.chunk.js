(this["webpackJsonpdappy-doge-l2"]=this["webpackJsonpdappy-doge-l2"]||[]).push([[48],{514:function(t,e,n){"use strict";n.r(e);var o=n(9),r=n.n(o),i=(n(79),n(115));n(39),n(81),n(80);function a(t,e,n,o,r,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(o,r)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function c(t){a(i,o,r,c,u,"next",t)}function u(t){a(i,o,r,c,u,"throw",t)}c(void 0)}))}}e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.heading,n=t.description,o=t.icon,a=t.html,u=t.button;return function(){var t=c(r.a.mark((function t(c){var s,l,f,w,h,p;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=c.network,l=c.appNetworkId,f=c.walletSelect,w=c.exit,h=c.stateSyncStatus,p=c.stateStore,null!==s){t.next=5;break}if(!h.network){t.next=5;break}return t.next=5,new Promise((function(t){h.network&&h.network.then(t),setTimeout((function(){null===s&&t()}),500)}));case 5:if(p.network.get()==l){t.next=7;break}return t.abrupt("return",{heading:e||"You Must Change Networks",description:n||"We've detected that you need to switch your wallet's network from <b>".concat(Object(i.g)(s),"</b> to <b>").concat(Object(i.g)(l),'</b> for this Dapp. <br><br> <i style="font-size: inherit; font-family: inherit;">*Some wallets may not support changing networks. If you can not change networks in your wallet you may consider switching to a different wallet.</i>'),eventCode:"networkFail",button:u||{onclick:function(){w(),f()},text:"Switch Wallet"},html:a,icon:o||i.b});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=48.99d11e36.chunk.js.map