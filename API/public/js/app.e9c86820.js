(function(t){function e(e){for(var n,i,c=e[0],o=e[1],l=e[2],u=0,f=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var o=a[i];0!==s[o]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},r=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2faf164d"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=n);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=i(t);var l=new Error;r=function(e){o.onerror=o.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}s[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"298b":function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar has-shadow"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"navbar-menu",attrs:{id:"navMenu"}},[a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link"},[t._v("Menu")]),a("div",{staticClass:"navbar-dropdown"},[a("a",{staticClass:"navbar-item"},[a("router-link",{attrs:{to:"/"}},[t._v("Search")])],1),a("a",{staticClass:"navbar-item"},[a("router-link",{attrs:{to:"/apidoc"}},[t._v("API Documentation")])],1)])])])])])]),a("router-view"),t._m(1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-brand"},[a("p",{staticClass:"level-item has-text-centered"},[a("a",{attrs:{href:"/"}},[t._v("Click N Clear Music")])]),a("div",{staticClass:"navbar-burger burger",attrs:{"data-target":"navMenu"}},[a("span"),a("span"),a("span")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer-bottom"},[a("div",{staticClass:"box cta"},[a("div",{staticClass:"columns is-mobile is-centered"},[a("div",{staticClass:"field is-grouped is-grouped-multiline"},[a("div",{staticClass:"control"},[a("div",{staticClass:"tags has-addons"},[a("a",{staticClass:"tag is-link",attrs:{href:"#"}},[t._v("ClicknClear Music 2020")]),a("span",{staticClass:"tag is-light"})])]),a("div",{staticClass:"control"},[a("div",{staticClass:"tags has-addons"},[a("a",{staticClass:"tag is-link",attrs:{href:"https://github.com/hpt-dev/ClickNClearMusic"}},[t._v("Github Repo")]),a("span",{staticClass:"tag is-light"},[a("i",{staticClass:"fa fa-github"})])])])])])])])}],i=(a("f961"),a("2877")),c={},o=Object(i["a"])(c,s,r,!1,null,"14f5c27d",null),l=o.exports,u=(a("d3b7"),a("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("section",{staticClass:"hero is-info"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[a("div",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.search,expression:"search",modifiers:{trim:!0}}],staticClass:"input is-large",attrs:{type:"search",placeholder:"12 Stone Toddler"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._m(0),t._m(1)])])])])])])]),a("div",{staticClass:"box"}),t.noResults||t.searching?a("section",{staticClass:"container"},[t.searching?a("Notification",{attrs:{content:t.searchingMsg}}):a("Notification",{attrs:{content:t.noResultMsg}})],1):a("ArtistTable",{attrs:{tracks:t.data}})],1)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-medium is-left"},[a("i",{staticClass:"fa fa-search"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-medium is-right"},[a("i",{staticClass:"fa fa-empire"})])}],v=(a("ac1f"),a("841c"),a("96cf"),a("1da1")),h=a("d4ec"),p=a("bee2"),b=a("262e"),m=a("2caf"),g=a("9ab4"),C=a("60a3"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"container"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"columns is-multiline is-centered cards-container",attrs:{id:"sectioncontainer"}},[a("table",{staticClass:"table is-striped is-hoverable is-fullwidth"},[t._m(0),t._m(1),a("tbody",t._l(t.tracks,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.artist))]),a("td",[t._v(t._s(e.title))])])})),0)])])])])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Id")]),a("th",[t._v("Artist")]),a("th",[t._v("Title")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tfoot",[a("tr",[a("th",[t._v("Id")]),a("th",[t._v("Artist")]),a("th",[t._v("Title")])])])}],O=function(t){Object(b["a"])(a,t);var e=Object(m["a"])(a);function a(){return Object(h["a"])(this,a),e.apply(this,arguments)}return a}(C["c"]);Object(g["a"])([Object(C["b"])()],O.prototype,"tracks",void 0),O=Object(g["a"])([C["a"]],O);var y=O,w=y,k=Object(i["a"])(w,_,j,!1,null,"141cff56",null),x=k.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notification is-link is-light"},[a("button",{staticClass:"delete"}),t._v(" "+t._s(t.content)+" ")])},E=[],T=function(t){Object(b["a"])(a,t);var e=Object(m["a"])(a);function a(){return Object(h["a"])(this,a),e.apply(this,arguments)}return a}(C["c"]);Object(g["a"])([Object(C["b"])()],T.prototype,"content",void 0),T=Object(g["a"])([C["a"]],T);var $=T,P=$,S=Object(i["a"])(P,M,E,!1,null,"71eba73c",null),R=S.exports,A=a("bc3a"),N=a.n(A),I=function(t){Object(b["a"])(a,t);var e=Object(m["a"])(a);function a(){var t;return Object(h["a"])(this,a),t=e.apply(this,arguments),t.data=[],t.search="",t.noResults=!0,t.searching=!1,t.noResultMsg="Sorry, no results found.",t.searchingMsg="Searching...",t}return Object(p["a"])(a,[{key:"searchTracks",value:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.searching=!0,t.next=3,N.a.get("/track/search/".concat(this.search)).then((function(t){e.searching=!1,e.data=t.data,e.noResults=0===t.data.length}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),a}(C["c"]);Object(g["a"])([Object(C["d"])("search")],I.prototype,"searchTracks",null),I=Object(g["a"])([Object(C["a"])({components:{ArtistTable:x,Notification:R}})],I);var D=I,J=D,L=Object(i["a"])(J,d,f,!1,null,null,null),q=L.exports;n["a"].use(u["a"]);var G=[{path:"/",name:"Search",component:q},{path:"/apidoc",name:"ApiDoc",component:function(){return a.e("about").then(a.bind(null,"3e70"))}}],U=new u["a"]({routes:G}),z=U;a("e0d3"),n["a"].config.productionTip=!1,new n["a"]({router:z,render:function(t){return t(l)}}).$mount("#app")},e0d3:function(t,e,a){},f961:function(t,e,a){"use strict";var n=a("298b"),s=a.n(n);s.a}});
//# sourceMappingURL=app.e9c86820.js.map