!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).GhostContentAPI=e()}(this,(function(){"use strict";var t=function(t){return"object"==typeof t?null!==t:"function"==typeof t},e=function(e){if(!t(e))throw TypeError(e+" is not an object!");return e},n=function(t){try{return!!t()}catch(t){return!0}},r=!n((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}));function o(t,e){return t(e={exports:{}},e.exports),e.exports}var i=o((function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)})),a=i.document,c=t(a)&&t(a.createElement),s=function(t){return c?a.createElement(t):{}},u=!r&&!n((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a})),f=Object.defineProperty,l={f:r?Object.defineProperty:function(n,r,o){if(e(n),r=function(e,n){if(!t(e))return e;var r,o;if(n&&"function"==typeof(r=e.toString)&&!t(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!t(o=r.call(e)))return o;if(!n&&"function"==typeof(r=e.toString)&&!t(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}(r,!0),e(o),u)try{return f(n,r,o)}catch(t){}if("get"in o||"set"in o)throw TypeError("Accessors not supported!");return"value"in o&&(n[r]=o.value),n}},h=l.f,p=Function.prototype,d=/^\s*function ([^ (]*)/;"name"in p||r&&h(p,"name",{configurable:!0,get:function(){try{return(""+this).match(d)[1]}catch(t){return""}}});var v=o((function(t){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)})),m=(v.version,o((function(t){var e=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return e[t]||(e[t]=void 0!==n?n:{})})("versions",[]).push({version:v.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}))),g=0,y=Math.random(),w=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++g+y).toString(36))},b=o((function(t){var e=m("wks"),n=i.Symbol,r="function"==typeof n;(t.exports=function(t){return e[t]||(e[t]=r&&n[t]||(r?n:w)("Symbol."+t))}).store=e})),j=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},S=r?function(t,e,n){return l.f(t,e,j(1,n))}:function(t,e,n){return t[e]=n,t},E=b("unscopables"),_=Array.prototype;null==_[E]&&S(_,E,{});var O=function(t){_[E][t]=!0},x=function(t,e){return{value:e,done:!!t}},P={},T={}.toString,C=function(t){return T.call(t).slice(8,-1)},A=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==C(t)?t.split(""):Object(t)},L=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},R=function(t){return A(L(t))},k={}.hasOwnProperty,M=function(t,e){return k.call(t,e)},N=m("native-function-to-string",Function.toString),F=o((function(t){var e=w("src"),n=(""+N).split("toString");v.inspectSource=function(t){return N.call(t)},(t.exports=function(t,r,o,a){var c="function"==typeof o;c&&(M(o,"name")||S(o,"name",r)),t[r]!==o&&(c&&(M(o,e)||S(o,e,t[r]?""+t[r]:n.join(String(r)))),t===i?t[r]=o:a?t[r]?t[r]=o:S(t,r,o):(delete t[r],S(t,r,o)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[e]||N.call(this)}))})),q=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t},B=function(t,e,n){if(q(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},U=function(t,e,n){var r,o,a,c,s=t&U.F,u=t&U.G,f=t&U.S,l=t&U.P,h=t&U.B,p=u?i:f?i[e]||(i[e]={}):(i[e]||{}).prototype,d=u?v:v[e]||(v[e]={}),m=d.prototype||(d.prototype={});for(r in u&&(n=e),n)a=((o=!s&&p&&void 0!==p[r])?p:n)[r],c=h&&o?B(a,i):l&&"function"==typeof a?B(Function.call,a):a,p&&F(p,r,a,t&U.U),d[r]!=a&&S(d,r,c),l&&m[r]!=a&&(m[r]=a)};i.core=v,U.F=1,U.G=2,U.S=4,U.P=8,U.B=16,U.W=32,U.U=64,U.R=128;var I=U,D=Math.ceil,W=Math.floor,z=function(t){return isNaN(t=+t)?0:(t>0?W:D)(t)},H=Math.min,G=function(t){return t>0?H(z(t),9007199254740991):0},V=Math.max,X=Math.min,J=function(t){return function(e,n,r){var o,i=R(e),a=G(i.length),c=function(t,e){return(t=z(t))<0?V(t+e,0):X(t,e)}(r,a);if(t&&n!=n){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},K=m("keys"),$=function(t){return K[t]||(K[t]=w(t))},Q=J(!1),Y=$("IE_PROTO"),Z="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),tt=Object.keys||function(t){return function(t,e){var n,r=R(t),o=0,i=[];for(n in r)n!=Y&&M(r,n)&&i.push(n);for(;e.length>o;)M(r,n=e[o++])&&(~Q(i,n)||i.push(n));return i}(t,Z)},et=r?Object.defineProperties:function(t,n){e(t);for(var r,o=tt(n),i=o.length,a=0;i>a;)l.f(t,r=o[a++],n[r]);return t},nt=i.document,rt=nt&&nt.documentElement,ot=$("IE_PROTO"),it=function(){},at=function(){var t,e=s("iframe"),n=Z.length;for(e.style.display="none",rt.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),at=t.F;n--;)delete at.prototype[Z[n]];return at()},ct=Object.create||function(t,n){var r;return null!==t?(it.prototype=e(t),r=new it,it.prototype=null,r[ot]=t):r=at(),void 0===n?r:et(r,n)},st=l.f,ut=b("toStringTag"),ft=function(t,e,n){t&&!M(t=n?t:t.prototype,ut)&&st(t,ut,{configurable:!0,value:e})},lt={};S(lt,b("iterator"),(function(){return this}));var ht=function(t,e,n){t.prototype=ct(lt,{next:j(1,n)}),ft(t,e+" Iterator")},pt=function(t){return Object(L(t))},dt=$("IE_PROTO"),vt=Object.prototype,mt=Object.getPrototypeOf||function(t){return t=pt(t),M(t,dt)?t[dt]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?vt:null},gt=b("iterator"),yt=!([].keys&&"next"in[].keys()),wt=function(){return this},bt=function(t,e,n,r,o,i,a){ht(n,e,r);var c,s,u,f=function(t){if(!yt&&t in d)return d[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},l=e+" Iterator",h="values"==o,p=!1,d=t.prototype,v=d[gt]||d["@@iterator"]||o&&d[o],m=v||f(o),g=o?h?f("entries"):m:void 0,y="Array"==e&&d.entries||v;if(y&&(u=mt(y.call(new t)))!==Object.prototype&&u.next&&(ft(u,l,!0),"function"!=typeof u[gt]&&S(u,gt,wt)),h&&v&&"values"!==v.name&&(p=!0,m=function(){return v.call(this)}),(yt||p||!d[gt])&&S(d,gt,m),P[e]=m,P[l]=wt,o)if(c={values:h?m:f("values"),keys:i?m:f("keys"),entries:g},a)for(s in c)s in d||F(d,s,c[s]);else I(I.P+I.F*(yt||p),e,c);return c}(Array,"Array",(function(t,e){this._t=R(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,x(1)):x(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values");P.Arguments=P.Array,O("keys"),O("values"),O("entries");for(var jt=b("iterator"),St=b("toStringTag"),Et=P.Array,_t={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},Ot=tt(_t),xt=0;xt<Ot.length;xt++){var Pt,Tt=Ot[xt],Ct=_t[Tt],At=i[Tt],Lt=At&&At.prototype;if(Lt&&(Lt[jt]||S(Lt,jt,Et),Lt[St]||S(Lt,St,Tt),P[Tt]=Et,Ct))for(Pt in bt)Lt[Pt]||F(Lt,Pt,bt[Pt],!0)}var Rt,kt,Mt,Nt;Rt="keys",kt=function(){return function(t){return tt(pt(t))}},Mt=(v.Object||{})[Rt]||Object[Rt],(Nt={})[Rt]=kt(Mt),I(I.S+I.F*n((function(){Mt(1)})),"Object",Nt);var Ft={f:Object.getOwnPropertySymbols},qt={f:{}.propertyIsEnumerable},Bt=Object.assign,Ut=!Bt||n((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=Bt({},t)[n]||Object.keys(Bt({},e)).join("")!=r}))?function(t,e){for(var n=pt(t),o=arguments.length,i=1,a=Ft.f,c=qt.f;o>i;)for(var s,u=A(arguments[i++]),f=a?tt(u).concat(a(u)):tt(u),l=f.length,h=0;l>h;)s=f[h++],r&&!c.call(u,s)||(n[s]=u[s]);return n}:Bt;I(I.S+I.F,"Object",{assign:Ut});var It,Dt,Wt,zt=b("toStringTag"),Ht="Arguments"==C(function(){return arguments}()),Gt=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),zt))?n:Ht?C(e):"Object"==(r=C(e))&&"function"==typeof e.callee?"Arguments":r},Vt=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}},Xt=b("iterator"),Jt=Array.prototype,Kt=b("iterator"),$t=v.getIteratorMethod=function(t){if(null!=t)return t[Kt]||t["@@iterator"]||P[Gt(t)]},Qt=o((function(t){var n={},r={},o=t.exports=function(t,o,i,a,c){var s,u,f,l,h,p=c?function(){return t}:$t(t),d=B(i,a,o?2:1),v=0;if("function"!=typeof p)throw TypeError(t+" is not iterable!");if(void 0===(h=p)||P.Array!==h&&Jt[Xt]!==h){for(f=p.call(t);!(u=f.next()).done;)if((l=Vt(f,d,u.value,o))===n||l===r)return l}else for(s=G(t.length);s>v;v++)if((l=o?d(e(u=t[v])[0],u[1]):d(t[v]))===n||l===r)return l};o.BREAK=n,o.RETURN=r})),Yt=b("species"),Zt=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)},te=i.process,ee=i.setImmediate,ne=i.clearImmediate,re=i.MessageChannel,oe=i.Dispatch,ie=0,ae={},ce=function(){var t=+this;if(ae.hasOwnProperty(t)){var e=ae[t];delete ae[t],e()}},se=function(t){ce.call(t.data)};ee&&ne||(ee=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return ae[++ie]=function(){Zt("function"==typeof t?t:Function(t),e)},It(ie),ie},ne=function(t){delete ae[t]},"process"==C(te)?It=function(t){te.nextTick(B(ce,t,1))}:oe&&oe.now?It=function(t){oe.now(B(ce,t,1))}:re?(Wt=(Dt=new re).port2,Dt.port1.onmessage=se,It=B(Wt.postMessage,Wt,1)):i.addEventListener&&"function"==typeof postMessage&&!i.importScripts?(It=function(t){i.postMessage(t+"","*")},i.addEventListener("message",se,!1)):It="onreadystatechange"in s("script")?function(t){rt.appendChild(s("script")).onreadystatechange=function(){rt.removeChild(this),ce.call(t)}}:function(t){setTimeout(B(ce,t,1),0)});var ue={set:ee,clear:ne},fe=ue.set,le=i.MutationObserver||i.WebKitMutationObserver,he=i.process,pe=i.Promise,de="process"==C(he);function ve(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=q(e),this.reject=q(n)}var me={f:function(t){return new ve(t)}},ge=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}},ye=i.navigator,we=ye&&ye.userAgent||"",be=b("species"),je=b("iterator"),Se=!1;try{var Ee=[7][je]();Ee.return=function(){Se=!0},Array.from(Ee,(function(){throw 2}))}catch(t){}var _e,Oe,xe,Pe,Te=ue.set,Ce=function(){var t,e,n,r=function(){var r,o;for(de&&(r=he.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(de)n=function(){he.nextTick(r)};else if(!le||i.navigator&&i.navigator.standalone)if(pe&&pe.resolve){var o=pe.resolve(void 0);n=function(){o.then(r)}}else n=function(){fe.call(i,r)};else{var a=!0,c=document.createTextNode("");new le(r).observe(c,{characterData:!0}),n=function(){c.data=a=!a}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}(),Ae=i.TypeError,Le=i.process,Re=Le&&Le.versions,ke=Re&&Re.v8||"",Me=i.Promise,Ne="process"==Gt(Le),Fe=function(){},qe=Oe=me.f,Be=!!function(){try{var t=Me.resolve(1),e=(t.constructor={})[b("species")]=function(t){t(Fe,Fe)};return(Ne||"function"==typeof PromiseRejectionEvent)&&t.then(Fe)instanceof e&&0!==ke.indexOf("6.6")&&-1===we.indexOf("Chrome/66")}catch(t){}}(),Ue=function(e){var n;return!(!t(e)||"function"!=typeof(n=e.then))&&n},Ie=function(t,e){if(!t._n){t._n=!0;var n=t._c;Ce((function(){for(var r=t._v,o=1==t._s,i=0,a=function(e){var n,i,a,c=o?e.ok:e.fail,s=e.resolve,u=e.reject,f=e.domain;try{c?(o||(2==t._h&&ze(t),t._h=1),!0===c?n=r:(f&&f.enter(),n=c(r),f&&(f.exit(),a=!0)),n===e.promise?u(Ae("Promise-chain cycle")):(i=Ue(n))?i.call(n,s,u):s(n)):u(r)}catch(t){f&&!a&&f.exit(),u(t)}};n.length>i;)a(n[i++]);t._c=[],t._n=!1,e&&!t._h&&De(t)}))}},De=function(t){Te.call(i,(function(){var e,n,r,o=t._v,a=We(t);if(a&&(e=ge((function(){Ne?Le.emit("unhandledRejection",o,t):(n=i.onunhandledrejection)?n({promise:t,reason:o}):(r=i.console)&&r.error&&r.error("Unhandled promise rejection",o)})),t._h=Ne||We(t)?2:1),t._a=void 0,a&&e.e)throw e.v}))},We=function(t){return 1!==t._h&&0===(t._a||t._c).length},ze=function(t){Te.call(i,(function(){var e;Ne?Le.emit("rejectionHandled",t):(e=i.onrejectionhandled)&&e({promise:t,reason:t._v})}))},He=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),Ie(e,!0))},Ge=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw Ae("Promise can't be resolved itself");(e=Ue(t))?Ce((function(){var r={_w:n,_d:!1};try{e.call(t,B(Ge,r,1),B(He,r,1))}catch(t){He.call(r,t)}})):(n._v=t,n._s=1,Ie(n,!1))}catch(t){He.call({_w:n,_d:!1},t)}}};Be||(Me=function(t){!function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!")}(this,Me,"Promise","_h"),q(t),_e.call(this);try{t(B(Ge,this,1),B(He,this,1))}catch(t){He.call(this,t)}},(_e=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=function(t,e,n){for(var r in e)F(t,r,e[r],n);return t}(Me.prototype,{then:function(t,n){var r,o,i,a=qe((r=Me,void 0===(i=e(this).constructor)||null==(o=e(i)[Yt])?r:q(o)));return a.ok="function"!=typeof t||t,a.fail="function"==typeof n&&n,a.domain=Ne?Le.domain:void 0,this._c.push(a),this._a&&this._a.push(a),this._s&&Ie(this,!1),a.promise},catch:function(t){return this.then(void 0,t)}}),xe=function(){var t=new _e;this.promise=t,this.resolve=B(Ge,t,1),this.reject=B(He,t,1)},me.f=qe=function(t){return t===Me||t===Pe?new xe(t):Oe(t)}),I(I.G+I.W+I.F*!Be,{Promise:Me}),ft(Me,"Promise"),function(t){var e=i[t];r&&e&&!e[be]&&l.f(e,be,{configurable:!0,get:function(){return this}})}("Promise"),Pe=v.Promise,I(I.S+I.F*!Be,"Promise",{reject:function(t){var e=qe(this);return(0,e.reject)(t),e.promise}}),I(I.S+I.F*!Be,"Promise",{resolve:function(n){return function(n,r){if(e(n),t(r)&&r.constructor===n)return r;var o=me.f(n);return(0,o.resolve)(r),o.promise}(this,n)}}),I(I.S+I.F*!(Be&&function(t,e){if(!e&&!Se)return!1;var n=!1;try{var r=[7],o=r[je]();o.next=function(){return{done:n=!0}},r[je]=function(){return o},t(r)}catch(t){}return n}((function(t){Me.all(t).catch(Fe)}))),"Promise",{all:function(t){var e=this,n=qe(e),r=n.resolve,o=n.reject,i=ge((function(){var n=[],i=0,a=1;Qt(t,!1,(function(t){var c=i++,s=!1;n.push(void 0),a++,e.resolve(t).then((function(t){s||(s=!0,n[c]=t,--a||r(n))}),o)})),--a||r(n)}));return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=qe(e),r=n.reject,o=ge((function(){Qt(t,!1,(function(t){e.resolve(t).then(n.resolve,r)}))}));return o.e&&r(o.v),n.promise}});var Ve={};Ve[b("toStringTag")]="z",Ve+""!="[object z]"&&F(Object.prototype,"toString",(function(){return"[object "+Gt(this)+"]"}),!0);var Xe=b("match"),Je=function(e,n,r){if(t(o=n)&&(void 0!==(i=o[Xe])?i:"RegExp"==C(o)))throw TypeError("String#"+r+" doesn't accept regex!");var o,i;return String(L(e))},Ke=b("match"),$e=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[Ke]=!1,!"/./"[t](e)}catch(t){}}return!0},Qe="".startsWith;I(I.P+I.F*$e("startsWith"),"String",{startsWith:function(t){var e=Je(this,t,"startsWith"),n=G(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return Qe?Qe.call(e,r,n):e.slice(n,n+r.length)===r}});var Ye="".endsWith;I(I.P+I.F*$e("endsWith"),"String",{endsWith:function(t){var e=Je(this,t,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=G(e.length),o=void 0===n?r:Math.min(G(n),r),i=String(t);return Ye?Ye.call(e,i,o):e.slice(o-i.length,o)===i}});var Ze=J(!0);I(I.P,"Array",{includes:function(t){return Ze(this,t,arguments.length>1?arguments[1]:void 0)}}),O("includes");var tn=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}},en=Object.prototype.toString;function nn(t){return"[object Array]"===en.call(t)}function rn(t){return void 0===t}function on(t){return null!==t&&"object"==typeof t}function an(t){return"[object Function]"===en.call(t)}function cn(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),nn(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}var sn={isArray:nn,isArrayBuffer:function(t){return"[object ArrayBuffer]"===en.call(t)},isBuffer:function(t){return null!==t&&!rn(t)&&null!==t.constructor&&!rn(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:on,isUndefined:rn,isDate:function(t){return"[object Date]"===en.call(t)},isFile:function(t){return"[object File]"===en.call(t)},isBlob:function(t){return"[object Blob]"===en.call(t)},isFunction:an,isStream:function(t){return on(t)&&an(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:cn,merge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]=n}for(var r=0,o=arguments.length;r<o;r++)cn(arguments[r],n);return e},deepMerge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]="object"==typeof n?t({},n):n}for(var r=0,o=arguments.length;r<o;r++)cn(arguments[r],n);return e},extend:function(t,e,n){return cn(e,(function(e,r){t[r]=n&&"function"==typeof e?tn(e,n):e})),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}};function un(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var fn=function(t,e,n){if(!e)return t;var r;if(n)r=n(e);else if(sn.isURLSearchParams(e))r=e.toString();else{var o=[];sn.forEach(e,(function(t,e){null!=t&&(sn.isArray(t)?e+="[]":t=[t],sn.forEach(t,(function(t){sn.isDate(t)?t=t.toISOString():sn.isObject(t)&&(t=JSON.stringify(t)),o.push(un(e)+"="+un(t))})))})),r=o.join("&")}if(r){var i=t.indexOf("#");-1!==i&&(t=t.slice(0,i)),t+=(-1===t.indexOf("?")?"?":"&")+r}return t};function ln(){this.handlers=[]}ln.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},ln.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},ln.prototype.forEach=function(t){sn.forEach(this.handlers,(function(e){null!==e&&t(e)}))};var hn=ln,pn=function(t,e,n){return sn.forEach(n,(function(n){t=n(t,e)})),t},dn=function(t){return!(!t||!t.__CANCEL__)},vn=function(t,e){sn.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))},mn=function(t,e,n,r,o){return function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}(new Error(t),e,n,r,o)},gn=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],yn=sn.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=r(window.location.href),function(e){var n=sn.isString(e)?r(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0},wn=sn.isStandardBrowserEnv()?{write:function(t,e,n,r,o,i){var a=[];a.push(t+"="+encodeURIComponent(e)),sn.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),sn.isString(r)&&a.push("path="+r),sn.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},bn=function(t){return new Promise((function(e,n){var r=t.data,o=t.headers;sn.isFormData(r)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(t.auth){var a=t.auth.username||"",c=t.auth.password||"";o.Authorization="Basic "+btoa(a+":"+c)}var s,u,f=(s=t.baseURL,u=t.url,s&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u)?function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}(s,u):u);if(i.open(t.method.toUpperCase(),fn(f,t.params,t.paramsSerializer),!0),i.timeout=t.timeout,i.onreadystatechange=function(){if(i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in i?function(t){var e,n,r,o={};return t?(sn.forEach(t.split("\n"),(function(t){if(r=t.indexOf(":"),e=sn.trim(t.substr(0,r)).toLowerCase(),n=sn.trim(t.substr(r+1)),e){if(o[e]&&gn.indexOf(e)>=0)return;o[e]="set-cookie"===e?(o[e]?o[e]:[]).concat([n]):o[e]?o[e]+", "+n:n}})),o):o}(i.getAllResponseHeaders()):null,o={data:t.responseType&&"text"!==t.responseType?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:r,config:t,request:i};!function(t,e,n){var r=n.config.validateStatus;!r||r(n.status)?t(n):e(mn("Request failed with status code "+n.status,n.config,null,n.request,n))}(e,n,o),i=null}},i.onabort=function(){i&&(n(mn("Request aborted",t,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(mn("Network Error",t,null,i)),i=null},i.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(mn(e,t,"ECONNABORTED",i)),i=null},sn.isStandardBrowserEnv()){var l=wn,h=(t.withCredentials||yn(f))&&t.xsrfCookieName?l.read(t.xsrfCookieName):void 0;h&&(o[t.xsrfHeaderName]=h)}if("setRequestHeader"in i&&sn.forEach(o,(function(t,e){void 0===r&&"content-type"===e.toLowerCase()?delete o[e]:i.setRequestHeader(e,t)})),sn.isUndefined(t.withCredentials)||(i.withCredentials=!!t.withCredentials),t.responseType)try{i.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&i.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){i&&(i.abort(),n(t),i=null)})),void 0===r&&(r=null),i.send(r)}))},jn={"Content-Type":"application/x-www-form-urlencoded"};function Sn(t,e){!sn.isUndefined(t)&&sn.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var En,_n={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(En=bn),En),transformRequest:[function(t,e){return vn(e,"Accept"),vn(e,"Content-Type"),sn.isFormData(t)||sn.isArrayBuffer(t)||sn.isBuffer(t)||sn.isStream(t)||sn.isFile(t)||sn.isBlob(t)?t:sn.isArrayBufferView(t)?t.buffer:sn.isURLSearchParams(t)?(Sn(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):sn.isObject(t)?(Sn(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};_n.headers={common:{Accept:"application/json, text/plain, */*"}},sn.forEach(["delete","get","head"],(function(t){_n.headers[t]={}})),sn.forEach(["post","put","patch"],(function(t){_n.headers[t]=sn.merge(jn)}));var On=_n;function xn(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var Pn=function(t){return xn(t),t.headers=t.headers||{},t.data=pn(t.data,t.headers,t.transformRequest),t.headers=sn.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),sn.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||On.adapter)(t).then((function(e){return xn(t),e.data=pn(e.data,e.headers,t.transformResponse),e}),(function(e){return dn(e)||(xn(t),e&&e.response&&(e.response.data=pn(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))},Tn=function(t,e){e=e||{};var n={},r=["url","method","params","data"],o=["headers","auth","proxy"],i=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];sn.forEach(r,(function(t){void 0!==e[t]&&(n[t]=e[t])})),sn.forEach(o,(function(r){sn.isObject(e[r])?n[r]=sn.deepMerge(t[r],e[r]):void 0!==e[r]?n[r]=e[r]:sn.isObject(t[r])?n[r]=sn.deepMerge(t[r]):void 0!==t[r]&&(n[r]=t[r])})),sn.forEach(i,(function(r){void 0!==e[r]?n[r]=e[r]:void 0!==t[r]&&(n[r]=t[r])}));var a=r.concat(o).concat(i),c=Object.keys(e).filter((function(t){return-1===a.indexOf(t)}));return sn.forEach(c,(function(r){void 0!==e[r]?n[r]=e[r]:void 0!==t[r]&&(n[r]=t[r])})),n};function Cn(t){this.defaults=t,this.interceptors={request:new hn,response:new hn}}Cn.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=Tn(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[Pn,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));e.length;)n=n.then(e.shift(),e.shift());return n},Cn.prototype.getUri=function(t){return t=Tn(this.defaults,t),fn(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},sn.forEach(["delete","get","head","options"],(function(t){Cn.prototype[t]=function(e,n){return this.request(sn.merge(n||{},{method:t,url:e}))}})),sn.forEach(["post","put","patch"],(function(t){Cn.prototype[t]=function(e,n,r){return this.request(sn.merge(r||{},{method:t,url:e,data:n}))}}));var An=Cn;function Ln(t){this.message=t}Ln.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},Ln.prototype.__CANCEL__=!0;var Rn=Ln;function kn(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;t((function(t){n.reason||(n.reason=new Rn(t),e(n.reason))}))}kn.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},kn.source=function(){var t;return{token:new kn((function(e){t=e})),cancel:t}};var Mn=kn;function Nn(t){var e=new An(t),n=tn(An.prototype.request,e);return sn.extend(n,An.prototype,e),sn.extend(n,e),n}var Fn=Nn(On);Fn.Axios=An,Fn.create=function(t){return Nn(Tn(Fn.defaults,t))},Fn.Cancel=Rn,Fn.CancelToken=Mn,Fn.isCancel=dn,Fn.all=function(t){return Promise.all(t)},Fn.spread=function(t){return function(e){return t.apply(null,e)}};var qn=Fn,Bn=Fn;qn.default=Bn;var Un=qn,In=["v2","v3","canary"],Dn="@tryghost/content-api";return function t(e){var n=e.url,r=e.host,o=e.ghostPath,i=void 0===o?"ghost":o,a=e.version,c=e.key;if(r&&(console.warn("".concat(Dn,": The 'host' parameter is deprecated, please use 'url' instead")),n||(n=r)),this instanceof t)return t({url:n,version:a,key:c});if(!a)throw new Error("".concat(Dn," Config Missing: 'version' is required. E.g. ").concat(In.join(",")));if(!In.includes(a))throw new Error("".concat(Dn," Config Invalid: 'version' ").concat(a," is not supported"));if(!n)throw new Error("".concat(Dn," Config Missing: 'url' is required. E.g. 'https://site.com'"));if(!/https?:\/\//.test(n))throw new Error("".concat(Dn," Config Invalid: 'url' ").concat(n," requires a protocol. E.g. 'https://site.com'"));if(n.endsWith("/"))throw new Error("".concat(Dn," Config Invalid: 'url' ").concat(n," must not have a trailing slash. E.g. 'https://site.com'"));if(i.endsWith("/")||i.startsWith("/"))throw new Error("".concat(Dn," Config Invalid: 'ghostPath' ").concat(i," must not have a leading or trailing slash. E.g. 'ghost'"));if(c&&!/[0-9a-f]{26}/.test(c))throw new Error("".concat(Dn," Config Invalid: 'key' ").concat(c," must have 26 hex characters"));var s=["posts","authors","tags","pages","settings"].reduce((function(t,e){return Object.assign(t,function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},e,{read:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;if(!t||!t.id&&!t.slug)return Promise.reject(new Error("".concat(Dn," read requires an id or slug.")));var o=Object.assign({},t,n);return u(e,o,t.id||"slug/".concat(t.slug),r)},browse:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return u(e,t,null,n)}}))}),{});return delete s.settings.read,s;function u(t,e,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(!o&&!c)return Promise.reject(new Error("".concat(Dn," Config Missing: 'key' is required.")));delete e.id;var s=o?{Authorization:"GhostMembers ".concat(o)}:void 0;return Un.get("".concat(n,"/").concat(i,"/api/").concat(a,"/content/").concat(t,"/").concat(r?r+"/":""),{params:Object.assign({key:c},e),paramsSerializer:function(t){return Object.keys(t).reduce((function(e,n){var r=encodeURIComponent([].concat(t[n]).join(","));return e.concat("".concat(n,"=").concat(r))}),[]).join("&")},headers:s}).then((function(e){return Array.isArray(e.data[t])?1!==e.data[t].length||e.data.meta?Object.assign(e.data[t],{meta:e.data.meta}):e.data[t][0]:e.data[t]})).catch((function(t){if(t.response&&t.response.data&&t.response.data.errors){var e=t.response.data.errors[0],n=new Error(e.message),r=Object.keys(e);throw n.name=e.type,r.forEach((function(t){n[t]=e[t]})),n.response=t.response,n.request=t.request,n.config=t.config,n}throw t}))}}}));