(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1769],{51769:function(e,a,t){"use strict";t.d(a,{Z:function(){return U}});var s=t(85893),n=t(67294),r=t(9473),i=t(11163),o=t(48250),l=t(43998),c=t(23144),d=t(24214),_=t(44874),f=t(10682),h=t(6763),u=t(35005),m=t(18296),x=t(22920);t(51691);var p=t(80567),g=t(42298),B=t(34051),v=t(31555),b=t(26699),S=t(38712),j=t.n(S),y=t(49486),k=t(94882);let P=t(22079),C=t(27856);function Z(){let e=(0,i.useRouter)(),a=(0,r.v9)(e=>e.container.workspaceName),t=(0,r.v9)(e=>e.container.workspaceKey),o=(0,r.v9)(e=>e.container.workspaceKeyReady),l=(0,r.v9)(e=>e.page.aborted),c=(0,r.v9)(e=>e.page.itemPath),[d,_]=(0,n.useState)([]),u=d.map((a,t)=>t!==d.length-1?(0,s.jsxs)(b.Z.Item,{onClick:()=>e.push(a.link),active:!1,children:[a.icon&&(0,s.jsx)("i",{className:"".concat(a.icon," px-1")}),a.title]},t):(0,s.jsxs)(b.Z.Item,{active:!0,children:[a.icon&&(0,s.jsx)("i",{className:"".concat(a.icon," px-1")}),a.title]},t)),m=(()=>{let e=[];for(let a=d.length-1;a>=0;a--){let t=d[a];"u"!==t.type&&"p"!==t.type&&"np"!==t.type&&"dp"!==t.type&&e.push((0,s.jsxs)(h.Z.Item,{href:t.link,target:"_blank",children:[t.icon&&(0,s.jsx)("i",{className:"".concat(t.icon," px-1")}),t.title]},a))}return e})();return(0,n.useEffect)(()=>{!l&&c&&o&&((0,y.qu)(!1,"itemPath && workspaceKeyReady"),_(c.map(e=>{let s,n,r,i,o,l,c,d;let _=e._id.split(":")[0];switch(_){case"u":s="",l=a,n="/safe";break;case"t1":s="",l=a,n="/team/"+e._id.slice(0,-4);break;case"tm":s="fa fa-users",l="Members",n="/teamMembers/"+e._id;break;case"ac":s="fa fa-tasks",l="Activities",n="/activities/"+e._id;break;case"b":s="fa fa-archive",n="/box/contents/"+e._id;break;case"f":s="fa fa-folder-o",n="/folder/contents/"+e._id;break;case"n":s="fa fa-book",n="/notebook/contents/"+e._id;break;case"d":s="fa fa-calendar",n="/diary/contents/"+e._id;break;case"p":s="fa fa-file-text-o",n="/page/"+e._id;break;case"np":s="fa fa-file-text-o",n="/notebook/p/"+e._id;break;case"dp":s="fa fa-file-text-o",n="/diary/p/"+e._id;break;case"t":s="fa fa-trash",n="/trashBox/"+e._id}if("u"===_||"t1"===_||"t"===_||"tm"===_||"ac"===_);else if("np"===_)l="Page: "+e._id.split(":").pop();else if("dp"===_){let a=e._id.split(":").pop(),t=(0,p.default)(a,"yyyy-LL-dd",new Date);l=(0,g.default)(t,"EEEE, LLL. dd, yyyy")}else try{e._source.envelopeIV&&e._source.ivEnvelope&&e._source.ivEnvelopeIV?(c=(0,k.Ag)(P.util.decode64(e._source.keyEnvelope),t,P.util.decode64(e._source.envelopeIV)),d=(0,k.Ag)(P.util.decode64(e._source.ivEnvelope),t,P.util.decode64(e._source.ivEnvelopeIV))):c=(0,k.Ag)(P.util.decode64(e._source.keyEnvelope),t),e._source.title?(r=(0,k.Ag)(P.util.decode64(e._source.title),c,d),i=P.util.decodeUtf8(r),i=C.sanitize(i),(o=document.createElement("span")).innerHTML=i,l=o.textContent||o.innerText):l=""}catch(e){l="Error!"}return{type:_,title:l,icon:s,link:n}})))},[l,c,o]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(f.Z,{fluid:!0,children:(0,s.jsxs)(B.Z,{children:[(0,s.jsx)(v.Z,{xs:10,md:11,className:"".concat(j().itemPath," rounded-end"),children:(0,s.jsxs)(b.Z,{className:"".concat(j().itemPathBreadcrumb),children:[(0,s.jsxs)(b.Z.Item,{onClick:()=>e.push("/teams"),active:!1,className:"".concat(j().teamsPathItem),linkProps:{className:j().teamsPathLink},children:[(0,s.jsx)("i",{className:"fa fa-building","aria-hidden":"true"})," Spaces "]}),u]})}),(0,s.jsx)(v.Z,{xs:2,md:1,children:(0,s.jsxs)(h.Z,{align:"end",className:"justify-content-end pull-right",children:[(0,s.jsx)(h.Z.Toggle,{size:"sm",variant:"primary",bsPrefix:"px-3 py-2",children:(0,s.jsx)("span",{children:(0,s.jsx)("i",{className:"fa fa-plus","aria-hidden":"true"})})}),(0,s.jsxs)(h.Z.Menu,{children:[m,(0,s.jsx)(h.Z.Item,{href:"/teams",target:"_blank",children:(0,s.jsx)("span",{className:"fw-bold",children:"Spaces"})}),(0,s.jsx)(h.Z.Item,{href:"/safe",target:"_blank",children:(0,s.jsx)("span",{className:"fw-bold",children:"Personal"})})]})]})})]})})})}var N=t(18695),I=t(16518),w=t(32171),T=t(13137),R=t(76515),L=t(24638);function F(){let e=(0,i.useRouter)(),a=(0,r.I0)(),[t,o]=(0,n.useState)(!1),[l,c]=(0,n.useState)(!1),[d,_]=(0,n.useState)(!1),[f,h]=(0,n.useState)(""),[m,x]=(0,n.useState)(null),p=(0,r.v9)(e=>e.container.selectedItems),g=(0,r.v9)(e=>e.container.workspace),S=(0,r.v9)(e=>e.container.container);(0,r.v9)(e=>e.container.items);let k=(0,r.v9)(e=>e.container.containersList),P=(0,r.v9)(e=>e.container.containersPerPage),C=(0,r.v9)(e=>e.container.containersPageNumber),Z=(0,r.v9)(e=>e.container.containersTotal),F=(0,r.v9)(e=>e.page.itemPath),M=!e.asPath.includes("/trashBox/")&&p&&p.length>0,A=(0,n.useRef)(null),E=e=>{let s=m.findIndex(a=>a.id===e.id);console.log(s),s>=0?x(m.slice(0,s+1)):x([...m,{title:e.title,id:e.id}]),a((0,L.ei)({container:e.id,boxOnly:t,pageNumber:1}))},D=async()=>{let e=JSON.parse(JSON.stringify(F)),t=!1;1===p.length&&p[0].fromTopControlPanel&&(t=!0,e.splice(-1));let s={space:g,items:p,targetItem:m[m.length-1].id,sourceContainersPath:JSON.stringify(e.map(e=>e._id)),targetContainersPath:JSON.stringify(m.map(e=>e.id))};try{a((0,L.Xy)({action:"dropItemsInside",fromTopControlPanel:t,payload:s})),c(!1)}catch(e){(0,y.qu)(!1,"Moving items failed.")}},q=async()=>{let e=S;"root"===e&&(e=g);let t=JSON.parse(JSON.stringify(F)),s=!1;1===p.length&&p[0].fromTopControlPanel&&(s=!0,t.splice(-1));let n={items:p,targetSpace:g,originalContainer:e,sourceContainersPath:JSON.stringify(t.map(e=>e._id))};try{a((0,L.$6)({fromTopControlPanel:s,payload:n})),_(!1),h("")}catch(e){(0,y.qu)(!1,"Trashing items failed.")}},O=()=>{h(""),_(!1)};return(0,n.useEffect)(()=>{x([{title:"Top",id:g}])},[g]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(I.Z,{in:M,children:(0,s.jsx)(B.Z,{className:j().itemsToolbar,children:(0,s.jsx)(v.Z,{xs:12,sm:{span:8,offset:2},children:(0,s.jsxs)(B.Z,{children:[(0,s.jsx)(v.Z,{xs:{span:3,offset:3},sm:{span:2,offset:6},children:(0,s.jsx)("div",{className:"text-center",children:(0,s.jsxs)(u.Z,{size:"xs",variant:"light",className:"m-0 py-0 ".concat(j().toolbarButton),id:"moveItemsBtn",onClick:()=>{c(!0);let e=p.filter(e=>"P"!==e.itemPack.type),t=!1;e.length>0&&(t=!0),o(t),a((0,L.ei)({container:g,boxOnly:t,pageNumber:1}))},children:[(0,s.jsx)("i",{className:"fa fa-2x fa-hand-o-right text-white","aria-hidden":"true"}),(0,s.jsx)("h6",{className:"text-center m-0 text-white text-capitalize",children:"Move"})]})})}),(0,s.jsx)(v.Z,{xs:3,sm:2,children:(0,s.jsx)("div",{className:"text-center",children:(0,s.jsxs)(u.Z,{size:"xs",variant:"light",className:"m-0 py-0 ".concat(j().toolbarButton),id:"trashItemsBtn",onClick:()=>{_(!0)},children:[(0,s.jsx)("i",{className:"fa fa-2x fa-trash text-white","aria-hidden":"true"}),(0,s.jsx)("h6",{className:"text-center m-0 text-white text-capitalize",children:"Trash"})]})})}),(0,s.jsx)(v.Z,{xs:3,sm:2,children:(0,s.jsx)("div",{className:"text-center",children:(0,s.jsxs)(u.Z,{size:"xs",variant:"light",className:"m-0 py-0 ".concat(j().toolbarButton),id:"deselectItems",onClick:()=>{a((0,L.x_)())},children:[(0,s.jsx)("i",{className:"fa fa-2x fa-remove text-white","aria-hidden":"true"}),(0,s.jsx)("h6",{className:"text-center m-0 text-white text-capitalize",children:"Cancel"})]})})})]})})})}),(0,s.jsxs)(w.Z,{show:l,onHide:()=>{c(!1)},children:[(0,s.jsx)(w.Z.Header,{closeButton:!0,children:(0,s.jsx)(w.Z.Title,{children:"Move items to"})}),(0,s.jsxs)(w.Z.Body,{children:[(0,s.jsx)(b.Z,{children:m&&m.map((e,a)=>(0,s.jsx)(b.Z.Item,{active:a===m.length-1,onClick:()=>E(e),children:e.title},e.title+a))}),(0,s.jsx)(N.Z,{children:k.flatMap(e=>{let a="";return p.find(a=>a===e.id)?[]:(e.id.startsWith("f")?a="fa fa-folder":e.id.startsWith("b")&&(a="fa fa-archive"),(0,s.jsxs)(N.Z.Item,{action:!0,onClick:()=>E(e),className:"pt-3 pb-3",children:[(0,s.jsx)("i",{className:a+" me-2 fs-5 fw-light","aria-hidden":"true"}),(0,s.jsx)("em",{className:"fs-5 fw-light",children:e.title})]},e.id))})}),Z>C*P&&(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)(u.Z,{variant:"link",className:"text-center",size:"sm",onClick:()=>{a((0,L.ei)({container:m[m.length-1].id,boxOnly:t,pageNumber:C+1}))},children:"More"})})]}),(0,s.jsx)(w.Z.Footer,{children:(0,s.jsx)(u.Z,{variant:"primary",size:"sm",onClick:D,children:"Drop"})})]}),(0,s.jsx)(w.Z,{show:d,onEntered:()=>{A.current.focus()},onHide:O,children:(0,s.jsxs)(w.Z.Body,{children:[(0,s.jsx)("h3",{children:"Are you sure?"}),(0,s.jsx)(T.Z,{children:(0,s.jsx)(R.Z,{className:"mb-3",children:(0,s.jsx)(T.Z.Control,{ref:A,size:"lg",type:"text",value:f,onChange:e=>h(e.target.value),placeholder:"Yes"})})}),(0,s.jsx)(u.Z,{variant:"primary",className:"pull-right",size:"md",onClick:q,disabled:"Yes"!==f,children:"Trash"}),(0,s.jsx)(u.Z,{variant:"light",className:"pull-right",size:"md",onClick:O,children:"Cancel"})]})})]})}var M=t(95774);function A(){let e=(0,r.v9)(e=>e.container.movingItemsTask);return(0,s.jsx)(s.Fragment,{children:e&&(0,s.jsx)("div",{className:"".concat(j().itemsMovingProgress),children:(0,s.jsx)(M.Ip,{value:60,text:"".concat(e.completed,"/").concat(e.numberOfItems),background:!0,backgroundPadding:6,styles:(0,M.y3)({backgroundColor:"rgba(0, 0, 0, 0.5)",textColor:"#fff",pathColor:"#fff",trailColor:"transparent"})})})})}function E(e){let{upgradeRequired:a=!1}=e,t=(0,i.useRouter)(),n=(0,r.v9)(e=>e.account.nextDueTime),o=null;n&&(o=(0,g.default)(n,"MMMM do"));let l=()=>{t.push("/services/payment")};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(_.Z,{show:!0,placement:"bottom",scroll:!0,backdrop:!1,style:{backgroundColor:"#fdf1bc",zIndex:"20000"},children:[(0,s.jsx)("div",{style:{height:"1px",backgroundColor:"grey"}}),!a&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_.Z.Header,{children:(0,s.jsx)(_.Z.Title,{children:o&&(0,s.jsx)(s.Fragment,{children:"Due on ".concat(o,".")})})}),(0,s.jsxs)(_.Z.Body,{children:[o&&(0,s.jsx)("p",{children:"Hello, just wanted to remind you that your BSafes account was due on ".concat(o,". Please make your payment as soon as possible.")}),(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)(u.Z,{onClick:l,children:"Pay"})})]})]}),a&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_.Z.Header,{children:(0,s.jsx)(_.Z.Title,{children:"Upgrade Required"})}),(0,s.jsxs)(_.Z.Body,{children:[(0,s.jsx)("p",{children:"Hello, just wanted to remind you that your cuurent storage usage exceeds your storage quota. Please upgrade as soon as possible."}),(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)(u.Z,{onClick:l,children:"Upgrade"})})]})]})]})})}function D(e){let{upgradeRequired:a=!1,suspended:t=!1,overflow:n=!1}=e;(0,i.useRouter)();let o=(0,r.v9)(e=>e.account.nextDueTime);return o&&(0,g.default)(o,"MMMM do"),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(_.Z,{show:!0,placement:"bottom",scroll:!0,backdrop:!1,style:{backgroundColor:"#fdf1bc",zIndex:"20000"},children:[(0,s.jsx)("div",{style:{height:"1px",backgroundColor:"grey"}}),a&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_.Z.Header,{children:(0,s.jsx)(_.Z.Title,{children:"Upgrade Required"})}),(0,s.jsxs)(_.Z.Body,{children:[(0,s.jsxs)("p",{children:["Hello, just wanted to remind you that your cuurent storage usage exceeds your storage quota. Please visit the"," ",(0,s.jsx)("a",{href:"/external/payment",children:"payment page"}),"."]}),(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)(u.Z,{href:"/external/payment",children:"Go"})})]})]}),t&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_.Z.Header,{children:(0,s.jsx)(_.Z.Title,{children:"Pending Dues"})}),(0,s.jsxs)(_.Z.Body,{children:[(0,s.jsxs)("p",{children:["Hello, you may have pending dues. Please visit the"," ",(0,s.jsx)("a",{href:"/external/payment",children:"payment page"}),"."]}),(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)(u.Z,{href:"/external/payment",children:"Go"})})]})]}),n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_.Z.Header,{children:(0,s.jsx)(_.Z.Title,{children:"Upgrade Required"})}),(0,s.jsxs)(_.Z.Body,{children:[(0,s.jsxs)("p",{children:["Hello, you might have outstanding payments due to exceeding your storage quota. Please visit the"," ",(0,s.jsx)("a",{href:"/external/payment",children:"payment page"}),"."]}),(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)(u.Z,{href:"/external/payment",children:"Go"})})]})]})]})})}t(85443);var q=t(43385),O=t(40606),W=t(17384),H=t(58935);let z=-1!=="default;".indexOf("hide");var U=e=>{let{children:a,publicPage:t=!1,publicHooks:p=null,showNaveBar:g=!0,showNavbarMenu:B=!0,showPathRow:v=!0}=e;(0,y.qu)(!1,"Rendering ContentPageLayout"),o.E.getSafeAreaInsets().then(e=>{let{insets:a}=e;(0,y.qu)(!0,a)}),o.E.getStatusBarHeight().then(e=>{let{statusBarHeight:a}=e;(0,y.qu)(!0,"statusbarHeight: ",a)});let b=(0,i.useRouter)(),S=(0,r.I0)(),[k,P]=(0,n.useState)(null),C=(0,r.v9)(e=>e.account.accountState);(0,y.qu)(!0,"accountState: ",C);let N=(0,r.v9)(e=>e.account.activity),I=(0,r.v9)(e=>e.auth.activity),w=(0,r.v9)(e=>e.auth.activityErrors),T=(0,r.v9)(e=>e.auth.activityErrorCodes),R=(0,r.v9)(e=>e.v1Account.activity),L=(0,r.v9)(e=>e.team.activity),M=(0,r.v9)(e=>e.container.activity),U=(0,r.v9)(e=>e.page.activity),K=(0,r.v9)(e=>e.auth.preflightReady),Y=(0,r.v9)(e=>e.auth.localSessionState),J=(0,r.v9)(e=>e.auth.v2NextAuthStep),V=(0,r.v9)(e=>e.auth.accountVersion),X=(0,r.v9)(e=>e.auth.memberId),G=(0,r.v9)(e=>e.auth.isLoggedIn),Q=(0,r.v9)(e=>e.auth.displayName),$=(0,r.v9)(e=>e.v1Account.nextAuthStep),ee=(0,r.v9)(e=>e.container.workspaceName),ea=!b.asPath.startsWith("/logIn")&&!b.asPath.startsWith("/services/")&&!b.asPath.startsWith("/apps/"),et=e=>{S((0,H.vK)())},es=e=>{S((0,H.Ly)(null)),b.asPath!==e&&((0,y.qu)(!0,"router.push: , ".concat(e,", state:").concat(JSON.stringify(Y))),b.push(e))},en=e=>{P(e)},er=e=>"/"===e||e.startsWith("/logIn")||e.startsWith("/keySetup")||e.startsWith("/n/")||e.startsWith("/v1/"),ei=e=>!("/"===e||e.startsWith("/public/")||e.startsWith("/apps/")||e.startsWith("/logIn")||"/keySetup"===e||e.startsWith("/n/")),eo=()=>{en("/apps/bsafes")},el=()=>{en("/apps/bsafes")},ec=e=>{x.Am.error(e,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored",toastId:"customId"})},ed=()=>{if((0,y.qu)(!0,"localSessionStateChanged(): preflightReady:".concat(K,", state: ").concat(JSON.stringify(Y),", isLoggedIn:").concat(G)),K&&Y.sessionExists){if(Y.unlocked){if(G){er(b.asPath)&&("v1"===V?en("/teams"):en("/safe"));return}"v1"===V?en("/teams"):en("/safe");return}if(G){S((0,O.k4)()),S((0,O.eT)()),"v1"===V&&en("/v1/keyEnter");return}switch(Y.authState){case"MFARequired":"v1"===V?en("/v1/extraMFA"):en("/services/mfa");break;case"KeyRequired":en("/v1/keyEnter");break;default:S((0,O.By)(!1)),S((0,O.Br)({action:"KeyRequired"}))}return}if(!Y.sessionExists){if(Y.unlocked){(0,y.qu)(!0,"Error: It should never happen");return}K&&G?(S((0,O.k4)()),S((0,O.eT)()),"v1"===V?(S((0,H.Cz)()),en("/")):el()):ei(b.asPath)&&eo()}};return(0,n.useEffect)(()=>{(0,y.qu)(!0,"".concat(b.asPath," is loaded"))},[b.asPath]),(0,n.useEffect)(()=>{S((0,O.By)(!1)),S((0,W.JC)(null)),(0,y.qu)(!0,"Calling preflight, isLoggedIn",G),S((0,O.Br)());let e=(e,a)=>{let{shallow:t}=a;(0,y.qu)(!0,"Route is going to change ..."),S((0,O.By)(!1)),S((0,O.t$)(null))};return b.events.on("routeChangeStart",e),()=>{b.events.off("routeChangeStart",e)}},[]),(0,n.useEffect)(()=>{K&&S((0,O.HQ)())},[K]),(0,n.useEffect)(()=>{k&&b.asPath!==k&&es(k)},[k]),(0,n.useEffect)(()=>{Y&&ed()},[Y]),(0,n.useEffect)(()=>{if(!J)return;(0,y.qu)(!0,"route v2NextAuthStep: ",J.step);let e=null;switch(J.step){case"Home":if("/"===b.asPath)break;e="/";break;case"MFARequired":e="/services/mfa"}S((0,O.kE)(null)),e&&b.asPath!==e&&en(e)},[J]),(0,n.useEffect)(()=>{if(!$)return;(0,y.qu)(!0,"route nextAuthStep: ",$.step);let e=null;switch($.step){case"Home":let a=b.asPath;if("/logIn"===a||a.startsWith("/n/"))break;e="/";break;case"SignIn":e="/n/".concat($.nickname);break;case"MFARequired":e="/v1/extraMFA";break;case"KeyRequired":e="/v1/keyEnter"}S((0,H.Ly)(null)),e&&b.asPath!==e&&en(e)},[$]),(0,n.useEffect)(()=>{},[K,C]),(0,n.useEffect)(()=>{if(w){let e=(0,q.EB)("Auth",w,T);e.length&&setTimeout(ec(e[0]),500)}},[w]),(0,s.jsxs)("div",{children:[(0!==N||0!==I||0!==R||0!==L||0!==M||0!==U)&&(0,s.jsx)("div",{className:j().screenCenter,children:(0,s.jsx)(m.no,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper"})}),g&&(""===V||"v1"===V)&&(0,s.jsx)(l.Z,{bg:"light",className:j().bsafesNavbar,children:(0,s.jsxs)(f.Z,{fluid:!0,children:[ee?(0,s.jsx)(l.Z.Brand,{className:j().navbarBrand,children:(0,s.jsx)("span",{className:j().navbarTeamName,children:ee})}):(0,s.jsx)(l.Z.Brand,{href:"/",className:j().navbarBrand,children:(0,s.jsx)("span",{className:j().navbarTeamName,children:"BSafes"})}),B&&(0,s.jsxs)(h.Z,{align:"end",className:"justify-content-end",children:[(0,s.jsx)(h.Z.Toggle,{variant:"link",id:"dropdown-basic",className:j().navbarMenu,children:(0,s.jsx)("span",{className:j().memberBadge,children:Q&&Q.charAt(0)})}),(0,s.jsxs)(h.Z.Menu,{children:[G&&(0,s.jsx)(h.Z.Item,{onClick:e=>{S((0,H.nh)())},children:"Lock"}),(G||"/v1/keyEnter"===b.asPath)&&(0,s.jsx)(h.Z.Item,{onClick:et,children:"Sign out"})]}),""===V&&(0,s.jsx)(h.Z.Menu,{children:"/v1/keyEnter"===b.asPath&&(0,s.jsx)(h.Z.Item,{onClick:et,children:"Sign out"})})]}),t&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(c.Z,{className:"me-auto",children:[(0,s.jsxs)(d.Z,{title:"Company",id:"collapsible-nav-dropdown",className:j().navLink,children:[(0,s.jsx)(d.Z.Item,{href:"/public/aboutUs",children:"About Us"}),(0,s.jsx)(d.Z.Item,{href:"/public/mission",children:"Mission"}),(0,s.jsx)(d.Z.Item,{href:"/public/privacyPolicy",children:"Privacy Policy"}),(0,s.jsx)(d.Z.Item,{href:"/public/termsOfService",children:"Terms of Service"})]}),(0,s.jsx)(c.Z.Link,{href:"https://support.bsafes.com",className:j().navLink,children:"Support"}),(0,s.jsx)(c.Z.Link,{href:"/public/pricing",className:j().navLink,children:"Pricing"})]}),(0,s.jsx)(u.Z,{size:"sm",variant:"light",align:"end",className:"justify-content-end",onClick:()=>p.onOpen(),children:"Open"})]})]})}),g&&"v2"===V&&(0,s.jsx)(l.Z,{expand:"false",bg:"light",className:"".concat(j().bsafesNavbar," py-2"),children:(0,s.jsxs)(f.Z,{fluid:!0,children:[G&&(0,s.jsx)(l.Z.Toggle,{"aria-controls":"offcanvasNavbar-expand-false"}),Y&&"MFARequired"!==Y.authState&&!G&&(0,s.jsx)(l.Z.Brand,{href:"/",children:(0,s.jsx)("h1",{children:"BSafes"})}),Y&&"MFARequired"===Y.authState&&!G&&(0,s.jsx)(l.Z.Brand,{children:(0,s.jsx)("h2",{children:"Security"})}),G&&(0,s.jsxs)(l.Z.Offcanvas,{id:"offcanvasNavbar-expand-false","aria-labelledby":"offcanvasNavbarLabel-expand-false",placement:"start",style:{border:"solid"},children:[(0,s.jsx)(_.Z.Header,{closeButton:!0,style:{backgroundColor:"#abdbe3"},children:(0,s.jsx)(_.Z.Title,{id:"offcanvasNavbarLabel-expand-false",children:(0,s.jsxs)("h4",{children:[(0,s.jsx)("i",{className:"fa fa-info-circle","aria-hidden":"true",style:{width:"32px"}})," Services"]})})}),(0,s.jsx)(_.Z.Body,{children:(0,s.jsxs)(c.Z,{className:"justify-content-end flex-grow-1 pe-3",children:[(0,s.jsx)("p",{children:"Your ID"}),(0,s.jsx)("p",{style:{borderBottom:"solid",backgroundColor:"#EBF5FB",color:"#063970"},children:X}),(0,s.jsx)(c.Z.Link,{onClick:e=>{b.push("/services/payment")},style:{borderBottom:"solid"},children:(0,s.jsxs)("h5",{children:[(0,s.jsx)("i",{className:"fa fa-credit-card","aria-hidden":"true",style:{width:"32px"}})," Payment"]})}),(0,s.jsx)(c.Z.Link,{onClick:e=>{b.push("/services/mfaSetup")},style:{borderBottom:"solid"},children:(0,s.jsxs)("h5",{children:[(0,s.jsx)("i",{className:"fa fa-shield","aria-hidden":"true",style:{width:"32px"}})," 2FA"]})}),(0,s.jsx)(c.Z.Link,{onClick:e=>{b.push("/services/dataCenterSetup")},style:{borderBottom:"solid"},children:(0,s.jsxs)("h5",{children:[(0,s.jsx)("i",{className:"fa fa-globe","aria-hidden":"true",style:{width:"32px"}})," Data Center"]})}),(0,s.jsx)(c.Z.Link,{href:"https://support.bsafes.com",target:"_blank",rel:"noopener noreferrer",style:{borderBottom:"solid"},children:(0,s.jsxs)("h5",{children:[(0,s.jsx)("i",{className:"fa fa-question","aria-hidden":"true",style:{width:"32px"}})," Support"]})})]})})]}),(Y&&"MFARequired"===Y.authState||G)&&(0,s.jsx)(u.Z,{variant:"dark",size:"sm",className:"ms-auto",onClick:e=>{(0,y.qu)(!0,"Log out"),S((0,O.eB)())},children:"Lock"})]})},!1),(0,s.jsx)("div",{children:(0,s.jsx)(x.Ix,{position:"top-right",autoClose:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,theme:"light"})}),!z&&G&&v&&(0,s.jsx)(Z,{}),a,(0,s.jsx)(A,{}),(0,s.jsx)(F,{}),ea&&"paymentRequired"===C&&(0,s.jsx)(E,{}),(0,s.jsxs)(s.Fragment,{children:[ea&&"upgradeRequired"===C&&(0,s.jsx)(D,{upgradeRequired:!0}),ea&&"suspended"===C&&(0,s.jsx)(D,{suspended:!0}),ea&&"overflow"===C&&(0,s.jsx)(D,{overflow:!0})]}),!1]})}},38712:function(e){e.exports={container:"BSafes_container__7A7XO",displayNone:"BSafes_displayNone__EfL2D",orangeText:"BSafes_orangeText__wK_tT",greenText:"BSafes_greenText__il8fY",mt3px:"BSafes_mt3px__AbnnP",externalLink:"BSafes_externalLink__YF23A",spaceBackground:"BSafes_spaceBackground__AmjP6",screenCenter:"BSafes_screenCenter__HQt_I",inputBox:"BSafes_inputBox__Vmnns",inputButton:"BSafes_inputButton__D06M_",minHeight100Percent:"BSafes_minHeight100Percent__6NDi0",screenShotImage:"BSafes_screenShotImage__LmKEP",descriptionRow:"BSafes_descriptionRow__vzp2m",navbarBrand:"BSafes_navbarBrand__s5Qau",navbarTeamName:"BSafes_navbarTeamName__CfNsz",bsafesNavbar:"BSafes_bsafesNavbar__2IbIs",navbarMenu:"BSafes_navbarMenu__oFbOZ",memberBadge:"BSafes_memberBadge__plMgq",navLink:"BSafes_navLink__ozKIu",navlink:"BSafes_navlink__7_XNN",teamsBackground:"BSafes_teamsBackground__ZPF_e",btnCircle:"BSafes_btnCircle__UdR2C",btnFloating:"BSafes_btnFloating__nPQnH",btnFloatingAdd:"BSafes_btnFloatingAdd__NM_ZU",btnFloatingWrite:"BSafes_btnFloatingWrite__XHXWf",btnFloatingSave:"BSafes_btnFloatingSave__6N2O5",btnFloatingCancel:"BSafes_btnFloatingCancel__EthjM",itemsToolbar:"BSafes_itemsToolbar__qRPov",toolbarButton:"BSafes_toolbarButton__mDjwW",itemsMovingProgress:"BSafes_itemsMovingProgress__hCqwe",managedMemberLoginBackground:"BSafes_managedMemberLoginBackground__qYS9i",safeBackground:"BSafes_safeBackground__LEL_f",safeItemTypeIcon:"BSafes_safeItemTypeIcon__zOx4J",safeItem:"BSafes_safeItem__FICC6",itemPath:"BSafes_itemPath__VGlL9",itemPathBreadcrumb:"BSafes_itemPathBreadcrumb__HaEED",teamsPathItem:"BSafes_teamsPathItem__xRWUx",teamsPathLink:"BSafes_teamsPathLink__KyXaw",containerTitleLabel:"BSafes_containerTitleLabel__3Kc8A",containerControlPanel:"BSafes_containerControlPanel__Pi0Lm",containerSearchPanel:"BSafes_containerSearchPanel__IOeex",pageNavigationPart:"BSafes_pageNavigationPart__Rj3mJ",pageNumberInput:"BSafes_pageNumberInput__N2bX8",pagePanel:"BSafes_pagePanel__7FOBP",containerCoverPanel:"BSafes_containerCoverPanel__Yfxo7",containerContentsPanel:"BSafes_containerContentsPanel__IPrFd",folderPanel:"BSafes_folderPanel__mYoSB",notebookPanel:"BSafes_notebookPanel__4D72Y",diaryPanel:"BSafes_diaryPanel__xQyfR",boxPanel:"BSafes_boxPanel__GG47X",containerOpenBtn:"BSafes_containerOpenBtn__V0Pg6",contentsItemRow:"BSafes_contentsItemRow__zs_YP",turningPageRow:"BSafes_turningPageRow__M5jGt",pageBtn:"BSafes_pageBtn__itRNM",pageBtnFixed:"BSafes_pageBtnFixed__XFw08",coverBtnFixed:"BSafes_coverBtnFixed__NSZPN",previousPageBtn:"BSafes_previousPageBtn__s308A",nextPageBtn:"BSafes_nextPageBtn__rw3EA",searchBar:"BSafes_searchBar__Uefbo",searchBarInput:"BSafes_searchBarInput__9ngjM",boxCoverPanel:"BSafes_boxCoverPanel__e6DBb",boxItemCard:"BSafes_boxItemCard__b_KEf",boxItemCardBody:"BSafes_boxItemCardBody__2WMsn",folderCoverPanel:"BSafes_folderCoverPanel__cvulx",folderTab:"BSafes_folderTab___s2zX",notebookCoverPanel:"BSafes_notebookCoverPanel__7Soxn",diaryControlPanelBody:"BSafes_diaryControlPanelBody__LeRNI",diaryCoverPanel:"BSafes_diaryCoverPanel__Zfg5f",diaryWeekendItem:"BSafes_diaryWeekendItem__OC_Kh",diaryTodayItem:"BSafes_diaryTodayItem___R6iA",pageBackground:"BSafes_pageBackground__4WWGp",leftPagePanel:"BSafes_leftPagePanel__sJmtw",rightPagePanel:"BSafes_rightPagePanel__b4UvV",videosDragDropZone:"BSafes_videosDragDropZone__OtkTE",videosDragDropZoneActive:"BSafes_videosDragDropZoneActive__txRU0",imagesDragDropZone:"BSafes_imagesDragDropZone__x2oBQ",imagesDragDropZoneActive:"BSafes_imagesDragDropZoneActive__vmT2J",attachmentsDragDropZone:"BSafes_attachmentsDragDropZone__yMehp",attachmentsDragDropZoneActive:"BSafes_attachmentsDragDropZoneActive__dgmKh",attachmentMoreBtn:"BSafes_attachmentMoreBtn__1i6GU",editorRow:"BSafes_editorRow__W40NM",titleEditorRow:"BSafes_titleEditorRow__acyAC",imagePanelButton:"BSafes_imagePanelButton__y0Ooa",qrCode:"BSafes_qrCode__9YHzC",carouselRow:"BSafes_carouselRow__emwuS",waveBackground:"BSafes_waveBackground__Y2A86",gradient:"BSafes_gradient__R0I61",wave:"BSafes_wave__6UjCo",ribbonBanner:"BSafes_ribbonBanner__kWZbA",ribbonBannerRight:"BSafes_ribbonBannerRight__JvLqi",serviceIntroBackground:"BSafes_serviceIntroBackground__6YkMz",bannerLowerRightText:"BSafes_bannerLowerRightText__Mnadg",metalBackground:"BSafes_metalBackground__OmoRc",metallicButton:"BSafes_metallicButton__Xj6qi",metalH1:"BSafes_metalH1__x1tCJ",saleFirstLine:"BSafes_saleFirstLine__SRxGA",saleSecondLine:"BSafes_saleSecondLine__OfUVD",saleThirdLine:"BSafes_saleThirdLine__bscBW",saleFourthLine:"BSafes_saleFourthLine__RzeDv",saleFifthLine:"BSafes_saleFifthLine__WkT5u",noUnderline:"BSafes_noUnderline__Wlhqh",saleBadges:"BSafes_saleBadges__YjrUb",swing:"BSafes_swing__cc3PE",popup_badge:"BSafes_popup_badge__bBO7y",star1:"BSafes_star1__jaN80",star2:"BSafes_star2__qhRsl",star3:"BSafes_star3__MhGpX",ribbon:"BSafes_ribbon__8_ekA",badgepath_1:"BSafes_badgepath_1__uAyYP",badgepath_2:"BSafes_badgepath_2__AghRh",bubble1:"BSafes_bubble1__5gbRe",bubble2:"BSafes_bubble2__DvioB",bubble3:"BSafes_bubble3__h6ync",light_blue:"BSafes_light_blue__VbGKZ",line1:"BSafes_line1__FWu53",line2:"BSafes_line2__aaMfv",line3:"BSafes_line3__7WQ0s",medal2:"BSafes_medal2__7VuJ8",medal:"BSafes_medal__vymDj",badge_white:"BSafes_badge_white__F2Ch5",shine:"BSafes_shine__wBeNZ",animate_lines:"BSafes_animate_lines__2WXO0",badge_win:"BSafes_badge_win__UxOB4",bounce:"BSafes_bounce__ZctY4",examenes:"BSafes_examenes__KV8Uv",horas:"BSafes_horas__IsyDn",cursos:"BSafes_cursos__jR9xI",asistencia:"BSafes_asistencia__N83GP",concurrencia:"BSafes_concurrencia__sDUdL",contenidos:"BSafes_contenidos__hmtFa",previewImageLove:"BSafes_previewImageLove__84QiD",previewImageFinance:"BSafes_previewImageFinance__cjRNZ",previewImageDoctorVisit:"BSafes_previewImageDoctorVisit__xH_6W",featureCard:"BSafes_featureCard__vNDYR",featureCardText:"BSafes_featureCardText__hkfux",featureCardImage:"BSafes_featureCardImage__q5KWC",featureCardIcon:"BSafes_featureCardIcon__NRFRz",featureCardNormalIcon:"BSafes_featureCardNormalIcon__MyavZ",featureCardIconAndText:"BSafes_featureCardIconAndText__ho_DK",featureCardTextUnderIcon:"BSafes_featureCardTextUnderIcon__SmUSL",featureCardRightIcon:"BSafes_featureCardRightIcon__xEXc9",featureCardImageTop:"BSafes_featureCardImageTop__ulj_n",featureCardNormalImage:"BSafes_featureCardNormalImage__3KMzs",featureCardFont:"BSafes_featureCardFont__iiM3Z",featureCardTopImage:"BSafes_featureCardTopImage__U3gRs",featureCardTitle:"BSafes_featureCardTitle__IYelT",keyPanel:"BSafes_keyPanel__7zYMx",topAlertText:"BSafes_topAlertText__zjI2u",hintText:"BSafes_hintText__I5Uop",bannerTextH1:"BSafes_bannerTextH1__Ztovw",descriptionText:"BSafes_descriptionText__5gLNn",footerText:"BSafes_footerText___5zV3",footerSmallText:"BSafes_footerSmallText__RADvI",supportButton:"BSafes_supportButton__oBOLu"}}}]);