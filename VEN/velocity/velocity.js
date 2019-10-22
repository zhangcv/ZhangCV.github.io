!function(t){if(!t.jQuery){var c=function(e,t){return new c.fn.init(e,t)};c.isWindow=function(e){return null!=e&&e==e.window},c.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?r[o.call(e)]||"object":typeof e},c.isArray=Array.isArray||function(e){return"array"===c.type(e)},c.isPlainObject=function(e){var t;if(!e||"object"!==c.type(e)||e.nodeType||c.isWindow(e))return!1;try{if(e.constructor&&!a.call(e,"constructor")&&!a.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(t in e);return void 0===t||a.call(e,t)},c.each=function(e,t,r){var a=0,o=e.length,i=s(e);if(r){if(i)for(;a<o&&!1!==t.apply(e[a],r);a++);else for(a in e)if(!1===t.apply(e[a],r))break}else if(i)for(;a<o&&!1!==t.call(e[a],a,e[a]);a++);else for(a in e)if(!1===t.call(e[a],a,e[a]))break;return e},c.data=function(e,t,r){if(void 0===r){var a=(o=e[c.expando])&&i[o];if(void 0===t)return a;if(a&&t in a)return a[t]}else if(void 0!==t){var o=e[c.expando]||(e[c.expando]=++c.uuid);return i[o]=i[o]||{},i[o][t]=r}},c.removeData=function(e,t){var r=e[c.expando],a=r&&i[r];a&&c.each(t,function(e,t){delete a[t]})},c.extend=function(){var e,t,r,a,o,i,n=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof n&&(u=n,n=arguments[s]||{},s++),"object"!=typeof n&&"function"!==c.type(n)&&(n={}),s===l&&(n=this,s--);s<l;s++)if(null!=(o=arguments[s]))for(a in o)e=n[a],n!==(r=o[a])&&(u&&r&&(c.isPlainObject(r)||(t=c.isArray(r)))?(i=t?(t=!1,e&&c.isArray(e)?e:[]):e&&c.isPlainObject(e)?e:{},n[a]=c.extend(u,i,r)):void 0!==r&&(n[a]=r));return n},c.queue=function(e,t,r){if(e){t=(t||"fx")+"queue";var a,o,i,n=c.data(e,t);return r?(!n||c.isArray(r)?n=c.data(e,t,(i=o||[],null!=(a=r)&&(s(Object(a))?function(e,t){for(var r=+t.length,a=0,o=e.length;a<r;)e[o++]=t[a++];if(r!=r)for(;void 0!==t[a];)e[o++]=t[a++];e.length=o}(i,"string"==typeof a?[a]:a):[].push.call(i,a)),i)):n.push(r),n):n||[]}},c.dequeue=function(e,o){c.each(e.nodeType?[e]:e,function(e,t){o=o||"fx";var r=c.queue(t,o),a=r.shift();"inprogress"===a&&(a=r.shift()),a&&("fx"===o&&r.unshift("inprogress"),a.call(t,function(){c.dequeue(t,o)}))})},c.fn=c.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var e=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:e.top+(t.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:e.left+(t.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),r=this.offset(),a=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:c(e).offset();return r.top-=parseFloat(t.style.marginTop)||0,r.left-=parseFloat(t.style.marginLeft)||0,e.style&&(a.top+=parseFloat(e.style.borderTopWidth)||0,a.left+=parseFloat(e.style.borderLeftWidth)||0),{top:r.top-a.top,left:r.left-a.left}}};var i={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var r={},a=r.hasOwnProperty,o=r.toString,e="Boolean Number String Function Array Date RegExp Object Error".split(" "),n=0;n<e.length;n++)r["[object "+e[n]+"]"]=e[n].toLowerCase();c.fn.init.prototype=c.fn,t.Velocity={Utilities:c}}function s(e){var t=e.length,r=c.type(e);return"function"!==r&&!c.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===r||0===t||"number"==typeof t&&0<t&&t-1 in e))}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,z,q,$){var a,p=function(){if(q.documentMode)return q.documentMode;for(var e=7;4<e;e--){var t=q.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}return $}(),t=(a=0,z.webkitRequestAnimationFrame||z.mozRequestAnimationFrame||function(e){var t,r=(new Date).getTime();return t=Math.max(0,16-(r-a)),a=r+t,setTimeout(function(){e(r+t)},t)});function g(e){return I.isWrapped(e)?e=[].slice.call(e):I.isNode(e)&&(e=[e]),e}var M,I={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==$&&(0===e.length||"object"==typeof e[0]&&0<e[0].nodeType)},isWrapped:function(e){return e&&(e.jquery||z.Zepto&&z.Zepto.zepto.isZ(e))},isSVG:function(e){return z.SVGElement&&e instanceof z.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},r=!1;if(e.fn&&e.fn.jquery?(M=e,r=!0):M=z.Velocity.Utilities,p<=8&&!r)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(!(p<=7)){var o="swing",B={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:z.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:q.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:M,Redirects:{},Easings:{},Promise:z.Promise,defaults:{queue:"",duration:400,easing:o,begin:$,complete:$,progress:$,display:$,visibility:$,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){M.data(e,"velocity",{isSVG:I.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};z.pageYOffset!==$?(B.State.scrollAnchor=z,B.State.scrollPropertyLeft="pageXOffset",B.State.scrollPropertyTop="pageYOffset"):(B.State.scrollAnchor=q.documentElement||q.body.parentNode||q.body,B.State.scrollPropertyLeft="scrollLeft",B.State.scrollPropertyTop="scrollTop");var i=function(){function v(e){return-e.tension*e.x-e.friction*e.v}function b(e,t,r){var a={x:e.x+r.dx*t,v:e.v+r.dv*t,tension:e.tension,friction:e.friction};return{dx:a.v,dv:v(a)}}return function e(t,r,a){var o,i,n,s,l,u,c,p,f,d,g,y={x:-1,v:0,tension:null,friction:null},m=[0],h=0;for(t=parseFloat(t)||500,r=parseFloat(r)||20,a=a||null,y.tension=t,y.friction=r,i=(o=null!==a)?(h=e(t,r))/a*.016:.016;l=i,void 0,u={dx:(s=n||y).v,dv:v(s)},c=b(s,.5*l,u),p=b(s,.5*l,c),f=b(s,l,p),d=1/6*(u.dx+2*(c.dx+p.dx)+f.dx),g=1/6*(u.dv+2*(c.dv+p.dv)+f.dv),s.x=s.x+d*l,s.v=s.v+g*l,n=s,m.push(1+n.x),h+=16,1e-4<Math.abs(n.x)&&1e-4<Math.abs(n.v););return o?function(e){return m[e*(m.length-1)|0]}:h}}();B.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},M.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){B.Easings[t[0]]=n.apply(null,t[1])});var W=B.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<W.Lists.colors.length;e++){var t="color"===W.Lists.colors[e]?"0 0 0 1":"255 255 255 1";W.Hooks.templates[W.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,o;if(p)for(r in W.Hooks.templates){o=(a=W.Hooks.templates[r])[0].split(" ");var i=a[1].match(W.RegEx.valueSplit);"Color"===o[0]&&(o.push(o.shift()),i.push(i.shift()),W.Hooks.templates[r]=[o.join(" "),i.join(" ")])}for(r in W.Hooks.templates)for(var e in o=(a=W.Hooks.templates[r])[0].split(" ")){var n=r+o[e],s=e;W.Hooks.registered[n]=[r,s]}},getRoot:function(e){var t=W.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return W.RegEx.valueUnwrap.test(t)&&(t=t.match(W.RegEx.valueUnwrap)[1]),W.Values.isCSSNullValue(t)&&(t=W.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=W.Hooks.registered[e];if(r){var a=r[0],o=r[1];return(t=W.Hooks.cleanRootPropertyValue(a,t)).toString().match(W.RegEx.valueSplit)[o]}return t},injectValue:function(e,t,r){var a=W.Hooks.registered[e];if(a){var o,i=a[0],n=a[1];return(o=(r=W.Hooks.cleanRootPropertyValue(i,r)).toString().match(W.RegEx.valueSplit))[n]=t,o.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return a=W.RegEx.wrappedValueAlreadyExtracted.test(r)?r:(a=r.toString().match(W.RegEx.valueUnwrap))?a[1].replace(/,(\s+)?/g," "):r;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return B.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var o=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=o?o[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(p<=8)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return(t.style.zoom=1)<=parseFloat(r)?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":case"inject":return r}}},register:function(){p<=9||B.State.isGingerbread||(W.Lists.transformsBase=W.Lists.transformsBase.concat(W.Lists.transforms3D));for(var e=0;e<W.Lists.transformsBase.length;e++)!function(){var o=W.Lists.transformsBase[e];W.Normalizations.registered[o]=function(e,t,r){switch(e){case"name":return"transform";case"extract":return G(t)===$||G(t).transformCache[o]===$?/^scale/i.test(o)?1:0:G(t).transformCache[o].replace(/[()]/g,"");case"inject":var a=!1;switch(o.substr(0,o.length-1)){case"translate":a=!/(%|px|em|rem|vw|vh|\d)$/i.test(r);break;case"scal":case"scale":B.State.isAndroid&&G(t).transformCache[o]===$&&r<1&&(r=1),a=!/(\d)$/i.test(r);break;case"skew":case"rotate":a=!/(deg|\d)$/i.test(r)}return a||(G(t).transformCache[o]="("+r+")"),G(t).transformCache[o]}}}();for(e=0;e<W.Lists.colors.length;e++)!function(){var n=W.Lists.colors[e];W.Normalizations.registered[n]=function(e,t,r){switch(e){case"name":return n;case"extract":var a;if(W.RegEx.wrappedValueAlreadyExtracted.test(r))a=r;else{var o,i={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(r)?o=i[r]!==$?i[r]:i.black:W.RegEx.isHex.test(r)?o="rgb("+W.Values.hexToRgb(r).join(" ")+")":/^rgba?\(/i.test(r)||(o=i.black),a=(o||r).toString().match(W.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return p<=8||3!==a.split(" ").length||(a+=" 1"),a;case"inject":return p<=8?4===r.split(" ").length&&(r=r.split(/\s+/).slice(0,3).join(" ")):3===r.split(" ").length&&(r+=" 1"),(p<=8?"rgb":"rgba")+"("+r.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(p||B.State.isAndroid&&!B.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(B.State.prefixMatches[e])return[B.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;r<a;r++){var o;if(o=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),I.isString(B.State.prefixElement.style[o]))return[B.State.prefixMatches[e]=o,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t;return e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,r,a){return t+t+r+r+a+a}),(t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e))?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,t,r,u){function c(e,t){var r=0;if(p<=8)r=M.css(e,t);else{var a,o=!1;function i(){o&&W.setPropertyValue(e,"display","none")}if(/^(width|height)$/.test(t)&&0===W.getPropertyValue(e,"display")&&(o=!0,W.setPropertyValue(e,"display",W.Values.getDisplayType(e))),!u){if("height"===t&&"border-box"!==W.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var n=e.offsetHeight-(parseFloat(W.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(W.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(W.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(W.getPropertyValue(e,"paddingBottom"))||0);return i(),n}if("width"===t&&"border-box"!==W.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var s=e.offsetWidth-(parseFloat(W.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(W.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(W.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(W.getPropertyValue(e,"paddingRight"))||0);return i(),s}}a=G(e)===$?z.getComputedStyle(e,null):G(e).computedStyle?G(e).computedStyle:G(e).computedStyle=z.getComputedStyle(e,null),"borderColor"===t&&(t="borderTopColor"),""!==(r=9===p&&"filter"===t?a.getPropertyValue(t):a[t])&&null!==r||(r=e.style[t]),i()}if("auto"===r&&/^(top|right|bottom|left)$/i.test(t)){var l=c(e,"position");("fixed"===l||"absolute"===l&&/top|left/i.test(t))&&(r=M(e).position()[t]+"px")}return r}var a;if(W.Hooks.registered[t]){var o=t,i=W.Hooks.getRoot(o);r===$&&(r=W.getPropertyValue(e,W.Names.prefixCheck(i)[0])),W.Normalizations.registered[i]&&(r=W.Normalizations.registered[i]("extract",e,r)),a=W.Hooks.extractValue(o,r)}else if(W.Normalizations.registered[t]){var n,s;"transform"!==(n=W.Normalizations.registered[t]("name",e))&&(s=c(e,W.Names.prefixCheck(n)[0]),W.Values.isCSSNullValue(s)&&W.Hooks.templates[t]&&(s=W.Hooks.templates[t][1])),a=W.Normalizations.registered[t]("extract",e,s)}if(!/^[\d-]/.test(a))if(G(e)&&G(e).isSVG&&W.Names.SVGAttribute(t))if(/^(height|width)$/i.test(t))try{a=e.getBBox()[t]}catch(e){a=0}else a=e.getAttribute(t);else a=c(e,W.Names.prefixCheck(t)[0]);return W.Values.isCSSNullValue(a)&&(a=0),2<=B.debug&&console.log("Get "+t+": "+a),a},setPropertyValue:function(e,t,r,a,o){var i=t;if("scroll"===t)o.container?o.container["scroll"+o.direction]=r:"Left"===o.direction?z.scrollTo(r,o.alternateValue):z.scrollTo(o.alternateValue,r);else if(W.Normalizations.registered[t]&&"transform"===W.Normalizations.registered[t]("name",e))W.Normalizations.registered[t]("inject",e,r),i="transform",r=G(e).transformCache[t];else{if(W.Hooks.registered[t]){var n=t,s=W.Hooks.getRoot(t);a=a||W.getPropertyValue(e,s),r=W.Hooks.injectValue(n,r,a),t=s}if(W.Normalizations.registered[t]&&(r=W.Normalizations.registered[t]("inject",e,r),t=W.Normalizations.registered[t]("name",e)),i=W.Names.prefixCheck(t)[0],p<=8)try{e.style[i]=r}catch(e){B.debug&&console.log("Browser does not support ["+r+"] for ["+i+"]")}else G(e)&&G(e).isSVG&&W.Names.SVGAttribute(t)?e.setAttribute(t,r):e.style[i]=r;2<=B.debug&&console.log("Set "+t+" ("+i+"): "+r)}return[i,r]},flushTransformCache:function(t){var r="";if((p||B.State.isAndroid&&!B.State.isChrome)&&G(t).isSVG){function e(e){return parseFloat(W.getPropertyValue(t,e))}var a={translate:[e("translateX"),e("translateY")],skewX:[e("skewX")],skewY:[e("skewY")],scale:1!==e("scale")?[e("scale"),e("scale")]:[e("scaleX"),e("scaleY")],rotate:[e("rotateZ"),0,0]};M.each(G(t).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var o,i;M.each(G(t).transformCache,function(e){if(o=G(t).transformCache[e],"transformPerspective"===e)return i=o,!0;9===p&&"rotateZ"===e&&(e="rotate"),r+=e+o+" "}),i&&(r="perspective"+i+" "+r)}W.setPropertyValue(t,"transform",r)}};W.Hooks.register(),W.Normalizations.register(),B.hook=function(e,a,o){var i=$;return e=g(e),M.each(e,function(e,t){if(G(t)===$&&B.init(t),o===$)i===$&&(i=B.CSS.getPropertyValue(t,a));else{var r=B.CSS.setPropertyValue(t,a,o);"transform"===r[0]&&B.CSS.flushTransformCache(t),i=r}}),i};var y=function(){function e(){return t?L.promise||null:r}var t,r,a,A,F,E,o=arguments[0]&&(arguments[0].p||M.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||I.isString(arguments[0].properties));if(I.isWrapped(this)?(t=!1,a=0,r=A=this):(t=!0,a=1,A=o?arguments[0].elements||arguments[0].e:arguments[0]),A=g(A)){E=o?(F=arguments[0].properties||arguments[0].p,arguments[0].options||arguments[0].o):(F=arguments[a],arguments[a+1]);var j=A.length,H=0;if(!/^(stop|finish)$/i.test(F)&&!M.isPlainObject(E)){E={};for(var i=a+1;i<arguments.length;i++)I.isArray(arguments[i])||!/^(fast|normal|slow)$/i.test(arguments[i])&&!/^\d/.test(arguments[i])?I.isString(arguments[i])||I.isArray(arguments[i])?E.easing=arguments[i]:I.isFunction(arguments[i])&&(E.complete=arguments[i]):E.duration=arguments[i]}var N,L={promise:null,resolver:null,rejecter:null};switch(t&&B.Promise&&(L.promise=new B.Promise(function(e,t){L.resolver=e,L.rejecter=t})),F){case"scroll":N="scroll";break;case"reverse":N="reverse";break;case"finish":case"stop":M.each(A,function(e,t){G(t)&&G(t).delayTimer&&(clearTimeout(G(t).delayTimer.setTimeout),G(t).delayTimer.next&&G(t).delayTimer.next(),delete G(t).delayTimer)});var n=[];return M.each(B.State.calls,function(o,i){i&&M.each(i[1],function(e,r){var a=E===$?"":E;if(!0!==a&&i[2].queue!==a&&(E!==$||!1!==i[2].queue))return!0;M.each(A,function(e,t){t===r&&((!0===E||I.isString(E))&&(M.each(M.queue(t,I.isString(E)?E:""),function(e,t){I.isFunction(t)&&t(null,!0)}),M.queue(t,I.isString(E)?E:"",[])),"stop"===F?(G(t)&&G(t).tweensContainer&&!1!==a&&M.each(G(t).tweensContainer,function(e,t){t.endValue=t.currentValue}),n.push(o)):"finish"===F&&(i[2].duration=1))})})}),"stop"===F&&(M.each(n,function(e,t){C(t,!0)}),L.promise&&L.resolver(A)),e();default:if(!M.isPlainObject(F)||I.isEmptyObject(F)){if(I.isString(F)&&B.Redirects[F]){var s=(c=M.extend({},E)).duration,l=c.delay||0;return!0===c.backwards&&(A=M.extend(!0,[],A).reverse()),M.each(A,function(e,t){parseFloat(c.stagger)?c.delay=l+parseFloat(c.stagger)*e:I.isFunction(c.stagger)&&(c.delay=l+c.stagger.call(t,e,j)),c.drag&&(c.duration=parseFloat(s)||(/^(callout|transition)/.test(F)?1e3:400),c.duration=Math.max(c.duration*(c.backwards?1-e/j:(e+1)/j),.75*c.duration,200)),B.Redirects[F].call(t,t,c||{},e,j,A,L.promise?L:$)}),e()}var u="Velocity: First argument ("+F+") was not a property map, a known action, or a registered redirect. Aborting.";return L.promise?L.rejecter(new Error(u)):console.log(u),e()}N="start"}var c,p,R={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},O=[];if(M.each(A,function(e,t){I.isNode(t)&&function(){var V,C=this,T=M.extend({},B.defaults,E),k={};switch(G(C)===$&&B.init(C),parseFloat(T.delay)&&!1!==T.queue&&M.queue(C,T.queue,function(e){B.velocityQueueEntryFlag=!0,G(C).delayTimer={setTimeout:setTimeout(e,parseFloat(T.delay)),next:e}}),T.duration.toString().toLowerCase()){case"fast":T.duration=200;break;case"normal":T.duration=400;break;case"slow":T.duration=600;break;default:T.duration=parseFloat(T.duration)||1}function r(e){if(T.begin&&0===H)try{T.begin.call(A,A)}catch(e){setTimeout(function(){throw e},1)}if("scroll"===N){var t,r,a,o=/^x$/i.test(T.axis)?"Left":"Top",i=parseFloat(T.offset)||0;T.container?I.isWrapped(T.container)||I.isNode(T.container)?(T.container=T.container[0]||T.container,a=(t=T.container["scroll"+o])+M(C).position()[o.toLowerCase()]+i):T.container=null:(t=B.State.scrollAnchor[B.State["scrollProperty"+o]],r=B.State.scrollAnchor[B.State["scrollProperty"+("Left"===o?"Top":"Left")]],a=M(C).offset()[o.toLowerCase()]+i),k={scroll:{rootPropertyValue:!1,startValue:t,currentValue:t,endValue:a,unitType:"",easing:T.easing,scrollData:{container:T.container,direction:o,alternateValue:r}},element:C},B.debug&&console.log("tweensContainer (scroll): ",k.scroll,C)}else if("reverse"===N){if(!G(C).tweensContainer)return void M.dequeue(C,T.queue);"none"===G(C).opts.display&&(G(C).opts.display="auto"),"hidden"===G(C).opts.visibility&&(G(C).opts.visibility="visible"),G(C).opts.loop=!1,G(C).opts.begin=null,G(C).opts.complete=null,E.easing||delete T.easing,E.duration||delete T.duration,T=M.extend({},G(C).opts,T);var n=M.extend(!0,{},G(C).tweensContainer);for(var s in n)if("element"!==s){var l=n[s].startValue;n[s].startValue=n[s].currentValue=n[s].endValue,n[s].endValue=l,I.isEmptyObject(E)||(n[s].easing=T.easing),B.debug&&console.log("reverse tweensContainer ("+s+"): "+JSON.stringify(n[s]),C)}k=n}else if("start"===N){function p(e,t){var r=$,a=$,o=$;return I.isArray(e)?(r=e[0],!I.isArray(e[1])&&/^[\d-]/.test(e[1])||I.isFunction(e[1])||W.RegEx.isHex.test(e[1])?o=e[1]:(I.isString(e[1])&&!W.RegEx.isHex.test(e[1])||I.isArray(e[1]))&&(a=t?e[1]:D(e[1],T.duration),e[2]!==$&&(o=e[2]))):r=e,t||(a=a||T.easing),I.isFunction(r)&&(r=r.call(C,H,j)),I.isFunction(o)&&(o=o.call(C,H,j)),[r||0,a,o]}for(var u in G(C).tweensContainer&&!0===G(C).isAnimating&&(n=G(C).tweensContainer),M.each(F,function(e,t){if(RegExp("^"+W.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),a=r[0],o=r[1],i=r[2];if(W.RegEx.isHex.test(a)){for(var n=["Red","Green","Blue"],s=W.Values.hexToRgb(a),l=i?W.Values.hexToRgb(i):$,u=0;u<n.length;u++){var c=[s[u]];o&&c.push(o),l!==$&&c.push(l[u]),F[e+n[u]]=c}delete F[e]}}}),F){var c=p(F[u]),f=c[0],d=c[1],g=c[2];u=W.Names.camelCase(u);var y=W.Hooks.getRoot(u),m=!1;if(G(C).isSVG||"tween"===y||!1!==W.Names.prefixCheck(y)[1]||W.Normalizations.registered[y]!==$){(T.display!==$&&null!==T.display&&"none"!==T.display||T.visibility!==$&&"hidden"!==T.visibility)&&/opacity|filter/.test(u)&&!g&&0!==f&&(g=0),T._cacheValues&&n&&n[u]?(g===$&&(g=n[u].endValue+n[u].unitType),m=G(C).rootPropertyValueCache[y]):W.Hooks.registered[u]?g===$?(m=W.getPropertyValue(C,y),g=W.getPropertyValue(C,u,m)):m=W.Hooks.templates[y][1]:g===$&&(g=W.getPropertyValue(C,u));var h,v,b,x=!1;if(g=(h=P(u,g))[0],b=h[1],f=(h=P(u,f))[0].replace(/^([+-\/*])=/,function(e,t){return x=t,""}),v=h[1],g=parseFloat(g)||0,f=parseFloat(f)||0,"%"===v&&(/^(fontSize|lineHeight)$/.test(u)?(f/=100,v="em"):/^scale/.test(u)?(f/=100,v=""):/(Red|Green|Blue)$/i.test(u)&&(f=f/100*255,v="")),/[\/*]/.test(x))v=b;else if(b!==v&&0!==g)if(0===f)v=b;else{V=V||w();var S=/margin|padding|left|right|width|text|word|letter/i.test(u)||/X$/.test(u)||"x"===u?"x":"y";switch(b){case"%":g*="x"==S?V.percentToPxWidth:V.percentToPxHeight;break;case"px":break;default:g*=V[b+"ToPx"]}switch(v){case"%":g*=1/("x"==S?V.percentToPxWidth:V.percentToPxHeight);break;case"px":break;default:g*=1/V[v+"ToPx"]}}switch(x){case"+":f=g+f;break;case"-":f=g-f;break;case"*":f*=g;break;case"/":f=g/f}k[u]={rootPropertyValue:m,startValue:g,currentValue:g,endValue:f,unitType:v,easing:d},B.debug&&console.log("tweensContainer ("+u+"): "+JSON.stringify(k[u]),C)}else B.debug&&console.log("Skipping ["+y+"] due to a lack of browser support.");function P(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=W.Values.getUnitType(e)),[a,r]}function w(){var e={myParent:C.parentNode||q.body,position:W.getPropertyValue(C,"position"),fontSize:W.getPropertyValue(C,"fontSize")},t=e.position===R.lastPosition&&e.myParent===R.lastParent,r=e.fontSize===R.lastFontSize;R.lastParent=e.myParent,R.lastPosition=e.position,R.lastFontSize=e.fontSize;var a={};if(r&&t)a.emToPx=R.lastEmToPx,a.percentToPxWidth=R.lastPercentToPxWidth,a.percentToPxHeight=R.lastPercentToPxHeight;else{var o=G(C).isSVG?q.createElementNS("http://www.w3.org/2000/svg","rect"):q.createElement("div");B.init(o),e.myParent.appendChild(o),M.each(["overflow","overflowX","overflowY"],function(e,t){B.CSS.setPropertyValue(o,t,"hidden")}),B.CSS.setPropertyValue(o,"position",e.position),B.CSS.setPropertyValue(o,"fontSize",e.fontSize),B.CSS.setPropertyValue(o,"boxSizing","content-box"),M.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){B.CSS.setPropertyValue(o,t,"100%")}),B.CSS.setPropertyValue(o,"paddingLeft","100em"),a.percentToPxWidth=R.lastPercentToPxWidth=(parseFloat(W.getPropertyValue(o,"width",null,!0))||1)/100,a.percentToPxHeight=R.lastPercentToPxHeight=(parseFloat(W.getPropertyValue(o,"height",null,!0))||1)/100,a.emToPx=R.lastEmToPx=(parseFloat(W.getPropertyValue(o,"paddingLeft"))||1)/100,e.myParent.removeChild(o)}return null===R.remToPx&&(R.remToPx=parseFloat(W.getPropertyValue(q.body,"fontSize"))||16),null===R.vwToPx&&(R.vwToPx=parseFloat(z.innerWidth)/100,R.vhToPx=parseFloat(z.innerHeight)/100),a.remToPx=R.remToPx,a.vwToPx=R.vwToPx,a.vhToPx=R.vhToPx,1<=B.debug&&console.log("Unit ratios: "+JSON.stringify(a),C),a}}k.element=C}k.element&&(W.Values.addClass(C,"velocity-animating"),O.push(k),""===T.queue&&(G(C).tweensContainer=k,G(C).opts=T),G(C).isAnimating=!0,H===j-1?(B.State.calls.push([O,A,T,null,L.resolver]),!1===B.State.isTicking&&(B.State.isTicking=!0,X())):H++)}!1!==B.mock&&(!0===B.mock?T.duration=T.delay=1:(T.duration*=parseFloat(B.mock)||1,T.delay*=parseFloat(B.mock)||1)),T.easing=D(T.easing,T.duration),T.begin&&!I.isFunction(T.begin)&&(T.begin=null),T.progress&&!I.isFunction(T.progress)&&(T.progress=null),T.complete&&!I.isFunction(T.complete)&&(T.complete=null),T.display!==$&&null!==T.display&&(T.display=T.display.toString().toLowerCase(),"auto"===T.display&&(T.display=B.CSS.Values.getDisplayType(C))),T.visibility!==$&&null!==T.visibility&&(T.visibility=T.visibility.toString().toLowerCase()),T.mobileHA=T.mobileHA&&B.State.isMobile&&!B.State.isGingerbread,!1===T.queue?T.delay?setTimeout(r,T.delay):r():M.queue(C,T.queue,function(e,t){if(!0===t)return L.promise&&L.resolver(A),!0;B.velocityQueueEntryFlag=!0,r()}),""!==T.queue&&"fx"!==T.queue||"inprogress"===M.queue(C)[0]||M.dequeue(C)}.call(t)}),(c=M.extend({},B.defaults,E)).loop=parseInt(c.loop),p=2*c.loop-1,c.loop)for(var f=0;f<p;f++){var d={delay:c.delay,progress:c.progress};f===p-1&&(d.display=c.display,d.visibility=c.visibility,d.complete=c.complete),y(A,"reverse",d)}return e()}};(B=M.extend(y,B)).animate=y;var V=z.requestAnimationFrame||t;return B.State.isMobile||q.hidden===$||q.addEventListener("visibilitychange",function(){q.hidden?(V=function(e){return setTimeout(function(){e(!0)},16)},X()):V=z.requestAnimationFrame||t}),e.Velocity=B,e!==z&&(e.fn.velocity=y,e.fn.velocity.defaults=B.defaults),M.each(["Down","Up"],function(e,p){B.Redirects["slide"+p]=function(r,e,t,a,o,i){var n=M.extend({},e),s=n.begin,l=n.complete,u={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},c={};n.display===$&&(n.display="Down"===p?"inline"===B.CSS.Values.getDisplayType(r)?"inline-block":"block":"none"),n.begin=function(){for(var e in s&&s.call(o,o),u){c[e]=r.style[e];var t=B.CSS.getPropertyValue(r,e);u[e]="Down"===p?[t,0]:[0,t]}c.overflow=r.style.overflow,r.style.overflow="hidden"},n.complete=function(){for(var e in c)r.style[e]=c[e];l&&l.call(o,o),i&&i.resolver(o)},B(r,u,n)}}),M.each(["In","Out"],function(e,u){B.Redirects["fade"+u]=function(e,t,r,a,o,i){var n=M.extend({},t),s={opacity:"In"===u?1:0},l=n.complete;n.complete=r!==a-1?n.begin=null:function(){l&&l.call(o,o),i&&i.resolver(o)},n.display===$&&(n.display="In"===u?"auto":"none"),B(this,s,n)}}),B}function G(e){var t=M.data(e,"velocity");return null===t?$:t}function n(n,t,s,r){var l=4,u=1e-7,c=10,p=11,f=1/(p-1),e="Float32Array"in z;if(4!==arguments.length)return!1;for(var a=0;a<4;++a)if("number"!=typeof arguments[a]||isNaN(arguments[a])||!isFinite(arguments[a]))return!1;n=Math.min(n,1),s=Math.min(s,1),n=Math.max(n,0),s=Math.max(s,0);var d=e?new Float32Array(p):new Array(p);function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function g(e){return 3*e}function y(e,t,r){return((o(t,r)*e+i(t,r))*e+g(t))*e}function m(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+g(t)}function h(e){for(var t=0,r=1,a=p-1;r!=a&&d[r]<=e;++r)t+=f;var o=t+(e-d[--r])/(d[r+1]-d[r])*f,i=m(o,n,s);return.001<=i?function(e,t){for(var r=0;r<l;++r){var a=m(t,n,s);if(0===a)return t;t-=(y(t,n,s)-e)/a}return t}(e,o):0==i?o:function(e,t,r){for(var a,o,i=0;0<(a=y(o=t+(r-t)/2,n,s)-e)?r=o:t=o,Math.abs(a)>u&&++i<c;);return o}(e,t,t+f)}var v=!1;function b(){v=!0,n==t&&s==r||function(){for(var e=0;e<p;++e)d[e]=y(e*f,n,s)}()}var x=function(e){return v||b(),n===t&&s===r?e:0===e?0:1===e?1:y(h(e),t,r)};x.getControlPoints=function(){return[{x:n,y:t},{x:s,y:r}]};var S="generateBezier("+[n,t,s,r]+")";return x.toString=function(){return S},x}function D(e,t){var r=e;return I.isString(e)?B.Easings[e]||(r=!1):r=I.isArray(e)&&1===e.length?function(t){return function(e){return Math.round(e*t)*(1/t)}}.apply(null,e):I.isArray(e)&&2===e.length?i.apply(null,e.concat([t])):!(!I.isArray(e)||4!==e.length)&&n.apply(null,e),!1===r&&(r=B.Easings[B.defaults.easing]?B.defaults.easing:o),r}function X(e){if(e){var t=(new Date).getTime(),r=B.State.calls.length;1e4<r&&(B.State.calls=function(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var o=e[t];o&&a.push(o)}return a}(B.State.calls));for(var a=0;a<r;a++)if(B.State.calls[a]){var o=B.State.calls[a],i=o[0],n=o[2],s=o[3],l=!!s,u=null;s||(s=B.State.calls[a][3]=t-16);for(var c=Math.min((t-s)/n.duration,1),p=0,f=i.length;p<f;p++){var d=i[p],g=d.element;if(G(g)){var y=!1;if(n.display!==$&&null!==n.display&&"none"!==n.display){if("flex"===n.display){M.each(["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"],function(e,t){W.setPropertyValue(g,"display",t)})}W.setPropertyValue(g,"display",n.display)}for(var m in n.visibility!==$&&"hidden"!==n.visibility&&W.setPropertyValue(g,"visibility",n.visibility),d)if("element"!==m){var h,v=d[m],b=I.isString(v.easing)?B.Easings[v.easing]:v.easing;if(1===c)h=v.endValue;else{var x=v.endValue-v.startValue;if(h=v.startValue+x*b(c,n,x),!l&&h===v.currentValue)continue}if(v.currentValue=h,"tween"===m)u=h;else{if(W.Hooks.registered[m]){var S=W.Hooks.getRoot(m),P=G(g).rootPropertyValueCache[S];P&&(v.rootPropertyValue=P)}var w=W.setPropertyValue(g,m,v.currentValue+(0===parseFloat(h)?"":v.unitType),v.rootPropertyValue,v.scrollData);W.Hooks.registered[m]&&(W.Normalizations.registered[S]?G(g).rootPropertyValueCache[S]=W.Normalizations.registered[S]("extract",null,w[1]):G(g).rootPropertyValueCache[S]=w[1]),"transform"===w[0]&&(y=!0)}}n.mobileHA&&G(g).transformCache.translate3d===$&&(G(g).transformCache.translate3d="(0px, 0px, 0px)",y=!0),y&&W.flushTransformCache(g)}}n.display!==$&&"none"!==n.display&&(B.State.calls[a][2].display=!1),n.visibility!==$&&"hidden"!==n.visibility&&(B.State.calls[a][2].visibility=!1),n.progress&&n.progress.call(o[1],o[1],c,Math.max(0,s+n.duration-t),s,u),1===c&&C(a)}}B.State.isTicking&&V(X)}function C(e,t){if(!B.State.calls[e])return!1;for(var r=B.State.calls[e][0],a=B.State.calls[e][1],o=B.State.calls[e][2],i=B.State.calls[e][4],n=!1,s=0,l=r.length;s<l;s++){var u=r[s].element;if(t||o.loop||("none"===o.display&&W.setPropertyValue(u,"display",o.display),"hidden"===o.visibility&&W.setPropertyValue(u,"visibility",o.visibility)),!0!==o.loop&&(M.queue(u)[1]===$||!/\.velocityQueueEntryFlag/i.test(M.queue(u)[1]))&&G(u)){G(u).isAnimating=!1;var c=!(G(u).rootPropertyValueCache={});M.each(W.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,a=G(u).transformCache[t];G(u).transformCache[t]!==$&&new RegExp("^\\("+r+"[^.]").test(a)&&(c=!0,delete G(u).transformCache[t])}),o.mobileHA&&(c=!0,delete G(u).transformCache.translate3d),c&&W.flushTransformCache(u),W.Values.removeClass(u,"velocity-animating")}if(!t&&o.complete&&!o.loop&&s===l-1)try{o.complete.call(a,a)}catch(e){setTimeout(function(){throw e},1)}i&&!0!==o.loop&&i(a),G(u)&&!0===o.loop&&!t&&(M.each(G(u).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),B(u,"reverse",{loop:!0,delay:o.delay})),!1!==o.queue&&M.dequeue(u,o.queue)}B.State.calls[e]=!1;for(var p=0,f=B.State.calls.length;p<f;p++)if(!1!==B.State.calls[p]){n=!0;break}!1===n&&(B.State.isTicking=!1,delete B.State.calls,B.State.calls=[])}jQuery.fn.velocity=jQuery.fn.animate}(window.jQuery||window.Zepto||window,window,document)});