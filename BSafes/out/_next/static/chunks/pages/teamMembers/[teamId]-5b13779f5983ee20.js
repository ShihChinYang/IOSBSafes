(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4175],{46286:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/teamMembers/[teamId]",function(){return r(7741)}])},5401:function(e,a,r){"use strict";r.d(a,{Z:function(){return Z}});var s=r(94184),t=r.n(s),n=r(67294),l=r(54728),i=r(85893);let d=n.forwardRef((e,a)=>{let{className:r,bsPrefix:s,as:n="div",...d}=e;return s=(0,l.vE)(s,"card-body"),(0,i.jsx)(n,{ref:a,className:t()(r,s),...d})});d.displayName="CardBody";let c=n.forwardRef((e,a)=>{let{className:r,bsPrefix:s,as:n="div",...d}=e;return s=(0,l.vE)(s,"card-footer"),(0,i.jsx)(n,{ref:a,className:t()(r,s),...d})});c.displayName="CardFooter";var o=r(54921);let f=n.forwardRef((e,a)=>{let{bsPrefix:r,className:s,as:d="div",...c}=e,f=(0,l.vE)(r,"card-header"),u=(0,n.useMemo)(()=>({cardHeaderBsPrefix:f}),[f]);return(0,i.jsx)(o.Z.Provider,{value:u,children:(0,i.jsx)(d,{ref:a,...c,className:t()(s,f)})})});f.displayName="CardHeader";let u=n.forwardRef((e,a)=>{let{bsPrefix:r,className:s,variant:n,as:d="img",...c}=e,o=(0,l.vE)(r,"card-img");return(0,i.jsx)(d,{ref:a,className:t()(n?"".concat(o,"-").concat(n):o,s),...c})});u.displayName="CardImg";let m=n.forwardRef((e,a)=>{let{className:r,bsPrefix:s,as:n="div",...d}=e;return s=(0,l.vE)(s,"card-img-overlay"),(0,i.jsx)(n,{ref:a,className:t()(r,s),...d})});m.displayName="CardImgOverlay";let h=n.forwardRef((e,a)=>{let{className:r,bsPrefix:s,as:n="a",...d}=e;return s=(0,l.vE)(s,"card-link"),(0,i.jsx)(n,{ref:a,className:t()(r,s),...d})});h.displayName="CardLink";var x=r(68236);let j=(0,x.Z)("h6"),v=n.forwardRef((e,a)=>{let{className:r,bsPrefix:s,as:n=j,...d}=e;return s=(0,l.vE)(s,"card-subtitle"),(0,i.jsx)(n,{ref:a,className:t()(r,s),...d})});v.displayName="CardSubtitle";let N=n.forwardRef((e,a)=>{let{className:r,bsPrefix:s,as:n="p",...d}=e;return s=(0,l.vE)(s,"card-text"),(0,i.jsx)(n,{ref:a,className:t()(r,s),...d})});N.displayName="CardText";let g=(0,x.Z)("h5"),p=n.forwardRef((e,a)=>{let{className:r,bsPrefix:s,as:n=g,...d}=e;return s=(0,l.vE)(s,"card-title"),(0,i.jsx)(n,{ref:a,className:t()(r,s),...d})});p.displayName="CardTitle";let y=n.forwardRef((e,a)=>{let{bsPrefix:r,className:s,bg:n,text:c,border:o,body:f=!1,children:u,as:m="div",...h}=e,x=(0,l.vE)(r,"card");return(0,i.jsx)(m,{ref:a,...h,className:t()(s,x,n&&"bg-".concat(n),c&&"text-".concat(c),o&&"border-".concat(o)),children:f?(0,i.jsx)(d,{children:u}):u})});y.displayName="Card";var Z=Object.assign(y,{Img:u,Title:p,Subtitle:v,Body:d,Link:h,Text:N,Header:f,Footer:c,ImgOverlay:m})},7741:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return Z}});var s=r(85893),t=r(67294),n=r(9473),l=r(11163),i=r(33353),d=r(68888),c=r(88083),o=r(76529),f=r(5401),u=r(14153),m=r(51417),h=r(53918),x=r(81011),j=r(82354),v=r.n(j),N=r(40699),g=r(84390),p=r(76800),y=r(28714);function Z(e){let a=(0,n.I0)(),r=(0,l.useRouter)(),[f,h]=(0,t.useState)(!1),[j,Z]=(0,t.useState)(!1),b=(0,n.v9)(e=>e.auth.accountVersion),k=(0,n.v9)(e=>e.auth.isLoggedIn),w=(0,n.v9)(e=>e.container.workspace),E=(0,n.v9)(e=>e.container.workspaceKeyReady),R=(0,n.v9)(e=>e.container.container),I=(0,n.v9)(e=>e.team.teamMembers),_=(0,n.v9)(e=>e.team.memberSearchValue),S=(0,n.v9)(e=>e.team.memberSearchResult),B=e=>{a((0,p.NH)({member:e}))},M=I.map((e,a)=>(0,s.jsx)(C,{member:e,handleDelete:B},a)),T=e=>{a((0,p.Lr)({member:e}))},q=()=>{a((0,p.i4)({id:_}))};return(0,t.useEffect)(()=>{let e=(e,r)=>{let{shallow:s}=r;console.log("App is changing to ".concat(e," ").concat(s?"with":"without"," shallow routing")),a((0,g.JG)()),a((0,g.rs)()),a((0,N.H5)())},s=()=>{(0,y.qu)(!1,"handleRouteChangeComplete"),a((0,g.df)())};return r.events.on("routeChangeStart",e),r.events.on("routeChangeComplete",s),()=>{r.events.off("routeChangeStart",e),r.events.off("routeChangeComplete",s)}},[]),(0,t.useEffect)(()=>{a((0,N.vB)(!1))},[k]),(0,t.useEffect)(()=>{if(k&&!E&&r.query.teamId){let e=r.query.teamId;r.query.teamId===w?(a((0,N.ef)({container:"root"})),a((0,N.vB)(!0))):("v1"===b&&(e=e.substring(0,e.length-4)),a((0,N.VM)({teamId:e,container:"root"}))),h(!0)}},[k,E,r.query.teamId]),(0,t.useEffect)(()=>{if(!f||!w||!E||"root"!==R)return;a((0,g.rs)());let e=[{_id:w},{_id:"tm:"+w}];a((0,g.rJ)(e)),a((0,p.J7)({teamId:w,pageNumber:1}))},[f,R,w,E]),(0,s.jsx)("div",{className:v().spaceBackground,children:(0,s.jsx)(x.Z,{children:(0,s.jsxs)(i.Z,{fluid:!0,children:[(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),j?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.Z,{children:(0,s.jsx)(c.Z,{children:(0,s.jsx)("h1",{className:"text-center display-5",children:"Adding Members"})})}),(0,s.jsx)(d.Z,{children:(0,s.jsx)(c.Z,{children:(0,s.jsx)("div",{className:"d-flex justify-content-center mb-3",children:(0,s.jsx)(o.Z,{variant:"light",className:v().btnCircle,onClick:()=>{Z(!1),a((0,p.J7)({pageNumber:1}))},children:(0,s.jsx)("i",{id:"1",className:"fa fa-times fa-lg ","aria-hidden":"true"})})})})}),(0,s.jsx)(d.Z,{className:"justify-content-center",children:(0,s.jsx)(c.Z,{md:8,lg:6,children:(0,s.jsx)(u.Z,{onSubmit:q,children:(0,s.jsxs)(m.Z,{className:"mb-3",children:[(0,s.jsx)(u.Z.Control,{size:"lg",type:"text",value:_,onChange:e=>{a((0,p.xy)(e.target.value))}}),(0,s.jsx)(o.Z,{variant:"link",onClick:q,children:(0,s.jsx)("i",{id:"1",className:"fa fa-search fa-lg text-dark","aria-hidden":"true"})})]})})})}),(()=>{if(S)return S.id?(0,s.jsx)(C,{member:S,handleAdd:T}):(0,s.jsx)("h1",{children:"Not Found!"})})()]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.Z,{children:(0,s.jsx)(c.Z,{children:(0,s.jsx)("h1",{className:"text-center display-5",children:"Members"})})}),(0,s.jsx)(d.Z,{children:(0,s.jsx)(c.Z,{children:(0,s.jsx)("div",{className:"d-flex justify-content-center mb-3",children:(0,s.jsx)(o.Z,{variant:"primary",className:v().btnCircle,onClick:()=>{a((0,p.r6)()),a((0,p.xy)("")),Z(!0)},children:(0,s.jsx)("i",{id:"1",className:"fa fa-plus fa-lg","aria-hidden":"true"})})})})}),M]})]})},r.pathname)})}let b=(0,t.forwardRef)(function(e,a){let{children:r,onClick:t}=e;return(0,s.jsxs)("a",{href:"",ref:a,onClick:e=>{e.preventDefault(),t(e)},children:[(0,s.jsx)("i",{className:"fa fa-ellipsis-v text-dark","aria-hidden":"true"}),r]})});function C(e){let{member:a,handleAdd:r,handleDelete:t}=e,l=(0,n.v9)(e=>e.team.activityResult);return(0,s.jsx)(d.Z,{children:(0,s.jsx)(c.Z,{xs:12,sm:{span:10,offset:1},md:{span:8,offset:2},children:(0,s.jsx)(f.Z,{children:(0,s.jsx)(f.Z.Body,{className:"p-2",children:(0,s.jsxs)("div",{children:[(0,s.jsxs)(d.Z,{children:[(0,s.jsx)(c.Z,{xs:9,children:(0,s.jsx)("h6",{className:"fs-5 display-6",children:a.id||a.memberId})}),(0,s.jsxs)(c.Z,{xs:3,children:[t&&(0,s.jsxs)(h.Z,{align:"end",className:"justify-content-end pull-right",children:[(0,s.jsx)(h.Z.Toggle,{as:b,variant:"link"}),(0,s.jsx)(h.Z.Menu,{children:(0,s.jsx)(h.Z.Item,{onClick:()=>t(a),children:"Delete"})})]}),r&&(0,s.jsx)(o.Z,{variant:"link",className:"justify-content-end pull-right border-0 text-black",onClick:()=>r(a),children:(0,s.jsx)("i",{id:"1",className:"fa fa-plus fa-lg","aria-hidden":"true"})})]})]}),l&&(0,s.jsx)(d.Z,{children:(0,s.jsx)(c.Z,{children:(0,s.jsx)("p",{className:"text-danger",children:l})})})]})})})})})}}},function(e){e.O(0,[3937,1011,2888,9774,179],function(){return e(e.s=46286)}),_N_E=e.O()}]);