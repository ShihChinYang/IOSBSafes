(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7545],{48610:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/dataCenterSetup",function(){return n(35098)}])},35098:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return j}});var a=n(85893),t=n(67294),r=n(9473),c=n(11163),i=n(34051),d=n(31555),l=n(35005),o=n(10682),h=n(27977),u=n(51769),x=n(17384);function j(){let e=(0,r.I0)(),s=(0,c.useRouter)(),n=(0,r.v9)(e=>e.account.dataCenterModal),j=(0,r.v9)(e=>e.account.dataCenters),m=(0,r.v9)(e=>e.account.currentDataCenter),f=(0,r.v9)(e=>e.auth.isLoggedIn),p=s=>{confirm("Are you sure to select ".concat(s.location," as your data center?"))&&e((0,x.VJ)({dataCenter:s}))};return(0,t.useEffect)(()=>{f&&e((0,x.jQ)())},[f]),(0,a.jsx)(u.Z,{showNaveBar:!n,showPathRow:!n,children:(0,a.jsx)(o.Z,{style:{border:"solid"},children:(0,a.jsxs)("div",{className:"mt-2 p-1",children:[(0,a.jsx)(i.Z,{children:(0,a.jsxs)(d.Z,{children:[(0,a.jsxs)("h2",{children:[(0,a.jsx)("i",{className:"fa fa-globe","aria-hidden":"true"})," Select Your Preferred Data Center"]}),(0,a.jsx)("hr",{}),(0,a.jsx)("p",{children:"You can access your data much faster with a data center nearby."})]})}),(0,a.jsx)(i.Z,{children:(0,a.jsxs)(d.Z,{children:[(0,a.jsx)("p",{children:"Your current data center is in"}),(0,a.jsx)("h1",{className:"text-center",children:(0,a.jsx)(h.Z,{bg:"success",children:m&&m.location})}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{hidden:!n,className:"text-center",children:[(0,a.jsx)(l.Z,{onClick:()=>{s.push("/safe")},children:"Accept"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]}),(0,a.jsx)("p",{children:"You can change to a different location by clicking on it."})]})}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(d.Z,{children:j&&j.map((e,s)=>(0,a.jsxs)("div",{className:"mb-2 mt-4",children:[(0,a.jsx)("div",{children:(0,a.jsx)("h5",{children:e.continent})}),(0,a.jsx)("hr",{className:"mt-0"}),(0,a.jsx)("div",{className:"d-flex flex-wrap",children:e.dataCenters.map((e,s)=>(0,a.jsx)("div",{className:"mx-2",style:{maxWidth:"9rem"},children:(0,a.jsxs)(l.Z,{size:"md",variant:e.id===m.id?"success":"secondary",disabled:e.id===m.id,className:"text-capitalize my-2",onClick:()=>p(e),children:[e.location,(0,a.jsx)("div",{style:{fontSize:"x-small",position:"absolute",right:"5px",bottom:"0px"},children:e.name})]})},s))})]},s))})})]})})})}},27977:function(e,s,n){"use strict";var a=n(94184),t=n.n(a),r=n(67294),c=n(76792),i=n(85893);let d=r.forwardRef(({bsPrefix:e,bg:s="primary",pill:n=!1,text:a,className:r,as:d="span",...l},o)=>{let h=(0,c.vE)(e,"badge");return(0,i.jsx)(d,{ref:o,...l,className:t()(r,h,n&&"rounded-pill",a&&`text-${a}`,s&&`bg-${s}`)})});d.displayName="Badge",s.Z=d}},function(e){e.O(0,[6760,1769,9774,2888,179],function(){return e(e.s=48610)}),_N_E=e.O()}]);