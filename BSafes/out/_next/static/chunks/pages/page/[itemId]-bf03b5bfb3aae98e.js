(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7289],{10891:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/[itemId]",function(){return n(7202)}])},7202:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var i=n(85893),a=n(67294),r=n(11163),s=n(9473),c=n(35005),o=n(38712),u=n.n(o),l=n(41975),d=n(51769),f=n(32132),h=n(69563),p=n(37865),g=n(85056),k=n(93530),x=n(24638),m=n(49411),v=n(49486),N=n(51892);let C=-1!=="default;".indexOf("hide");function j(){(0,v.qu)(!1,"Rendering item");let e=(0,r.useRouter)(),t=(0,s.I0)(),[n,o]=(0,a.useState)(!1),j=(0,s.v9)(e=>e.page.changingPage),w=(0,s.v9)(e=>e.page.id),_=(0,s.v9)(e=>e.page.container),b=(0,s.v9)(e=>e.page.position);async function I(n){if((0,v.qu)(!1,"gotoAnotherItem ".concat(j," ").concat(w," ").concat(_," ").concat(b)),j||!(w||!_||!b))return;(0,m.cD)(!0);let i,a=null,r=e=>{let t;switch(e.split(":")[0]){case"b":t="/box/"+e;break;case"f":t="/folder/"+e;break;case"p":t="/page/"+e}return t};switch(n){case"-1":try{i=await (0,N.kN)("getPreviousItem",_,b,t),"EndOfContainer"===i?o(!0):a=r(i)}catch(e){}break;case"+1":try{i=await (0,N.kN)("getNextItem",_,b,t),"EndOfContainer"===i?o(!0):a=r(i)}catch(e){}}(0,v.qu)(!1,"setNavigationInSameContainer ..."),(0,x.RB)(!0),a?e.push(a):(0,m.cD)(!1)}return(0,v.qu)(!1,"router.query.itemId: ",e.query.itemId),(0,i.jsxs)("div",{className:u().pageBackground,children:[(0,i.jsx)(d.Z,{children:(0,i.jsxs)(f.Z,{itemId:e.query.itemId,children:[(0,i.jsx)("br",{}),C&&(0,i.jsx)(c.Z,{variant:"warning",onClick:()=>{e.push("/safe")},className:"float-end",style:{textTransform:"uppercase",color:"black"},children:"Hide This page"}),!C&&(0,i.jsx)(h.Z,{onCoverClicked:()=>{if(!_)return;let t=(0,N.Eo)(_).converLink;e.push(t)},onContentsClicked:()=>{if(!_)return;let t=(0,N.Eo)(_).contentsLink;e.push(t)}}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:u().pagePanel,children:[(0,i.jsx)(p.Z,{}),(0,i.jsx)(g.Z,{})]}),(0,i.jsx)(k.Z,{onNextClicked:()=>{(0,v.qu)(!1,"Next item "),I("+1")},onPreviousClicked:()=>{(0,v.qu)(!1,"Previous item "),I("-1")},showAlert:n,alertClosed:()=>o(!1)})]})}),(0,i.jsx)(l.Z,{})]})}}},function(e){e.O(0,[571,6760,6743,2890,416,1769,9706,6536,3362,9774,2888,179],function(){return e(e.s=10891)}),_N_E=e.O()}]);