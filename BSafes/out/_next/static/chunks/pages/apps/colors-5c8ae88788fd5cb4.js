(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6823],{68592:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apps/colors",function(){return s(22470)}])},5401:function(e,a,s){"use strict";s.d(a,{Z:function(){return F}});var r=s(94184),t=s.n(r),n=s(67294),l=s(54728),c=s(85893);let d=n.forwardRef((e,a)=>{let{className:s,bsPrefix:r,as:n="div",...d}=e;return r=(0,l.vE)(r,"card-body"),(0,c.jsx)(n,{ref:a,className:t()(s,r),...d})});d.displayName="CardBody";let o=n.forwardRef((e,a)=>{let{className:s,bsPrefix:r,as:n="div",...d}=e;return r=(0,l.vE)(r,"card-footer"),(0,c.jsx)(n,{ref:a,className:t()(s,r),...d})});o.displayName="CardFooter";var i=s(54921);let f=n.forwardRef((e,a)=>{let{bsPrefix:s,className:r,as:d="div",...o}=e,f=(0,l.vE)(s,"card-header"),h=(0,n.useMemo)(()=>({cardHeaderBsPrefix:f}),[f]);return(0,c.jsx)(i.Z.Provider,{value:h,children:(0,c.jsx)(d,{ref:a,...o,className:t()(r,f)})})});f.displayName="CardHeader";let h=n.forwardRef((e,a)=>{let{bsPrefix:s,className:r,variant:n,as:d="img",...o}=e,i=(0,l.vE)(s,"card-img");return(0,c.jsx)(d,{ref:a,className:t()(n?"".concat(i,"-").concat(n):i,r),...o})});h.displayName="CardImg";let u=n.forwardRef((e,a)=>{let{className:s,bsPrefix:r,as:n="div",...d}=e;return r=(0,l.vE)(r,"card-img-overlay"),(0,c.jsx)(n,{ref:a,className:t()(s,r),...d})});u.displayName="CardImgOverlay";let x=n.forwardRef((e,a)=>{let{className:s,bsPrefix:r,as:n="a",...d}=e;return r=(0,l.vE)(r,"card-link"),(0,c.jsx)(n,{ref:a,className:t()(s,r),...d})});x.displayName="CardLink";var m=s(68236);let p=(0,m.Z)("h6"),j=n.forwardRef((e,a)=>{let{className:s,bsPrefix:r,as:n=p,...d}=e;return r=(0,l.vE)(r,"card-subtitle"),(0,c.jsx)(n,{ref:a,className:t()(s,r),...d})});j.displayName="CardSubtitle";let N=n.forwardRef((e,a)=>{let{className:s,bsPrefix:r,as:n="p",...d}=e;return r=(0,l.vE)(r,"card-text"),(0,c.jsx)(n,{ref:a,className:t()(s,r),...d})});N.displayName="CardText";let v=(0,m.Z)("h5"),y=n.forwardRef((e,a)=>{let{className:s,bsPrefix:r,as:n=v,...d}=e;return r=(0,l.vE)(r,"card-title"),(0,c.jsx)(n,{ref:a,className:t()(s,r),...d})});y.displayName="CardTitle";let b=n.forwardRef((e,a)=>{let{bsPrefix:s,className:r,bg:n,text:o,border:i,body:f=!1,children:h,as:u="div",...x}=e,m=(0,l.vE)(s,"card");return(0,c.jsx)(u,{ref:a,...x,className:t()(r,m,n&&"bg-".concat(n),o&&"text-".concat(o),i&&"border-".concat(i)),children:f?(0,c.jsx)(d,{children:h}):h})});b.displayName="Card";var F=Object.assign(b,{Img:h,Title:y,Subtitle:j,Body:d,Link:x,Text:N,Header:f,Footer:o,ImgOverlay:u})},22470:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return N},monteserrat:function(){return n.a}});var r=s(85893),t=s(71046),n=s.n(t),l=s(67294),c=s(11163),d=s(33353),o=s(68888),i=s(88083),f=s(5401),h=s(76529),u=s(14153),x=s(51417),m=s(56693),p=s(81011),j=s(28714);function N(){let e=(0,c.useRouter)(),[a,s]=(0,l.useState)(""),[t,N]=(0,l.useState)("FFFFFF"),[y,b]=(0,l.useState)(!1),[F,Z]=(0,l.useState)("white"),[C,g]=(0,l.useState)(null),w=e=>{e.preventDefault()},_=a=>{if(Z(a),!C){b(!0);return}a===C&&e.push("/logIn")},k=["FFFFFF","C0C0C0","808080","000000","FF0000","800000","FFFF00","808000","00FF00","008000","00FFFF","008080","0000FF","000080","FF00FF","800080","491313","e57f3f","d4d1ca","ce555c","a44479","9e3957","962b2b","a46d51","355453","4e6041","a1b65e","a5a850","31fdc9","30e9ba","25d9ab","b8e8dc","3d7625","479227","6ec747","88e260","a536ed","f8ed5b","200867","4cd8ff","24755b","4fa06a","38ceac","ffc2d4"].map((e,a)=>(0,r.jsx)(i.Z,{xs:{span:6},sm:{span:4},md:{span:3},lg:{span:2},children:(0,r.jsx)(v,{hexCode:e,selecColor:_},a)},a)),E=()=>b(!1);return(0,l.useEffect)(()=>{let e=(0,j._L)();e&&g(e)},[]),(0,l.useEffect)(()=>{6===a.length&&N(a)},[a]),(0,r.jsxs)(p.Z,{showNaveBar:!1,showNavbarMenu:!1,showPathRow:!1,children:[(0,r.jsx)("br",{}),(0,r.jsxs)(d.Z,{className:"".concat(n().className),children:[(0,r.jsx)("p",{className:"display-2 text-center",children:"Hex Colors"}),(0,r.jsx)(o.Z,{hidden:null!==C,children:(0,r.jsx)(i.Z,{xs:{span:12,offset:0},sm:{span:8,offset:2},md:{span:6,offset:3},children:(0,r.jsxs)(f.Z,{border:"primary",children:[(0,r.jsx)(f.Z.Header,{as:"h5",children:"Note❗"}),(0,r.jsxs)(f.Z.Body,{children:[(0,r.jsx)(f.Z.Title,{children:"To start using this app -"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Tap on any color, or enter a hex number to view a specific color and tap on it."}),(0,r.jsx)("li",{children:"Once the app remembers your color, you must tap the same color next time to start using this app. And this note will disappear."}),(0,r.jsx)("li",{children:"If you forget your color, delete and re-install this app."})]})]})]})})}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{className:"text-center",children:"To view a color, please enter a 6-digit hexadecimal number."}),(0,r.jsx)(o.Z,{children:(0,r.jsx)(i.Z,{xs:{span:8,offset:2},sm:{span:6,offset:3},md:{span:4,offset:4},children:(0,r.jsx)(u.Z,{onSubmit:w,children:(0,r.jsxs)(x.Z,{className:"mb-3",children:[(0,r.jsx)(u.Z.Control,{size:"lg",type:"text",value:a,onChange:e=>{let a=e.target.value.toUpperCase();if(a.length>6)return;let r=0;for(r=0;r<a.length&&-1!=="0123456789ABCDEF".indexOf(a[r]);r++);r===a.length&&s(a)}}),(0,r.jsx)(h.Z,{variant:"link",children:(0,r.jsx)("i",{id:"1",className:"fa fa-search fa-lg text-dark","aria-hidden":"true",onClick:w})})]})})})}),(0,r.jsx)(o.Z,{children:(0,r.jsx)(i.Z,{xs:{span:8,offset:2},sm:{span:6,offset:3},md:{span:4,offset:4},children:(0,r.jsx)(f.Z,{className:"m-2",onClick:()=>_(t),children:(0,r.jsxs)(f.Z.Body,{className:"p-1",children:[(0,r.jsx)("div",{style:{height:"64px",backgroundColor:"#".concat(t)}}),t]})})})}),(0,r.jsx)(o.Z,{children:k})]}),(0,r.jsxs)(m.Z,{show:y,onHide:E,centered:!0,children:[(0,r.jsx)(m.Z.Header,{closeButton:!0,children:(0,r.jsxs)(m.Z.Title,{children:["Remember this color? ",(0,r.jsx)("span",{style:{backgroundColor:"#".concat(F)},children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0"})]})}),(0,r.jsx)(m.Z.Body,{children:"Once the app remembers your color, you must tap the same color next time to start using this app. And this note will disappear."}),(0,r.jsxs)(m.Z.Footer,{children:[(0,r.jsx)(h.Z,{variant:"secondary",onClick:E,children:"Close"}),(0,r.jsx)(h.Z,{variant:"primary",onClick:()=>{(0,j.vc)(F),g(F),b(!1),e.push("/logIn")},children:"Remember"})]})]})]})}function v(e){let{hexCode:a,selecColor:s}=e;return(0,r.jsx)(f.Z,{className:"m-2",onClick:()=>{s(a)},children:(0,r.jsxs)(f.Z.Body,{className:"p-1",children:[(0,r.jsx)("div",{style:{height:"64px",backgroundColor:"#".concat(a)}}),a.toUpperCase()]})})}},71046:function(e){e.exports={style:{fontFamily:"'__Montserrat_b1da2a', '__Montserrat_Fallback_b1da2a'",fontStyle:"normal"},className:"__className_b1da2a"}}},function(e){e.O(0,[3937,1011,2888,9774,179],function(){return e(e.s=68592)}),_N_E=e.O()}]);