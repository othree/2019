(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{338:function(t,e,r){var content=r(353);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("7d0ee828",content,!0,{sourceMap:!1})},352:function(t,e,r){"use strict";var o=r(338);r.n(o).a},353:function(t,e,r){(t.exports=r(20)(!1)).push([t.i,".modal{position:fixed;top:0;left:0;right:0;bottom:0;background-color:hsla(0,0%,100%,.9);z-index:999;padding-top:3em}.modal .close{position:absolute;right:.2em;top:.2em;cursor:pointer;font-size:3em;font-weight:bolder}.modal article{background-color:#ecf5f4;margin:0 auto;width:100%;box-sizing:border-box;max-width:1000px;padding:2em;border-radius:5px;max-height:calc(100vh - 4em);overflow:auto}.modal h4{font-size:2em;line-height:1.3em;margin:.3em 0}.modal p{margin:2em 0}.modal .language,.modal .period,.modal .room{font-weight:700}.modal .period{margin:0 .5em}.modal .difficult{font-weight:700;text-align:right}.modal .track{text-align:right;color:#009a79}.speaker{margin-bottom:2em;background-color:#fff}.speaker strong{display:block;text-align:center;font-size:larger;padding:.5em}.speaker p{padding:1em;margin:0;word-break:break-word;border-radius:.5em}@media only screen and (min-width:720px){.speaker strong{text-align:left;padding:1em 1em 0}}",""])},370:function(t,e,r){"use strict";r.r(e);r(169),r(170),r(29),r(51),r(13),r(14),r(9);var o,n=r(23),c=(r(112),r(43)),l=r(61),d=r(115),f=(o=function(t,b){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}o(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),m=function(t,e,r,desc){var o,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(c<3?o(l):c>3?o(e,r,l):o(e,r))||l);return c>3&&l&&Object.defineProperty(e,r,l),l},h=function(t,e,r,o){return new(r||(r=Promise))(function(n,c){function l(t){try{f(o.next(t))}catch(t){c(t)}}function d(t){try{f(o.throw(t))}catch(t){c(t)}}function f(t){t.done?n(t.value):new r(function(e){e(t.value)}).then(l,d)}f((o=o.apply(t,e||[])).next())})},y=function(t,body){var e,r,o,g,n={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(l){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;n;)try{if(e=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,r=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(!(o=(o=n.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){n=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(6===c[0]&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=body.call(t,n)}catch(t){c=[6,t],r=0}finally{e=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}},v=Object(l.namespace)(d.name,l.State),_=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.getTimeSlug=function(t){return e.padStartWithZero(t.hour)+":"+e.padStartWithZero(t.minute)},e}return f(e,t),e.prototype.mounted=function(){this.$store.dispatch("clientsFirstFetch",this.$options.fetch)},e.prototype.fetch=function(t){var e=t.store,r=e.dispatch,o=e.state,n=t.params,c=t.error;return h(this,void 0,void 0,function(){return y(this,function(t){switch(t.label){case 0:return[4,r(d.name+"/fetchData")];case 1:return t.sent(),/^day[12]$/.test(n.id)?[2]:(o[d.name].programs.find(function(t){return t.id===n.id})||c({statusCode:404,message:"Page not found."}),[2])}})})},Object.defineProperty(e.prototype,"program",{get:function(){var t=this;return this.programs.find(function(e){return e.id===t.$route.params.id})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){var t=this.program.speakers.map(function(t){return t.name}).join("/");return this.program.title+" by "+t+" | COSCUP 2019"},enumerable:!0,configurable:!0}),e.prototype.head=function(){return{title:this.title,meta:[{hid:"og:description",property:"og:description",content:this.program.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:url",property:"og:url",content:"https://coscup.org/2019"+this.$route.path}]}},e.prototype.padStartWithZero=function(t){return t<10?"0"+t:t.toString()},m([v],e.prototype,"programs",void 0),m([Object(c.Prop)({default:1})],e.prototype,"programDay",void 0),e=m([Object(c.Component)({name:"Program"})],e)}(c.Vue),w=(r(352),r(7)),component=Object(w.a)(_,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.program?r("div",{staticClass:"modal"},[r("nuxt-link",{attrs:{to:("zh-TW"!==t.$i18n.locale?"/"+t.$i18n.locale:"")+"/programs/day"+t.programDay}},[r("span",{staticClass:"close"},[t._v("×")])]),t._v(" "),r("article",[r("header",[t.program.tags.length&&t.program.tags[1]?r("div",{staticClass:"track"},[t._v("\n        "+t._s(""+t.program.tags[1].name)+"\n      ")]):t._e(),t._v(" "),t.program.tags.length&&t.program.tags[2]?r("div",{staticClass:"difficult"},[t._v(t._s(""+t.program.tags[2].name))]):t._e(),t._v(" "),r("h4",[t._v(t._s(t.program.title))]),t._v(" "),r("span",{staticClass:"room"},[t._v(t._s(t.program.room.name))]),t._v(" "),r("span",{staticClass:"period"},[t._v(t._s(t.getTimeSlug(t.program.start)+" ~ "+t.getTimeSlug(t.program.end)))]),t._v(" "),t.program.tags.length&&t.program.tags[0]?r("span",{staticClass:"language"},[t._v(t._s(""+t.program.tags[0].name))]):t._e()]),t._v(" "),r("p",[t._v(t._s(t.program.description))]),t._v(" "),r("footer",[t._l(t.program.speakers,function(e,o){return[r("div",{key:"speaker-"+o,staticClass:"speaker"},[r("strong",[t._v(t._s(e.name))]),t._v(" "),r("p",[t._v(t._s(e.bio))])])]})],2)])],1):t._e()},[],!1,null,null,null);e.default=component.exports}}]);