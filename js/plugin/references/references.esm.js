function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,c=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var t=r.next();return c=t.done,t},e:function(t){a=!0,u=t},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw u}}}}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=function(t){return t&&t.Math==Math&&t},o=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")(),i={},u=function(t){try{return!!t()}catch(t){return!0}},c=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a=!u((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),f=a,l=Function.prototype.call,s=f?l.bind(l):function(){return l.apply(l,arguments)},p={},v={}.propertyIsEnumerable,d=Object.getOwnPropertyDescriptor,y=d&&!v.call({1:2},1);p.f=y?function(t){var e=d(this,t);return!!e&&e.enumerable}:v;var g,h,b=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},m=a,S=Function.prototype,x=S.call,O=m&&S.bind.bind(x,x),w=m?O:function(t){return function(){return x.apply(t,arguments)}},E=w,j=E({}.toString),A=E("".slice),L=function(t){return A(j(t),8,-1)},T=u,I=L,P=Object,M=w("".split),R=T((function(){return!P("z").propertyIsEnumerable(0)}))?function(t){return"String"==I(t)?M(t,""):P(t)}:P,C=function(t){return null==t},k=C,D=TypeError,F=function(t){if(k(t))throw D("Can't call method on "+t);return t},$=R,_=F,N=function(t){return $(_(t))},G="object"==typeof document&&document.all,z={all:G,IS_HTMLDDA:void 0===G&&void 0!==G},H=z.all,V=z.IS_HTMLDDA?function(t){return"function"==typeof t||t===H}:function(t){return"function"==typeof t},B=V,U=z.all,q=z.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:B(t)||t===U}:function(t){return"object"==typeof t?null!==t:B(t)},W=o,K=V,Y=function(t){return K(t)?t:void 0},X=function(t,e){return arguments.length<2?Y(W[t]):W[t]&&W[t][e]},Z=w({}.isPrototypeOf),J=o,Q="undefined"!=typeof navigator&&String(navigator.userAgent)||"",tt=J.process,et=J.Deno,nt=tt&&tt.versions||et&&et.version,rt=nt&&nt.v8;rt&&(h=(g=rt.split("."))[0]>0&&g[0]<4?1:+(g[0]+g[1])),!h&&Q&&(!(g=Q.match(/Edge\/(\d+)/))||g[1]>=74)&&(g=Q.match(/Chrome\/(\d+)/))&&(h=+g[1]);var ot=h,it=ot,ut=u,ct=!!Object.getOwnPropertySymbols&&!ut((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&it&&it<41})),at=ct&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ft=X,lt=V,st=Z,pt=Object,vt=at?function(t){return"symbol"==typeof t}:function(t){var e=ft("Symbol");return lt(e)&&st(e.prototype,pt(t))},dt=String,yt=V,gt=function(t){try{return dt(t)}catch(t){return"Object"}},ht=TypeError,bt=function(t){if(yt(t))return t;throw ht(gt(t)+" is not a function")},mt=bt,St=C,xt=function(t,e){var n=t[e];return St(n)?void 0:mt(n)},Ot=s,wt=V,Et=q,jt=TypeError,At={},Lt={get exports(){return At},set exports(t){At=t}},Tt=o,It=Object.defineProperty,Pt=function(t,e){try{It(Tt,t,{value:e,configurable:!0,writable:!0})}catch(n){Tt[t]=e}return e},Mt=Pt,Rt="__core-js_shared__",Ct=o[Rt]||Mt(Rt,{}),kt=Ct;(Lt.exports=function(t,e){return kt[t]||(kt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.28.0",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.28.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Dt=F,Ft=Object,$t=function(t){return Ft(Dt(t))},_t=$t,Nt=w({}.hasOwnProperty),Gt=Object.hasOwn||function(t,e){return Nt(_t(t),e)},zt=w,Ht=0,Vt=Math.random(),Bt=zt(1..toString),Ut=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Bt(++Ht+Vt,36)},qt=At,Wt=Gt,Kt=Ut,Yt=ct,Xt=at,Zt=o.Symbol,Jt=qt("wks"),Qt=Xt?Zt.for||Zt:Zt&&Zt.withoutSetter||Kt,te=function(t){return Wt(Jt,t)||(Jt[t]=Yt&&Wt(Zt,t)?Zt[t]:Qt("Symbol."+t)),Jt[t]},ee=s,ne=q,re=vt,oe=xt,ie=function(t,e){var n,r;if("string"===e&&wt(n=t.toString)&&!Et(r=Ot(n,t)))return r;if(wt(n=t.valueOf)&&!Et(r=Ot(n,t)))return r;if("string"!==e&&wt(n=t.toString)&&!Et(r=Ot(n,t)))return r;throw jt("Can't convert object to primitive value")},ue=TypeError,ce=te("toPrimitive"),ae=function(t,e){if(!ne(t)||re(t))return t;var n,r=oe(t,ce);if(r){if(void 0===e&&(e="default"),n=ee(r,t,e),!ne(n)||re(n))return n;throw ue("Can't convert object to primitive value")}return void 0===e&&(e="number"),ie(t,e)},fe=vt,le=function(t){var e=ae(t,"string");return fe(e)?e:e+""},se=q,pe=o.document,ve=se(pe)&&se(pe.createElement),de=function(t){return ve?pe.createElement(t):{}},ye=de,ge=!c&&!u((function(){return 7!=Object.defineProperty(ye("div"),"a",{get:function(){return 7}}).a})),he=c,be=s,me=p,Se=b,xe=N,Oe=le,we=Gt,Ee=ge,je=Object.getOwnPropertyDescriptor;i.f=he?je:function(t,e){if(t=xe(t),e=Oe(e),Ee)try{return je(t,e)}catch(t){}if(we(t,e))return Se(!be(me.f,t,e),t[e])};var Ae={},Le=c&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Te=q,Ie=String,Pe=TypeError,Me=function(t){if(Te(t))return t;throw Pe(Ie(t)+" is not an object")},Re=c,Ce=ge,ke=Le,De=Me,Fe=le,$e=TypeError,_e=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,Ge="enumerable",ze="configurable",He="writable";Ae.f=Re?ke?function(t,e,n){if(De(t),e=Fe(e),De(n),"function"==typeof t&&"prototype"===e&&"value"in n&&He in n&&!n[He]){var r=Ne(t,e);r&&r[He]&&(t[e]=n.value,n={configurable:ze in n?n[ze]:r[ze],enumerable:Ge in n?n[Ge]:r[Ge],writable:!1})}return _e(t,e,n)}:_e:function(t,e,n){if(De(t),e=Fe(e),De(n),Ce)try{return _e(t,e,n)}catch(t){}if("get"in n||"set"in n)throw $e("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Ve=Ae,Be=b,Ue=c?function(t,e,n){return Ve.f(t,e,Be(1,n))}:function(t,e,n){return t[e]=n,t},qe={},We={get exports(){return qe},set exports(t){qe=t}},Ke=c,Ye=Gt,Xe=Function.prototype,Ze=Ke&&Object.getOwnPropertyDescriptor,Je=Ye(Xe,"name"),Qe={EXISTS:Je,PROPER:Je&&"something"===function(){}.name,CONFIGURABLE:Je&&(!Ke||Ke&&Ze(Xe,"name").configurable)},tn=V,en=Ct,nn=w(Function.toString);tn(en.inspectSource)||(en.inspectSource=function(t){return nn(t)});var rn,on,un,cn=en.inspectSource,an=V,fn=o.WeakMap,ln=an(fn)&&/native code/.test(String(fn)),sn=Ut,pn=At("keys"),vn=function(t){return pn[t]||(pn[t]=sn(t))},dn={},yn=ln,gn=o,hn=q,bn=Ue,mn=Gt,Sn=Ct,xn=vn,On=dn,wn="Object already initialized",En=gn.TypeError,jn=gn.WeakMap;if(yn||Sn.state){var An=Sn.state||(Sn.state=new jn);An.get=An.get,An.has=An.has,An.set=An.set,rn=function(t,e){if(An.has(t))throw En(wn);return e.facade=t,An.set(t,e),e},on=function(t){return An.get(t)||{}},un=function(t){return An.has(t)}}else{var Ln=xn("state");On[Ln]=!0,rn=function(t,e){if(mn(t,Ln))throw En(wn);return e.facade=t,bn(t,Ln,e),e},on=function(t){return mn(t,Ln)?t[Ln]:{}},un=function(t){return mn(t,Ln)}}var Tn={set:rn,get:on,has:un,enforce:function(t){return un(t)?on(t):rn(t,{})},getterFor:function(t){return function(e){var n;if(!hn(e)||(n=on(e)).type!==t)throw En("Incompatible receiver, "+t+" required");return n}}},In=w,Pn=u,Mn=V,Rn=Gt,Cn=c,kn=Qe.CONFIGURABLE,Dn=cn,Fn=Tn.enforce,$n=Tn.get,_n=String,Nn=Object.defineProperty,Gn=In("".slice),zn=In("".replace),Hn=In([].join),Vn=Cn&&!Pn((function(){return 8!==Nn((function(){}),"length",{value:8}).length})),Bn=String(String).split("String"),Un=We.exports=function(t,e,n){"Symbol("===Gn(_n(e),0,7)&&(e="["+zn(_n(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!Rn(t,"name")||kn&&t.name!==e)&&(Cn?Nn(t,"name",{value:e,configurable:!0}):t.name=e),Vn&&n&&Rn(n,"arity")&&t.length!==n.arity&&Nn(t,"length",{value:n.arity});try{n&&Rn(n,"constructor")&&n.constructor?Cn&&Nn(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=Fn(t);return Rn(r,"source")||(r.source=Hn(Bn,"string"==typeof e?e:"")),t};Function.prototype.toString=Un((function(){return Mn(this)&&$n(this).source||Dn(this)}),"toString");var qn=V,Wn=Ae,Kn=qe,Yn=Pt,Xn=function(t,e,n,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:e;if(qn(n)&&Kn(n,i,r),r.global)o?t[e]=n:Yn(e,n);else{try{r.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=n:Wn.f(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t},Zn={},Jn=Math.ceil,Qn=Math.floor,tr=Math.trunc||function(t){var e=+t;return(e>0?Qn:Jn)(e)},er=function(t){var e=+t;return e!=e||0===e?0:tr(e)},nr=er,rr=Math.max,or=Math.min,ir=er,ur=Math.min,cr=function(t){return t>0?ur(ir(t),9007199254740991):0},ar=cr,fr=function(t){return ar(t.length)},lr=N,sr=function(t,e){var n=nr(t);return n<0?rr(n+e,0):or(n,e)},pr=fr,vr=function(t){return function(e,n,r){var o,i=lr(e),u=pr(i),c=sr(r,u);if(t&&n!=n){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},dr={includes:vr(!0),indexOf:vr(!1)},yr=Gt,gr=N,hr=dr.indexOf,br=dn,mr=w([].push),Sr=function(t,e){var n,r=gr(t),o=0,i=[];for(n in r)!yr(br,n)&&yr(r,n)&&mr(i,n);for(;e.length>o;)yr(r,n=e[o++])&&(~hr(i,n)||mr(i,n));return i},xr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Or=Sr,wr=xr.concat("length","prototype");Zn.f=Object.getOwnPropertyNames||function(t){return Or(t,wr)};var Er={};Er.f=Object.getOwnPropertySymbols;var jr=X,Ar=Zn,Lr=Er,Tr=Me,Ir=w([].concat),Pr=jr("Reflect","ownKeys")||function(t){var e=Ar.f(Tr(t)),n=Lr.f;return n?Ir(e,n(t)):e},Mr=Gt,Rr=Pr,Cr=i,kr=Ae,Dr=u,Fr=V,$r=/#|\.prototype\./,_r=function(t,e){var n=Gr[Nr(t)];return n==Hr||n!=zr&&(Fr(e)?Dr(e):!!e)},Nr=_r.normalize=function(t){return String(t).replace($r,".").toLowerCase()},Gr=_r.data={},zr=_r.NATIVE="N",Hr=_r.POLYFILL="P",Vr=_r,Br=o,Ur=i.f,qr=Ue,Wr=Xn,Kr=Pt,Yr=function(t,e,n){for(var r=Rr(e),o=kr.f,i=Cr.f,u=0;u<r.length;u++){var c=r[u];Mr(t,c)||n&&Mr(n,c)||o(t,c,i(e,c))}},Xr=Vr,Zr=function(t,e){var n,r,o,i,u,c=t.target,a=t.global,f=t.stat;if(n=a?Br:f?Br[c]||Kr(c,{}):(Br[c]||{}).prototype)for(r in e){if(i=e[r],o=t.dontCallGetSet?(u=Ur(n,r))&&u.value:n[r],!Xr(a?r:c+(f?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Yr(i,o)}(t.sham||o&&o.sham)&&qr(i,"sham",!0),Wr(n,r,i,t)}},Jr=L,Qr=w,to=function(t){if("Function"===Jr(t))return Qr(t)},eo=bt,no=a,ro=to(to.bind),oo=L,io=Array.isArray||function(t){return"Array"==oo(t)},uo={};uo[te("toStringTag")]="z";var co="[object z]"===String(uo),ao=co,fo=V,lo=L,so=te("toStringTag"),po=Object,vo="Arguments"==lo(function(){return arguments}()),yo=ao?lo:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=po(t),so))?n:vo?lo(e):"Object"==(r=lo(e))&&fo(e.callee)?"Arguments":r},go=w,ho=u,bo=V,mo=yo,So=cn,xo=function(){},Oo=[],wo=X("Reflect","construct"),Eo=/^\s*(?:class|function)\b/,jo=go(Eo.exec),Ao=!Eo.exec(xo),Lo=function(t){if(!bo(t))return!1;try{return wo(xo,Oo,t),!0}catch(t){return!1}},To=function(t){if(!bo(t))return!1;switch(mo(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Ao||!!jo(Eo,So(t))}catch(t){return!0}};To.sham=!0;var Io=!wo||ho((function(){var t;return Lo(Lo.call)||!Lo(Object)||!Lo((function(){t=!0}))||t}))?To:Lo,Po=io,Mo=Io,Ro=q,Co=te("species"),ko=Array,Do=function(t){var e;return Po(t)&&(e=t.constructor,(Mo(e)&&(e===ko||Po(e.prototype))||Ro(e)&&null===(e=e[Co]))&&(e=void 0)),void 0===e?ko:e},Fo=function(t,e){return new(Do(t))(0===e?0:e)},$o=function(t,e){return eo(t),void 0===e?t:no?ro(t,e):function(){return t.apply(e,arguments)}},_o=R,No=$t,Go=fr,zo=Fo,Ho=w([].push),Vo=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,u=7==t,c=5==t||i;return function(a,f,l,s){for(var p,v,d=No(a),y=_o(d),g=$o(f,l),h=Go(y),b=0,m=s||zo,S=e?m(a,h):n||u?m(a,0):void 0;h>b;b++)if((c||b in y)&&(v=g(p=y[b],b,d),t))if(e)S[b]=v;else if(v)switch(t){case 3:return!0;case 5:return p;case 6:return b;case 2:Ho(S,p)}else switch(t){case 4:return!1;case 7:Ho(S,p)}return i?-1:r||o?o:S}},Bo={forEach:Vo(0),map:Vo(1),filter:Vo(2),some:Vo(3),every:Vo(4),find:Vo(5),findIndex:Vo(6),filterReject:Vo(7)},Uo=u,qo=Bo.forEach,Wo=function(t,e){var n=[][t];return!!n&&Uo((function(){n.call(null,e||function(){return 1},1)}))}("forEach")?[].forEach:function(t){return qo(this,t,arguments.length>1?arguments[1]:void 0)};Zr({target:"Array",proto:!0,forced:[].forEach!=Wo},{forEach:Wo});var Ko=yo,Yo=co?{}.toString:function(){return"[object "+Ko(this)+"]"};co||Xn(Object.prototype,"toString",Yo,{unsafe:!0});var Xo=de("span").classList,Zo=Xo&&Xo.constructor&&Xo.constructor.prototype,Jo=o,Qo={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},ti=Zo===Object.prototype?void 0:Zo,ei=Wo,ni=Ue,ri=function(t){if(t&&t.forEach!==ei)try{ni(t,"forEach",ei)}catch(e){t.forEach=ei}};for(var oi in Qo)Qo[oi]&&ri(Jo[oi]&&Jo[oi].prototype);ri(ti);var ii=yo,ui=String,ci=function(t){if("Symbol"===ii(t))throw TypeError("Cannot convert a Symbol value to a string");return ui(t)},ai=Me,fi=u,li=o.RegExp,si=fi((function(){var t=li("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),pi=si||fi((function(){return!li("a","y").sticky})),vi={BROKEN_CARET:si||fi((function(){var t=li("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),MISSED_STICKY:pi,UNSUPPORTED_Y:si},di={},yi=Sr,gi=xr,hi=Object.keys||function(t){return yi(t,gi)},bi=c,mi=Le,Si=Ae,xi=Me,Oi=N,wi=hi;di.f=bi&&!mi?Object.defineProperties:function(t,e){xi(t);for(var n,r=Oi(e),o=wi(e),i=o.length,u=0;i>u;)Si.f(t,n=o[u++],r[n]);return t};var Ei,ji=X("document","documentElement"),Ai=Me,Li=di,Ti=xr,Ii=dn,Pi=ji,Mi=de,Ri="prototype",Ci="script",ki=vn("IE_PROTO"),Di=function(){},Fi=function(t){return"<"+Ci+">"+t+"</"+Ci+">"},$i=function(t){t.write(Fi("")),t.close();var e=t.parentWindow.Object;return t=null,e},_i=function(){try{Ei=new ActiveXObject("htmlfile")}catch(t){}var t,e,n;_i="undefined"!=typeof document?document.domain&&Ei?$i(Ei):(e=Mi("iframe"),n="java"+Ci+":",e.style.display="none",Pi.appendChild(e),e.src=String(n),(t=e.contentWindow.document).open(),t.write(Fi("document.F=Object")),t.close(),t.F):$i(Ei);for(var r=Ti.length;r--;)delete _i[Ri][Ti[r]];return _i()};Ii[ki]=!0;var Ni,Gi,zi=Object.create||function(t,e){var n;return null!==t?(Di[Ri]=Ai(t),n=new Di,Di[Ri]=null,n[ki]=t):n=_i(),void 0===e?n:Li.f(n,e)},Hi=u,Vi=o.RegExp,Bi=Hi((function(){var t=Vi(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),Ui=u,qi=o.RegExp,Wi=Ui((function(){var t=qi("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),Ki=s,Yi=w,Xi=ci,Zi=function(){var t=ai(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e},Ji=vi,Qi=zi,tu=Tn.get,eu=Bi,nu=Wi,ru=At("native-string-replace",String.prototype.replace),ou=RegExp.prototype.exec,iu=ou,uu=Yi("".charAt),cu=Yi("".indexOf),au=Yi("".replace),fu=Yi("".slice),lu=(Gi=/b*/g,Ki(ou,Ni=/a/,"a"),Ki(ou,Gi,"a"),0!==Ni.lastIndex||0!==Gi.lastIndex),su=Ji.BROKEN_CARET,pu=void 0!==/()??/.exec("")[1];(lu||pu||su||eu||nu)&&(iu=function(t){var e,n,r,o,i,u,c,a=this,f=tu(a),l=Xi(t),s=f.raw;if(s)return s.lastIndex=a.lastIndex,e=Ki(iu,s,l),a.lastIndex=s.lastIndex,e;var p=f.groups,v=su&&a.sticky,d=Ki(Zi,a),y=a.source,g=0,h=l;if(v&&(d=au(d,"y",""),-1===cu(d,"g")&&(d+="g"),h=fu(l,a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==uu(l,a.lastIndex-1))&&(y="(?: "+y+")",h=" "+h,g++),n=new RegExp("^(?:"+y+")",d)),pu&&(n=new RegExp("^"+y+"$(?!\\s)",d)),lu&&(r=a.lastIndex),o=Ki(ou,v?n:a,h),v?o?(o.input=fu(o.input,g),o[0]=fu(o[0],g),o.index=a.lastIndex,a.lastIndex+=o[0].length):a.lastIndex=0:lu&&o&&(a.lastIndex=a.global?o.index+o[0].length:r),pu&&o&&o.length>1&&Ki(ru,o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&p)for(o.groups=u=Qi(null),i=0;i<p.length;i++)u[(c=p[i])[0]]=o[c[1]];return o});var vu=iu;Zr({target:"RegExp",proto:!0,forced:/./.exec!==vu},{exec:vu});var du=a,yu=Function.prototype,gu=yu.apply,hu=yu.call,bu="object"==typeof Reflect&&Reflect.apply||(du?hu.bind(gu):function(){return hu.apply(gu,arguments)}),mu=to,Su=Xn,xu=vu,Ou=u,wu=te,Eu=Ue,ju=wu("species"),Au=RegExp.prototype,Lu=w,Tu=er,Iu=ci,Pu=F,Mu=Lu("".charAt),Ru=Lu("".charCodeAt),Cu=Lu("".slice),ku=function(t){return function(e,n){var r,o,i=Iu(Pu(e)),u=Tu(n),c=i.length;return u<0||u>=c?t?"":void 0:(r=Ru(i,u))<55296||r>56319||u+1===c||(o=Ru(i,u+1))<56320||o>57343?t?Mu(i,u):r:t?Cu(i,u,u+2):o-56320+(r-55296<<10)+65536}},Du={codeAt:ku(!1),charAt:ku(!0)}.charAt,Fu=w,$u=$t,_u=Math.floor,Nu=Fu("".charAt),Gu=Fu("".replace),zu=Fu("".slice),Hu=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Vu=/\$([$&'`]|\d{1,2})/g,Bu=s,Uu=Me,qu=V,Wu=L,Ku=vu,Yu=TypeError,Xu=bu,Zu=s,Ju=w,Qu=function(t,e,n,r){var o=wu(t),i=!Ou((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),u=i&&!Ou((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[ju]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return e=!0,null},n[o](""),!e}));if(!i||!u||n){var c=mu(/./[o]),a=e(o,""[t],(function(t,e,n,r,o){var u=mu(t),a=e.exec;return a===xu||a===Au.exec?i&&!o?{done:!0,value:c(e,n,r)}:{done:!0,value:u(n,e,r)}:{done:!1}}));Su(String.prototype,t,a[0]),Su(Au,o,a[1])}r&&Eu(Au[o],"sham",!0)},tc=u,ec=Me,nc=V,rc=C,oc=er,ic=cr,uc=ci,cc=F,ac=function(t,e,n){return e+(n?Du(t,e).length:1)},fc=xt,lc=function(t,e,n,r,o,i){var u=n+t.length,c=r.length,a=Vu;return void 0!==o&&(o=$u(o),a=Hu),Gu(i,a,(function(i,a){var f;switch(Nu(a,0)){case"$":return"$";case"&":return t;case"`":return zu(e,0,n);case"'":return zu(e,u);case"<":f=o[zu(a,1,-1)];break;default:var l=+a;if(0===l)return i;if(l>c){var s=_u(l/10);return 0===s?i:s<=c?void 0===r[s-1]?Nu(a,1):r[s-1]+Nu(a,1):i}f=r[l-1]}return void 0===f?"":f}))},sc=function(t,e){var n=t.exec;if(qu(n)){var r=Bu(n,t,e);return null!==r&&Uu(r),r}if("RegExp"===Wu(t))return Bu(Ku,t,e);throw Yu("RegExp#exec called on incompatible receiver")},pc=te("replace"),vc=Math.max,dc=Math.min,yc=Ju([].concat),gc=Ju([].push),hc=Ju("".indexOf),bc=Ju("".slice),mc="$0"==="a".replace(/./,"$0"),Sc=!!/./[pc]&&""===/./[pc]("a","$0");Qu("replace",(function(t,e,n){var r=Sc?"$":"$0";return[function(t,n){var r=cc(this),o=rc(t)?void 0:fc(t,pc);return o?Zu(o,t,r,n):Zu(e,uc(r),t,n)},function(t,o){var i=ec(this),u=uc(t);if("string"==typeof o&&-1===hc(o,r)&&-1===hc(o,"$<")){var c=n(e,i,u,o);if(c.done)return c.value}var a=nc(o);a||(o=uc(o));var f=i.global;if(f){var l=i.unicode;i.lastIndex=0}for(var s=[];;){var p=sc(i,u);if(null===p)break;if(gc(s,p),!f)break;""===uc(p[0])&&(i.lastIndex=ac(u,ic(i.lastIndex),l))}for(var v,d="",y=0,g=0;g<s.length;g++){for(var h=uc((p=s[g])[0]),b=vc(dc(oc(p.index),u.length),0),m=[],S=1;S<p.length;S++)gc(m,void 0===(v=p[S])?v:String(v));var x=p.groups;if(a){var O=yc([h],m,b,u);void 0!==x&&gc(O,x);var w=uc(Xu(o,void 0,O))}else w=lc(h,u,b,m,x,o);b>=y&&(d+=bc(u,y,b)+w,y=b+h.length)}return d+bc(u,y)}]}),!!tc((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!mc||Sc);var xc=TypeError,Oc=le,wc=Ae,Ec=b,jc=u,Ac=ot,Lc=te("species"),Tc=Zr,Ic=u,Pc=io,Mc=q,Rc=$t,Cc=fr,kc=function(t){if(t>9007199254740991)throw xc("Maximum allowed index exceeded");return t},Dc=function(t,e,n){var r=Oc(e);r in t?wc.f(t,r,Ec(0,n)):t[r]=n},Fc=Fo,$c=function(t){return Ac>=51||!jc((function(){var e=[];return(e.constructor={})[Lc]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},_c=ot,Nc=te("isConcatSpreadable"),Gc=_c>=51||!Ic((function(){var t=[];return t[Nc]=!1,t.concat()[0]!==t})),zc=function(t){if(!Mc(t))return!1;var e=t[Nc];return void 0!==e?!!e:Pc(t)};Tc({target:"Array",proto:!0,arity:1,forced:!Gc||!$c("concat")},{concat:function(t){var e,n,r,o,i,u=Rc(this),c=Fc(u,0),a=0;for(e=-1,r=arguments.length;e<r;e++)if(zc(i=-1===e?u:arguments[e]))for(o=Cc(i),kc(a+o),n=0;n<o;n++,a++)n in i&&Dc(c,a,i[n]);else kc(a+1),Dc(c,a++,i);return c.length=a,c}});var Hc=function(){var t,n=".reveal .slides section",r=".r-refs [data-key]",o="data-key",i="data-index",u={},c=1;function a(t,e){void 0===t.xrefsOrigState&&(t.xrefsOrigState=t.innerHTML);var n=t.xrefsOrigState;n=function(t,e){return t.replace(/\[\@([a-zA-Z0-9_]+)\]/g,(function(t,n,r,o){return e.hasOwnProperty(n)?(-1===e[n].index&&(e[n].index=c++),'<span class="r-ref" title="'.concat(e[n].text,'">[').concat(e[n].index,"]</span>")):"[??]"}))}(n,e),n=function(t,e){return t.replace(/\[\:\@([a-zA-Z0-9_]+)\]/g,(function(t,n,r,o){return e.hasOwnProperty(n)?'<span class="r-ref-occurrence">'.concat(e[n].html,"</span>"):"(??)"}))}(n,e),t.innerHTML=n}function f(c){t=c,function(){var t,n=1,c=e(document.querySelectorAll(r));try{for(c.s();!(t=c.n()).done;){var a=t.value;if(a.hasAttribute(o)){a.setAttribute(i,n++);var f=a.getAttribute(o);u[f]={index:a.getAttribute(i),key:f,text:a.textContent,html:a.innerHTML}}}}catch(t){c.e(t)}finally{c.f()}}(),t.addEventListener("ready",(function(t){document.querySelectorAll(n).forEach((function(t){t.classList.contains("stack")?t.querySelectorAll("section").forEach((function(t){a(t,u)})):a(t,u)}))})),t.addEventListener("slidechanged",(function(t){a(t.currentSlide,u)}))}return{id:"RevealReferences",init:function(t){f(t)}}};export{Hc as default};
