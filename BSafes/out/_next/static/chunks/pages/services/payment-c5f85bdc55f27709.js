(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1335],{98284:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/payment",function(){return a(46190)}])},54568:function(e,s,a){"use strict";var t=a(94184),n=a.n(t),r=a(67294),c=a(54728),l=a(85893);let d=r.forwardRef((e,s)=>{let{bsPrefix:a,className:t,striped:r,bordered:d,borderless:i,hover:o,size:h,variant:x,responsive:u,...y}=e,j=(0,c.vE)(a,"table"),f=n()(t,j,x&&"".concat(j,"-").concat(x),h&&"".concat(j,"-").concat(h),r&&"".concat(j,"-").concat("string"==typeof r?"striped-".concat(r):"striped"),d&&"".concat(j,"-bordered"),i&&"".concat(j,"-borderless"),o&&"".concat(j,"-hover")),p=(0,l.jsx)("table",{...y,className:f,ref:s});if(u){let e="".concat(j,"-responsive");return"string"==typeof u&&(e="".concat(e,"-").concat(u)),(0,l.jsx)("div",{className:e,children:p})}return p});s.Z=d},46190:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return m}});var t=a(85893),n=a(67294),r=a(9473),c=a(11163),l=a(33353),d=a(68888),i=a(88083),o=a(14153),h=a(63397),x=a(76529),u=a(54568),y=a(72565),j=a(81011);a(71601);var f=a(37383),p=a(28714);function m(){let e,s,a;let m=(0,c.useRouter)(),g=(0,r.I0)(),[D,N]=(0,n.useState)("yearly"),w=(0,r.v9)(e=>e.auth.isLoggedIn),b=(0,r.v9)(e=>e.account.invoice),M=(0,r.v9)(e=>e.account.transactions),v=b&&b.dueTime,Z=b&&b.dues,C=b&&b.planOptions,k=b&&b.monthlyInvoice.storageUsage,E=b&&b.monthlyInvoice.requiredStorage,F=b&&b.monthlyInvoice.monthlyPrice,T=b&&b.monthlyInvoice.currency,I=b&&b.remainingDays,_=b&&b.upgradePrice,S=b&&b.waived;0===k?e="0.000 MB":k&&(e=k<1e6?(k/1e6).toFixed(3)+" MB":(k/1e9).toFixed(3)+" GB"),C&&(s=C.monthly.firstDue===C.monthly.lastDue?(0,y.default)(new Date(C.monthly.firstDue),"MM/dd/yyyy"):"".concat((0,y.default)(new Date(C.monthly.firstDue),"MM/dd/yyyy")," ... ").concat((0,y.default)(new Date(C.monthly.lastDue),"MM/dd/yyyy")),a=C.yearly.firstDue===C.yearly.lastDue?"".concat((0,y.default)(new Date(C.yearly.firstDue),"MM/dd/yyyy")):"".concat((0,y.default)(new Date(C.yearly.firstDue),"MM/dd/yyyy")," ... ").concat((0,y.default)(new Date(C.yearly.lastDue),"MM/dd/yyyy"))),(0,p.qu)(!0,"dues",Z);let U=Z&&0!==Z.length&&Z.reverse().map((e,s)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,y.default)(new Date(e.dueTime),"MM/dd/yyyy")}),(0,t.jsx)("td",{children:e.monthlyInvoice.requiredStorage}),(0,t.jsxs)("td",{children:["$",e.monthlyInvoice.monthlyPrice]})]},s)),P=0!==M.length&&M.map((e,s)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,y.default)(new Date(e.time),"MM/dd/yyyy")}),(0,t.jsx)("td",{children:"$".concat(e.amount," ").concat(e.currency)}),(0,t.jsxs)("td",{children:[e.requiredStorage,", ",e.plan]}),"upgrade"===e.plan?(0,t.jsx)("td",{}):(0,t.jsx)("td",{children:e.firstDue===e.lastDue?(0,y.default)(new Date(e.firstDue),"MM/dd/yyyy"):"".concat((0,y.default)(new Date(e.firstDue),"MM/dd/yyyy")," - ").concat((0,y.default)(new Date(e.lastDue),"MM/dd/yyyy"))})]},s)),$=e=>{N(e.target.value)};return(0,n.useEffect)(()=>{w&&(g((0,f.rC)(null)),g((0,f.OC)()),g((0,f.c1)()))},[w]),(0,t.jsx)(j.Z,{children:(0,t.jsxs)(l.Z,{className:"px-4",children:[(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),Z&&(0,t.jsxs)("div",{children:[(0,t.jsx)(d.Z,{children:(0,t.jsxs)(i.Z,{xs:{span:12,offset:0},md:{span:8,offset:2},style:{border:"solid",paddingTop:"12px",backgroundColor:"#FEF9E7"},children:[(0,t.jsxs)("p",{className:"fw-light",children:[(0,t.jsx)("i",{className:"fa fa-dot-circle-o","aria-hidden":"true"})," Your current storage usage is ",(0,t.jsx)("span",{className:"fw-bold",children:e}),". "]}),(0,t.jsxs)("p",{className:"fw-light",children:[(0,t.jsx)("i",{className:"fa fa-dot-circle-o","aria-hidden":"true"})," You need the ",(0,t.jsx)("span",{className:"fw-bold",children:E})," storage, ",(0,t.jsxs)("span",{className:"fw-bold",children:["$",F," USD"]})," per month."]}),0===Z.length&&(0,t.jsxs)("p",{className:"fw-light",children:[(0,t.jsx)("i",{className:"fa fa-dot-circle-o","aria-hidden":"true"})," Next due date is ",(0,t.jsx)("span",{className:"fw-bold",children:(0,y.default)(new Date(v),"MM/dd/yyyy")})]})]})}),0!==Z.length&&(0,t.jsx)(d.Z,{children:(0,t.jsxs)(i.Z,{xs:{span:12,offset:0},md:{span:8,offset:2},style:{border:"solid",paddingTop:"12px",backgroundColor:"#EBF5FB"},children:[(0,t.jsx)("hr",{}),(0,t.jsx)("h1",{children:"Invoice"}),(0,t.jsxs)(u.Z,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Date"}),(0,t.jsx)("th",{children:"Storage(GB)"}),(0,t.jsx)("th",{children:"Due(USD)"})]})}),(0,t.jsx)("tbody",{children:U})]}),(0,t.jsx)("hr",{}),(0,t.jsxs)("h1",{children:["Total : ","$".concat(C.monthly.totalDues," USD")]})]})}),0!==Z.length&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(d.Z,{children:(0,t.jsxs)(i.Z,{xs:{span:12,offset:0},md:{span:8,offset:2},children:[(0,t.jsx)(o.Z,{children:(0,t.jsxs)(o.Z.Group,{controlId:"plan",children:[(0,t.jsx)("hr",{}),(0,t.jsxs)(h.Z,{children:[(0,t.jsx)(h.Z.Input,{type:"radio",value:"yearly",onChange:$,checked:"yearly"===D}),(0,t.jsx)(h.Z.Label,{children:(0,t.jsx)("h5",{className:"px-3",style:{backgroundColor:"#48C9B0"},children:"Pay yearly, get 2 months free."})})]}),(0,t.jsx)("br",{}),(0,t.jsx)("h4",{className:"px-4",children:C&&"$".concat(C.yearly.totalDues," USD.")}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:C&&"For ".concat(a,".")}),(0,t.jsx)("p",{children:C&&"Next due date:  ".concat((0,y.default)(new Date(C.yearly.nextDueTime),"MM/dd/yyyy"))}),(0,t.jsx)("hr",{}),(0,t.jsxs)(h.Z,{children:[(0,t.jsx)(h.Z.Input,{type:"radio",value:"monthly",onChange:$,checked:"monthly"===D}),(0,t.jsx)(h.Z.Label,{children:(0,t.jsx)("h5",{className:"px-3",style:{backgroundColor:"#F7DC6F"},children:"Pay monthly."})})]}),(0,t.jsx)("br",{}),(0,t.jsx)("h4",{className:"px-4",children:C&&"$".concat(C.monthly.totalDues," USD.")}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:C&&"For ".concat(s,".")}),(0,t.jsx)("p",{children:C&&"Next due date:  ".concat((0,y.default)(new Date(C.monthly.nextDueTime),"MM/dd/yyyy"))}),(0,t.jsx)("hr",{})]})}),(0,t.jsx)("div",{className:"text-center",children:(0,t.jsx)(x.Z,{onClick:e=>{g((0,f.rC)(D)),m.push("/services/checkout")},children:"Checkout"})})]})})})]}),_&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(d.Z,{children:(0,t.jsxs)(i.Z,{xs:{span:12,offset:0},md:{span:8,offset:2},style:{border:"solid",paddingTop:"12px",backgroundColor:"#FEF9E7"},children:[(0,t.jsxs)("p",{className:"fw-light",children:[(0,t.jsx)("i",{className:"fa fa-dot-circle-o","aria-hidden":"true"})," Your current storage usage is ",(0,t.jsx)("span",{className:"fw-bold",children:e}),". "]}),(0,t.jsxs)("p",{className:"fw-light",children:[(0,t.jsx)("i",{className:"fa fa-dot-circle-o","aria-hidden":"true"})," You need the ",E," storage, ",(0,t.jsxs)("span",{className:"fw-bold",children:["$",F]})," USD per month."]}),(0,t.jsxs)("p",{className:"fw-light",children:[(0,t.jsx)("i",{className:"fa fa-dot-circle-o","aria-hidden":"true"})," Next due date is ",(0,t.jsx)("span",{className:"fw-bold",children:(0,y.default)(new Date(v),"MM/dd/yyyy")})]}),(0,t.jsxs)("p",{className:"fw-light",children:[(0,t.jsx)("i",{className:"fa fa-dot-circle-o","aria-hidden":"true"})," Upgrade price for the remaining ",(0,t.jsx)("span",{className:"fw-bold",children:I})," days until the next due date - "]}),(0,t.jsx)("h5",{className:"p-3",children:"$".concat(_," ").concat(T.toUpperCase())}),S?(0,t.jsx)("h5",{children:"\uD83D\uDE42 The fee is waived because it is less than one dollar."}):(0,t.jsx)(d.Z,{children:(0,t.jsx)(i.Z,{sm:{span:8,offset:2},className:"text-center",children:(0,t.jsx)(x.Z,{onClick:e=>{g((0,f.rC)("upgrade")),m.push("/services/checkout")},children:"Upgrade"})})})]})})}),(0,t.jsx)("br",{}),(0,t.jsx)(d.Z,{children:(0,t.jsxs)(i.Z,{xs:{span:12,offset:0},md:{span:8,offset:2},style:{border:"solid",paddingTop:"12px",backgroundColor:"#EAEDED",overflow:"auto"},children:[(0,t.jsx)("h1",{children:"Transaction History"}),(0,t.jsxs)(u.Z,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Date"}),(0,t.jsx)("th",{children:"Amount"}),(0,t.jsx)("th",{children:"Plan"}),(0,t.jsx)("th",{children:"Paid Dues"})]})}),0!==M.length&&(0,t.jsx)("tbody",{children:P})]}),0===M.length&&(0,t.jsx)("p",{children:"Empty"})]})}),(0,t.jsx)("br",{})]})})}}},function(e){e.O(0,[3937,1011,2888,9774,179],function(){return e(e.s=98284)}),_N_E=e.O()}]);