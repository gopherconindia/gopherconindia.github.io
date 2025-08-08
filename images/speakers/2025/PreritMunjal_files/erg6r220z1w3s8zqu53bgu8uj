(()=>{var e=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},t=(t,s,i)=>(e(t,s,"read from private field"),i?i.call(t):s.get(t)),s=(t,s,i,n)=>(e(t,s,"write to private field"),n?n.call(t,i):s.set(t,i),i)
var i,n=()=>{if(!window||"node"!==window.appEnvironment){let e=document.getElementsByName("renderingMode")
return 1!==e.length?null:e[0].getAttribute("data-mode")}return null},r=class{constructor(e,t=!1,s=!1,i){this.type=e,this.bubbles=t,this.cancelable=s,this.target=i,this.defaultPrevented=void 0}stopPropagation(){}preventDefault(){this.defaultPrevented=!0}},a=class{constructor(){i.set(this,void 0)
s(this,i,new Map)}dispatchEvent(e){var s
let{type:n}=e
t(this,i).has(n)&&(null==(s=t(this,i).get(n))||s.forEach((t=>{"function"==typeof t?t.call(this,e):t.handleEvent(e)})))}addEventListener(e,s){if(t(this,i).has(e)){let n=t(this,i).get(e)
void 0!==n&&n.push(s)}else t(this,i).set(e,[s])}removeEventListener(e,s){if(t(this,i).has(e)){let n=t(this,i).get(e),r=void 0===n?-1:n.indexOf(s);-1!==r&&(null==n||n.splice(r,1))}}}
i=new WeakMap
function o(){return!!(window&&window.performance&&window.performance.getEntriesByName)}function h(e){if("string"!=typeof e)throw new Error("Expecting to receive a string but got "+typeof e)}var d,l,u,p,c,f,w,g,m,v,E=new WeakMap,y=class{constructor(e,i,n){d.set(this,void 0)
l.set(this,void 0)
u.set(this,void 0)
p.set(this,void 0)
c.set(this,void 0)
f.set(this,void 0)
w.set(this,void 0)
g.set(this,void 0)
m.set(this,void 0)
v.set(this,void 0)
s(this,d,{}),s(this,l,0),s(this,u,new Set),s(this,p,!0),s(this,c,""),this.status=0,this.readyState=0,s(this,w,e),s(this,g,i),s(this,f,n)
for(let e in i)t(this,u).add(e)
let r=["loadstart","load","loadend"]
for(let s of r)e.addEventListener(s,(e=>{let i=`on${s}`,n=t(this,g)[i]
n&&"function"==typeof n&&n.call(e.target,e)}))}INSPECT(){}getHeader(e){return"Content-Type"===e?"application/json":this.responseHeaders?this.responseHeaders[e]:void 0}getAllHeaders(){return this.readyState<2?"":this.responseHeaders?Object.entries(this.responseHeaders).reduce(((e,t)=>{let[s,i]=t
return e+`${s}: ${i}\r\n`}),"Content-Type: application/json\r\n"):"Content-Type: application/json\r\n"}addEvent(e,s){t(this,w).addEventListener(e,s)}removeEvent(e,s){t(this,w).removeEventListener(e,s)}isKnownKey(e){return t(this,u).has(e)}getState(){return void 0===t(this,m)?0:t(this,f).hasResponse(t(this,m))?(s(this,l,2),t(this,l)):I(t(this,m))||!t(this,f).isBufferingRequests()?(s(this,l,1),t(this,l)):t(this,l)}attachPostData(e){"POST"===t(this,v)&&(s(this,c,e),h(t(this,m)),s(this,m,A(t(this,m),e)))}open(e,t,i=!0){s(this,v,e.toUpperCase()),s(this,m,t),s(this,p,i),this.readyState=1}setRequestHeader(e,s){t(this,d)[e]?t(this,d)[e]+=`,${s}`:t(this,d)[e]=s}send(){h(t(this,m)),this.emitStartMarker(),t(this,f).addRequest(t(this,m),this),this.readyState=1,t(this,w).dispatchEvent(new r("loadstart"))}resolve(){this.send(),this.fulfill(),this.remove()}refire(){s(this,l,1),t(this,g).send(t(this,c)),this.remove()}fulfill(){h(t(this,m))
let e=t(this,f).getResponse(t(this,m))
!function(e){if(!("object"==typeof e&&null!==e&&"url"in e&&"status"in e&&"data"in e))throw new Error(`Expecting to receive a response but got ${typeof e} ${JSON.stringify(e)}`)}(e)
let{status:s,headers:i={},data:n}=e
this.status=s,this.headers(i),this.body(n),this.markFullfillment()}checkRequestBypass(){h(t(this,v)),F(t(this,v),X(t(this,v),t(this,d)))&&s(this,l,1)}remove(){h(t(this,m)),t(this,f).removeRequest(t(this,m),this)}markFullfillment(){if(o()){h(t(this,m))
let{start:e,end:s,measure:i}=this.createMarkerNames()
window.performance.getEntriesByName(e).length>0?(window.performance.mark(s),window.performance.measure(i,e,s)):window.jet&&window.jet.error(new Error(`start marker not found: ${e}`),["bpr","perf_measure"],!1)}}emitStartMarker(){if(o()){let{start:e}=this.createMarkerNames()
0===window.performance.getEntriesByName(e).length&&window.performance.mark(e)}}createMarkerNames(){h(t(this,m))
let e=`mark_bigpipe_${t(this,m)}`
return{measure:`${e}_phase`,start:`${e}_start`,end:`${e}_end`}}headers(e){this.responseHeaders=e,t(this,p)?this.stateChange(2):this.readyState=2}stateChange(e){this.readyState=e,"function"==typeof t(this,g).onreadystatechange&&t(this,g).onreadystatechange(new r("readystatechange")),t(this,w).dispatchEvent(new r("readystatechange")),4===this.readyState&&t(this,w).dispatchEvent(new r("load",!1,!1,t(this,g))),(0===this.readyState||4===this.readyState)&&t(this,w).dispatchEvent(new r("loadend",!1,!1,t(this,g)))}body(e){t(this,p)&&this.stateChange(3),this.responseText=e,this.response=e,t(this,p)?this.stateChange(4):this.readyState=4}}
d=new WeakMap,l=new WeakMap,u=new WeakMap,p=new WeakMap,c=new WeakMap,f=new WeakMap,w=new WeakMap,g=new WeakMap,m=new WeakMap,v=new WeakMap
var R=e=>new Proxy(XMLHttpRequest,{construct:t=>function(e,t){let s=new a,i=new Proxy(e,{set:(e,t,s)=>(e[t]=s,!0),get(e,t){let s=function(e,t){let s=e[t]
return"function"==typeof s?s.bind(e):s}(e,t)
switch(t){case"getResponseHeader":return function(e,t){return s=>{let i=E.get(e)
return M(i),1===i.getState()?t(s):i.getHeader(s)}}(i,s)
case"getAllResponseHeaders":return function(e,t){return()=>{let s=E.get(e)
return M(s),1===s.getState()?t():s.getAllHeaders()}}(i,s)
case"setRequestHeader":return function(e,t){return(s,i)=>{t(s,i)
let n=E.get(e)
M(n),0===n.getState()&&n.setRequestHeader(s,i)}}(i,s)
case"addEventListener":return function(e,t){return(s,i,n)=>{t(s,i,n)
let r=E.get(e)
M(r),r.addEvent(s,i)}}(i,s)
case"removeEventListener":return function(e,t){return(s,i)=>{t(s,i)
let n=E.get(e)
M(n),n.removeEvent(s,i)}}(i,s)
case"send":return function(e,t){return(s="")=>{let i=E.get(e)
if(M(i),1!==i.readyState&&1!==i.getState())throw new DOMException("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.")
switch(i.checkRequestBypass(),i.attachPostData(s),i.getState()){case 1:t(s)
break
case 2:i.resolve()
break
case 0:i.send()
break
default:return t(s)}}}(i,s)
case"open":return function(e,t){return(s,i,n=!0,r=null,a=null)=>{let o=E.get(e)
M(o),0===o.getState()&&o.open(s,i,n),t(s,i,n,r,a)}}(i,s)
default:return function(e,t,s,i){let n=E.get(e)
M(n)
let r=n.getState(),a=!n.isKnownKey(s)
if(1===r||a)return i
let o=n[s]
if(void 0!==o)return o
let h=t[s]
return function(e){return"function"==typeof e}(h)?0===r?h.bind(t):h.bind(e):i}(i,e,t,s)}}}),n=new y(s,i,t)
return E.set(i,n),i}(new t,e)})
function M(e){if(!(e instanceof y))throw new Error("Expecting a ShadowXHR but got "+typeof e)}function b(e,t){let s=document.querySelector(`meta[name="${e}"]`)
return s&&s.getAttribute("content")||t}var k=b("bigpipeResponseTimeout","12000"),S="string"==typeof k?parseInt(k):k,q=JSON.parse(b("bigpipeDenylistUrls","[]")),P=JSON.parse(b("bigpipeBlacklistUrls","[]"))
q.push(...P)
var T,W,_,H=q.map((e=>new RegExp(e))),$=class{constructor(e){T.set(this,void 0)
W.set(this,void 0)
_.set(this,void 0)
s(this,T,new Map),s(this,W,new Map),s(this,_,!0)}isBufferingRequests(){return t(this,_)}freeAllRequests(){s(this,_,!1)}hasResponse(e){return t(this,W).has(e)}hasRequest(e){return t(this,T).has(e)}removeRequest(e,s){var i,n
this.hasRequest(e)&&(null==(i=t(this,T).get(e))||i.delete(s),0===(null==(n=t(this,T).get(e))?void 0:n.size)&&t(this,T).delete(e))}addRequest(e,s){var i
t(this,T).has(e)?null==(i=t(this,T).get(e))||i.add(s):t(this,T).set(e,new Set([s]))}getResponse(e){if(this.hasResponse(e))return t(this,W).get(e)}fulfillAllPendingRequests(){for(let[e]of t(this,T))this.fulfillPendingRequestsFor(e)}fulfillPendingRequestsFor(e){var s
if(t(this,T).has(e))for(let i of null!=(s=t(this,T).get(e))?s:[])this.hasResponse(e)&&(i.fulfill(),i.remove())}refirePending(){for(let[e,s]of t(this,T))s.forEach((e=>e.refire())),t(this,W).delete(e)}addResponse(e){let{url:s}=e
t(this,W).set(s,e)}reset(){t(this,T).clear(),t(this,W).clear()}}
T=new WeakMap,W=new WeakMap,_=new WeakMap
var L,B,N,C,x,D,O,j="mark_data_streaming"
L=new WeakMap,B=new WeakMap,N=new WeakMap,C=new WeakMap,x=new WeakMap,D=new WeakMap,O=new WeakMap
function A(e,t){return t?`${e};${t}`:e}var I=e=>H.some((t=>t.test(e))),F=(e,t)=>"GET"!==e&&!t,X=(e,t={})=>"POST"===e&&"GET"===t["x-http-method-override"]
window._bpr=class{constructor(e){L.set(this,void 0)
B.set(this,void 0)
N.set(this,void 0)
C.set(this,void 0)
x.set(this,void 0)
D.set(this,void 0)
O.set(this,void 0)
s(this,L,!1),s(this,B,!1),s(this,N,!1),s(this,C,!1),s(this,D,setTimeout((()=>{this.handleResponseTimeout()}),S)),s(this,x,e),s(this,O,XMLHttpRequest),window.XMLHttpRequest=R(t(this,x)),this.attachDataletEventListener()}static create(){return new this(new $)}get isTerminated(){return t(this,B)}get isRendered(){return t(this,N)}get isLoaded(){return t(this,C)}getRenderMode(){return n()}isBigPipeMode(){return(()=>{let e=n()
return null!==e&&["BIGPIPE","SSRPIPE"].includes(e)})()}response(e){let s
s="object"!=typeof e?JSON.parse(this.getResponseData(e)):e
let{request:i}=s,{status:n,body:r,headers:a={}}=s,o=this.getResponseData(r)
s.method&&"POST"===s.method&&(i=A(i,s.encodedRequestBody))
let h={url:i,status:n,headers:a,data:o}
t(this,x).addResponse(h),t(this,x).fulfillPendingRequestsFor(i)}done(){if(t(this,B))throw new Error("Terminator cannot be called multiple times.")
s(this,B,!0),t(this,x).freeAllRequests(),this.clearResponseTimer(),t(this,x).fulfillAllPendingRequests(),t(this,x).refirePending(),t(this,N)&&this.reset()}rendered(){if(t(this,N))throw new Error("Initial page render cannot be called multiple times.")
s(this,N,!0),t(this,B)&&this.reset()}measureStreamingStart(){!1===t(this,L)&&(s(this,L,!0),o()&&window.performance.mark(`${j}_start`))}measureStreamingEnd(){if(o()){let e=`${j}_start`,t=`${j}_end`,s=`${j}_phase`
window.performance.getEntriesByName(e).length>0&&(window.performance.mark(t),window.performance.measure(s,e,t))}}attachDataletEventListener(){let e="datalet-bpr-guid",t=s=>{let i=s.target
if(i instanceof Element&&"IMG"===i.tagName){let s=i.classList
s=s||[],1===s.length&&s[0].substring(0,16)===e&&(this.measureStreamingStart(),this.response(s[0])),1===s.length&&"terminatorlet"===s[0]&&(this.measureStreamingEnd(),this.done(),document.removeEventListener("load",t,!0))}}
document.addEventListener("load",t,!0)}getResponseData(e){var t
let s=document.getElementById(e),i="{}"
return s&&(s.normalize(),i=(null==(t=s.firstChild)?void 0:t.nodeValue)||""),i}handleResponseTimeout(){console.info(`Terminator datalet is not seen within ${k} ms.`)}reset(){if(t(this,C))throw new Error("Bigpipe Client cannot be reset multiple times.")
t(this,x).reset(),s(this,C,!0),window.XMLHttpRequest=t(this,O)}clearResponseTimer(){t(this,D)&&clearTimeout(t(this,D))}}.create()
window._bigpipeClient=window._bpr
window._getRenderMode=window._bpr.getRenderMode.bind(window._bpr)
window._isBigPipeMode=window._bpr.isBigPipeMode.bind(window._bpr)})()

//# sourceMappingURL=bigpipe-v2.min.map