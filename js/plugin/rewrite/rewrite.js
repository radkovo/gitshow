!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).RevealRewrite=e()}(this,(function(){"use strict";function t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function e(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=function(t){return t&&t.Math==Math&&t},o=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r&&r)||function(){return this}()||Function("return this")(),i={},u=function(t){try{return!!t()}catch(t){return!0}},c=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a=!u((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),f=a,l=Function.prototype.call,s=f?l.bind(l):function(){return l.apply(l,arguments)},p={},g={}.propertyIsEnumerable,v=Object.getOwnPropertyDescriptor,d=v&&!g.call({1:2},1);p.f=d?function(t){var e=v(this,t);return!!e&&e.enumerable}:g;var y,h,b=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},m=a,S=Function.prototype,x=S.call,O=m&&S.bind.bind(x,x),w=m?O:function(t){return function(){return x.apply(t,arguments)}},E=w,j=E({}.toString),P=E("".slice),R=function(t){return P(j(t),8,-1)},I=u,T=R,L=Object,A=w("".split),M=I((function(){return!L("z").propertyIsEnumerable(0)}))?function(t){return"String"==T(t)?A(t,""):L(t)}:L,C=function(t){return null==t},_=C,D=TypeError,k=function(t){if(_(t))throw D("Can't call method on "+t);return t},F=M,N=k,$=function(t){return F(N(t))},G="object"==typeof document&&document.all,z={all:G,IS_HTMLDDA:void 0===G&&void 0!==G},H=z.all,V=z.IS_HTMLDDA?function(t){return"function"==typeof t||t===H}:function(t){return"function"==typeof t},U=V,B=z.all,W=z.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:U(t)||t===B}:function(t){return"object"==typeof t?null!==t:U(t)},K=o,Y=V,q=function(t){return Y(t)?t:void 0},X=function(t,e){return arguments.length<2?q(K[t]):K[t]&&K[t][e]},Z=w({}.isPrototypeOf),J=o,Q="undefined"!=typeof navigator&&String(navigator.userAgent)||"",tt=J.process,et=J.Deno,rt=tt&&tt.versions||et&&et.version,nt=rt&&rt.v8;nt&&(h=(y=nt.split("."))[0]>0&&y[0]<4?1:+(y[0]+y[1])),!h&&Q&&(!(y=Q.match(/Edge\/(\d+)/))||y[1]>=74)&&(y=Q.match(/Chrome\/(\d+)/))&&(h=+y[1]);var ot=h,it=u,ut=!!Object.getOwnPropertySymbols&&!it((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&ot&&ot<41})),ct=ut&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,at=X,ft=V,lt=Z,st=Object,pt=ct?function(t){return"symbol"==typeof t}:function(t){var e=at("Symbol");return ft(e)&&lt(e.prototype,st(t))},gt=String,vt=V,dt=function(t){try{return gt(t)}catch(t){return"Object"}},yt=TypeError,ht=function(t){if(vt(t))return t;throw yt(dt(t)+" is not a function")},bt=ht,mt=C,St=function(t,e){var r=t[e];return mt(r)?void 0:bt(r)},xt=s,Ot=V,wt=W,Et=TypeError,jt={},Pt={get exports(){return jt},set exports(t){jt=t}},Rt=o,It=Object.defineProperty,Tt=function(t,e){try{It(Rt,t,{value:e,configurable:!0,writable:!0})}catch(r){Rt[t]=e}return e},Lt=Tt,At="__core-js_shared__",Mt=o[At]||Lt(At,{}),Ct=Mt;(Pt.exports=function(t,e){return Ct[t]||(Ct[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.28.0",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.28.0/LICENSE",source:"https://github.com/zloirock/core-js"});var _t=k,Dt=Object,kt=function(t){return Dt(_t(t))},Ft=kt,Nt=w({}.hasOwnProperty),$t=Object.hasOwn||function(t,e){return Nt(Ft(t),e)},Gt=w,zt=0,Ht=Math.random(),Vt=Gt(1..toString),Ut=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Vt(++zt+Ht,36)},Bt=jt,Wt=$t,Kt=Ut,Yt=ut,qt=ct,Xt=o.Symbol,Zt=Bt("wks"),Jt=qt?Xt.for||Xt:Xt&&Xt.withoutSetter||Kt,Qt=function(t){return Wt(Zt,t)||(Zt[t]=Yt&&Wt(Xt,t)?Xt[t]:Jt("Symbol."+t)),Zt[t]},te=s,ee=W,re=pt,ne=St,oe=function(t,e){var r,n;if("string"===e&&Ot(r=t.toString)&&!wt(n=xt(r,t)))return n;if(Ot(r=t.valueOf)&&!wt(n=xt(r,t)))return n;if("string"!==e&&Ot(r=t.toString)&&!wt(n=xt(r,t)))return n;throw Et("Can't convert object to primitive value")},ie=TypeError,ue=Qt("toPrimitive"),ce=function(t,e){if(!ee(t)||re(t))return t;var r,n=ne(t,ue);if(n){if(void 0===e&&(e="default"),r=te(n,t,e),!ee(r)||re(r))return r;throw ie("Can't convert object to primitive value")}return void 0===e&&(e="number"),oe(t,e)},ae=pt,fe=function(t){var e=ce(t,"string");return ae(e)?e:e+""},le=W,se=o.document,pe=le(se)&&le(se.createElement),ge=function(t){return pe?se.createElement(t):{}},ve=ge,de=!c&&!u((function(){return 7!=Object.defineProperty(ve("div"),"a",{get:function(){return 7}}).a})),ye=c,he=s,be=p,me=b,Se=$,xe=fe,Oe=$t,we=de,Ee=Object.getOwnPropertyDescriptor;i.f=ye?Ee:function(t,e){if(t=Se(t),e=xe(e),we)try{return Ee(t,e)}catch(t){}if(Oe(t,e))return me(!he(be.f,t,e),t[e])};var je={},Pe=c&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Re=W,Ie=String,Te=TypeError,Le=function(t){if(Re(t))return t;throw Te(Ie(t)+" is not an object")},Ae=c,Me=de,Ce=Pe,_e=Le,De=fe,ke=TypeError,Fe=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,$e="enumerable",Ge="configurable",ze="writable";je.f=Ae?Ce?function(t,e,r){if(_e(t),e=De(e),_e(r),"function"==typeof t&&"prototype"===e&&"value"in r&&ze in r&&!r[ze]){var n=Ne(t,e);n&&n[ze]&&(t[e]=r.value,r={configurable:Ge in r?r[Ge]:n[Ge],enumerable:$e in r?r[$e]:n[$e],writable:!1})}return Fe(t,e,r)}:Fe:function(t,e,r){if(_e(t),e=De(e),_e(r),Me)try{return Fe(t,e,r)}catch(t){}if("get"in r||"set"in r)throw ke("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var He=je,Ve=b,Ue=c?function(t,e,r){return He.f(t,e,Ve(1,r))}:function(t,e,r){return t[e]=r,t},Be={},We={get exports(){return Be},set exports(t){Be=t}},Ke=c,Ye=$t,qe=Function.prototype,Xe=Ke&&Object.getOwnPropertyDescriptor,Ze=Ye(qe,"name"),Je={EXISTS:Ze,PROPER:Ze&&"something"===function(){}.name,CONFIGURABLE:Ze&&(!Ke||Ke&&Xe(qe,"name").configurable)},Qe=V,tr=Mt,er=w(Function.toString);Qe(tr.inspectSource)||(tr.inspectSource=function(t){return er(t)});var rr,nr,or,ir=tr.inspectSource,ur=V,cr=o.WeakMap,ar=ur(cr)&&/native code/.test(String(cr)),fr=Ut,lr=jt("keys"),sr=function(t){return lr[t]||(lr[t]=fr(t))},pr={},gr=ar,vr=o,dr=W,yr=Ue,hr=$t,br=Mt,mr=sr,Sr=pr,xr="Object already initialized",Or=vr.TypeError,wr=vr.WeakMap;if(gr||br.state){var Er=br.state||(br.state=new wr);Er.get=Er.get,Er.has=Er.has,Er.set=Er.set,rr=function(t,e){if(Er.has(t))throw Or(xr);return e.facade=t,Er.set(t,e),e},nr=function(t){return Er.get(t)||{}},or=function(t){return Er.has(t)}}else{var jr=mr("state");Sr[jr]=!0,rr=function(t,e){if(hr(t,jr))throw Or(xr);return e.facade=t,yr(t,jr,e),e},nr=function(t){return hr(t,jr)?t[jr]:{}},or=function(t){return hr(t,jr)}}var Pr={set:rr,get:nr,has:or,enforce:function(t){return or(t)?nr(t):rr(t,{})},getterFor:function(t){return function(e){var r;if(!dr(e)||(r=nr(e)).type!==t)throw Or("Incompatible receiver, "+t+" required");return r}}},Rr=w,Ir=u,Tr=V,Lr=$t,Ar=c,Mr=Je.CONFIGURABLE,Cr=ir,_r=Pr.enforce,Dr=Pr.get,kr=String,Fr=Object.defineProperty,Nr=Rr("".slice),$r=Rr("".replace),Gr=Rr([].join),zr=Ar&&!Ir((function(){return 8!==Fr((function(){}),"length",{value:8}).length})),Hr=String(String).split("String"),Vr=We.exports=function(t,e,r){"Symbol("===Nr(kr(e),0,7)&&(e="["+$r(kr(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!Lr(t,"name")||Mr&&t.name!==e)&&(Ar?Fr(t,"name",{value:e,configurable:!0}):t.name=e),zr&&r&&Lr(r,"arity")&&t.length!==r.arity&&Fr(t,"length",{value:r.arity});try{r&&Lr(r,"constructor")&&r.constructor?Ar&&Fr(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=_r(t);return Lr(n,"source")||(n.source=Gr(Hr,"string"==typeof e?e:"")),t};Function.prototype.toString=Vr((function(){return Tr(this)&&Dr(this).source||Cr(this)}),"toString");var Ur=V,Br=je,Wr=Be,Kr=Tt,Yr=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(Ur(r)&&Wr(r,i,n),n.global)o?t[e]=r:Kr(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:Br.f(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t},qr={},Xr=Math.ceil,Zr=Math.floor,Jr=Math.trunc||function(t){var e=+t;return(e>0?Zr:Xr)(e)},Qr=function(t){var e=+t;return e!=e||0===e?0:Jr(e)},tn=Qr,en=Math.max,rn=Math.min,nn=Qr,on=Math.min,un=function(t){return t>0?on(nn(t),9007199254740991):0},cn=un,an=function(t){return cn(t.length)},fn=$,ln=function(t,e){var r=tn(t);return r<0?en(r+e,0):rn(r,e)},sn=an,pn=function(t){return function(e,r,n){var o,i=fn(e),u=sn(i),c=ln(n,u);if(t&&r!=r){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},gn={includes:pn(!0),indexOf:pn(!1)},vn=$t,dn=$,yn=gn.indexOf,hn=pr,bn=w([].push),mn=function(t,e){var r,n=dn(t),o=0,i=[];for(r in n)!vn(hn,r)&&vn(n,r)&&bn(i,r);for(;e.length>o;)vn(n,r=e[o++])&&(~yn(i,r)||bn(i,r));return i},Sn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],xn=mn,On=Sn.concat("length","prototype");qr.f=Object.getOwnPropertyNames||function(t){return xn(t,On)};var wn={};wn.f=Object.getOwnPropertySymbols;var En=X,jn=qr,Pn=wn,Rn=Le,In=w([].concat),Tn=En("Reflect","ownKeys")||function(t){var e=jn.f(Rn(t)),r=Pn.f;return r?In(e,r(t)):e},Ln=$t,An=Tn,Mn=i,Cn=je,_n=u,Dn=V,kn=/#|\.prototype\./,Fn=function(t,e){var r=$n[Nn(t)];return r==zn||r!=Gn&&(Dn(e)?_n(e):!!e)},Nn=Fn.normalize=function(t){return String(t).replace(kn,".").toLowerCase()},$n=Fn.data={},Gn=Fn.NATIVE="N",zn=Fn.POLYFILL="P",Hn=Fn,Vn=o,Un=i.f,Bn=Ue,Wn=Yr,Kn=Tt,Yn=function(t,e,r){for(var n=An(e),o=Cn.f,i=Mn.f,u=0;u<n.length;u++){var c=n[u];Ln(t,c)||r&&Ln(r,c)||o(t,c,i(e,c))}},qn=Hn,Xn=function(t,e){var r,n,o,i,u,c=t.target,a=t.global,f=t.stat;if(r=a?Vn:f?Vn[c]||Kn(c,{}):(Vn[c]||{}).prototype)for(n in e){if(i=e[n],o=t.dontCallGetSet?(u=Un(r,n))&&u.value:r[n],!qn(a?n:c+(f?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Yn(i,o)}(t.sham||o&&o.sham)&&Bn(i,"sham",!0),Wn(r,n,i,t)}},Zn=R,Jn=w,Qn=function(t){if("Function"===Zn(t))return Jn(t)},to=ht,eo=a,ro=Qn(Qn.bind),no=R,oo=Array.isArray||function(t){return"Array"==no(t)},io={};io[Qt("toStringTag")]="z";var uo="[object z]"===String(io),co=uo,ao=V,fo=R,lo=Qt("toStringTag"),so=Object,po="Arguments"==fo(function(){return arguments}()),go=co?fo:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=so(t),lo))?r:po?fo(e):"Object"==(n=fo(e))&&ao(e.callee)?"Arguments":n},vo=w,yo=u,ho=V,bo=go,mo=ir,So=function(){},xo=[],Oo=X("Reflect","construct"),wo=/^\s*(?:class|function)\b/,Eo=vo(wo.exec),jo=!wo.exec(So),Po=function(t){if(!ho(t))return!1;try{return Oo(So,xo,t),!0}catch(t){return!1}},Ro=function(t){if(!ho(t))return!1;switch(bo(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return jo||!!Eo(wo,mo(t))}catch(t){return!0}};Ro.sham=!0;var Io=!Oo||yo((function(){var t;return Po(Po.call)||!Po(Object)||!Po((function(){t=!0}))||t}))?Ro:Po,To=oo,Lo=Io,Ao=W,Mo=Qt("species"),Co=Array,_o=function(t){var e;return To(t)&&(e=t.constructor,(Lo(e)&&(e===Co||To(e.prototype))||Ao(e)&&null===(e=e[Mo]))&&(e=void 0)),void 0===e?Co:e},Do=function(t,e){return to(t),void 0===e?t:eo?ro(t,e):function(){return t.apply(e,arguments)}},ko=M,Fo=kt,No=an,$o=function(t,e){return new(_o(t))(0===e?0:e)},Go=w([].push),zo=function(t){var e=1==t,r=2==t,n=3==t,o=4==t,i=6==t,u=7==t,c=5==t||i;return function(a,f,l,s){for(var p,g,v=Fo(a),d=ko(v),y=Do(f,l),h=No(d),b=0,m=s||$o,S=e?m(a,h):r||u?m(a,0):void 0;h>b;b++)if((c||b in d)&&(g=y(p=d[b],b,v),t))if(e)S[b]=g;else if(g)switch(t){case 3:return!0;case 5:return p;case 6:return b;case 2:Go(S,p)}else switch(t){case 4:return!1;case 7:Go(S,p)}return i?-1:n||o?o:S}},Ho={forEach:zo(0),map:zo(1),filter:zo(2),some:zo(3),every:zo(4),find:zo(5),findIndex:zo(6),filterReject:zo(7)},Vo=u,Uo=Ho.forEach,Bo=function(t,e){var r=[][t];return!!r&&Vo((function(){r.call(null,e||function(){return 1},1)}))}("forEach")?[].forEach:function(t){return Uo(this,t,arguments.length>1?arguments[1]:void 0)};Xn({target:"Array",proto:!0,forced:[].forEach!=Bo},{forEach:Bo});var Wo=go,Ko=uo?{}.toString:function(){return"[object "+Wo(this)+"]"};uo||Yr(Object.prototype,"toString",Ko,{unsafe:!0});var Yo=ge("span").classList,qo=Yo&&Yo.constructor&&Yo.constructor.prototype,Xo=o,Zo={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Jo=qo===Object.prototype?void 0:qo,Qo=Bo,ti=Ue,ei=function(t){if(t&&t.forEach!==Qo)try{ti(t,"forEach",Qo)}catch(e){t.forEach=Qo}};for(var ri in Zo)Zo[ri]&&ei(Xo[ri]&&Xo[ri].prototype);ei(Jo);var ni=Be,oi=je,ii=function(t,e,r){return r.get&&ni(r.get,e,{getter:!0}),r.set&&ni(r.set,e,{setter:!0}),oi.f(t,e,r)},ui=Le,ci=function(){var t=ui(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e},ai=c,fi=ii,li=ci,si=u,pi=o.RegExp,gi=pi.prototype;ai&&si((function(){var t=!0;try{pi(".","d")}catch(e){t=!1}var e={},r="",n=t?"dgimsy":"gimsy",o=function(t,n){Object.defineProperty(e,t,{get:function(){return r+=n,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var u in t&&(i.hasIndices="d"),i)o(u,i[u]);return Object.getOwnPropertyDescriptor(gi,"flags").get.call(e)!==n||r!==n}))&&fi(gi,"flags",{configurable:!0,get:li});var vi=w,di=ht,yi=V,hi=String,bi=TypeError,mi=function(t,e,r){try{return vi(di(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(t){}},Si=Le,xi=function(t){if("object"==typeof t||yi(t))return t;throw bi("Can't set "+hi(t)+" as a prototype")},Oi=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=mi(Object.prototype,"__proto__","set"))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return Si(r),xi(n),e?t(r,n):r.__proto__=n,r}}():void 0),wi=V,Ei=W,ji=Oi,Pi=W,Ri=R,Ii=Qt("match"),Ti=go,Li=String,Ai=function(t){if("Symbol"===Ti(t))throw TypeError("Cannot convert a Symbol value to a string");return Li(t)},Mi=s,Ci=$t,_i=Z,Di=ci,ki=RegExp.prototype,Fi=function(t){var e=t.flags;return void 0!==e||"flags"in ki||Ci(t,"flags")||!_i(ki,t)?e:Mi(Di,t)},Ni=u,$i=o.RegExp,Gi=Ni((function(){var t=$i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),zi=Gi||Ni((function(){return!$i("a","y").sticky})),Hi={BROKEN_CARET:Gi||Ni((function(){var t=$i("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),MISSED_STICKY:zi,UNSUPPORTED_Y:Gi},Vi=je.f,Ui=X,Bi=ii,Wi=c,Ki=Qt("species"),Yi=u,qi=o.RegExp,Xi=Yi((function(){var t=qi(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),Zi=u,Ji=o.RegExp,Qi=Zi((function(){var t=Ji("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),tu=c,eu=o,ru=w,nu=Hn,ou=function(t,e,r){var n,o;return ji&&wi(n=e.constructor)&&n!==r&&Ei(o=n.prototype)&&o!==r.prototype&&ji(t,o),t},iu=Ue,uu=qr.f,cu=Z,au=function(t){var e;return Pi(t)&&(void 0!==(e=t[Ii])?!!e:"RegExp"==Ri(t))},fu=Ai,lu=Fi,su=Hi,pu=function(t,e,r){r in t||Vi(t,r,{configurable:!0,get:function(){return e[r]},set:function(t){e[r]=t}})},gu=Yr,vu=u,du=$t,yu=Pr.enforce,hu=function(t){var e=Ui(t);Wi&&e&&!e[Ki]&&Bi(e,Ki,{configurable:!0,get:function(){return this}})},bu=Xi,mu=Qi,Su=Qt("match"),xu=eu.RegExp,Ou=xu.prototype,wu=eu.SyntaxError,Eu=ru(Ou.exec),ju=ru("".charAt),Pu=ru("".replace),Ru=ru("".indexOf),Iu=ru("".slice),Tu=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,Lu=/a/g,Au=/a/g,Mu=new xu(Lu)!==Lu,Cu=su.MISSED_STICKY,_u=su.UNSUPPORTED_Y,Du=tu&&(!Mu||Cu||bu||mu||vu((function(){return Au[Su]=!1,xu(Lu)!=Lu||xu(Au)==Au||"/a/i"!=xu(Lu,"i")})));if(nu("RegExp",Du)){for(var ku=function(t,e){var r,n,o,i,u,c,a=cu(Ou,this),f=au(t),l=void 0===e,s=[],p=t;if(!a&&f&&l&&t.constructor===ku)return t;if((f||cu(Ou,t))&&(t=t.source,l&&(e=lu(p))),t=void 0===t?"":fu(t),e=void 0===e?"":fu(e),p=t,bu&&"dotAll"in Lu&&(n=!!e&&Ru(e,"s")>-1)&&(e=Pu(e,/s/g,"")),r=e,Cu&&"sticky"in Lu&&(o=!!e&&Ru(e,"y")>-1)&&_u&&(e=Pu(e,/y/g,"")),mu&&(i=function(t){for(var e,r=t.length,n=0,o="",i=[],u={},c=!1,a=!1,f=0,l="";n<=r;n++){if("\\"===(e=ju(t,n)))e+=ju(t,++n);else if("]"===e)c=!1;else if(!c)switch(!0){case"["===e:c=!0;break;case"("===e:Eu(Tu,Iu(t,n+1))&&(n+=2,a=!0),o+=e,f++;continue;case">"===e&&a:if(""===l||du(u,l))throw new wu("Invalid capture group name");u[l]=!0,i[i.length]=[l,f],a=!1,l="";continue}a?l+=e:o+=e}return[o,i]}(t),t=i[0],s=i[1]),u=ou(xu(t,e),a?this:Ou,ku),(n||o||s.length)&&(c=yu(u),n&&(c.dotAll=!0,c.raw=ku(function(t){for(var e,r=t.length,n=0,o="",i=!1;n<=r;n++)"\\"!==(e=ju(t,n))?i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),o+=e):o+="[\\s\\S]":o+=e+ju(t,++n);return o}(t),r)),o&&(c.sticky=!0),s.length&&(c.groups=s)),t!==p)try{iu(u,"source",""===p?"(?:)":p)}catch(t){}return u},Fu=uu(xu),Nu=0;Fu.length>Nu;)pu(ku,xu,Fu[Nu++]);Ou.constructor=ku,ku.prototype=Ou,gu(eu,"RegExp",ku,{constructor:!0})}hu("RegExp");var $u={},Gu=mn,zu=Sn,Hu=Object.keys||function(t){return Gu(t,zu)},Vu=c,Uu=Pe,Bu=je,Wu=Le,Ku=$,Yu=Hu;$u.f=Vu&&!Uu?Object.defineProperties:function(t,e){Wu(t);for(var r,n=Ku(e),o=Yu(e),i=o.length,u=0;i>u;)Bu.f(t,r=o[u++],n[r]);return t};var qu,Xu=X("document","documentElement"),Zu=Le,Ju=$u,Qu=Sn,tc=pr,ec=Xu,rc=ge,nc="prototype",oc="script",ic=sr("IE_PROTO"),uc=function(){},cc=function(t){return"<"+oc+">"+t+"</"+oc+">"},ac=function(t){t.write(cc("")),t.close();var e=t.parentWindow.Object;return t=null,e},fc=function(){try{qu=new ActiveXObject("htmlfile")}catch(t){}var t,e,r;fc="undefined"!=typeof document?document.domain&&qu?ac(qu):(e=rc("iframe"),r="java"+oc+":",e.style.display="none",ec.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(cc("document.F=Object")),t.close(),t.F):ac(qu);for(var n=Qu.length;n--;)delete fc[nc][Qu[n]];return fc()};tc[ic]=!0;var lc=Object.create||function(t,e){var r;return null!==t?(uc[nc]=Zu(t),r=new uc,uc[nc]=null,r[ic]=t):r=fc(),void 0===e?r:Ju.f(r,e)},sc=s,pc=w,gc=Ai,vc=ci,dc=Hi,yc=lc,hc=Pr.get,bc=Xi,mc=Qi,Sc=jt("native-string-replace",String.prototype.replace),xc=RegExp.prototype.exec,Oc=xc,wc=pc("".charAt),Ec=pc("".indexOf),jc=pc("".replace),Pc=pc("".slice),Rc=function(){var t=/a/,e=/b*/g;return sc(xc,t,"a"),sc(xc,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),Ic=dc.BROKEN_CARET,Tc=void 0!==/()??/.exec("")[1];(Rc||Tc||Ic||bc||mc)&&(Oc=function(t){var e,r,n,o,i,u,c,a=this,f=hc(a),l=gc(t),s=f.raw;if(s)return s.lastIndex=a.lastIndex,e=sc(Oc,s,l),a.lastIndex=s.lastIndex,e;var p=f.groups,g=Ic&&a.sticky,v=sc(vc,a),d=a.source,y=0,h=l;if(g&&(v=jc(v,"y",""),-1===Ec(v,"g")&&(v+="g"),h=Pc(l,a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==wc(l,a.lastIndex-1))&&(d="(?: "+d+")",h=" "+h,y++),r=new RegExp("^(?:"+d+")",v)),Tc&&(r=new RegExp("^"+d+"$(?!\\s)",v)),Rc&&(n=a.lastIndex),o=sc(xc,g?r:a,h),g?o?(o.input=Pc(o.input,y),o[0]=Pc(o[0],y),o.index=a.lastIndex,a.lastIndex+=o[0].length):a.lastIndex=0:Rc&&o&&(a.lastIndex=a.global?o.index+o[0].length:n),Tc&&o&&o.length>1&&sc(Sc,o[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&p)for(o.groups=u=yc(null),i=0;i<p.length;i++)u[(c=p[i])[0]]=o[c[1]];return o});var Lc=Oc;Xn({target:"RegExp",proto:!0,forced:/./.exec!==Lc},{exec:Lc});var Ac=Je.PROPER,Mc=Yr,Cc=Le,_c=Ai,Dc=u,kc=Fi,Fc="toString",Nc=RegExp.prototype[Fc],$c=Dc((function(){return"/a/b"!=Nc.call({source:"a",flags:"b"})})),Gc=Ac&&Nc.name!=Fc;($c||Gc)&&Mc(RegExp.prototype,Fc,(function(){var t=Cc(this);return"/"+_c(t.source)+"/"+_c(kc(t))}),{unsafe:!0});var zc=Qn,Hc=Yr,Vc=Lc,Uc=u,Bc=Qt,Wc=Ue,Kc=Bc("species"),Yc=RegExp.prototype,qc=function(t,e,r,n){var o=Bc(t),i=!Uc((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),u=i&&!Uc((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[Kc]=function(){return r},r.flags="",r[o]=/./[o]),r.exec=function(){return e=!0,null},r[o](""),!e}));if(!i||!u||r){var c=zc(/./[o]),a=e(o,""[t],(function(t,e,r,n,o){var u=zc(t),a=e.exec;return a===Vc||a===Yc.exec?i&&!o?{done:!0,value:c(e,r,n)}:{done:!0,value:u(r,e,n)}:{done:!1}}));Hc(String.prototype,t,a[0]),Hc(Yc,o,a[1])}n&&Wc(Yc[o],"sham",!0)},Xc=w,Zc=Qr,Jc=Ai,Qc=k,ta=Xc("".charAt),ea=Xc("".charCodeAt),ra=Xc("".slice),na=function(t){return function(e,r){var n,o,i=Jc(Qc(e)),u=Zc(r),c=i.length;return u<0||u>=c?t?"":void 0:(n=ea(i,u))<55296||n>56319||u+1===c||(o=ea(i,u+1))<56320||o>57343?t?ta(i,u):n:t?ra(i,u,u+2):o-56320+(n-55296<<10)+65536}},oa={codeAt:na(!1),charAt:na(!0)}.charAt,ia=function(t,e,r){return e+(r?oa(t,e).length:1)},ua=s,ca=Le,aa=V,fa=R,la=Lc,sa=TypeError,pa=function(t,e){var r=t.exec;if(aa(r)){var n=ua(r,t,e);return null!==n&&ca(n),n}if("RegExp"===fa(t))return ua(la,t,e);throw sa("RegExp#exec called on incompatible receiver")},ga=s,va=Le,da=C,ya=un,ha=Ai,ba=k,ma=St,Sa=ia,xa=pa;qc("match",(function(t,e,r){return[function(e){var r=ba(this),n=da(e)?void 0:ma(e,t);return n?ga(n,e,r):new RegExp(e)[t](ha(r))},function(t){var n=va(this),o=ha(t),i=r(e,n,o);if(i.done)return i.value;if(!n.global)return xa(n,o);var u=n.unicode;n.lastIndex=0;for(var c,a=[],f=0;null!==(c=xa(n,o));){var l=ha(c[0]);a[f]=l,""===l&&(n.lastIndex=Sa(o,ya(n.lastIndex),u)),f++}return 0===f?null:a}]}));var Oa=a,wa=Function.prototype,Ea=wa.apply,ja=wa.call,Pa="object"==typeof Reflect&&Reflect.apply||(Oa?ja.bind(Ea):function(){return ja.apply(Ea,arguments)}),Ra=w,Ia=kt,Ta=Math.floor,La=Ra("".charAt),Aa=Ra("".replace),Ma=Ra("".slice),Ca=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,_a=/\$([$&'`]|\d{1,2})/g,Da=Pa,ka=s,Fa=w,Na=qc,$a=u,Ga=Le,za=V,Ha=C,Va=Qr,Ua=un,Ba=Ai,Wa=k,Ka=ia,Ya=St,qa=function(t,e,r,n,o,i){var u=r+t.length,c=n.length,a=_a;return void 0!==o&&(o=Ia(o),a=Ca),Aa(i,a,(function(i,a){var f;switch(La(a,0)){case"$":return"$";case"&":return t;case"`":return Ma(e,0,r);case"'":return Ma(e,u);case"<":f=o[Ma(a,1,-1)];break;default:var l=+a;if(0===l)return i;if(l>c){var s=Ta(l/10);return 0===s?i:s<=c?void 0===n[s-1]?La(a,1):n[s-1]+La(a,1):i}f=n[l-1]}return void 0===f?"":f}))},Xa=pa,Za=Qt("replace"),Ja=Math.max,Qa=Math.min,tf=Fa([].concat),ef=Fa([].push),rf=Fa("".indexOf),nf=Fa("".slice),of="$0"==="a".replace(/./,"$0"),uf=!!/./[Za]&&""===/./[Za]("a","$0");Na("replace",(function(t,e,r){var n=uf?"$":"$0";return[function(t,r){var n=Wa(this),o=Ha(t)?void 0:Ya(t,Za);return o?ka(o,t,n,r):ka(e,Ba(n),t,r)},function(t,o){var i=Ga(this),u=Ba(t);if("string"==typeof o&&-1===rf(o,n)&&-1===rf(o,"$<")){var c=r(e,i,u,o);if(c.done)return c.value}var a=za(o);a||(o=Ba(o));var f=i.global;if(f){var l=i.unicode;i.lastIndex=0}for(var s=[];;){var p=Xa(i,u);if(null===p)break;if(ef(s,p),!f)break;""===Ba(p[0])&&(i.lastIndex=Ka(u,Ua(i.lastIndex),l))}for(var g,v="",d=0,y=0;y<s.length;y++){for(var h=Ba((p=s[y])[0]),b=Ja(Qa(Va(p.index),u.length),0),m=[],S=1;S<p.length;S++)ef(m,void 0===(g=p[S])?g:String(g));var x=p.groups;if(a){var O=tf([h],m,b,u);void 0!==x&&ef(O,x);var w=Ba(Da(o,void 0,O))}else w=qa(h,u,b,m,x,o);b>=d&&(v+=nf(u,d,b)+w,d=b+h.length)}return v+nf(u,d)}]}),!!$a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!of||uf);return function(){var r,n,o,i,u=".reveal .slides section";function c(){if(void 0!==n.rules&&n.rules.length>0){var r=document.querySelectorAll(u),i=function(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){e(r,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(o,t))}))}return r}({},o);i.indexh=1,i.indexv=1,i.totalIndex=1,r.forEach((function(t){if(t.classList.contains("stack")){var e=t.querySelectorAll("section");i.indexv=1,e.forEach((function(t){a(t,i),i.indexv++,i.totalIndex++}))}else a(t,i),i.totalIndex++;i.indexh++}))}}function a(t,e){void 0===t.xedOrigState&&(t.xedOrigState=t.innerHTML);for(var r=t.xedOrigState,n=0;n<i.length;n++){var o,u=i[n];if(void 0!==u.pattern&&void 0!==u.result)if(o="undefined"!==u.flags?new RegExp(u.pattern,u.flags):new RegExp(u.pattern),void 0===u.match||t.matches(u.match)){u.debug&&console.log("Before: "+r);var c=f(u.result,e);r=r.replace(o,c),u.debug&&console.log("After: "+r)}}t.innerHTML=r}function f(t,e){return t.replace(/\{\{([a-zA-Z0-9_]+)\}\}/g,(function(t,r,n,o){return e.hasOwnProperty(r)?e[r]:""}))}function l(t){o.indexh=t.indexh+1,o.indexv=t.indexv+1,o.totalIndex=r.getSlidePastCount()+1,o.totalSlides=r.getTotalSlides()}function s(t){n=(r=t).getConfig().rewrite||{},o=n.properties||{},i=n.rules||[],r.addEventListener("ready",(function(t){l(t),c(),a(t.currentSlide,o)})),r.addEventListener("slidechanged",(function(t){l(t),a(t.currentSlide,o)})),0===i.length&&console.log("RevealRewrite: WARNING: no rewrite rules defined")}return{id:"RevealRewrite",init:function(t){s(t)}}}}));
