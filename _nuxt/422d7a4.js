(window.webpackJsonp=window.webpackJsonp||[]).push([[43,18],{238:function(t,e,n){var r=n(10);t.exports=function(t){return r(Map.prototype.entries,t)}},239:function(t,e,n){var r=n(6),o=n(3),f=n(74),c=n(17),d=n(15),l=n(18).f,v=n(72),h=n(183),E=n(257),T=n(105),R=n(259),I=!1,S=T("meta"),y=0,x=function(t){l(t,S,{value:{objectID:"O"+y++,weakData:{}}})},meta=t.exports={enable:function(){meta.enable=function(){},I=!0;var t=v.f,e=o([].splice),n={};n[S]=1,t(n).length&&(v.f=function(n){for(var r=t(n),i=0,o=r.length;i<o;i++)if(r[i]===S){e(r,i,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:h.f}))},fastKey:function(t,e){if(!c(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!d(t,S)){if(!E(t))return"F";if(!e)return"E";x(t)}return t[S].objectID},getWeakData:function(t,e){if(!d(t,S)){if(!E(t))return!0;if(!e)return!1;x(t)}return t[S].weakData},onFreeze:function(t){return R&&I&&E(t)&&!d(t,S)&&x(t),t}};f[S]=!0},240:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return c}));var r,o;n(242),n(13),n(26),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(27);!function(t){t.Equality="equality",t.Security="security",t.Foreign="foreign",t.Administration="administration",t.Culture="culture",t.Economics="economics",t.Environmental="environmental"}(r||(r={})),function(t){t.NoData="nodata",t.Proposed="proposed",t.Paused="paused",t.Working="working",t.Done="done"}(o||(o={}));var f=new Map([[r.Equality,{long:"ความเท่าเทียม/คุณภาพชีวิต",short:"คุณภาพชีวิต"}],[r.Security,{long:"ความมั่นคง/ปกป้องสถาบันกษัตริย์",short:"ความมั่นคง"}],[r.Foreign,{long:"ต่างประเทศ",short:"ต่างประเทศ"}],[r.Administration,{long:"บริหารจัดการ(ราชการ)",short:"บริหารจัดการ"}],[r.Culture,{long:"ศาสนาและวัฒนธรรม",short:"ศาสนาและวัฒนธรรม"}],[r.Economics,{long:"เศรษฐกิจ",short:"เศรษฐกิจ"}],[r.Environmental,{long:"สิ่งแวดล้อม",short:"สิ่งแวดล้อม"}]]),c=new Map([[o.NoData,"ไม่พบข้อมูล"],[o.Proposed,"ถูกเสนอต่อสภา"],[o.Paused,"ถูกระงับ"],[o.Working,"กำลังดำเนินการ"],[o.Done,"สำเร็จ"]])},242:function(t,e,n){"use strict";n(256)("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n(260))},243:function(t,e,n){"use strict";n(6)({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:n(261)})},244:function(t,e,n){"use strict";var r=n(6),o=n(8),f=n(47),c=n(238),d=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{every:function(t){var map=o(this),e=c(map),n=f(t,arguments.length>1?arguments[1]:void 0);return!d(e,(function(t,e,r){if(!n(e,t,map))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},245:function(t,e,n){"use strict";var r=n(6),o=n(25),f=n(47),c=n(10),d=n(57),l=n(8),v=n(102),h=n(238),E=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(t){var map=l(this),e=h(map),n=f(t,arguments.length>1?arguments[1]:void 0),r=new(v(map,o("Map"))),T=d(r.set);return E(e,(function(t,e){n(e,t,map)&&c(T,r,t,e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},246:function(t,e,n){"use strict";var r=n(6),o=n(8),f=n(47),c=n(238),d=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{find:function(t){var map=o(this),e=c(map),n=f(t,arguments.length>1?arguments[1]:void 0);return d(e,(function(t,e,r){if(n(e,t,map))return r(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},247:function(t,e,n){"use strict";var r=n(6),o=n(8),f=n(47),c=n(238),d=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(t){var map=o(this),e=c(map),n=f(t,arguments.length>1?arguments[1]:void 0);return d(e,(function(t,e,r){if(n(e,t,map))return r(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},248:function(t,e,n){"use strict";var r=n(6),o=n(8),f=n(238),c=n(262),d=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(t){return d(f(o(this)),(function(e,n,r){if(c(n,t))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},249:function(t,e,n){"use strict";var r=n(6),o=n(8),f=n(238),c=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(t){return c(f(o(this)),(function(e,n,r){if(n===t)return r(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},250:function(t,e,n){"use strict";var r=n(6),o=n(25),f=n(47),c=n(10),d=n(57),l=n(8),v=n(102),h=n(238),E=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(t){var map=l(this),e=h(map),n=f(t,arguments.length>1?arguments[1]:void 0),r=new(v(map,o("Map"))),T=d(r.set);return E(e,(function(t,e){c(T,r,n(e,t,map),e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},251:function(t,e,n){"use strict";var r=n(6),o=n(25),f=n(47),c=n(10),d=n(57),l=n(8),v=n(102),h=n(238),E=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(t){var map=l(this),e=h(map),n=f(t,arguments.length>1?arguments[1]:void 0),r=new(v(map,o("Map"))),T=d(r.set);return E(e,(function(t,e){c(T,r,t,n(e,t,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},252:function(t,e,n){"use strict";var r=n(6),o=n(57),f=n(8),c=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{merge:function(t){for(var map=f(this),e=o(map.set),n=arguments.length,i=0;i<n;)c(arguments[i++],e,{that:map,AS_ENTRIES:!0});return map}})},253:function(t,e,n){"use strict";var r=n(6),o=n(1),f=n(8),c=n(57),d=n(238),l=n(181),v=o.TypeError;r({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(t){var map=f(this),e=d(map),n=arguments.length<2,r=n?void 0:arguments[1];if(c(t),l(e,(function(e,o){n?(n=!1,r=o):r=t(r,o,e,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n)throw v("Reduce of empty map with no initial value");return r}})},254:function(t,e,n){"use strict";var r=n(6),o=n(8),f=n(47),c=n(238),d=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{some:function(t){var map=o(this),e=c(map),n=f(t,arguments.length>1?arguments[1]:void 0);return d(e,(function(t,e,r){if(n(e,t,map))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},255:function(t,e,n){"use strict";var r=n(6),o=n(1),f=n(10),c=n(8),d=n(57),l=o.TypeError;r({target:"Map",proto:!0,real:!0,forced:!0},{update:function(t,e){var map=c(this),n=d(map.get),r=d(map.has),o=d(map.set),v=arguments.length;d(e);var h=f(r,map,t);if(!h&&v<3)throw l("Updating absent value");var E=h?f(n,map,t):d(v>2?arguments[2]:void 0)(t,map);return f(o,map,t,e(E,t,map)),map}})},256:function(t,e,n){"use strict";var r=n(6),o=n(1),f=n(3),c=n(103),d=n(19),l=n(239),v=n(181),h=n(132),E=n(7),T=n(17),R=n(4),I=n(133),S=n(58),y=n(182);t.exports=function(t,e,n){var x=-1!==t.indexOf("Map"),A=-1!==t.indexOf("Weak"),m=x?"set":"add",w=o[t],M=w&&w.prototype,N=w,_={},k=function(t){var e=f(M[t]);d(M,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(A&&!T(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return A&&!T(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(A&&!T(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})};if(c(t,!E(w)||!(A||M.forEach&&!R((function(){(new w).entries().next()})))))N=n.getConstructor(e,t,x,m),l.enable();else if(c(t,!0)){var O=new N,D=O[m](A?{}:-0,1)!=O,P=R((function(){O.has(1)})),z=I((function(t){new w(t)})),j=!A&&R((function(){for(var t=new w,e=5;e--;)t[m](e,e);return!t.has(-0)}));z||((N=e((function(t,e){h(t,M);var n=y(new w,t,N);return null!=e&&v(e,n[m],{that:n,AS_ENTRIES:x}),n}))).prototype=M,M.constructor=N),(P||j)&&(k("delete"),k("has"),x&&k("get")),(j||D)&&k(m),A&&M.clear&&delete M.clear}return _[t]=N,r({global:!0,forced:N!=w},_),S(N,t),A||n.setStrong(N,t,x),N}},257:function(t,e,n){var r=n(4),o=n(17),f=n(42),c=n(258),d=Object.isExtensible,l=r((function(){d(1)}));t.exports=l||c?function(t){return!!o(t)&&((!c||"ArrayBuffer"!=f(t))&&(!d||d(t)))}:d},258:function(t,e,n){var r=n(4);t.exports=r((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}))},259:function(t,e,n){var r=n(4);t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},260:function(t,e,n){"use strict";var r=n(18).f,o=n(50),f=n(135),c=n(47),d=n(132),l=n(181),v=n(134),h=n(136),E=n(11),T=n(239).fastKey,R=n(33),I=R.set,S=R.getterFor;t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){d(t,R),I(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),E||(t.size=0),null!=r&&l(r,t[v],{that:t,AS_ENTRIES:n})})),R=h.prototype,y=S(e),x=function(t,e,n){var r,o,f=y(t),c=A(t,e);return c?c.value=n:(f.last=c={index:o=T(e,!0),key:e,value:n,previous:r=f.last,next:void 0,removed:!1},f.first||(f.first=c),r&&(r.next=c),E?f.size++:t.size++,"F"!==o&&(f.index[o]=c)),t},A=function(t,e){var n,r=y(t),o=T(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return f(R,{clear:function(){for(var t=y(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,E?t.size=0:this.size=0},delete:function(t){var e=this,n=y(e),r=A(e,t);if(r){var o=r.next,f=r.previous;delete n.index[r.index],r.removed=!0,f&&(f.next=o),o&&(o.previous=f),n.first==r&&(n.first=o),n.last==r&&(n.last=f),E?n.size--:e.size--}return!!r},forEach:function(t){for(var e,n=y(this),r=c(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!A(this,t)}}),f(R,n?{get:function(t){var e=A(this,t);return e&&e.value},set:function(t,e){return x(this,0===t?0:t,e)}}:{add:function(t){return x(this,t=0===t?0:t,t)}}),E&&r(R,"size",{get:function(){return y(this).size}}),h},setStrong:function(t,e,n){var r=e+" Iterator",o=S(e),f=S(r);v(t,e,(function(t,e){I(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=f(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),h(e)}}},261:function(t,e,n){"use strict";var r=n(10),o=n(57),f=n(8);t.exports=function(){for(var t,e=f(this),n=o(e.delete),c=!0,d=0,l=arguments.length;d<l;d++)t=r(n,e,arguments[d]),c=c&&t;return!!c}},262:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},308:function(t,e,n){"use strict";n.r(e),n.d(e,"matchedPromise",(function(){return o})),n.d(e,"titleText",(function(){return c})),n.d(e,"descriptionMap",(function(){return d})),n.d(e,"imageUrl",(function(){return l}));n(48),n(13),n(242),n(26),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(27),n(104);var r=n(240),o=function(t,e){return t.filter((function(t){return t.id===e}))[0]},f=new Map([[r.a.NoData,"ยังไม่พบข้อมูล"],[r.a.Proposed,"ถูกเสนอต่อสภาแล้ว"],[r.a.Paused,"ถูกระงับ"],[r.a.Working,"กำลังดำเนินการ"],[r.a.Done,"สำเร็จแล้ว"]]),c=function(title,t,e){return"โครงการ".concat(title," โดยพรรค").concat(t," ").concat(f.get(e))},d=new Map([[r.a.NoData,"คำสัญญานี้ยังไม่พบข้อมูล ขอ(ทวง)ถามพรรคการเมืองถึงข้อมูลและการดำเนินการเกี่ยวกับคำสัญญานี้"],[r.a.Proposed,"คำสัญญานี้ถูกเสนอต่อสภา ร่วมจับตา รอดูผล ของคำสัญญานี้...ว่าได้ไปต่อไหม ?"],[r.a.Paused,"น่าเศร้า !! คำสัญญานี้ถูกระงับไว้ ร่วมแชร์ให้คำสัญญาได้ไปต่อกัน"],[r.a.Working,"คำสัญญานี้กำลังดำเนินการอยู่ บอกต่อให้ทุกคนมาลุ้นไปพร้อมๆกันว่าใกล้แล้ว!!"],[r.a.Done,"คำสัญญานี้ทำได้สำเร็จ บอกต่อให้ทุกคนดู นี่คือคำสัญญาที่พูดแล้วทำจริง!!"]]),l=function(t,e){return"".concat(t,"/").concat(e,".jpg")}}}]);