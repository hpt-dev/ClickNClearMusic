(function(t){function e(e){for(var s,i,c=e[0],o=e[1],l=e[2],u=0,v=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(v.length)v.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(s=!1)}s&&(n.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},r={app:0},n=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f60fcf92"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=s);var n,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=i(t);var l=new Error;n=function(e){o.onerror=o.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",l.name="ChunkLoadError",l.type=s,l.request=n,a[1](l)}r[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:o})}),12e4);o.onerror=o.onload=n,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"8c4b":function(t,e,a){},c289:function(t,e,a){"use strict";var s=a("8c4b"),r=a.n(s);r.a},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar has-shadow"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"navbar-menu",attrs:{id:"navMenu"}},[a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link"},[t._v("Account")]),a("div",{staticClass:"navbar-dropdown"},[a("a",{staticClass:"navbar-item"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("a",{staticClass:"navbar-item"},[a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),a("hr",{staticClass:"navbar-divider"}),a("div",{staticClass:"navbar-item"},[t._v("Logout")])])])])])])]),a("router-view"),t._m(1)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-brand"},[a("p",{staticClass:"level-item has-text-centered"},[t._v("Click N Clear Music ")]),a("div",{staticClass:"navbar-burger burger",attrs:{"data-target":"navMenu"}},[a("span"),a("span"),a("span")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer-bottom"},[a("div",{staticClass:"box cta"},[a("div",{staticClass:"columns is-mobile is-centered"},[a("div",{staticClass:"field is-grouped is-grouped-multiline"},[a("div",{staticClass:"control"},[a("div",{staticClass:"tags has-addons"},[a("a",{staticClass:"tag is-link",attrs:{href:""}}),a("span",{staticClass:"tag is-light"})])]),a("div",{staticClass:"control"},[a("div",{staticClass:"tags has-addons"},[a("a",{staticClass:"tag is-link"}),a("span",{staticClass:"tag is-light"},[a("i",{staticClass:"fa fa-github"})])])])])])])])}],i=(a("c289"),a("2877")),c={},o=Object(i["a"])(c,r,n,!1,null,"2d3a3b04",null),l=o.exports,u=(a("d3b7"),a("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("section",{staticClass:"hero is-info"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[a("div",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.search,expression:"search",modifiers:{trim:!0}}],staticClass:"input is-large",attrs:{type:"search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._m(0),t._m(1)])])])])])])]),a("div",{staticClass:"box"}),t.noResults||t.searching?t._e():a("ArtistTable",{attrs:{tracks:t.data}}),a("section",{staticClass:"container"},[t.noResults?a("div",[t._v("Sorry, no results found.")]):t._e(),t.searching?a("div",[a("i",[t._v("Searching...")])]):t._e()])],1)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-medium is-left"},[a("i",{staticClass:"fa fa-search"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-medium is-right"},[a("i",{staticClass:"fa fa-empire"})])}],f=(a("ac1f"),a("841c"),a("96cf"),a("1da1")),p=a("d4ec"),h=a("bee2"),b=a("262e"),m=a("2caf"),_=a("9ab4"),C=a("60a3"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"container"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"columns is-multiline is-centered cards-container",attrs:{id:"sectioncontainer"}},[a("table",{staticClass:"table"},[t._m(0),t._m(1),a("tbody",t._l(t.tracks,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.artist))]),a("td",[t._v(t._s(e.title))])])})),0)])])])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Id")]),a("th",[t._v("Artist")]),a("th",[t._v("Title")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tfoot",[a("tr",[a("th",[t._v("Id")]),a("th",[t._v("Artist")]),a("th",[t._v("Title")])])])}],j=function(t){Object(b["a"])(a,t);var e=Object(m["a"])(a);function a(){return Object(p["a"])(this,a),e.apply(this,arguments)}return a}(C["c"]);Object(_["a"])([Object(C["b"])()],j.prototype,"tracks",void 0),j=Object(_["a"])([C["a"]],j);var O=j,w=O,k=Object(i["a"])(w,g,y,!1,null,"87196e68",null),x=k.exports,E=a("bc3a"),T=a.n(E),$=function(t){Object(b["a"])(a,t);var e=Object(m["a"])(a);function a(){var t;return Object(p["a"])(this,a),t=e.apply(this,arguments),t.data=[],t.search="",t.noResults=!0,t.searching=!1,t}return Object(h["a"])(a,[{key:"searchTracks",value:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.searching=!0,t.next=3,T.a.get("/track/artist/".concat(this.search)).then((function(t){e.searching=!1,e.data=t.data,e.noResults=0===t.data.length}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),a}(C["c"]);Object(_["a"])([Object(C["d"])("search")],$.prototype,"searchTracks",null),$=Object(_["a"])([Object(C["a"])({components:{ArtistTable:x}})],$);var P=$,A=P,M=Object(i["a"])(A,d,v,!1,null,null,null),S=M.exports;s["a"].use(u["a"]);var R=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],L=new u["a"]({routes:R}),H=L;a("e0d3"),s["a"].config.productionTip=!1,new s["a"]({router:H,render:function(t){return t(l)}}).$mount("#app")},e0d3:function(t,e,a){}});
//# sourceMappingURL=app.c351d8a5.js.map