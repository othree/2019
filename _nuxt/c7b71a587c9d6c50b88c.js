(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{320:function(t,e,o){var content=o(329);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("77ea598c",content,!0,{sourceMap:!1})},321:function(t,e,o){var content=o(331);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("6e0cb133",content,!0,{sourceMap:!1})},322:function(t,e,o){var content=o(333);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("5e6510e1",content,!0,{sourceMap:!1})},323:function(t,e,o){"use strict";o(112);var r,n=o(43),c=(r=function(t,b){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e}(n.Vue),f=(o(328),o(7)),component=Object(f.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"card"},[this._t("default")],2)},[],!1,null,"b006d4d6",null);e.a=component.exports},324:function(t,e,o){var r=o(11),n=o(44),c=o(22),l=o(325),f="["+l+"]",d=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),h=function(t,e,o){var n={},f=c(function(){return!!l[t]()||"​"!="​"[t]()}),d=n[t]=f?e(m):l[t];o&&(n[o]=d),r(r.P+r.F*f,"String",n)},m=h.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(v,"")),t};t.exports=h},325:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},326:function(t,e,o){"use strict";var r=o(10),n=o(36),c=o(45),l=o(168),f=o(89),d=o(22),v=o(90).f,h=o(114).f,m=o(24).f,y=o(324).trim,_=r.Number,x=_,w=_.prototype,O="Number"==c(o(113)(w)),k="trim"in String.prototype,j=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var o,r,n,c=(e=k?e.trim():y(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(o=e.charCodeAt(2))||120===o)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+e}for(var code,l=e.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>n)return NaN;return parseInt(l,r)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof _&&(O?d(function(){w.valueOf.call(o)}):"Number"!=c(o))?l(new x(j(e)),o,_):j(e)};for(var C,N=o(17)?v(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;N.length>P;P++)n(x,C=N[P])&&!n(_,C)&&m(_,C,h(x,C));_.prototype=w,w.constructor=_,o(25)(r,"Number",_)}},327:function(t,e,o){"use strict";o(326),o(50),o(13),o(14);var r,n=o(23),c=(o(112),o(43)),l=(r=function(t,b){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),f=function(t,e,o,desc){var r,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(c<3?r(l):c>3?r(e,o,l):r(e,o))||l);return c>3&&l&&Object.defineProperty(e,o,l),l},d=function(t,e){var o="function"==typeof Symbol&&t[Symbol.iterator];if(!o)return t;var r,n,i=o.call(t),c=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(t){n={error:t}}finally{try{r&&!r.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}return c},v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return l(e,t),Object.defineProperty(e.prototype,"cssRatio",{get:function(){var t=this.$props.ratio,e=d(t.split(":"),2),o=e[0],r=e[1];return 100*Number(void 0===r?1:r)/Number(o)+"%"},enumerable:!0,configurable:!0}),e=f([Object(c.Component)({inheritAttrs:!1,props:{ratio:{type:String,required:!0}}})],e)}(c.Vue),h=(o(330),o(7)),component=Object(h.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ratio-box",style:{"--ratio":this.cssRatio}},[e("div",this._b({staticClass:"content"},"div",this.$attrs,!1),[this._t("default")],2)])},[],!1,null,"aea6bdd8",null);e.a=component.exports},328:function(t,e,o){"use strict";var r=o(320);o.n(r).a},329:function(t,e,o){(t.exports=o(20)(!1)).push([t.i,".card[data-v-b006d4d6]{background-color:hsla(0,0%,100%,.9);box-shadow:0 4px 48px rgba(0,0,0,.1);margin:0 1em 2em;padding:2em}",""])},330:function(t,e,o){"use strict";var r=o(321);o.n(r).a},331:function(t,e,o){(t.exports=o(20)(!1)).push([t.i,'.ratio-box[data-v-aea6bdd8]{width:100%;position:relative}.ratio-box[data-v-aea6bdd8]:before{content:"";display:block;padding-top:100%;padding-top:var(--ratio)}.ratio-box>.content[data-v-aea6bdd8]{position:absolute;top:0;left:0;bottom:0;right:0}',""])},332:function(t,e,o){"use strict";var r=o(322);o.n(r).a},333:function(t,e,o){(t.exports=o(20)(!1)).push([t.i,"section.sponsors[data-v-ec3bd4aa]{display:grid;padding-top:2em;grid-template-columns:1fr;grid-gap:2em;font-size:.8em}.sponsors .level[data-v-ec3bd4aa]{width:100%;grid-column:1/span 2;margin:0}section.sponsors div.sponsors[data-v-ec3bd4aa]{display:grid;grid-template-columns:1fr 1fr 1fr}.sponsors .sponsor[data-v-ec3bd4aa]{display:flex;flex-direction:column;align-items:center;padding:.5em}.sponsors .sponsor img[data-v-ec3bd4aa]{max-height:100%;max-width:100%;margin:auto;position:absolute;top:0;left:0;bottom:0;right:0}.sponsors .sponsor:hover img[data-v-ec3bd4aa]{-webkit-filter:opacity(.6);filter:opacity(.6)}@media (min-width:840px){section.sponsors[data-v-ec3bd4aa]{grid-template-columns:1fr 1fr;font-size:1em}section.sponsors div.sponsors[data-v-ec3bd4aa]{grid-template-columns:1fr 1fr 1fr 1fr 1fr}.sponsors .level[data-v-ec3bd4aa]:first-child,.sponsors .level[data-v-ec3bd4aa]:nth-child(2){grid-column:initial}.sponsors .level:first-child .sponsors[data-v-ec3bd4aa],.sponsors .level:nth-child(2) .sponsors[data-v-ec3bd4aa]{grid-template-columns:1fr 1fr}}",""])},334:function(t,e,o){"use strict";var r,n=o(23),c=(o(112),o(43)),l=o(61),f=o(62),d=o(323),v=o(327),h=(r=function(t,b){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),m=function(t,e,o,desc){var r,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(c<3?r(l):c>3?r(e,o,l):r(e,o))||l);return c>3&&l&&Object.defineProperty(e,o,l),l},y=Object(l.namespace)(f.name,l.Getter),_=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return h(e,t),m([y("byLevel")],e.prototype,"sponsorsByLevel",void 0),e=m([Object(c.Component)({components:{Card:d.a,RatioBox:v.a}})],e)}(c.Vue),x=(o(332),o(7)),component=Object(x.a)(_,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"sponsors container"},t._l(t.sponsorsByLevel,function(e){return o("Card",{key:e.title,staticClass:"level"},[o("h1",[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"sponsors"},t._l(e.sponsors,function(e){return o("a",{key:e.name,staticClass:"sponsor",attrs:{href:e.link,title:e.name,target:"_blank"}},[o("RatioBox",{attrs:{ratio:"1:1"}},[o("img",{attrs:{src:e.image,alt:""}})]),t._v("\n        "+t._s(e.name)+"\n      ")],1)}),0)])}),1)},[],!1,null,"ec3bd4aa",null);e.a=component.exports},343:function(t,e,o){var content=o(363);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("90138738",content,!0,{sourceMap:!1})},362:function(t,e,o){"use strict";var r=o(343);o.n(r).a},363:function(t,e,o){e=t.exports=o(20)(!1);var r=o(171)(o(364));e.push([t.i,"[data-v-5ca68a11]:root{--accent:#3b9c60}.topic[data-v-5ca68a11],main.index[data-v-5ca68a11]{width:100%;display:flex;flex-direction:column;align-items:center}.topic[data-v-5ca68a11]{padding:4em 2em!important;min-height:80vh;height:100%;justify-content:center;position:relative}.topic .background[data-v-5ca68a11]{position:absolute;left:0;right:0;top:0;bottom:0;background-color:#fff}.topic .foreground[data-v-5ca68a11]{z-index:1;display:flex;flex-direction:column;justify-content:space-evenly;text-align:center}.topic .logo-box[data-v-5ca68a11]{background-image:url("+r+");background-repeat:no-repeat;background-size:contain}.topic .main-box[data-v-5ca68a11]{display:flex;flex-direction:column;justify-content:center;text-align:right}.topic h1[data-v-5ca68a11]{color:#3b9c60;color:var(--accent);font-size:2.4em;line-height:1.2em;padding-bottom:.4em}.topic h2[data-v-5ca68a11]{font-size:1.4em}.call-for-volunteers[data-v-5ca68a11]{margin:.3em 0 0 auto;padding:.6em 1.5em .7em;display:inline-block;background-color:#3b9c60;background-color:var(--accent);color:#fff;line-height:1em;transition:box-shadow .3s cubic-bezier(.4,0,.2,1),background-color .3s cubic-bezier(.4,0,.2,1)}.call-for-volunteers[data-v-5ca68a11]:focus,.call-for-volunteers[data-v-5ca68a11]:hover{box-shadow:0 .2em 12px rgba(0,0,0,.1);background-color:color(#3b9c60 a(90%));background-color:color(var(--accent) a(90%))}.show-live-cast[data-v-5ca68a11]{text-align:center;padding-top:1em}.show-live-cast a[data-v-5ca68a11]{margin:0 auto;padding:.6em 1.5em .7em;display:inline-block;background-color:#3b9c60;background-color:var(--accent);color:#fff;line-height:1em;transition:box-shadow .3s cubic-bezier(.4,0,.2,1),margin-top .3s cubic-bezier(.4,0,.2,1),font-size .3s cubic-bezier(.4,0,.2,1)}.show-live-cast a[data-v-5ca68a11]:focus,.show-live-cast a[data-v-5ca68a11]:hover{box-shadow:0 .2em 12px rgba(0,0,0,.1)}.about article[data-v-5ca68a11],.register article[data-v-5ca68a11]{margin-bottom:-1em}.about article p[data-v-5ca68a11],.register article p[data-v-5ca68a11]{margin-bottom:1em;text-indent:2.5em}.register .register-now[data-v-5ca68a11]{text-align:center;padding-top:1em}.register .register-now a[data-v-5ca68a11]{margin:0 auto;padding:.6em 1.5em .7em;display:inline-block;background-color:#3b9c60;background-color:var(--accent);color:#fff;line-height:1em;transition:box-shadow .3s cubic-bezier(.4,0,.2,1),margin-top .3s cubic-bezier(.4,0,.2,1),font-size .3s cubic-bezier(.4,0,.2,1)}.register .register-now a[data-v-5ca68a11]:focus,.register .register-now a[data-v-5ca68a11]:hover{box-shadow:0 .2em 12px rgba(0,0,0,.1);margin-top:-.2em;font-size:1.1em}@media(min-width:840px){.topic[data-v-5ca68a11]{max-height:80vh;font-size:1.2em}.topic .foreground[data-v-5ca68a11]{flex-direction:row}.topic .logo-box[data-v-5ca68a11]{flex-basis:50%}.topic .main-box[data-v-5ca68a11]{display:flex;flex-direction:column;justify-content:center;flex-basis:50%;margin-left:1em;text-align:right}}",""])},364:function(t,e,o){t.exports=o.p+"img/c8cf54a.png"},366:function(t,e,o){"use strict";o.r(e);o(50),o(13),o(14),o(9);var r,n=o(23),c=(o(112),o(43)),l=o(61),f=o(41),d=o.n(f),main=o(49),v=o(116),h=o(323),m=o(327),y=o(334),_=(r=function(t,b){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),x=function(t,e,o,desc){var r,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(c<3?r(l):c>3?r(e,o,l):r(e,o))||l);return c>3&&l&&Object.defineProperty(e,o,l),l},w=function(t,e,o,r){return new(o||(o=Promise))(function(n,c){function l(t){try{d(r.next(t))}catch(t){c(t)}}function f(t){try{d(r.throw(t))}catch(t){c(t)}}function d(t){t.done?n(t.value):new o(function(e){e(t.value)}).then(l,f)}d((r=r.apply(t,e||[])).next())})},O=function(t,body){var e,o,r,g,n={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(l){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;n;)try{if(e=1,o&&(r=2&c[0]?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,o=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(!(r=(r=n.trys).length>0&&r[r.length-1])&&(6===c[0]||2===c[0])){n=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){n.label=c[1];break}if(6===c[0]&&n.label<r[1]){n.label=r[1],r=c;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(c);break}r[2]&&n.ops.pop(),n.trys.pop();continue}c=body.call(t,n)}catch(t){c=[6,t],o=0}finally{e=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}},k=Object(l.namespace)(main.name,l.State),j=Object(l.namespace)(v.name,l.State),C=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return _(e,t),e.prototype.mounted=function(){this.$store.dispatch("clientsFirstFetch",this.$options.fetch)},e.prototype.fetch=function(t){var e=t.store.dispatch;return w(this,void 0,void 0,function(){return O(this,function(t){switch(t.label){case 0:return[4,e(v.name+"/fetchData")];case 1:return t.sent(),[2]}})})},e.prototype.getParagraphs=function(article){return article.trim().split(/\r\n?|\n\r?/g)},x([k],e.prototype,"description",void 0),x([k],e.prototype,"registration",void 0),x([k],e.prototype,"place",void 0),x([j("article")],e.prototype,"aboutArticle",void 0),e=x([Object(c.Component)({components:{Card:h.a,RatioBox:m.a,SponsorFooter:y.a},filters:{moment:function(t){return d()(t).format("ll LT")}}})],e)}(c.Vue),N=(o(362),o(7)),component=Object(N.a)(C,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"index"},[o("Card",{staticClass:"topic"},[o("div",{staticClass:"background"}),t._v(" "),o("div",{staticClass:"foreground container"},[o("div",{staticClass:"logo-box"},[o("RatioBox",{attrs:{ratio:"920:848"}})],1),t._v(" "),o("div",{staticClass:"main-box"},[o("h1",[t._v("\n            COSCUP 2019\n          ")]),t._v(" "),o("h2",[t._v(t._s(t.description))]),t._v("\n          "+t._s(t.place)+"\n\t\t  "),o("a",{staticClass:"call-for-volunteers",attrs:{href:"https://coscup2019.kktix.cc/events/coscup2019regist",target:"_blank"}},[t._v(t._s(t.$t("register")))])])])]),t._v(" "),o("Card",{staticClass:"register container"},[o("h1",[t._v(t._s(t.$t("register")))]),t._v(" "),o("h3",[t._v(t._s(t.registration.start_at+" ~ "+t.registration.end_at))]),t._v(" "),o("div",{staticClass:"register-now"},[o("a",{attrs:{href:t.registration.link,target:"_blank"}},[t._v(t._s(t.$t("about.register_now")))])])]),t._v(" "),o("Card",{staticClass:"about container"},[o("h1",[t._v(t._s(t.$t("pages.about")))]),t._v(" "),o("article",t._l(t.getParagraphs(t.aboutArticle),function(e,r){return o("p",{key:r},[t._v("\n          "+t._s(e)+"\n        ")])}),0)]),t._v(" "),o("SponsorFooter")],1)},[],!1,null,"5ca68a11",null);e.default=component.exports}}]);