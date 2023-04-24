"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[159],{159:function(e,t,n){n.r(t),n.d(t,{default:function(){return oe}});var o=n(942),r=n(413),a=n(439),i=n(791),s=n(925),c=n(433);function u(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=u(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var l=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=u(e))&&(o&&(o+=" "),o+=t);return o},d=["theme","type"],f=["delay","staleId"],p=function(e){return"number"==typeof e&&!isNaN(e)},m=function(e){return"string"==typeof e},v=function(e){return"function"==typeof e},g=function(e){return m(e)||v(e)?e:null},h=function(e){return(0,i.isValidElement)(e)||m(e)||v(e)||p(e)};function y(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,a=e.collapse,s=void 0===a||a,u=e.collapseDuration,l=void 0===u?300:u;return function(e){var o=e.children,a=e.position,u=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,m=r?"".concat(t,"--").concat(a):t,v=r?"".concat(n,"--").concat(a):n,g=(0,i.useRef)(0);return(0,i.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),o=function e(o){var r;o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===g.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,c.Z)(n)))};(e=t.classList).add.apply(e,(0,c.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,i.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,d,l):d()};p||(u?t():(g.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),i.createElement(i.Fragment,null,o)}}function T(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var E={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,c.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},b=function(e){var t=e.theme,n=e.type,o=(0,s.Z)(e,d);return i.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},Z={info:function(e){return i.createElement(b,(0,r.Z)({},e),i.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return i.createElement(b,(0,r.Z)({},e),i.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return i.createElement(b,(0,r.Z)({},e),i.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return i.createElement(b,(0,r.Z)({},e),i.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return i.createElement("div",{className:"Toastify__spinner"})}};function C(e){var t=(0,i.useReducer)((function(e){return e+1}),0),n=(0,a.Z)(t,2)[1],o=(0,i.useState)([]),u=(0,a.Z)(o,2),l=u[0],d=u[1],y=(0,i.useRef)(null),b=(0,i.useRef)(new Map).current,C=function(e){return-1!==l.indexOf(e)},x=(0,i.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:C,getToast:function(e){return b.get(e)}}).current;function I(e){var t=e.containerId;!x.props.limit||t&&x.containerId!==t||(x.count-=x.queue.length,x.queue=[])}function O(e){d((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function _(){var e=x.queue.shift();N(e.toastContent,e.toastProps,e.staleId)}function L(e,t){var o=t.delay,c=t.staleId,u=(0,s.Z)(t,f);if(h(e)&&!function(e){return!y.current||x.props.enableMultiContainer&&e.containerId!==x.props.containerId||b.has(e.toastId)&&null==e.updateId}(u)){var l=u.toastId,d=u.updateId,C=u.data,I=x.props,L=function(){return O(l)},w=null==d;w&&x.count++;var R,P,k=(0,r.Z)((0,r.Z)((0,r.Z)({},I),{},{style:I.toastStyle,key:x.toastKey++},Object.fromEntries(Object.entries(u).filter((function(e){var t=(0,a.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:l,updateId:d,data:C,closeToast:L,isIn:!1,className:g(u.className||I.toastClassName),bodyClassName:g(u.bodyClassName||I.bodyClassName),progressClassName:g(u.progressClassName||I.progressClassName),autoClose:!u.isLoading&&(R=u.autoClose,P=I.autoClose,!1===R||p(R)&&R>0?R:P),deleteToast:function(){var e=T(b.get(l),"removed");b.delete(l),E.emit(4,e);var t=x.queue.length;if(x.count=null==l?x.count-x.displayedToast:x.count-1,x.count<0&&(x.count=0),t>0){var o=null==l?x.props.limit:1;if(1===t||1===o)x.displayedToast++,_();else{var r=o>t?t:o;x.displayedToast=r;for(var a=0;a<r;a++)_()}}else n()}});k.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,a=null,s={theme:t,type:n};return!1===r||(v(r)?a=r(s):(0,i.isValidElement)(r)?a=(0,i.cloneElement)(r,s):m(r)||p(r)?a=r:o?a=Z.spinner():function(e){return e in Z}(n)&&(a=Z[n](s))),a}(k),v(u.onOpen)&&(k.onOpen=u.onOpen),v(u.onClose)&&(k.onClose=u.onClose),k.closeButton=I.closeButton,!1===u.closeButton||h(u.closeButton)?k.closeButton=u.closeButton:!0===u.closeButton&&(k.closeButton=!h(I.closeButton)||I.closeButton);var M=e;(0,i.isValidElement)(e)&&!m(e.type)?M=(0,i.cloneElement)(e,{closeToast:L,toastProps:k,data:C}):v(e)&&(M=e({closeToast:L,toastProps:k,data:C})),I.limit&&I.limit>0&&x.count>I.limit&&w?x.queue.push({toastContent:M,toastProps:k,staleId:c}):p(o)?setTimeout((function(){N(M,k,c)}),o):N(M,k,c)}}function N(e,t,n){var o=t.toastId;n&&b.delete(n);var r={content:e,props:t};b.set(o,r),d((function(e){return[].concat((0,c.Z)(e),[o]).filter((function(e){return e!==n}))})),E.emit(4,T(r,null==r.props.updateId?"added":"updated"))}return(0,i.useEffect)((function(){return x.containerId=e.containerId,E.cancelEmit(3).on(0,L).on(1,(function(e){return y.current&&O(e)})).on(5,I).emit(2,x),function(){b.clear(),E.emit(3,x)}}),[]),(0,i.useEffect)((function(){x.props=e,x.isToastActive=C,x.displayedToast=l.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(b.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:y,isToastActive:C}}function x(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function I(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function O(e){var t=(0,i.useState)(!1),n=(0,a.Z)(t,2),o=n[0],r=n[1],s=(0,i.useState)(!1),c=(0,a.Z)(s,2),u=c[0],l=c[1],d=(0,i.useRef)(null),f=(0,i.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,i.useRef)(e),m=e.autoClose,g=e.pauseOnHover,h=e.closeToast,y=e.onClick,T=e.closeOnClick;function E(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",O),document.addEventListener("mouseup",_),document.addEventListener("touchmove",O),document.addEventListener("touchend",_);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=x(t.nativeEvent),f.y=I(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?C():Z()}}function Z(){r(!0)}function C(){r(!1)}function O(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&C(),f.x=x(t),f.y=I(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function _(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",_);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,i.useEffect)((function(){p.current=e})),(0,i.useEffect)((function(){return d.current&&d.current.addEventListener("d",Z,{once:!0}),v(e.onOpen)&&e.onOpen((0,i.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;v(e.onClose)&&e.onClose((0,i.isValidElement)(e.children)&&e.children.props)}}),[]),(0,i.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",Z),window.addEventListener("blur",C)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",Z),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var L={onMouseDown:E,onTouchStart:E,onMouseUp:b,onTouchEnd:b};return m&&g&&(L.onMouseEnter=C,L.onMouseLeave=Z),T&&(L.onClick=function(e){y&&y(e),f.canCloseOnClick&&h()}),{playToast:Z,pauseToast:C,isRunning:o,preventExitTransition:u,toastRef:d,eventHandlers:L}}function _(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return i.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},i.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function L(e){var t=e.delay,n=e.isRunning,a=e.closeToast,s=e.type,c=void 0===s?"default":s,u=e.hide,d=e.className,f=e.style,p=e.controlledProgress,m=e.progress,g=e.rtl,h=e.isIn,y=e.theme,T=u||p&&0===m,E=(0,r.Z)((0,r.Z)({},f),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:T?0:1});p&&(E.transform="scaleX(".concat(m,")"));var b=l("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(c),{"Toastify__progress-bar--rtl":g}),Z=v(d)?d({rtl:g,type:c,defaultClassName:b}):l(b,d);return i.createElement("div",(0,o.Z)({role:"progressbar","aria-hidden":T?"true":"false","aria-label":"notification timer",className:Z,style:E},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){h&&a()}))}var N=function(e){var t=O(e),n=t.isRunning,o=t.preventExitTransition,a=t.toastRef,s=t.eventHandlers,c=e.closeButton,u=e.children,d=e.autoClose,f=e.onClick,p=e.type,m=e.hideProgressBar,g=e.closeToast,h=e.transition,y=e.position,T=e.className,E=e.style,b=e.bodyClassName,Z=e.bodyStyle,C=e.progressClassName,x=e.progressStyle,I=e.updateId,N=e.role,w=e.progress,R=e.rtl,P=e.toastId,k=e.deleteToast,M=e.isIn,z=e.isLoading,B=e.iconOut,D=e.closeOnClick,S=e.theme,A=l("Toastify__toast","Toastify__toast-theme--".concat(S),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":R},{"Toastify__toast--close-on-click":D}),j=v(T)?T({rtl:R,position:y,type:p,defaultClassName:A}):l(A,T),F=!!w||!d,H={closeToast:g,type:p,theme:S},q=null;return!1===c||(q=v(c)?c(H):(0,i.isValidElement)(c)?(0,i.cloneElement)(c,H):_(H)),i.createElement(h,{isIn:M,done:k,position:y,preventExitTransition:o,nodeRef:a},i.createElement("div",(0,r.Z)((0,r.Z)({id:P,onClick:f,className:j},s),{},{style:E,ref:a}),i.createElement("div",(0,r.Z)((0,r.Z)({},M&&{role:N}),{},{className:v(b)?b({type:p}):l("Toastify__toast-body",b),style:Z}),null!=B&&i.createElement("div",{className:l("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!z})},B),i.createElement("div",null,u)),q,i.createElement(L,(0,r.Z)((0,r.Z)({},I&&!F?{key:"pb-".concat(I)}:{}),{},{rtl:R,theme:S,delay:d,isRunning:n,isIn:M,closeToast:g,hide:m,type:p,style:x,className:C,controlledProgress:F,progress:w||0}))))},w=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},R=y(w("bounce",!0)),P=(y(w("slide",!0)),y(w("zoom")),y(w("flip")),(0,i.forwardRef)((function(e,t){var n=C(e),o=n.getToastToRender,a=n.containerRef,s=n.isToastActive,c=e.className,u=e.style,d=e.rtl,f=e.containerId;function p(e){var t=l("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":d});return v(c)?c({position:e,rtl:d,defaultClassName:t}):l(t,g(c))}return(0,i.useEffect)((function(){t&&(t.current=a.current)}),[]),i.createElement("div",{ref:a,className:"Toastify",id:f},o((function(e,t){var n=t.length?(0,r.Z)({},u):(0,r.Z)((0,r.Z)({},u),{},{pointerEvents:"none"});return i.createElement("div",{className:p(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,a=e.props;return i.createElement(N,(0,r.Z)((0,r.Z)({},a),{},{isIn:s(a.toastId),style:(0,r.Z)((0,r.Z)({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(a.key)}),o)})))})))})));P.displayName="ToastContainer",P.defaultProps={position:"top-right",transition:R,autoClose:5e3,closeButton:_,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var k,M=new Map,z=[],B=1;function D(){return""+B++}function S(e){return e&&(m(e.toastId)||p(e.toastId))?e.toastId:D()}function A(e,t){return M.size>0?E.emit(0,e,t):z.push({content:e,options:t}),t.toastId}function j(e,t){return(0,r.Z)((0,r.Z)({},t),{},{type:t&&t.type||e,toastId:S(t)})}function F(e){return function(t,n){return A(t,j(e,n))}}function H(e,t){return A(e,j("default",t))}H.loading=function(e,t){return A(e,j("default",(0,r.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},H.promise=function(e,t,n){var o,a=t.pending,i=t.error,s=t.success;a&&(o=m(a)?H.loading(a,n):H.loading(a.render,(0,r.Z)((0,r.Z)({},n),a)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(e,t,a){if(null!=t){var i=(0,r.Z)((0,r.Z)((0,r.Z)({type:e},c),n),{},{data:a}),s=m(t)?{render:t}:t;return o?H.update(o,(0,r.Z)((0,r.Z)({},i),s)):H(s.render,(0,r.Z)((0,r.Z)({},i),s)),a}H.dismiss(o)},l=v(e)?e():e;return l.then((function(e){return u("success",s,e)})).catch((function(e){return u("error",i,e)})),l},H.success=F("success"),H.info=F("info"),H.error=F("error"),H.warning=F("warning"),H.warn=H.warning,H.dark=function(e,t){return A(e,j("default",(0,r.Z)({theme:"dark"},t)))},H.dismiss=function(e){M.size>0?E.emit(1,e):z=z.filter((function(t){return null!=e&&t.options.toastId!==e}))},H.clearWaitingQueue=function(e){return void 0===e&&(e={}),E.emit(5,e)},H.isActive=function(e){var t=!1;return M.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},H.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=M.get(n||k);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,a=n.content,i=(0,r.Z)((0,r.Z)((0,r.Z)({delay:100},o),t),{},{toastId:t.toastId||e,updateId:D()});i.toastId!==e&&(i.staleId=e);var s=i.render||a;delete i.render,A(s,i)}}),0)},H.done=function(e){H.update(e,{progress:1})},H.onChange=function(e){return E.on(4,e),function(){E.off(4,e)}},H.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},H.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},E.on(2,(function(e){k=e.containerId||e,M.set(k,e),z.forEach((function(e){E.emit(0,e.content,e.options)})),z=[]})).on(3,(function(e){M.delete(e.containerId||e),0===M.size&&E.off(0).off(1).off(5)}));var q,Q,V,G,U,W=n(689),X=n(168),Y=n(444),K=Y.ZP.form(q||(q=(0,X.Z)(["\n  width: 400px;\n  height: 400px;\n  padding:15px;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n"]))),J=Y.ZP.h1(Q||(Q=(0,X.Z)(["\n  color: #ffffff;\n  font-size: 36px;\n"]))),$=Y.ZP.label(V||(V=(0,X.Z)(["\n  display: block;\n  font-size: 16px;\n  line-height: 28px;\n  padding: 15px 0 5px 0px;\n"]))),ee=Y.ZP.input(G||(G=(0,X.Z)(["\n  width: 100%;\n  height: 36px;\n  border: none;\n  border-radius: 4px;\n  padding-left: 15px;\n  font-size: 16px;\n  color: #484848;\n"]))),te=Y.ZP.button(U||(U=(0,X.Z)(["\n  width: 100%;\n  border: none;\n  border-radius: 4px;\n  margin-top: 20px;\n  height: 48px;\n  font-size: 24px;\n  background-color: gold;\n  color: #242424;\n  font-weight: bold;\n  cursor: pointer;\n"]))),ne=n(184),oe=function(e){var t=e.onSubmit,n=(0,W.s0)(),s=(0,i.useState)({name:"",email:"",age:""}),c=(0,a.Z)(s,2),u=c[0],l=c[1],d=function(e){var t=e.target,n=t.name,a=t.value;l((0,r.Z)((0,r.Z)({},u),{},(0,o.Z)({},n,a)))};return(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)(J,{children:"Gerenciador de Tarefas"}),(0,ne.jsxs)(K,{onSubmit:function(e){e.preventDefault();var o=function(e){if(e.trim().length<3)return"O nome deve ter no m\xednimo 3 caracteres"}(u.name),r=function(e){if(!/\S+@\S+\.\S+/.test(e))return"O email deve ser v\xe1lido"}(u.email),a=function(e){var t=Number(e);if(isNaN(t)||t<18)return"Voc\xea precisa ter 18 anos ou mais para entrar"}(u.age),i=H.POSITION.TOP_RIGHT;o?H.error(o,{position:i}):r?H.error(r,{position:i}):a?H.error(a,{position:i}):(console.log(u),t(u),n("/listview"))},children:[(0,ne.jsx)($,{children:"Nome:"}),(0,ne.jsx)(ee,{type:"text",name:"name",value:u.name,onChange:d}),(0,ne.jsx)($,{children:"Email:"}),(0,ne.jsx)(ee,{type:"email",name:"email",value:u.email,onChange:d}),(0,ne.jsx)($,{children:"Idade:"}),(0,ne.jsx)(ee,{type:"tel",name:"age",value:u.age,onChange:d}),(0,ne.jsx)(te,{type:"submit",children:"Entrar"}),(0,ne.jsx)(P,{})]})]})}},925:function(e,t,n){function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=159.4ef43ff2.chunk.js.map