(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1685],{94044:function(e,i,a){"use strict";a.d(i,{Z:function(){return s}});var r=a(67294),t=a(6454),o=a(76852);let n=2147483648-1;function s(){let e=(0,t.Z)(),i=(0,r.useRef)();return(0,o.Z)(()=>clearTimeout(i.current)),(0,r.useMemo)(()=>{let a=()=>clearTimeout(i.current);return{set:function(r,t=0){e()&&(a(),t<=n?i.current=setTimeout(r,t):function e(i,a,r){let t=r-Date.now();i.current=t<=n?setTimeout(a,t):setTimeout(()=>e(i,a,r),n)}(i,r,Date.now()+t))},clear:a}},[])}},19574:function(e){e.exports={style:{fontFamily:"'__Montserrat_b1da2a', '__Montserrat_Fallback_b1da2a'",fontStyle:"normal"},className:"__className_b1da2a"}},29684:function(e){e.exports={style:{fontFamily:"'__Oswald_9ecda1', '__Oswald_Fallback_9ecda1'",fontStyle:"normal"},className:"__className_9ecda1"}},3864:function(e){e.exports={style:{fontFamily:"'__Outfit_cfacd3', '__Outfit_Fallback_cfacd3'",fontStyle:"normal"},className:"__className_cfacd3"}},75719:function(e){e.exports={style:{fontFamily:"'__Tilt_Warp_beb5b7'",fontStyle:"normal"},className:"__className_beb5b7"}},52705:function(e){e.exports={style:{fontFamily:"'__Tourney_2e0aca', '__Tourney_Fallback_2e0aca'",fontStyle:"normal"},className:"__className_2e0aca"}},5607:function(e,i,a){"use strict";a.d(i,{Z:function(){return g}});var r=a(94184),t=a.n(r),o=a(67294),n=a(15446),s=a(76792),l=a(16518);function c(e,i){return Array.isArray(e)?e.includes(i):e===i}let u=o.createContext({});u.displayName="AccordionContext";var d=a(85893);let b=o.forwardRef(({as:e="div",bsPrefix:i,className:a,children:r,eventKey:n,...b},w)=>{let{activeEventKey:m}=(0,o.useContext)(u);return i=(0,s.vE)(i,"accordion-collapse"),(0,d.jsx)(l.Z,{ref:w,in:c(m,n),...b,className:t()(a,i),children:(0,d.jsx)(e,{children:o.Children.only(r)})})});b.displayName="AccordionCollapse";let w=o.createContext({eventKey:""});w.displayName="AccordionItemContext";let m=o.forwardRef(({as:e="div",bsPrefix:i,className:a,onEnter:r,onEntering:n,onEntered:l,onExit:c,onExiting:u,onExited:m,...f},p)=>{i=(0,s.vE)(i,"accordion-body");let{eventKey:v}=(0,o.useContext)(w);return(0,d.jsx)(b,{eventKey:v,onEnter:r,onEntering:n,onEntered:l,onExit:c,onExiting:u,onExited:m,children:(0,d.jsx)(e,{ref:p,...f,className:t()(a,i)})})});m.displayName="AccordionBody";let f=o.forwardRef(({as:e="button",bsPrefix:i,className:a,onClick:r,...n},l)=>{i=(0,s.vE)(i,"accordion-button");let{eventKey:b}=(0,o.useContext)(w),m=function(e,i){let{activeEventKey:a,onSelect:r,alwaysOpen:t}=(0,o.useContext)(u);return o=>{let n=e===a?null:e;t&&(n=Array.isArray(a)?a.includes(e)?a.filter(i=>i!==e):[...a,e]:[e]),null==r||r(n,o),null==i||i(o)}}(b,r),{activeEventKey:f}=(0,o.useContext)(u);return"button"===e&&(n.type="button"),(0,d.jsx)(e,{ref:l,onClick:m,...n,"aria-expanded":Array.isArray(f)?f.includes(b):b===f,className:t()(a,i,!c(f,b)&&"collapsed")})});f.displayName="AccordionButton";let p=o.forwardRef(({as:e="h2",bsPrefix:i,className:a,children:r,onClick:o,...n},l)=>(i=(0,s.vE)(i,"accordion-header"),(0,d.jsx)(e,{ref:l,...n,className:t()(a,i),children:(0,d.jsx)(f,{onClick:o,children:r})})));p.displayName="AccordionHeader";let v=o.forwardRef(({as:e="div",bsPrefix:i,className:a,eventKey:r,...n},l)=>{i=(0,s.vE)(i,"accordion-item");let c=(0,o.useMemo)(()=>({eventKey:r}),[r]);return(0,d.jsx)(w.Provider,{value:c,children:(0,d.jsx)(e,{ref:l,...n,className:t()(a,i)})})});v.displayName="AccordionItem";let h=o.forwardRef((e,i)=>{let{as:a="div",activeKey:r,bsPrefix:l,className:c,onSelect:b,flush:w,alwaysOpen:m,...f}=(0,n.Ch)(e,{activeKey:"onSelect"}),p=(0,s.vE)(l,"accordion"),v=(0,o.useMemo)(()=>({activeEventKey:r,onSelect:b,alwaysOpen:m}),[r,b,m]);return(0,d.jsx)(u.Provider,{value:v,children:(0,d.jsx)(a,{ref:i,...f,className:t()(c,p,w&&`${p}-flush`)})})});h.displayName="Accordion";var g=Object.assign(h,{Button:f,Collapse:b,Item:v,Header:p,Body:m})},27977:function(e,i,a){"use strict";var r=a(94184),t=a.n(r),o=a(67294),n=a(76792),s=a(85893);let l=o.forwardRef(({bsPrefix:e,bg:i="primary",pill:a=!1,text:r,className:o,as:l="span",...c},u)=>{let d=(0,n.vE)(e,"badge");return(0,s.jsx)(l,{ref:u,...c,className:t()(o,d,a&&"rounded-pill",r&&`text-${r}`,i&&`bg-${i}`)})});l.displayName="Badge",i.Z=l},97279:function(e,i,a){"use strict";a.d(i,{Z:function(){return y}});var r=a(78146),t=a(67294),o=function(e,i){let a=(0,t.useRef)(!0);(0,t.useEffect)(()=>{if(a.current){a.current=!1;return}return e()},i)},n=a(92029),s=a(94044),l=a(13551),c=a(94184),u=a.n(c),d=a(15446),b=a(76792),w=a(85893);let m=t.forwardRef(({className:e,bsPrefix:i,as:a="div",...r},t)=>(i=(0,b.vE)(i,"carousel-caption"),(0,w.jsx)(a,{ref:t,className:u()(e,i),...r})));m.displayName="CarouselCaption";let f=t.forwardRef(({as:e="div",bsPrefix:i,className:a,...r},t)=>{let o=u()(a,(0,b.vE)(i,"carousel-item"));return(0,w.jsx)(e,{ref:t,...r,className:o})});f.displayName="CarouselItem";var p=a(53439),v=a(93825),h=a(34509),g=a(9337);let x=t.forwardRef(({defaultActiveIndex:e=0,...i},a)=>{let c;let{as:m="div",bsPrefix:f,slide:x=!0,fade:y=!1,controls:k=!0,indicators:_=!0,indicatorLabels:N=[],activeIndex:C,onSelect:S,onSlide:E,onSlid:T,interval:j=5e3,keyboard:A=!0,onKeyDown:M,pause:I="hover",onMouseOver:$,onMouseOut:R,wrap:O=!0,touch:q=!0,onTouchStart:P,onTouchMove:z,onTouchEnd:B,prevIcon:U=(0,w.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:Z="Previous",nextIcon:F=(0,w.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:D="Next",variant:L,className:V,children:H,...G}=(0,d.Ch)({defaultActiveIndex:e,...i},{activeIndex:"onSelect"}),K=(0,b.vE)(f,"carousel"),W=(0,b.SC)(),X=(0,t.useRef)(null),[Y,Q]=(0,t.useState)("next"),[J,ee]=(0,t.useState)(!1),[ei,ea]=(0,t.useState)(!1),[er,et]=(0,t.useState)(C||0);(0,t.useEffect)(()=>{ei||C===er||(X.current?Q(X.current):Q((C||0)>er?"next":"prev"),x&&ea(!0),et(C||0))},[C,ei,er,x]),(0,t.useEffect)(()=>{X.current&&(X.current=null)});let eo=0;(0,p.Ed)(H,(e,i)=>{++eo,i===C&&(c=e.props.interval)});let en=(0,n.Z)(c),es=(0,t.useCallback)(e=>{if(ei)return;let i=er-1;if(i<0){if(!O)return;i=eo-1}X.current="prev",null==S||S(i,e)},[ei,er,S,O,eo]),el=(0,r.Z)(e=>{if(ei)return;let i=er+1;if(i>=eo){if(!O)return;i=0}X.current="next",null==S||S(i,e)}),ec=(0,t.useRef)();(0,t.useImperativeHandle)(a,()=>({element:ec.current,prev:es,next:el}));let eu=(0,r.Z)(()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;let i=getComputedStyle(e);return"none"!==i.display&&"hidden"!==i.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ec.current)&&(W?es():el())}),ed="next"===Y?"start":"end";o(()=>{x||(null==E||E(er,ed),null==T||T(er,ed))},[er]);let eb=`${K}-item-${Y}`,ew=`${K}-item-${ed}`,em=(0,t.useCallback)(e=>{(0,h.Z)(e),null==E||E(er,ed)},[E,er,ed]),ef=(0,t.useCallback)(()=>{ea(!1),null==T||T(er,ed)},[T,er,ed]),ep=(0,t.useCallback)(e=>{if(A&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),W?el(e):es(e);return;case"ArrowRight":e.preventDefault(),W?es(e):el(e);return}null==M||M(e)},[A,M,es,el,W]),ev=(0,t.useCallback)(e=>{"hover"===I&&ee(!0),null==$||$(e)},[I,$]),eh=(0,t.useCallback)(e=>{ee(!1),null==R||R(e)},[R]),eg=(0,t.useRef)(0),ex=(0,t.useRef)(0),ey=(0,s.Z)(),ek=(0,t.useCallback)(e=>{eg.current=e.touches[0].clientX,ex.current=0,"hover"===I&&ee(!0),null==P||P(e)},[I,P]),e_=(0,t.useCallback)(e=>{e.touches&&e.touches.length>1?ex.current=0:ex.current=e.touches[0].clientX-eg.current,null==z||z(e)},[z]),eN=(0,t.useCallback)(e=>{if(q){let i=ex.current;Math.abs(i)>40&&(i>0?es(e):el(e))}"hover"===I&&ey.set(()=>{ee(!1)},j||void 0),null==B||B(e)},[q,I,es,el,ey,j,B]),eC=null!=j&&!J&&!ei,eS=(0,t.useRef)();(0,t.useEffect)(()=>{var e,i;if(!eC)return;let a=W?es:el;return eS.current=window.setInterval(document.visibilityState?eu:a,null!=(e=null!=(i=en.current)?i:j)?e:void 0),()=>{null!==eS.current&&clearInterval(eS.current)}},[eC,es,el,en,j,eu,W]);let eE=(0,t.useMemo)(()=>_&&Array.from({length:eo},(e,i)=>e=>{null==S||S(i,e)}),[_,eo,S]);return(0,w.jsxs)(m,{ref:ec,...G,onKeyDown:ep,onMouseOver:ev,onMouseOut:eh,onTouchStart:ek,onTouchMove:e_,onTouchEnd:eN,className:u()(V,K,x&&"slide",y&&`${K}-fade`,L&&`${K}-${L}`),children:[_&&(0,w.jsx)("div",{className:`${K}-indicators`,children:(0,p.UI)(H,(e,i)=>(0,w.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=N&&N.length?N[i]:`Slide ${i+1}`,className:i===er?"active":void 0,onClick:eE?eE[i]:void 0,"aria-current":i===er},i))}),(0,w.jsx)("div",{className:`${K}-inner`,children:(0,p.UI)(H,(e,i)=>{let a=i===er;return x?(0,w.jsx)(g.Z,{in:a,onEnter:a?em:void 0,onEntered:a?ef:void 0,addEndListener:v.Z,children:(i,r)=>t.cloneElement(e,{...r,className:u()(e.props.className,a&&"entered"!==i&&eb,("entered"===i||"exiting"===i)&&"active",("entering"===i||"exiting"===i)&&ew)})}):t.cloneElement(e,{className:u()(e.props.className,a&&"active")})})}),k&&(0,w.jsxs)(w.Fragment,{children:[(O||0!==C)&&(0,w.jsxs)(l.Z,{className:`${K}-control-prev`,onClick:es,children:[U,Z&&(0,w.jsx)("span",{className:"visually-hidden",children:Z})]}),(O||C!==eo-1)&&(0,w.jsxs)(l.Z,{className:`${K}-control-next`,onClick:el,children:[F,D&&(0,w.jsx)("span",{className:"visually-hidden",children:D})]})]})]})});x.displayName="Carousel";var y=Object.assign(x,{Caption:m,Item:f})},41330:function(e,i,a){"use strict";var r=a(94184),t=a.n(r),o=a(67294),n=a(45697),s=a.n(n),l=a(76792),c=a(85893);s().string,s().bool,s().bool,s().bool,s().bool;let u=o.forwardRef(({bsPrefix:e,className:i,fluid:a=!1,rounded:r=!1,roundedCircle:o=!1,thumbnail:n=!1,...s},u)=>(e=(0,l.vE)(e,"img"),(0,c.jsx)("img",{ref:u,...s,className:t()(i,a&&`${e}-fluid`,r&&"rounded",o&&"rounded-circle",n&&`${e}-thumbnail`)})));u.displayName="Image",i.Z=u},75147:function(e,i,a){"use strict";var r=a(94184),t=a.n(r),o=a(67294),n=a(76792),s=a(85893);let l=o.forwardRef(({bsPrefix:e,className:i,striped:a,bordered:r,borderless:o,hover:l,size:c,variant:u,responsive:d,...b},w)=>{let m=(0,n.vE)(e,"table"),f=t()(i,m,u&&`${m}-${u}`,c&&`${m}-${c}`,a&&`${m}-${"string"==typeof a?`striped-${a}`:"striped"}`,r&&`${m}-bordered`,o&&`${m}-borderless`,l&&`${m}-hover`),p=(0,s.jsx)("table",{...b,className:f,ref:w});if(d){let e=`${m}-responsive`;return"string"==typeof d&&(e=`${e}-${d}`),(0,s.jsx)("div",{className:e,children:p})}return p});i.Z=l},85518:function(e,i,a){"use strict";var r,t,o,n,s,l,c=a(67294);c&&"object"==typeof c&&"default"in c&&c.default;var u=a(23451),d=new u,b=d.getBrowser(),w=d.getCPU(),m=d.getDevice(),f=d.getEngine(),p=d.getOS(),v=d.getUA(),h={Mobile:"mobile",Tablet:"tablet",SmartTv:"smarttv",Console:"console",Wearable:"wearable",Embedded:"embedded",Browser:void 0},g={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},x=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},y=function(){return!!("undefined"!=typeof window&&(window.navigator||navigator))&&(window.navigator||navigator)},k=function(e){var i=y();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)},_=function(e){return e.type===h.Browser},N=function(e){return e.name===g.Edge},C=function(e){return"string"==typeof e&&-1!==e.indexOf("Edg/")},S=function(){return k("iPad")};m.type,h.SmartTv,m.type,h.Console,m.type,h.Wearable,m.type,h.Embedded,b.name===g.MobileSafari||S(),b.name,g.Chromium;var E=(r=m.type)===h.Mobile||r===h.Tablet||S();m.type,h.Mobile,m.type===h.Tablet||S(),_(m),_(m),p.name,p.name,"iOS"===p.name||S(),b.name,g.Chrome,b.name,g.Firefox,(t=b.name)===g.Safari||g.MobileSafari,b.name,g.Opera,(o=b.name)===g.InternetExplorer||g.Ie,x(p.version),x(p.name),x(b.version),x(b.major),x(b.name),x(m.vendor),x(m.model),x(f.name),x(f.version),x(v),N(b)||C(v),b.name,g.Yandex,x(m.type,"browser"),(n=y())&&(/iPad|iPhone|iPod/.test(n.platform)||"MacIntel"===n.platform&&n.maxTouchPoints>1)&&window.MSStream,S(),k("iPhone"),k("iPod"),"string"==typeof(l=(s=y())&&s.userAgent&&s.userAgent.toLowerCase())&&/electron/.test(l),C(v),N(b)&&C(v),p.name,p.name,b.name,g.MIUI,b.name,g.SamsungBrowser,i.tq=E},23451:function(e,i,a){var r;!function(t,o){"use strict";var n="function",s="undefined",l="object",c="string",u="major",d="model",b="name",w="type",m="vendor",f="version",p="architecture",v="console",h="mobile",g="tablet",x="smarttv",y="wearable",k="embedded",_="Amazon",N="Apple",C="ASUS",S="BlackBerry",E="Browser",T="Chrome",j="Firefox",A="Google",M="Huawei",I="Microsoft",$="Motorola",R="Opera",O="Samsung",q="Sharp",P="Sony",z="Xiaomi",B="Zebra",U="Facebook",Z="Chromium OS",F="Mac OS",D=function(e,i){var a={};for(var r in e)i[r]&&i[r].length%2==0?a[r]=i[r].concat(e[r]):a[r]=e[r];return a},L=function(e){for(var i={},a=0;a<e.length;a++)i[e[a].toUpperCase()]=e[a];return i},V=function(e,i){return typeof e===c&&-1!==H(i).indexOf(H(e))},H=function(e){return e.toLowerCase()},G=function(e,i){if(typeof e===c)return e=e.replace(/^\s\s*/,""),typeof i===s?e:e.substring(0,500)},K=function(e,i){for(var a,r,t,s,c,u,d=0;d<i.length&&!c;){var b=i[d],w=i[d+1];for(a=r=0;a<b.length&&!c&&b[a];)if(c=b[a++].exec(e))for(t=0;t<w.length;t++)u=c[++r],typeof(s=w[t])===l&&s.length>0?2===s.length?typeof s[1]==n?this[s[0]]=s[1].call(this,u):this[s[0]]=s[1]:3===s.length?typeof s[1]!==n||s[1].exec&&s[1].test?this[s[0]]=u?u.replace(s[1],s[2]):o:this[s[0]]=u?s[1].call(this,u,s[2]):o:4===s.length&&(this[s[0]]=u?s[3].call(this,u.replace(s[1],s[2])):o):this[s]=u||o;d+=2}},W=function(e,i){for(var a in i)if(typeof i[a]===l&&i[a].length>0){for(var r=0;r<i[a].length;r++)if(V(i[a][r],e))return"?"===a?o:a}else if(V(i[a],e))return"?"===a?o:a;return e},X={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Y={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[f,[b,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[f,[b,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[b,f],[/opios[\/ ]+([\w\.]+)/i],[f,[b,R+" Mini"]],[/\bopr\/([\w\.]+)/i],[f,[b,R]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[f,[b,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[b,f],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[f,[b,"UC"+E]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[f,[b,"WeChat"]],[/konqueror\/([\w\.]+)/i],[f,[b,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[f,[b,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[f,[b,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[f,[b,"Smart Lenovo "+E]],[/(avast|avg)\/([\w\.]+)/i],[[b,/(.+)/,"$1 Secure "+E],f],[/\bfocus\/([\w\.]+)/i],[f,[b,j+" Focus"]],[/\bopt\/([\w\.]+)/i],[f,[b,R+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[f,[b,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[f,[b,"Dolphin"]],[/coast\/([\w\.]+)/i],[f,[b,R+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[f,[b,"MIUI "+E]],[/fxios\/([-\w\.]+)/i],[f,[b,j]],[/\bqihu|(qi?ho?o?|360)browser/i],[[b,"360 "+E]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[b,/(.+)/,"$1 "+E],f],[/samsungbrowser\/([\w\.]+)/i],[f,[b,O+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[b,/_/g," "],f],[/metasr[\/ ]?([\d\.]+)/i],[f,[b,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[b,"Sogou Mobile"],f],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[b,f],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[b],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[b,U],f],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[b,f],[/\bgsa\/([\w\.]+) .*safari\//i],[f,[b,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[f,[b,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[f,[b,T+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[b,T+" WebView"],f],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[f,[b,"Android "+E]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[b,f],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[f,[b,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[f,b],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[b,[f,W,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[b,f],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[b,"Netscape"],f],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[f,[b,j+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[b,f],[/(cobalt)\/([\w\.]+)/i],[b,[f,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,H]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,"",H]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,H]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[d,[m,O],[w,g]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[d,[m,O],[w,h]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[d,[m,N],[w,h]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[d,[m,N],[w,g]],[/(macintosh);/i],[d,[m,N]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[d,[m,q],[w,h]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[d,[m,M],[w,g]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[d,[m,M],[w,h]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[d,/_/g," "],[m,z],[w,h]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[d,/_/g," "],[m,z],[w,g]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[d,[m,"OPPO"],[w,h]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[d,[m,"Vivo"],[w,h]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[d,[m,"Realme"],[w,h]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[d,[m,$],[w,h]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[d,[m,$],[w,g]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[d,[m,"LG"],[w,g]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[d,[m,"LG"],[w,h]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[d,[m,"Lenovo"],[w,g]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[d,/_/g," "],[m,"Nokia"],[w,h]],[/(pixel c)\b/i],[d,[m,A],[w,g]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[d,[m,A],[w,h]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[d,[m,P],[w,h]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[d,"Xperia Tablet"],[m,P],[w,g]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[d,[m,"OnePlus"],[w,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[d,[m,_],[w,g]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[d,/(.+)/g,"Fire Phone $1"],[m,_],[w,h]],[/(playbook);[-\w\),; ]+(rim)/i],[d,m,[w,g]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[d,[m,S],[w,h]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[d,[m,C],[w,g]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[d,[m,C],[w,h]],[/(nexus 9)/i],[d,[m,"HTC"],[w,g]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[m,[d,/_/g," "],[w,h]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[d,[m,"Acer"],[w,g]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[d,[m,"Meizu"],[w,h]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[d,[m,"Ulefone"],[w,h]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[m,d,[w,h]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[m,d,[w,g]],[/(surface duo)/i],[d,[m,I],[w,g]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[d,[m,"Fairphone"],[w,h]],[/(u304aa)/i],[d,[m,"AT&T"],[w,h]],[/\bsie-(\w*)/i],[d,[m,"Siemens"],[w,h]],[/\b(rct\w+) b/i],[d,[m,"RCA"],[w,g]],[/\b(venue[\d ]{2,7}) b/i],[d,[m,"Dell"],[w,g]],[/\b(q(?:mv|ta)\w+) b/i],[d,[m,"Verizon"],[w,g]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[d,[m,"Barnes & Noble"],[w,g]],[/\b(tm\d{3}\w+) b/i],[d,[m,"NuVision"],[w,g]],[/\b(k88) b/i],[d,[m,"ZTE"],[w,g]],[/\b(nx\d{3}j) b/i],[d,[m,"ZTE"],[w,h]],[/\b(gen\d{3}) b.+49h/i],[d,[m,"Swiss"],[w,h]],[/\b(zur\d{3}) b/i],[d,[m,"Swiss"],[w,g]],[/\b((zeki)?tb.*\b) b/i],[d,[m,"Zeki"],[w,g]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[m,"Dragon Touch"],d,[w,g]],[/\b(ns-?\w{0,9}) b/i],[d,[m,"Insignia"],[w,g]],[/\b((nxa|next)-?\w{0,9}) b/i],[d,[m,"NextBook"],[w,g]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[m,"Voice"],d,[w,h]],[/\b(lvtel\-)?(v1[12]) b/i],[[m,"LvTel"],d,[w,h]],[/\b(ph-1) /i],[d,[m,"Essential"],[w,h]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[d,[m,"Envizen"],[w,g]],[/\b(trio[-\w\. ]+) b/i],[d,[m,"MachSpeed"],[w,g]],[/\btu_(1491) b/i],[d,[m,"Rotor"],[w,g]],[/(shield[\w ]+) b/i],[d,[m,"Nvidia"],[w,g]],[/(sprint) (\w+)/i],[m,d,[w,h]],[/(kin\.[onetw]{3})/i],[[d,/\./g," "],[m,I],[w,h]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[d,[m,B],[w,g]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[d,[m,B],[w,h]],[/smart-tv.+(samsung)/i],[m,[w,x]],[/hbbtv.+maple;(\d+)/i],[[d,/^/,"SmartTV"],[m,O],[w,x]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[m,"LG"],[w,x]],[/(apple) ?tv/i],[m,[d,N+" TV"],[w,x]],[/crkey/i],[[d,T+"cast"],[m,A],[w,x]],[/droid.+aft(\w+)( bui|\))/i],[d,[m,_],[w,x]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[d,[m,q],[w,x]],[/(bravia[\w ]+)( bui|\))/i],[d,[m,P],[w,x]],[/(mitv-\w{5}) bui/i],[d,[m,z],[w,x]],[/Hbbtv.*(technisat) (.*);/i],[m,d,[w,x]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[m,G],[d,G],[w,x]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[w,x]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[m,d,[w,v]],[/droid.+; (shield) bui/i],[d,[m,"Nvidia"],[w,v]],[/(playstation [345portablevi]+)/i],[d,[m,P],[w,v]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[d,[m,I],[w,v]],[/((pebble))app/i],[m,d,[w,y]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[d,[m,N],[w,y]],[/droid.+; (glass) \d/i],[d,[m,A],[w,y]],[/droid.+; (wt63?0{2,3})\)/i],[d,[m,B],[w,y]],[/(quest( 2| pro)?)/i],[d,[m,U],[w,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[m,[w,k]],[/(aeobc)\b/i],[d,[m,_],[w,k]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[d,[w,h]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[d,[w,g]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[w,g]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[w,h]],[/(android[-\w\. ]{0,9});.+buil/i],[d,[m,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[f,[b,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[f,[b,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[b,f],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[f,b]],os:[[/microsoft (windows) (vista|xp)/i],[b,f],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[b,[f,W,X]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[f,W,X],[b,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[f,/_/g,"."],[b,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[b,F],[f,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[f,b],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[b,f],[/\(bb(10);/i],[f,[b,S]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[f,[b,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[f,[b,j+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[f,[b,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[f,[b,"watchOS"]],[/crkey\/([\d\.]+)/i],[f,[b,T+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[b,Z],f],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[b,f],[/(sunos) ?([\w\.\d]*)/i],[[b,"Solaris"],f],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[b,f]]},Q=function(e,i){if(typeof e===l&&(i=e,e=o),!(this instanceof Q))return new Q(e,i).getResult();var a=typeof t!==s&&t.navigator?t.navigator:o,r=e||(a&&a.userAgent?a.userAgent:""),v=a&&a.userAgentData?a.userAgentData:o,x=i?D(Y,i):Y,y=a&&a.userAgent==r;return this.getBrowser=function(){var e,i={};return i[b]=o,i[f]=o,K.call(i,r,x.browser),i[u]=typeof(e=i[f])===c?e.replace(/[^\d\.]/g,"").split(".")[0]:o,y&&a&&a.brave&&typeof a.brave.isBrave==n&&(i[b]="Brave"),i},this.getCPU=function(){var e={};return e[p]=o,K.call(e,r,x.cpu),e},this.getDevice=function(){var e={};return e[m]=o,e[d]=o,e[w]=o,K.call(e,r,x.device),y&&!e[w]&&v&&v.mobile&&(e[w]=h),y&&"Macintosh"==e[d]&&a&&typeof a.standalone!==s&&a.maxTouchPoints&&a.maxTouchPoints>2&&(e[d]="iPad",e[w]=g),e},this.getEngine=function(){var e={};return e[b]=o,e[f]=o,K.call(e,r,x.engine),e},this.getOS=function(){var e={};return e[b]=o,e[f]=o,K.call(e,r,x.os),y&&!e[b]&&v&&"Unknown"!=v.platform&&(e[b]=v.platform.replace(/chrome os/i,Z).replace(/macos/i,F)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=typeof e===c&&e.length>500?G(e,500):e,this},this.setUA(r),this};Q.VERSION="1.0.37",Q.BROWSER=L([b,f,u]),Q.CPU=L([p]),Q.DEVICE=L([d,m,w,v,h,x,g,y,k]),Q.ENGINE=Q.OS=L([b,f]),typeof i!==s?(e.exports&&(i=e.exports=Q),i.UAParser=Q):a.amdO?o!==(r=(function(){return Q}).call(i,a,i,e))&&(e.exports=r):typeof t!==s&&(t.UAParser=Q);var J=typeof t!==s&&(t.jQuery||t.Zepto);if(J&&!J.ua){var ee=new Q;J.ua=ee.getResult(),J.ua.get=function(){return ee.getUA()},J.ua.set=function(e){ee.setUA(e);var i=ee.getResult();for(var a in i)J.ua[a]=i[a]}}}("object"==typeof window?window:this)}}]);