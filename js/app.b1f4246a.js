(function(t){function e(e){for(var r,n,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)n=i[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&f.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,n=1;n<a.length;n++){var i=a[n];0!==o[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({about:"about",projects:"projects"}[t]||t)+"."+{about:"61de54e8",projects:"6321e560"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1,projects:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({about:"about",projects:"projects"}[t]||t)+"."+{about:"b2fc3255",projects:"88d4003d"}[t]+".css",o=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete n[t],d.parentNode.removeChild(d),a(s)},d.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){n[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,a){r=o[t]=[e,a]}));e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",f.name="ChunkLoadError",f.type=r,f.request=n,a[1](f)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/V2/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"21e2":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-card",{attrs:{"no-body":"","text-variant":"light"}},[a("b-card-footer",{attrs:{"footer-bg-variant":"dark"}},[[a("div",[a("span",{staticClass:"float-left"},[t._v(" Copyright © 2020, Austin Spencer ")]),a("span",{staticClass:"float-right"},[t._v("contact@austinspencer.works")])])]],2)],1)],1)},n=[]},2419:function(t,e,a){},"2e93":function(t,e){},"432b":function(t,e,a){"use strict";var r=a("aa68"),n=a.n(r);e["default"]=n.a},"486b":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.2.0/css/all.css",integrity:"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",crossorigin:"anonymous"}}),a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark",fixed:"top"}},[a("b-navbar-brand",[a("b-row",[a("b-col",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{cols:"4",id:"brand",title:"GitHub"}},[a("a",{attrs:{href:"https://github.com/abspen1"}},[a("i",{staticClass:"fab fa-github"})]),a("span")]),a("b-col",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{cols:"4",id:"brand",title:"LinkedIn"}},[a("a",{attrs:{href:"https://www.linkedin.com/in/austin-spencer-b56a25177/"}},[a("i",{staticClass:"fab fa-linkedin-in"})])])],1)],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.expanded;return[a("span",e?[a("i",{staticClass:"fas fa-chevron-circle-down"})]:[a("i",{staticClass:"fas fa-chevron-circle-up"})])]}}])}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"/"}},[t._v("Home")]),a("b-nav-item",{attrs:{to:"/projects"}},[t._v("Projects")]),a("b-nav-item",{attrs:{to:"/about"}},[t._v("About")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{id:"mail-icon",right:""}},[a("a",{attrs:{href:"https://austinspencer.works/about/contact/"}},[a("i",{staticClass:"fas fa-envelope"})])]),a("b-nav-item-dropdown",{attrs:{text:"Social",right:""}},[a("b-dropdown-item",{attrs:{variant:"info",href:"https://twitter.com/austinnspencer"}},[a("i",{staticClass:"fab fa-twitter"},[t._v(" Twitter")])]),a("b-dropdown-item",{attrs:{variant:"primary",href:"https://www.facebook.com/austin.spencer.129/"}},[a("i",{staticClass:"fab fa-facebook-f"},[t._v(" Facebook")])]),a("b-dropdown-item",{attrs:{variant:"warning",href:"https://instagram.com/austinspencer"}},[a("i",{staticClass:"fab fa-instagram"},[t._v(" Instagram")])])],1)],1)],1)],1)],1)},n=[]},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var r=a("2b0e"),n=a("5f5b");a("ab8b"),a("2dd8");r["default"].use(n["a"]);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("top-header")],1),a("router-view"),a("footer",[a("app-footer")],1)],1)},s=[],i=a("af34"),c=a("fd2d");window.axios=a("bc3a");var u={components:{"top-header":i["default"],"app-footer":c["default"]}},l=u,f=(a("5c0b"),a("2877")),d=Object(f["a"])(l,o,s,!1,null,null,null),b=d.exports,p=(a("d3b7"),a("8c4f")),v=a("bb51");r["default"].use(p["a"]);var h=[{path:"/",name:"Home",component:v["default"]},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/projects",name:"Projects",component:function(){return a.e("projects").then(a.bind(null,"acca"))}},{path:"/todo",name:"Todo",component:function(){return a.e("projects").then(a.bind(null,"a3b3"))}}],m=new p["a"]({mode:"history",base:"/V2/",routes:h}),g=m,w=a("2f62");r["default"].use(w["a"]);var y=new w["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["default"].config.productionTip=!1,new r["default"]({router:g,store:y,render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},"7ad4":function(t,e,a){"use strict";var r=a("9cae"),n=a.n(r);e["default"]=n.a},"94d4":function(t,e,a){"use strict";var r=a("2e93"),n=a.n(r);e["default"]=n.a},"9c0c":function(t,e,a){},"9cae":function(t,e){},a101:function(t,e,a){"use strict";var r=a("cb8f"),n=a.n(r);n.a},aa68:function(t,e){},af34:function(t,e,a){"use strict";var r=a("486b"),n=a("432b"),o=(a("c65d"),a("2877")),s=Object(o["a"])(n["default"],r["a"],r["b"],!1,null,"b096f0a8",null);e["default"]=s.exports},bb51:function(t,e,a){"use strict";var r=a("d71f"),n=a("7ad4"),o=(a("a101"),a("2877")),s=Object(o["a"])(n["default"],r["a"],r["b"],!1,null,"41bb86c3",null);e["default"]=s.exports},c65d:function(t,e,a){"use strict";var r=a("2419"),n=a.n(r);n.a},cb8f:function(t,e,a){},d71f:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.2.0/css/all.css",integrity:"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",crossorigin:"anonymous"}}),a("b-card",{attrs:{"no-body":"","text-variant":"dark"}},[a("div",{staticClass:"position-relative"},[a("b-card-img",{attrs:{src:"https://images.unsplash.com/photo-1600680386586-9b4795bee256?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",top:""}}),a("b-card-body",{staticClass:"card-img-overlay"},[a("b-card-title",[t._v("Welcome To My Website")]),a("b-card-sub-title",[t._v(" Austin Spencer ")])],1)],1),a("b-card-footer",[a("div",{staticClass:"float-right"},[a("p",[a("a",{attrs:{href:"https://gretchvalle.wixsite.com/glvphoto"}},[t._v(" Gretchen Louise Photography ")]),a("i",{staticClass:"fas fa-camera-retro"})])])])],1)],1)},n=[]},fd2d:function(t,e,a){"use strict";var r=a("21e2"),n=a("94d4"),o=a("2877"),s=Object(o["a"])(n["default"],r["a"],r["b"],!1,null,"af8a8b66",null);e["default"]=s.exports}});
//# sourceMappingURL=app.b1f4246a.js.map