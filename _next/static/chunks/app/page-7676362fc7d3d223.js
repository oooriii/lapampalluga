(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{391:function(e,t,r){Promise.resolve().then(r.bind(r,1839))},1839:function(e,t,r){"use strict";r.d(t,{default:function(){return h}});var s=r(7437),n=r(2265),l=r(6648),a=r(6463),o=r(8277);function i(e){let{product:t}=e,r=(0,a.useRouter)();return(0,s.jsxs)("div",{onClick:()=>r.push("/item/".concat(t.id,"/")),className:"cursor-pointer bg-white shadow-md rounded-lg overflow-hidden",children:[(0,s.jsx)(l.default,{src:o.m.getOptimizedPath(t.images[0]),alt:t.title,width:256,height:256,className:"w-full h-64 object-cover"}),(0,s.jsxs)("div",{className:"p-4",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold",children:t.title}),(0,s.jsxs)("p",{className:"text-gray-600",children:[t.price.toFixed(2),"€"]})]})]})}var c=r(2030),u=r(8030);let d=(0,u.Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),f=(0,u.Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);function h(){let{products:e,isLoading:t,error:r}=(0,c.r)(),[l,a]=(0,n.useState)(""),[o,u]=(0,n.useState)([]),[h,p]=(0,n.useState)(""),[v,m]=(0,n.useState)(""),[x,g]=(0,n.useState)(0),j=(0,n.useRef)(null),[w,b]=(0,n.useState)(!1),[N,C]=(0,n.useState)(0),[y,S]=(0,n.useState)(0),[P,k]=(0,n.useState)("asc"),[z,L]=(0,n.useState)(""),[O,_]=(0,n.useState)("");if(t)return(0,s.jsx)("div",{children:"Loading..."});if(r)return(0,s.jsxs)("div",{children:["Error: ",r.message]});let A=Array.from(new Set(e.map(e=>e.size))),E=e.filter(e=>!l||e.type===l).filter(e=>!o.length||e.color.some(e=>o.includes(e))).filter(e=>!h||e.state===h).filter(e=>!z||e.size===z).filter(e=>e.title.toLowerCase().includes(O.toLowerCase())||e.description.toLowerCase().includes(O.toLowerCase())).sort((e,t)=>{let r="asc"===P?1:-1;return"title"===v?r*e.title.localeCompare(t.title):"id"===v?r*(e.id-t.id):"price"===v?r*(e.price-t.price):0}),M=Array.from(new Set(e.map(e=>e.type))),R=Array.from(new Set(e.flatMap(e=>e.color)));return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsxs)("select",{onChange:e=>a(e.target.value),className:"mr-2",children:[(0,s.jsx)("option",{value:"",children:"Tots"}),M.map(e=>(0,s.jsx)("option",{value:e,children:e},e))]}),(0,s.jsxs)("select",{onChange:e=>u(e.target.value?[e.target.value]:[]),className:"mr-2",children:[(0,s.jsx)("option",{value:"",children:"Tots colors"}),R.map(e=>(0,s.jsx)("option",{value:e,children:e},e))]}),(0,s.jsxs)("select",{onChange:e=>p(e.target.value),className:"mr-2",children:[(0,s.jsx)("option",{value:"",children:"Tots estats"}),(0,s.jsx)("option",{value:"available",children:"Disponible"}),(0,s.jsx)("option",{value:"reserved",children:"Reservat"}),(0,s.jsx)("option",{value:"sold",children:"Venut"})]}),(0,s.jsxs)("select",{onChange:e=>L(e.target.value),className:"mr-2",children:[(0,s.jsx)("option",{value:"",children:"Totes les mides"}),A.map(e=>(0,s.jsx)("option",{value:e,children:e},e))]}),(0,s.jsxs)("select",{onChange:e=>{m(e.target.value),k("asc")},className:"mr-2",children:[(0,s.jsx)("option",{value:"",children:"Ordenar per"}),(0,s.jsx)("option",{value:"title",children:"T\xedtol"}),(0,s.jsx)("option",{value:"id",children:"ID"}),(0,s.jsx)("option",{value:"price",children:"Preu"})]}),(0,s.jsxs)("select",{onChange:e=>k(e.target.value),className:"mr-2",children:[(0,s.jsx)("option",{value:"asc",children:"Ascendent"}),(0,s.jsx)("option",{value:"desc",children:"Descendent"})]}),(0,s.jsx)("input",{type:"text",placeholder:"Cerca per t\xedtol o descripci\xf3",value:O,onChange:e=>_(e.target.value),className:"mr-2"})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("button",{onClick:()=>{j.current&&j.current.scrollBy({left:-j.current.offsetWidth,behavior:"smooth"})},className:"absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 p-2 rounded-full",children:(0,s.jsx)(d,{size:24})}),(0,s.jsx)("div",{ref:j,className:"flex overflow-x-auto scrollbar-hide",onMouseDown:e=>{var t,r;b(!0),C(e.pageX-((null===(t=j.current)||void 0===t?void 0:t.offsetLeft)||0)),S((null===(r=j.current)||void 0===r?void 0:r.scrollLeft)||0)},onMouseLeave:()=>{b(!1)},onMouseUp:()=>{b(!1)},onMouseMove:e=>{var t;if(!w)return;e.preventDefault();let r=e.pageX-((null===(t=j.current)||void 0===t?void 0:t.offsetLeft)||0);j.current&&(j.current.scrollLeft=y-(r-N)*2)},children:(0,s.jsx)("div",{className:"flex",children:E.map(e=>(0,s.jsxs)("div",{className:"flex-shrink-0 ".concat(1===E.length?"w-full":"w-full sm:w-1/2 md:w-1/4"," p-2 relative"),children:[(0,s.jsx)("div",{className:"absolute top-0 right-0 z-10 px-2 py-1 text-xs font-bold text-white ".concat("available"===e.state?"bg-green-500":"reserved"===e.state?"bg-yellow-500":"sold"===e.state?"bg-red-500":""),children:"available"===e.state?"Disponible":"reserved"===e.state?"Reservat":"sold"===e.state?"Venut":""}),(0,s.jsx)(i,{product:e})]},e.id))})}),(0,s.jsx)("button",{onClick:()=>{j.current&&j.current.scrollBy({left:j.current.offsetWidth,behavior:"smooth"})},className:"absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 p-2 rounded-full",children:(0,s.jsx)(f,{size:24})})]})]})}},8277:function(e,t,r){"use strict";r.d(t,{m:function(){return s}});let s={basePath:"/images",optimizedPrefix:"optimized-",outputFormat:"webp",getOptimizedPath:e=>{let t=e.split("/").pop();if(!t)return e;let r=t.replace(/\.[^/.]+$/,"");return"".concat(s.basePath,"/").concat(s.optimizedPrefix).concat(r,".").concat(s.outputFormat)}}},2030:function(e,t,r){"use strict";r.d(t,{ProductProvider:function(){return o},r:function(){return i}});var s=r(7437),n=r(2265);let l=(0,n.createContext)(void 0);async function a(){let e=await fetch("/products.json");return Object.values(await e.json())}function o(e){let{children:t}=e,[r,o]=(0,n.useState)([]),[i,c]=(0,n.useState)(!0),[u,d]=(0,n.useState)(null);return(0,n.useEffect)(()=>{a().then(e=>{o(e),c(!1)}).catch(e=>{d(e),c(!1)})},[]),(0,s.jsx)(l.Provider,{value:{products:r,isLoading:i,error:u},children:t})}function i(){let e=(0,n.useContext)(l);if(void 0===e)throw Error("useProducts must be used within a ProductProvider");return e}},8030:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var s=r(2265);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,s.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:c="",children:u,iconNode:d,...f}=e;return(0,s.createElement)("svg",{ref:t,...a,width:n,height:n,stroke:r,strokeWidth:i?24*Number(o)/Number(n):o,className:l("lucide",c),...f},[...d.map(e=>{let[t,r]=e;return(0,s.createElement)(t,r)}),...Array.isArray(u)?u:[u]])}),i=(e,t)=>{let r=(0,s.forwardRef)((r,a)=>{let{className:i,...c}=r;return(0,s.createElement)(o,{ref:a,iconNode:t,className:l("lucide-".concat(n(e)),i),...c})});return r.displayName="".concat(e),r}},6648:function(e,t,r){"use strict";r.d(t,{default:function(){return n.a}});var s=r(5601),n=r.n(s)},5601:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return i},getImageProps:function(){return o}});let s=r(9920),n=r(497),l=r(8173),a=s._(r(1241));function o(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let i=l.Image}},function(e){e.O(0,[986,971,23,744],function(){return e(e.s=391)}),_N_E=e.O()}]);