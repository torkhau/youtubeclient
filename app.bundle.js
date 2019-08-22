!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e,n){var r=n(1);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(e=t.exports=n(2)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Comfortaa);",""]),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);",""]),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Lobster);",""]);var r=n(3)(n(4));e.push([t.i,'@font-face {\r\n    font-family: "foundation-icons";\r\n    src: url('+r+") format(\"truetype\");\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\nbody {\r\n    position: fixed;\r\n    margin: 0 auto;\r\n    padding-top: 10px;\r\n    width: 100vw;\r\n    background-color: gray;\r\n    overflow: hidden;\r\n}\r\n\r\n.search-wrapper {\r\n    text-align: center;\r\n}\r\n\r\n.search-input-label:before {\r\n    font-family: 'foundation-icons';\r\n    content: \"\\f16c\";\r\n    position: relative;\r\n    font-size: 2em;\r\n    left: 2.4rem;\r\n    top: 0.4rem;\r\n}\r\n\r\n.search-input {\r\n    font-family: 'Roboto', 'Comfortaa', 'Lobster';\r\n    font-size: 1.2rem;\r\n    width: 50%;\r\n    background-size: auto 90%;\r\n    background-color: white;\r\n    border: 2px double rgba(255, 0, 0, 0.5);\r\n    border-radius: 10px;\r\n    padding: 6px 6px 6px 2.5em;\r\n}\r\n\r\nul {\r\n    --clips-per-page: 4;\r\n    --clip-width: calc(100vw/var(--clips-per-page));\r\n    --clip-height: calc(var(--clip-width)*1.2);\r\n    padding-inline-start: 0;\r\n    margin-block-end: 0;\r\n    display: grid;\r\n    grid-template-columns: repeat(var(--count-clips), var(--clip-width));\r\n    /* width: calc(var(--clip-width)*8); */\r\n    width: 100vw;\r\n    overflow-x: auto;\r\n    margin-top: 20px;\r\n    padding-bottom: 5px;\r\n    cursor: pointer;\r\n    transition: all 0.2s;\r\n    transform: scale(1);\r\n    will-change: transform;\r\n    user-select: none;\r\n}\r\n\r\nul.active {\r\n    cursor: grabbing;\r\n    transform: scale(1.02);\r\n}\r\n\r\nul.smooth {\r\n    scroll-behavior: smooth;\r\n}\r\n\r\nul::-webkit-scrollbar {\r\n    width: 0;\r\n}\r\n\r\nul li {\r\n    list-style-type: none;\r\n    height: var(--clip-height);\r\n    width: var(--clip-width);\r\n}\r\n\r\nli .container {\r\n    height: 100%;\r\n    width: 90%;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    border: 2px double rgba(255, 0, 0, 0.5);\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0 auto;\r\n}\r\n\r\n.img-wrapper, .data-wrapper, .description {\r\n    height: calc(100%/3);\r\n    padding: 3%;\r\n}\r\n\r\n.img-wrapper {\r\n    position: relative;\r\n}\r\n\r\n.link-wrapper {\r\n    background-color: rgba(255, 0, 0, 0.7);\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    width: 94%;\r\n    top: calc(100%/3);\r\n    text-align: center;\r\n}\r\n\r\n.link-wrapper a {\r\n    font-family: 'Lobster', 'Roboto', 'Comfortaa';\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n.link-wrapper a:hover {\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n}\r\n\r\n.img-wrapper img {\r\n    border-radius: 10px;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.data-wrapper {\r\n    display: grid;\r\n    grid-template-rows: repeat(3, 1fr);\r\n    grid-template-columns: 0.4fr 1.6fr;\r\n    text-align: center;\r\n    align-items: center;\r\n    font-family: 'Roboto', 'Lobster', 'Comfortaa';\r\n    font-weight: bold;\r\n    font-size: 1.1em;\r\n    word-break: break-all;\r\n}\r\n\r\n.description {\r\n    font-family: 'Comfortaa', 'Roboto', 'Lobster';\r\n    font-size: 0.8rem;\r\n    word-break: break-all;\r\n}\r\n\r\n.data-wrapper_ico {\r\n    text-align: right;\r\n    font-family: 'foundation-icons';\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.button-wrapper {\r\n    width: 100vw;\r\n    text-align: center;\r\n}\r\n\r\n.btn {\r\n    margin: 10px;\r\n    border-radius: 50%;\r\n    height: 50px;\r\n    width: 50px;\r\n    background-color: white;\r\n    border-color: rgba(255, 0, 0, 0.5);\r\n    padding: 17px;\r\n}\r\n\r\n@media (max-width:1024px) {\r\n    ul {\r\n        --clips-per-page: 3\r\n    }\r\n}\r\n\r\n@media (max-width:768px) {\r\n    ul {\r\n        --clips-per-page: 2\r\n    }\r\n}\r\n\r\n@media (max-width:480px) {\r\n    ul {\r\n        --clips-per-page: 1\r\n    }\r\n}",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),s=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(s).concat([i]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(i=0;i<t.length;i++){var a=t[i];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,n){t.exports=n.p+"fonts/foundation-icons.ttf"},function(t,e,n){var r,i,s={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),o=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),l=null,c=0,u=[],d=n(6);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=s[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(b(r.parts[a],e))}else{var o=[];for(a=0;a<r.parts.length;a++)o.push(b(r.parts[a],e));s[r.id]={id:r.id,refs:1,parts:o}}}}function h(t,e){for(var n=[],r={},i=0;i<t.length;i++){var s=t[i],a=e.base?s[0]+e.base:s[0],o={css:s[1],media:s[2],sourceMap:s[3]};r[a]?r[a].parts.push(o):n.push(r[a]={id:a,parts:[o]})}return n}function m(t,e){var n=o(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(t.insertAt.before,n);n.insertBefore(e,i)}}function f(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return v(e,t.attrs),m(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,i,s;if(e.transform&&t.css){if(!(s="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=s}if(e.singleton){var a=c++;n=l||(l=g(e)),r=x.bind(null,n,a,!1),i=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),m(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,s=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||s)&&(r=d(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(a),o&&URL.revokeObjectURL(o)}.bind(null,n,e),i=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){f(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return p(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i];(o=s[a.id]).refs--,r.push(o)}t&&p(h(t,e),e);for(i=0;i<r.length;i++){var o;if(0===(o=r[i]).refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete s[o.id]}}}};var w,y=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function x(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var s=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,s=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?t:(i=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:r+s.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,n){"use strict";n.r(e);class r{constructor(t="",e="",n="",r=""){const i=t.toString();if(i)switch(i){case"password":this.type="password";break;case"email":this.type="email";break;case"search":this.type="search";break;default:this.type="text"}else this.type="text";this.idName=e.toString(),this.className=n.toString(),this.placeholder=r.toString()}getElement(t){const e=t.createElement("input");return this.idName&&e.setAttribute("id",this.idName),this.className&&e.setAttribute("class",this.className),this.placeholder&&e.setAttribute("placeholder",this.placeholder),e.setAttribute("type",this.type),e}}class i{constructor(t){this.forElem=t.forElem||"",this.idName=t.idName||"",this.className=t.className||""}getElement(t){const e=t.createElement("label");return this.idName&&e.setAttribute("id",this.idName),this.className&&e.setAttribute("class",this.className),this.forElem&&e.setAttribute("for",this.forElem),e}}class s{constructor(t){this.charset=t.charset||"",this.content=t.content||"",this.httpEquiv=t.httpEquiv||"",this.name=t.name||""}getElement(t){const e=t.createElement("meta");return this.charset&&e.setAttribute("charset",this.charset),this.content&&e.setAttribute("content",this.content),this.httpEquiv&&e.setAttribute("http-equiv",this.httpEquiv),this.name&&e.setAttribute("name",this.name),e}}class a{constructor(t){this.href=t.href||"",this.target=t.target||"",this.rel=t.rel||""}getElement(t){const e=t.createElement("a");return this.href&&e.setAttribute("href",this.href),this.target&&e.setAttribute("target",this.target),this.rel&&e.setAttribute("rel",this.rel),e}}class o{constructor(t){this.src=t.src||"",this.alt=t.alt||""}getElement(t){const e=t.createElement("img");return this.src&&e.setAttribute("src",this.src),this.alt&&e.setAttribute("alt",this.alt),e}}class l{constructor(t="",e="",n){this.className=t,this.name=e,this.text=n}getElement(t){const e=t.createElement("button");return this.className&&e.setAttribute("class",this.className),this.name&&e.setAttribute("name",this.name),e.innerText=this.text,e}}class c{constructor(t){this.urlRequest=t}static extractData(t){return{items:t.items,nextPageToken:t.nextPageToken}}async sendRequest(){const t=await fetch(this.urlRequest),e=await t.json();return c.extractData(e)}}class u{constructor(t){this.videoLink=t.videoLink||"",this.relLink=t.relVideo||"",this.titleContent=t.titleContent||"",this.srcImg=t.srcImg||"",this.altImg=t.altImg||"",this.channelTitle=t.channelTitle||"",this.description=t.description||"",this.publishedAt=t.publishedAt||"",this.countViev=t.countViev||""}getElement(t){const e=new a({href:this.videoLink,target:"_blank",rel:this.relLink}).getElement(t);e.innerText=this.titleContent;const n=t.createElement("div");n.setAttribute("class","link-wrapper"),n.appendChild(e);const r=new o({src:this.srcImg,alt:this.title}),i=t.createElement("div");i.setAttribute("class","img-wrapper"),i.appendChild(n),i.appendChild(r.getElement(t));const s=Array(3),l=Array(3);for(let e=0;e<3;e+=1)s[e]=t.createElement("div"),s[e].setAttribute("class","data-wrapper_ico"),l[e]=t.createElement("div");s[0].innerText=String.fromCharCode(61954),s[1].innerText=String.fromCharCode(61732),s[2].innerText=String.fromCharCode(61767),l[0].innerText=this.channelTitle,l[1].innerText=this.publishedAt,l[2].innerText=this.countViev;const c=t.createElement("div");c.setAttribute("class","data-wrapper");for(let t=0;t<3;t+=1)c.appendChild(s[t]),c.appendChild(l[t]);const u=t.createElement("div");u.setAttribute("class","description"),u.innerText=this.description;const d=t.createElement("div");d.setAttribute("class","container"),d.appendChild(i),d.appendChild(c),d.appendChild(u);const p=t.createElement("li");return p.appendChild(d),p}}class d{getClientWidth(){return this.clientWidth=document.documentElement.clientWidth,this.clientWidth}getClipPerPage(){const t=this.getClientWidth();return this.clipPerPage=t<=480?1:t<=768?2:t<=1024?3:4,this.clipPerPage}getClipWidth(){return this.clipWidth=Number.parseInt((this.getClientWidth()/this.getClipPerPage()).toFixed(2),10),this.clipWidth}}class p{constructor(t){this.dataToParse=t}get data(){const{channelTitle:t,description:e,publishedAt:n}=this.dataToParse.snippet,{title:r}=this.dataToParse.snippet,{videoId:i}=this.dataToParse.id,{url:s}=this.dataToParse.snippet.thumbnails.medium,a={};a.videoId=i,a.videoLink=`https://www.youtube.com/watch?v=${i}`,a.relVideo=r,a.titleContent=r,a.srcImg=s,a.altImg=r,a.channelTitle=t;const o=new Date(Date.parse(n));return a.publishedAt=o.toLocaleDateString(),a.description=e,a}}class h{constructor(t){this.data=t.data,this.nextPageToken=t.nextPageToken,this.urlRequest=t.urlRequest,this.isDown=!1,this.startX=0,this.scrollLeft=0,this.walk=0,this.ulMain=void 0,this.page=1,this.countClips=0,this.divButtons=void 0}static async request(t){const e=new c(`${t.urlRequest}&pageToken=${t.nextPageToken}`);let n=await e.sendRequest();const r=[],i={nextPageToken:n.nextPageToken,data:[]},s=n.items;for(let t=0;t<s.length;t+=1){const e=new p(s[t]);i.data.push(e.data),r.push(i.data[t].videoId)}e.urlRequest=`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBMPWAjVIhgEIexmquDjkdXx4snJjWzUF0&id=${r.join(",")}&part=snippet,statistics`,n=await e.sendRequest();for(let t=0;t<n.items.length;t+=1)i.data[t].countViev=n.items[t].statistics.viewCount;return i}static onPointerDown(t,e){const n=e;n.ulMain.classList.remove("smooth"),n.ulMain.classList.add("active"),n.isDown=!0;let r=0;"mousedown"===t.type?r=t.pageX:"touchstart"===t.type&&(r=t.changedTouches[0].pageX),n.startX=r-n.ulMain.offsetLeft,n.scrollLeft=n.ulMain.scrollLeft}static addEventMousedown(t){t.ulMain.addEventListener("mousedown",e=>h.onPointerDown(e,t)),t.ulMain.addEventListener("touchstart",e=>h.onPointerDown(e,t))}static onPointerLeave(t){const e=t;e.isDown=!1,e.ulMain.classList.remove("active")}static addEventMouseleave(t){t.ulMain.addEventListener("mouseleave",()=>h.onPointerLeave(t)),t.ulMain.addEventListener("touchcancel",()=>h.onPointerLeave(t))}static onPointerUp(t){const e=t;e.isDown=!1,e.ulMain.classList.remove("active"),e.ulMain.classList.add("smooth");const n=new d,r=n.getClipWidth();if(Math.abs(e.walk)>r/2)if(e.page>1||1===e.page&&e.walk<0){const t=n.getClipPerPage(),r=e.walk<0?-1:1;e.ulMain.scrollLeft=e.scrollLeft-r*n.getClientWidth(),e.page-=r,h.textButtons(e),e.countClips-e.page*t<t&&h.request(e).then(t=>{e.data=t.data,e.nextPageToken=t.nextPageToken,h.appendItems(e)})}else e.ulMain.scrollLeft=e.scrollLeft;else e.ulMain.scrollLeft=e.scrollLeft}static addEventMouseup(t){t.ulMain.addEventListener("mouseup",()=>h.onPointerUp(t)),t.ulMain.addEventListener("touchend",()=>h.onPointerUp(t))}static onPointerMove(t,e){const n=e;if(!n.isDown)return;t.preventDefault();let r=0;"mousemove"===t.type?r=t.pageX:"touchmove"===t.type&&(r=t.changedTouches[0].pageX);const i=r-n.ulMain.offsetLeft;n.walk=i-n.startX,n.ulMain.scrollLeft=n.scrollLeft-n.walk}static addEventMousemove(t){t.ulMain.addEventListener("mousemove",e=>h.onPointerMove(e,t)),t.ulMain.addEventListener("touchmove",e=>h.onPointerMove(e,t))}static textButtons(t){const e=t.divButtons.getElementsByTagName("button");for(let n=0;n<e.length;n+=1){const r=e[n];switch(n){case 0:1===t.page?r.innerText="":r.innerText="<<";break;case 1:1===t.page?r.innerText="":r.innerText=t.page-1;break;case 2:r.innerText=t.page+1}}}static addEventBtnClick(t){const e=t;e.divButtons.addEventListener("click",t=>{const{target:n}=t;if("button"===n.localName){const t=new d,r=t.getClientWidth(),i=t.getClipPerPage();switch(n.name){case"btn_home":e.page>1&&(e.ulMain.scrollLeft=0,e.page=1,h.textButtons(e));break;case"btn_prev":e.page>1&&(e.ulMain.scrollLeft-=r,e.page-=1,h.textButtons(e));break;case"btn_next":e.ulMain.classList.add("smooth"),e.ulMain.scrollLeft+=r,e.page+=1,h.textButtons(e),e.countClips-e.page*i<i&&h.request(e).then(t=>{e.data=t.data,e.nextPageToken=t.nextPageToken,h.appendItems(e)})}}})}static appendItems(t){const e=t;e.countClips+=e.data.length,e.ulMain.style.setProperty("--count-clips",e.countClips);for(let t=0,n=e.data.length;t<n;t+=1){const n=new u(e.data[t]);e.ulMain.appendChild(n.getElement(document))}}show(){const t=document.getElementsByTagName("body")[0],e=t.getElementsByTagName("ul")[0];e&&t.removeChild(e);const n=t.getElementsByClassName("button-wrapper")[0];n&&t.removeChild(n),this.ulMain=t.appendChild(document.createElement("ul")),this.ulMain.draggable=!1,h.appendItems(this),h.addEventMousedown(this),h.addEventMouseleave(this),h.addEventMouseup(this),h.addEventMousemove(this),this.divButtons=document.createElement("div"),this.divButtons.classList.add("button-wrapper"),t.appendChild(this.divButtons),h.addEventBtnClick(this),this.divButtons.appendChild(new l("btn","btn_home","").getElement(document)),this.divButtons.appendChild(new l("btn","btn_prev","").getElement(document)),this.divButtons.appendChild(new l("btn","btn_next","2").getElement(document))}}class m{constructor(t){this.urlRequest=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBMPWAjVIhgEIexmquDjkdXx4snJjWzUF0&type=video&part=snippet&maxResults=15&q=${t}`}async start(){const t=new c(this.urlRequest);let e=await t.sendRequest();const n=[];this.dataContainer={urlRequest:this.urlRequest,nextPageToken:e.nextPageToken,data:[]};const r=e.items;for(let t=0;t<r.length;t+=1){const e=new p(r[t]);this.dataContainer.data.push(e.data),n.push(this.dataContainer.data[t].videoId)}t.urlRequest=`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBMPWAjVIhgEIexmquDjkdXx4snJjWzUF0&id=${n.join(",")}&part=snippet,statistics`,e=await t.sendRequest();for(let t=0;t<e.items.length;t+=1)this.dataContainer.data[t].countViev=e.items[t].statistics.viewCount;new h(this.dataContainer).show()}}n(0);const f=document.getElementsByTagName("html")[0];f.setAttribute("lang","en");const g=f.getElementsByTagName("head")[0],v=new s({charset:"UTF-8",content:"width=device-width, initial-scale=1.0",name:"viewport"});g.appendChild(v.getElement(document));const b=new s({name:"mobile-web-app-capable",content:"yes"}),w=new s({name:"apple-mobile-web-app-capable",content:"yes"});g.appendChild(b.getElement(document)),g.appendChild(w.getElement(document)),g.getElementsByTagName("title")[0].innerText="YouTube Client";const y=f.getElementsByTagName("body")[0],x=document.createElement("div");x.setAttribute("class","search-wrapper");const E=new class{constructor(t){const e=t.idName||"",n=t.className||"",s=t.defMassage||"";this.Input=new r("search",e,n,s);let a=e;""===a&&(a=n);let o="";e&&(o=`${e}-label`);let l="";n&&(l=`${n}-label`),this.Label=new i({forElem:a,idName:o,className:l})}addEventKeydown(){const t=this.elemForListen;t.addEventListener("keydown",e=>(13===e.keyCode&&t.value&&new m(t.value).start(),""))}getElement(t){const e=this.Label.getElement(t);return this.elemForListen=this.Input.getElement(t),e.appendChild(this.elemForListen),e}}({className:"search-input",defMassage:"What do you want to find?"});x.appendChild(E.getElement(document)),E.addEventKeydown(),y.appendChild(x)}]);