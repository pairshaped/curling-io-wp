Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),n=this,o=function(){},i=function(){return n.apply(this instanceof o&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return o.prototype=this.prototype,i.prototype=new o,i}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.returnExports=e()}(this,function(){function t(t){try{return t.sentinel=0,0===Object.getOwnPropertyDescriptor(t,"sentinel").value}catch(e){}}function e(t){try{return Object.defineProperty(t,"sentinel",{}),"sentinel"in t}catch(e){}}var n,o,i,r,s=Function.prototype.call,a=Object.prototype,l=s.bind(a.hasOwnProperty),u=l(a,"__defineGetter__");if(u&&(n=s.bind(a.__defineGetter__),o=s.bind(a.__defineSetter__),i=s.bind(a.__lookupGetter__),r=s.bind(a.__lookupSetter__)),Object.getPrototypeOf||(Object.getPrototypeOf=function(t){var e=t.__proto__;return e||null===e?e:t.constructor?t.constructor.prototype:a}),Object.defineProperty){var c=t({}),p="undefined"==typeof document||t(document.createElement("div"));if(!p||!c)var d=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||d){var h="Object.getOwnPropertyDescriptor called on a non-object: ";Object.getOwnPropertyDescriptor=function(t,e){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError(h+t);if(d)try{return d.call(Object,t,e)}catch(n){}if(l(t,e)){var o={enumerable:!0,configurable:!0};if(u){var s=t.__proto__,c=t!==a;c&&(t.__proto__=a);var p=i(t,e),f=r(t,e);if(c&&(t.__proto__=s),p||f)return p&&(o.get=p),f&&(o.set=f),o}return o.value=t[e],o.writable=!0,o}}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(t){return Object.keys(t)}),!Object.create){var f,m=!({__proto__:null}instanceof Object);f=m||"undefined"==typeof document?function(){return{__proto__:null}}:function(){function t(){}var e=document.createElement("iframe"),n=document.body||document.documentElement;e.style.display="none",n.appendChild(e),e.src="javascript:";var o=e.contentWindow.Object.prototype;return n.removeChild(e),e=null,delete o.constructor,delete o.hasOwnProperty,delete o.propertyIsEnumerable,delete o.isPrototypeOf,delete o.toLocaleString,delete o.toString,delete o.valueOf,o.__proto__=null,t.prototype=o,f=function(){return new t},new t},Object.create=function(t,e){function n(){}var o;if(null===t)o=f();else{if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object prototype may only be an Object or null");n.prototype=t,o=new n,o.__proto__=t}return void 0!==e&&Object.defineProperties(o,e),o}}if(Object.defineProperty){var g=e({}),v="undefined"==typeof document||e(document.createElement("div"));if(!g||!v)var y=Object.defineProperty,b=Object.defineProperties}if(!Object.defineProperty||y){var C="Property description must be an object: ",P="Object.defineProperty called on non-object: ",x="getters & setters can not be defined on this javascript engine";Object.defineProperty=function(t,e,s){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError(P+t);if("object"!=typeof s&&"function"!=typeof s||null===s)throw new TypeError(C+s);if(y)try{return y.call(Object,t,e,s)}catch(c){}if(l(s,"value"))if(u&&(i(t,e)||r(t,e))){var p=t.__proto__;t.__proto__=a,delete t[e],t[e]=s.value,t.__proto__=p}else t[e]=s.value;else{if(!u)throw new TypeError(x);l(s,"get")&&n(t,e,s.get),l(s,"set")&&o(t,e,s.set)}return t}}(!Object.defineProperties||b)&&(Object.defineProperties=function(t,e){if(b)try{return b.call(Object,t,e)}catch(n){}for(var o in e)l(e,o)&&"__proto__"!==o&&Object.defineProperty(t,o,e[o]);return t}),Object.seal||(Object.seal=function(t){if(Object(t)!==t)throw new TypeError("Object.seal can only be called on Objects.");return t}),Object.freeze||(Object.freeze=function(t){if(Object(t)!==t)throw new TypeError("Object.freeze can only be called on Objects.");return t});try{Object.freeze(function(){})}catch(E){Object.freeze=function(t){return function(e){return"function"==typeof e?e:t(e)}}(Object.freeze)}Object.preventExtensions||(Object.preventExtensions=function(t){if(Object(t)!==t)throw new TypeError("Object.preventExtensions can only be called on Objects.");return t}),Object.isSealed||(Object.isSealed=function(t){if(Object(t)!==t)throw new TypeError("Object.isSealed can only be called on Objects.");return!1}),Object.isFrozen||(Object.isFrozen=function(t){if(Object(t)!==t)throw new TypeError("Object.isFrozen can only be called on Objects.");return!1}),Object.isExtensible||(Object.isExtensible=function(t){if(Object(t)!==t)throw new TypeError("Object.isExtensible can only be called on Objects.");for(var e="";l(t,e);)e+="?";t[e]=!0;var n=l(t,e);return delete t[e],n})}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.returnExports=e()}(this,function(){function t(t){var e=+t;return e!==e?e=0:0!==e&&e!==1/0&&e!==-(1/0)&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e}function e(t){var e=typeof t;return null===t||"undefined"===e||"boolean"===e||"number"===e||"string"===e}function n(t){var n,o,i;if(e(t))return t;if(o=t.valueOf,m(o)&&(n=o.call(t),e(n)))return n;if(i=t.toString,m(i)&&(n=i.call(t),e(n)))return n;throw new TypeError}var o,i=Array.prototype,r=Object.prototype,s=Function.prototype,a=String.prototype,l=Number.prototype,u=i.slice,c=i.splice,p=i.push,d=i.unshift,h=s.call,f=r.toString,m=function(t){return"[object Function]"===f.call(t)},g=function(t){return"[object RegExp]"===f.call(t)},v=function(t){return"[object Array]"===f.call(t)},y=function(t){return"[object String]"===f.call(t)},b=function(t){var e=f.call(t),n="[object Arguments]"===e;return n||(n=!v(t)&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&m(t.callee)),n},C=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(t){return!1}}();o=C?function(t,e,n,o){!o&&e in t||Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:!0,value:n})}:function(t,e,n,o){!o&&e in t||(t[e]=n)};var P=function(t,e,n){for(var i in e)r.hasOwnProperty.call(e,i)&&o(t,i,e[i],n)},x={ToObject:function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return Object(t)},ToUint32:function(t){return t>>>0}},E=function(){};P(s,{bind:function(t){var e=this;if(!m(e))throw new TypeError("Function.prototype.bind called on incompatible "+e);for(var n,o=u.call(arguments,1),i=function(){if(this instanceof n){var i=e.apply(this,o.concat(u.call(arguments)));return Object(i)===i?i:this}return e.apply(t,o.concat(u.call(arguments)))},r=Math.max(0,e.length-o.length),s=[],a=0;r>a;a++)s.push("$"+a);return n=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this, arguments); }")(i),e.prototype&&(E.prototype=e.prototype,n.prototype=new E,E.prototype=null),n}});var _=h.bind(r.hasOwnProperty),w=function(){var t=[1,2],e=t.splice();return 2===t.length&&v(e)&&0===e.length}();P(i,{splice:function(){return 0===arguments.length?[]:c.apply(this,arguments)}},w);var D=function(){var t={};return i.splice.call(t,0,0,1),1===t.length}();P(i,{splice:function(e,n){if(0===arguments.length)return[];var o=arguments;return this.length=Math.max(t(this.length),0),arguments.length>0&&"number"!=typeof n&&(o=u.call(arguments),o.length<2?o.push(this.length-e):o[1]=t(n)),c.apply(this,o)}},!D);var j=1!==[].unshift(0);P(i,{unshift:function(){return d.apply(this,arguments),this.length}},j),P(Array,{isArray:v});var S=Object("a"),M="a"!==S[0]||!(0 in S),O=function(t){var e=!0,n=!0;return t&&(t.call("foo",function(t,n,o){"object"!=typeof o&&(e=!1)}),t.call([1],function(){"use strict";n="string"==typeof this},"x")),!!t&&e&&n};P(i,{forEach:function(t){var e=x.ToObject(this),n=M&&y(this)?this.split(""):e,o=arguments[1],i=-1,r=n.length>>>0;if(!m(t))throw new TypeError;for(;++i<r;)i in n&&t.call(o,n[i],i,e)}},!O(i.forEach)),P(i,{map:function(t){var e=x.ToObject(this),n=M&&y(this)?this.split(""):e,o=n.length>>>0,i=Array(o),r=arguments[1];if(!m(t))throw new TypeError(t+" is not a function");for(var s=0;o>s;s++)s in n&&(i[s]=t.call(r,n[s],s,e));return i}},!O(i.map)),P(i,{filter:function(t){var e,n=x.ToObject(this),o=M&&y(this)?this.split(""):n,i=o.length>>>0,r=[],s=arguments[1];if(!m(t))throw new TypeError(t+" is not a function");for(var a=0;i>a;a++)a in o&&(e=o[a],t.call(s,e,a,n)&&r.push(e));return r}},!O(i.filter)),P(i,{every:function(t){var e=x.ToObject(this),n=M&&y(this)?this.split(""):e,o=n.length>>>0,i=arguments[1];if(!m(t))throw new TypeError(t+" is not a function");for(var r=0;o>r;r++)if(r in n&&!t.call(i,n[r],r,e))return!1;return!0}},!O(i.every)),P(i,{some:function(t){var e=x.ToObject(this),n=M&&y(this)?this.split(""):e,o=n.length>>>0,i=arguments[1];if(!m(t))throw new TypeError(t+" is not a function");for(var r=0;o>r;r++)if(r in n&&t.call(i,n[r],r,e))return!0;return!1}},!O(i.some));var T=!1;i.reduce&&(T="object"==typeof i.reduce.call("es5",function(t,e,n,o){return o})),P(i,{reduce:function(t){var e=x.ToObject(this),n=M&&y(this)?this.split(""):e,o=n.length>>>0;if(!m(t))throw new TypeError(t+" is not a function");if(!o&&1===arguments.length)throw new TypeError("reduce of empty array with no initial value");var i,r=0;if(arguments.length>=2)i=arguments[1];else for(;;){if(r in n){i=n[r++];break}if(++r>=o)throw new TypeError("reduce of empty array with no initial value")}for(;o>r;r++)r in n&&(i=t.call(void 0,i,n[r],r,e));return i}},!T);var R=!1;i.reduceRight&&(R="object"==typeof i.reduceRight.call("es5",function(t,e,n,o){return o})),P(i,{reduceRight:function(t){var e=x.ToObject(this),n=M&&y(this)?this.split(""):e,o=n.length>>>0;if(!m(t))throw new TypeError(t+" is not a function");if(!o&&1===arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var i,r=o-1;if(arguments.length>=2)i=arguments[1];else for(;;){if(r in n){i=n[r--];break}if(--r<0)throw new TypeError("reduceRight of empty array with no initial value")}if(0>r)return i;do r in n&&(i=t.call(void 0,i,n[r],r,e));while(r--);return i}},!R);var I=Array.prototype.indexOf&&-1!==[0,1].indexOf(1,2);P(i,{indexOf:function(e){var n=M&&y(this)?this.split(""):x.ToObject(this),o=n.length>>>0;if(!o)return-1;var i=0;for(arguments.length>1&&(i=t(arguments[1])),i=i>=0?i:Math.max(0,o+i);o>i;i++)if(i in n&&n[i]===e)return i;return-1}},I);var N=Array.prototype.lastIndexOf&&-1!==[0,1].lastIndexOf(0,-3);P(i,{lastIndexOf:function(e){var n=M&&y(this)?this.split(""):x.ToObject(this),o=n.length>>>0;if(!o)return-1;var i=o-1;for(arguments.length>1&&(i=Math.min(i,t(arguments[1]))),i=i>=0?i:o-Math.abs(i);i>=0;i--)if(i in n&&e===n[i])return i;return-1}},N);var A=!{toString:null}.propertyIsEnumerable("toString"),k=function(){}.propertyIsEnumerable("prototype"),L=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],U=L.length;P(Object,{keys:function(t){var e=m(t),n=b(t),o=null!==t&&"object"==typeof t,i=o&&y(t);if(!o&&!e&&!n)throw new TypeError("Object.keys called on a non-object");var r=[],s=k&&e;if(i||n)for(var a=0;a<t.length;++a)r.push(String(a));else for(var l in t)s&&"prototype"===l||!_(t,l)||r.push(String(l));if(A)for(var u=t.constructor,c=u&&u.prototype===t,p=0;U>p;p++){var d=L[p];c&&"constructor"===d||!_(t,d)||r.push(d)}return r}});var F=Object.keys&&function(){return 2===Object.keys(arguments).length}(1,2),B=Object.keys;P(Object,{keys:function(t){return B(b(t)?i.slice.call(t):t)}},!F);var W=-621987552e5,V="-000001",H=Date.prototype.toISOString&&-1===new Date(W).toISOString().indexOf(V);P(Date.prototype,{toISOString:function(){var t,e,n,o,i;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");for(o=this.getUTCFullYear(),i=this.getUTCMonth(),o+=Math.floor(i/12),i=(i%12+12)%12,t=[i+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],o=(0>o?"-":o>9999?"+":"")+("00000"+Math.abs(o)).slice(o>=0&&9999>=o?-4:-6),e=t.length;e--;)n=t[e],10>n&&(t[e]="0"+n);return o+"-"+t.slice(0,2).join("-")+"T"+t.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}},H);var $=!1;try{$=Date.prototype.toJSON&&null===new Date(0/0).toJSON()&&-1!==new Date(W).toJSON().indexOf(V)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(Y){}$||(Date.prototype.toJSON=function(){var t,e=Object(this),o=n(e);if("number"==typeof o&&!isFinite(o))return null;if(t=e.toISOString,"function"!=typeof t)throw new TypeError("toISOString property is not callable");return t.call(e)});var z=1e15===Date.parse("+033658-09-27T01:46:40.000Z"),X=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z")),q=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));(!Date.parse||q||X||!z)&&(Date=function(t){function e(n,o,i,r,s,a,l){var u=arguments.length;if(this instanceof t){var c=1===u&&String(n)===n?new t(e.parse(n)):u>=7?new t(n,o,i,r,s,a,l):u>=6?new t(n,o,i,r,s,a):u>=5?new t(n,o,i,r,s):u>=4?new t(n,o,i,r):u>=3?new t(n,o,i):u>=2?new t(n,o):u>=1?new t(n):new t;return c.constructor=e,c}return t.apply(this,arguments)}function n(t,e){var n=e>1?1:0;return r[e]+Math.floor((t-1969+n)/4)-Math.floor((t-1901+n)/100)+Math.floor((t-1601+n)/400)+365*(t-1970)}function o(e){return Number(new t(1970,0,1,0,0,0,e))}var i=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),r=[0,31,59,90,120,151,181,212,243,273,304,334,365];for(var s in t)e[s]=t[s];return e.now=t.now,e.UTC=t.UTC,e.prototype=t.prototype,e.prototype.constructor=e,e.parse=function(e){var r=i.exec(e);if(r){var s,a=Number(r[1]),l=Number(r[2]||1)-1,u=Number(r[3]||1)-1,c=Number(r[4]||0),p=Number(r[5]||0),d=Number(r[6]||0),h=Math.floor(1e3*Number(r[7]||0)),f=Boolean(r[4]&&!r[8]),m="-"===r[9]?1:-1,g=Number(r[10]||0),v=Number(r[11]||0);return(p>0||d>0||h>0?24:25)>c&&60>p&&60>d&&1e3>h&&l>-1&&12>l&&24>g&&60>v&&u>-1&&u<n(a,l+1)-n(a,l)&&(s=60*(24*(n(a,l)+u)+c+g*m),s=1e3*(60*(s+p+v*m)+d)+h,f&&(s=o(s)),s>=-864e13&&864e13>=s)?s:0/0}return t.parse.apply(this,arguments)},e}(Date)),Date.now||(Date.now=function(){return(new Date).getTime()});var G=l.toFixed&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==0xde0b6b3a7640080.toFixed(0)),K={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function(t,e){for(var n=-1;++n<K.size;)e+=t*K.data[n],K.data[n]=e%K.base,e=Math.floor(e/K.base)},divide:function(t){for(var e=K.size,n=0;--e>=0;)n+=K.data[e],K.data[e]=Math.floor(n/t),n=n%t*K.base},numToString:function(){for(var t=K.size,e="";--t>=0;)if(""!==e||0===t||0!==K.data[t]){var n=String(K.data[t]);""===e?e=n:e+="0000000".slice(0,7-n.length)+n}return e},pow:function le(t,e,n){return 0===e?n:e%2===1?le(t,e-1,n*t):le(t*t,e/2,n)},log:function(t){for(var e=0;t>=4096;)e+=12,t/=4096;for(;t>=2;)e+=1,t/=2;return e}};P(l,{toFixed:function(t){var e,n,o,i,r,s,a,l;if(e=Number(t),e=e!==e?0:Math.floor(e),0>e||e>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(n=Number(this),n!==n)return"NaN";if(-1e21>=n||n>=1e21)return String(n);if(o="",0>n&&(o="-",n=-n),i="0",n>1e-21)if(r=K.log(n*K.pow(2,69,1))-69,s=0>r?n*K.pow(2,-r,1):n/K.pow(2,r,1),s*=4503599627370496,r=52-r,r>0){for(K.multiply(0,s),a=e;a>=7;)K.multiply(1e7,0),a-=7;for(K.multiply(K.pow(10,a,1),0),a=r-1;a>=23;)K.divide(1<<23),a-=23;K.divide(1<<a),K.multiply(1,1),K.divide(2),i=K.numToString()}else K.multiply(0,s),K.multiply(1<<-r,0),i=K.numToString()+"0.00000000000000000000".slice(2,2+e);return e>0?(l=i.length,i=e>=l?o+"0.0000000000000000000".slice(0,e-l+2)+i:o+i.slice(0,l-e)+"."+i.slice(l-e)):i=o+i,i}},G);var Q=a.split;2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?!function(){var t="undefined"==typeof/()??/.exec("")[1];a.split=function(e,n){var o=this;if("undefined"==typeof e&&0===n)return[];if("[object RegExp]"!==f.call(e))return Q.call(this,e,n);var i,r,s,a,l=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.extended?"x":"")+(e.sticky?"y":""),c=0;for(e=new RegExp(e.source,u+"g"),o+="",t||(i=new RegExp("^"+e.source+"$(?!\\s)",u)),n="undefined"==typeof n?-1>>>0:x.ToUint32(n);(r=e.exec(o))&&(s=r.index+r[0].length,!(s>c&&(l.push(o.slice(c,r.index)),!t&&r.length>1&&r[0].replace(i,function(){for(var t=1;t<arguments.length-2;t++)"undefined"==typeof arguments[t]&&(r[t]=void 0)}),r.length>1&&r.index<o.length&&p.apply(l,r.slice(1)),a=r[0].length,c=s,l.length>=n)));)e.lastIndex===r.index&&e.lastIndex++;return c===o.length?(a||!e.test(""))&&l.push(""):l.push(o.slice(c)),l.length>n?l.slice(0,n):l}}():"0".split(void 0,0).length&&(a.split=function(t,e){return"undefined"==typeof t&&0===e?[]:Q.call(this,t,e)});var Z=a.replace,J=function(){var t=[];return"x".replace(/x(.)?/g,function(e,n){t.push(n)}),1===t.length&&"undefined"==typeof t[0]}();J||(a.replace=function(t,e){var n=m(e),o=g(t)&&/\)[*?]/.test(t.source);if(n&&o){var i=function(n){var o=arguments.length,i=t.lastIndex;t.lastIndex=0;var r=t.exec(n)||[];return t.lastIndex=i,r.push(arguments[o-2],arguments[o-1]),e.apply(this,r)};return Z.call(this,t,i)}return Z.call(this,t,e)});var te=a.substr,ee="".substr&&"b"!=="0b".substr(-1);P(a,{substr:function(t,e){return te.call(this,0>t&&(t=this.length+t)<0?0:t,e)}},ee);var ne="	\n\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff",oe="\u200b",ie="["+ne+"]",re=new RegExp("^"+ie+ie+"*"),se=new RegExp(ie+ie+"*$"),ae=a.trim&&(ne.trim()||!oe.trim());P(a,{trim:function(){if("undefined"==typeof this||null===this)throw new TypeError("can't convert "+this+" to object");return String(this).replace(re,"").replace(se,"")}},ae),(8!==parseInt(ne+"08")||22!==parseInt(ne+"0x16"))&&(parseInt=function(t){var e=/^0[xX]/;return function(n,o){return n=String(n).trim(),Number(o)||(o=e.test(n)?16:10),t(n,o)}}(parseInt))}),!function(){"undefined"==typeof Math.sgn&&(Math.sgn=function(t){return 0==t?0:t>0?1:-1});var t={subtract:function(t,e){return{x:t.x-e.x,y:t.y-e.y}},dotProduct:function(t,e){return t.x*e.x+t.y*e.y},square:function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},scale:function(t,e){return{x:t.x*e,y:t.y*e}}},e=64,n=Math.pow(2,-e-1),o=function(e,n){for(var o=[],i=r(e,n),a=n.length-1,l=2*a-1,u=s(i,l,o,0),p=t.subtract(e,n[0]),d=t.square(p),h=0,f=0;u>f;f++){p=t.subtract(e,c(n,a,o[f],null,null));var m=t.square(p);d>m&&(d=m,h=o[f])}return p=t.subtract(e,n[a]),m=t.square(p),d>m&&(d=m,h=1),{location:h,distance:d}},i=function(t,e){var n=o(t,e);return{point:c(e,e.length-1,n.location,null,null),location:n.location}},r=function(e,n){for(var o=n.length-1,i=2*o-1,r=[],s=[],a=[],l=[],u=[[1,.6,.3,.1],[.4,.6,.6,.4],[.1,.3,.6,1]],c=0;o>=c;c++)r[c]=t.subtract(n[c],e);for(var c=0;o-1>=c;c++)s[c]=t.subtract(n[c+1],n[c]),s[c]=t.scale(s[c],3);for(var p=0;o-1>=p;p++)for(var d=0;o>=d;d++)a[p]||(a[p]=[]),a[p][d]=t.dotProduct(s[p],r[d]);for(c=0;i>=c;c++)l[c]||(l[c]=[]),l[c].y=0,l[c].x=parseFloat(c)/i;for(var h=o,f=o-1,m=0;h+f>=m;m++){var g=Math.max(0,m-f),v=Math.min(m,h);for(c=g;v>=c;c++)j=m-c,l[c+j].y+=a[j][c]*u[j][c]}return l},s=function(t,n,o,i){var r,p,d=[],h=[],f=[],m=[];switch(a(t,n)){case 0:return 0;case 1:if(i>=e)return o[0]=(t[0].x+t[n].x)/2,1;if(l(t,n))return o[0]=u(t,n),1}c(t,n,.5,d,h),r=s(d,n,f,i+1),p=s(h,n,m,i+1);for(var g=0;r>g;g++)o[g]=f[g];for(var g=0;p>g;g++)o[g+r]=m[g];return r+p},a=function(t,e){var n,o,i=0;n=o=Math.sgn(t[0].y);for(var r=1;e>=r;r++)n=Math.sgn(t[r].y),n!=o&&i++,o=n;return i},l=function(t,e){var o,i,r,s,a,l,u,c,p,d,h,f,m,g,v,y;l=t[0].y-t[e].y,u=t[e].x-t[0].x,c=t[0].x*t[e].y-t[e].x*t[0].y;for(var b=max_distance_below=0,C=1;e>C;C++){var P=l*t[C].x+u*t[C].y+c;P>b?b=P:max_distance_below>P&&(max_distance_below=P)}return h=0,f=1,m=0,g=l,v=u,y=c-b,p=h*v-g*f,d=1/p,i=(f*y-v*m)*d,g=l,v=u,y=c-max_distance_below,p=h*v-g*f,d=1/p,r=(f*y-v*m)*d,s=Math.min(i,r),a=Math.max(i,r),o=a-s,n>o?1:0},u=function(t,e){var n=1,o=0,i=t[e].x-t[0].x,r=t[e].y-t[0].y,s=t[0].x-0,a=t[0].y-0,l=i*o-r*n,u=1/l,c=(i*a-r*s)*u;return 0+n*c},c=function(t,e,n,o,i){for(var r=[[]],s=0;e>=s;s++)r[0][s]=t[s];for(var a=1;e>=a;a++)for(var s=0;e-a>=s;s++)r[a]||(r[a]=[]),r[a][s]||(r[a][s]={}),r[a][s].x=(1-n)*r[a-1][s].x+n*r[a-1][s+1].x,r[a][s].y=(1-n)*r[a-1][s].y+n*r[a-1][s+1].y;if(null!=o)for(s=0;e>=s;s++)o[s]=r[s][0];if(null!=i)for(s=0;e>=s;s++)i[s]=r[e-s][s];return r[e][0]},p={},d=function(t){var e=p[t];if(!e){e=[];var n=function(){return function(e){return Math.pow(e,t)}},o=function(){return function(e){return Math.pow(1-e,t)}},i=function(t){return function(){return t}},r=function(){return function(t){return t}},s=function(){return function(t){return 1-t}},a=function(t){return function(e){for(var n=1,o=0;o<t.length;o++)n*=t[o](e);return n}};e.push(new n);for(var l=1;t>l;l++){for(var u=[new i(t)],c=0;t-l>c;c++)u.push(new r);for(var c=0;l>c;c++)u.push(new s);e.push(new a(u))}e.push(new o),p[t]=e}return e},h=function(t,e){for(var n=d(t.length-1),o=0,i=0,r=0;r<t.length;r++)o+=t[r].x*n[r](e),i+=t[r].y*n[r](e);return{x:o,y:i}},f=function(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))},m=function(t){return t[0].x==t[1].x&&t[0].y==t[1].y},g=function(t,e,n){if(m(t))return{point:t[0],location:e};for(var o=h(t,e),i=0,r=e,s=n>0?1:-1,a=null;i<Math.abs(n);)r+=.005*s,a=h(t,r),i+=f(a,o),o=a;return{point:a,location:r}},v=function(t){if(m(t))return 0;for(var e=h(t,0),n=0,o=0,i=1,r=null;1>o;)o+=.005*i,r=h(t,o),n+=f(r,e),e=r;return n},y=function(t,e,n){return g(t,e,n).point},b=function(t,e,n){return g(t,e,n).location},C=function(t,e){var n=h(t,e),o=h(t.slice(0,t.length-1),e),i=o.y-n.y,r=o.x-n.x;return 0==i?1/0:Math.atan(i/r)},P=function(t,e,n){var o=g(t,e,n);return o.location>1&&(o.location=1),o.location<0&&(o.location=0),C(t,o.location)},x=function(t,e,n,o){o=null==o?0:o;var i=g(t,e,o),r=C(t,i.location),s=Math.atan(-1/r),a=n/2*Math.sin(s),l=n/2*Math.cos(s);return[{x:i.point.x+l,y:i.point.y+a},{x:i.point.x-l,y:i.point.y-a}]};window.jsBezier={distanceFromCurve:o,gradientAtPoint:C,gradientAtPointAlongCurveFrom:P,nearestPointOnCurve:i,pointOnCurve:h,pointAlongCurveFrom:y,perpendicularToCurveAt:x,locationAlongCurveFrom:b,getLength:v}}(),function(){"use strict";var t=this.Biltong={},e=function(t){return"[object Array]"===Object.prototype.toString.call(t)},n=function(t,n,o){return t=e(t)?t:[t.x,t.y],n=e(n)?n:[n.x,n.y],o(t,n)},o=t.gradient=function(t,e){return n(t,e,function(t,e){return e[0]==t[0]?e[1]>t[1]?1/0:-1/0:e[1]==t[1]?e[0]>t[0]?0:-0:(e[1]-t[1])/(e[0]-t[0])})},i=(t.normal=function(t,e){return-1/o(t,e)},t.lineLength=function(t,e){return n(t,e,function(t,e){return Math.sqrt(Math.pow(e[1]-t[1],2)+Math.pow(e[0]-t[0],2))})},t.quadrant=function(t,e){return n(t,e,function(t,e){return e[0]>t[0]?e[1]>t[1]?2:1:e[0]==t[0]?e[1]>t[1]?2:1:e[1]>t[1]?3:4})}),r=(t.theta=function(t,e){return n(t,e,function(t,e){var n=o(t,e),r=Math.atan(n),s=i(t,e);return(4==s||3==s)&&(r+=Math.PI),0>r&&(r+=2*Math.PI),r})},t.intersects=function(t,e){var n=t.x,o=t.x+t.w,i=t.y,r=t.y+t.h,s=e.x,a=e.x+e.w,l=e.y,u=e.y+e.h;return s>=n&&o>=s&&l>=i&&r>=l||a>=n&&o>=a&&l>=i&&r>=l||s>=n&&o>=s&&u>=i&&r>=u||a>=n&&o>=s&&u>=i&&r>=u||n>=s&&a>=n&&i>=l&&u>=i||o>=s&&a>=o&&i>=l&&u>=i||n>=s&&a>=n&&r>=l&&u>=r||o>=s&&a>=n&&r>=l&&u>=r},t.encloses=function(t,e,n){var o=t.x,i=t.x+t.w,r=t.y,s=t.y+t.h,a=e.x,l=e.x+e.w,u=e.y,c=e.y+e.h,p=function(t,e,o,i){return n?e>=t&&o>=i:e>t&&o>i};return p(o,a,i,l)&&p(r,u,s,c)},[null,[1,-1],[1,1],[-1,1],[-1,-1]]),s=[null,[-1,-1],[-1,1],[1,1],[1,-1]];t.pointOnLine=function(t,e,n){var a=o(t,e),l=i(t,e),u=n>0?r[l]:s[l],c=Math.atan(a),p=Math.abs(n*Math.sin(c))*u[1],d=Math.abs(n*Math.cos(c))*u[0];return{x:t.x+d,y:t.y+p}},t.perpendicularLineTo=function(t,e,n){var i=o(t,e),r=Math.atan(-1/i),s=n/2*Math.sin(r),a=n/2*Math.cos(r);return[{x:e.x+a,y:e.y+s},{x:e.x-a,y:e.y-s}]}}.call(this),function(){var t=function(t){return"[object Array]"===Object.prototype.toString.call(t)},e=function(t){return"[object Number]"===Object.prototype.toString.call(t)},n=function(t){return"string"==typeof t},o=function(t){return"boolean"==typeof t},i=function(t){return null==t},r=function(t){return null==t?!1:"[object Object]"===Object.prototype.toString.call(t)},s=function(t){return"[object Date]"===Object.prototype.toString.call(t)},a=function(t){return"[object Function]"===Object.prototype.toString.call(t)},l=function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0};jsPlumbUtil={isArray:t,isString:n,isBoolean:o,isNull:i,isObject:r,isDate:s,isFunction:a,isEmpty:l,isNumber:e,clone:function(e){if(n(e))return""+e;if(o(e))return!!e;if(s(e))return new Date(e.getTime());if(a(e))return e;if(t(e)){for(var i=[],l=0;l<e.length;l++)i.push(this.clone(e[l]));return i}if(r(e)){var u={};for(var c in e)u[c]=this.clone(e[c]);return u}return e},matchesSelector:function(t,e,n){n=n||t.parentNode;for(var o=n.querySelectorAll(e),i=0;i<o.length;i++)if(o[i]===t)return!0;return!1},merge:function(e,i){var s=this.clone(e);for(var a in i)if(null==s[a]||n(i[a])||o(i[a]))s[a]=i[a];else if(t(i[a])){var l=[];t(s[a])&&l.push.apply(l,s[a]),l.push.apply(l,i[a]),s[a]=l}else if(r(i[a])){r(s[a])||(s[a]={});for(var u in i[a])s[a][u]=i[a][u]}return s},replace:function(t,e,n){var o=t,i=o;return e.replace(/([^\.])+/g,function(t,e,o,r){var s=t.match(/([^\[0-9]+){1}(\[)([0-9+])/),a=o+t.length>=r.length,l=function(){return i[s[1]]||function(){return i[s[1]]=[],i[s[1]]}()};if(a)s?l()[s[3]]=n:i[t]=n;else if(s){var u=l();i=u[s[3]]||function(){return u[s[3]]={},u[s[3]]}()}else i=i[t]||function(){return i[t]={},i[t]}()}),t},functionChain:function(t,e,n){for(var o=0;o<n.length;o++){var i=n[o][0][n[o][1]].apply(n[o][0],n[o][2]);if(i===e)return i}return t},populate:function(e,o){var i=function(t){var e=t.match(/(\${.*?})/g);if(null!=e)for(var n=0;n<e.length;n++){var i=o[e[n].substring(2,e[n].length-1)];null!=i&&(t=t.replace(e[n],i))}return t},s=function(e){if(null!=e){if(n(e))return i(e);if(t(e)){for(var o=[],a=0;a<e.length;a++)o.push(s(e[a]));return o}if(r(e)){var l={};for(var u in e)l[u]=s(e[u]);return l}return e}};return s(e)},convertStyle:function(t,e){if("transparent"===t)return t;var n=t,o=function(t){return 1==t.length?"0"+t:t},i=function(t){return o(Number(t).toString(16))},r=/(rgb[a]?\()(.*)(\))/;if(t.match(r)){var s=t.match(r)[2].split(",");n="#"+i(s[0])+i(s[1])+i(s[2]),e||4!=s.length||(n+=i(s[3]))}return n},findWithFunction:function(t,e){if(t)for(var n=0;n<t.length;n++)if(e(t[n]))return n;return-1},indexOf:function(t,e){return t.indexOf?t.indexOf(e):jsPlumbUtil.findWithFunction(t,function(t){return t==e})},removeWithFunction:function(t,e){var n=jsPlumbUtil.findWithFunction(t,e);return n>-1&&t.splice(n,1),-1!=n},remove:function(t,e){var n=jsPlumbUtil.indexOf(t,e);return n>-1&&t.splice(n,1),-1!=n},addWithFunction:function(t,e,n){-1==jsPlumbUtil.findWithFunction(t,n)&&t.push(e)},addToList:function(t,e,n,o){var i=t[e];return null==i&&(i=[],t[e]=i),i[o?"unshift":"push"](n),i},consume:function(t,e){t.stopPropagation?t.stopPropagation():t.returnValue=!1,!e&&t.preventDefault&&t.preventDefault()},extend:function(e,n){var o;for(n=t(n)?n:[n],o=0;o<n.length;o++)for(var i in n[o].prototype)n[o].prototype.hasOwnProperty(i)&&(e.prototype[i]=n[o].prototype[i]);var r=function(t,e){return function(){for(o=0;o<n.length;o++)n[o].prototype[t]&&n[o].prototype[t].apply(this,arguments);return e.apply(this,arguments)}},s=function(t){for(var n in t)e.prototype[n]=r(n,t[n])};if(arguments.length>2)for(o=2;o<arguments.length;o++)s(arguments[o]);return e},uuid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=0|16*Math.random(),n="x"==t?e:8|3&e;return n.toString(16)})},logEnabled:!0,log:function(){if(jsPlumbUtil.logEnabled&&"undefined"!=typeof console)try{var t=arguments[arguments.length-1];console.log(t)}catch(e){}},sizeElement:function(t,e,n,o,i){t&&(t.style.height=i+"px",t.height=i,t.style.width=o+"px",t.width=o,t.style.left=e+"px",t.style.top=n+"px")},wrap:function(t,e,n){return t=t||function(){},e=e||function(){},function(){var o=null;try{o=e.apply(this,arguments)}catch(i){jsPlumbUtil.log("jsPlumb function failed : "+i)}if(null==n||o!==n)try{o=t.apply(this,arguments)}catch(i){jsPlumbUtil.log("wrapped function failed : "+i)}return o}},ieVersion:/MSIE\s([\d.]+)/.test(navigator.userAgent)?new Number(RegExp.$1):-1},jsPlumbUtil.oldIE=jsPlumbUtil.ieVersion>-1&&jsPlumbUtil.ieVersion<9,jsPlumbUtil.EventGenerator=function(){var t={},e=!1,n={ready:!0};this.bind=function(e,n,o){return jsPlumbUtil.addToList(t,e,n,o),this},this.fire=function(o,i,r){if(!e&&t[o]){var s=t[o].length,a=0,l=!1,u=null;if(!this.shouldFireEvent||this.shouldFireEvent(o,i,r))for(;!l&&s>a&&u!==!1;){if(n[o])t[o][a].apply(this,[i,r]);else try{u=t[o][a].apply(this,[i,r])}catch(c){jsPlumbUtil.log("jsPlumb: fire failed for event "+o+" : "+c)}a++,(null==t||null==t[o])&&(l=!0)}}return this},this.unbind=function(e){return e?delete t[e]:t={},this},this.getListener=function(e){return t[e]},this.setSuspendEvents=function(t){e=t},this.isSuspendEvents=function(){return e},this.cleanupListeners=function(){for(var e in t)t[e]=null}},jsPlumbUtil.EventGenerator.prototype={cleanup:function(){this.cleanupListeners()}},Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),n=this,o=function(){},i=function(){return n.apply(this instanceof o&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return o.prototype=this.prototype,i.prototype=new o,i})}(),function(){var t=!!window.SVGAngle||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),e=function(){if(void 0===e.vml){var t=document.body.appendChild(document.createElement("div"));t.innerHTML='<v:shape id="vml_flag1" adj="1" />';var n=t.firstChild;null!=n&&null!=n.style?(n.style.behavior="url(#default#VML)",e.vml=n?"object"==typeof n.adj:!0):e.vml=!1,t.parentNode.removeChild(t)}return e.vml},n=function(){var t=-1;if("Microsoft Internet Explorer"==navigator.appName){var e=navigator.userAgent,n=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=n.exec(e)&&(t=parseFloat(RegExp.$1))}return t}(),o=n>-1&&9>n,i=function(t,e){if(null==t)return[0,0];var n=u(t),o=l(n,0);return[o[e+"X"],o[e+"Y"]]},r=function(t){return null==t?[0,0]:o?[t.clientX+document.documentElement.scrollLeft,t.clientY+document.documentElement.scrollTop]:i(t,"page")},s=function(t){return i(t,"screen")},a=function(t){return i(t,"client")},l=function(t,e){return t.item?t.item(e):t[e]},u=function(t){return t.touches&&t.touches.length>0?t.touches:t.changedTouches&&t.changedTouches.length>0?t.changedTouches:t.targetTouches&&t.targetTouches.length>0?t.targetTouches:[t]},c=function(t){var e={},n=[],o={},i={},r={};this.register=function(s){var a=t.getId(s),l=jsPlumbAdapter.getOffset(s,t);e[a]||(e[a]=s,n.push(s),o[a]={});var u=function(e){if(e)for(var n=0;n<e.childNodes.length;n++)if(3!=e.childNodes[n].nodeType&&8!=e.childNodes[n].nodeType){var s=jsPlumb.getElementObject(e.childNodes[n]),c=t.getId(e.childNodes[n],null,!0);if(c&&i[c]&&i[c]>0){var p=jsPlumbAdapter.getOffset(s,t);o[a][c]={id:c,offset:{left:p.left-l.left,top:p.top-l.top}},r[c]=a}u(e.childNodes[n])}};u(s)},this.updateOffsets=function(e){if(null!=e){var n=jsPlumb.getDOMElement(e),i=t.getId(n),s=o[i],a=jsPlumbAdapter.getOffset(n,t);if(s)for(var l in s){var u=jsPlumb.getElementObject(l),c=jsPlumbAdapter.getOffset(u,t);o[i][l]={id:l,offset:{left:c.left-a.left,top:c.top-a.top}},r[l]=i}}},this.endpointAdded=function(n){var s=document.body,a=t.getId(n),l=jsPlumbAdapter.getOffset(n,t),u=n.parentNode;for(i[a]=i[a]?i[a]+1:1;null!=u&&u!=s;){var c=t.getId(u,null,!0);if(c&&e[c]){var p=jsPlumbAdapter.getOffset(u,t);null==o[c][a]&&(o[c][a]={id:a,offset:{left:l.left-p.left,top:l.top-p.top}},r[a]=c);break}u=u.parentNode}},this.endpointDeleted=function(t){if(i[t.elementId]&&(i[t.elementId]--,i[t.elementId]<=0))for(var e in o)o[e]&&(delete o[e][t.elementId],delete r[t.elementId])},this.changeId=function(t,e){o[e]=o[t],o[t]={},r[e]=r[t],r[t]=null},this.getElementsForDraggable=function(t){return o[t]},this.elementRemoved=function(t){var e=r[t];e&&(delete o[e][t],delete r[t])},this.reset=function(){e={},n=[],o={},i={}},this.dragEnded=function(e){var n=t.getId(e),o=r[n];o&&this.updateOffsets(o)},this.setParent=function(e,n,i,s){var a=r[n];if(a){o[s]||(o[s]={}),o[s][n]=o[a][n],delete o[a][n];var l=jsPlumbAdapter.getOffset(i,t),u=jsPlumbAdapter.getOffset(e,t);o[s][n].offset={left:u.left-l.left,top:u.top-l.top},r[n]=s}}};window.console||(window.console={time:function(){},timeEnd:function(){},group:function(){},groupEnd:function(){},log:function(){}});
var p=function(t){return null==t?null:t.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},d=function(t,e){e=p(e),"undefined"!=typeof t.className.baseVal?t.className.baseVal=e:t.className=e},h=function(t){return"undefined"==typeof t.className.baseVal?t.className:t.className.baseVal},f=function(t,e,n){for(var o=n.split(/\s+/),i=h(t),r=i.split(/\s+/),s=0;s<o.length;s++)if(e)-1==jsPlumbUtil.indexOf(r,o[s])&&r.push(o[s]);else{var a=jsPlumbUtil.indexOf(r,o[s]);-1!=a&&r.splice(a,1)}d(t,r.join(" "))},m=function(t,e){if(null!=t)if("string"==typeof t)e(jsPlumb.getDOMElement(t));else if(null!=t.length)for(var n=0;n<t.length;n++)e(jsPlumb.getDOMElement(t[n]));else e(t)};window.jsPlumbAdapter={headless:!1,pageLocation:r,screenLocation:s,clientLocation:a,getAttribute:function(t,e){return t.getAttribute(e)},setAttribute:function(t,e,n){t.setAttribute(e,n)},appendToRoot:function(t){document.body.appendChild(t)},getRenderModes:function(){return["svg","vml"]},isRenderModeAvailable:function(n){return{svg:t,vml:e()}[n]},getDragManager:function(t){return new c(t)},setRenderMode:function(t){var e;if(t){t=t.toLowerCase();var n=this.isRenderModeAvailable("svg"),o=this.isRenderModeAvailable("vml");"svg"===t&&n?e="svg":o&&(e="vml")}return e},addClass:function(t,e){m(t,function(t){f(t,!0,e)})},hasClass:function(t,e){return t=jsPlumb.getDOMElement(t),t.classList?t.classList.contains(e):-1!=h(t).indexOf(e)},removeClass:function(t,e){m(t,function(t){f(t,!1,e)})},setClass:function(t,e){m(t,function(t){d(t,e)})},setPosition:function(t,e){t.style.left=e.left+"px",t.style.top=e.top+"px"},getPosition:function(t){var e=function(e){var n=t.style[e];return n?n.substring(0,n.length-2):0};return{left:e("left"),top:e("top")}},getOffset:function(t,e,n){t=jsPlumb.getDOMElement(t);for(var o=e.getContainer(),i=t.offsetLeft,r=t.offsetTop,s=n||null!=o&&t.offsetParent!=o?t.offsetParent:null;null!=s;)i+=s.offsetLeft,r+=s.offsetTop,s=n?s.offsetParent:s.offsetParent==o?null:s.offsetParent;return{left:i,top:r}},getPositionOnElement:function(t,e,n){var o="undefined"!=typeof e.getBoundingClientRect?e.getBoundingClientRect():{left:0,top:0,width:0,height:0},i=document.body,r=document.documentElement,s=(e.offsetParent,window.pageYOffset||r.scrollTop||i.scrollTop),a=window.pageXOffset||r.scrollLeft||i.scrollLeft,l=r.clientTop||i.clientTop||0,u=r.clientLeft||i.clientLeft||0,c=0,p=0,d=o.top+s-l+c*n,h=o.left+a-u+p*n,f=jsPlumbAdapter.pageLocation(t),m=o.width||e.offsetWidth*n,g=o.height||e.offsetHeight*n,v=(f[0]-h)/m,y=(f[1]-d)/g;return[v,y]}}}(),function(){"use strict";var t=jsPlumbUtil,e=function(t,e,n){return jsPlumbAdapter.getOffset(t,e,n)},n=function(){return""+(new Date).getTime()},o=function(t){if(t._jsPlumb.paintStyle&&t._jsPlumb.hoverPaintStyle){var e={};b.extend(e,t._jsPlumb.paintStyle),b.extend(e,t._jsPlumb.hoverPaintStyle),delete t._jsPlumb.hoverPaintStyle,e.gradient&&t._jsPlumb.paintStyle.fillStyle&&delete e.gradient,t._jsPlumb.hoverPaintStyle=e}},i=["click","dblclick","mouseenter","mouseout","mousemove","mousedown","mouseup","contextmenu"],r={mouseout:"mouseleave",mouseexit:"mouseleave"},s=function(t,e,n,o){var i=t.getAttachedElements();if(i)for(var r=0,s=i.length;s>r;r++)o&&o==i[r]||i[r].setHover(e,!0,n)},a=function(t){return null==t?null:t.split(" ")},l=function(e,n,o){if(e.getDefaultType){for(var i=e.getTypeDescriptor(),r=t.merge({},e.getDefaultType()),s=0,a=e._jsPlumb.types.length;a>s;s++)r=t.merge(r,e._jsPlumb.instance.getType(e._jsPlumb.types[s],i));n&&(r=t.populate(r,n)),e.applyType(r,o),o||e.repaint()}},u=window.jsPlumbUIComponent=function(e){jsPlumbUtil.EventGenerator.apply(this,arguments);var n=this,o=arguments,s=n.idPrefix,a=s+(new Date).getTime();if(this._jsPlumb={instance:e._jsPlumb,parameters:e.parameters||{},paintStyle:null,hoverPaintStyle:null,paintStyleInUse:null,hover:!1,beforeDetach:e.beforeDetach,beforeDrop:e.beforeDrop,overlayPlacements:[],hoverClass:e.hoverClass||e._jsPlumb.Defaults.HoverClass,types:[]},this.getId=function(){return a},e.events)for(var l in e.events)n.bind(l,e.events[l]);this.clone=function(){var t={};return this.constructor.apply(t,o),t}.bind(this),this.isDetachAllowed=function(e){var n=!0;if(this._jsPlumb.beforeDetach)try{n=this._jsPlumb.beforeDetach(e)}catch(o){t.log("jsPlumb: beforeDetach callback failed",o)}return n},this.isDropAllowed=function(e,n,o,i,r,s,a){var l=this._jsPlumb.instance.checkCondition("beforeDrop",{sourceId:e,targetId:n,scope:o,connection:i,dropEndpoint:r,source:s,target:a});if(this._jsPlumb.beforeDrop)try{l=this._jsPlumb.beforeDrop({sourceId:e,targetId:n,scope:o,connection:i,dropEndpoint:r,source:s,target:a})}catch(u){t.log("jsPlumb: beforeDrop callback failed",u)}return l};var u=[],c=function(t,e,n){u.push([t,e,n]),t.bind(e,n)},p=[],d=function(t,e,n,o){var i=r[n]||n,s=function(t){o&&o(t)===!1||e.fire(i,e,t)};p.push([t,n,s,e]),e._jsPlumb.instance.on(t,n,s)},h=function(t,e,n,o){r[e]||e,o._jsPlumb.instance.off(t,e,n)};this.bindListeners=function(t,e,n){c(t,"click",function(t,n){e.fire("click",e,n)}),c(t,"dblclick",function(t,n){e.fire("dblclick",e,n)}),c(t,"contextmenu",function(t,n){e.fire("contextmenu",e,n)}),c(t,"mouseleave",function(t,o){e.isHover()&&(n(!1),e.fire("mouseleave",e,o))}),c(t,"mouseenter",function(t,o){e.isHover()||(n(!0),e.fire("mouseenter",e,o))}),c(t,"mousedown",function(t,n){e.fire("mousedown",e,n)}),c(t,"mouseup",function(t,n){e.fire("mouseup",e,n)})},this.unbindListeners=function(){for(var t=0;t<u.length;t++){var e=u[t];e[0].unbind(e[1],e[2])}u=null},this.attachListeners=function(t,e,n){n=n||{};for(var o=0,r=i.length;r>o;o++)d(t,e,i[o],n[i[o]])},this.detachListeners=function(){for(var t=0;t<p.length;t++)h(p[t][0],p[t][1],p[t][2],p[t][3]);p=null},this.reattachListenersForElement=function(t){if(arguments.length>1){for(var e=0,n=i.length;n>e;e++)h(t,i[e]);for(e=1,n=arguments.length;n>e;e++)this.attachListeners(t,arguments[e])}}};jsPlumbUtil.extend(u,jsPlumbUtil.EventGenerator,{getParameter:function(t){return this._jsPlumb.parameters[t]},setParameter:function(t,e){this._jsPlumb.parameters[t]=e},getParameters:function(){return this._jsPlumb.parameters},setParameters:function(t){this._jsPlumb.parameters=t},addClass:function(t){jsPlumbAdapter.addClass(this.canvas,t)},removeClass:function(t){jsPlumbAdapter.removeClass(this.canvas,t)},setType:function(t,e,n){this._jsPlumb.types=a(t)||[],l(this,e,n)},getType:function(){return this._jsPlumb.types},reapplyTypes:function(t,e){l(this,t,e)},hasType:function(t){return-1!=jsPlumbUtil.indexOf(this._jsPlumb.types,t)},addType:function(t,e,n){var o=a(t),i=!1;if(null!=o){for(var r=0,s=o.length;s>r;r++)this.hasType(o[r])||(this._jsPlumb.types.push(o[r]),i=!0);i&&l(this,e,n)}},removeType:function(e,n){var o=a(e),i=!1,r=function(e){var n=t.indexOf(this._jsPlumb.types,e);return-1!=n?(this._jsPlumb.types.splice(n,1),!0):!1}.bind(this);if(null!=o){for(var s=0,u=o.length;u>s;s++)i=r(o[s])||i;i&&l(this,null,n)}},toggleType:function(t,e,n){var o=a(t);if(null!=o){for(var i=0,r=o.length;r>i;i++){var s=jsPlumbUtil.indexOf(this._jsPlumb.types,o[i]);-1!=s?this._jsPlumb.types.splice(s,1):this._jsPlumb.types.push(o[i])}l(this,e,n)}},applyType:function(t,e){if(this.setPaintStyle(t.paintStyle,e),this.setHoverPaintStyle(t.hoverPaintStyle,e),t.parameters)for(var n in t.parameters)this.setParameter(n,t.parameters[n])},setPaintStyle:function(t,e){this._jsPlumb.paintStyle=t,this._jsPlumb.paintStyleInUse=this._jsPlumb.paintStyle,o(this),e||this.repaint()},getPaintStyle:function(){return this._jsPlumb.paintStyle},setHoverPaintStyle:function(t,e){this._jsPlumb.hoverPaintStyle=t,o(this),e||this.repaint()},getHoverPaintStyle:function(){return this._jsPlumb.hoverPaintStyle},cleanup:function(){this.unbindListeners(),this.detachListeners()},destroy:function(){this.cleanupListeners(),this.clone=null,this._jsPlumb=null},isHover:function(){return this._jsPlumb.hover},setHover:function(t,e,o){if(this._jsPlumb&&!this._jsPlumb.instance.currentlyDragging&&!this._jsPlumb.instance.isHoverSuspended()){if(this._jsPlumb.hover=t,null!=this.canvas){if(null!=this._jsPlumb.instance.hoverClass){var i=t?"addClass":"removeClass";this._jsPlumb.instance[i](this.canvas,this._jsPlumb.instance.hoverClass)}null!=this._jsPlumb.hoverClass&&this._jsPlumb.instance[i](this.canvas,this._jsPlumb.hoverClass)}null!=this._jsPlumb.hoverPaintStyle&&(this._jsPlumb.paintStyleInUse=t?this._jsPlumb.hoverPaintStyle:this._jsPlumb.paintStyle,this._jsPlumb.instance.isSuspendDrawing()||(o=o||n(),this.repaint({timestamp:o,recalc:!1}))),this.getAttachedElements&&!e&&s(this,t,n(),this)}}});var c="__label",p=function(t,e){for(var n=-1,o=0,i=t._jsPlumb.overlays.length;i>o;o++)if(e===t._jsPlumb.overlays[o].id){n=o;break}return n},d=function(t,e){var n={cssClass:e.cssClass,labelStyle:t.labelStyle,id:c,component:t,_jsPlumb:t._jsPlumb.instance},o=b.extend(n,e);return new(b.Overlays[t._jsPlumb.instance.getRenderMode()].Label)(o)},h=function(e,n){var o=null;if(t.isArray(n)){var i=n[0],r=b.extend({component:e,_jsPlumb:e._jsPlumb.instance},n[1]);3==n.length&&b.extend(r,n[2]),o=new(b.Overlays[e._jsPlumb.instance.getRenderMode()][i])(r)}else o=n.constructor==String?new(b.Overlays[e._jsPlumb.instance.getRenderMode()][n])({component:e,_jsPlumb:e._jsPlumb.instance}):n;e._jsPlumb.overlays.push(o)},f=function(t,e){var n=t.defaultOverlayKeys||[],o=e.overlays,i=function(e){return t._jsPlumb.instance.Defaults[e]||b.Defaults[e]||[]};o||(o=[]);for(var r=0,s=n.length;s>r;r++)o.unshift.apply(o,i(n[r]));return o},m=window.OverlayCapableJsPlumbUIComponent=function(t){u.apply(this,arguments),this._jsPlumb.overlays=[];var e=f(this,t);if(e)for(var n=0,o=e.length;o>n;n++)h(this,e[n]);if(t.label){var i=t.labelLocation||this.defaultLabelLocation||.5,r=t.labelStyle||this._jsPlumb.instance.Defaults.LabelStyle;this._jsPlumb.overlays.push(d(this,{label:t.label,location:i,labelStyle:r}))}};jsPlumbUtil.extend(m,u,{applyType:function(t,e){if(this.removeAllOverlays(e),t.overlays)for(var n=0,o=t.overlays.length;o>n;n++)this.addOverlay(t.overlays[n],!0)},setHover:function(t){if(this._jsPlumb&&!this._jsPlumb.instance.isConnectionBeingDragged())for(var e=0,n=this._jsPlumb.overlays.length;n>e;e++)this._jsPlumb.overlays[e][t?"addClass":"removeClass"](this._jsPlumb.instance.hoverClass)},addOverlay:function(t,e){h(this,t),e||this.repaint()},getOverlay:function(t){var e=p(this,t);return e>=0?this._jsPlumb.overlays[e]:null},getOverlays:function(){return this._jsPlumb.overlays},hideOverlay:function(t){var e=this.getOverlay(t);e&&e.hide()},hideOverlays:function(){for(var t=0,e=this._jsPlumb.overlays.length;e>t;t++)this._jsPlumb.overlays[t].hide()},showOverlay:function(t){var e=this.getOverlay(t);e&&e.show()},showOverlays:function(){for(var t=0,e=this._jsPlumb.overlays.length;e>t;t++)this._jsPlumb.overlays[t].show()},removeAllOverlays:function(t){for(var e=0,n=this._jsPlumb.overlays.length;n>e;e++)this._jsPlumb.overlays[e].cleanup&&this._jsPlumb.overlays[e].cleanup();this._jsPlumb.overlays.splice(0,this._jsPlumb.overlays.length),this._jsPlumb.overlayPositions=null,t||this.repaint()},removeOverlay:function(t){var e=p(this,t);if(-1!=e){var n=this._jsPlumb.overlays[e];n.cleanup&&n.cleanup(),this._jsPlumb.overlays.splice(e,1),this._jsPlumb.overlayPositions&&delete this._jsPlumb.overlayPositions[t]}},removeOverlays:function(){for(var t=0,e=arguments.length;e>t;t++)this.removeOverlay(arguments[t])},moveParent:function(t){this.bgCanvas&&(this.bgCanvas.parentNode.removeChild(this.bgCanvas),t.appendChild(this.bgCanvas)),this.canvas.parentNode.removeChild(this.canvas),t.appendChild(this.canvas);for(var e=0;e<this._jsPlumb.overlays.length;e++)this._jsPlumb.overlays[e].isAppendedAtTopLevel&&(this._jsPlumb.overlays[e].canvas.parentNode.removeChild(this._jsPlumb.overlays[e].canvas),t.appendChild(this._jsPlumb.overlays[e].canvas))},getLabel:function(){var t=this.getOverlay(c);return null!=t?t.getLabel():null},getLabelOverlay:function(){return this.getOverlay(c)},setLabel:function(t){var e=this.getOverlay(c);if(e)t.constructor==String||t.constructor==Function?e.setLabel(t):(t.label&&e.setLabel(t.label),t.location&&e.setLocation(t.location));else{var n=t.constructor==String||t.constructor==Function?{label:t}:t;e=d(this,n),this._jsPlumb.overlays.push(e)}this._jsPlumb.instance.isSuspendDrawing()||this.repaint()},cleanup:function(){for(var t=0;t<this._jsPlumb.overlays.length;t++)this._jsPlumb.overlays[t].cleanup(),this._jsPlumb.overlays[t].destroy();this._jsPlumb.overlays.splice(0),this._jsPlumb.overlayPositions=null},setVisible:function(t){this[t?"showOverlays":"hideOverlays"]()},setAbsoluteOverlayPosition:function(t,e){this._jsPlumb.overlayPositions=this._jsPlumb.overlayPositions||{},this._jsPlumb.overlayPositions[t.id]=e},getAbsoluteOverlayPosition:function(t){return this._jsPlumb.overlayPositions?this._jsPlumb.overlayPositions[t.id]:null}});var g=0,v=function(){var t=g+1;return g++,t},y=window.jsPlumbInstance=function(o){this.Defaults={Anchor:"BottomCenter",Anchors:[null,null],ConnectionsDetachable:!0,ConnectionOverlays:[],Connector:"Bezier",Container:null,DoNotThrowErrors:!1,DragOptions:{},DropOptions:{},Endpoint:"Dot",EndpointOverlays:[],Endpoints:[null,null],EndpointStyle:{fillStyle:"#456"},EndpointStyles:[null,null],EndpointHoverStyle:null,EndpointHoverStyles:[null,null],HoverPaintStyle:null,LabelStyle:{color:"black"},LogEnabled:!1,Overlays:[],MaxConnections:1,PaintStyle:{lineWidth:8,strokeStyle:"#456"},ReattachConnections:!1,RenderMode:"svg",Scope:"jsPlumb_DefaultScope"},o&&b.extend(this.Defaults,o),this.logEnabled=this.Defaults.LogEnabled,this._connectionTypes={},this._endpointTypes={},jsPlumbUtil.EventGenerator.apply(this);var i=this,r=v(),s=i.bind,a={},l=1,c=function(t){var e=i.getDOMElement(t);return{el:e,id:jsPlumbUtil.isString(t)&&null==e?t:K(e)}};this.getInstanceIndex=function(){return r},this.setZoom=function(t,e){return jsPlumbUtil.oldIE||(l=t,i.fire("zoom",l),e&&i.repaintEverything()),!jsPlumbUtil.oldIE},this.getZoom=function(){return l};for(var p in this.Defaults)a[p]=this.Defaults[p];var d;this.setContainer=function(t){t=this.getDOMElement(t),this.select().each(function(e){e.moveParent(t)}),this.selectEndpoints().each(function(e){e.moveParent(t)}),d=t},this.getContainer=function(){return d},this.bind=function(t,e){"ready"===t&&f?e():s.apply(i,[t,e])},i.importDefaults=function(t){for(var e in t)i.Defaults[e]=t[e];return t.Container&&this.setContainer(t.Container),i},i.restoreDefaults=function(){return i.Defaults=b.extend({},a),i};var h=null,f=!1,m=[],g={},y={},C={},P={},x={},E={},_=!1,w=[],D=!1,j=null,S=this.Defaults.Scope,M=null,O=1,T=function(){return""+O++},R=function(t,e){d?d.appendChild(t):e?b.getDOMElement(e).appendChild(t):i.appendToRoot(t)},I=function(t){return t._nodes?t._nodes:t},N=function(t,e,o,r){if(!jsPlumbAdapter.headless&&!D){var s=K(t),a=i.dragManager.getElementsForDraggable(s);null==o&&(o=n());var l=q({elId:s,offset:e,recalc:!1,timestamp:o});if(a)for(var u in a)q({elId:a[u].id,offset:{left:l.o.left+a[u].offset.left,top:l.o.top+a[u].offset.top},recalc:!1,timestamp:o});if(i.anchorManager.redraw(s,e,o,null,r),a)for(var c in a)i.anchorManager.redraw(a[c].id,e,o,a[c].offset,r,!0)}},A=function(e,n){var o,r,s,a=null;if(t.isArray(e)){a=[];for(var l=0,u=e.length;u>l;l++)o=i.getElementObject(e[l]),s=i.getDOMElement(o),r=i.getAttribute(s,"id"),a.push(n.apply(i,[s,r]))}else o=i.getDOMElement(e),r=i.getId(o),a=n.apply(i,[o,r]);return a},k=function(t){return y[t]},L=function(e,n,o){if(!jsPlumbAdapter.headless){var r=null==n?!1:n;if(r&&b.isDragSupported(e,i)&&!b.isAlreadyDraggable(e,i)){var s=o||i.Defaults.DragOptions;s=b.extend({},s);var a=b.dragEvents.drag,l=b.dragEvents.stop,u=b.dragEvents.start;s[u]=t.wrap(s[u],function(){return i.setHoverSuspended(!0),i.select({source:e}).addClass(i.elementDraggingClass+" "+i.sourceElementDraggingClass,!0),i.select({target:e}).addClass(i.elementDraggingClass+" "+i.targetElementDraggingClass,!0),i.setConnectionBeingDragged(!0),s.canDrag?o.canDrag():void 0},!1),s[a]=t.wrap(s[a],function(){var t=i.getUIPosition(arguments,i.getZoom());N(e,t,null,!0),i.addClass(e,"jsPlumb_dragged")}),s[l]=t.wrap(s[l],function(){var t=i.getUIPosition(arguments,i.getZoom(),!0);N(e,t),i.removeClass(e,"jsPlumb_dragged"),i.setHoverSuspended(!1),i.select({source:e}).removeClass(i.elementDraggingClass+" "+i.sourceElementDraggingClass,!0),i.select({target:e}).removeClass(i.elementDraggingClass+" "+i.targetElementDraggingClass,!0),i.setConnectionBeingDragged(!1),i.dragManager.dragEnded(e)});var c=K(e);E[c]=!0;var p=E[c];s.disabled=null==p?!1:!p,i.initDraggable(e,s,!1),i.dragManager.register(e)}}},U=function(e,n){var o=b.extend({},e);if(n&&b.extend(o,n),o.source&&(o.source.endpoint?o.sourceEndpoint=o.source:o.source=i.getDOMElement(o.source)),o.target&&(o.target.endpoint?o.targetEndpoint=o.target:o.target=i.getDOMElement(o.target)),e.uuids&&(o.sourceEndpoint=k(e.uuids[0]),o.targetEndpoint=k(e.uuids[1])),o.sourceEndpoint&&o.sourceEndpoint.isFull())return void t.log(i,"could not add connection; source endpoint is full");if(o.targetEndpoint&&o.targetEndpoint.isFull())return void t.log(i,"could not add connection; target endpoint is full");if(!o.type&&o.sourceEndpoint&&(o.type=o.sourceEndpoint.connectionType),o.sourceEndpoint&&o.sourceEndpoint.connectorOverlays){o.overlays=o.overlays||[];for(var r=0,s=o.sourceEndpoint.connectorOverlays.length;s>r;r++)o.overlays.push(o.sourceEndpoint.connectorOverlays[r])}!o["pointer-events"]&&o.sourceEndpoint&&o.sourceEndpoint.connectorPointerEvents&&(o["pointer-events"]=o.sourceEndpoint.connectorPointerEvents);var a,l,u;if(o.target&&!o.target.endpoint&&!o.targetEndpoint&&!o.newConnection&&(a=K(o.target),l=this.targetEndpointDefinitions[a])){if(!l.enabled)return;l.isTarget=!0,u=null!=l.endpoint&&l.endpoint._jsPlumb?l.endpoint:i.addEndpoint(o.target,l.def),l.uniqueEndpoint&&(l.endpoint=u),o.targetEndpoint=u,u._doNotDeleteOnDetach=!1,u._deleteOnDetach=!0}if(o.source&&!o.source.endpoint&&!o.sourceEndpoint&&!o.newConnection&&(a=K(o.source),l=this.sourceEndpointDefinitions[a])){if(!l.enabled)return;u=null!=l.endpoint&&l.endpoint._jsPlumb?l.endpoint:i.addEndpoint(o.source,l.def),l.uniqueEndpoint&&(l.endpoint=u),o.sourceEndpoint=u,u._doNotDeleteOnDetach=!1,u._deleteOnDetach=!0}return o}.bind(i),F=function(t){var e=i.Defaults.ConnectionType||i.getDefaultConnectionType();i.Defaults.EndpointType||b.Endpoint,t._jsPlumb=i,t.newConnection=F,t.newEndpoint=V,t.endpointsByUUID=y,t.endpointsByElement=g,t.finaliseConnection=B;var n=new e(t);return n.id="con_"+T(),W("click","click",n),W("dblclick","dblclick",n),W("contextmenu","contextmenu",n),n.isDetachable()&&(n.endpoints[0].initDraggable(),n.endpoints[1].initDraggable()),n},B=function(t,e,n,o){if(e=e||{},t.suspendedEndpoint||m.push(t),(null==t.suspendedEndpoint||o)&&i.anchorManager.newConnection(t),N(t.source),!e.doNotFireConnectionEvent&&e.fireEvent!==!1){var r={connection:t,source:t.source,target:t.target,sourceId:t.sourceId,targetId:t.targetId,sourceEndpoint:t.endpoints[0],targetEndpoint:t.endpoints[1]};i.fire("connection",r,n)}},W=function(t,e,n){n.bind(t,function(t,o){i.fire(e,n,o)})},V=function(t){var e=i.Defaults.EndpointType||b.Endpoint,n=b.extend({},t);n._jsPlumb=i,n.newConnection=F,n.newEndpoint=V,n.endpointsByUUID=y,n.endpointsByElement=g,n.finaliseConnection=B,n.fireDetachEvent=J,n.fireMoveEvent=te,n.floatingConnections=x,n.elementId=K(n.source);var o=new e(n);return o.id="ep_"+T(),W("click","endpointClick",o),W("dblclick","endpointDblClick",o),W("contextmenu","contextmenu",o),jsPlumbAdapter.headless||i.dragManager.endpointAdded(n.source),o},H=function(t,e,n){var o=g[t];if(o&&o.length)for(var i=0,r=o.length;r>i;i++){for(var s=0,a=o[i].connections.length;a>s;s++){var l=e(o[i].connections[s]);if(l)return}n&&n(o[i])}},$=function(t,e){return A(t,function(t,n){E[n]=e,this.isDragSupported(t)&&this.setElementDraggable(t,e)})},Y=function(t,e,n){e="block"===e;var o=null;n&&(o=e?function(t){t.setVisible(!0,!0,!0)}:function(t){t.setVisible(!1,!0,!0)});var i=c(t);H(i.id,function(t){if(e&&n){var o=t.sourceId===i.id?1:0;t.endpoints[o].isVisible()&&t.setVisible(!0)}else t.setVisible(e)},o)},z=function(t){return A(t,function(t,e){var n=null==E[e]?!1:E[e];return n=!n,E[e]=n,this.setDraggable(t,n),n})},X=function(t,e){var n=null;e&&(n=function(t){var e=t.isVisible();t.setVisible(!e)}),H(t,function(t){var e=t.isVisible();t.setVisible(!e)},n)},q=this.updateOffset=function(t){var n,o=t.timestamp,r=t.recalc,s=t.offset,a=t.elId;return D&&!o&&(o=j),!r&&o&&o===P[a]?{o:t.offset||C[a],s:w[a]}:(r||!s?(n=document.getElementById(a),null!=n&&(w[a]=i.getSize(n),C[a]=e(n,i),P[a]=o)):(C[a]=s,null==w[a]&&(n=document.getElementById(a),null!=n&&(w[a]=i.getSize(n))),P[a]=o),C[a]&&!C[a].right&&(C[a].right=C[a].left+w[a][0],C[a].bottom=C[a].top+w[a][1],C[a].width=w[a][0],C[a].height=w[a][1],C[a].centerx=C[a].left+C[a].width/2,C[a].centery=C[a].top+C[a].height/2),{o:C[a],s:w[a]})},G=function(t){var e=C[t];return e?{o:e,s:w[t]}:q({elId:t})},K=function(t,e,n){if(jsPlumbUtil.isString(t))return t;if(null==t)return null;var o=i.getAttribute(t,"id");return o&&"undefined"!==o||(2==arguments.length&&void 0!==arguments[1]?o=e:(1==arguments.length||3==arguments.length&&!arguments[2])&&(o="jsPlumb_"+r+"_"+T()),n||i.setAttribute(t,"id",o)),o};this.setConnectionBeingDragged=function(t){_=t},this.isConnectionBeingDragged=function(){return _},this.connectorClass="_jsPlumb_connector",this.hoverClass="_jsPlumb_hover",this.endpointClass="_jsPlumb_endpoint",this.endpointConnectedClass="_jsPlumb_endpoint_connected",this.endpointFullClass="_jsPlumb_endpoint_full",this.endpointDropAllowedClass="_jsPlumb_endpoint_drop_allowed",this.endpointDropForbiddenClass="_jsPlumb_endpoint_drop_forbidden",this.overlayClass="_jsPlumb_overlay",this.draggingClass="_jsPlumb_dragging",this.elementDraggingClass="_jsPlumb_element_dragging",this.sourceElementDraggingClass="_jsPlumb_source_element_dragging",this.targetElementDraggingClass="_jsPlumb_target_element_dragging",this.endpointAnchorClassPrefix="_jsPlumb_endpoint_anchor",this.hoverSourceClass="_jsPlumb_source_hover",this.hoverTargetClass="_jsPlumb_target_hover",this.dragSelectClass="_jsPlumb_drag_select",this.Anchors={},this.Connectors={svg:{},vml:{}},this.Endpoints={svg:{},vml:{}},this.Overlays={svg:{},vml:{}},this.ConnectorRenderers={},this.SVG="svg",this.VML="vml",this.addEndpoint=function(e,n,o){o=o||{};var r=b.extend({},o);b.extend(r,n),r.endpoint=r.endpoint||i.Defaults.Endpoint,r.paintStyle=r.paintStyle||i.Defaults.EndpointStyle,e=I(e);for(var s=[],a=t.isArray(e)||null!=e.length&&!t.isString(e)?e:[e],l=0,u=a.length;u>l;l++){var c=i.getDOMElement(a[l]),p=K(c);r.source=c,ge(r.source),q({elId:p,timestamp:j});var d=V(r);r.parentAnchor&&(d.parentAnchor=r.parentAnchor),t.addToList(g,p,d);var h=C[p],f=w[p],m=d.anchor.compute({xy:[h.left,h.top],wh:f,element:d,timestamp:j}),v={anchorLoc:m,timestamp:j};D&&(v.recalc=!1),D||d.paint(v),s.push(d),d._doNotDeleteOnDetach=!0}return 1==s.length?s[0]:s},this.addEndpoints=function(e,n,o){for(var r=[],s=0,a=n.length;a>s;s++){var l=i.addEndpoint(e,n[s],o);t.isArray(l)?Array.prototype.push.apply(r,l):r.push(l)}return r},this.animate=function(e,n,o){o=o||{};var r=this.getElementObject(e),s=this.getDOMElement(e),a=K(s),l=b.animEvents.step,u=b.animEvents.complete;o[l]=t.wrap(o[l],function(){i.repaint(a)}),o[u]=t.wrap(o[u],function(){i.repaint(a)}),i.doAnimate(r,n,o)},this.checkCondition=function(e,n){var o=i.getListener(e),r=!0;if(o&&o.length>0)try{for(var s=0,a=o.length;a>s;s++)r=r&&o[s](n)}catch(l){t.log(i,"cannot check condition ["+e+"]"+l)}return r},this.checkASyncCondition=function(e,n,o,r){var s=i.getListener(e);if(s&&s.length>0)try{s[0](n,o,r)}catch(a){t.log(i,"cannot asynchronously check condition ["+e+"]"+a)}},this.connect=function(t,e){var n,o=U(t,e);return o&&(ge(o.source),n=F(o),B(n,o)),n};var Q=[{el:"source",elId:"sourceId",epDefs:"sourceEndpointDefinitions"},{el:"target",elId:"targetId",epDefs:"targetEndpointDefinitions"}],Z=function(t,e,n,o){var i,r,s,a=Q[n],l=t[a.elId],u=(t[a.el],t.endpoints[n]),c={index:n,originalSourceId:0===n?l:t.sourceId,newSourceId:t.sourceId,originalTargetId:1==n?l:t.targetId,newTargetId:t.targetId,connection:t};if(e.constructor==b.Endpoint)i=e,i.addConnection(t);else if(r=K(e),s=this[a.epDefs][r],r===t[a.elId])i=null;else if(s){if(!s.enabled)return;i=null!=s.endpoint&&s.endpoint._jsPlumb?s.endpoint:this.addEndpoint(e,s.def),s.uniqueEndpoint&&(s.endpoint=i),i._doNotDeleteOnDetach=!1,i._deleteOnDetach=!0,i.addConnection(t)}else i=t.makeEndpoint(0===n,e,r),i._doNotDeleteOnDetach=!1,i._deleteOnDetach=!0;return null!=i&&(u.detachFromConnection(t),t.endpoints[n]=i,t[a.el]=i.element,t[a.elId]=i.elementId,c[0===n?"newSourceId":"newTargetId"]=i.elementId,te(c),o||t.repaint()),c}.bind(this);this.setSource=function(t,e,n){var o=Z(t,e,0,n);this.anchorManager.sourceChanged(o.originalSourceId,o.newSourceId,t)},this.setTarget=function(t,e,n){var o=Z(t,e,1,n);this.anchorManager.updateOtherEndpoint(o.originalSourceId,o.originalTargetId,o.newTargetId,t)},this.deleteEndpoint=function(t,e){var n=i.setSuspendDrawing(!0),o="string"==typeof t?y[t]:t;return o&&i.deleteObject({endpoint:o}),n||i.setSuspendDrawing(!1,e),i},this.deleteEveryEndpoint=function(){var t=i.setSuspendDrawing(!0);for(var e in g){var n=g[e];if(n&&n.length)for(var o=0,r=n.length;r>o;o++)i.deleteEndpoint(n[o],!0)}return g={},y={},i.anchorManager.reset(),i.dragManager.reset(),t||i.setSuspendDrawing(!1),i};var J=function(t,e,n){var o=i.Defaults.ConnectionType||i.getDefaultConnectionType(),r=t.constructor==o,s=r?{connection:t,source:t.source,target:t.target,sourceId:t.sourceId,targetId:t.targetId,sourceEndpoint:t.endpoints[0],targetEndpoint:t.endpoints[1]}:t;e&&i.fire("connectionDetached",s,n),i.anchorManager.connectionDetached(s)},te=function(t,e){i.fire("connectionMoved",t,e)};this.unregisterEndpoint=function(t){t._jsPlumb.uuid&&(y[t._jsPlumb.uuid]=null),i.anchorManager.deleteEndpoint(t);for(var e in g){var n=g[e];if(n){for(var o=[],r=0,s=n.length;s>r;r++)n[r]!=t&&o.push(n[r]);g[e]=o}g[e].length<1&&delete g[e]}},this.detach=function(){if(0!==arguments.length){var t=i.Defaults.ConnectionType||i.getDefaultConnectionType(),e=arguments[0].constructor==t,n=2==arguments.length&&e?arguments[1]||{}:arguments[0],o=n.fireEvent!==!1,r=n.forceDetach,s=e?arguments[0]:n.connection;if(s)(r||jsPlumbUtil.functionChain(!0,!1,[[s.endpoints[0],"isDetachAllowed",[s]],[s.endpoints[1],"isDetachAllowed",[s]],[s,"isDetachAllowed",[s]],[i,"checkCondition",["beforeDetach",s]]]))&&s.endpoints[0].detach(s,!1,!0,o);else{var a=b.extend({},n);if(a.uuids)k(a.uuids[0]).detachFrom(k(a.uuids[1]),o);else if(a.sourceEndpoint&&a.targetEndpoint)a.sourceEndpoint.detachFrom(a.targetEndpoint);else{var l=K(i.getDOMElement(a.source)),u=K(i.getDOMElement(a.target));H(l,function(t){(t.sourceId==l&&t.targetId==u||t.targetId==l&&t.sourceId==u)&&i.checkCondition("beforeDetach",t)&&t.endpoints[0].detach(t,!1,!0,o)})}}}},this.detachAllConnections=function(t,e){e=e||{},t=i.getDOMElement(t);var n=K(t),o=g[n];if(o&&o.length)for(var r=0,s=o.length;s>r;r++)o[r].detachAll(e.fireEvent!==!1);return i},this.detachEveryConnection=function(t){return t=t||{},i.doWhileSuspended(function(){for(var e in g){var n=g[e];if(n&&n.length)for(var o=0,i=n.length;i>o;o++)n[o].detachAll(t.fireEvent!==!1)}m.splice(0)}),i},this.deleteObject=function(t){var e={endpoints:{},connections:{},endpointCount:0,connectionCount:0},n=t.fireEvent!==!1,o=t.deleteAttachedObjects!==!1,r=function(t){if(null!=t&&null==e.connections[t.id]&&(null!=t._jsPlumb&&t.setHover(!1),e.connections[t.id]=t,e.connectionCount++,o))for(var n=0;n<t.endpoints.length;n++)t.endpoints[n]._deleteOnDetach&&s(t.endpoints[n])},s=function(t){if(null!=t&&null==e.endpoints[t.id]&&(null!=t._jsPlumb&&t.setHover(!1),e.endpoints[t.id]=t,e.endpointCount++,o))for(var n=0;n<t.connections.length;n++){var i=t.connections[n];r(i)}};t.connection?r(t.connection):s(t.endpoint);for(var a in e.connections){var l=e.connections[a];l._jsPlumb&&(jsPlumbUtil.removeWithFunction(m,function(t){return l.id==t.id}),J(l,n,t.originalEvent),l.endpoints[0].detachFromConnection(l),l.endpoints[1].detachFromConnection(l),l.cleanup(),l.destroy())}for(var u in e.endpoints){var c=e.endpoints[u];c._jsPlumb&&(i.unregisterEndpoint(c),c.cleanup(),c.destroy())}return e},this.draggable=function(t,e){var n,o,r;if("object"==typeof t&&t.length)for(n=0,o=t.length;o>n;n++)r=i.getDOMElement(t[n]),r&&L(r,!0,e);else if(t._nodes)for(n=0,o=t._nodes.length;o>n;n++)r=i.getDOMElement(t._nodes[n]),r&&L(r,!0,e);else r=i.getDOMElement(t),r&&L(r,!0,e);return i};var ee=function(t,e,n,o){for(var i=0,r=t.length;r>i;i++)t[i][e].apply(t[i],n);return o(t)},ne=function(t,e,n){for(var o=[],i=0,r=t.length;r>i;i++)o.push([t[i][e].apply(t[i],n),t[i]]);return o},oe=function(t,e,n){return function(){return ee(t,e,arguments,n)}},ie=function(t,e){return function(){return ne(t,e,arguments)}},re=function(t,e){var n=[];if(t)if("string"==typeof t){if("*"===t)return t;n.push(t)}else if(e)n=t;else if(t.length)for(var o=0,i=t.length;i>o;o++)n.push(c(t[o]).id);else n.push(c(t).id);return n},se=function(t,e,n){return"*"===t?!0:t.length>0?-1!=jsPlumbUtil.indexOf(t,e):!n};this.getConnections=function(t,e){t?t.constructor==String&&(t={scope:t}):t={};for(var n=t.scope||i.getDefaultScope(),o=re(n,!0),r=re(t.source),s=re(t.target),a=!e&&o.length>1?{}:[],l=function(t,n){if(!e&&o.length>1){var i=a[t];null==i&&(i=a[t]=[]),i.push(n)}else a.push(n)},u=0,c=m.length;c>u;u++){var p=m[u];se(o,p.scope)&&se(r,p.sourceId)&&se(s,p.targetId)&&l(p.scope,p)}return a};var ae=function(t,e){return function(n){for(var o=0,i=t.length;i>o;o++)n(t[o]);return e(t)}},le=function(t){return function(e){return t[e]}},ue=function(t,e){var n,o,i={length:t.length,each:ae(t,e),get:le(t)},r=["setHover","removeAllOverlays","setLabel","addClass","addOverlay","removeOverlay","removeOverlays","showOverlay","hideOverlay","showOverlays","hideOverlays","setPaintStyle","setHoverPaintStyle","setSuspendEvents","setParameter","setParameters","setVisible","repaint","addType","toggleType","removeType","removeClass","setType","bind","unbind"],s=["getLabel","getOverlay","isHover","getParameter","getParameters","getPaintStyle","getHoverPaintStyle","isVisible","hasType","getType","isSuspendEvents"];for(n=0,o=r.length;o>n;n++)i[r[n]]=oe(t,r[n],e);for(n=0,o=s.length;o>n;n++)i[s[n]]=ie(t,s[n]);return i},ce=function(t){var e=ue(t,ce);return b.extend(e,{setDetachable:oe(t,"setDetachable",ce),setReattach:oe(t,"setReattach",ce),setConnector:oe(t,"setConnector",ce),detach:function(){for(var e=0,n=t.length;n>e;e++)i.detach(t[e])},isDetachable:ie(t,"isDetachable"),isReattach:ie(t,"isReattach")})},pe=function(t){var e=ue(t,pe);return b.extend(e,{setEnabled:oe(t,"setEnabled",pe),setAnchor:oe(t,"setAnchor",pe),isEnabled:ie(t,"isEnabled"),detachAll:function(){for(var e=0,n=t.length;n>e;e++)t[e].detachAll()},remove:function(){for(var e=0,n=t.length;n>e;e++)i.deleteObject({endpoint:t[e]})}})};this.select=function(t){return t=t||{},t.scope=t.scope||"*",ce(t.connections||i.getConnections(t,!0))},this.selectEndpoints=function(t){t=t||{},t.scope=t.scope||"*";var e=!t.element&&!t.source&&!t.target,n=e?"*":re(t.element),o=e?"*":re(t.source),i=e?"*":re(t.target),r=re(t.scope,!0),s=[];for(var a in g){var l=se(n,a,!0),u=se(o,a,!0),c="*"!=o,p=se(i,a,!0),d="*"!=i;if(l||u||p)t:for(var h=0,f=g[a].length;f>h;h++){var m=g[a][h];if(se(r,m.scope,!0)){var v=c&&o.length>0&&!m.isSource,y=d&&i.length>0&&!m.isTarget;if(v||y)continue t;s.push(m)}}}return pe(s)},this.getAllConnections=function(){return m},this.getDefaultScope=function(){return S},this.getEndpoint=k,this.getEndpoints=function(t){return g[c(t).id]},this.getDefaultEndpointType=function(){return b.Endpoint},this.getDefaultConnectionType=function(){return b.Connection},this.getId=K,this.getOffset=function(t){return C[t],q({elId:t})},this.appendElement=R;var de=!1;this.isHoverSuspended=function(){return de},this.setHoverSuspended=function(t){de=t};var he=function(t){return function(){return jsPlumbAdapter.isRenderModeAvailable(t)}};this.isSVGAvailable=he("svg"),this.isVMLAvailable=he("vml"),this.hide=function(t,e){return Y(t,"none",e),i},this.idstamp=T,this.connectorsInitialized=!1;var fe=[],me=["svg","vml"];this.registerConnectorType=function(t,e){fe.push([t,e])};var ge=function(t){if(!d&&t){var e=i.getDOMElement(t);e.offsetParent&&(d=e.offsetParent)}},ve=function(){i.Defaults.Container&&(d=i.getDOMElement(i.Defaults.Container))};this.init=function(){var t=function(t,e,n){b.Connectors[t][e]=function(){n.apply(this,arguments),b.ConnectorRenderers[t].apply(this,arguments)},jsPlumbUtil.extend(b.Connectors[t][e],[n,b.ConnectorRenderers[t]])};if(!b.connectorsInitialized){for(var e=0;e<fe.length;e++)for(var n=0;n<me.length;n++)t(me[n],fe[e][1],fe[e][0]);b.connectorsInitialized=!0
}f||(ve(),i.anchorManager=new b.AnchorManager({jsPlumbInstance:i}),i.setRenderMode(i.Defaults.RenderMode),f=!0,i.fire("ready",i))}.bind(this),this.log=h,this.jsPlumbUIComponent=u,this.makeAnchor=function(){var e,n=function(t,e){if(b.Anchors[t])return new b.Anchors[t](e);if(!i.Defaults.DoNotThrowErrors)throw{msg:"jsPlumb: unknown anchor type '"+t+"'"}};if(0===arguments.length)return null;var o=arguments[0],r=arguments[1],s=arguments[2],a=null;if(o.compute&&o.getOrientation)return o;if("string"==typeof o)a=n(arguments[0],{elementId:r,jsPlumbInstance:i});else if(t.isArray(o))if(t.isArray(o[0])||t.isString(o[0]))2==o.length&&t.isObject(o[1])?t.isString(o[0])?(e=b.extend({elementId:r,jsPlumbInstance:i},o[1]),a=n(o[0],e)):(e=b.extend({elementId:r,jsPlumbInstance:i,anchors:o[0]},o[1]),a=new b.DynamicAnchor(e)):a=new b.DynamicAnchor({anchors:o,selector:null,elementId:r,jsPlumbInstance:s});else{var l={x:o[0],y:o[1],orientation:o.length>=4?[o[2],o[3]]:[0,0],offsets:o.length>=6?[o[4],o[5]]:[0,0],elementId:r,jsPlumbInstance:s,cssClass:7==o.length?o[6]:null};a=new b.Anchor(l),a.clone=function(){return new b.Anchor(l)}}return a.id||(a.id="anchor_"+T()),a},this.makeAnchors=function(e,n,o){for(var r=[],s=0,a=e.length;a>s;s++)"string"==typeof e[s]?r.push(b.Anchors[e[s]]({elementId:n,jsPlumbInstance:o})):t.isArray(e[s])&&r.push(i.makeAnchor(e[s],n,o));return r},this.makeDynamicAnchor=function(t,e){return new b.DynamicAnchor({anchors:t,selector:e,elementId:null,jsPlumbInstance:i})},this.targetEndpointDefinitions={};var ye=function(t,e,n){t.paintStyle=t.paintStyle||n.Defaults.EndpointStyles[e]||n.Defaults.EndpointStyle,t.hoverPaintStyle=t.hoverPaintStyle||n.Defaults.EndpointHoverStyles[e]||n.Defaults.EndpointHoverStyle,t.anchor=t.anchor||n.Defaults.Anchors[e]||n.Defaults.Anchor,t.endpoint=t.endpoint||n.Defaults.Endpoints[e]||n.Defaults.Endpoint};this.sourceEndpointDefinitions={};var be=function(t,e,n,o,i){for(var r=t.target||t.srcElement,s=!1,a=o.getSelector(e,n),l=0;l<a.length;l++)if(a[l]==r){s=!0;break}return i?!s:s};this.makeTarget=function(n,o,r){var s=b.extend({_jsPlumb:this},r);b.extend(s,o),ye(s,1,this);var a=s.scope||i.Defaults.Scope,l=!(s.deleteEndpointsOnDetach===!1),p=s.maxConnections||-1,d=s.onMaxConnections,h=function(n){var o=c(n),i=o.id,r=new u(s),h=b.extend({},s.dropOptions||{});ge(i),this.targetEndpointDefinitions[i]={def:s,uniqueEndpoint:s.uniqueEndpoint,maxConnections:p,enabled:!0};var f=function(){this.currentlyDragging=!1;var t=this.getDropEvent(arguments),n=this.select({target:i}).length,a=this.getDOMElement(this.getDragObject(arguments)),u=this.getAttribute(a,"dragId"),c=this.getAttribute(a,"originalScope"),p=x[u],h=p.endpoints[0].isFloating()?0:1,f=p.endpoints[0],m=(s.endpoint?b.extend({},s.endpoint):{},this.targetEndpointDefinitions[i]);if(!m.enabled||m.maxConnections>0&&n>=m.maxConnections)return d&&d({element:o.el,connection:p},t),!1;if(f.anchor.locked=!1,c&&this.setDragScope(a,c),null==p.suspendedEndpoint&&!p.pending)return!1;var g=r.isDropAllowed(0===h?i:p.sourceId,0===h?p.targetId:i,p.scope,p,null,0===h?o.el:p.source,0===h?p.target:o.el);if(p.suspendedEndpoint){p[h?"targetId":"sourceId"]=p.suspendedEndpoint.elementId,p[h?"target":"source"]=p.suspendedEndpoint.element,p.endpoints[h]=p.suspendedEndpoint;var v=(p.suspendedEndpoint.getElement(),p.suspendedEndpoint.elementId);te({index:h,originalSourceId:0===h?v:p.sourceId,newSourceId:0===h?i:p.sourceId,originalTargetId:1==h?v:p.targetId,newTargetId:1==h?i:p.targetId,connection:p},t)}if(g){var y=this.getElementObject(o.el),C=m.endpoint;if((null==C||null==C._jsPlumb)&&(C=this.addEndpoint(y,s)),s.uniqueEndpoint&&(m.endpoint=C),C._doNotDeleteOnDetach=!1,C._deleteOnDetach=!0,null!=C.anchor.positionFinder){var P=this.getUIPosition(arguments,this.getZoom()),E=e(y,this),_=this.getSize(y),w=C.anchor.positionFinder(P,E,_,C.anchor.constructorParams);C.anchor.x=w[0],C.anchor.y=w[1]}p[h?"target":"source"]=C.element,p[h?"targetId":"sourceId"]=C.elementId,p.endpoints[h].detachFromConnection(p),p.endpoints[h]._deleteOnDetach&&(p.endpoints[h].deleteAfterDragStop=!0),C.addConnection(p),p.endpoints[h]=C,p.deleteEndpointsOnDetach=l,1==h?this.anchorManager.updateOtherEndpoint(p.sourceId,p.suspendedElementId,p.targetId,p):this.anchorManager.sourceChanged(p.suspendedEndpoint.elementId,p.sourceId,p),B(p,null,t),p.pending=!1}else p.suspendedEndpoint&&(p.isReattach()?(p.setHover(!1),p.floatingAnchorIndex=null,p.suspendedEndpoint.addConnection(p),this.repaint(f.elementId)):f.detach(p,!1,!0,!0,t))}.bind(this),m=b.dragEvents.drop;h.scope=h.scope||a,h[m]=t.wrap(h[m],f),this.initDroppable(this.getElementObject(o.el),h,!0)}.bind(this);n=I(n);for(var f=n.length&&n.constructor!=String?n:[n],m=0,g=f.length;g>m;m++)h(f[m]);return this},this.unmakeTarget=function(t,e){var n=c(t);return b.destroyDroppable(n.el),e||delete this.targetEndpointDefinitions[n.id],this},this.makeSource=function(n,o,r){var s=b.extend({},r);b.extend(s,o),ye(s,0,this);var a=s.maxConnections||-1,u=s.onMaxConnections,p=function(n){var o=n.id,r=this.getElementObject(n.el),c=this.getDOMElement(r),p=function(){return null==s.parent?null:"parent"===s.parent?n.el.parentNode:i.getDOMElement(s.parent)},h=null!=s.parent?this.getId(p()):o;ge(h),this.sourceEndpointDefinitions[h]={def:s,uniqueEndpoint:s.uniqueEndpoint,maxConnections:a,enabled:!0};var f=b.dragEvents.stop,m=b.dragEvents.drag,g=b.extend({},s.dragOptions||{}),v=g.drag,y=g.stop,C=null,P=!1;g.scope=g.scope||s.scope,g[m]=t.wrap(g[m],function(){v&&v.apply(this,arguments),P=!1}),g[f]=t.wrap(g[f],function(){if(y&&y.apply(this,arguments),this.currentlyDragging=!1,null!=C._jsPlumb){var t=s.anchor||this.Defaults.Anchor,n=C.anchor,i=C.connections[0],r=this.makeAnchor(t,o,this),a=C.element;if(null!=r.positionFinder){var l=e(a,this),u=this.getSize(a),c={left:l.left+n.x*u[0],top:l.top+n.y*u[1]},h=r.positionFinder(c,l,u,r.constructorParams);r.x=h[0],r.y=h[1]}if(C.setAnchor(r,!0),s.parent){var f=p();if(f){var m=s.container||d;C.setElement(f,m)}}C.repaint(),this.repaint(C.elementId),this.repaint(i.targetId)}}.bind(this));var x=function(t){var e=this.getOriginalEvent(t),n=this.sourceEndpointDefinitions[h];if(o=this.getId(this.getDOMElement(r)),n.enabled){if(s.filter){var d=jsPlumbUtil.isString(s.filter)?be(e,r,s.filter,this,s.filterExclude):s.filter(e,r);if(d===!1)return}var f=this.select({source:h}).length;if(n.maxConnections>=0&&f>=n.maxConnections)return u&&u({element:r,maxConnections:a},t),!1;var m=jsPlumbAdapter.getPositionOnElement(e,c,l),v=m;s.parent&&(v=jsPlumbAdapter.getPositionOnElement(e,p(),l));var y={};b.extend(y,s),y.isSource=!0,y.anchor=[m[0],m[1],0,0],y.parentAnchor=[v[0],v[1],0,0],y.dragOptions=g,C=this.addEndpoint(o,y),P=!0,C.endpointWillMoveTo=s.parent?p():null,C._doNotDeleteOnDetach=!1,C._deleteOnDetach=!0;var x=function(){P&&(P=!1,i.deleteEndpoint(C))};i.registerListener(C.canvas,"mouseup",x),i.registerListener(r,"mouseup",x),i.trigger(C.canvas,"mousedown",t),jsPlumbUtil.consume(t)}}.bind(this);this.registerListener(r,"mousedown",x),this.sourceEndpointDefinitions[h].trigger=x,s.filter&&jsPlumbUtil.isString(s.filter)&&i.setDragFilter(r,s.filter)}.bind(this);n=I(n);for(var h=n.length&&n.constructor!=String?n:[n],f=0,m=h.length;m>f;f++)p(c(h[f]));return this},this.unmakeSource=function(t,e){var n=c(t),o=this.sourceEndpointDefinitions[n.id].trigger;return o&&i.unregisterListener(n.el,"mousedown",o),e||delete this.sourceEndpointDefinitions[n.id],this},this.unmakeEverySource=function(){for(var t in this.sourceEndpointDefinitions)i.unmakeSource(t,!0);return this.sourceEndpointDefinitions={},this},this.unmakeEveryTarget=function(){for(var t in this.targetEndpointDefinitions)i.unmakeTarget(t,!0);return this.targetEndpointDefinitions={},this};var Ce=function(e,n,o,i){var r="source"==e?this.sourceEndpointDefinitions:this.targetEndpointDefinitions;if(n=I(n),t.isString(n))r[n].enabled=i?!r[n].enabled:o;else if(n.length)for(var s=0,a=n.length;a>s;s++){var l=c(n[s]);r[l.id]&&(r[l.id].enabled=i?!r[l.id].enabled:o)}else{var u=c(n).id;r[u].enabled=i?!r[u].enabled:o}return this}.bind(this),Pe=function(e,n){return e=I(e),t.isString(e)||!e.length?n.apply(this,[e]):e.length?n.apply(this,[e[0]]):void 0}.bind(this);this.toggleSourceEnabled=function(t){return Ce("source",t,null,!0),this.isSourceEnabled(t)},this.setSourceEnabled=function(t,e){return Ce("source",t,e)},this.isSource=function(t){return Pe(t,function(t){return null!=this.sourceEndpointDefinitions[c(t).id]})},this.isSourceEnabled=function(t){return Pe(t,function(t){var e=this.sourceEndpointDefinitions[c(t).id];return e&&e.enabled===!0})},this.toggleTargetEnabled=function(t){return Ce("target",t,null,!0),this.isTargetEnabled(t)},this.isTarget=function(t){return Pe(t,function(t){return null!=this.targetEndpointDefinitions[c(t).id]})},this.isTargetEnabled=function(t){return Pe(t,function(t){var e=this.targetEndpointDefinitions[c(t).id];return e&&e.enabled===!0})},this.setTargetEnabled=function(t,e){return Ce("target",t,e)},this.ready=function(t){i.bind("ready",t)},this.repaint=function(t,e,n){if("object"==typeof t&&t.length)for(var o=0,r=t.length;r>o;o++)N(t[o],e,n);else N(t,e,n);return i},this.repaintEverything=function(t){var e=n();for(var o in g)N(o,null,e,t);return this},this.removeAllEndpoints=function(t,e){var n=function(t){var o,r,s=c(t),a=g[s.id];if(a)for(o=0,r=a.length;r>o;o++)i.deleteEndpoint(a[o]);if(delete g[s.id],e&&s.el&&3!=s.el.nodeType&&8!=s.el.nodeType)for(o=0,r=s.el.childNodes.length;r>o;o++)n(s.el.childNodes[o])};return n(t),this},this.remove=function(t,e){var n=c(t);return i.doWhileSuspended(function(){i.removeAllEndpoints(n.id,!0),i.dragManager.elementRemoved(n.id),delete x[n.id],i.anchorManager.clearFor(n.id),i.anchorManager.removeFloatingConnection(n.id)},e===!1),n.el&&i.removeElement(n.el),i};var xe={},Ee=function(){for(var t in xe)for(var e=0,n=xe[t].length;n>e;e++){var o=xe[t][e];i.off(o.el,o.event,o.listener)}xe={}};this.registerListener=function(t,e,n){i.on(t,e,n),jsPlumbUtil.addToList(xe,e,{el:t,event:e,listener:n})},this.unregisterListener=function(t,e,n){i.off(t,e,n),jsPlumbUtil.removeWithFunction(xe,function(t){return t.type==e&&t.listener==n})},this.reset=function(){i.deleteEveryEndpoint(),i.unbind(),this.targetEndpointDefinitions={},this.sourceEndpointDefinitions={},m.splice(0),Ee(),i.anchorManager.reset(),jsPlumbAdapter.headless||i.dragManager.reset()},this.setDefaultScope=function(t){return S=t,i},this.setDraggable=$,this.setId=function(t,e,n){var o;jsPlumbUtil.isString(t)?o=t:(t=this.getDOMElement(t),o=this.getId(t));var i=this.getConnections({source:o,scope:"*"},!0),r=this.getConnections({target:o,scope:"*"},!0);e=""+e,n?t=this.getDOMElement(e):(t=this.getDOMElement(o),this.setAttribute(t,"id",e)),g[e]=g[o]||[];for(var s=0,a=g[e].length;a>s;s++)g[e][s].setElementId(e),g[e][s].setReferenceElement(t);delete g[o],this.anchorManager.changeId(o,e),this.dragManager&&this.dragManager.changeId(o,e);var l=function(n,o,i){for(var r=0,s=n.length;s>r;r++)n[r].endpoints[o].setElementId(e),n[r].endpoints[o].setReferenceElement(t),n[r][i+"Id"]=e,n[r][i]=t};l(i,0,"source"),l(r,1,"target"),this.repaint(e)},this.setDebugLog=function(t){h=t},this.setSuspendDrawing=function(t,e){var n=D;return D=t,j=t?(new Date).getTime():null,e&&this.repaintEverything(),n},this.isSuspendDrawing=function(){return D},this.getSuspendedAt=function(){return j},this.doWhileSuspended=function(e,n){var o=this.isSuspendDrawing();o||this.setSuspendDrawing(!0);try{e()}catch(i){t.log("Function run while suspended failed",i)}o||this.setSuspendDrawing(!1,!n)},this.getOffset=function(t){return C[t]},this.getCachedData=G,this.timestamp=n,this.setRenderMode=function(t){if(t!==b.SVG&&t!==b.VML)throw new TypeError("Render mode ["+t+"] not supported");return M=jsPlumbAdapter.setRenderMode(t)},this.getRenderMode=function(){return M},this.show=function(t,e){return Y(t,"block",e),i},this.toggleVisible=X,this.toggleDraggable=z,this.addListener=this.bind,jsPlumbAdapter.headless||(i.dragManager=jsPlumbAdapter.getDragManager(i),i.recalculateOffsets=i.dragManager.updateOffsets)};jsPlumbUtil.extend(y,jsPlumbUtil.EventGenerator,{setAttribute:function(t,e,n){this.setAttribute(t,e,n)},getAttribute:function(t,e){return this.getAttribute(b.getDOMElement(t),e)},registerConnectionType:function(t,e){this._connectionTypes[t]=b.extend({},e)},registerConnectionTypes:function(t){for(var e in t)this._connectionTypes[e]=b.extend({},t[e])},registerEndpointType:function(t,e){this._endpointTypes[t]=b.extend({},e)},registerEndpointTypes:function(t){for(var e in t)this._endpointTypes[e]=b.extend({},t[e])},getType:function(t,e){return"connection"===e?this._connectionTypes[t]:this._endpointTypes[t]},setIdChanged:function(t,e){this.setId(t,e,!0)},setParent:function(t,e){var n=this.getElementObject(t),o=this.getDOMElement(n),i=this.getId(o),r=this.getElementObject(e),s=this.getDOMElement(r),a=this.getId(s);o.parentNode.removeChild(o),s.appendChild(o),this.dragManager.setParent(n,i,r,a)},getSize:function(t){return[t.offsetWidth,t.offsetHeight]},getWidth:function(t){return t.offsetWidth},getHeight:function(t){return t.offsetHeight},extend:function(t,e,n){var o;if(n)for(o=0;o<n.length;o++)t[n[o]]=e[n[o]];else for(o in e)t[o]=e[o];return t}},jsPlumbAdapter);var b=new y;"undefined"!=typeof window&&(window.jsPlumb=b),b.getInstance=function(t){var e=new y(t);return e.init(),e},"function"==typeof define&&(define("jsplumb",[],function(){return b}),define("jsplumbinstance",[],function(){return b.getInstance()})),"undefined"!=typeof exports&&(exports.jsPlumb=b)}(),function(){"use strict";var t=function(t,e){var n=!1;return{drag:function(){if(n)return n=!1,!0;var o=jsPlumb.getUIPosition(arguments,e.getZoom());t.element&&(jsPlumbAdapter.setPosition(t.element,o),e.repaint(t.element,o))},stopDrag:function(){n=!0}}},e=function(t,e){var n=document.createElement("div");n.style.position="absolute";var o=e.getContainer()||document.body;o.appendChild(n);var i=e.getId(n);e.updateOffset({elId:i}),t.id=i,t.element=n},n=function(t,e,n,o,i,r,s){var a=new jsPlumb.FloatingAnchor({reference:e,referenceCanvas:o,jsPlumbInstance:r});return s({paintStyle:t,endpoint:n,anchor:a,source:i,scope:"__floating"})},o=["connectorStyle","connectorHoverStyle","connectorOverlays","connector","connectionType","connectorClass","connectorHoverClass"],i=function(t,e){var n=0;if(null!=e)for(var o=0;o<t.connections.length;o++)if(t.connections[o].sourceId==e||t.connections[o].targetId==e){n=o;break}return t.connections[n]},r=function(t,e){return jsPlumbUtil.findWithFunction(e.connections,function(e){return e.id==t.id})};jsPlumb.Endpoint=function(s){var a=s._jsPlumb,l=(jsPlumbAdapter.getAttribute,jsPlumb.getElementObject),u=jsPlumbUtil,c=s.newConnection,p=s.newEndpoint,d=s.finaliseConnection,h=(s.fireDetachEvent,s.fireMoveEvent),f=s.floatingConnections;this.idPrefix="_jsplumb_e_",this.defaultLabelLocation=[.5,.5],this.defaultOverlayKeys=["Overlays","EndpointOverlays"],OverlayCapableJsPlumbUIComponent.apply(this,arguments),this.getDefaultType=function(){return{parameters:{},scope:null,maxConnections:this._jsPlumb.instance.Defaults.MaxConnections,paintStyle:this._jsPlumb.instance.Defaults.EndpointStyle||jsPlumb.Defaults.EndpointStyle,endpoint:this._jsPlumb.instance.Defaults.Endpoint||jsPlumb.Defaults.Endpoint,hoverPaintStyle:this._jsPlumb.instance.Defaults.EndpointHoverStyle||jsPlumb.Defaults.EndpointHoverStyle,overlays:this._jsPlumb.instance.Defaults.EndpointOverlays||jsPlumb.Defaults.EndpointOverlays,connectorStyle:s.connectorStyle,connectorHoverStyle:s.connectorHoverStyle,connectorClass:s.connectorClass,connectorHoverClass:s.connectorHoverClass,connectorOverlays:s.connectorOverlays,connector:s.connector,connectorTooltip:s.connectorTooltip}},this._jsPlumb.enabled=!(s.enabled===!1),this._jsPlumb.visible=!0,this.element=jsPlumb.getDOMElement(s.source),this._jsPlumb.uuid=s.uuid,this._jsPlumb.floatingEndpoint=null;var m=null;this._jsPlumb.uuid&&(s.endpointsByUUID[this._jsPlumb.uuid]=this),this.elementId=s.elementId,this._jsPlumb.connectionCost=s.connectionCost,this._jsPlumb.connectionsDirected=s.connectionsDirected,this._jsPlumb.currentAnchorClass="",this._jsPlumb.events={};var g=function(){jsPlumbAdapter.removeClass(this.element,a.endpointAnchorClassPrefix+"_"+this._jsPlumb.currentAnchorClass),this.removeClass(a.endpointAnchorClassPrefix+"_"+this._jsPlumb.currentAnchorClass),this._jsPlumb.currentAnchorClass=this.anchor.getCssClass(),this.addClass(a.endpointAnchorClassPrefix+"_"+this._jsPlumb.currentAnchorClass),jsPlumbAdapter.addClass(this.element,a.endpointAnchorClassPrefix+"_"+this._jsPlumb.currentAnchorClass)}.bind(this);this.setAnchor=function(t,e){return this._jsPlumb.instance.continuousAnchorFactory.clear(this.elementId),this.anchor=this._jsPlumb.instance.makeAnchor(t,this.elementId,a),g(),this.anchor.bind("anchorChanged",function(t){this.fire("anchorChanged",{endpoint:this,anchor:t}),g()}.bind(this)),e||this._jsPlumb.instance.repaint(this.elementId),this};var v=s.anchor?s.anchor:s.anchors?s.anchors:a.Defaults.Anchor||"Top";this.setAnchor(v,!0);var y=function(t){this.connections.length>0?this.connections[0].setHover(t,!1):this.setHover(t)}.bind(this);s._transient||this._jsPlumb.instance.anchorManager.add(this,this.elementId),this.setEndpoint=function(t){null!=this.endpoint&&(this.endpoint.cleanup(),this.endpoint.destroy());var e=function(t,e){var n=a.getRenderMode();if(jsPlumb.Endpoints[n][t])return new jsPlumb.Endpoints[n][t](e);if(!a.Defaults.DoNotThrowErrors)throw{msg:"jsPlumb: unknown endpoint type '"+t+"'"}},n={_jsPlumb:this._jsPlumb.instance,cssClass:s.cssClass,container:s.container,tooltip:s.tooltip,connectorTooltip:s.connectorTooltip,endpoint:this};u.isString(t)?this.endpoint=e(t,n):u.isArray(t)?(n=u.merge(t[1],n),this.endpoint=e(t[0],n)):this.endpoint=t.clone(),jsPlumb.extend({},n),this.endpoint.clone=function(){return u.isString(t)?e(t,n):u.isArray(t)?(n=u.merge(t[1],n),e(t[0],n)):void 0}.bind(this),this.type=this.endpoint.type,this.bindListeners(this.endpoint,this,y)},this.setEndpoint(s.endpoint||a.Defaults.Endpoint||jsPlumb.Defaults.Endpoint||"Dot"),this.setPaintStyle(s.paintStyle||s.style||a.Defaults.EndpointStyle||jsPlumb.Defaults.EndpointStyle,!0),this.setHoverPaintStyle(s.hoverPaintStyle||a.Defaults.EndpointHoverStyle||jsPlumb.Defaults.EndpointHoverStyle,!0),this._jsPlumb.paintStyleInUse=this.getPaintStyle(),jsPlumb.extend(this,s,o),this.isSource=s.isSource||!1,this.isTarget=s.isTarget||!1,this._jsPlumb.maxConnections=s.maxConnections||a.Defaults.MaxConnections,this.canvas=this.endpoint.canvas,this.addClass(a.endpointAnchorClassPrefix+"_"+this._jsPlumb.currentAnchorClass),jsPlumbAdapter.addClass(this.element,a.endpointAnchorClassPrefix+"_"+this._jsPlumb.currentAnchorClass),this.connections=s.connections||[],this.connectorPointerEvents=s["connector-pointer-events"],this.scope=s.scope||a.getDefaultScope(),this.timestamp=null,this.reattachConnections=s.reattach||a.Defaults.ReattachConnections,this.connectionsDetachable=a.Defaults.ConnectionsDetachable,(s.connectionsDetachable===!1||s.detachable===!1)&&(this.connectionsDetachable=!1),this.dragAllowedWhenFull=s.dragAllowedWhenFull||!0,s.onMaxConnections&&this.bind("maxConnections",s.onMaxConnections),this.addConnection=function(t){this.connections.push(t),this[(this.connections.length>0?"add":"remove")+"Class"](a.endpointConnectedClass),this[(this.isFull()?"add":"remove")+"Class"](a.endpointFullClass)},this.detachFromConnection=function(t,e,n){e=null==e?r(t,this):e,e>=0&&(this.connections.splice(e,1),this[(this.connections.length>0?"add":"remove")+"Class"](a.endpointConnectedClass),this[(this.isFull()?"add":"remove")+"Class"](a.endpointFullClass)),!n&&this._deleteOnDetach&&0===this.connections.length&&a.deleteObject({endpoint:this,fireEvent:!1,deleteAttachedObjects:!1})},this.detach=function(t,e,n,o,i,s,l){var u=null==l?r(t,this):l,c=!1;return o=o!==!1,u>=0&&(n||t._forceDetach||t.isDetachable()&&t.isDetachAllowed(t)&&this.isDetachAllowed(t))&&(a.deleteObject({connection:t,fireEvent:!e&&o,originalEvent:i,deleteAttachedObjects:!1}),c=!0),c},this.detachAll=function(t,e){for(;this.connections.length>0;)this.detach(this.connections[0],!1,!0,t!==!1,e,this,0);return this},this.detachFrom=function(t,e,n){for(var o=[],i=0;i<this.connections.length;i++)(this.connections[i].endpoints[1]==t||this.connections[i].endpoints[0]==t)&&o.push(this.connections[i]);for(var r=0;r<o.length;r++)this.detach(o[r],!1,!0,e,n);return this},this.getElement=function(){return this.element},this.setElement=function(t){var e=this._jsPlumb.instance.getId(t),n=this.elementId;return u.removeWithFunction(s.endpointsByElement[this.elementId],function(t){return t.id==this.id}.bind(this)),this.element=jsPlumb.getDOMElement(t),this.elementId=a.getId(this.element),a.anchorManager.rehomeEndpoint(this,n,this.element),a.dragManager.endpointAdded(this.element),u.addToList(s.endpointsByElement,e,this),this},this.makeInPlaceCopy=function(){var t=this.anchor.getCurrentLocation({element:this}),e=this.anchor.getOrientation(this),n=this.anchor.getCssClass(),o={bind:function(){},compute:function(){return[t[0],t[1]]},getCurrentLocation:function(){return[t[0],t[1]]},getOrientation:function(){return e},getCssClass:function(){return n}};return p({dropOptions:s.dropOptions,anchor:o,source:this.element,paintStyle:this.getPaintStyle(),endpoint:s.hideOnDrag?"Blank":this.endpoint,_transient:!0,scope:this.scope})},this.connectorSelector=function(){var t=this.connections[0];return this.isTarget&&t?t:this.connections.length<this._jsPlumb.maxConnections||-1==this._jsPlumb.maxConnections?null:t},this.setStyle=this.setPaintStyle,this.paint=function(t){t=t||{};var e=t.timestamp,n=!(t.recalc===!1);if(!e||this.timestamp!==e){var o=a.updateOffset({elId:this.elementId,timestamp:e}),r=t.offset?t.offset.o:o.o;if(null!=r){var s=t.anchorPoint,l=t.connectorPaintStyle;if(null==s){var u=t.dimensions||o.s,c={xy:[r.left,r.top],wh:u,element:this,timestamp:e};if(n&&this.anchor.isDynamic&&this.connections.length>0){var p=i(this,t.elementWithPrecedence),d=p.endpoints[0]==this?1:0,h=0===d?p.sourceId:p.targetId,f=a.getCachedData(h),m=f.o,g=f.s;c.txy=[m.left,m.top],c.twh=g,c.tElement=p.endpoints[d]}s=this.anchor.compute(c)}this.endpoint.compute(s,this.anchor.getOrientation(this),this._jsPlumb.paintStyleInUse,l||this.paintStyleInUse),this.endpoint.paint(this._jsPlumb.paintStyleInUse,this.anchor),this.timestamp=e;for(var v=0;v<this._jsPlumb.overlays.length;v++){var y=this._jsPlumb.overlays[v];y.isVisible()&&(this._jsPlumb.overlayPlacements[v]=y.draw(this.endpoint,this._jsPlumb.paintStyleInUse),y.paint(this._jsPlumb.overlayPlacements[v]))}}}},this.repaint=this.paint;var b=!1;this.initDraggable=function(){if(!b&&jsPlumb.isDragSupported(this.element)){var o={id:null,element:null},i=null,r=!1,d=null,h=t(o,a),g=function(){i=this.connectorSelector();var t=!0;if(this.isEnabled()||(t=!1),null!=i||this.isSource||(t=!1),this.isSource&&this.isFull()&&!this.dragAllowedWhenFull&&(t=!1),null==i||i.isDetachable()||(t=!1),t===!1)return a.stopDrag&&a.stopDrag(this.canvas),h.stopDrag(),!1;for(var g=0;g<this.connections.length;g++)this.connections[g].setHover(!1);this.addClass("endpointDrag"),a.setConnectionBeingDragged(!0),i&&!this.isFull()&&this.isSource&&(i=null),a.updateOffset({elId:this.elementId}),m=this.makeInPlaceCopy(),m.referenceEndpoint=this,m.paint(),e(o,a);var v=l(m.canvas),y=jsPlumbAdapter.getOffset(v,this._jsPlumb.instance),b=l(this.canvas);if(jsPlumbAdapter.setPosition(o.element,y),this.parentAnchor&&(this.anchor=a.makeAnchor(this.parentAnchor,this.elementId,a)),a.setAttribute(this.canvas,"dragId",o.id),a.setAttribute(this.canvas,"elId",this.elementId),this._jsPlumb.floatingEndpoint=n(this.getPaintStyle(),this.anchor,this.endpoint,this.canvas,o.element,a,p),this.canvas.style.visibility="hidden",null==i)this.anchor.locked=!0,this.setHover(!1,!1),i=c({sourceEndpoint:this,targetEndpoint:this._jsPlumb.floatingEndpoint,source:this.endpointWillMoveTo||this.element,target:o.element,anchors:[this.anchor,this._jsPlumb.floatingEndpoint.anchor],paintStyle:s.connectorStyle,hoverPaintStyle:s.connectorHoverStyle,connector:s.connector,overlays:s.connectorOverlays,type:this.connectionType,cssClass:this.connectorClass,hoverClass:this.connectorHoverClass}),i.pending=!0,i.addClass(a.draggingClass),this._jsPlumb.floatingEndpoint.addClass(a.draggingClass),a.fire("connectionDrag",i);else{r=!0,i.setHover(!1);var C=i.endpoints[0].id==this.id?0:1;i.floatingAnchorIndex=C,this.detachFromConnection(i,null,!0);var P=a.getDragScope(b);a.setAttribute(this.canvas,"originalScope",P);var x=a.getDropScope(b);a.setDragScope(b,x),a.fire("connectionDrag",i),0===C?(d=[i.source,i.sourceId,b,P],i.source=o.element,i.sourceId=o.id):(d=[i.target,i.targetId,b,P],i.target=o.element,i.targetId=o.id),i.endpoints[0===C?1:0].anchor.locked=!0,i.suspendedEndpoint=i.endpoints[C],i.suspendedElement=i.endpoints[C].getElement(),i.suspendedElementId=i.endpoints[C].elementId,i.suspendedElementType=0===C?"source":"target",i.suspendedEndpoint.setHover(!1),this._jsPlumb.floatingEndpoint.referenceEndpoint=i.suspendedEndpoint,i.endpoints[C]=this._jsPlumb.floatingEndpoint,i.addClass(a.draggingClass),this._jsPlumb.floatingEndpoint.addClass(a.draggingClass)}f[o.id]=i,a.anchorManager.addFloatingConnection(o.id,i),u.addToList(s.endpointsByElement,o.id,this._jsPlumb.floatingEndpoint),a.currentlyDragging=!0}.bind(this),v=s.dragOptions||{},y={},C=jsPlumb.dragEvents.start,P=jsPlumb.dragEvents.stop,x=jsPlumb.dragEvents.drag;v=jsPlumb.extend(y,v),v.scope=v.scope||this.scope,v[C]=u.wrap(v[C],g,!1),v[x]=u.wrap(v[x],h.drag),v[P]=u.wrap(v[P],function(){if(a.setConnectionBeingDragged(!1),i&&null!=i.endpoints){var t=a.getDropEvent(arguments),e=null==i.floatingAnchorIndex?1:i.floatingAnchorIndex;i.endpoints[0===e?1:0].anchor.locked=!1,i.removeClass(a.draggingClass),i.endpoints[e]==this._jsPlumb.floatingEndpoint&&r&&i.suspendedEndpoint&&(0===e?(i.source=d[0],i.sourceId=d[1]):(i.target=d[0],i.targetId=d[1]),a.setDragScope(d[2],d[3]),i.endpoints[e]=i.suspendedEndpoint,i.isReattach()||i._forceReattach||i._forceDetach||!i.endpoints[0===e?1:0].detach(i,!1,!1,!0,t)?(i.setHover(!1),i.floatingAnchorIndex=null,i._forceDetach=null,i._forceReattach=null,this._jsPlumb.floatingEndpoint.detachFromConnection(i),i.suspendedEndpoint.addConnection(i),a.repaint(d[1])):i.suspendedEndpoint.detachFromConnection(i)),a.remove(o.element,!1),a.deleteObject({endpoint:m}),this.deleteAfterDragStop?a.deleteObject({endpoint:this}):this._jsPlumb&&(this._jsPlumb.floatingEndpoint=null,this.canvas.style.visibility="visible",this.anchor.locked=!1,this.paint({recalc:!1})),a.fire("connectionDragStop",i,t),a.currentlyDragging=!1,i=null}}.bind(this));var E=l(this.canvas);a.initDraggable(E,v,!0),b=!0}},(this.isSource||this.isTarget)&&this.initDraggable();var C=function(t,e,n,o){if((this.isTarget||e)&&jsPlumb.isDropSupported(this.element)){var i=s.dropOptions||a.Defaults.DropOptions||jsPlumb.Defaults.DropOptions;i=jsPlumb.extend({},i),i.scope=i.scope||this.scope;var r=jsPlumb.dragEvents.drop,l=jsPlumb.dragEvents.over,c=jsPlumb.dragEvents.out,p=function(){this.removeClass(a.endpointDropAllowedClass),this.removeClass(a.endpointDropForbiddenClass);var t=a.getDropEvent(arguments),e=a.getDOMElement(a.getDragObject(arguments)),n=a.getAttribute(e,"dragId"),i=(a.getAttribute(e,"elId"),a.getAttribute(e,"originalScope")),r=f[n];if(null!=r){var s=r.suspendedEndpoint&&(r.suspendedEndpoint.id==this.id||this.referenceEndpoint&&r.suspendedEndpoint.id==this.referenceEndpoint.id);if(s)return void(r._forceReattach=!0);var l=null==r.floatingAnchorIndex?1:r.floatingAnchorIndex;i&&a.setDragScope(e,i);var u=null!=o?o.isEnabled():!0;if(this.isFull()&&this.fire("maxConnections",{endpoint:this,connection:r,maxConnections:this._jsPlumb.maxConnections},t),!this.isFull()&&(0!==l||this.isSource)&&(1!=l||this.isTarget)&&u){var c=!0;r.suspendedEndpoint&&r.suspendedEndpoint.id!=this.id&&(0===l?(r.source=r.suspendedEndpoint.element,r.sourceId=r.suspendedEndpoint.elementId):(r.target=r.suspendedEndpoint.element,r.targetId=r.suspendedEndpoint.elementId),r.isDetachAllowed(r)&&r.endpoints[l].isDetachAllowed(r)&&r.suspendedEndpoint.isDetachAllowed(r)&&a.checkCondition("beforeDetach",r)||(c=!1)),0===l?(r.source=this.element,r.sourceId=this.elementId):(r.target=this.element,r.targetId=this.elementId);var p=function(){r.floatingAnchorIndex=null},m=function(){r.pending=!1,r.endpoints[l].detachFromConnection(r),r.suspendedEndpoint&&r.suspendedEndpoint.detachFromConnection(r),r.endpoints[l]=this,this.addConnection(r);var e=this.getParameters();for(var n in e)r.setParameter(n,e[n]);if(r.suspendedEndpoint){var o=(r.suspendedEndpoint.getElement(),r.suspendedEndpoint.elementId);h({index:l,originalSourceId:0===l?o:r.sourceId,newSourceId:0===l?this.elementId:r.sourceId,originalTargetId:1==l?o:r.targetId,newTargetId:1==l?this.elementId:r.targetId,originalSourceEndpoint:0===l?r.suspendedEndpoint:r.endpoints[0],newSourceEndpoint:0===l?this:r.endpoints[0],originalTargetEndpoint:1==l?r.suspendedEndpoint:r.endpoints[1],newTargetEndpoint:1==l?this:r.endpoints[1],connection:r},t)}else e.draggable&&jsPlumb.initDraggable(this.element,dragOptions,!0,a);1==l?a.anchorManager.updateOtherEndpoint(r.sourceId,r.suspendedElementId,r.targetId,r):a.anchorManager.sourceChanged(r.suspendedEndpoint.elementId,r.sourceId,r),d(r,null,t),p()}.bind(this),g=function(){r.suspendedEndpoint&&(r.endpoints[l]=r.suspendedEndpoint,r.setHover(!1),r._forceDetach=!0,0===l?(r.source=r.suspendedEndpoint.element,r.sourceId=r.suspendedEndpoint.elementId):(r.target=r.suspendedEndpoint.element,r.targetId=r.suspendedEndpoint.elementId),r.suspendedEndpoint.addConnection(r),r.endpoints[0].repaint(),r.repaint(),a.repaint(r.sourceId),r._forceDetach=!1),p()};c=c&&this.isDropAllowed(r.sourceId,r.targetId,r.scope,r,this),c?m():g()}a.currentlyDragging=!1}}.bind(this);i[r]=u.wrap(i[r],p),i[l]=u.wrap(i[l],function(){var t=jsPlumb.getDragObject(arguments),e=a.getAttribute(jsPlumb.getDOMElement(t),"dragId"),n=f[e];if(null!=n){var o=null==n.floatingAnchorIndex?1:n.floatingAnchorIndex,i=this.isTarget&&0!==n.floatingAnchorIndex||n.suspendedEndpoint&&this.referenceEndpoint&&this.referenceEndpoint.id==n.suspendedEndpoint.id;if(i){var r=a.checkCondition("checkDropAllowed",{sourceEndpoint:n.endpoints[o],targetEndpoint:this,connection:n});this[(r?"add":"remove")+"Class"](a.endpointDropAllowedClass),this[(r?"remove":"add")+"Class"](a.endpointDropForbiddenClass),n.endpoints[o].anchor.over(this.anchor,this)}}}.bind(this)),i[c]=u.wrap(i[c],function(){var t=jsPlumb.getDragObject(arguments),e=null==t?null:a.getAttribute(jsPlumb.getDOMElement(t),"dragId"),n=e?f[e]:null;if(null!=n){var o=null==n.floatingAnchorIndex?1:n.floatingAnchorIndex,i=this.isTarget&&0!==n.floatingAnchorIndex||n.suspendedEndpoint&&this.referenceEndpoint&&this.referenceEndpoint.id==n.suspendedEndpoint.id;i&&(this.removeClass(a.endpointDropAllowedClass),this.removeClass(a.endpointDropForbiddenClass),n.endpoints[o].anchor.out())}}.bind(this)),a.initDroppable(t,i,!0,n)}}.bind(this);return this.anchor.isFloating||C(l(this.canvas),!0,!(s._transient||this.anchor.isFloating),this),s.type&&this.addType(s.type,s.data,a.isSuspendDrawing()),this},jsPlumbUtil.extend(jsPlumb.Endpoint,OverlayCapableJsPlumbUIComponent,{getTypeDescriptor:function(){return"endpoint"},isVisible:function(){return this._jsPlumb.visible},setVisible:function(t,e,n){if(this._jsPlumb.visible=t,this.canvas&&(this.canvas.style.display=t?"block":"none"),this[t?"showOverlays":"hideOverlays"](),!e)for(var o=0;o<this.connections.length;o++)if(this.connections[o].setVisible(t),!n){var i=this===this.connections[o].endpoints[0]?1:0;1==this.connections[o].endpoints[i].connections.length&&this.connections[o].endpoints[i].setVisible(t,!0,!0)}},getAttachedElements:function(){return this.connections},applyType:function(t){null!=t.maxConnections&&(this._jsPlumb.maxConnections=t.maxConnections),t.scope&&(this.scope=t.scope),jsPlumb.extend(this,t,o),t.anchor&&(this.anchor=this._jsPlumb.instance.makeAnchor(t.anchor))},isEnabled:function(){return this._jsPlumb.enabled},setEnabled:function(t){this._jsPlumb.enabled=t},cleanup:function(){jsPlumbAdapter.removeClass(this.element,this._jsPlumb.instance.endpointAnchorClassPrefix+"_"+this._jsPlumb.currentAnchorClass),this.anchor=null,this.endpoint.cleanup(),this.endpoint.destroy(),this.endpoint=null;var t=jsPlumb.getElementObject(this.canvas);this._jsPlumb.instance.destroyDraggable(t),this._jsPlumb.instance.destroyDroppable(t)},setHover:function(t){this.endpoint&&this._jsPlumb&&!this._jsPlumb.instance.isConnectionBeingDragged()&&this.endpoint.setHover(t)},isFull:function(){return!(this.isFloating()||this._jsPlumb.maxConnections<1||this.connections.length<this._jsPlumb.maxConnections)
},isFloating:function(){return null!=this.anchor&&this.anchor.isFloating},getConnectionCost:function(){return this._jsPlumb.connectionCost},setConnectionCost:function(t){this._jsPlumb.connectionCost=t},areConnectionsDirected:function(){return this._jsPlumb.connectionsDirected},setConnectionsDirected:function(t){this._jsPlumb.connectionsDirected=t},setElementId:function(t){this.elementId=t,this.anchor.elementId=t},setReferenceElement:function(t){this.element=jsPlumb.getDOMElement(t)},setDragAllowedWhenFull:function(t){this.dragAllowedWhenFull=t},equals:function(t){return this.anchor.equals(t.anchor)},getUuid:function(){return this._jsPlumb.uuid},computeAnchor:function(t){return this.anchor.compute(t)}})}(),function(){"use strict";var t=function(t,e,n,o){if(!t.Defaults.DoNotThrowErrors&&null==jsPlumb.Connectors[e][n])throw{msg:"jsPlumb: unknown connector type '"+n+"'"};return new jsPlumb.Connectors[e][n](o)},e=function(t,e,n){return t?n.makeAnchor(t,e,n):null};jsPlumb.Connection=function(t){var e=(t.newConnection,t.newEndpoint),n=(jsPlumb.getElementObject,jsPlumbUtil);this.connector=null,this.idPrefix="_jsplumb_c_",this.defaultLabelLocation=.5,this.defaultOverlayKeys=["Overlays","ConnectionOverlays"],this.previousConnection=t.previousConnection,this.source=jsPlumb.getDOMElement(t.source),this.target=jsPlumb.getDOMElement(t.target),t.sourceEndpoint&&(this.source=t.sourceEndpoint.endpointWillMoveTo||t.sourceEndpoint.getElement()),t.targetEndpoint&&(this.target=t.targetEndpoint.getElement()),OverlayCapableJsPlumbUIComponent.apply(this,arguments),this.sourceId=this._jsPlumb.instance.getId(this.source),this.targetId=this._jsPlumb.instance.getId(this.target),this.scope=t.scope,this.endpoints=[],this.endpointStyles=[];var o=this._jsPlumb.instance;this._jsPlumb.visible=!0,this._jsPlumb.editable=t.editable===!0,this._jsPlumb.params={cssClass:t.cssClass,container:t.container,"pointer-events":t["pointer-events"],editorParams:t.editorParams},this._jsPlumb.lastPaintedAt=null,this.getDefaultType=function(){return{parameters:{},scope:null,detachable:this._jsPlumb.instance.Defaults.ConnectionsDetachable,rettach:this._jsPlumb.instance.Defaults.ReattachConnections,paintStyle:this._jsPlumb.instance.Defaults.PaintStyle||jsPlumb.Defaults.PaintStyle,connector:this._jsPlumb.instance.Defaults.Connector||jsPlumb.Defaults.Connector,hoverPaintStyle:this._jsPlumb.instance.Defaults.HoverPaintStyle||jsPlumb.Defaults.HoverPaintStyle,overlays:this._jsPlumb.instance.Defaults.ConnectorOverlays||jsPlumb.Defaults.ConnectorOverlays}},this.makeEndpoint=function(n,i,r,s){return r=r||this._jsPlumb.instance.getId(i),this.prepareEndpoint(o,e,this,s,n?0:1,t,i,r)};var i=this.makeEndpoint(!0,this.source,this.sourceId,t.sourceEndpoint),r=this.makeEndpoint(!1,this.target,this.targetId,t.targetEndpoint);i&&n.addToList(t.endpointsByElement,this.sourceId,i),r&&n.addToList(t.endpointsByElement,this.targetId,r),this.scope||(this.scope=this.endpoints[0].scope),null!=t.deleteEndpointsOnDetach?(this.endpoints[0]._deleteOnDetach=t.deleteEndpointsOnDetach,this.endpoints[1]._deleteOnDetach=t.deleteEndpointsOnDetach):(this.endpoints[0]._doNotDeleteOnDetach||(this.endpoints[0]._deleteOnDetach=!0),this.endpoints[1]._doNotDeleteOnDetach||(this.endpoints[1]._deleteOnDetach=!0)),this.setConnector(this.endpoints[0].connector||this.endpoints[1].connector||t.connector||o.Defaults.Connector||jsPlumb.Defaults.Connector,!0),t.path&&this.connector.setPath(t.path),this.setPaintStyle(this.endpoints[0].connectorStyle||this.endpoints[1].connectorStyle||t.paintStyle||o.Defaults.PaintStyle||jsPlumb.Defaults.PaintStyle,!0),this.setHoverPaintStyle(this.endpoints[0].connectorHoverStyle||this.endpoints[1].connectorHoverStyle||t.hoverPaintStyle||o.Defaults.HoverPaintStyle||jsPlumb.Defaults.HoverPaintStyle,!0),this._jsPlumb.paintStyleInUse=this.getPaintStyle();var s=o.getSuspendedAt();if(o.updateOffset({elId:this.sourceId,timestamp:s}),o.updateOffset({elId:this.targetId,timestamp:s}),!o.isSuspendDrawing()){var a=o.getCachedData(this.sourceId),l=a.o,u=a.s,c=o.getCachedData(this.targetId),p=c.o,d=c.s,h=s||o.timestamp(),f=this.endpoints[0].anchor.compute({xy:[l.left,l.top],wh:u,element:this.endpoints[0],elementId:this.endpoints[0].elementId,txy:[p.left,p.top],twh:d,tElement:this.endpoints[1],timestamp:h});this.endpoints[0].paint({anchorLoc:f,timestamp:h}),f=this.endpoints[1].anchor.compute({xy:[p.left,p.top],wh:d,element:this.endpoints[1],elementId:this.endpoints[1].elementId,txy:[l.left,l.top],twh:u,tElement:this.endpoints[0],timestamp:h}),this.endpoints[1].paint({anchorLoc:f,timestamp:h})}this._jsPlumb.detachable=o.Defaults.ConnectionsDetachable,t.detachable===!1&&(this._jsPlumb.detachable=!1),this.endpoints[0].connectionsDetachable===!1&&(this._jsPlumb.detachable=!1),this.endpoints[1].connectionsDetachable===!1&&(this._jsPlumb.detachable=!1),this._jsPlumb.reattach=t.reattach||this.endpoints[0].reattachConnections||this.endpoints[1].reattachConnections||o.Defaults.ReattachConnections,this._jsPlumb.cost=t.cost||this.endpoints[0].getConnectionCost(),this._jsPlumb.directed=t.directed,null==t.directed&&(this._jsPlumb.directed=this.endpoints[0].areConnectionsDirected());var m=jsPlumb.extend({},this.endpoints[1].getParameters());jsPlumb.extend(m,this.endpoints[0].getParameters()),jsPlumb.extend(m,this.getParameters()),this.setParameters(m);var g=[t.type,this.endpoints[0].connectionType,this.endpoints[1].connectionType].join(" ");/[^\s]/.test(g)&&this.addType(g,t.data,!0)},jsPlumbUtil.extend(jsPlumb.Connection,OverlayCapableJsPlumbUIComponent,{applyType:function(t,e){null!=t.detachable&&this.setDetachable(t.detachable),null!=t.reattach&&this.setReattach(t.reattach),t.scope&&(this.scope=t.scope),this.setConnector(t.connector,e)},getTypeDescriptor:function(){return"connection"},getAttachedElements:function(){return this.endpoints},addClass:function(t,e){e&&(this.endpoints[0].addClass(t),this.endpoints[1].addClass(t),this.suspendedEndpoint&&this.suspendedEndpoint.addClass(t)),this.connector&&this.connector.addClass(t)},removeClass:function(t,e){e&&(this.endpoints[0].removeClass(t),this.endpoints[1].removeClass(t),this.suspendedEndpoint&&this.suspendedEndpoint.removeClass(t)),this.connector&&this.connector.removeClass(t)},isVisible:function(){return this._jsPlumb.visible},setVisible:function(t){this._jsPlumb.visible=t,this.connector&&this.connector.setVisible(t),this.repaint()},cleanup:function(){this.endpoints=null,this.source=null,this.target=null,null!=this.connector&&(this.connector.cleanup(),this.connector.destroy()),this.connector=null},isDetachable:function(){return this._jsPlumb.detachable===!0},setDetachable:function(t){this._jsPlumb.detachable=t===!0},isReattach:function(){return this._jsPlumb.reattach===!0},setReattach:function(t){this._jsPlumb.reattach=t===!0},setHover:function(t){this.connector&&this._jsPlumb&&!this._jsPlumb.instance.isConnectionBeingDragged()&&(this.connector.setHover(t),jsPlumbAdapter[t?"addClass":"removeClass"](this.source,this._jsPlumb.instance.hoverSourceClass),jsPlumbAdapter[t?"addClass":"removeClass"](this.target,this._jsPlumb.instance.hoverTargetClass))},getCost:function(){return this._jsPlumb.cost},setCost:function(t){this._jsPlumb.cost=t},isDirected:function(){return this._jsPlumb.directed===!0},getConnector:function(){return this.connector},setConnector:function(e,n){var o=jsPlumbUtil;null!=this.connector&&(this.connector.cleanup(),this.connector.destroy());var i={_jsPlumb:this._jsPlumb.instance,cssClass:this._jsPlumb.params.cssClass,container:this._jsPlumb.params.container,"pointer-events":this._jsPlumb.params["pointer-events"]},r=this._jsPlumb.instance.getRenderMode();o.isString(e)?this.connector=t(this._jsPlumb.instance,r,e,i):o.isArray(e)&&(this.connector=1==e.length?t(this._jsPlumb.instance,r,e[0],i):t(this._jsPlumb.instance,r,e[0],o.merge(e[1],i))),this.bindListeners(this.connector,this,function(t){this.setHover(t,!1)}.bind(this)),this.canvas=this.connector.canvas,this.bgCanvas=this.connector.bgCanvas,this._jsPlumb.editable&&null!=jsPlumb.ConnectorEditors&&jsPlumb.ConnectorEditors[this.connector.type]&&this.connector.isEditable()?new jsPlumb.ConnectorEditors[this.connector.type]({connector:this.connector,connection:this,params:this._jsPlumb.params.editorParams||{}}):this._jsPlumb.editable=!1,n||this.repaint()},paint:function(t){if(!this._jsPlumb.instance.isSuspendDrawing()&&this._jsPlumb.visible){t=t||{};var e=(t.elId,t.ui),n=t.recalc,o=t.timestamp,i=!1,r=i?this.sourceId:this.targetId,s=i?this.targetId:this.sourceId,a=i?0:1,l=i?1:0;if(null==o||o!=this._jsPlumb.lastPaintedAt){var u=this._jsPlumb.instance.updateOffset({elId:s,offset:e,recalc:n,timestamp:o}).o,c=this._jsPlumb.instance.updateOffset({elId:r,timestamp:o}).o,p=this.endpoints[l],d=this.endpoints[a];t.clearEdits&&(this._jsPlumb.overlayPositions=null,p.anchor.clearUserDefinedLocation(),d.anchor.clearUserDefinedLocation(),this.connector.setEdited(!1));var h=p.anchor.getCurrentLocation({xy:[u.left,u.top],wh:[u.width,u.height],element:p,timestamp:o}),f=d.anchor.getCurrentLocation({xy:[c.left,c.top],wh:[c.width,c.height],element:d,timestamp:o});this.connector.resetBounds(),this.connector.compute({sourcePos:h,targetPos:f,sourceEndpoint:this.endpoints[l],targetEndpoint:this.endpoints[a],lineWidth:this._jsPlumb.paintStyleInUse.lineWidth,sourceInfo:u,targetInfo:c,clearEdits:t.clearEdits===!0});for(var m={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0},g=0;g<this._jsPlumb.overlays.length;g++){var v=this._jsPlumb.overlays[g];v.isVisible()&&(this._jsPlumb.overlayPlacements[g]=v.draw(this.connector,this._jsPlumb.paintStyleInUse,this.getAbsoluteOverlayPosition(v)),m.minX=Math.min(m.minX,this._jsPlumb.overlayPlacements[g].minX),m.maxX=Math.max(m.maxX,this._jsPlumb.overlayPlacements[g].maxX),m.minY=Math.min(m.minY,this._jsPlumb.overlayPlacements[g].minY),m.maxY=Math.max(m.maxY,this._jsPlumb.overlayPlacements[g].maxY))}var y=parseFloat(this._jsPlumb.paintStyleInUse.lineWidth||1)/2,b=parseFloat(this._jsPlumb.paintStyleInUse.lineWidth||0),C={xmin:Math.min(this.connector.bounds.minX-(y+b),m.minX),ymin:Math.min(this.connector.bounds.minY-(y+b),m.minY),xmax:Math.max(this.connector.bounds.maxX+(y+b),m.maxX),ymax:Math.max(this.connector.bounds.maxY+(y+b),m.maxY)};this.connector.paint(this._jsPlumb.paintStyleInUse,null,C);for(var P=0;P<this._jsPlumb.overlays.length;P++){var x=this._jsPlumb.overlays[P];x.isVisible()&&x.paint(this._jsPlumb.overlayPlacements[P],C)}}this._jsPlumb.lastPaintedAt=o}},repaint:function(t){t=t||{},this.paint({elId:this.sourceId,recalc:!(t.recalc===!1),timestamp:t.timestamp,clearEdits:t.clearEdits})},prepareEndpoint:function(t,n,o,i,r,s,a,l){var u;if(i)o.endpoints[r]=i,i.addConnection(o);else{s.endpoints||(s.endpoints=[null,null]);var c=s.endpoints[r]||s.endpoint||t.Defaults.Endpoints[r]||jsPlumb.Defaults.Endpoints[r]||t.Defaults.Endpoint||jsPlumb.Defaults.Endpoint;s.endpointStyles||(s.endpointStyles=[null,null]),s.endpointHoverStyles||(s.endpointHoverStyles=[null,null]);var p=s.endpointStyles[r]||s.endpointStyle||t.Defaults.EndpointStyles[r]||jsPlumb.Defaults.EndpointStyles[r]||t.Defaults.EndpointStyle||jsPlumb.Defaults.EndpointStyle;null==p.fillStyle&&null!=s.paintStyle&&(p.fillStyle=s.paintStyle.strokeStyle),null==p.outlineColor&&null!=s.paintStyle&&(p.outlineColor=s.paintStyle.outlineColor),null==p.outlineWidth&&null!=s.paintStyle&&(p.outlineWidth=s.paintStyle.outlineWidth);var d=s.endpointHoverStyles[r]||s.endpointHoverStyle||t.Defaults.EndpointHoverStyles[r]||jsPlumb.Defaults.EndpointHoverStyles[r]||t.Defaults.EndpointHoverStyle||jsPlumb.Defaults.EndpointHoverStyle;null!=s.hoverPaintStyle&&(null==d&&(d={}),null==d.fillStyle&&(d.fillStyle=s.hoverPaintStyle.strokeStyle));var h=s.anchors?s.anchors[r]:s.anchor?s.anchor:e(t.Defaults.Anchors[r],l,t)||e(jsPlumb.Defaults.Anchors[r],l,t)||e(t.Defaults.Anchor,l,t)||e(jsPlumb.Defaults.Anchor,l,t),f=s.uuids?s.uuids[r]:null;u=n({paintStyle:p,hoverPaintStyle:d,endpoint:c,connections:[o],uuid:f,anchor:h,source:a,scope:s.scope,reattach:s.reattach||t.Defaults.ReattachConnections,detachable:s.detachable||t.Defaults.ConnectionsDetachable}),o.endpoints[r]=u,s.drawEndpoints===!1&&u.setVisible(!1,!0,!0)}return u}})}(),function(){jsPlumb.AnchorManager=function(t){var e={},n={},o={},i={},r={},s={HORIZONTAL:"horizontal",VERTICAL:"vertical",DIAGONAL:"diagonal",IDENTITY:"identity"},a={},l=this,u={},c=t.jsPlumbInstance,p={},d=function(t,e,n,o,i,r){if(t===e)return{orientation:s.IDENTITY,a:["top","top"]};var a=Math.atan2(o.centery-n.centery,o.centerx-n.centerx),l=Math.atan2(n.centery-o.centery,n.centerx-o.centerx),u=n.left<=o.left&&n.right>=o.left||n.left<=o.right&&n.right>=o.right||n.left<=o.left&&n.right>=o.right||o.left<=n.left&&o.right>=n.right,c=n.top<=o.top&&n.bottom>=o.top||n.top<=o.bottom&&n.bottom>=o.bottom||n.top<=o.top&&n.bottom>=o.bottom||o.top<=n.top&&o.bottom>=n.bottom,p=function(t){return[i.isContinuous?i.verifyEdge(t[0]):t[0],r.isContinuous?r.verifyEdge(t[1]):t[1]]},d={orientation:s.DIAGONAL,theta:a,theta2:l};return u||c?u?(d.orientation=s.HORIZONTAL,d.a=n.top<o.top?["bottom","top"]:["top","bottom"]):(d.orientation=s.VERTICAL,d.a=n.left<o.left?["right","left"]:["left","right"]):o.left>n.left&&o.top>n.top?d.a=["right","top"]:o.left>n.left&&n.top>o.top?d.a=["top","left"]:o.left<n.left&&o.top<n.top?d.a=["top","right"]:o.left<n.left&&o.top>n.top&&(d.a=["left","top"]),d.a=p(d.a),d},h=function(t,e,n,o,i,r,s){for(var a=[],l=e[i?0:1]/(o.length+1),u=0;u<o.length;u++){var c=(u+1)*l,p=r*e[i?1:0];s&&(c=e[i?0:1]-c);var d=i?c:p,h=n[0]+d,f=d/e[0],m=i?p:c,g=n[1]+m,v=m/e[1];a.push([h,g,f,v,o[u][1],o[u][2]])}return a},f=function(t){return function(e,n){var o=!0;return o=t?e[0][0]<n[0][0]:e[0][0]>n[0][0],o===!1?-1:1}},m=function(t,e){var n=t[0][0]<0?-Math.PI-t[0][0]:Math.PI-t[0][0],o=e[0][0]<0?-Math.PI-e[0][0]:Math.PI-e[0][0];return n>o?1:t[0][1]>e[0][1]?1:-1},g={top:function(t,e){return t[0]>e[0]?1:-1},right:f(!0),bottom:f(!0),left:m},v=function(t,e){return t.sort(e)},y=function(t,e){var n=c.getCachedData(t),i=n.s,s=n.o,a=function(e,n,i,s,a,l,u){if(s.length>0)for(var c=v(s,g[e]),p="right"===e||"top"===e,d=h(e,n,i,c,a,l,p),f=function(t,e){o[t.id]=[e[0],e[1],e[2],e[3]],r[t.id]=u},m=0;m<d.length;m++){var y=d[m][4],b=y.endpoints[0].elementId===t,C=y.endpoints[1].elementId===t;b?f(y.endpoints[0],d[m]):C&&f(y.endpoints[1],d[m])}};a("bottom",i,[s.left,s.top],e.bottom,!0,1,[0,1]),a("top",i,[s.left,s.top],e.top,!0,0,[0,-1]),a("left",i,[s.left,s.top],e.left,!1,0,[-1,0]),a("right",i,[s.left,s.top],e.right,!1,1,[1,0])};this.reset=function(){e={},a={},u={}},this.addFloatingConnection=function(t,e){p[t]=e},this.removeFloatingConnection=function(t){delete p[t]},this.newConnection=function(t){var e=t.sourceId,n=t.targetId,o=t.endpoints,i=!0,r=function(r,s,l,u,c){e==n&&l.isContinuous&&(t._jsPlumb.instance.removeElement(o[1].canvas),i=!1),jsPlumbUtil.addToList(a,u,[c,s,l.constructor==jsPlumb.DynamicAnchor])};r(0,o[0],o[0].anchor,n,t),i&&r(1,o[1],o[1].anchor,e,t)};var b=function(t){!function(t,e){if(t){var n=function(t){return t[4]==e};jsPlumbUtil.removeWithFunction(t.top,n),jsPlumbUtil.removeWithFunction(t.left,n),jsPlumbUtil.removeWithFunction(t.bottom,n),jsPlumbUtil.removeWithFunction(t.right,n)}}(u[t.elementId],t.id)};this.connectionDetached=function(t){var e=t.connection||t,n=t.sourceId,o=t.targetId,i=e.endpoints,r=function(t,e,n,o,i){null!=n&&n.constructor==jsPlumb.FloatingAnchor||jsPlumbUtil.removeWithFunction(a[o],function(t){return t[0].id==i.id})};r(1,i[1],i[1].anchor,n,e),r(0,i[0],i[0].anchor,o,e),b(e.endpoints[0]),b(e.endpoints[1]),l.redraw(e.sourceId),l.redraw(e.targetId)},this.add=function(t,n){jsPlumbUtil.addToList(e,n,t)},this.changeId=function(t,n){a[n]=a[t],e[n]=e[t],delete a[t],delete e[t]},this.getConnectionsFor=function(t){return a[t]||[]},this.getEndpointsFor=function(t){return e[t]||[]},this.deleteEndpoint=function(t){jsPlumbUtil.removeWithFunction(e[t.elementId],function(e){return e.id==t.id}),b(t)},this.clearFor=function(t){delete e[t],e[t]=[]};var C=function(e,n,o,i,r,s,a,l,u,c,p,d){var h=-1,f=-1,m=i.endpoints[a],g=m.id,v=[1,0][a],y=[[n,o],i,r,s,g],b=e[u],C=m._continuousAnchorEdge?e[m._continuousAnchorEdge]:null;if(C){var P=jsPlumbUtil.findWithFunction(C,function(t){return t[4]==g});if(-1!=P){C.splice(P,1);for(var x=0;x<C.length;x++)jsPlumbUtil.addWithFunction(p,C[x][1],function(t){return t.id==C[x][1].id}),jsPlumbUtil.addWithFunction(d,C[x][1].endpoints[a],function(t){return t.id==C[x][1].endpoints[a].id}),jsPlumbUtil.addWithFunction(d,C[x][1].endpoints[v],function(t){return t.id==C[x][1].endpoints[v].id})}}for(x=0;x<b.length;x++)1==t.idx&&b[x][3]===s&&-1==f&&(f=x),jsPlumbUtil.addWithFunction(p,b[x][1],function(t){return t.id==b[x][1].id}),jsPlumbUtil.addWithFunction(d,b[x][1].endpoints[a],function(t){return t.id==b[x][1].endpoints[a].id}),jsPlumbUtil.addWithFunction(d,b[x][1].endpoints[v],function(t){return t.id==b[x][1].endpoints[v].id});if(-1!=h)b[h]=y;else{var E=l?-1!=f?f:0:b.length;b.splice(E,0,y)}m._continuousAnchorEdge=u};this.updateOtherEndpoint=function(t,e,n,o){var i=jsPlumbUtil.findWithFunction(a[t],function(t){return t[0].id===o.id}),r=jsPlumbUtil.findWithFunction(a[e],function(t){return t[0].id===o.id});-1!=i&&(a[t][i][0]=o,a[t][i][1]=o.endpoints[1],a[t][i][2]=o.endpoints[1].anchor.constructor==jsPlumb.DynamicAnchor),r>-1&&(a[e].splice(r,1),jsPlumbUtil.addToList(a,n,[o,o.endpoints[0],o.endpoints[0].anchor.constructor==jsPlumb.DynamicAnchor]))},this.sourceChanged=function(t,e,n){if(t!==e){jsPlumbUtil.removeWithFunction(a[t],function(t){return t[0].id===n.id});var o=jsPlumbUtil.findWithFunction(a[n.targetId],function(t){return t[0].id===n.id});o>-1&&(a[n.targetId][o][0]=n,a[n.targetId][o][1]=n.endpoints[0],a[n.targetId][o][2]=n.endpoints[0].anchor.constructor==jsPlumb.DynamicAnchor),jsPlumbUtil.addToList(a,e,[n,n.endpoints[1],n.endpoints[1].anchor.constructor==jsPlumb.DynamicAnchor])}},this.rehomeEndpoint=function(t,n,o){var i=e[n]||[],r=c.getId(o);if(r!==n){var s=jsPlumbUtil.indexOf(i,t);if(s>-1){var a=i.splice(s,1)[0];l.add(a,r)}}for(var u=0;u<t.connections.length;u++)t.connections[u].sourceId==n?(t.connections[u].sourceId=t.elementId,t.connections[u].source=t.element,l.sourceChanged(n,t.elementId,t.connections[u])):t.connections[u].targetId==n&&(t.connections[u].targetId=t.elementId,t.connections[u].target=t.element,l.updateOtherEndpoint(t.connections[u].sourceId,n,t.elementId,t.connections[u]))},this.redraw=function(t,n,o,i,r,s){if(!c.isSuspendDrawing()){var l=e[t]||[],h=a[t]||[],f=[],m=[],g=[];o=o||c.timestamp(),i=i||{left:0,top:0},n&&(n={left:n.left+i.left,top:n.top+i.top});for(var v=c.updateOffset({elId:t,offset:n,recalc:!1,timestamp:o}),b={},P=0;P<h.length;P++){var x=h[P][0],E=x.sourceId,_=x.targetId,w=x.endpoints[0].anchor.isContinuous,D=x.endpoints[1].anchor.isContinuous;if(w||D){var j=E+"_"+_,S=b[j],M=x.sourceId==t?1:0;w&&!u[E]&&(u[E]={top:[],right:[],bottom:[],left:[]}),D&&!u[_]&&(u[_]={top:[],right:[],bottom:[],left:[]}),t!=_&&c.updateOffset({elId:_,timestamp:o}),t!=E&&c.updateOffset({elId:E,timestamp:o});var O=c.getCachedData(_),T=c.getCachedData(E);_==E&&(w||D)?C(u[E],-Math.PI/2,0,x,!1,_,0,!1,"top",E,f,m):(S||(S=d(E,_,T.o,O.o,x.endpoints[0].anchor,x.endpoints[1].anchor),b[j]=S),w&&C(u[E],S.theta,0,x,!1,_,0,!1,S.a[0],E,f,m),D&&C(u[_],S.theta2,-1,x,!0,E,1,!0,S.a[1],_,f,m)),w&&jsPlumbUtil.addWithFunction(g,E,function(t){return t===E}),D&&jsPlumbUtil.addWithFunction(g,_,function(t){return t===_}),jsPlumbUtil.addWithFunction(f,x,function(t){return t.id==x.id}),(w&&0===M||D&&1===M)&&jsPlumbUtil.addWithFunction(m,x.endpoints[M],function(t){return t.id==x.endpoints[M].id})}}for(P=0;P<l.length;P++)0===l[P].connections.length&&l[P].anchor.isContinuous&&(u[t]||(u[t]={top:[],right:[],bottom:[],left:[]}),C(u[t],-Math.PI/2,0,{endpoints:[l[P],l[P]],paint:function(){}},!1,t,0,!1,"top",t,f,m),jsPlumbUtil.addWithFunction(g,t,function(e){return e===t}));for(P=0;P<g.length;P++)y(g[P],u[g[P]]);for(P=0;P<l.length;P++)l[P].paint({timestamp:o,offset:v,dimensions:v.s,recalc:s!==!0});for(P=0;P<m.length;P++){var R=c.getCachedData(m[P].elementId);m[P].paint({timestamp:o,offset:R,dimensions:R.s})}for(P=0;P<h.length;P++){var I=h[P][1];if(I.anchor.constructor==jsPlumb.DynamicAnchor){I.paint({elementWithPrecedence:t,timestamp:o}),jsPlumbUtil.addWithFunction(f,h[P][0],function(t){return t.id==h[P][0].id});for(var N=0;N<I.connections.length;N++)I.connections[N]!==h[P][0]&&jsPlumbUtil.addWithFunction(f,I.connections[N],function(t){return t.id==I.connections[N].id})}else I.anchor.constructor==jsPlumb.Anchor&&jsPlumbUtil.addWithFunction(f,h[P][0],function(t){return t.id==h[P][0].id})}var A=p[t];for(A&&A.paint({timestamp:o,recalc:!1,elId:t}),P=0;P<f.length;P++){var k=o;f[P].paint({elId:t,timestamp:k,recalc:!1,clearEdits:r})}}};var P=function(t){jsPlumbUtil.EventGenerator.apply(this),this.type="Continuous",this.isDynamic=!0,this.isContinuous=!0;for(var e=t.faces||["top","right","bottom","left"],n=!(t.clockwise===!1),s={},a={top:"bottom",right:"left",left:"right",bottom:"top"},l={top:"right",right:"bottom",left:"top",bottom:"left"},u={top:"left",right:"top",left:"bottom",bottom:"right"},c=n?l:u,p=n?u:l,d=t.cssClass||"",h=0;h<e.length;h++)s[e[h]]=!0;this.verifyEdge=function(t){return s[t]?t:s[a[t]]?a[t]:s[c[t]]?c[t]:s[p[t]]?p[t]:t},this.compute=function(t){return i[t.element.id]||o[t.element.id]||[0,0]},this.getCurrentLocation=function(t){return i[t.element.id]||o[t.element.id]||[0,0]},this.getOrientation=function(t){return r[t.id]||[0,0]},this.clearUserDefinedLocation=function(){delete i[t.elementId]},this.setUserDefinedLocation=function(e){i[t.elementId]=e},this.getCssClass=function(){return d},this.setCssClass=function(t){d=t}};c.continuousAnchorFactory={get:function(t){var e=n[t.elementId];return e||(e=new P(t),n[t.elementId]=e),e},clear:function(t){delete n[t]}}},jsPlumb.Anchor=function(t){this.x=t.x||0,this.y=t.y||0,this.elementId=t.elementId,this.cssClass=t.cssClass||"",this.userDefinedLocation=null,this.orientation=t.orientation||[0,0],jsPlumbUtil.EventGenerator.apply(this),t.jsPlumbInstance,this.lastReturnValue=null,this.offsets=t.offsets||[0,0],this.timestamp=null,this.compute=function(t){var e=t.xy,n=t.wh,o=(t.element,t.timestamp);return t.clearUserDefinedLocation&&(this.userDefinedLocation=null),o&&o===self.timestamp?this.lastReturnValue:(this.lastReturnValue=null!=this.userDefinedLocation?this.userDefinedLocation:[e[0]+this.x*n[0]+this.offsets[0],e[1]+this.y*n[1]+this.offsets[1]],this.timestamp=o,this.lastReturnValue)},this.getCurrentLocation=function(t){return null==this.lastReturnValue||null!=t.timestamp&&this.timestamp!=t.timestamp?this.compute(t):this.lastReturnValue}},jsPlumbUtil.extend(jsPlumb.Anchor,jsPlumbUtil.EventGenerator,{equals:function(t){if(!t)return!1;var e=t.getOrientation(),n=this.getOrientation();return this.x==t.x&&this.y==t.y&&this.offsets[0]==t.offsets[0]&&this.offsets[1]==t.offsets[1]&&n[0]==e[0]&&n[1]==e[1]},getUserDefinedLocation:function(){return this.userDefinedLocation},setUserDefinedLocation:function(t){this.userDefinedLocation=t},clearUserDefinedLocation:function(){this.userDefinedLocation=null},getOrientation:function(){return this.orientation},getCssClass:function(){return this.cssClass}}),jsPlumb.FloatingAnchor=function(t){jsPlumb.Anchor.apply(this,arguments);var e=t.reference,n=(t.jsPlumbInstance,t.referenceCanvas),o=jsPlumb.getSize(n),i=0,r=0,s=null,a=null;this.orientation=null,this.x=0,this.y=0,this.isFloating=!0,this.compute=function(t){var e=t.xy,n=(t.element,[e[0]+o[0]/2,e[1]+o[1]/2]);return a=n,n},this.getOrientation=function(t){if(s)return s;var n=e.getOrientation(t);return[-1*Math.abs(n[0])*i,-1*Math.abs(n[1])*r]},this.over=function(t,e){s=t.getOrientation(e)},this.out=function(){s=null},this.getCurrentLocation=function(t){return null==a?this.compute(t):a}},jsPlumbUtil.extend(jsPlumb.FloatingAnchor,jsPlumb.Anchor);var t=function(t,e,n){return t.constructor==jsPlumb.Anchor?t:e.makeAnchor(t,n,e)};jsPlumb.DynamicAnchor=function(e){jsPlumb.Anchor.apply(this,arguments),this.isSelective=!0,this.isDynamic=!0,this.anchors=[],this.elementId=e.elementId,this.jsPlumbInstance=e.jsPlumbInstance;for(var n=0;n<e.anchors.length;n++)this.anchors[n]=t(e.anchors[n],this.jsPlumbInstance,this.elementId);this.addAnchor=function(e){this.anchors.push(t(e,this.jsPlumbInstance,this.elementId))},this.getAnchors=function(){return this.anchors},this.locked=!1;var o=this.anchors.length>0?this.anchors[0]:null,i=(this.anchors.length>0?0:-1,o),r=this,s=function(t,e,n,o,i){var r=o[0]+t.x*i[0],s=o[1]+t.y*i[1],a=o[0]+i[0]/2,l=o[1]+i[1]/2;return Math.sqrt(Math.pow(e-r,2)+Math.pow(n-s,2))+Math.sqrt(Math.pow(a-r,2)+Math.pow(l-s,2))},a=e.selector||function(t,e,n,o,i){for(var r=n[0]+o[0]/2,a=n[1]+o[1]/2,l=-1,u=1/0,c=0;c<i.length;c++){var p=s(i[c],r,a,t,e);u>p&&(l=c+0,u=p)}return i[l]};this.compute=function(t){var e=t.xy,n=t.wh,s=t.timestamp,l=t.txy,u=t.twh;t.clearUserDefinedLocation&&(userDefinedLocation=null),this.timestamp=s;var c=r.getUserDefinedLocation();return null!=c?c:this.locked||null==l||null==u?o.compute(t):(t.timestamp=null,o=a(e,n,l,u,this.anchors),this.x=o.x,this.y=o.y,o!=i&&this.fire("anchorChanged",o),i=o,o.compute(t))},this.getCurrentLocation=function(t){return this.getUserDefinedLocation()||(null!=o?o.getCurrentLocation(t):null)},this.getOrientation=function(t){return null!=o?o.getOrientation(t):[0,0]},this.over=function(t,e){null!=o&&o.over(t,e)},this.out=function(){null!=o&&o.out()},this.getCssClass=function(){return o&&o.getCssClass()||""}},jsPlumbUtil.extend(jsPlumb.DynamicAnchor,jsPlumb.Anchor);var e=function(t,e,n,o,i,r){jsPlumb.Anchors[i]=function(s){var a=s.jsPlumbInstance.makeAnchor([t,e,n,o,0,0],s.elementId,s.jsPlumbInstance);return a.type=i,r&&r(a,s),a}};e(.5,0,0,-1,"TopCenter"),e(.5,1,0,1,"BottomCenter"),e(0,.5,-1,0,"LeftMiddle"),e(1,.5,1,0,"RightMiddle"),e(.5,0,0,-1,"Top"),e(.5,1,0,1,"Bottom"),e(0,.5,-1,0,"Left"),e(1,.5,1,0,"Right"),e(.5,.5,0,0,"Center"),e(1,0,0,-1,"TopRight"),e(1,1,0,1,"BottomRight"),e(0,0,0,-1,"TopLeft"),e(0,1,0,1,"BottomLeft"),jsPlumb.Defaults.DynamicAnchors=function(t){return t.jsPlumbInstance.makeAnchors(["TopCenter","RightMiddle","BottomCenter","LeftMiddle"],t.elementId,t.jsPlumbInstance)},jsPlumb.Anchors.AutoDefault=function(t){var e=t.jsPlumbInstance.makeDynamicAnchor(jsPlumb.Defaults.DynamicAnchors(t));return e.type="AutoDefault",e};var n=function(t,e){jsPlumb.Anchors[t]=function(n){var o=n.jsPlumbInstance.makeAnchor(["Continuous",{faces:e}],n.elementId,n.jsPlumbInstance);return o.type=t,o}};jsPlumb.Anchors.Continuous=function(t){return t.jsPlumbInstance.continuousAnchorFactory.get(t)},n("ContinuousLeft",["left"]),n("ContinuousTop",["top"]),n("ContinuousBottom",["bottom"]),n("ContinuousRight",["right"]),e(0,0,0,0,"Assign",function(t,e){var n=e.position||"Fixed";t.positionFinder=n.constructor==String?e.jsPlumbInstance.AnchorPositionFinders[n]:n,t.constructorParams=e}),jsPlumbInstance.prototype.AnchorPositionFinders={Fixed:function(t,e,n){return[(t.left-e.left)/n[0],(t.top-e.top)/n[1]]},Grid:function(t,e,n,o){var i=t.left-e.left,r=t.top-e.top,s=n[0]/o.grid[0],a=n[1]/o.grid[1],l=Math.floor(i/s),u=Math.floor(r/a);return[(l*s+s/2)/n[0],(u*a+a/2)/n[1]]}},jsPlumb.Anchors.Perimeter=function(t){t=t||{};var e=t.anchorCount||60,n=t.shape;if(!n)throw new Error("no shape supplied to Perimeter Anchor type");var o=function(){for(var t=.5,n=2*Math.PI/e,o=0,i=[],r=0;e>r;r++){var s=t+t*Math.sin(o),a=t+t*Math.cos(o);i.push([s,a,0,0]),o+=n}return i},i=function(t){for(var n=e/t.length,o=[],i=function(t,i,r,s,a){n=e*a;for(var l=(r-t)/n,u=(s-i)/n,c=0;n>c;c++)o.push([t+l*c,i+u*c,0,0])},r=0;r<t.length;r++)i.apply(null,t[r]);return o},r=function(t){for(var e=[],n=0;n<t.length;n++)e.push([t[n][0],t[n][1],t[n][2],t[n][3],1/t.length]);return i(e)},s=function(){return r([[0,0,1,0],[1,0,1,1],[1,1,0,1],[0,1,0,0]])},a={Circle:o,Ellipse:o,Diamond:function(){return r([[.5,0,1,.5],[1,.5,.5,1],[.5,1,0,.5],[0,.5,.5,0]])},Rectangle:s,Square:s,Triangle:function(){return r([[.5,0,1,1],[1,1,0,1],[0,1,.5,0]])},Path:function(t){for(var e=t.points,n=[],o=0,r=0;r<e.length-1;r++){var s=Math.sqrt(Math.pow(e[r][2]-e[r][0])+Math.pow(e[r][3]-e[r][1]));o+=s,n.push([e[r][0],e[r][1],e[r+1][0],e[r+1][1],s])}for(var a=0;a<n.length;a++)n[a][4]=n[a][4]/o;return i(n)}},l=function(t,e){for(var n=[],o=e/180*Math.PI,i=0;i<t.length;i++){var r=t[i][0]-.5,s=t[i][1]-.5;n.push([.5+(r*Math.cos(o)-s*Math.sin(o)),.5+(r*Math.sin(o)+s*Math.cos(o)),t[i][2],t[i][3]])}return n};if(!a[n])throw new Error("Shape ["+n+"] is unknown by Perimeter Anchor type");var u=a[n](t);t.rotation&&(u=l(u,t.rotation));var c=t.jsPlumbInstance.makeDynamicAnchor(u);return c.type="Perimeter",c}}(),function(){"use strict";jsPlumb.DOMElementComponent=jsPlumbUtil.extend(jsPlumb.jsPlumbUIComponent,function(){this.mousemove=this.dblclick=this.click=this.mousedown=this.mouseup=function(){}}),jsPlumb.Segments={AbstractSegment:function(t){this.params=t,this.findClosestPointOnPath=function(){return{d:1/0,x:null,y:null,l:null}},this.getBounds=function(){return{minX:Math.min(t.x1,t.x2),minY:Math.min(t.y1,t.y2),maxX:Math.max(t.x1,t.x2),maxY:Math.max(t.y1,t.y2)}}},Straight:function(t){var e,n,o,i,r,s,a,l=(jsPlumb.Segments.AbstractSegment.apply(this,arguments),function(){e=Math.sqrt(Math.pow(r-i,2)+Math.pow(a-s,2)),n=Biltong.gradient({x:i,y:s},{x:r,y:a}),o=-1/n});this.type="Straight",this.getLength=function(){return e},this.getGradient=function(){return n},this.getCoordinates=function(){return{x1:i,y1:s,x2:r,y2:a}},this.setCoordinates=function(t){i=t.x1,s=t.y1,r=t.x2,a=t.y2,l()},this.setCoordinates({x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2}),this.getBounds=function(){return{minX:Math.min(i,r),minY:Math.min(s,a),maxX:Math.max(i,r),maxY:Math.max(s,a)}},this.pointOnPath=function(t,n){if(0!==t||n){if(1!=t||n){var o=n?t>0?t:e+t:t*e;return Biltong.pointOnLine({x:i,y:s},{x:r,y:a},o)}return{x:r,y:a}}return{x:i,y:s}},this.gradientAtPoint=function(){return n},this.pointAlongPathFrom=function(t,e,n){var o=this.pointOnPath(t,n),l=0>=e?{x:i,y:s}:{x:r,y:a};return 0>=e&&Math.abs(e)>1&&(e*=-1),Biltong.pointOnLine(o,l,e)};var u=function(t,e,n){return n>=Math.min(t,e)&&n<=Math.max(t,e)},c=function(t,e,n){return Math.abs(n-t)<Math.abs(n-e)?t:e};this.findClosestPointOnPath=function(t,l){var p={d:1/0,x:null,y:null,l:null,x1:i,x2:r,y1:s,y2:a};if(0===n)p.y=s,p.x=u(i,r,t)?t:c(i,r,t);else if(1/0==n||n==-1/0)p.x=i,p.y=u(s,a,l)?l:c(s,a,l);else{var d=s-n*i,h=l-o*t,f=(h-d)/(n-o),m=n*f+d;p.x=u(i,r,f)?f:c(i,r,f),p.y=u(s,a,m)?m:c(s,a,m)}var g=Biltong.lineLength([p.x,p.y],[i,s]);return p.d=Biltong.lineLength([t,l],[p.x,p.y]),p.l=g/e,p}},Arc:function(t){var e=(jsPlumb.Segments.AbstractSegment.apply(this,arguments),function(e,n){return Biltong.theta([t.cx,t.cy],[e,n])}),n=function(t,e){if(t.anticlockwise){var n=t.startAngle<t.endAngle?t.startAngle+o:t.startAngle,i=Math.abs(n-t.endAngle);return n-i*e}var r=t.endAngle<t.startAngle?t.endAngle+o:t.endAngle,s=Math.abs(r-t.startAngle);return t.startAngle+s*e},o=2*Math.PI;this.radius=t.r,this.anticlockwise=t.ac,this.type="Arc",t.startAngle&&t.endAngle?(this.startAngle=t.startAngle,this.endAngle=t.endAngle,this.x1=t.cx+this.radius*Math.cos(t.startAngle),this.y1=t.cy+this.radius*Math.sin(t.startAngle),this.x2=t.cx+this.radius*Math.cos(t.endAngle),this.y2=t.cy+this.radius*Math.sin(t.endAngle)):(this.startAngle=e(t.x1,t.y1),this.endAngle=e(t.x2,t.y2),this.x1=t.x1,this.y1=t.y1,this.x2=t.x2,this.y2=t.y2),this.endAngle<0&&(this.endAngle+=o),this.startAngle<0&&(this.startAngle+=o),this.segment=Biltong.quadrant([this.x1,this.y1],[this.x2,this.y2]);var i=this.endAngle<this.startAngle?this.endAngle+o:this.endAngle;this.sweep=Math.abs(i-this.startAngle),this.anticlockwise&&(this.sweep=o-this.sweep);var r=2*Math.PI*this.radius,s=this.sweep/o,a=r*s;this.getLength=function(){return a},this.getBounds=function(){return{minX:t.cx-t.r,maxX:t.cx+t.r,minY:t.cy-t.r,maxY:t.cy+t.r}};var l=1e-10,u=function(t){var e=Math.floor(t),n=Math.ceil(t);return l>t-e?e:l>n-t?n:t};this.pointOnPath=function(e,o){if(0===e)return{x:this.x1,y:this.y1,theta:this.startAngle};if(1==e)return{x:this.x2,y:this.y2,theta:this.endAngle};o&&(e/=a);var i=n(this,e),r=t.cx+t.r*Math.cos(i),s=t.cy+t.r*Math.sin(i);return{x:u(r),y:u(s),theta:i}},this.gradientAtPoint=function(e,n){var o=this.pointOnPath(e,n),i=Biltong.normal([t.cx,t.cy],[o.x,o.y]);return this.anticlockwise||1/0!=i&&i!=-1/0||(i*=-1),i},this.pointAlongPathFrom=function(e,n,o){var i=this.pointOnPath(e,o),s=2*(n/r)*Math.PI,a=this.anticlockwise?-1:1,l=i.theta+a*s,u=t.cx+this.radius*Math.cos(l),c=t.cy+this.radius*Math.sin(l);return{x:u,y:c}}},Bezier:function(t){var e=(jsPlumb.Segments.AbstractSegment.apply(this,arguments),[{x:t.x1,y:t.y1},{x:t.cp1x,y:t.cp1y},{x:t.cp2x,y:t.cp2y},{x:t.x2,y:t.y2}]),n={minX:Math.min(t.x1,t.x2,t.cp1x,t.cp2x),minY:Math.min(t.y1,t.y2,t.cp1y,t.cp2y),maxX:Math.max(t.x1,t.x2,t.cp1x,t.cp2x),maxY:Math.max(t.y1,t.y2,t.cp1y,t.cp2y)};
this.type="Bezier";var o=function(t,e,n){return n&&(e=jsBezier.locationAlongCurveFrom(t,e>0?0:1,e)),e};this.pointOnPath=function(t,n){return t=o(e,t,n),jsBezier.pointOnCurve(e,t)},this.gradientAtPoint=function(t,n){return t=o(e,t,n),jsBezier.gradientAtPoint(e,t)},this.pointAlongPathFrom=function(t,n,i){return t=o(e,t,i),jsBezier.pointAlongCurveFrom(e,t,n)},this.getLength=function(){return jsBezier.getLength(e)},this.getBounds=function(){return n}}};var t=function(){this.resetBounds=function(){this.bounds={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}},this.resetBounds()};jsPlumb.Connectors.AbstractConnector=function(e){t.apply(this,arguments);var n=[],o=0,i=[],r=[],s=e.stub||0,a=jsPlumbUtil.isArray(s)?s[0]:s,l=jsPlumbUtil.isArray(s)?s[1]:s,u=e.gap||0,c=jsPlumbUtil.isArray(u)?u[0]:u,p=jsPlumbUtil.isArray(u)?u[1]:u,d=null,h=!1,f=null;this.isEditable=function(){return!1},this.setEdited=function(t){h=t},this.getPath=function(){},this.setPath=function(){},this.findSegmentForPoint=function(t,e){for(var o={d:1/0,s:null,x:null,y:null,l:null},i=0;i<n.length;i++){var r=n[i].findClosestPointOnPath(t,e);r.d<o.d&&(o.d=r.d,o.l=r.l,o.x=r.x,o.y=r.y,o.s=n[i],o.x1=r.x1,o.x2=r.x2,o.y1=r.y1,o.y2=r.y2,o.index=i)}return o};var m=function(){for(var t=0,e=0;e<n.length;e++){var s=n[e].getLength();r[e]=s/o,i[e]=[t,t+=s/o]}},g=function(t,e){e&&(t=t>0?t/o:(o+t)/o);for(var s=i.length-1,a=1,l=0;l<i.length;l++)if(i[l][1]>=t){s=l,a=1==t?1:0===t?0:(t-i[l][0])/r[l];break}return{segment:n[s],proportion:a,index:s}},v=function(t,e,i){if(i.x1!=i.x2||i.y1!=i.y2){var r=new jsPlumb.Segments[e](i);n.push(r),o+=r.getLength(),t.updateBounds(r)}},y=function(){o=n.length=i.length=r.length=0};this.setSegments=function(t){d=[],o=0;for(var e=0;e<t.length;e++)d.push(t[e]),o+=t[e].getLength()};var b=function(t){this.lineWidth=t.lineWidth;var e=Biltong.quadrant(t.sourcePos,t.targetPos),n=t.targetPos[0]<t.sourcePos[0],o=t.targetPos[1]<t.sourcePos[1],i=t.lineWidth||1,r=t.sourceEndpoint.anchor.getOrientation(t.sourceEndpoint),s=t.targetEndpoint.anchor.getOrientation(t.targetEndpoint),u=n?t.targetPos[0]:t.sourcePos[0],d=o?t.targetPos[1]:t.sourcePos[1],h=Math.abs(t.targetPos[0]-t.sourcePos[0]),f=Math.abs(t.targetPos[1]-t.sourcePos[1]);if(0===r[0]&&0===r[1]||0===s[0]&&0===s[1]){var m=h>f?0:1,g=[1,0][m];r=[],s=[],r[m]=t.sourcePos[m]>t.targetPos[m]?-1:1,s[m]=t.sourcePos[m]>t.targetPos[m]?1:-1,r[g]=0,s[g]=0}var v=n?h+c*r[0]:c*r[0],y=o?f+c*r[1]:c*r[1],b=n?p*s[0]:h+p*s[0],C=o?p*s[1]:f+p*s[1],P=r[0]*s[0]+r[1]*s[1],x={sx:v,sy:y,tx:b,ty:C,lw:i,xSpan:Math.abs(b-v),ySpan:Math.abs(C-y),mx:(v+b)/2,my:(y+C)/2,so:r,to:s,x:u,y:d,w:h,h:f,segment:e,startStubX:v+r[0]*a,startStubY:y+r[1]*a,endStubX:b+s[0]*l,endStubY:C+s[1]*l,isXGreaterThanStubTimes2:Math.abs(v-b)>a+l,isYGreaterThanStubTimes2:Math.abs(y-C)>a+l,opposite:-1==P,perpendicular:0===P,orthogonal:1==P,sourceAxis:0===r[0]?"y":"x",points:[u,d,h,f,v,y,b,C]};return x.anchorOrientation=x.opposite?"opposite":x.orthogonal?"orthogonal":"perpendicular",x};return this.getSegments=function(){return n},this.updateBounds=function(t){var e=t.getBounds();this.bounds.minX=Math.min(this.bounds.minX,e.minX),this.bounds.maxX=Math.max(this.bounds.maxX,e.maxX),this.bounds.minY=Math.min(this.bounds.minY,e.minY),this.bounds.maxY=Math.max(this.bounds.maxY,e.maxY)},this.pointOnPath=function(t,e){var n=g(t,e);return n.segment&&n.segment.pointOnPath(n.proportion,!1)||[0,0]},this.gradientAtPoint=function(t,e){var n=g(t,e);return n.segment&&n.segment.gradientAtPoint(n.proportion,!1)||0},this.pointAlongPathFrom=function(t,e,n){var o=g(t,n);return o.segment&&o.segment.pointAlongPathFrom(o.proportion,e,!1)||[0,0]},this.compute=function(t){h||(f=b.call(this,t)),y(),this._compute(f,t),this.x=f.points[0],this.y=f.points[1],this.w=f.points[2],this.h=f.points[3],this.segment=f.segment,m()},{addSegment:v,prepareCompute:b,sourceStub:a,targetStub:l,maxStub:Math.max(a,l),sourceGap:c,targetGap:p,maxGap:Math.max(c,p)}},jsPlumbUtil.extend(jsPlumb.Connectors.AbstractConnector,t);var e=jsPlumb.Connectors.Straight=function(){this.type="Straight";var t=jsPlumb.Connectors.AbstractConnector.apply(this,arguments);this._compute=function(e){t.addSegment(this,"Straight",{x1:e.sx,y1:e.sy,x2:e.startStubX,y2:e.startStubY}),t.addSegment(this,"Straight",{x1:e.startStubX,y1:e.startStubY,x2:e.endStubX,y2:e.endStubY}),t.addSegment(this,"Straight",{x1:e.endStubX,y1:e.endStubY,x2:e.tx,y2:e.ty})}};jsPlumbUtil.extend(jsPlumb.Connectors.Straight,jsPlumb.Connectors.AbstractConnector),jsPlumb.registerConnectorType(e,"Straight"),jsPlumb.Endpoints.AbstractEndpoint=function(e){t.apply(this,arguments);var n=this.compute=function(){var t=this._compute.apply(this,arguments);return this.x=t[0],this.y=t[1],this.w=t[2],this.h=t[3],this.bounds.minX=this.x,this.bounds.minY=this.y,this.bounds.maxX=this.x+this.w,this.bounds.maxY=this.y+this.h,t};return{compute:n,cssClass:e.cssClass}},jsPlumbUtil.extend(jsPlumb.Endpoints.AbstractEndpoint,t),jsPlumb.Endpoints.Dot=function(t){this.type="Dot",jsPlumb.Endpoints.AbstractEndpoint.apply(this,arguments),t=t||{},this.radius=t.radius||10,this.defaultOffset=.5*this.radius,this.defaultInnerRadius=this.radius/3,this._compute=function(t,e,n){this.radius=n.radius||this.radius;var o=t[0]-this.radius,i=t[1]-this.radius,r=2*this.radius,s=2*this.radius;if(n.strokeStyle){var a=n.lineWidth||1;o-=a,i-=a,r+=2*a,s+=2*a}return[o,i,r,s,this.radius]}},jsPlumbUtil.extend(jsPlumb.Endpoints.Dot,jsPlumb.Endpoints.AbstractEndpoint),jsPlumb.Endpoints.Rectangle=function(t){this.type="Rectangle",jsPlumb.Endpoints.AbstractEndpoint.apply(this,arguments),t=t||{},this.width=t.width||20,this.height=t.height||20,this._compute=function(t,e,n){var o=n.width||this.width,i=n.height||this.height,r=t[0]-o/2,s=t[1]-i/2;return[r,s,o,i]}},jsPlumbUtil.extend(jsPlumb.Endpoints.Rectangle,jsPlumb.Endpoints.AbstractEndpoint);var n=function(){jsPlumb.DOMElementComponent.apply(this,arguments),this._jsPlumb.displayElements=[]};jsPlumbUtil.extend(n,jsPlumb.DOMElementComponent,{getDisplayElements:function(){return this._jsPlumb.displayElements},appendDisplayElement:function(t){this._jsPlumb.displayElements.push(t)}}),jsPlumb.Endpoints.Image=function(t){this.type="Image",n.apply(this,arguments),jsPlumb.Endpoints.AbstractEndpoint.apply(this,arguments);var e=t.onload,o=t.src||t.url,i=t.cssClass?" "+t.cssClass:"";this._jsPlumb.img=new Image,this._jsPlumb.ready=!1,this._jsPlumb.initialized=!1,this._jsPlumb.deleted=!1,this._jsPlumb.widthToUse=t.width,this._jsPlumb.heightToUse=t.height,this._jsPlumb.endpoint=t.endpoint,this._jsPlumb.img.onload=function(){null!=this._jsPlumb&&(this._jsPlumb.ready=!0,this._jsPlumb.widthToUse=this._jsPlumb.widthToUse||this._jsPlumb.img.width,this._jsPlumb.heightToUse=this._jsPlumb.heightToUse||this._jsPlumb.img.height,e&&e(this))}.bind(this),this._jsPlumb.endpoint.setImage=function(t,n){var o=t.constructor==String?t:t.src;e=n,this._jsPlumb.img.src=o,null!=this.canvas&&this.canvas.setAttribute("src",this._jsPlumb.img.src)}.bind(this),this._jsPlumb.endpoint.setImage(o,e),this._compute=function(t){return this.anchorPoint=t,this._jsPlumb.ready?[t[0]-this._jsPlumb.widthToUse/2,t[1]-this._jsPlumb.heightToUse/2,this._jsPlumb.widthToUse,this._jsPlumb.heightToUse]:[0,0,0,0]},this.canvas=document.createElement("img"),this.canvas.style.margin=0,this.canvas.style.padding=0,this.canvas.style.outline=0,this.canvas.style.position="absolute",this.canvas.className=this._jsPlumb.instance.endpointClass+i,this._jsPlumb.widthToUse&&this.canvas.setAttribute("width",this._jsPlumb.widthToUse),this._jsPlumb.heightToUse&&this.canvas.setAttribute("height",this._jsPlumb.heightToUse),this._jsPlumb.instance.appendElement(this.canvas),this.attachListeners(this.canvas,this),this.actuallyPaint=function(){if(!this._jsPlumb.deleted){this._jsPlumb.initialized||(this.canvas.setAttribute("src",this._jsPlumb.img.src),this.appendDisplayElement(this.canvas),this._jsPlumb.initialized=!0);var t=this.anchorPoint[0]-this._jsPlumb.widthToUse/2,e=this.anchorPoint[1]-this._jsPlumb.heightToUse/2;jsPlumbUtil.sizeElement(this.canvas,t,e,this._jsPlumb.widthToUse,this._jsPlumb.heightToUse)}},this.paint=function(t,e){null!=this._jsPlumb&&(this._jsPlumb.ready?this.actuallyPaint(t,e):window.setTimeout(function(){this.paint(t,e)}.bind(this),200))}},jsPlumbUtil.extend(jsPlumb.Endpoints.Image,[n,jsPlumb.Endpoints.AbstractEndpoint],{cleanup:function(){this._jsPlumb.deleted=!0,this.canvas&&this.canvas.parentNode.removeChild(this.canvas),this.canvas=null}}),jsPlumb.Endpoints.Blank=function(){jsPlumb.Endpoints.AbstractEndpoint.apply(this,arguments),this.type="Blank",n.apply(this,arguments),this._compute=function(t){return[t[0],t[1],10,0]},this.canvas=document.createElement("div"),this.canvas.style.display="block",this.canvas.style.width="1px",this.canvas.style.height="1px",this.canvas.style.background="transparent",this.canvas.style.position="absolute",this.canvas.className=this._jsPlumb.endpointClass,jsPlumb.appendElement(this.canvas),this.paint=function(){jsPlumbUtil.sizeElement(this.canvas,this.x,this.y,this.w,this.h)}},jsPlumbUtil.extend(jsPlumb.Endpoints.Blank,[jsPlumb.Endpoints.AbstractEndpoint,n],{cleanup:function(){this.canvas&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}}),jsPlumb.Endpoints.Triangle=function(t){this.type="Triangle",jsPlumb.Endpoints.AbstractEndpoint.apply(this,arguments),t=t||{},t.width=t.width||55,t.height=t.height||55,this.width=t.width,this.height=t.height,this._compute=function(t,e,n){var o=n.width||self.width,i=n.height||self.height,r=t[0]-o/2,s=t[1]-i/2;return[r,s,o,i]}};var o=jsPlumb.Overlays.AbstractOverlay=function(t){this.visible=!0,this.isAppendedAtTopLevel=!0,this.component=t.component,this.loc=null==t.location?.5:t.location,this.endpointLoc=null==t.endpointLocation?[.5,.5]:t.endpointLocation};o.prototype={cleanup:function(){this.component=null,this.canvas=null,this.endpointLoc=null},setVisible:function(t){this.visible=t,this.component.repaint()},isVisible:function(){return this.visible},hide:function(){this.setVisible(!1)},show:function(){this.setVisible(!0)},incrementLocation:function(t){this.loc+=t,this.component.repaint()},setLocation:function(t){this.loc=t,this.component.repaint()},getLocation:function(){return this.loc}},jsPlumb.Overlays.Arrow=function(t){this.type="Arrow",o.apply(this,arguments),this.isAppendedAtTopLevel=!1,t=t||{};var e=jsPlumbUtil,n=Biltong;this.length=t.length||20,this.width=t.width||20,this.id=t.id;var i=(t.direction||1)<0?-1:1,r=t.paintStyle||{lineWidth:1},s=t.foldback||.623;this.computeMaxSize=function(){return 1.5*self.width},this.draw=function(t,o){var a,l,u,c,p;if(t.pointAlongPathFrom){if(e.isString(this.loc)||this.loc>1||this.loc<0){var d=parseInt(this.loc,10),h=this.loc<0?1:0;a=t.pointAlongPathFrom(h,d,!1),l=t.pointAlongPathFrom(h,d-i*this.length/2,!1),u=n.pointOnLine(a,l,this.length)}else if(1==this.loc){if(a=t.pointOnPath(this.loc),l=t.pointAlongPathFrom(this.loc,-this.length),u=n.pointOnLine(a,l,this.length),-1==i){var f=u;u=a,a=f}}else if(0===this.loc){if(u=t.pointOnPath(this.loc),l=t.pointAlongPathFrom(this.loc,this.length),a=n.pointOnLine(u,l,this.length),-1==i){var m=u;u=a,a=m}}else a=t.pointAlongPathFrom(this.loc,i*this.length/2),l=t.pointOnPath(this.loc),u=n.pointOnLine(a,l,this.length);c=n.perpendicularLineTo(a,u,this.width),p=n.pointOnLine(a,u,s*this.length);var g={hxy:a,tail:c,cxy:p},v=r.strokeStyle||o.strokeStyle,y=r.fillStyle||o.strokeStyle,b=r.lineWidth||o.lineWidth,C={component:t,d:g,lineWidth:b,strokeStyle:v,fillStyle:y,minX:Math.min(a.x,c[0].x,c[1].x),maxX:Math.max(a.x,c[0].x,c[1].x),minY:Math.min(a.y,c[0].y,c[1].y),maxY:Math.max(a.y,c[0].y,c[1].y)};return C}return{component:t,minX:0,maxX:0,minY:0,maxY:0}}},jsPlumbUtil.extend(jsPlumb.Overlays.Arrow,o),jsPlumb.Overlays.PlainArrow=function(t){t=t||{};var e=jsPlumb.extend(t,{foldback:1});jsPlumb.Overlays.Arrow.call(this,e),this.type="PlainArrow"},jsPlumbUtil.extend(jsPlumb.Overlays.PlainArrow,jsPlumb.Overlays.Arrow),jsPlumb.Overlays.Diamond=function(t){t=t||{};var e=t.length||40,n=jsPlumb.extend(t,{length:e/2,foldback:2});jsPlumb.Overlays.Arrow.call(this,n),this.type="Diamond"},jsPlumbUtil.extend(jsPlumb.Overlays.Diamond,jsPlumb.Overlays.Arrow);var i=function(t){return null==t._jsPlumb.cachedDimensions&&(t._jsPlumb.cachedDimensions=t.getDimensions()),t._jsPlumb.cachedDimensions},r=function(t){jsPlumb.DOMElementComponent.apply(this,arguments),o.apply(this,arguments),this.id=t.id,this._jsPlumb.div=null,this._jsPlumb.initialised=!1,this._jsPlumb.component=t.component,this._jsPlumb.cachedDimensions=null,this._jsPlumb.create=t.create,this.getElement=function(){if(null==this._jsPlumb.div){var e=this._jsPlumb.div=jsPlumb.getDOMElement(this._jsPlumb.create(this._jsPlumb.component));e.style.position="absolute";var n=this._jsPlumb.instance.overlayClass+" "+(this.cssClass?this.cssClass:t.cssClass?t.cssClass:"");e.className=n,this._jsPlumb.instance.appendElement(e),this._jsPlumb.instance.getId(e),this.attachListeners(e,this),this.canvas=e}return this._jsPlumb.div},this.draw=function(t,e,n){var o=i(this);if(null!=o&&2==o.length){var r={x:0,y:0};if(n)r={x:n[0],y:n[1]};else if(t.pointOnPath){var s=this.loc,a=!1;(jsPlumbUtil.isString(this.loc)||this.loc<0||this.loc>1)&&(s=parseInt(this.loc,10),a=!0),r=t.pointOnPath(s,a)}else{var l=this.loc.constructor==Array?this.loc:this.endpointLoc;r={x:l[0]*t.w,y:l[1]*t.h}}var u=r.x-o[0]/2,c=r.y-o[1]/2;return{component:t,d:{minx:u,miny:c,td:o,cxy:r},minX:u,maxX:u+o[0],minY:c,maxY:c+o[1]}}return{minX:0,maxX:0,minY:0,maxY:0}}};jsPlumbUtil.extend(r,[jsPlumb.DOMElementComponent,o],{getDimensions:function(){return jsPlumb.getSize(this.getElement())},setVisible:function(t){this._jsPlumb.div.style.display=t?"block":"none"},clearCachedDimensions:function(){this._jsPlumb.cachedDimensions=null},cleanup:function(){null!=this._jsPlumb.div&&this._jsPlumb.instance.removeElement(this._jsPlumb.div)},computeMaxSize:function(){var t=i(this);return Math.max(t[0],t[1])},reattachListeners:function(t){this._jsPlumb.div&&this.reattachListenersForElement(this._jsPlumb.div,this,t)},paint:function(t){this._jsPlumb.initialised||(this.getElement(),t.component.appendDisplayElement(this._jsPlumb.div),this.attachListeners(this._jsPlumb.div,t.component),this._jsPlumb.initialised=!0),this._jsPlumb.div.style.left=t.component.x+t.d.minx+"px",this._jsPlumb.div.style.top=t.component.y+t.d.miny+"px"}}),jsPlumb.Overlays.Custom=function(){this.type="Custom",r.apply(this,arguments)},jsPlumbUtil.extend(jsPlumb.Overlays.Custom,r),jsPlumb.Overlays.GuideLines=function(){var t=this;t.length=50,t.lineWidth=5,this.type="GuideLines",o.apply(this,arguments),jsPlumb.jsPlumbUIComponent.apply(this,arguments),this.draw=function(e){var n=e.pointAlongPathFrom(t.loc,t.length/2),o=e.pointOnPath(t.loc),i=Biltong.pointOnLine(n,o,t.length),r=Biltong.perpendicularLineTo(n,i,40),s=Biltong.perpendicularLineTo(i,n,20);return{connector:e,head:n,tail:i,headLine:s,tailLine:r,minX:Math.min(n.x,i.x,s[0].x,s[1].x),minY:Math.min(n.y,i.y,s[0].y,s[1].y),maxX:Math.max(n.x,i.x,s[0].x,s[1].x),maxY:Math.max(n.y,i.y,s[0].y,s[1].y)}}},jsPlumb.Overlays.Label=function(t){this.labelStyle=t.labelStyle,this.cssClass=null!=this.labelStyle?this.labelStyle.cssClass:null;var e=jsPlumb.extend({create:function(){return document.createElement("div")}},t);if(jsPlumb.Overlays.Custom.call(this,e),this.type="Label",this.label=t.label||"",this.labelText=null,this.labelStyle){var n=this.getElement();if(this.labelStyle.font=this.labelStyle.font||"12px sans-serif",n.style.font=this.labelStyle.font,n.style.color=this.labelStyle.color||"black",this.labelStyle.fillStyle&&(n.style.background=this.labelStyle.fillStyle),this.labelStyle.borderWidth>0){var o=this.labelStyle.borderStyle?this.labelStyle.borderStyle:"black";n.style.border=this.labelStyle.borderWidth+"px solid "+o}this.labelStyle.padding&&(n.style.padding=this.labelStyle.padding)}},jsPlumbUtil.extend(jsPlumb.Overlays.Label,jsPlumb.Overlays.Custom,{cleanup:function(){this.div=null,this.label=null,this.labelText=null,this.cssClass=null,this.labelStyle=null},getLabel:function(){return this.label},setLabel:function(t){this.label=t,this.labelText=null,this.clearCachedDimensions(),this.update(),this.component.repaint()},getDimensions:function(){return this.update(),r.prototype.getDimensions.apply(this,arguments)},update:function(){if("function"==typeof this.label){var t=this.label(this);this.getElement().innerHTML=t.replace(/\r\n/g,"<br/>")}else null==this.labelText&&(this.labelText=this.label,this.getElement().innerHTML=this.labelText.replace(/\r\n/g,"<br/>"))}})}(),function(){"use strict";var t=function(t){this.type="Flowchart",t=t||{},t.stub=null==t.stub?30:t.stub;var e,n=jsPlumb.Connectors.AbstractConnector.apply(this,arguments),o=null==t.midpoint?.5:t.midpoint,i=[],r=(t.grid,t.alwaysRespectStubs),s=null,a=null,l=null,u=null!=t.cornerRadius?t.cornerRadius:0,c=function(t){return 0>t?-1:0===t?0:1},p=function(t,e,n,o){if(a!=e||l!=n){var i=null==a?o.sx:a,r=null==l?o.sy:l,s=i==e?"v":"h",u=c(e-i),p=c(n-r);a=e,l=n,t.push([i,r,e,n,s,u,p])}},d=function(t){return Math.sqrt(Math.pow(t[0]-t[2],2)+Math.pow(t[1]-t[3],2))},h=function(t){var e=[];return e.push.apply(e,t),e},f=function(t,e,o){for(var i,r,s=0;s<e.length-1;s++){if(i=i||h(e[s]),r=h(e[s+1]),u>0&&i[4]!=r[4]){var a=Math.min(u,d(i),d(r));i[2]-=i[5]*a,i[3]-=i[6]*a,r[0]+=r[5]*a,r[1]+=r[6]*a;var l=i[6]==r[5]&&1==r[5]||i[6]==r[5]&&0===r[5]&&i[5]!=r[6]||i[6]==r[5]&&-1==r[5],c=r[1]>i[3]?1:-1,p=r[0]>i[2]?1:-1,f=c==p,m=f&&l||!f&&!l?r[0]:i[2],g=f&&l||!f&&!l?i[3]:r[1];n.addSegment(t,"Straight",{x1:i[0],y1:i[1],x2:i[2],y2:i[3]}),n.addSegment(t,"Arc",{r:a,x1:i[2],y1:i[3],x2:r[0],y2:r[1],cx:m,cy:g,ac:l})}else{var v=i[2]==i[0]?0:i[2]>i[0]?o.lw/2:-(o.lw/2),y=i[3]==i[1]?0:i[3]>i[1]?o.lw/2:-(o.lw/2);n.addSegment(t,"Straight",{x1:i[0]-v,y1:i[1]-y,x2:i[2]+v,y2:i[3]+y})}i=r}null!=r&&n.addSegment(t,"Straight",{x1:r[0],y1:r[1],x2:r[2],y2:r[3]})};this.setSegments=function(t){s=t},this.isEditable=function(){return!0},this.getOriginalSegments=function(){return s||i},this._compute=function(t,u){if(u.clearEdits&&(s=null),null!=s)return void f(this,s,t);i=[],a=null,l=null,e=null;var c=t.startStubX+(t.endStubX-t.startStubX)*o,d=t.startStubY+(t.endStubY-t.startStubY)*o,h={x:[0,1],y:[1,0]},m=function(){return[t.startStubX,t.startStubY,t.endStubX,t.endStubY]},g={perpendicular:m,orthogonal:m,opposite:function(e){var n=t,o="x"==e?0:1,i={x:function(){return 1==n.so[o]&&(n.startStubX>n.endStubX&&n.tx>n.startStubX||n.sx>n.endStubX&&n.tx>n.sx)||-1==n.so[o]&&(n.startStubX<n.endStubX&&n.tx<n.startStubX||n.sx<n.endStubX&&n.tx<n.sx)},y:function(){return 1==n.so[o]&&(n.startStubY>n.endStubY&&n.ty>n.startStubY||n.sy>n.endStubY&&n.ty>n.sy)||-1==n.so[o]&&(n.startStubY<n.endStubY&&n.ty<n.startStubY||n.sy<n.endStubY&&n.ty<n.sy)}};return!r&&i[e]()?{x:[(t.sx+t.tx)/2,t.startStubY,(t.sx+t.tx)/2,t.endStubY],y:[t.startStubX,(t.sy+t.ty)/2,t.endStubX,(t.sy+t.ty)/2]}[e]:[t.startStubX,t.startStubY,t.endStubX,t.endStubY]}},v={perpendicular:function(e){var n=t,o={x:[[[1,2,3,4],null,[2,1,4,3]],null,[[4,3,2,1],null,[3,4,1,2]]],y:[[[3,2,1,4],null,[2,3,4,1]],null,[[4,1,2,3],null,[1,4,3,2]]]},i={x:[[n.startStubX,n.endStubX],null,[n.endStubX,n.startStubX]],y:[[n.startStubY,n.endStubY],null,[n.endStubY,n.startStubY]]},r={x:[[c,n.startStubY],[c,n.endStubY]],y:[[n.startStubX,d],[n.endStubX,d]]},s={x:[[n.endStubX,n.startStubY]],y:[[n.startStubX,n.endStubY]]},a={x:[[n.startStubX,n.endStubY],[n.endStubX,n.endStubY]],y:[[n.endStubX,n.startStubY],[n.endStubX,n.endStubY]]},l={x:[[n.startStubX,d],[n.endStubX,d],[n.endStubX,n.endStubY]],y:[[c,n.startStubY],[c,n.endStubY],[n.endStubX,n.endStubY]]},u={x:[n.startStubY,n.endStubY],y:[n.startStubX,n.endStubX]},p=h[e][0],f=h[e][1],m=n.so[p]+1,g=n.to[f]+1,v=-1==n.to[f]&&u[e][1]<u[e][0]||1==n.to[f]&&u[e][1]>u[e][0],y=i[e][m][0],b=i[e][m][1],C=o[e][m][g];return n.segment==C[3]||n.segment==C[2]&&v?r[e]:n.segment==C[2]&&y>b?s[e]:n.segment==C[2]&&b>=y||n.segment==C[1]&&!v?l[e]:n.segment==C[0]||n.segment==C[1]&&v?a[e]:void 0},orthogonal:function(e,n,o,i,r){var s=t,a={x:-1==s.so[0]?Math.min(n,i):Math.max(n,i),y:-1==s.so[1]?Math.min(n,i):Math.max(n,i)}[e];return{x:[[a,o],[a,r],[i,r]],y:[[o,a],[r,a],[r,i]]}[e]},opposite:function(e,o,i,r){var s=t,a={x:"y",y:"x"}[e],l={x:"height",y:"width"}[e],p=s["is"+e.toUpperCase()+"GreaterThanStubTimes2"];if(u.sourceEndpoint.elementId==u.targetEndpoint.elementId){var h=i+(1-u.sourceEndpoint.anchor[a])*u.sourceInfo[l]+n.maxStub;return{x:[[o,h],[r,h]],y:[[h,o],[h,r]]}[e]}return!p||1==s.so[b]&&o>r||-1==s.so[b]&&r>o?{x:[[o,d],[r,d]],y:[[c,o],[c,r]]}[e]:1==s.so[b]&&r>o||-1==s.so[b]&&o>r?{x:[[c,s.sy],[c,s.ty]],y:[[s.sx,d],[s.tx,d]]}[e]:void 0}},y=g[t.anchorOrientation](t.sourceAxis),b="x"==t.sourceAxis?0:1,C="x"==t.sourceAxis?1:0,P=y[b],x=y[C],E=y[b+2],_=y[C+2];p(i,y[0],y[1],t);var w=v[t.anchorOrientation](t.sourceAxis,P,x,E,_);if(w)for(var D=0;D<w.length;D++)p(i,w[D][0],w[D][1],t);p(i,y[2],y[3],t),p(i,t.tx,t.ty,t),f(this,i,t)},this.getPath=function(){for(var t=null,e=null,n=[],o=s||i,r=0;r<o.length;r++){var a=o[r],l=a[4],u="v"==l?3:2;null!=t&&e===l?t[u]=a[u]:(a[0]!=a[2]||a[1]!=a[3])&&(n.push({start:[a[0],a[1]],end:[a[2],a[3]]}),t=a,e=a[4])}return n},this.setPath=function(t){s=[];for(var e=0;e<t.length;e++){var n=t[e].start[0],o=t[e].start[1],i=t[e].end[0],r=t[e].end[1],a=n==i?"v":"h",l=c(i-n),u=c(r-o);s.push([n,o,i,r,a,l,u])}}};jsPlumbUtil.extend(t,jsPlumb.Connectors.AbstractConnector),jsPlumb.registerConnectorType(t,"Flowchart")}(),function(){"use strict";var t=function(t,e,n,o){return n>=t&&e>=o?1:n>=t&&o>=e?2:t>=n&&o>=e?3:4},e=function(t,e,n,o,i,r,s,a,l){return l>=a?[t,e]:1===n?o[3]<=0&&i[3]>=1?[t+(o[2]<.5?-1*r:r),e]:o[2]>=1&&i[2]<=0?[t,e+(o[3]<.5?-1*s:s)]:[t+-1*r,e+-1*s]:2===n?o[3]>=1&&i[3]<=0?[t+(o[2]<.5?-1*r:r),e]:o[2]>=1&&i[2]<=0?[t,e+(o[3]<.5?-1*s:s)]:[t+1*r,e+-1*s]:3===n?o[3]>=1&&i[3]<=0?[t+(o[2]<.5?-1*r:r),e]:o[2]<=0&&i[2]>=1?[t,e+(o[3]<.5?-1*s:s)]:[t+-1*r,e+-1*s]:4===n?o[3]<=0&&i[3]>=1?[t+(o[2]<.5?-1*r:r),e]:o[2]<=0&&i[2]>=1?[t,e+(o[3]<.5?-1*s:s)]:[t+1*r,e+-1*s]:void 0},n=function(n){n=n||{},this.type="StateMachine";var o=jsPlumb.Connectors.AbstractConnector.apply(this,arguments),i=n.curviness||10,r=n.margin||5,s=n.proximityLimit||80,a=n.orientation&&"clockwise"===n.orientation,l=n.loopbackRadius||25,u=n.showLoopback!==!1;this._compute=function(n,c){var p=Math.abs(c.sourcePos[0]-c.targetPos[0]),d=Math.abs(c.sourcePos[1]-c.targetPos[1]);if(Math.min(c.sourcePos[0],c.targetPos[0]),Math.min(c.sourcePos[1],c.targetPos[1]),u&&c.sourceEndpoint.elementId===c.targetEndpoint.elementId){var h=c.sourcePos[0],f=(c.sourcePos[0],c.sourcePos[1]-r),m=(c.sourcePos[1]-r,h),g=f-l,v=2*l,y=2*l,b=m-l,C=g-l;n.points[0]=b,n.points[1]=C,n.points[2]=v,n.points[3]=y,o.addSegment(this,"Arc",{loopback:!0,x1:h-b+4,y1:f-C,startAngle:0,endAngle:2*Math.PI,r:l,ac:!a,x2:h-b-4,y2:f-C,cx:m-b,cy:g-C})}else{var P=c.sourcePos[0]<c.targetPos[0]?0:p,x=c.sourcePos[1]<c.targetPos[1]?0:d,E=c.sourcePos[0]<c.targetPos[0]?p:0,_=c.sourcePos[1]<c.targetPos[1]?d:0;0===c.sourcePos[2]&&(P-=r),1===c.sourcePos[2]&&(P+=r),0===c.sourcePos[3]&&(x-=r),1===c.sourcePos[3]&&(x+=r),0===c.targetPos[2]&&(E-=r),1===c.targetPos[2]&&(E+=r),0===c.targetPos[3]&&(_-=r),1===c.targetPos[3]&&(_+=r);var w=(P+E)/2,D=(x+_)/2,j=-1*w/D,S=Math.atan(j),M=(1/0==j||j==-1/0?0:Math.abs(i/2*Math.sin(S)),1/0==j||j==-1/0?0:Math.abs(i/2*Math.cos(S)),t(P,x,E,_)),O=Math.sqrt(Math.pow(E-P,2)+Math.pow(_-x,2)),T=e(w,D,M,c.sourcePos,c.targetPos,i,i,O,s);o.addSegment(this,"Bezier",{x1:E,y1:_,x2:P,y2:x,cp1x:T[0],cp1y:T[1],cp2x:T[0],cp2y:T[1]})}}};jsPlumb.registerConnectorType(n,"StateMachine")}(),function(){var t=function(t){t=t||{};var e=jsPlumb.Connectors.AbstractConnector.apply(this,arguments),n=(t.stub||50,t.curviness||150),o=10;this.type="Bezier",this.getCurviness=function(){return n},this._findControlPoint=function(t,e,i,r,s){var a=r.anchor.getOrientation(r),l=s.anchor.getOrientation(s),u=a[0]!=l[0]||a[1]==l[1],c=[];return u?(c.push(0===l[0]?i[0]<e[0]?t[0]+o:t[0]-o:t[0]+n*l[0]),c.push(0===l[1]?i[1]<e[1]?t[1]+o:t[1]-o:t[1]+n*a[1])):(c.push(0===a[0]?e[0]<i[0]?t[0]+o:t[0]-o:t[0]-n*a[0]),c.push(0===a[1]?e[1]<i[1]?t[1]+o:t[1]-o:t[1]+n*l[1])),c},this._compute=function(t,n){var o=n.sourcePos,i=n.targetPos,r=Math.abs(o[0]-i[0]),s=Math.abs(o[1]-i[1]),a=o[0]<i[0]?r:0,l=o[1]<i[1]?s:0,u=o[0]<i[0]?0:r,c=o[1]<i[1]?0:s,p=this._findControlPoint([a,l],o,i,n.sourceEndpoint,n.targetEndpoint),d=this._findControlPoint([u,c],i,o,n.targetEndpoint,n.sourceEndpoint);e.addSegment(this,"Bezier",{x1:a,y1:l,x2:u,y2:c,cp1x:p[0],cp1y:p[1],cp2x:d[0],cp2y:d[1]})}};jsPlumbUtil.extend(t,jsPlumb.Connectors.AbstractConnector),jsPlumb.registerConnectorType(t,"Bezier")}(),function(){"use strict";var t={joinstyle:"stroke-linejoin","stroke-linejoin":"stroke-linejoin","stroke-dashoffset":"stroke-dashoffset","stroke-linecap":"stroke-linecap"},e="stroke-dasharray",n="dashstyle",o="linearGradient",i="radialGradient",r="defs",s="fill",a="stop",l="stroke",u="stroke-width",c="style",p="none",d="jsplumb_gradient_",h="lineWidth",f={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml"},m=function(t,e){for(var n in e)t.setAttribute(n,""+e[n])},g=function(t,e){var n=document.createElementNS(f.svg,t);return e=e||{},e.version="1.1",e.xmlns=f.xhtml,m(n,e),n},v=function(t){return"position:absolute;left:"+t[0]+"px;top:"+t[1]+"px"},y=function(t){for(var e=0;e<t.childNodes.length;e++)(t.childNodes[e].tagName==r||t.childNodes[e].tagName==o||t.childNodes[e].tagName==i)&&t.removeChild(t.childNodes[e])},b=function(t,e,n,u,c){var p=d+c._jsPlumb.instance.idstamp();y(t);var h;h=n.gradient.offset?g(i,{id:p}):g(o,{id:p,gradientUnits:"userSpaceOnUse"});var f=g(r);t.appendChild(f),f.appendChild(h);for(var m=0;m<n.gradient.stops.length;m++){var v=1==c.segment||2==c.segment?m:n.gradient.stops.length-1-m,b=jsPlumbUtil.convertStyle(n.gradient.stops[v][1],!0),C=g(a,{offset:Math.floor(100*n.gradient.stops[m][0])+"%","stop-color":b});h.appendChild(C)}var P=n.strokeStyle?l:s;e.setAttribute(P,"url(#"+p+")")},C=function(o,i,r,a,d){if(i.setAttribute(s,r.fillStyle?jsPlumbUtil.convertStyle(r.fillStyle,!0):p),i.setAttribute(l,r.strokeStyle?jsPlumbUtil.convertStyle(r.strokeStyle,!0):p),r.gradient?b(o,i,r,a,d):(y(o),i.setAttribute(c,"")),r.lineWidth&&i.setAttribute(u,r.lineWidth),r[n]&&r[h]&&!r[e]){var f=-1==r[n].indexOf(",")?" ":",",m=r[n].split(f),g="";m.forEach(function(t){g+=Math.floor(t*r.lineWidth)+f}),i.setAttribute(e,g)}else r[e]&&i.setAttribute(e,r[e]);for(var v in t)r[v]&&i.setAttribute(t[v],r[v])},P=function(t,e,n){t.childNodes.length>n?t.insertBefore(e,t.childNodes[n]):t.appendChild(e)};jsPlumbUtil.svg={node:g,attr:m,pos:v};var x=function(t){var e=t.pointerEventsSpec||"all",n={};jsPlumb.jsPlumbUIComponent.apply(this,t.originalArgs),this.canvas=null,this.path=null,this.svg=null,this.bgCanvas=null;var o=t.cssClass+" "+(t.originalArgs[0].cssClass||""),i={style:"",width:0,height:0,"pointer-events":e,position:"absolute"};this.svg=g("svg",i),t.useDivWrapper?(this.canvas=document.createElement("div"),this.canvas.style.position="absolute",jsPlumbUtil.sizeElement(this.canvas,0,0,1,1),this.canvas.className=o):(m(this.svg,{"class":o}),this.canvas=this.svg),t._jsPlumb.appendElement(this.canvas,t.originalArgs[0].parent),t.useDivWrapper&&this.canvas.appendChild(this.svg);var r=[this.canvas];return this.getDisplayElements=function(){return r},this.appendDisplayElement=function(t){r.push(t)},this.paint=function(e,o,i){if(null!=e){var r,s=[this.x,this.y],a=[this.w,this.h];null!=i&&(i.xmin<0&&(s[0]+=i.xmin),i.ymin<0&&(s[1]+=i.ymin),a[0]=i.xmax+(i.xmin<0?-i.xmin:0),a[1]=i.ymax+(i.ymin<0?-i.ymin:0)),t.useDivWrapper?(jsPlumbUtil.sizeElement(this.canvas,s[0],s[1],a[0],a[1]),s[0]=0,s[1]=0,r=v([0,0])):r=v([s[0],s[1]]),n.paint.apply(this,arguments),m(this.svg,{style:r,width:a[0],height:a[1]})}},{renderer:n}};jsPlumbUtil.extend(x,jsPlumb.jsPlumbUIComponent,{cleanup:function(){this.canvas&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this.svg=null,this.canvas=null,this.bgCanvas=null,this.path=null,this.group=null},setVisible:function(t){this.canvas&&(this.canvas.style.display=t?"block":"none"),this.bgCanvas&&(this.bgCanvas.style.display=t?"block":"none")}}),jsPlumb.ConnectorRenderers.svg=function(t){var e=this,n=x.apply(this,[{cssClass:t._jsPlumb.connectorClass,originalArgs:arguments,pointerEventsSpec:"none",_jsPlumb:t._jsPlumb}]);n.renderer.paint=function(n,o,i){var r=e.getSegments(),s="",a=[0,0];if(i.xmin<0&&(a[0]=-i.xmin),i.ymin<0&&(a[1]=-i.ymin),r.length>0){for(var l=0;l<r.length;l++)s+=jsPlumb.Segments.svg.SegmentRenderer.getPath(r[l]),s+=" ";var u={d:s,transform:"translate("+a[0]+","+a[1]+")","pointer-events":t["pointer-events"]||"visibleStroke"},c=null,p=[e.x,e.y,e.w,e.h],d={mouseenter:function(t){var n=t.relatedTarget;return null==n||n!=e.path&&n!=e.bgPath},mouseout:function(t){var n=t.relatedTarget;return null==n||n!=e.path&&n!=e.bgPath}};if(n.outlineColor){var h=n.outlineWidth||1,f=n.lineWidth+2*h;c=jsPlumb.extend({},n),c.strokeStyle=jsPlumbUtil.convertStyle(n.outlineColor),c.lineWidth=f,null==e.bgPath?(e.bgPath=g("path",u),P(e.svg,e.bgPath,0),e.attachListeners(e.bgPath,e,d)):m(e.bgPath,u),C(e.svg,e.bgPath,c,p,e)}null==e.path?(e.path=g("path",u),P(e.svg,e.path,n.outlineColor?1:0),e.attachListeners(e.path,e,d)):m(e.path,u),C(e.svg,e.path,n,p,e)}},this.reattachListeners=function(){this.bgPath&&this.reattachListenersForElement(this.bgPath,this),this.path&&this.reattachListenersForElement(this.path,this)}},jsPlumbUtil.extend(jsPlumb.ConnectorRenderers.svg,x),jsPlumb.Segments.svg={SegmentRenderer:{getPath:function(t){return{Straight:function(){var e=t.getCoordinates();return"M "+e.x1+" "+e.y1+" L "+e.x2+" "+e.y2},Bezier:function(){var e=t.params;return"M "+e.x1+" "+e.y1+" C "+e.cp1x+" "+e.cp1y+" "+e.cp2x+" "+e.cp2y+" "+e.x2+" "+e.y2},Arc:function(){var e=t.params,n=t.sweep>Math.PI?1:0,o=t.anticlockwise?0:1;return"M"+t.x1+" "+t.y1+" A "+t.radius+" "+e.r+" 0 "+n+","+o+" "+t.x2+" "+t.y2}}[t.type]()}}};var E=window.SvgEndpoint=function(t){var e=x.apply(this,[{cssClass:t._jsPlumb.endpointClass,originalArgs:arguments,pointerEventsSpec:"all",useDivWrapper:!0,_jsPlumb:t._jsPlumb}]);e.renderer.paint=function(t){var e=jsPlumb.extend({},t);e.outlineColor&&(e.strokeWidth=e.outlineWidth,e.strokeStyle=jsPlumbUtil.convertStyle(e.outlineColor,!0)),null==this.node?(this.node=this.makeNode(e),this.svg.appendChild(this.node),this.attachListeners(this.node,this)):null!=this.updateNode&&this.updateNode(this.node),C(this.svg,this.node,e,[this.x,this.y,this.w,this.h],this),v(this.node,[this.x,this.y])}.bind(this)};jsPlumbUtil.extend(E,x,{reattachListeners:function(){this.node&&this.reattachListenersForElement(this.node,this)}}),jsPlumb.Endpoints.svg.Dot=function(){jsPlumb.Endpoints.Dot.apply(this,arguments),E.apply(this,arguments),this.makeNode=function(){return g("circle",{cx:this.w/2,cy:this.h/2,r:this.radius})},this.updateNode=function(t){m(t,{cx:this.w/2,cy:this.h/2,r:this.radius})}},jsPlumbUtil.extend(jsPlumb.Endpoints.svg.Dot,[jsPlumb.Endpoints.Dot,E]),jsPlumb.Endpoints.svg.Rectangle=function(){jsPlumb.Endpoints.Rectangle.apply(this,arguments),E.apply(this,arguments),this.makeNode=function(){return g("rect",{width:this.w,height:this.h})},this.updateNode=function(t){m(t,{width:this.w,height:this.h})}},jsPlumbUtil.extend(jsPlumb.Endpoints.svg.Rectangle,[jsPlumb.Endpoints.Rectangle,E]),jsPlumb.Endpoints.svg.Image=jsPlumb.Endpoints.Image,jsPlumb.Endpoints.svg.Blank=jsPlumb.Endpoints.Blank,jsPlumb.Overlays.svg.Label=jsPlumb.Overlays.Label,jsPlumb.Overlays.svg.Custom=jsPlumb.Overlays.Custom;var _=function(t,e){t.apply(this,e),jsPlumb.jsPlumbUIComponent.apply(this,e),this.isAppendedAtTopLevel=!1,this.path=null,this.paint=function(t,o){if(t.component.svg&&o){null==this.path&&(this.path=g("path",{"pointer-events":"all"}),t.component.svg.appendChild(this.path),this.canvas=t.component.svg,this.attachListeners(this.path,t.component),this.attachListeners(this.path,this));var i=e&&1==e.length?e[0].cssClass||"":"",r=[0,0];o.xmin<0&&(r[0]=-o.xmin),o.ymin<0&&(r[1]=-o.ymin),m(this.path,{d:n(t.d),"class":i,stroke:t.strokeStyle?t.strokeStyle:null,fill:t.fillStyle?t.fillStyle:null,transform:"translate("+r[0]+","+r[1]+")"})}};var n=function(t){return"M"+t.hxy.x+","+t.hxy.y+" L"+t.tail[0].x+","+t.tail[0].y+" L"+t.cxy.x+","+t.cxy.y+" L"+t.tail[1].x+","+t.tail[1].y+" L"+t.hxy.x+","+t.hxy.y};this.reattachListeners=function(){this.path&&this.reattachListenersForElement(this.path,this)}};jsPlumbUtil.extend(_,[jsPlumb.jsPlumbUIComponent,jsPlumb.Overlays.AbstractOverlay],{cleanup:function(){null!=this.path&&this._jsPlumb.instance.removeElement(this.path)},setVisible:function(t){null!=this.path&&(this.path.style.display=t?"block":"none")}}),jsPlumb.Overlays.svg.Arrow=function(){_.apply(this,[jsPlumb.Overlays.Arrow,arguments])
},jsPlumbUtil.extend(jsPlumb.Overlays.svg.Arrow,[jsPlumb.Overlays.Arrow,_]),jsPlumb.Overlays.svg.PlainArrow=function(){_.apply(this,[jsPlumb.Overlays.PlainArrow,arguments])},jsPlumbUtil.extend(jsPlumb.Overlays.svg.PlainArrow,[jsPlumb.Overlays.PlainArrow,_]),jsPlumb.Overlays.svg.Diamond=function(){_.apply(this,[jsPlumb.Overlays.Diamond,arguments])},jsPlumbUtil.extend(jsPlumb.Overlays.svg.Diamond,[jsPlumb.Overlays.Diamond,_]),jsPlumb.Overlays.svg.GuideLines=function(){var t,e,n=null,o=this;jsPlumb.Overlays.GuideLines.apply(this,arguments),this.paint=function(r,s){null==n&&(n=g("path"),r.connector.svg.appendChild(n),o.attachListeners(n,r.connector),o.attachListeners(n,o),t=g("path"),r.connector.svg.appendChild(t),o.attachListeners(t,r.connector),o.attachListeners(t,o),e=g("path"),r.connector.svg.appendChild(e),o.attachListeners(e,r.connector),o.attachListeners(e,o));var a=[0,0];s.xmin<0&&(a[0]=-s.xmin),s.ymin<0&&(a[1]=-s.ymin),m(n,{d:i(r.head,r.tail),stroke:"red",fill:null,transform:"translate("+a[0]+","+a[1]+")"}),m(t,{d:i(r.tailLine[0],r.tailLine[1]),stroke:"blue",fill:null,transform:"translate("+a[0]+","+a[1]+")"}),m(e,{d:i(r.headLine[0],r.headLine[1]),stroke:"green",fill:null,transform:"translate("+a[0]+","+a[1]+")"})};var i=function(t,e){return"M "+t.x+","+t.y+" L"+e.x+","+e.y}},jsPlumbUtil.extend(jsPlumb.Overlays.svg.GuideLines,jsPlumb.Overlays.GuideLines)}(),function(){"use strict";var t={"stroke-linejoin":"joinstyle",joinstyle:"joinstyle",endcap:"endcap",miterlimit:"miterlimit"},e=null;if(document.createStyleSheet&&document.namespaces){var n=[".jsplumb_vml","jsplumb\\:textbox","jsplumb\\:oval","jsplumb\\:rect","jsplumb\\:stroke","jsplumb\\:shape","jsplumb\\:group"],o="behavior:url(#default#VML);position:absolute;";e=document.createStyleSheet();for(var i=0;i<n.length;i++)e.addRule(n[i],o);document.namespaces.add("jsplumb","urn:schemas-microsoft-com:vml")}jsPlumb.vml={};var r=1e3,s=function(t,e){for(var n in e)t[n]=e[n]},a=function(t,e,n,o,i,r){n=n||{};var a=document.createElement("jsplumb:"+t);return r?i.appendElement(a,o):o.appendChild(a),a.className=(n["class"]?n["class"]+" ":"")+"jsplumb_vml",l(a,e),s(a,n),a},l=function(t,e,n){t.style.left=e[0]+"px",t.style.top=e[1]+"px",t.style.width=e[2]+"px",t.style.height=e[3]+"px",t.style.position="absolute",n&&(t.style.zIndex=n)},u=jsPlumb.vml.convertValue=function(t){return Math.floor(t*r)},c=function(t,e,n,o){"transparent"===e?o.setOpacity(n,"0.0"):o.setOpacity(n,"1.0")},p=function(t,e,n,o){var i={};if(e.strokeStyle){i.stroked="true";var r=jsPlumbUtil.convertStyle(e.strokeStyle,!0);i.strokecolor=r,c(i,r,"stroke",n),i.strokeweight=e.lineWidth+"px"}else i.stroked="false";if(e.fillStyle){i.filled="true";var l=jsPlumbUtil.convertStyle(e.fillStyle,!0);i.fillcolor=l,c(i,l,"fill",n)}else i.filled="false";if(e.dashstyle)null==n.strokeNode?n.strokeNode=a("stroke",[0,0,0,0],{dashstyle:e.dashstyle},t,o):n.strokeNode.dashstyle=e.dashstyle;else if(e["stroke-dasharray"]&&e.lineWidth){for(var u=-1==e["stroke-dasharray"].indexOf(",")?" ":",",p=e["stroke-dasharray"].split(u),d="",h=0;h<p.length;h++)d+=Math.floor(p[h]/e.lineWidth)+u;null==n.strokeNode?n.strokeNode=a("stroke",[0,0,0,0],{dashstyle:d},t,o):n.strokeNode.dashstyle=d}s(t,i)},d=function(){var t=this;jsPlumb.jsPlumbUIComponent.apply(this,arguments),this.opacityNodes={stroke:null,fill:null},this.initOpacityNodes=function(e){t.opacityNodes.stroke=a("stroke",[0,0,1,1],{opacity:"0.0"},e,t._jsPlumb.instance),t.opacityNodes.fill=a("fill",[0,0,1,1],{opacity:"0.0"},e,t._jsPlumb.instance)},this.setOpacity=function(e,n){var o=t.opacityNodes[e];o&&(o.opacity=""+n)};var e=[];this.getDisplayElements=function(){return e},this.appendDisplayElement=function(n,o){o||t.canvas.parentNode.appendChild(n),e.push(n)}};jsPlumbUtil.extend(d,jsPlumb.jsPlumbUIComponent,{cleanup:function(){this.bgCanvas&&this.bgCanvas.parentNode.removeChild(this.bgCanvas),this.canvas&&this.canvas.parentNode.removeChild(this.canvas)}});var h=jsPlumb.ConnectorRenderers.vml=function(e){this.strokeNode=null,this.canvas=null,d.apply(this,arguments);var n=this._jsPlumb.instance.connectorClass+(e.cssClass?" "+e.cssClass:"");this.paint=function(o){if(null!==o){this.w=Math.max(this.w,1),this.h=Math.max(this.h,1);for(var i=this.getSegments(),u={path:""},c=[this.x,this.y,this.w,this.h],d=0;d<i.length;d++)u.path+=jsPlumb.Segments.vml.SegmentRenderer.getPath(i[d]),u.path+=" ";if(o.outlineColor){var h=o.outlineWidth||1,f=o.lineWidth+2*h,m={strokeStyle:jsPlumbUtil.convertStyle(o.outlineColor),lineWidth:f};for(var g in t)m[g]=o[g];null==this.bgCanvas?(u["class"]=n,u.coordsize=c[2]*r+","+c[3]*r,this.bgCanvas=a("shape",c,u,e.parent,this._jsPlumb.instance,!0),l(this.bgCanvas,c),this.appendDisplayElement(this.bgCanvas,!0),this.attachListeners(this.bgCanvas,this),this.initOpacityNodes(this.bgCanvas,["stroke"])):(u.coordsize=c[2]*r+","+c[3]*r,l(this.bgCanvas,c),s(this.bgCanvas,u)),p(this.bgCanvas,m,this)}null==this.canvas?(u["class"]=n,u.coordsize=c[2]*r+","+c[3]*r,this.canvas=a("shape",c,u,e.parent,this._jsPlumb.instance,!0),this.appendDisplayElement(this.canvas,!0),this.attachListeners(this.canvas,this),this.initOpacityNodes(this.canvas,["stroke"])):(u.coordsize=c[2]*r+","+c[3]*r,l(this.canvas,c),s(this.canvas,u)),p(this.canvas,o,this,this._jsPlumb.instance)}}};jsPlumbUtil.extend(h,d,{reattachListeners:function(){this.canvas&&this.reattachListenersForElement(this.canvas,this)},setVisible:function(t){this.canvas&&(this.canvas.style.display=t?"block":"none"),this.bgCanvas&&(this.bgCanvas.style.display=t?"block":"none")}});var f=window.VmlEndpoint=function(t){d.apply(this,arguments),this._jsPlumb.vml=null,this.canvas=document.createElement("div"),this.canvas.style.position="absolute",this._jsPlumb.clazz=this._jsPlumb.instance.endpointClass+(t.cssClass?" "+t.cssClass:""),t._jsPlumb.appendElement(this.canvas,t.parent),this.paint=function(t,e){var n={},o=this._jsPlumb.vml;jsPlumbUtil.sizeElement(this.canvas,this.x,this.y,this.w,this.h),null==this._jsPlumb.vml?(n["class"]=this._jsPlumb.clazz,o=this._jsPlumb.vml=this.getVml([0,0,this.w,this.h],n,e,this.canvas,this._jsPlumb.instance),this.attachListeners(o,this),this.appendDisplayElement(o,!0),this.appendDisplayElement(this.canvas,!0),this.initOpacityNodes(o,["fill"])):(l(o,[0,0,this.w,this.h]),s(o,n)),p(o,t,this)}};jsPlumbUtil.extend(f,d,{reattachListeners:function(){this._jsPlumb.vml&&this.reattachListenersForElement(this._jsPlumb.vml,this)}}),jsPlumb.Segments.vml={SegmentRenderer:{getPath:function(t){return{Straight:function(t){var e=t.params;return"m"+u(e.x1)+","+u(e.y1)+" l"+u(e.x2)+","+u(e.y2)+" e"},Bezier:function(t){var e=t.params;return"m"+u(e.x1)+","+u(e.y1)+" c"+u(e.cp1x)+","+u(e.cp1y)+","+u(e.cp2x)+","+u(e.cp2y)+","+u(e.x2)+","+u(e.y2)+" e"},Arc:function(t){var e=t.params,n=Math.min(e.x1,e.x2),o=(Math.max(e.x1,e.x2),Math.min(e.y1,e.y2)),i=(Math.max(e.y1,e.y2),t.anticlockwise?1:0),r=t.anticlockwise?"at ":"wa ",s=function(){if(e.loopback)return"0,0,"+u(2*e.r)+","+u(2*e.r);var r=[null,[function(){return[n,o]},function(){return[n-e.r,o-e.r]}],[function(){return[n-e.r,o]},function(){return[n,o-e.r]}],[function(){return[n-e.r,o-e.r]},function(){return[n,o]}],[function(){return[n,o-e.r]},function(){return[n-e.r,o]}]][t.segment][i]();return u(r[0])+","+u(r[1])+","+u(r[0]+2*e.r)+","+u(r[1]+2*e.r)};return r+" "+s()+","+u(e.x1)+","+u(e.y1)+","+u(e.x2)+","+u(e.y2)+" e"}}[t.type](t)}}},jsPlumb.Endpoints.vml.Dot=function(){jsPlumb.Endpoints.Dot.apply(this,arguments),f.apply(this,arguments),this.getVml=function(t,e,n,o,i){return a("oval",t,e,o,i)}},jsPlumbUtil.extend(jsPlumb.Endpoints.vml.Dot,f),jsPlumb.Endpoints.vml.Rectangle=function(){jsPlumb.Endpoints.Rectangle.apply(this,arguments),f.apply(this,arguments),this.getVml=function(t,e,n,o,i){return a("rect",t,e,o,i)}},jsPlumbUtil.extend(jsPlumb.Endpoints.vml.Rectangle,f),jsPlumb.Endpoints.vml.Image=jsPlumb.Endpoints.Image,jsPlumb.Endpoints.vml.Blank=jsPlumb.Endpoints.Blank,jsPlumb.Overlays.vml.Label=jsPlumb.Overlays.Label,jsPlumb.Overlays.vml.Custom=jsPlumb.Overlays.Custom;var m=function(t,e){t.apply(this,e),d.apply(this,e);var n=this;this.canvas=null,this.isAppendedAtTopLevel=!0;var o=function(t){return"m "+u(t.hxy.x)+","+u(t.hxy.y)+" l "+u(t.tail[0].x)+","+u(t.tail[0].y)+" "+u(t.cxy.x)+","+u(t.cxy.y)+" "+u(t.tail[1].x)+","+u(t.tail[1].y)+" x e"};this.paint=function(t,i){if(t.component.canvas&&i){var u={},c=t.d,p=t.component;t.strokeStyle&&(u.stroked="true",u.strokecolor=jsPlumbUtil.convertStyle(t.strokeStyle,!0)),t.lineWidth&&(u.strokeweight=t.lineWidth+"px"),t.fillStyle&&(u.filled="true",u.fillcolor=t.fillStyle);var d=Math.min(c.hxy.x,c.tail[0].x,c.tail[1].x,c.cxy.x),h=Math.min(c.hxy.y,c.tail[0].y,c.tail[1].y,c.cxy.y),f=Math.max(c.hxy.x,c.tail[0].x,c.tail[1].x,c.cxy.x),m=Math.max(c.hxy.y,c.tail[0].y,c.tail[1].y,c.cxy.y),g=Math.abs(f-d),v=Math.abs(m-h),y=[d,h,g,v];if(u.path=o(c),u.coordsize=p.w*r+","+p.h*r,y[0]=p.x,y[1]=p.y,y[2]=p.w,y[3]=p.h,null==n.canvas){var b=p._jsPlumb.overlayClass||"",C=e&&1==e.length?e[0].cssClass||"":"";u["class"]=C+" "+b,n.canvas=a("shape",y,u,p.canvas.parentNode,p._jsPlumb.instance,!0),p.appendDisplayElement(n.canvas,!0),n.attachListeners(n.canvas,p),n.attachListeners(n.canvas,n)}else l(n.canvas,y),s(n.canvas,u)}},this.reattachListeners=function(){this.canvas&&this.reattachListenersForElement(n.canvas,this)},this.cleanup=function(){null!=this.canvas&&this._jsPlumb.instance.removeElement(this.canvas)}};jsPlumbUtil.extend(m,[d,jsPlumb.Overlays.AbstractOverlay],{setVisible:function(t){this.canvas.style.display=t?"block":"none"}}),jsPlumb.Overlays.vml.Arrow=function(){m.apply(this,[jsPlumb.Overlays.Arrow,arguments])},jsPlumbUtil.extend(jsPlumb.Overlays.vml.Arrow,[jsPlumb.Overlays.Arrow,m]),jsPlumb.Overlays.vml.PlainArrow=function(){m.apply(this,[jsPlumb.Overlays.PlainArrow,arguments])},jsPlumbUtil.extend(jsPlumb.Overlays.vml.PlainArrow,[jsPlumb.Overlays.PlainArrow,m]),jsPlumb.Overlays.vml.Diamond=function(){m.apply(this,[jsPlumb.Overlays.Diamond,arguments])},jsPlumbUtil.extend(jsPlumb.Overlays.vml.Diamond,[jsPlumb.Overlays.Diamond,m])}(),function(t){"use strict";var e=function(e){return t("string"==typeof e?"#"+e:e)};t.extend(jsPlumbInstance.prototype,{getDOMElement:function(t){return null==t?null:"string"==typeof t?document.getElementById(t):t.context||null!=t.length?t[0]:t},getElementObject:e,removeElement:function(t){e(t).remove()},doAnimate:function(t,e,n){t.animate(e,n)},getSelector:function(n,o){return 2==arguments.length?e(n).find(o):t(n)},destroyDraggable:function(e){t(e).data("draggable")&&t(e).draggable("destroy")},destroyDroppable:function(e){t(e).data("droppable")&&t(e).droppable("destroy")},initDraggable:function(e,n,o){n=n||{},e=t(e),n.start=jsPlumbUtil.wrap(n.start,function(){t("body").addClass(this.dragSelectClass)},!1),n.stop=jsPlumbUtil.wrap(n.stop,function(){t("body").removeClass(this.dragSelectClass)}),n.doNotRemoveHelper||(n.helper=null),o&&(n.scope=n.scope||jsPlumb.Defaults.Scope),e.draggable(n)},initDroppable:function(e,n){n.scope=n.scope||jsPlumb.Defaults.Scope,t(e).droppable(n)},isAlreadyDraggable:function(e){return t(e).hasClass("ui-draggable")},isDragSupported:function(e){return t(e).draggable},isDropSupported:function(e){return t(e).droppable},getDragObject:function(t){return t[1].helper||t[1].draggable},getDragScope:function(e){return t(e).draggable("option","scope")},getDropEvent:function(t){return t[0]},getDropScope:function(e){return t(e).droppable("option","scope")},getUIPosition:function(t,e,n){var o;if(e=e||1,1==t.length)o={left:t[0].pageX,top:t[0].pageY};else{var i=t[1],r=i.position;o=r||i.absolutePosition,n||(i.position.left/=e,i.position.top/=e)}return{left:o.left,top:o.top}},isDragFilterSupported:function(){return!0},setDragFilter:function(e,n){jsPlumb.isAlreadyDraggable(e)&&t(e).draggable("option","cancel",n)},setElementDraggable:function(e,n){t(e).draggable("option","disabled",!n)},setDragScope:function(e,n){t(e).draggable("option","scope",n)},dragEvents:{start:"start",stop:"stop",drag:"drag",step:"step",over:"over",out:"out",drop:"drop",complete:"complete"},animEvents:{step:"step",complete:"complete"},trigger:function(t,n,o){var i=jQuery._data(e(t)[0],"handle");i(o)},getOriginalEvent:function(t){return t.originalEvent},on:function(t){t=e(t);var n=[];n.push.apply(n,arguments),t.on.apply(t,n.slice(1))},off:function(t){t=e(t);var n=[];n.push.apply(n,arguments),t.off.apply(t,n.slice(1))}}),t(document).ready(jsPlumb.init)}(jQuery),function(){"use strict";{var t=this.Biltong={},e=function(t){return"[object Array]"===Object.prototype.toString.call(t)},n=function(t,n,o){return t=e(t)?t:[t.x,t.y],n=e(n)?n:[n.x,n.y],o(t,n)},o=t.gradient=function(t,e){return n(t,e,function(t,e){return e[0]==t[0]?e[1]>t[1]?1/0:-1/0:e[1]==t[1]?e[0]>t[0]?0:-0:(e[1]-t[1])/(e[0]-t[0])})},i=(t.normal=function(t,e){return-1/o(t,e)},t.lineLength=function(t,e){return n(t,e,function(t,e){return Math.sqrt(Math.pow(e[1]-t[1],2)+Math.pow(e[0]-t[0],2))})},t.quadrant=function(t,e){return n(t,e,function(t,e){return e[0]>t[0]?e[1]>t[1]?2:1:e[0]==t[0]?e[1]>t[1]?2:1:e[1]>t[1]?3:4})}),r=(t.theta=function(t,e){return n(t,e,function(t,e){var n=o(t,e),r=Math.atan(n),s=i(t,e);return(4==s||3==s)&&(r+=Math.PI),0>r&&(r+=2*Math.PI),r})},t.intersects=function(t,e){var n=t.x,o=t.x+t.w,i=t.y,r=t.y+t.h,s=e.x,a=e.x+e.w,l=e.y,u=e.y+e.h;return s>=n&&o>=s&&l>=i&&r>=l||a>=n&&o>=a&&l>=i&&r>=l||s>=n&&o>=s&&u>=i&&r>=u||a>=n&&o>=s&&u>=i&&r>=u||n>=s&&a>=n&&i>=l&&u>=i||o>=s&&a>=o&&i>=l&&u>=i||n>=s&&a>=n&&r>=l&&u>=r||o>=s&&a>=n&&r>=l&&u>=r},t.encloses=function(t,e,n){var o=t.x,i=t.x+t.w,r=t.y,s=t.y+t.h,a=e.x,l=e.x+e.w,u=e.y,c=e.y+e.h,p=function(t,e,o,i){return n?e>=t&&o>=i:e>t&&o>i};return p(o,a,i,l)&&p(r,u,s,c)},[null,[1,-1],[1,1],[-1,1],[-1,-1]]),s=[null,[-1,-1],[-1,1],[1,1],[1,-1]];t.pointOnLine=function(t,e,n){var a=o(t,e),l=i(t,e),u=n>0?r[l]:s[l],c=Math.atan(a),p=Math.abs(n*Math.sin(c))*u[1],d=Math.abs(n*Math.cos(c))*u[0];return{x:t.x+d,y:t.y+p}},t.perpendicularLineTo=function(t,e,n){var i=o(t,e),r=Math.atan(-1/i),s=n/2*Math.sin(r),a=n/2*Math.cos(r);return[{x:e.x+a,y:e.y+s},{x:e.x-a,y:e.y-s}]}}}.call(this),function(){"undefined"==typeof Math.sgn&&(Math.sgn=function(t){return 0==t?0:t>0?1:-1});var t={subtract:function(t,e){return{x:t.x-e.x,y:t.y-e.y}},dotProduct:function(t,e){return t.x*e.x+t.y*e.y},square:function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},scale:function(t,e){return{x:t.x*e,y:t.y*e}}},e=Math.pow(2,-65),n=function(e,n){for(var r=[],s=n.length-1,a=2*s-1,l=[],u=[],c=[],p=[],d=[[1,.6,.3,.1],[.4,.6,.6,.4],[.1,.3,.6,1]],h=0;s>=h;h++)l[h]=t.subtract(n[h],e);for(h=0;s-1>=h;h++)u[h]=t.subtract(n[h+1],n[h]),u[h]=t.scale(u[h],3);for(h=0;s-1>=h;h++)for(var f=0;s>=f;f++)c[h]||(c[h]=[]),c[h][f]=t.dotProduct(u[h],l[f]);for(h=0;a>=h;h++)p[h]||(p[h]=[]),p[h].y=0,p[h].x=parseFloat(h)/a;for(a=s-1,l=0;s+a>=l;l++)for(h=Math.max(0,l-a),u=Math.min(l,s);u>=h;h++)j=l-h,p[h+j].y+=c[j][h]*d[j][h];for(s=n.length-1,p=o(p,2*s-1,r,0),a=t.subtract(e,n[0]),c=t.square(a),h=d=0;p>h;h++)a=t.subtract(e,i(n,s,r[h],null,null)),a=t.square(a),c>a&&(c=a,d=r[h]);return a=t.subtract(e,n[s]),a=t.square(a),c>a&&(c=a,d=1),{location:d,distance:c}},o=function(t,n,r,s){var a,l,u=[],c=[],p=[],d=[],h=0;l=Math.sgn(t[0].y);for(var f=1;n>=f;f++)a=Math.sgn(t[f].y),a!=l&&h++,l=a;switch(h){case 0:return 0;case 1:if(s>=64)return r[0]=(t[0].x+t[n].x)/2,1;var m,g,h=t[0].y-t[n].y;for(l=t[n].x-t[0].x,f=t[0].x*t[n].y-t[n].x*t[0].y,a=max_distance_below=0,m=1;n>m;m++)g=h*t[m].x+l*t[m].y+f,g>a?a=g:max_distance_below>g&&(max_distance_below=g);if(g=l,m=0*g-1*h,a=(1*(f-a)-0*g)*(1/m),g=l,l=f-max_distance_below,m=0*g-1*h,h=(1*l-0*g)*(1/m),l=Math.min(a,h),Math.max(a,h)-l<e)return p=t[n].x-t[0].x,d=t[n].y-t[0].y,r[0]=0+1*(p*(t[0].y-0)-d*(t[0].x-0))*(1/(0*p-1*d)),1}for(i(t,n,.5,u,c),t=o(u,n,p,s+1),n=o(c,n,d,s+1),s=0;t>s;s++)r[s]=p[s];for(s=0;n>s;s++)r[s+t]=d[s];return t+n},i=function(t,e,n,o,i){for(var r=[[]],s=0;e>=s;s++)r[0][s]=t[s];for(t=1;e>=t;t++)for(s=0;e-t>=s;s++)r[t]||(r[t]=[]),r[t][s]||(r[t][s]={}),r[t][s].x=(1-n)*r[t-1][s].x+n*r[t-1][s+1].x,r[t][s].y=(1-n)*r[t-1][s].y+n*r[t-1][s+1].y;if(null!=o)for(s=0;e>=s;s++)o[s]=r[s][0];if(null!=i)for(s=0;e>=s;s++)i[s]=r[e-s][s];return r[e][0]},r={},s=function(t,e){var n,o=t.length-1;if(n=r[o],!n){n=[];var i=function(t){return function(){return t}},s=function(){return function(t){return t}},a=function(){return function(t){return 1-t}},l=function(t){return function(e){for(var n=1,o=0;o<t.length;o++)n*=t[o](e);return n}};n.push(new function(){return function(t){return Math.pow(t,o)}});for(var u=1;o>u;u++){for(var c=[new i(o)],p=0;o-u>p;p++)c.push(new s);for(p=0;u>p;p++)c.push(new a);n.push(new l(c))}n.push(new function(){return function(t){return Math.pow(1-t,o)}}),r[o]=n}for(a=s=i=0;a<t.length;a++)i+=t[a].x*n[a](e),s+=t[a].y*n[a](e);return{x:i,y:s}},a=function(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))},l=function(t){return t[0].x==t[1].x&&t[0].y==t[1].y},u=function(t,e,n){if(l(t))return{point:t[0],location:e};for(var o=s(t,e),i=0,r=n>0?1:-1,u=null;i<Math.abs(n);)e+=.005*r,u=s(t,e),i+=a(u,o),o=u;return{point:u,location:e}},c=function(t,e){var n=s(t,e),o=s(t.slice(0,t.length-1),e),i=o.y-n.y,n=o.x-n.x;return 0==i?1/0:Math.atan(i/n)};window.jsBezier={distanceFromCurve:n,gradientAtPoint:c,gradientAtPointAlongCurveFrom:function(t,e,n){return e=u(t,e,n),1<e.location&&(e.location=1),0>e.location&&(e.location=0),c(t,e.location)},nearestPointOnCurve:function(t,e){var o=n(t,e);return{point:i(e,e.length-1,o.location,null,null),location:o.location}},pointOnCurve:s,pointAlongCurveFrom:function(t,e,n){return u(t,e,n).point},perpendicularToCurveAt:function(t,e,n,o){return e=u(t,e,null==o?0:o),t=c(t,e.location),o=Math.atan(-1/t),t=n/2*Math.sin(o),n=n/2*Math.cos(o),[{x:e.point.x+n,y:e.point.y+t},{x:e.point.x-n,y:e.point.y-t}]},locationAlongCurveFrom:function(t,e,n){return u(t,e,n).location},getLength:function(t){if(l(t))return 0;for(var e=s(t,0),n=0,o=0,i=null;1>o;)o+=.005,i=s(t,o),n+=a(i,e),e=i;return n}}}(),function(){"use strict";var t=function(t){var e=t.getBoundingClientRect(),n=document.body,o=document.documentElement,i=window.pageYOffset||o.scrollTop||n.scrollTop,r=window.pageXOffset||o.scrollLeft||n.scrollLeft,s=o.clientTop||n.clientTop||0,a=o.clientLeft||n.clientLeft||0,l=e.top+i-s,u=e.left+r-a;return{top:Math.round(l),left:Math.round(u)}},e=function(t,e,n){n=n||t.parentNode;for(var o=n.querySelectorAll(e),i=0;i<o.length;i++)if(o[i]===t)return!0;return!1},n=function(){var t=-1;if("Microsoft Internet Explorer"==navigator.appName){var e=navigator.userAgent,n=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=n.exec(e)&&(t=parseFloat(RegExp.$1))}return t}(),o=n>-1&&9>n,i=function(t){if(o)return[t.clientX+document.documentElement.scrollLeft,t.clientY+document.documentElement.scrollTop];var e=s(t),n=r(e,0);return[n.pageX,n.pageY]},r=function(t,e){return t.item?t.item(e):t[e]},s=function(t){return t.touches&&t.touches.length>0?t.touches:t.changedTouches&&t.changedTouches.length>0?t.changedTouches:t.targetTouches&&t.targetTouches.length>0?t.targetTouches:[t]},a={draggable:"katavorio-draggable",droppable:"katavorio-droppable",drag:"katavorio-drag",selected:"katavorio-drag-selected",active:"katavorio-drag-active",hover:"katavorio-drag-hover",noSelect:"katavorio-drag-no-select"},l="katavorio-drag-scope",u=["stop","start","drag","drop","over","out"],c=function(){},p=function(){return!0},d=function(t,e,n){for(var o=0;o<t.length;o++)t[o]!=n&&e(t[o])},h=function(t,e,n,o){d(t,function(t){t.setActive(e),e&&t.updatePosition(),n&&t.setHover(o,e)})},f=function(t,e){if(null!=t){t="string"!=typeof t&&null==t.tagName&&null!=t.length?t:[t];for(var n=0;n<t.length;n++)e.apply(t[n])}},m=function(t){t.stopPropagation?(t.stopPropagation(),t.preventDefault()):t.returnValue=!1},g="input,textarea,select,button",v=function(t,n,o){var i=t.srcElement||t.target;return!e(i,o.getInputFilterSelector(),n)},y=function(t,e,n,o){e.addClass(t,this._class),this.el=t;var i=!0;return this.setEnabled=function(t){i=t},this.isEnabled=function(){return i},this.toggleEnabled=function(){i=!i},this.setScope=function(t){this.scopes=t?t.split(/\s+/):[o]},this.setScope(e.scope),this.k=e.katavorio,e.katavorio},b=function(n,o,r){this._class=r.draggable;var s,a=y.apply(this,arguments),l=[0,0],u=null,c=!1,d=o.consumeStartEvent!==!1,f=n,g=o.clone,b=function(t){return null==o.grid?t:[o.grid[0]*Math.floor(t[0]/o.grid[0]),o.grid[1]*Math.floor(t[1]/o.grid[1])]},C=o.constrain||o.containment?function(t){({x:t[0],y:t[1],w:this.size[0],h:this.size[1]});return[Math.max(0,Math.min(s.w-this.size[0],t[0])),Math.max(0,Math.min(s.h-this.size[1],t[1]))]}.bind(this):function(t){return t},P=p,x=this.setFilter=function(t){t&&(P=function(o){var i=o.srcElement||o.target;return!e(i,t,n)})},E=o.canDrag||p,_=[],w=[],D=function(e){if(this.isEnabled()&&E()){var s=P(e)&&v(e,n,this.k);if(s){if(g){f=n.cloneNode(!0),f.setAttribute("id",null),f.style.position="absolute";var c=t(n);f.style.left=c.left+"px",f.style.top=c.top+"px",document.body.appendChild(f)}else f=n;d&&m(e),l=i(e),o.events.start({el:n,pos:u,e:e,drag:this}),o.bind(document,"mousemove",j),o.bind(document,"mouseup",S),a.markSelection(this),o.addClass(document.body,r.noSelect)}else o.consumeFilteredEvents&&m(e)}}.bind(this),j=function(t){if(l){c||(this.mark(),c=!0),w.length=0;var e=i(t),n=e[0]-l[0],r=e[1]-l[1],s=o.ignoreZoom?1:a.getZoom();n/=s,r/=s,this.moveBy(n,r,t),a.updateSelection(n,r,this)}}.bind(this),S=function(t){l=null,c=!1,o.unbind(document,"mousemove",j),o.unbind(document,"mouseup",S),o.removeClass(document.body,r.noSelect),this.unmark(t),a.unmarkSelection(this,t),o.events.stop({el:f,pos:o.getPosition(f),e:t,drag:this}),g&&(f&&f.parentNode&&f.parentNode.removeChild(f),f=null)}.bind(this);this.abort=function(){null!=l&&S()},this.getDragElement=function(){return f||n},this.mark=function(){if(u=o.getPosition(f),this.size=o.getSize(f),_=a.getMatchingDroppables(this),h(_,!0,!1,this),o.addClass(f,o.dragClass||r.drag),o.constrain||o.containment){var t=o.getSize(f.parentNode);s={w:t[0],h:t[1]}}},this.unmark=function(t){h(_,!1,!0,this),_.length=0;for(var e=0;e<w.length;e++)w[e].drop(this,t);o.removeClass(f,o.dragClass||r.drag)},this.moveBy=function(t,e,i){w.length=0;var r=C(b([u[0]+t,u[1]+e])),s={x:r[0],y:r[1],w:this.size[0],h:this.size[1]};o.setPosition(f,r);for(var a=0;a<_.length;a++){var l={x:_[a].position[0],y:_[a].position[1],w:_[a].size[0],h:_[a].size[1]};o.intersects(s,l)&&_[a].canDrop(this)?(w.push(_[a]),_[a].setHover(this,!0,i)):_[a].el._katavorioDragHover&&_[a].setHover(this,!1,i)}o.events.drag({el:n,pos:r,e:i,drag:this})},this.destroy=function(){o.unbind(n,"mousedown",D)},o.bind(n,"mousedown",D),x(o.filter)},C=function(t,e,n){this._class=n.droppable,this._activeClass=e.activeClass||n.active,this._hoverClass=e.hoverClass||n.hover;var o=(y.apply(this,arguments),!1);this.setActive=function(n){e[n?"addClass":"removeClass"](t,this._activeClass)},this.updatePosition=function(){this.position=e.getPosition(t),this.size=e.getSize(t)},this.canDrop=e.canDrop||function(){return!0},this.setHover=function(n,i,r){(i||null==t._katavorioDragHover||t._katavorioDragHover==n.el._katavorio)&&(e[i?"addClass":"removeClass"](t,this._hoverClass),t._katavorioDragHover=i?n.el._katavorio:null,o!==i&&e.events[i?"over":"out"]({el:t,e:r,drag:n,drop:this}),o=i)},this.drop=function(t,n){e.events.drop({drag:t,e:n,drop:this})},this.destroy=function(){}},P=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"==t?e:3&e|8;return n.toString(16)})},x=function(t){return null==t?null:(t="string"==typeof t?document.getElementById(t):t,null==t?null:(t._katavorio=t._katavorio||P(),t))};this.Katavorio=function(t){var e=[],n={},o={},i={},r=1,s=function(t,e){for(var n=0;n<t.scopes.length;n++)e[t.scopes[n]]=e[t.scopes[n]]||[],e[t.scopes[n]].push(t)},p=function(e,n){for(var o=0;o<e.scopes.length;o++)if(n[e.scopes[o]]){var i=t.indexOf(n[e.scopes[o]],e);-1!=i&&n[e.scopes[o]].splice(i,1)}},h=(this.getMatchingDroppables=function(t){for(var e=[],n={},o=0;o<t.scopes.length;o++){var r=i[t.scopes[o]];if(r)for(var s=0;s<r.length;s++)r[s].canDrop(t)&&!n[r[s].el._katavorio]&&r[s].el!==t.el&&(n[r[s].el._katavorio]=!0,e.push(r[s]))}return e},function(e){e=e||{};var n={events:{}};for(var o in t)n[o]=t[o];for(var o in e)n[o]=e[o];for(var o=0;o<u.length;o++)n.events[u[o]]=e[u[o]]||c;return n.katavorio=this,n}.bind(this)),m={},v=t.css||{},y=t.scope||l;for(var P in a)m[P]=a[P];for(var P in v)m[P]=v[P];var E=t.inputFilterSelector||g;this.getInputFilterSelector=function(){return E},this.setInputFilterSelector=function(t){return E=t,this},this.draggable=function(t,e){var n=[];return f(t,function(){var t=x(this);if(null!=t){var i=h(e);t._katavorioDrag=new b(t,i,m,y),s(t._katavorioDrag,o),n.push(t._katavorioDrag)}}),n},this.droppable=function(t,e){var n=[];return f(t,function(){var t=x(this);null!=t&&(t._katavorioDrop=new C(t,h(e),m,y),s(t._katavorioDrop,i),n.push(t._katavorioDrop))}),n},this.select=function(o){return f(o,function(){var o=x(this);o&&o._katavorioDrag&&(n[o._katavorio]||(e.push(o._katavorioDrag),n[o._katavorio]=[o,e.length-1],t.addClass(o,m.selected)))}),this},this.deselect=function(o){return f(o,function(){var o=x(this);if(o&&o._katavorio){var i=n[o._katavorio];if(i){for(var r=[],s=0;s<e.length;s++)e[s].el!==o&&r.push(e[s]);e=r,delete n[o._katavorio],t.removeClass(o,m.selected)}}}),this},this.deselectAll=function(){for(var o in n){var i=n[o];t.removeClass(i[0],m.selected)}e.length=0,n={}},this.markSelection=function(t){d(e,function(t){t.mark()},t)},this.unmarkSelection=function(t,n){d(e,function(t){t.unmark(n)},t)},this.getSelection=function(){return e.slice(0)},this.updateSelection=function(t,n,o){d(e,function(e){e.moveBy(t,n)},o)},this.setZoom=function(t){r=t},this.getZoom=function(){return r};var _=function(t,e,n){null!=t&&(p(t,n),t.setScope(e),s(t,n))};this.setScope=function(t,e){_(t._katavorioDrag,e,o),_(t._katavorioDrop,e,i)},this.setDragScope=function(t,e){_(t._katavorioDrag,e,o)},this.setDropScope=function(t,e){_(t._katavorioDrop,e,i)},this.getDragsForScope=function(t){return o[t]},this.getDropsForScope=function(t){return i[t]};var w=function(t,e,n){t=x(t),t[e]&&(t[e].destroy(),p(t[e],n),t[e]=null)};this.elementRemoved=function(t){this.destroyDraggable(t),this.destroyDroppable(t)},this.destroyDraggable=function(t){w(t,"_katavorioDrag",o)},this.destroyDroppable=function(t){w(t,"_katavorioDrop",i)}}}.call(this),function(){"use strict";var t={android:navigator.userAgent.toLowerCase().indexOf("android")>-1},e=function(t,e,n){n=n||t.parentNode;for(var o=n.querySelectorAll(e),i=0;i<o.length;i++)if(o[i]===t)return!0;return!1},n=function(t){return"string"==typeof t?document.getElementById(t):t},o=function(t){return t.srcElement||t.target},i=function(t,e){for(var n=0,o=t.length;o>n&&t[n]!=e;n++);n<t.length&&t.splice(n,1)},r=1,s=function(t,e,n){var o=r++;return t.__ta=t.__ta||{},t.__ta[e]=t.__ta[e]||{},t.__ta[e][o]=n,n.__tauid=o,o},a=function(t,e,n){if(t.__ta&&t.__ta[e]&&delete t.__ta[e][n.__tauid],n.__taExtra){for(var o=0;o<n.__taExtra.length;o++)M(t,n.__taExtra[o][0],n.__taExtra[o][1]);n.__taExtra.length=0}n.__taUnstore&&n.__taUnstore()},l=function(t,n,i,r){if(null==t)return i;var s=t.split(","),a=function(t){a.__tauid=i.__tauid;for(var r=o(t),l=0;l<s.length;l++)e(r,s[l],n)&&i.apply(r,arguments)};return u(i,r,a),a},u=function(t,e,n){t.__taExtra=t.__taExtra||[],t.__taExtra.push([e,n])},c=function(t,e,n,o){g&&y[e]?S(t,y[e],l(o,t,n,y[e]),n):S(t,e,l(o,t,n,e),n)},p=function(t,e,n,r){if(null==t.__taSmartClicks){var s=function(e){t.__tad=x(e)},a=function(e){t.__tau=x(e)},l=function(e){if(t.__tad&&t.__tau&&t.__tad[0]===t.__tau[0]&&t.__tad[1]===t.__tau[1])for(var n=0;n<t.__taSmartClicks.length;n++)t.__taSmartClicks[n].apply(o(e),[e])};c(t,"mousedown",s,r),c(t,"mouseup",a,r),c(t,"click",l,r),t.__taSmartClicks=[]}t.__taSmartClicks.push(n),n.__taUnstore=function(){i(t.__taSmartClicks,n)}},d={tap:{touches:1,taps:1},dbltap:{touches:1,taps:2},contextmenu:{touches:2,taps:1}},h=function(t,e){return function(n,r,s,a){if("contextmenu"==r&&v)c(n,r,s,a);else{if(null==n.__taTapHandler){var l=n.__taTapHandler={tap:[],dbltap:[],contextmenu:[],down:!1,taps:0},u=function(){l.down=!0,setTimeout(h,t),setTimeout(f,e)},p=function(t){if(l.down){l.taps++;var e=j(t);for(var n in d){var i=d[n];if(i.touches===e&&(1===i.taps||i.taps===l.taps))for(var r=0;r<l[n].length;r++)l[n][r].apply(o(t),[t])}}},h=function(){l.down=!1},f=function(){l.taps=0};c(n,"mousedown",u,a),c(n,"mouseup",p,a)}n.__taTapHandler[r].push(s),s.__taUnstore=function(){i(n.__taTapHandler[r],s)}}}},f=function(t,e,n,o){for(var i in n.__tamee[t])n.__tamee[t][i].apply(o,[e])},m=function(){var t=[];return function(n,i,r,a){if(!n.__tamee){n.__tamee={over:!1,mouseenter:[],mouseexit:[]};var u=function(i){var r=o(i);(null==a&&r==n&&!n.__tamee.over||e(r,a,n)&&(null==r.__tamee||!r.__tamee.over))&&(f("mouseenter",i,n,r),r.__tamee=r.__tamee||{},r.__tamee.over=!0,t.push(r))},c=function(i){for(var r=o(i),s=0;s<t.length;s++)r!=t[s]||e(i.relatedTarget||i.toElement,"*",r)||(r.__tamee.over=!1,t.splice(s,1),f("mouseexit",i,n,r))};S(n,"mouseover",l(a,n,u,"mouseover"),u),S(n,"mouseout",l(a,n,c,"mouseout"),c)}r.__taUnstore=function(){delete n.__tamee[i][r.__tauid]},s(n,i,r),n.__tamee[i][r.__tauid]=r}},g="ontouchstart"in document.documentElement,v="onmousedown"in document.documentElement,y={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove"},b=function(){var t=-1;if("Microsoft Internet Explorer"==navigator.appName){var e=navigator.userAgent,n=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=n.exec(e)&&(t=parseFloat(RegExp.$1))}return t}(),C=b>-1&&9>b,P=function(t,e){if(null==t)return[0,0];var n=D(t),o=w(n,0);return[o[e+"X"],o[e+"Y"]]},x=function(t){return null==t?[0,0]:C?[t.clientX+document.documentElement.scrollLeft,t.clientY+document.documentElement.scrollTop]:P(t,"page")},E=function(t){return P(t,"screen")},_=function(t){return P(t,"client")},w=function(t,e){return t.item?t.item(e):t[e]},D=function(t){return t.touches&&t.touches.length>0?t.touches:t.changedTouches&&t.changedTouches.length>0?t.changedTouches:t.targetTouches&&t.targetTouches.length>0?t.targetTouches:[t]},j=function(t){return D(t).length},S=function(t,e,n,o){if(s(t,e,n),o.__tauid=n.__tauid,t.addEventListener)t.addEventListener(e,n,!1);else if(t.attachEvent){var i=e+n.__tauid;t["e"+i]=n,t[i]=function(){t["e"+i]&&t["e"+i](window.event)},t.attachEvent("on"+e,t[i])}},M=function(t,e,o){null!=o&&O(t,function(){var t=n(this);if(a(t,e,o),null!=o.__tauid)if(t.removeEventListener)t.removeEventListener(e,o,!1);else if(this.detachEvent){var i=e+o.__tauid;t[i]&&t.detachEvent("on"+e,t[i]),t[i]=null,t["e"+i]=null}})},O=function(t,e){if(null!=t){t="string"!=typeof t&&null==t.tagName&&null!=t.length?t:"string"==typeof t?document.querySelectorAll(t):[t];for(var n=0;n<t.length;n++)e.apply(t[n])}};this.Mottle=function(e){e=e||{};var o=e.clickThreshold||150,i=e.dblClickThreshold||350,r=new m,s=new h(o,i),a=e.smartClicks,l=function(t,e,o,i){null!=o&&O(t,function(){var t=n(this);a&&"click"===e?p(t,e,o,i):"tap"===e||"dbltap"===e||"contextmenu"===e?s(t,e,o,i):"mouseenter"===e||"mouseexit"==e?r(t,e,o,i):c(t,e,o,i)})};this.remove=function(t){return O(t,function(){var t=n(this);if(t.__ta)for(var e in t.__ta)for(var o in t.__ta[e])M(t,e,t.__ta[e][o]);t.parentNode&&t.parentNode.removeChild(t)}),this},this.on=function(){var t=arguments[0],e=4==arguments.length?arguments[2]:null,n=arguments[1],o=arguments[arguments.length-1];return l(t,n,o,e),this},this.off=function(t,e,n){return M(t,e,n),this},this.trigger=function(e,o,i,r){var s=g&&y[o]?y[o]:o,a=x(i),l=E(i),u=_(i);return O(e,function(){var e,c=n(this);i=i||{screenX:l[0],screenY:l[1],clientX:u[0],clientY:u[1]};var p=function(t){r&&(t.payload=r)},d={TouchEvent:function(t){var e=document.createTouch(window,c,0,a[0],a[1],l[0],l[1],u[0],u[1],0,0,0,0);t.initTouchEvent(s,!0,!0,window,0,l[0],l[1],u[0],u[1],!1,!1,!1,!1,document.createTouchList(e))},MouseEvents:function(e){if(e.initMouseEvent(s,!0,!0,window,0,l[0],l[1],u[0],u[1],!1,!1,!1,!1,1,c),t.android){var n=document.createTouch(window,c,0,a[0],a[1],l[0],l[1],u[0],u[1],0,0,0,0);e.touches=e.targetTouches=e.changedTouches=document.createTouchList(n)}}};if(document.createEvent){var h=g&&y[o]&&!t.android,f=h?"TouchEvent":"MouseEvents";e=document.createEvent(f),d[f](e),p(e),c.dispatchEvent(e)}else document.createEventObject&&(e=document.createEventObject(),e.eventType=e.eventName=s,e.screenX=l[0],e.screenY=l[1],e.clientX=u[0],e.clientY=u[1],p(e),c.fireEvent("on"+s,e))}),this}},Mottle.consume=function(t,e){t.stopPropagation?t.stopPropagation():t.returnValue=!1,!e&&t.preventDefault&&t.preventDefault()},Mottle.pageLocation=x}.call(this),!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();
else if("function"==typeof define&&define.amd)define([],t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.React=t()}}(function(){return function t(e,n,o){function i(s,a){if(!n[s]){if(!e[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=n[s]={exports:{}};e[s][0].call(u.exports,function(t){var n=e[s][1][t];return i(n?n:t)},u,u.exports,t,e,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule AutoFocusMixin
 * @typechecks static-only
 */
"use strict";var n=t("./focusNode"),o={componentDidMount:function(){this.props.autoFocus&&n(this.getDOMNode())}};e.exports=o},{"./focusNode":120}],2:[function(t,e){/**
 * Copyright 2013 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule BeforeInputEventPlugin
 * @typechecks static-only
 */
"use strict";function n(){var t=window.opera;return"object"==typeof t&&"function"==typeof t.version&&parseInt(t.version(),10)<=12}function o(t){return(t.ctrlKey||t.altKey||t.metaKey)&&!(t.ctrlKey&&t.altKey)}var i=t("./EventConstants"),r=t("./EventPropagators"),s=t("./ExecutionEnvironment"),a=t("./SyntheticInputEvent"),l=t("./keyOf"),u=s.canUseDOM&&"TextEvent"in window&&!("documentMode"in document||n()),c=32,p=String.fromCharCode(c),d=i.topLevelTypes,h={beforeInput:{phasedRegistrationNames:{bubbled:l({onBeforeInput:null}),captured:l({onBeforeInputCapture:null})},dependencies:[d.topCompositionEnd,d.topKeyPress,d.topTextInput,d.topPaste]}},f=null,m={eventTypes:h,extractEvents:function(t,e,n,i){var s;if(u)switch(t){case d.topKeyPress:var l=i.which;if(l!==c)return;s=String.fromCharCode(l);break;case d.topTextInput:if(s=i.data,s===p)return;break;default:return}else{switch(t){case d.topPaste:f=null;break;case d.topKeyPress:i.which&&!o(i)&&(f=String.fromCharCode(i.which));break;case d.topCompositionEnd:f=i.data}if(null===f)return;s=f}if(s){var m=a.getPooled(h.beforeInput,n,i);return m.data=s,f=null,r.accumulateTwoPhaseDispatches(m),m}}};e.exports=m},{"./EventConstants":16,"./EventPropagators":21,"./ExecutionEnvironment":22,"./SyntheticInputEvent":98,"./keyOf":141}],3:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule CSSCore
 * @typechecks
 */
var n=t("./invariant"),o={addClass:function(t,e){return n(!/\s/.test(e),'CSSCore.addClass takes only a single class name. "%s" contains multiple classes.',e),e&&(t.classList?t.classList.add(e):o.hasClass(t,e)||(t.className=t.className+" "+e)),t},removeClass:function(t,e){return n(!/\s/.test(e),'CSSCore.removeClass takes only a single class name. "%s" contains multiple classes.',e),e&&(t.classList?t.classList.remove(e):o.hasClass(t,e)&&(t.className=t.className.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,""))),t},conditionClass:function(t,e,n){return(n?o.addClass:o.removeClass)(t,e)},hasClass:function(t,e){return n(!/\s/.test(e),"CSS.hasClass takes only a single class name."),t.classList?!!e&&t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}};e.exports=o},{"./invariant":134}],4:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule CSSProperty
 */
"use strict";function n(t,e){return t+e.charAt(0).toUpperCase()+e.substring(1)}var o={columnCount:!0,fillOpacity:!0,flex:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},i=["Webkit","ms","Moz","O"];Object.keys(o).forEach(function(t){i.forEach(function(e){o[n(e,t)]=o[t]})});var r={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},s={isUnitlessNumber:o,shorthandPropertyExpansions:r};e.exports=s},{}],5:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule CSSPropertyOperations
 * @typechecks static-only
 */
"use strict";var n=t("./CSSProperty"),o=t("./dangerousStyleValue"),i=t("./hyphenateStyleName"),r=t("./memoizeStringOnly"),s=r(function(t){return i(t)}),a={createMarkupForStyles:function(t){var e="";for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];null!=i&&(e+=s(n)+":",e+=o(n,i)+";")}return e||null},setValueForStyles:function(t,e){var i=t.style;for(var r in e)if(e.hasOwnProperty(r)){var s=o(r,e[r]);if(s)i[r]=s;else{var a=n.shorthandPropertyExpansions[r];if(a)for(var l in a)i[l]="";else i[r]=""}}}};e.exports=a},{"./CSSProperty":4,"./dangerousStyleValue":115,"./hyphenateStyleName":132,"./memoizeStringOnly":143}],6:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule CallbackQueue
 */
"use strict";function n(){this._callbacks=null,this._contexts=null}var o=t("./PooledClass"),i=t("./invariant"),r=t("./mixInto");r(n,{enqueue:function(t,e){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(t),this._contexts.push(e)},notifyAll:function(){var t=this._callbacks,e=this._contexts;if(t){i(t.length===e.length,"Mismatched list of contexts in callback queue"),this._callbacks=null,this._contexts=null;for(var n=0,o=t.length;o>n;n++)t[n].call(e[n]);t.length=0,e.length=0}},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),o.addPoolingTo(n),e.exports=n},{"./PooledClass":28,"./invariant":134,"./mixInto":147}],7:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ChangeEventPlugin
 */
"use strict";function n(t){return"SELECT"===t.nodeName||"INPUT"===t.nodeName&&"file"===t.type}function o(t){var e=x.getPooled(j.change,M,t);b.accumulateTwoPhaseDispatches(e),P.batchedUpdates(i,e)}function i(t){y.enqueueEvents(t),y.processEventQueue()}function r(t,e){S=t,M=e,S.attachEvent("onchange",o)}function s(){S&&(S.detachEvent("onchange",o),S=null,M=null)}function a(t,e,n){return t===D.topChange?n:void 0}function l(t,e,n){t===D.topFocus?(s(),r(e,n)):t===D.topBlur&&s()}function u(t,e){S=t,M=e,O=t.value,T=Object.getOwnPropertyDescriptor(t.constructor.prototype,"value"),Object.defineProperty(S,"value",N),S.attachEvent("onpropertychange",p)}function c(){S&&(delete S.value,S.detachEvent("onpropertychange",p),S=null,M=null,O=null,T=null)}function p(t){if("value"===t.propertyName){var e=t.srcElement.value;e!==O&&(O=e,o(t))}}function d(t,e,n){return t===D.topInput?n:void 0}function h(t,e,n){t===D.topFocus?(c(),u(e,n)):t===D.topBlur&&c()}function f(t){return t!==D.topSelectionChange&&t!==D.topKeyUp&&t!==D.topKeyDown||!S||S.value===O?void 0:(O=S.value,M)}function m(t){return"INPUT"===t.nodeName&&("checkbox"===t.type||"radio"===t.type)}function g(t,e,n){return t===D.topClick?n:void 0}var v=t("./EventConstants"),y=t("./EventPluginHub"),b=t("./EventPropagators"),C=t("./ExecutionEnvironment"),P=t("./ReactUpdates"),x=t("./SyntheticEvent"),E=t("./isEventSupported"),_=t("./isTextInputElement"),w=t("./keyOf"),D=v.topLevelTypes,j={change:{phasedRegistrationNames:{bubbled:w({onChange:null}),captured:w({onChangeCapture:null})},dependencies:[D.topBlur,D.topChange,D.topClick,D.topFocus,D.topInput,D.topKeyDown,D.topKeyUp,D.topSelectionChange]}},S=null,M=null,O=null,T=null,R=!1;C.canUseDOM&&(R=E("change")&&(!("documentMode"in document)||document.documentMode>8));var I=!1;C.canUseDOM&&(I=E("input")&&(!("documentMode"in document)||document.documentMode>9));var N={get:function(){return T.get.call(this)},set:function(t){O=""+t,T.set.call(this,t)}},A={eventTypes:j,extractEvents:function(t,e,o,i){var r,s;if(n(e)?R?r=a:s=l:_(e)?I?r=d:(r=f,s=h):m(e)&&(r=g),r){var u=r(t,e,o);if(u){var c=x.getPooled(j.change,u,i);return b.accumulateTwoPhaseDispatches(c),c}}s&&s(t,e,o)}};e.exports=A},{"./EventConstants":16,"./EventPluginHub":18,"./EventPropagators":21,"./ExecutionEnvironment":22,"./ReactUpdates":87,"./SyntheticEvent":96,"./isEventSupported":135,"./isTextInputElement":137,"./keyOf":141}],8:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ClientReactRootIndex
 * @typechecks
 */
"use strict";var n=0,o={createReactRootIndex:function(){return n++}};e.exports=o},{}],9:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule CompositionEventPlugin
 * @typechecks static-only
 */
"use strict";function n(t){switch(t){case v.topCompositionStart:return b.compositionStart;case v.topCompositionEnd:return b.compositionEnd;case v.topCompositionUpdate:return b.compositionUpdate}}function o(t,e){return t===v.topKeyDown&&e.keyCode===f}function i(t,e){switch(t){case v.topKeyUp:return-1!==h.indexOf(e.keyCode);case v.topKeyDown:return e.keyCode!==f;case v.topKeyPress:case v.topMouseDown:case v.topBlur:return!0;default:return!1}}function r(t){this.root=t,this.startSelection=u.getSelection(t),this.startValue=this.getText()}var s=t("./EventConstants"),a=t("./EventPropagators"),l=t("./ExecutionEnvironment"),u=t("./ReactInputSelection"),c=t("./SyntheticCompositionEvent"),p=t("./getTextContentAccessor"),d=t("./keyOf"),h=[9,13,27,32],f=229,m=l.canUseDOM&&"CompositionEvent"in window,g=!m||"documentMode"in document&&document.documentMode>8&&document.documentMode<=11,v=s.topLevelTypes,y=null,b={compositionEnd:{phasedRegistrationNames:{bubbled:d({onCompositionEnd:null}),captured:d({onCompositionEndCapture:null})},dependencies:[v.topBlur,v.topCompositionEnd,v.topKeyDown,v.topKeyPress,v.topKeyUp,v.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:d({onCompositionStart:null}),captured:d({onCompositionStartCapture:null})},dependencies:[v.topBlur,v.topCompositionStart,v.topKeyDown,v.topKeyPress,v.topKeyUp,v.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:d({onCompositionUpdate:null}),captured:d({onCompositionUpdateCapture:null})},dependencies:[v.topBlur,v.topCompositionUpdate,v.topKeyDown,v.topKeyPress,v.topKeyUp,v.topMouseDown]}};r.prototype.getText=function(){return this.root.value||this.root[p()]},r.prototype.getData=function(){var t=this.getText(),e=this.startSelection.start,n=this.startValue.length-this.startSelection.end;return t.substr(e,t.length-n-e)};var C={eventTypes:b,extractEvents:function(t,e,s,l){var u,p;if(m?u=n(t):y?i(t,l)&&(u=b.compositionEnd):o(t,l)&&(u=b.compositionStart),g&&(y||u!==b.compositionStart?u===b.compositionEnd&&y&&(p=y.getData(),y=null):y=new r(e)),u){var d=c.getPooled(u,s,l);return p&&(d.data=p),a.accumulateTwoPhaseDispatches(d),d}}};e.exports=C},{"./EventConstants":16,"./EventPropagators":21,"./ExecutionEnvironment":22,"./ReactInputSelection":63,"./SyntheticCompositionEvent":94,"./getTextContentAccessor":129,"./keyOf":141}],10:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule DOMChildrenOperations
 * @typechecks static-only
 */
"use strict";function n(t,e,n){t.insertBefore(e,t.childNodes[n]||null)}var o,i=t("./Danger"),r=t("./ReactMultiChildUpdateTypes"),s=t("./getTextContentAccessor"),a=t("./invariant"),l=s();o="textContent"===l?function(t,e){t.textContent=e}:function(t,e){for(;t.firstChild;)t.removeChild(t.firstChild);if(e){var n=t.ownerDocument||document;t.appendChild(n.createTextNode(e))}};var u={dangerouslyReplaceNodeWithMarkup:i.dangerouslyReplaceNodeWithMarkup,updateTextContent:o,processUpdates:function(t,e){for(var s,l=null,u=null,c=0;s=t[c];c++)if(s.type===r.MOVE_EXISTING||s.type===r.REMOVE_NODE){var p=s.fromIndex,d=s.parentNode.childNodes[p],h=s.parentID;a(d,"processUpdates(): Unable to find child %s of element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to forgetting a <tbody> when using tables, nesting <p> or <a> tags, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID `%s`.",p,h),l=l||{},l[h]=l[h]||[],l[h][p]=d,u=u||[],u.push(d)}var f=i.dangerouslyRenderMarkup(e);if(u)for(var m=0;m<u.length;m++)u[m].parentNode.removeChild(u[m]);for(var g=0;s=t[g];g++)switch(s.type){case r.INSERT_MARKUP:n(s.parentNode,f[s.markupIndex],s.toIndex);break;case r.MOVE_EXISTING:n(s.parentNode,l[s.parentID][s.fromIndex],s.toIndex);break;case r.TEXT_CONTENT:o(s.parentNode,s.textContent);break;case r.REMOVE_NODE:}}};e.exports=u},{"./Danger":13,"./ReactMultiChildUpdateTypes":69,"./getTextContentAccessor":129,"./invariant":134}],11:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule DOMProperty
 * @typechecks static-only
 */
"use strict";var n=t("./invariant"),o={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(t){var e=t.Properties||{},i=t.DOMAttributeNames||{},s=t.DOMPropertyNames||{},a=t.DOMMutationMethods||{};t.isCustomAttribute&&r._isCustomAttributeFunctions.push(t.isCustomAttribute);for(var l in e){n(!r.isStandardName.hasOwnProperty(l),"injectDOMPropertyConfig(...): You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.",l),r.isStandardName[l]=!0;var u=l.toLowerCase();if(r.getPossibleStandardName[u]=l,i.hasOwnProperty(l)){var c=i[l];r.getPossibleStandardName[c]=l,r.getAttributeName[l]=c}else r.getAttributeName[l]=u;r.getPropertyName[l]=s.hasOwnProperty(l)?s[l]:l,r.getMutationMethod[l]=a.hasOwnProperty(l)?a[l]:null;var p=e[l];r.mustUseAttribute[l]=p&o.MUST_USE_ATTRIBUTE,r.mustUseProperty[l]=p&o.MUST_USE_PROPERTY,r.hasSideEffects[l]=p&o.HAS_SIDE_EFFECTS,r.hasBooleanValue[l]=p&o.HAS_BOOLEAN_VALUE,r.hasNumericValue[l]=p&o.HAS_NUMERIC_VALUE,r.hasPositiveNumericValue[l]=p&o.HAS_POSITIVE_NUMERIC_VALUE,r.hasOverloadedBooleanValue[l]=p&o.HAS_OVERLOADED_BOOLEAN_VALUE,n(!r.mustUseAttribute[l]||!r.mustUseProperty[l],"DOMProperty: Cannot require using both attribute and property: %s",l),n(r.mustUseProperty[l]||!r.hasSideEffects[l],"DOMProperty: Properties that have side effects must use property: %s",l),n(!!r.hasBooleanValue[l]+!!r.hasNumericValue[l]+!!r.hasOverloadedBooleanValue[l]<=1,"DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s",l)}}},i={},r={ID_ATTRIBUTE_NAME:"data-reactid",isStandardName:{},getPossibleStandardName:{},getAttributeName:{},getPropertyName:{},getMutationMethod:{},mustUseAttribute:{},mustUseProperty:{},hasSideEffects:{},hasBooleanValue:{},hasNumericValue:{},hasPositiveNumericValue:{},hasOverloadedBooleanValue:{},_isCustomAttributeFunctions:[],isCustomAttribute:function(t){for(var e=0;e<r._isCustomAttributeFunctions.length;e++){var n=r._isCustomAttributeFunctions[e];if(n(t))return!0}return!1},getDefaultValueForProperty:function(t,e){var n,o=i[t];return o||(i[t]=o={}),e in o||(n=document.createElement(t),o[e]=n[e]),o[e]},injection:o};e.exports=r},{"./invariant":134}],12:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule DOMPropertyOperations
 * @typechecks static-only
 */
"use strict";function n(t,e){return null==e||o.hasBooleanValue[t]&&!e||o.hasNumericValue[t]&&isNaN(e)||o.hasPositiveNumericValue[t]&&1>e||o.hasOverloadedBooleanValue[t]&&e===!1}var o=t("./DOMProperty"),i=t("./escapeTextForBrowser"),r=t("./memoizeStringOnly"),s=t("./warning"),a=r(function(t){return i(t)+'="'}),l={children:!0,dangerouslySetInnerHTML:!0,key:!0,ref:!0},u={},c=function(t){if(!(l.hasOwnProperty(t)&&l[t]||u.hasOwnProperty(t)&&u[t])){u[t]=!0;var e=t.toLowerCase(),n=o.isCustomAttribute(e)?e:o.getPossibleStandardName.hasOwnProperty(e)?o.getPossibleStandardName[e]:null;s(null==n,"Unknown DOM property "+t+". Did you mean "+n+"?")}},p={createMarkupForID:function(t){return a(o.ID_ATTRIBUTE_NAME)+i(t)+'"'},createMarkupForProperty:function(t,e){if(o.isStandardName.hasOwnProperty(t)&&o.isStandardName[t]){if(n(t,e))return"";var r=o.getAttributeName[t];return o.hasBooleanValue[t]||o.hasOverloadedBooleanValue[t]&&e===!0?i(r):a(r)+i(e)+'"'}return o.isCustomAttribute(t)?null==e?"":a(t)+i(e)+'"':(c(t),null)},setValueForProperty:function(t,e,i){if(o.isStandardName.hasOwnProperty(e)&&o.isStandardName[e]){var r=o.getMutationMethod[e];if(r)r(t,i);else if(n(e,i))this.deleteValueForProperty(t,e);else if(o.mustUseAttribute[e])t.setAttribute(o.getAttributeName[e],""+i);else{var s=o.getPropertyName[e];o.hasSideEffects[e]&&t[s]===i||(t[s]=i)}}else o.isCustomAttribute(e)?null==i?t.removeAttribute(e):t.setAttribute(e,""+i):c(e)},deleteValueForProperty:function(t,e){if(o.isStandardName.hasOwnProperty(e)&&o.isStandardName[e]){var n=o.getMutationMethod[e];if(n)n(t,void 0);else if(o.mustUseAttribute[e])t.removeAttribute(o.getAttributeName[e]);else{var i=o.getPropertyName[e],r=o.getDefaultValueForProperty(t.nodeName,i);o.hasSideEffects[e]&&t[i]===r||(t[i]=r)}}else o.isCustomAttribute(e)?t.removeAttribute(e):c(e)}};e.exports=p},{"./DOMProperty":11,"./escapeTextForBrowser":118,"./memoizeStringOnly":143,"./warning":158}],13:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule Danger
 * @typechecks static-only
 */
"use strict";function n(t){return t.substring(1,t.indexOf(" "))}var o=t("./ExecutionEnvironment"),i=t("./createNodesFromMarkup"),r=t("./emptyFunction"),s=t("./getMarkupWrap"),a=t("./invariant"),l=/^(<[^ \/>]+)/,u="data-danger-index",c={dangerouslyRenderMarkup:function(t){a(o.canUseDOM,"dangerouslyRenderMarkup(...): Cannot render markup in a Worker thread. This is likely a bug in the framework. Please report immediately.");for(var e,c={},p=0;p<t.length;p++)a(t[p],"dangerouslyRenderMarkup(...): Missing markup."),e=n(t[p]),e=s(e)?e:"*",c[e]=c[e]||[],c[e][p]=t[p];var d=[],h=0;for(e in c)if(c.hasOwnProperty(e)){var f=c[e];for(var m in f)if(f.hasOwnProperty(m)){var g=f[m];f[m]=g.replace(l,"$1 "+u+'="'+m+'" ')}var v=i(f.join(""),r);for(p=0;p<v.length;++p){var y=v[p];y.hasAttribute&&y.hasAttribute(u)?(m=+y.getAttribute(u),y.removeAttribute(u),a(!d.hasOwnProperty(m),"Danger: Assigning to an already-occupied result index."),d[m]=y,h+=1):console.error("Danger: Discarding unexpected node:",y)}}return a(h===d.length,"Danger: Did not assign to every index of resultList."),a(d.length===t.length,"Danger: Expected markup to render %s nodes, but rendered %s.",t.length,d.length),d},dangerouslyReplaceNodeWithMarkup:function(t,e){a(o.canUseDOM,"dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a worker thread. This is likely a bug in the framework. Please report immediately."),a(e,"dangerouslyReplaceNodeWithMarkup(...): Missing markup."),a("html"!==t.tagName.toLowerCase(),"dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See renderComponentToString().");var n=i(e,r)[0];t.parentNode.replaceChild(n,t)}};e.exports=c},{"./ExecutionEnvironment":22,"./createNodesFromMarkup":113,"./emptyFunction":116,"./getMarkupWrap":126,"./invariant":134}],14:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule DefaultEventPluginOrder
 */
"use strict";var n=t("./keyOf"),o=[n({ResponderEventPlugin:null}),n({SimpleEventPlugin:null}),n({TapEventPlugin:null}),n({EnterLeaveEventPlugin:null}),n({ChangeEventPlugin:null}),n({SelectEventPlugin:null}),n({CompositionEventPlugin:null}),n({BeforeInputEventPlugin:null}),n({AnalyticsEventPlugin:null}),n({MobileSafariClickEventPlugin:null})];e.exports=o},{"./keyOf":141}],15:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule EnterLeaveEventPlugin
 * @typechecks static-only
 */
"use strict";var n=t("./EventConstants"),o=t("./EventPropagators"),i=t("./SyntheticMouseEvent"),r=t("./ReactMount"),s=t("./keyOf"),a=n.topLevelTypes,l=r.getFirstReactDOM,u={mouseEnter:{registrationName:s({onMouseEnter:null}),dependencies:[a.topMouseOut,a.topMouseOver]},mouseLeave:{registrationName:s({onMouseLeave:null}),dependencies:[a.topMouseOut,a.topMouseOver]}},c=[null,null],p={eventTypes:u,extractEvents:function(t,e,n,s){if(t===a.topMouseOver&&(s.relatedTarget||s.fromElement))return null;if(t!==a.topMouseOut&&t!==a.topMouseOver)return null;var p;if(e.window===e)p=e;else{var d=e.ownerDocument;p=d?d.defaultView||d.parentWindow:window}var h,f;if(t===a.topMouseOut?(h=e,f=l(s.relatedTarget||s.toElement)||p):(h=p,f=e),h===f)return null;var m=h?r.getID(h):"",g=f?r.getID(f):"",v=i.getPooled(u.mouseLeave,m,s);v.type="mouseleave",v.target=h,v.relatedTarget=f;var y=i.getPooled(u.mouseEnter,g,s);return y.type="mouseenter",y.target=f,y.relatedTarget=h,o.accumulateEnterLeaveDispatches(v,y,m,g),c[0]=v,c[1]=y,c}};e.exports=p},{"./EventConstants":16,"./EventPropagators":21,"./ReactMount":67,"./SyntheticMouseEvent":100,"./keyOf":141}],16:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule EventConstants
 */
"use strict";var n=t("./keyMirror"),o=n({bubbled:null,captured:null}),i=n({topBlur:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topReset:null,topScroll:null,topSelectionChange:null,topSubmit:null,topTextInput:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topWheel:null}),r={topLevelTypes:i,PropagationPhases:o};e.exports=r},{"./keyMirror":140}],17:[function(t,e){var n=t("./emptyFunction"),o={listen:function(t,e,n){return t.addEventListener?(t.addEventListener(e,n,!1),{remove:function(){t.removeEventListener(e,n,!1)}}):t.attachEvent?(t.attachEvent("on"+e,n),{remove:function(){t.detachEvent("on"+e,n)}}):void 0},capture:function(t,e,o){return t.addEventListener?(t.addEventListener(e,o,!0),{remove:function(){t.removeEventListener(e,o,!0)}}):(console.error("Attempted to listen to events during the capture phase on a browser that does not support the capture phase. Your application will not receive some events."),{remove:n})},registerDefault:function(){}};e.exports=o},{"./emptyFunction":116}],18:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule EventPluginHub
 */
"use strict";function n(){var t=!h||!h.traverseTwoPhase||!h.traverseEnterLeave;if(t)throw new Error("InstanceHandle not injected before use!")}var o=t("./EventPluginRegistry"),i=t("./EventPluginUtils"),r=t("./accumulate"),s=t("./forEachAccumulated"),a=t("./invariant"),l=t("./isEventSupported"),u=t("./monitorCodeUse"),c={},p=null,d=function(t){if(t){var e=i.executeDispatch,n=o.getPluginModuleForEvent(t);n&&n.executeDispatch&&(e=n.executeDispatch),i.executeDispatchesInOrder(t,e),t.isPersistent()||t.constructor.release(t)}},h=null,f={injection:{injectMount:i.injection.injectMount,injectInstanceHandle:function(t){h=t,n()},getInstanceHandle:function(){return n(),h},injectEventPluginOrder:o.injectEventPluginOrder,injectEventPluginsByName:o.injectEventPluginsByName},eventNameDispatchConfigs:o.eventNameDispatchConfigs,registrationNameModules:o.registrationNameModules,putListener:function(t,e,n){a(!n||"function"==typeof n,"Expected %s listener to be a function, instead got type %s",e,typeof n),"onScroll"!==e||l("scroll",!0)||(u("react_no_scroll_event"),console.warn("This browser doesn't support the `onScroll` event"));var o=c[e]||(c[e]={});o[t]=n},getListener:function(t,e){var n=c[e];return n&&n[t]},deleteListener:function(t,e){var n=c[e];n&&delete n[t]},deleteAllListeners:function(t){for(var e in c)delete c[e][t]},extractEvents:function(t,e,n,i){for(var s,a=o.plugins,l=0,u=a.length;u>l;l++){var c=a[l];if(c){var p=c.extractEvents(t,e,n,i);p&&(s=r(s,p))}}return s},enqueueEvents:function(t){t&&(p=r(p,t))},processEventQueue:function(){var t=p;p=null,s(t,d),a(!p,"processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.")},__purge:function(){c={}},__getListenerBank:function(){return c}};e.exports=f},{"./EventPluginRegistry":19,"./EventPluginUtils":20,"./accumulate":106,"./forEachAccumulated":121,"./invariant":134,"./isEventSupported":135,"./monitorCodeUse":148}],19:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule EventPluginRegistry
 * @typechecks static-only
 */
"use strict";function n(){if(s)for(var t in a){var e=a[t],n=s.indexOf(t);if(r(n>-1,"EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.",t),!l.plugins[n]){r(e.extractEvents,"EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.",t),l.plugins[n]=e;var i=e.eventTypes;for(var u in i)r(o(i[u],e,u),"EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.",u,t)}}}function o(t,e,n){r(!l.eventNameDispatchConfigs.hasOwnProperty(n),"EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.",n),l.eventNameDispatchConfigs[n]=t;var o=t.phasedRegistrationNames;if(o){for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];i(a,e,n)}return!0}return t.registrationName?(i(t.registrationName,e,n),!0):!1}function i(t,e,n){r(!l.registrationNameModules[t],"EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.",t),l.registrationNameModules[t]=e,l.registrationNameDependencies[t]=e.eventTypes[n].dependencies}var r=t("./invariant"),s=null,a={},l={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function(t){r(!s,"EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React."),s=Array.prototype.slice.call(t),n()},injectEventPluginsByName:function(t){var e=!1;for(var o in t)if(t.hasOwnProperty(o)){var i=t[o];a.hasOwnProperty(o)&&a[o]===i||(r(!a[o],"EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.",o),a[o]=i,e=!0)}e&&n()},getPluginModuleForEvent:function(t){var e=t.dispatchConfig;if(e.registrationName)return l.registrationNameModules[e.registrationName]||null;for(var n in e.phasedRegistrationNames)if(e.phasedRegistrationNames.hasOwnProperty(n)){var o=l.registrationNameModules[e.phasedRegistrationNames[n]];if(o)return o}return null},_resetEventPlugins:function(){s=null;for(var t in a)a.hasOwnProperty(t)&&delete a[t];l.plugins.length=0;var e=l.eventNameDispatchConfigs;for(var n in e)e.hasOwnProperty(n)&&delete e[n];var o=l.registrationNameModules;for(var i in o)o.hasOwnProperty(i)&&delete o[i]}};e.exports=l},{"./invariant":134}],20:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule EventPluginUtils
 */
"use strict";function n(t){return t===g.topMouseUp||t===g.topTouchEnd||t===g.topTouchCancel}function o(t){return t===g.topMouseMove||t===g.topTouchMove}function i(t){return t===g.topMouseDown||t===g.topTouchStart}function r(t,e){var n=t._dispatchListeners,o=t._dispatchIDs;if(d(t),Array.isArray(n))for(var i=0;i<n.length&&!t.isPropagationStopped();i++)e(t,n[i],o[i]);else n&&e(t,n,o)}function s(t,e,n){t.currentTarget=m.Mount.getNode(n);var o=e(t,n);return t.currentTarget=null,o}function a(t,e){r(t,e),t._dispatchListeners=null,t._dispatchIDs=null}function l(t){var e=t._dispatchListeners,n=t._dispatchIDs;if(d(t),Array.isArray(e)){for(var o=0;o<e.length&&!t.isPropagationStopped();o++)if(e[o](t,n[o]))return n[o]}else if(e&&e(t,n))return n;return null}function u(t){var e=l(t);return t._dispatchIDs=null,t._dispatchListeners=null,e}function c(t){d(t);var e=t._dispatchListeners,n=t._dispatchIDs;f(!Array.isArray(e),"executeDirectDispatch(...): Invalid `event`.");var o=e?e(t,n):null;return t._dispatchListeners=null,t._dispatchIDs=null,o}function p(t){return!!t._dispatchListeners}var d,h=t("./EventConstants"),f=t("./invariant"),m={Mount:null,injectMount:function(t){m.Mount=t,f(t&&t.getNode,"EventPluginUtils.injection.injectMount(...): Injected Mount module is missing getNode.")}},g=h.topLevelTypes;d=function(t){var e=t._dispatchListeners,n=t._dispatchIDs,o=Array.isArray(e),i=Array.isArray(n),r=i?n.length:n?1:0,s=o?e.length:e?1:0;f(i===o&&r===s,"EventPluginUtils: Invalid `event`.")};var v={isEndish:n,isMoveish:o,isStartish:i,executeDirectDispatch:c,executeDispatch:s,executeDispatchesInOrder:a,executeDispatchesInOrderStopAtTrue:u,hasDispatches:p,injection:m,useTouchEvents:!1};e.exports=v},{"./EventConstants":16,"./invariant":134}],21:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule EventPropagators
 */
"use strict";function n(t,e,n){var o=e.dispatchConfig.phasedRegistrationNames[n];return m(t,o)}function o(t,e,o){if(!t)throw new Error("Dispatching id must not be null");var i=e?f.bubbled:f.captured,r=n(t,o,i);r&&(o._dispatchListeners=d(o._dispatchListeners,r),o._dispatchIDs=d(o._dispatchIDs,t))}function i(t){t&&t.dispatchConfig.phasedRegistrationNames&&p.injection.getInstanceHandle().traverseTwoPhase(t.dispatchMarker,o,t)}function r(t,e,n){if(n&&n.dispatchConfig.registrationName){var o=n.dispatchConfig.registrationName,i=m(t,o);i&&(n._dispatchListeners=d(n._dispatchListeners,i),n._dispatchIDs=d(n._dispatchIDs,t))}}function s(t){t&&t.dispatchConfig.registrationName&&r(t.dispatchMarker,null,t)}function a(t){h(t,i)}function l(t,e,n,o){p.injection.getInstanceHandle().traverseEnterLeave(n,o,r,t,e)}function u(t){h(t,s)}var c=t("./EventConstants"),p=t("./EventPluginHub"),d=t("./accumulate"),h=t("./forEachAccumulated"),f=c.PropagationPhases,m=p.getListener,g={accumulateTwoPhaseDispatches:a,accumulateDirectDispatches:u,accumulateEnterLeaveDispatches:l};e.exports=g},{"./EventConstants":16,"./EventPluginHub":18,"./accumulate":106,"./forEachAccumulated":121}],22:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ExecutionEnvironment
 */
"use strict";var n=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:n,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:n&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:n&&!!window.screen,isInWorker:!n};e.exports=o},{}],23:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule HTMLDOMPropertyConfig
 */
"use strict";var n,o=t("./DOMProperty"),i=t("./ExecutionEnvironment"),r=o.injection.MUST_USE_ATTRIBUTE,s=o.injection.MUST_USE_PROPERTY,a=o.injection.HAS_BOOLEAN_VALUE,l=o.injection.HAS_SIDE_EFFECTS,u=o.injection.HAS_NUMERIC_VALUE,c=o.injection.HAS_POSITIVE_NUMERIC_VALUE,p=o.injection.HAS_OVERLOADED_BOOLEAN_VALUE;if(i.canUseDOM){var d=document.implementation;n=d&&d.hasFeature&&d.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}var h={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,accessKey:null,action:null,allowFullScreen:r|a,allowTransparency:r,alt:null,async:a,autoComplete:null,autoPlay:a,cellPadding:null,cellSpacing:null,charSet:r,checked:s|a,className:n?r:s,cols:r|c,colSpan:null,content:null,contentEditable:null,contextMenu:r,controls:s|a,coords:null,crossOrigin:null,data:null,dateTime:r,defer:a,dir:null,disabled:r|a,download:p,draggable:null,encType:null,form:r,formNoValidate:a,frameBorder:r,height:r,hidden:r|a,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:s,label:null,lang:null,list:null,loop:s|a,max:null,maxLength:r,media:r,mediaGroup:null,method:null,min:null,multiple:s|a,muted:s|a,name:null,noValidate:a,open:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:s|a,rel:null,required:a,role:r,rows:r|c,rowSpan:null,sandbox:null,scope:null,scrollLeft:s,scrolling:null,scrollTop:s,seamless:r|a,selected:s|a,shape:null,size:r|c,sizes:r,span:c,spellCheck:null,src:null,srcDoc:s,srcSet:r,start:u,step:null,style:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:s|l,width:r,wmode:r,autoCapitalize:null,autoCorrect:null,itemProp:r,itemScope:r|a,itemType:r,property:null},DOMAttributeNames:{className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",encType:"enctype",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}};e.exports=h},{"./DOMProperty":11,"./ExecutionEnvironment":22}],24:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule LinkedStateMixin
 * @typechecks static-only
 */
"use strict";var n=t("./ReactLink"),o=t("./ReactStateSetters"),i={linkState:function(t){return new n(this.state[t],o.createStateKeySetter(this,t))}};e.exports=i},{"./ReactLink":65,"./ReactStateSetters":81}],25:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule LinkedValueUtils
 * @typechecks static-only
 */
"use strict";function n(t){l(null==t.props.checkedLink||null==t.props.valueLink,"Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don't want to use valueLink and vice versa.")}function o(t){n(t),l(null==t.props.value&&null==t.props.onChange,"Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don't want to use valueLink.")}function i(t){n(t),l(null==t.props.checked&&null==t.props.onChange,"Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don't want to use checkedLink")}function r(t){this.props.valueLink.requestChange(t.target.value)}function s(t){this.props.checkedLink.requestChange(t.target.checked)}var a=t("./ReactPropTypes"),l=t("./invariant"),u={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},c={Mixin:{propTypes:{value:function(t,e){return!t[e]||u[t.type]||t.onChange||t.readOnly||t.disabled?void 0:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(t,e){return!t[e]||t.onChange||t.readOnly||t.disabled?void 0:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:a.func}},getValue:function(t){return t.props.valueLink?(o(t),t.props.valueLink.value):t.props.value},getChecked:function(t){return t.props.checkedLink?(i(t),t.props.checkedLink.value):t.props.checked},getOnChange:function(t){return t.props.valueLink?(o(t),r):t.props.checkedLink?(i(t),s):t.props.onChange}};e.exports=c},{"./ReactPropTypes":75,"./invariant":134}],26:[function(t,e){/**
 * Copyright 2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule LocalEventTrapMixin
 */
"use strict";function n(t){t.remove()}var o=t("./ReactBrowserEventEmitter"),i=t("./accumulate"),r=t("./forEachAccumulated"),s=t("./invariant"),a={trapBubbledEvent:function(t,e){s(this.isMounted(),"Must be mounted to trap events");var n=o.trapBubbledEvent(t,e,this.getDOMNode());this._localEventListeners=i(this._localEventListeners,n)},componentWillUnmount:function(){this._localEventListeners&&r(this._localEventListeners,n)}};e.exports=a},{"./ReactBrowserEventEmitter":31,"./accumulate":106,"./forEachAccumulated":121,"./invariant":134}],27:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule MobileSafariClickEventPlugin
 * @typechecks static-only
 */
"use strict";var n=t("./EventConstants"),o=t("./emptyFunction"),i=n.topLevelTypes,r={eventTypes:null,extractEvents:function(t,e,n,r){if(t===i.topTouchStart){var s=r.target;s&&!s.onclick&&(s.onclick=o)}}};e.exports=r},{"./EventConstants":16,"./emptyFunction":116}],28:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule PooledClass
 */
"use strict";var n=t("./invariant"),o=function(t){var e=this;if(e.instancePool.length){var n=e.instancePool.pop();return e.call(n,t),n}return new e(t)},i=function(t,e){var n=this;if(n.instancePool.length){var o=n.instancePool.pop();return n.call(o,t,e),o}return new n(t,e)},r=function(t,e,n){var o=this;if(o.instancePool.length){var i=o.instancePool.pop();return o.call(i,t,e,n),i}return new o(t,e,n)},s=function(t,e,n,o,i){var r=this;if(r.instancePool.length){var s=r.instancePool.pop();return r.call(s,t,e,n,o,i),s}return new r(t,e,n,o,i)},a=function(t){var e=this;n(t instanceof e,"Trying to release an instance into a pool of a different type."),t.destructor&&t.destructor(),e.instancePool.length<e.poolSize&&e.instancePool.push(t)},l=10,u=o,c=function(t,e){var n=t;return n.instancePool=[],n.getPooled=e||u,n.poolSize||(n.poolSize=l),n.release=a,n},p={addPoolingTo:c,oneArgumentPooler:o,twoArgumentPooler:i,threeArgumentPooler:r,fiveArgumentPooler:s};e.exports=p},{"./invariant":134}],29:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule React
 */
"use strict";function n(t){var e=Array.prototype.slice.call(arguments,1);return t.apply(null,e)}var o=t("./DOMPropertyOperations"),i=t("./EventPluginUtils"),r=t("./ReactChildren"),s=t("./ReactComponent"),a=t("./ReactCompositeComponent"),l=t("./ReactContext"),u=t("./ReactCurrentOwner"),c=t("./ReactDescriptor"),p=t("./ReactDOM"),d=t("./ReactDOMComponent"),h=t("./ReactDefaultInjection"),f=t("./ReactInstanceHandles"),m=t("./ReactMount"),g=t("./ReactMultiChild"),v=t("./ReactPerf"),y=t("./ReactPropTypes"),b=t("./ReactServerRendering"),C=t("./ReactTextComponent"),P=t("./onlyChild"),x=t("./warning");h.inject();var E=!1,_={Children:{map:r.map,forEach:r.forEach,count:r.count,only:P},DOM:p,PropTypes:y,initializeTouchEvents:function(t){i.useTouchEvents=t},createClass:a.createClass,createDescriptor:function(){return x(E,"React.createDescriptor is deprecated and will be removed in the next version of React. Use React.createElement instead."),E=!0,n.apply(this,arguments)},createElement:n,constructAndRenderComponent:m.constructAndRenderComponent,constructAndRenderComponentByID:m.constructAndRenderComponentByID,renderComponent:v.measure("React","renderComponent",m.renderComponent),renderComponentToString:b.renderComponentToString,renderComponentToStaticMarkup:b.renderComponentToStaticMarkup,unmountComponentAtNode:m.unmountComponentAtNode,isValidClass:c.isValidFactory,isValidComponent:c.isValidDescriptor,withContext:l.withContext,__internals:{Component:s,CurrentOwner:u,DOMComponent:d,DOMPropertyOperations:o,InstanceHandles:f,Mount:m,MultiChild:g,TextComponent:C}},w=t("./ExecutionEnvironment");if(w.canUseDOM&&window.top===window.self&&navigator.userAgent.indexOf("Chrome")>-1){console.debug("Download the React DevTools for a better development experience: http://fb.me/react-devtools");var D=[Array.isArray,Array.prototype.every,Array.prototype.forEach,Array.prototype.indexOf,Array.prototype.map,Date.now,Function.prototype.bind,Object.keys,String.prototype.split,String.prototype.trim,Object.create,Object.freeze];for(var j in D)if(!D[j]){console.error("One or more ES5 shim/shams expected by React are not available: http://fb.me/react-warning-polyfills");break}}_.version="0.11.2",e.exports=_},{"./DOMPropertyOperations":12,"./EventPluginUtils":20,"./ExecutionEnvironment":22,"./ReactChildren":34,"./ReactComponent":35,"./ReactCompositeComponent":38,"./ReactContext":39,"./ReactCurrentOwner":40,"./ReactDOM":41,"./ReactDOMComponent":43,"./ReactDefaultInjection":53,"./ReactDescriptor":56,"./ReactInstanceHandles":64,"./ReactMount":67,"./ReactMultiChild":68,"./ReactPerf":71,"./ReactPropTypes":75,"./ReactServerRendering":79,"./ReactTextComponent":83,"./onlyChild":149,"./warning":158}],30:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactBrowserComponentMixin
 */
"use strict";var n=t("./ReactEmptyComponent"),o=t("./ReactMount"),i=t("./invariant"),r={getDOMNode:function(){return i(this.isMounted(),"getDOMNode(): A component must be mounted to have a DOM node."),n.isNullComponentID(this._rootNodeID)?null:o.getNode(this._rootNodeID)}};e.exports=r},{"./ReactEmptyComponent":58,"./ReactMount":67,"./invariant":134}],31:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactBrowserEventEmitter
 * @typechecks static-only
 */
"use strict";function n(t){return Object.prototype.hasOwnProperty.call(t,f)||(t[f]=d++,c[t[f]]={}),c[t[f]]}var o=t("./EventConstants"),i=t("./EventPluginHub"),r=t("./EventPluginRegistry"),s=t("./ReactEventEmitterMixin"),a=t("./ViewportMetrics"),l=t("./isEventSupported"),u=t("./merge"),c={},p=!1,d=0,h={topBlur:"blur",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTextInput:"textInput",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topWheel:"wheel"},f="_reactListenersID"+String(Math.random()).slice(2),m=u(s,{ReactEventListener:null,injection:{injectReactEventListener:function(t){t.setHandleTopLevel(m.handleTopLevel),m.ReactEventListener=t}},setEnabled:function(t){m.ReactEventListener&&m.ReactEventListener.setEnabled(t)},isEnabled:function(){return!(!m.ReactEventListener||!m.ReactEventListener.isEnabled())},listenTo:function(t,e){for(var i=e,s=n(i),a=r.registrationNameDependencies[t],u=o.topLevelTypes,c=0,p=a.length;p>c;c++){var d=a[c];s.hasOwnProperty(d)&&s[d]||(d===u.topWheel?l("wheel")?m.ReactEventListener.trapBubbledEvent(u.topWheel,"wheel",i):l("mousewheel")?m.ReactEventListener.trapBubbledEvent(u.topWheel,"mousewheel",i):m.ReactEventListener.trapBubbledEvent(u.topWheel,"DOMMouseScroll",i):d===u.topScroll?l("scroll",!0)?m.ReactEventListener.trapCapturedEvent(u.topScroll,"scroll",i):m.ReactEventListener.trapBubbledEvent(u.topScroll,"scroll",m.ReactEventListener.WINDOW_HANDLE):d===u.topFocus||d===u.topBlur?(l("focus",!0)?(m.ReactEventListener.trapCapturedEvent(u.topFocus,"focus",i),m.ReactEventListener.trapCapturedEvent(u.topBlur,"blur",i)):l("focusin")&&(m.ReactEventListener.trapBubbledEvent(u.topFocus,"focusin",i),m.ReactEventListener.trapBubbledEvent(u.topBlur,"focusout",i)),s[u.topBlur]=!0,s[u.topFocus]=!0):h.hasOwnProperty(d)&&m.ReactEventListener.trapBubbledEvent(d,h[d],i),s[d]=!0)}},trapBubbledEvent:function(t,e,n){return m.ReactEventListener.trapBubbledEvent(t,e,n)},trapCapturedEvent:function(t,e,n){return m.ReactEventListener.trapCapturedEvent(t,e,n)},ensureScrollValueMonitoring:function(){if(!p){var t=a.refreshScrollValues;m.ReactEventListener.monitorScrollValue(t),p=!0}},eventNameDispatchConfigs:i.eventNameDispatchConfigs,registrationNameModules:i.registrationNameModules,putListener:i.putListener,getListener:i.getListener,deleteListener:i.deleteListener,deleteAllListeners:i.deleteAllListeners});e.exports=m},{"./EventConstants":16,"./EventPluginHub":18,"./EventPluginRegistry":19,"./ReactEventEmitterMixin":60,"./ViewportMetrics":105,"./isEventSupported":135,"./merge":144}],32:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @typechecks
 * @providesModule ReactCSSTransitionGroup
 */
"use strict";var n=t("./React"),o=t("./ReactTransitionGroup"),i=t("./ReactCSSTransitionGroupChild"),r=n.createClass({displayName:"ReactCSSTransitionGroup",propTypes:{transitionName:n.PropTypes.string.isRequired,transitionEnter:n.PropTypes.bool,transitionLeave:n.PropTypes.bool},getDefaultProps:function(){return{transitionEnter:!0,transitionLeave:!0}},_wrapChild:function(t){return i({name:this.props.transitionName,enter:this.props.transitionEnter,leave:this.props.transitionLeave},t)},render:function(){return this.transferPropsTo(o({childFactory:this._wrapChild},this.props.children))}});e.exports=r},{"./React":29,"./ReactCSSTransitionGroupChild":33,"./ReactTransitionGroup":86}],33:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @typechecks
 * @providesModule ReactCSSTransitionGroupChild
 */
"use strict";var n=t("./React"),o=t("./CSSCore"),i=t("./ReactTransitionEvents"),r=t("./onlyChild"),s=17,a=5e3,l=null;l=function(){console.warn("transition(): tried to perform an animation without an animationend or transitionend event after timeout ("+a+"ms). You should either disable this transition in JS or add a CSS animation/transition.")};var u=n.createClass({displayName:"ReactCSSTransitionGroupChild",transition:function(t,e){var n=this.getDOMNode(),r=this.props.name+"-"+t,s=r+"-active",u=null,c=function(){clearTimeout(u),o.removeClass(n,r),o.removeClass(n,s),i.removeEndEventListener(n,c),e&&e()};i.addEndEventListener(n,c),o.addClass(n,r),this.queueClass(s),u=setTimeout(l,a)},queueClass:function(t){this.classNameQueue.push(t),this.timeout||(this.timeout=setTimeout(this.flushClassNameQueue,s))},flushClassNameQueue:function(){this.isMounted()&&this.classNameQueue.forEach(o.addClass.bind(o,this.getDOMNode())),this.classNameQueue.length=0,this.timeout=null},componentWillMount:function(){this.classNameQueue=[]},componentWillUnmount:function(){this.timeout&&clearTimeout(this.timeout)},componentWillEnter:function(t){this.props.enter?this.transition("enter",t):t()},componentWillLeave:function(t){this.props.leave?this.transition("leave",t):t()},render:function(){return r(this.props.children)}});e.exports=u},{"./CSSCore":3,"./React":29,"./ReactTransitionEvents":85,"./onlyChild":149}],34:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactChildren
 */
"use strict";function n(t,e){this.forEachFunction=t,this.forEachContext=e}function o(t,e,n,o){var i=t;i.forEachFunction.call(i.forEachContext,e,o)}function i(t,e,i){if(null==t)return t;var r=n.getPooled(e,i);p(t,o,r),n.release(r)}function r(t,e,n){this.mapResult=t,this.mapFunction=e,this.mapContext=n}function s(t,e,n,o){var i=t,r=i.mapResult,s=!r.hasOwnProperty(n);if(d(s,"ReactChildren.map(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.",n),s){var a=i.mapFunction.call(i.mapContext,e,o);r[n]=a}}function a(t,e,n){if(null==t)return t;var o={},i=r.getPooled(o,e,n);return p(t,s,i),r.release(i),o}function l(){return null}function u(t){return p(t,l,null)}var c=t("./PooledClass"),p=t("./traverseAllChildren"),d=t("./warning"),h=c.twoArgumentPooler,f=c.threeArgumentPooler;c.addPoolingTo(n,h),c.addPoolingTo(r,f);var m={forEach:i,map:a,count:u};e.exports=m},{"./PooledClass":28,"./traverseAllChildren":156,"./warning":158}],35:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactComponent
 */
"use strict";var n=t("./ReactDescriptor"),o=t("./ReactOwner"),i=t("./ReactUpdates"),r=t("./invariant"),s=t("./keyMirror"),a=t("./merge"),l=s({MOUNTED:null,UNMOUNTED:null}),u=!1,c=null,p=null,d={injection:{injectEnvironment:function(t){r(!u,"ReactComponent: injectEnvironment() can only be called once."),p=t.mountImageIntoNode,c=t.unmountIDFromEnvironment,d.BackendIDOperations=t.BackendIDOperations,u=!0}},LifeCycle:l,BackendIDOperations:null,Mixin:{isMounted:function(){return this._lifeCycleState===l.MOUNTED},setProps:function(t,e){var n=this._pendingDescriptor||this._descriptor;this.replaceProps(a(n.props,t),e)},replaceProps:function(t,e){r(this.isMounted(),"replaceProps(...): Can only update a mounted component."),r(0===this._mountDepth,"replaceProps(...): You called `setProps` or `replaceProps` on a component with a parent. This is an anti-pattern since props will get reactively updated when rendered. Instead, change the owner's `render` method to pass the correct value as props to the component where it is created."),this._pendingDescriptor=n.cloneAndReplaceProps(this._pendingDescriptor||this._descriptor,t),i.enqueueUpdate(this,e)},_setPropsInternal:function(t,e){var o=this._pendingDescriptor||this._descriptor;this._pendingDescriptor=n.cloneAndReplaceProps(o,a(o.props,t)),i.enqueueUpdate(this,e)},construct:function(t){this.props=t.props,this._owner=t._owner,this._lifeCycleState=l.UNMOUNTED,this._pendingCallbacks=null,this._descriptor=t,this._pendingDescriptor=null},mountComponent:function(t,e,n){r(!this.isMounted(),"mountComponent(%s, ...): Can only mount an unmounted component. Make sure to avoid storing components between renders or reusing a single component instance in multiple places.",t);var i=this._descriptor.props;if(null!=i.ref){var s=this._descriptor._owner;o.addComponentAsRefTo(this,i.ref,s)}this._rootNodeID=t,this._lifeCycleState=l.MOUNTED,this._mountDepth=n},unmountComponent:function(){r(this.isMounted(),"unmountComponent(): Can only unmount a mounted component.");var t=this.props;null!=t.ref&&o.removeComponentAsRefFrom(this,t.ref,this._owner),c(this._rootNodeID),this._rootNodeID=null,this._lifeCycleState=l.UNMOUNTED},receiveComponent:function(t,e){r(this.isMounted(),"receiveComponent(...): Can only update a mounted component."),this._pendingDescriptor=t,this.performUpdateIfNecessary(e)},performUpdateIfNecessary:function(t){if(null!=this._pendingDescriptor){var e=this._descriptor,n=this._pendingDescriptor;this._descriptor=n,this.props=n.props,this._owner=n._owner,this._pendingDescriptor=null,this.updateComponent(t,e)}},updateComponent:function(t,e){var n=this._descriptor;(n._owner!==e._owner||n.props.ref!==e.props.ref)&&(null!=e.props.ref&&o.removeComponentAsRefFrom(this,e.props.ref,e._owner),null!=n.props.ref&&o.addComponentAsRefTo(this,n.props.ref,n._owner))},mountComponentIntoNode:function(t,e,n){var o=i.ReactReconcileTransaction.getPooled();o.perform(this._mountComponentIntoNode,this,t,e,o,n),i.ReactReconcileTransaction.release(o)},_mountComponentIntoNode:function(t,e,n,o){var i=this.mountComponent(t,n,0);p(i,e,o)},isOwnedBy:function(t){return this._owner===t},getSiblingByRef:function(t){var e=this._owner;return e&&e.refs?e.refs[t]:null}}};e.exports=d},{"./ReactDescriptor":56,"./ReactOwner":70,"./ReactUpdates":87,"./invariant":134,"./keyMirror":140,"./merge":144}],36:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactComponentBrowserEnvironment
 */
"use strict";var n=t("./ReactDOMIDOperations"),o=t("./ReactMarkupChecksum"),i=t("./ReactMount"),r=t("./ReactPerf"),s=t("./ReactReconcileTransaction"),a=t("./getReactRootElementInContainer"),l=t("./invariant"),u=t("./setInnerHTML"),c=1,p=9,d={ReactReconcileTransaction:s,BackendIDOperations:n,unmountIDFromEnvironment:function(t){i.purgeID(t)},mountImageIntoNode:r.measure("ReactComponentBrowserEnvironment","mountImageIntoNode",function(t,e,n){if(l(e&&(e.nodeType===c||e.nodeType===p),"mountComponentIntoNode(...): Target container is not valid."),n){if(o.canReuseMarkup(t,a(e)))return;l(e.nodeType!==p,"You're trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side."),console.warn("React attempted to use reuse markup in a container but the checksum was invalid. This generally means that you are using server rendering and the markup generated on the server was not what the client was expecting. React injected new markup to compensate which works but you have lost many of the benefits of server rendering. Instead, figure out why the markup being generated is different on the client or server.")}l(e.nodeType!==p,"You're trying to render a component to the document but you didn't use server rendering. We can't do this without using server rendering due to cross-browser quirks. See renderComponentToString() for server rendering."),u(e,t)})};e.exports=d},{"./ReactDOMIDOperations":45,"./ReactMarkupChecksum":66,"./ReactMount":67,"./ReactPerf":71,"./ReactReconcileTransaction":77,"./getReactRootElementInContainer":128,"./invariant":134,"./setInnerHTML":152}],37:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
* @providesModule ReactComponentWithPureRenderMixin
*/
"use strict";var n=t("./shallowEqual"),o={shouldComponentUpdate:function(t,e){return!n(this.props,t)||!n(this.state,e)}};e.exports=o},{"./shallowEqual":153}],38:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactCompositeComponent
 */
"use strict";function n(t){var e=t._owner||null;return e&&e.constructor&&e.constructor.displayName?" Check the render method of `"+e.constructor.displayName+"`.":""}function o(t,e,n){for(var o in e)e.hasOwnProperty(o)&&w("function"==typeof e[o],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",t.displayName||"ReactCompositeComponent",x[n],o)}function i(t,e){var n=A.hasOwnProperty(e)?A[e]:null;U.hasOwnProperty(e)&&w(n===I.OVERRIDE_BASE,"ReactCompositeComponentInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t.hasOwnProperty(e)&&w(n===I.DEFINE_MANY||n===I.DEFINE_MANY_MERGED,"ReactCompositeComponentInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function r(t){var e=t._compositeLifeCycleState;w(t.isMounted()||e===L.MOUNTING,"replaceState(...): Can only update a mounted or mounting component."),w(e!==L.RECEIVING_STATE,"replaceState(...): Cannot update during an existing state transition (such as within `render`). This could potentially cause an infinite loop so it is forbidden."),w(e!==L.UNMOUNTING,"replaceState(...): Cannot update while unmounting component. This usually means you called setState() on an unmounted component.")}function s(t,e){w(!f.isValidFactory(e),"ReactCompositeComponent: You're attempting to use a component class as a mixin. Instead, just use a regular object."),w(!f.isValidDescriptor(e),"ReactCompositeComponent: You're attempting to use a component as a mixin. Instead, just use a regular object.");var n=t.prototype;for(var o in e){var r=e[o];if(e.hasOwnProperty(o))if(i(n,o),k.hasOwnProperty(o))k[o](t,r);else{var s=A.hasOwnProperty(o),a=n.hasOwnProperty(o),l=r&&r.__reactDontBind,p="function"==typeof r,d=p&&!s&&!a&&!l;if(d)n.__reactAutoBindMap||(n.__reactAutoBindMap={}),n.__reactAutoBindMap[o]=r,n[o]=r;else if(a){var h=A[o];w(s&&(h===I.DEFINE_MANY_MERGED||h===I.DEFINE_MANY),"ReactCompositeComponent: Unexpected spec policy %s for key %s when mixing in component specs.",h,o),h===I.DEFINE_MANY_MERGED?n[o]=u(n[o],r):h===I.DEFINE_MANY&&(n[o]=c(n[o],r))}else n[o]=r,"function"==typeof r&&e.displayName&&(n[o].displayName=e.displayName+"_"+o)}}}function a(t,e){if(e)for(var n in e){var o=e[n];if(e.hasOwnProperty(n)){var i=n in t,r=o;if(i){var s=t[n],a=typeof s,l=typeof o;w("function"===a&&"function"===l,"ReactCompositeComponent: You are attempting to define `%s` on your component more than once, but that is only supported for functions, which are chained together. This conflict may be due to a mixin.",n),r=c(s,o)}t[n]=r}}}function l(t,e){return w(t&&e&&"object"==typeof t&&"object"==typeof e,"mergeObjectsWithNoDuplicateKeys(): Cannot merge non-objects"),O(e,function(e,n){w(void 0===t[n],"mergeObjectsWithNoDuplicateKeys(): Tried to merge two objects with the same key: %s",n),t[n]=e}),t}function u(t,e){return function(){var n=t.apply(this,arguments),o=e.apply(this,arguments);return null==n?o:null==o?n:l(n,o)}}function c(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}var p=t("./ReactComponent"),d=t("./ReactContext"),h=t("./ReactCurrentOwner"),f=t("./ReactDescriptor"),m=t("./ReactDescriptorValidator"),g=t("./ReactEmptyComponent"),v=t("./ReactErrorUtils"),y=t("./ReactOwner"),b=t("./ReactPerf"),C=t("./ReactPropTransferer"),P=t("./ReactPropTypeLocations"),x=t("./ReactPropTypeLocationNames"),E=t("./ReactUpdates"),_=t("./instantiateReactComponent"),w=t("./invariant"),D=t("./keyMirror"),j=t("./merge"),S=t("./mixInto"),M=t("./monitorCodeUse"),O=t("./mapObject"),T=t("./shouldUpdateReactComponent"),R=t("./warning"),I=D({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),N=[],A={mixins:I.DEFINE_MANY,statics:I.DEFINE_MANY,propTypes:I.DEFINE_MANY,contextTypes:I.DEFINE_MANY,childContextTypes:I.DEFINE_MANY,getDefaultProps:I.DEFINE_MANY_MERGED,getInitialState:I.DEFINE_MANY_MERGED,getChildContext:I.DEFINE_MANY_MERGED,render:I.DEFINE_ONCE,componentWillMount:I.DEFINE_MANY,componentDidMount:I.DEFINE_MANY,componentWillReceiveProps:I.DEFINE_MANY,shouldComponentUpdate:I.DEFINE_ONCE,componentWillUpdate:I.DEFINE_MANY,componentDidUpdate:I.DEFINE_MANY,componentWillUnmount:I.DEFINE_MANY,updateComponent:I.OVERRIDE_BASE},k={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)s(t,e[n])},childContextTypes:function(t,e){o(t,e,P.childContext),t.childContextTypes=j(t.childContextTypes,e)},contextTypes:function(t,e){o(t,e,P.context),t.contextTypes=j(t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps=t.getDefaultProps?u(t.getDefaultProps,e):e},propTypes:function(t,e){o(t,e,P.prop),t.propTypes=j(t.propTypes,e)},statics:function(t,e){a(t,e)}},L=D({MOUNTING:null,UNMOUNTING:null,RECEIVING_PROPS:null,RECEIVING_STATE:null}),U={construct:function(){p.Mixin.construct.apply(this,arguments),y.Mixin.construct.apply(this,arguments),this.state=null,this._pendingState=null,this.context=null,this._compositeLifeCycleState=null},isMounted:function(){return p.Mixin.isMounted.call(this)&&this._compositeLifeCycleState!==L.MOUNTING},mountComponent:b.measure("ReactCompositeComponent","mountComponent",function(t,e,n){p.Mixin.mountComponent.call(this,t,e,n),this._compositeLifeCycleState=L.MOUNTING,this.__reactAutoBindMap&&this._bindAutoBindMethods(),this.context=this._processContext(this._descriptor._context),this.props=this._processProps(this.props),this.state=this.getInitialState?this.getInitialState():null,w("object"==typeof this.state&&!Array.isArray(this.state),"%s.getInitialState(): must return an object or null",this.constructor.displayName||"ReactCompositeComponent"),this._pendingState=null,this._pendingForceUpdate=!1,this.componentWillMount&&(this.componentWillMount(),this._pendingState&&(this.state=this._pendingState,this._pendingState=null)),this._renderedComponent=_(this._renderValidatedComponent()),this._compositeLifeCycleState=null;var o=this._renderedComponent.mountComponent(t,e,n+1);return this.componentDidMount&&e.getReactMountReady().enqueue(this.componentDidMount,this),o}),unmountComponent:function(){this._compositeLifeCycleState=L.UNMOUNTING,this.componentWillUnmount&&this.componentWillUnmount(),this._compositeLifeCycleState=null,this._renderedComponent.unmountComponent(),this._renderedComponent=null,p.Mixin.unmountComponent.call(this)},setState:function(t,e){w("object"==typeof t||null==t,"setState(...): takes an object of state variables to update."),R(null!=t,"setState(...): You passed an undefined or null state object; instead, use forceUpdate()."),this.replaceState(j(this._pendingState||this.state,t),e)},replaceState:function(t,e){r(this),this._pendingState=t,this._compositeLifeCycleState!==L.MOUNTING&&E.enqueueUpdate(this,e)},_processContext:function(t){var e=null,n=this.constructor.contextTypes;if(n){e={};for(var o in n)e[o]=t[o];this._checkPropTypes(n,e,P.context)}return e},_processChildContext:function(t){var e=this.getChildContext&&this.getChildContext(),n=this.constructor.displayName||"ReactCompositeComponent";if(e){w("object"==typeof this.constructor.childContextTypes,"%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",n),this._checkPropTypes(this.constructor.childContextTypes,e,P.childContext);for(var o in e)w(o in this.constructor.childContextTypes,'%s.getChildContext(): key "%s" is not defined in childContextTypes.',n,o);return j(t,e)}return t},_processProps:function(t){var e,n=this.constructor.defaultProps;if(n){e=j(t);for(var o in n)"undefined"==typeof e[o]&&(e[o]=n[o])}else e=t;var i=this.constructor.propTypes;return i&&this._checkPropTypes(i,e,P.prop),e},_checkPropTypes:function(t,e,o){var i=this.constructor.displayName;for(var r in t)if(t.hasOwnProperty(r)){var s=t[r](e,r,i,o);if(s instanceof Error){var a=n(this);R(!1,s.message+a)}}},performUpdateIfNecessary:function(t){var e=this._compositeLifeCycleState;if(e!==L.MOUNTING&&e!==L.RECEIVING_PROPS&&(null!=this._pendingDescriptor||null!=this._pendingState||this._pendingForceUpdate)){var n=this.context,o=this.props,i=this._descriptor;null!=this._pendingDescriptor&&(i=this._pendingDescriptor,n=this._processContext(i._context),o=this._processProps(i.props),this._pendingDescriptor=null,this._compositeLifeCycleState=L.RECEIVING_PROPS,this.componentWillReceiveProps&&this.componentWillReceiveProps(o,n)),this._compositeLifeCycleState=L.RECEIVING_STATE;var r=this._pendingState||this.state;this._pendingState=null;try{var s=this._pendingForceUpdate||!this.shouldComponentUpdate||this.shouldComponentUpdate(o,r,n);"undefined"==typeof s&&console.warn((this.constructor.displayName||"ReactCompositeComponent")+".shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false."),s?(this._pendingForceUpdate=!1,this._performComponentUpdate(i,o,r,n,t)):(this._descriptor=i,this.props=o,this.state=r,this.context=n,this._owner=i._owner)}finally{this._compositeLifeCycleState=null}}},_performComponentUpdate:function(t,e,n,o,i){var r=this._descriptor,s=this.props,a=this.state,l=this.context;this.componentWillUpdate&&this.componentWillUpdate(e,n,o),this._descriptor=t,this.props=e,this.state=n,this.context=o,this._owner=t._owner,this.updateComponent(i,r),this.componentDidUpdate&&i.getReactMountReady().enqueue(this.componentDidUpdate.bind(this,s,a,l),this)},receiveComponent:function(t,e){(t!==this._descriptor||null==t._owner)&&p.Mixin.receiveComponent.call(this,t,e)},updateComponent:b.measure("ReactCompositeComponent","updateComponent",function(t,e){p.Mixin.updateComponent.call(this,t,e);var n=this._renderedComponent,o=n._descriptor,i=this._renderValidatedComponent();if(T(o,i))n.receiveComponent(i,t);else{var r=this._rootNodeID,s=n._rootNodeID;n.unmountComponent(),this._renderedComponent=_(i);var a=this._renderedComponent.mountComponent(r,t,this._mountDepth+1);p.BackendIDOperations.dangerouslyReplaceNodeWithMarkupByID(s,a)}}),forceUpdate:function(t){var e=this._compositeLifeCycleState;w(this.isMounted()||e===L.MOUNTING,"forceUpdate(...): Can only force an update on mounted or mounting components."),w(e!==L.RECEIVING_STATE&&e!==L.UNMOUNTING,"forceUpdate(...): Cannot force an update while unmounting component or during an existing state transition (such as within `render`)."),this._pendingForceUpdate=!0,E.enqueueUpdate(this,t)},_renderValidatedComponent:b.measure("ReactCompositeComponent","_renderValidatedComponent",function(){var t,e=d.current;d.current=this._processChildContext(this._descriptor._context),h.current=this;try{t=this.render(),null===t||t===!1?(t=g.getEmptyComponent(),g.registerNullComponentID(this._rootNodeID)):g.deregisterNullComponentID(this._rootNodeID)}finally{d.current=e,h.current=null}return w(f.isValidDescriptor(t),"%s.render(): A valid ReactComponent must be returned. You may have returned undefined, an array or some other invalid object.",this.constructor.displayName||"ReactCompositeComponent"),t}),_bindAutoBindMethods:function(){for(var t in this.__reactAutoBindMap)if(this.__reactAutoBindMap.hasOwnProperty(t)){var e=this.__reactAutoBindMap[t];this[t]=this._bindAutoBindMethod(v.guard(e,this.constructor.displayName+"."+t))}},_bindAutoBindMethod:function(t){var e=this,n=function(){return t.apply(e,arguments)};n.__reactBoundContext=e,n.__reactBoundMethod=t,n.__reactBoundArguments=null;var o=e.constructor.displayName,i=n.bind;return n.bind=function(r){var s=Array.prototype.slice.call(arguments,1);if(r!==e&&null!==r)M("react_bind_warning",{component:o}),console.warn("bind(): React component methods may only be bound to the component instance. See "+o);else if(!s.length)return M("react_bind_warning",{component:o}),console.warn("bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See "+o),n;var a=i.apply(n,arguments);return a.__reactBoundContext=e,a.__reactBoundMethod=t,a.__reactBoundArguments=s,a},n}},F=function(){};S(F,p.Mixin),S(F,y.Mixin),S(F,C.Mixin),S(F,U);var B={LifeCycle:L,Base:F,createClass:function(t){var e=function(t,e){this.construct(t,e)};e.prototype=new F,e.prototype.constructor=e,N.forEach(s.bind(null,e)),s(e,t),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),w(e.prototype.render,"createClass(...): Class specification must implement a `render` method."),e.prototype.componentShouldUpdate&&(M("react_component_should_update_warning",{component:t.displayName}),console.warn((t.displayName||"A component")+" has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value."));for(var n in A)e.prototype[n]||(e.prototype[n]=null);var o=f.createFactory(e);return m.createFactory(o,e.propTypes,e.contextTypes)},injection:{injectMixin:function(t){N.push(t)}}};e.exports=B},{"./ReactComponent":35,"./ReactContext":39,"./ReactCurrentOwner":40,"./ReactDescriptor":56,"./ReactDescriptorValidator":57,"./ReactEmptyComponent":58,"./ReactErrorUtils":59,"./ReactOwner":70,"./ReactPerf":71,"./ReactPropTransferer":72,"./ReactPropTypeLocationNames":73,"./ReactPropTypeLocations":74,"./ReactUpdates":87,"./instantiateReactComponent":133,"./invariant":134,"./keyMirror":140,"./mapObject":142,"./merge":144,"./mixInto":147,"./monitorCodeUse":148,"./shouldUpdateReactComponent":154,"./warning":158}],39:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactContext
 */
"use strict";var n=t("./merge"),o={current:{},withContext:function(t,e){var i,r=o.current;o.current=n(r,t);try{i=e()}finally{o.current=r}return i}};e.exports=o},{"./merge":144}],40:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactCurrentOwner
 */
"use strict";var n={current:null};e.exports=n},{}],41:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactDOM
 * @typechecks static-only
 */
"use strict";function n(t,e){var n=function(t){this.construct(t)};n.prototype=new r(e,t),n.prototype.constructor=n,n.displayName=e;var s=o.createFactory(n);return i.createFactory(s)}var o=t("./ReactDescriptor"),i=t("./ReactDescriptorValidator"),r=t("./ReactDOMComponent"),s=t("./mergeInto"),a=t("./mapObject"),l=a({a:!1,abbr:!1,address:!1,area:!0,article:!1,aside:!1,audio:!1,b:!1,base:!0,bdi:!1,bdo:!1,big:!1,blockquote:!1,body:!1,br:!0,button:!1,canvas:!1,caption:!1,cite:!1,code:!1,col:!0,colgroup:!1,data:!1,datalist:!1,dd:!1,del:!1,details:!1,dfn:!1,dialog:!1,div:!1,dl:!1,dt:!1,em:!1,embed:!0,fieldset:!1,figcaption:!1,figure:!1,footer:!1,form:!1,h1:!1,h2:!1,h3:!1,h4:!1,h5:!1,h6:!1,head:!1,header:!1,hr:!0,html:!1,i:!1,iframe:!1,img:!0,input:!0,ins:!1,kbd:!1,keygen:!0,label:!1,legend:!1,li:!1,link:!0,main:!1,map:!1,mark:!1,menu:!1,menuitem:!1,meta:!0,meter:!1,nav:!1,noscript:!1,object:!1,ol:!1,optgroup:!1,option:!1,output:!1,p:!1,param:!0,picture:!1,pre:!1,progress:!1,q:!1,rp:!1,rt:!1,ruby:!1,s:!1,samp:!1,script:!1,section:!1,select:!1,small:!1,source:!0,span:!1,strong:!1,style:!1,sub:!1,summary:!1,sup:!1,table:!1,tbody:!1,td:!1,textarea:!1,tfoot:!1,th:!1,thead:!1,time:!1,title:!1,tr:!1,track:!0,u:!1,ul:!1,"var":!1,video:!1,wbr:!0,circle:!1,defs:!1,ellipse:!1,g:!1,line:!1,linearGradient:!1,mask:!1,path:!1,pattern:!1,polygon:!1,polyline:!1,radialGradient:!1,rect:!1,stop:!1,svg:!1,text:!1,tspan:!1},n),u={injectComponentClasses:function(t){s(l,t)}};l.injection=u,e.exports=l},{"./ReactDOMComponent":43,"./ReactDescriptor":56,"./ReactDescriptorValidator":57,"./mapObject":142,"./mergeInto":146}],42:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactDOMButton
 */
"use strict";var n=t("./AutoFocusMixin"),o=t("./ReactBrowserComponentMixin"),i=t("./ReactCompositeComponent"),r=t("./ReactDOM"),s=t("./keyMirror"),a=r.button,l=s({onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0}),u=i.createClass({displayName:"ReactDOMButton",mixins:[n,o],render:function(){var t={};for(var e in this.props)!this.props.hasOwnProperty(e)||this.props.disabled&&l[e]||(t[e]=this.props[e]);return a(t,this.props.children)}});e.exports=u},{"./AutoFocusMixin":1,"./ReactBrowserComponentMixin":30,"./ReactCompositeComponent":38,"./ReactDOM":41,"./keyMirror":140}],43:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactDOMComponent
 * @typechecks static-only
 */
"use strict";function n(t){t&&(m(null==t.children||null==t.dangerouslySetInnerHTML,"Can only set one of `children` or `props.dangerouslySetInnerHTML`."),m(null==t.style||"object"==typeof t.style,"The `style` prop expects a mapping from style properties to values, not a string."))}function o(t,e,n,o){var i=p.findReactContainerForID(t);if(i){var r=i.nodeType===_?i.ownerDocument:i;C(e,r)}o.getPutListenerQueue().enqueuePutListener(t,e,n)}function i(t,e){this._tagOpen="<"+t,this._tagClose=e?"":"</"+t+">",this.tagName=t.toUpperCase()}var r=t("./CSSPropertyOperations"),s=t("./DOMProperty"),a=t("./DOMPropertyOperations"),l=t("./ReactBrowserComponentMixin"),u=t("./ReactComponent"),c=t("./ReactBrowserEventEmitter"),p=t("./ReactMount"),d=t("./ReactMultiChild"),h=t("./ReactPerf"),f=t("./escapeTextForBrowser"),m=t("./invariant"),g=t("./keyOf"),v=t("./merge"),y=t("./mixInto"),b=c.deleteListener,C=c.listenTo,P=c.registrationNameModules,x={string:!0,number:!0},E=g({style:null}),_=1;i.Mixin={mountComponent:h.measure("ReactDOMComponent","mountComponent",function(t,e,o){return u.Mixin.mountComponent.call(this,t,e,o),n(this.props),this._createOpenTagMarkupAndPutListeners(e)+this._createContentMarkup(e)+this._tagClose}),_createOpenTagMarkupAndPutListeners:function(t){var e=this.props,n=this._tagOpen;for(var i in e)if(e.hasOwnProperty(i)){var s=e[i];if(null!=s)if(P.hasOwnProperty(i))o(this._rootNodeID,i,s,t);else{i===E&&(s&&(s=e.style=v(e.style)),s=r.createMarkupForStyles(s));var l=a.createMarkupForProperty(i,s);l&&(n+=" "+l)}}if(t.renderToStaticMarkup)return n+">";var u=a.createMarkupForID(this._rootNodeID);return n+" "+u+">"},_createContentMarkup:function(t){var e=this.props.dangerouslySetInnerHTML;if(null!=e){if(null!=e.__html)return e.__html}else{var n=x[typeof this.props.children]?this.props.children:null,o=null!=n?null:this.props.children;if(null!=n)return f(n);if(null!=o){var i=this.mountChildren(o,t);return i.join("")}}return""},receiveComponent:function(t,e){(t!==this._descriptor||null==t._owner)&&u.Mixin.receiveComponent.call(this,t,e)},updateComponent:h.measure("ReactDOMComponent","updateComponent",function(t,e){n(this._descriptor.props),u.Mixin.updateComponent.call(this,t,e),this._updateDOMProperties(e.props,t),this._updateDOMChildren(e.props,t)}),_updateDOMProperties:function(t,e){var n,i,r,a=this.props;for(n in t)if(!a.hasOwnProperty(n)&&t.hasOwnProperty(n))if(n===E){var l=t[n];for(i in l)l.hasOwnProperty(i)&&(r=r||{},r[i]="")}else P.hasOwnProperty(n)?b(this._rootNodeID,n):(s.isStandardName[n]||s.isCustomAttribute(n))&&u.BackendIDOperations.deletePropertyByID(this._rootNodeID,n);for(n in a){var c=a[n],p=t[n];if(a.hasOwnProperty(n)&&c!==p)if(n===E)if(c&&(c=a.style=v(c)),p){for(i in p)!p.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(r=r||{},r[i]="");for(i in c)c.hasOwnProperty(i)&&p[i]!==c[i]&&(r=r||{},r[i]=c[i])}else r=c;else P.hasOwnProperty(n)?o(this._rootNodeID,n,c,e):(s.isStandardName[n]||s.isCustomAttribute(n))&&u.BackendIDOperations.updatePropertyByID(this._rootNodeID,n,c)}r&&u.BackendIDOperations.updateStylesByID(this._rootNodeID,r)},_updateDOMChildren:function(t,e){var n=this.props,o=x[typeof t.children]?t.children:null,i=x[typeof n.children]?n.children:null,r=t.dangerouslySetInnerHTML&&t.dangerouslySetInnerHTML.__html,s=n.dangerouslySetInnerHTML&&n.dangerouslySetInnerHTML.__html,a=null!=o?null:t.children,l=null!=i?null:n.children,c=null!=o||null!=r,p=null!=i||null!=s;null!=a&&null==l?this.updateChildren(null,e):c&&!p&&this.updateTextContent(""),null!=i?o!==i&&this.updateTextContent(""+i):null!=s?r!==s&&u.BackendIDOperations.updateInnerHTMLByID(this._rootNodeID,s):null!=l&&this.updateChildren(l,e)},unmountComponent:function(){this.unmountChildren(),c.deleteAllListeners(this._rootNodeID),u.Mixin.unmountComponent.call(this)}},y(i,u.Mixin),y(i,i.Mixin),y(i,d.Mixin),y(i,l),e.exports=i},{"./CSSPropertyOperations":5,"./DOMProperty":11,"./DOMPropertyOperations":12,"./ReactBrowserComponentMixin":30,"./ReactBrowserEventEmitter":31,"./ReactComponent":35,"./ReactMount":67,"./ReactMultiChild":68,"./ReactPerf":71,"./escapeTextForBrowser":118,"./invariant":134,"./keyOf":141,"./merge":144,"./mixInto":147}],44:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactDOMForm
 */
"use strict";var n=t("./EventConstants"),o=t("./LocalEventTrapMixin"),i=t("./ReactBrowserComponentMixin"),r=t("./ReactCompositeComponent"),s=t("./ReactDOM"),a=s.form,l=r.createClass({displayName:"ReactDOMForm",mixins:[i,o],render:function(){return this.transferPropsTo(a(null,this.props.children))},componentDidMount:function(){this.trapBubbledEvent(n.topLevelTypes.topReset,"reset"),this.trapBubbledEvent(n.topLevelTypes.topSubmit,"submit")}});e.exports=l},{"./EventConstants":16,"./LocalEventTrapMixin":26,"./ReactBrowserComponentMixin":30,"./ReactCompositeComponent":38,"./ReactDOM":41}],45:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactDOMIDOperations
 * @typechecks static-only
 */
"use strict";var n=t("./CSSPropertyOperations"),o=t("./DOMChildrenOperations"),i=t("./DOMPropertyOperations"),r=t("./ReactMount"),s=t("./ReactPerf"),a=t("./invariant"),l=t("./setInnerHTML"),u={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},c={updatePropertyByID:s.measure("ReactDOMIDOperations","updatePropertyByID",function(t,e,n){var o=r.getNode(t);a(!u.hasOwnProperty(e),"updatePropertyByID(...): %s",u[e]),null!=n?i.setValueForProperty(o,e,n):i.deleteValueForProperty(o,e)}),deletePropertyByID:s.measure("ReactDOMIDOperations","deletePropertyByID",function(t,e,n){var o=r.getNode(t);a(!u.hasOwnProperty(e),"updatePropertyByID(...): %s",u[e]),i.deleteValueForProperty(o,e,n)}),updateStylesByID:s.measure("ReactDOMIDOperations","updateStylesByID",function(t,e){var o=r.getNode(t);n.setValueForStyles(o,e)}),updateInnerHTMLByID:s.measure("ReactDOMIDOperations","updateInnerHTMLByID",function(t,e){var n=r.getNode(t);l(n,e)}),updateTextContentByID:s.measure("ReactDOMIDOperations","updateTextContentByID",function(t,e){var n=r.getNode(t);o.updateTextContent(n,e)}),dangerouslyReplaceNodeWithMarkupByID:s.measure("ReactDOMIDOperations","dangerouslyReplaceNodeWithMarkupByID",function(t,e){var n=r.getNode(t);o.dangerouslyReplaceNodeWithMarkup(n,e)}),dangerouslyProcessChildrenUpdates:s.measure("ReactDOMIDOperations","dangerouslyProcessChildrenUpdates",function(t,e){for(var n=0;n<t.length;n++)t[n].parentNode=r.getNode(t[n].parentID);o.processUpdates(t,e)})};e.exports=c},{"./CSSPropertyOperations":5,"./DOMChildrenOperations":10,"./DOMPropertyOperations":12,"./ReactMount":67,"./ReactPerf":71,"./invariant":134,"./setInnerHTML":152}],46:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactDOMImg
 */
"use strict";var n=t("./EventConstants"),o=t("./LocalEventTrapMixin"),i=t("./ReactBrowserComponentMixin"),r=t("./ReactCompositeComponent"),s=t("./ReactDOM"),a=s.img,l=r.createClass({displayName:"ReactDOMImg",tagName:"IMG",mixins:[i,o],render:function(){return a(this.props)},componentDidMount:function(){this.trapBubbledEvent(n.topLevelTypes.topLoad,"load"),this.trapBubbledEvent(n.topLevelTypes.topError,"error")}});e.exports=l},{"./EventConstants":16,"./LocalEventTrapMixin":26,"./ReactBrowserComponentMixin":30,"./ReactCompositeComponent":38,"./ReactDOM":41}],47:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactDOMInput
 */
"use strict";var n=t("./AutoFocusMixin"),o=t("./DOMPropertyOperations"),i=t("./LinkedValueUtils"),r=t("./ReactBrowserComponentMixin"),s=t("./ReactCompositeComponent"),a=t("./ReactDOM"),l=t("./ReactMount"),u=t("./invariant"),c=t("./merge"),p=a.input,d={},h=s.createClass({displayName:"ReactDOMInput",mixins:[n,i.Mixin,r],getInitialState:function(){var t=this.props.defaultValue;return{checked:this.props.defaultChecked||!1,value:null!=t?t:null}},shouldComponentUpdate:function(){return!this._isChanging},render:function(){var t=c(this.props);t.defaultChecked=null,t.defaultValue=null;var e=i.getValue(this);t.value=null!=e?e:this.state.value;var n=i.getChecked(this);return t.checked=null!=n?n:this.state.checked,t.onChange=this._handleChange,p(t,this.props.children)},componentDidMount:function(){var t=l.getID(this.getDOMNode());d[t]=this},componentWillUnmount:function(){var t=this.getDOMNode(),e=l.getID(t);delete d[e]},componentDidUpdate:function(){var t=this.getDOMNode();null!=this.props.checked&&o.setValueForProperty(t,"checked",this.props.checked||!1);var e=i.getValue(this);null!=e&&o.setValueForProperty(t,"value",""+e)},_handleChange:function(t){var e,n=i.getOnChange(this);n&&(this._isChanging=!0,e=n.call(this,t),this._isChanging=!1),this.setState({checked:t.target.checked,value:t.target.value});var o=this.props.name;if("radio"===this.props.type&&null!=o){for(var r=this.getDOMNode(),s=r;s.parentNode;)s=s.parentNode;for(var a=s.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),c=0,p=a.length;p>c;c++){var h=a[c];if(h!==r&&h.form===r.form){var f=l.getID(h);u(f,"ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");var m=d[f];u(m,"ReactDOMInput: Unknown radio button ID %s.",f),m.setState({checked:!1})}}}return e}});e.exports=h},{"./AutoFocusMixin":1,"./DOMPropertyOperations":12,"./LinkedValueUtils":25,"./ReactBrowserComponentMixin":30,"./ReactCompositeComponent":38,"./ReactDOM":41,"./ReactMount":67,"./invariant":134,"./merge":144}],48:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactDOMOption
 */
"use strict";var n=t("./ReactBrowserComponentMixin"),o=t("./ReactCompositeComponent"),i=t("./ReactDOM"),r=t("./warning"),s=i.option,a=o.createClass({displayName:"ReactDOMOption",mixins:[n],componentWillMount:function(){r(null==this.props.selected,"Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.")},render:function(){return s(this.props,this.props.children)}});e.exports=a},{"./ReactBrowserComponentMixin":30,"./ReactCompositeComponent":38,"./ReactDOM":41,"./warning":158}],49:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactDOMSelect
 */
"use strict";function n(t,e){if(null!=t[e])if(t.multiple){if(!Array.isArray(t[e]))return new Error("The `"+e+"` prop supplied to <select> must be an array if `multiple` is true.")}else if(Array.isArray(t[e]))return new Error("The `"+e+"` prop supplied to <select> must be a scalar value if `multiple` is false.")}function o(t,e){var n,o,i,r=t.props.multiple,s=null!=e?e:t.state.value,a=t.getDOMNode().options;if(r)for(n={},o=0,i=s.length;i>o;++o)n[""+s[o]]=!0;else n=""+s;for(o=0,i=a.length;i>o;o++){var l=r?n.hasOwnProperty(a[o].value):a[o].value===n;l!==a[o].selected&&(a[o].selected=l)}}var i=t("./AutoFocusMixin"),r=t("./LinkedValueUtils"),s=t("./ReactBrowserComponentMixin"),a=t("./ReactCompositeComponent"),l=t("./ReactDOM"),u=t("./merge"),c=l.select,p=a.createClass({displayName:"ReactDOMSelect",mixins:[i,r.Mixin,s],propTypes:{defaultValue:n,value:n},getInitialState:function(){return{value:this.props.defaultValue||(this.props.multiple?[]:"")}},componentWillReceiveProps:function(t){!this.props.multiple&&t.multiple?this.setState({value:[this.state.value]}):this.props.multiple&&!t.multiple&&this.setState({value:this.state.value[0]})},shouldComponentUpdate:function(){return!this._isChanging},render:function(){var t=u(this.props);return t.onChange=this._handleChange,t.value=null,c(t,this.props.children)},componentDidMount:function(){o(this,r.getValue(this))},componentDidUpdate:function(t){var e=r.getValue(this),n=!!t.multiple,i=!!this.props.multiple;(null!=e||n!==i)&&o(this,e)},_handleChange:function(t){var e,n=r.getOnChange(this);n&&(this._isChanging=!0,e=n.call(this,t),this._isChanging=!1);var o;if(this.props.multiple){o=[];for(var i=t.target.options,s=0,a=i.length;a>s;s++)i[s].selected&&o.push(i[s].value)}else o=t.target.value;return this.setState({value:o}),e}});e.exports=p},{"./AutoFocusMixin":1,"./LinkedValueUtils":25,"./ReactBrowserComponentMixin":30,"./ReactCompositeComponent":38,"./ReactDOM":41,"./merge":144}],50:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactDOMSelection
 */
"use strict";function n(t,e,n,o){return t===n&&e===o}function o(t){var e=document.selection,n=e.createRange(),o=n.text.length,i=n.duplicate();i.moveToElementText(t),i.setEndPoint("EndToStart",n);var r=i.text.length,s=r+o;return{start:r,end:s}}function i(t){var e=window.getSelection();if(0===e.rangeCount)return null;var o=e.anchorNode,i=e.anchorOffset,r=e.focusNode,s=e.focusOffset,a=e.getRangeAt(0),l=n(e.anchorNode,e.anchorOffset,e.focusNode,e.focusOffset),u=l?0:a.toString().length,c=a.cloneRange();c.selectNodeContents(t),c.setEnd(a.startContainer,a.startOffset);var p=n(c.startContainer,c.startOffset,c.endContainer,c.endOffset),d=p?0:c.toString().length,h=d+u,f=document.createRange();f.setStart(o,i),f.setEnd(r,s);var m=f.collapsed;return f.detach(),{start:m?h:d,end:m?d:h}}function r(t,e){var n,o,i=document.selection.createRange().duplicate();"undefined"==typeof e.end?(n=e.start,o=n):e.start>e.end?(n=e.end,o=e.start):(n=e.start,o=e.end),i.moveToElementText(t),i.moveStart("character",n),i.setEndPoint("EndToStart",i),i.moveEnd("character",o-n),i.select()}function s(t,e){var n=window.getSelection(),o=t[u()].length,i=Math.min(e.start,o),r="undefined"==typeof e.end?i:Math.min(e.end,o);if(!n.extend&&i>r){var s=r;r=i,i=s}var a=l(t,i),c=l(t,r);if(a&&c){var p=document.createRange();p.setStart(a.node,a.offset),n.removeAllRanges(),i>r?(n.addRange(p),n.extend(c.node,c.offset)):(p.setEnd(c.node,c.offset),n.addRange(p)),p.detach()}}var a=t("./ExecutionEnvironment"),l=t("./getNodeForCharacterOffset"),u=t("./getTextContentAccessor"),c=a.canUseDOM&&document.selection,p={getOffsets:c?o:i,setOffsets:c?r:s};e.exports=p},{"./ExecutionEnvironment":22,"./getNodeForCharacterOffset":127,"./getTextContentAccessor":129}],51:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactDOMTextarea
 */
"use strict";var n=t("./AutoFocusMixin"),o=t("./DOMPropertyOperations"),i=t("./LinkedValueUtils"),r=t("./ReactBrowserComponentMixin"),s=t("./ReactCompositeComponent"),a=t("./ReactDOM"),l=t("./invariant"),u=t("./merge"),c=t("./warning"),p=a.textarea,d=s.createClass({displayName:"ReactDOMTextarea",mixins:[n,i.Mixin,r],getInitialState:function(){var t=this.props.defaultValue,e=this.props.children;null!=e&&(c(!1,"Use the `defaultValue` or `value` props instead of setting children on <textarea>."),l(null==t,"If you supply `defaultValue` on a <textarea>, do not pass children."),Array.isArray(e)&&(l(e.length<=1,"<textarea> can only have at most one child."),e=e[0]),t=""+e),null==t&&(t="");var n=i.getValue(this);return{initialValue:""+(null!=n?n:t)}},shouldComponentUpdate:function(){return!this._isChanging},render:function(){var t=u(this.props);return l(null==t.dangerouslySetInnerHTML,"`dangerouslySetInnerHTML` does not make sense on <textarea>."),t.defaultValue=null,t.value=null,t.onChange=this._handleChange,p(t,this.state.initialValue)},componentDidUpdate:function(){var t=i.getValue(this);if(null!=t){var e=this.getDOMNode();o.setValueForProperty(e,"value",""+t)}},_handleChange:function(t){var e,n=i.getOnChange(this);return n&&(this._isChanging=!0,e=n.call(this,t),this._isChanging=!1),this.setState({value:t.target.value}),e}});e.exports=d},{"./AutoFocusMixin":1,"./DOMPropertyOperations":12,"./LinkedValueUtils":25,"./ReactBrowserComponentMixin":30,"./ReactCompositeComponent":38,"./ReactDOM":41,"./invariant":134,"./merge":144,"./warning":158}],52:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactDefaultBatchingStrategy
 */
"use strict";function n(){this.reinitializeTransaction()}var o=t("./ReactUpdates"),i=t("./Transaction"),r=t("./emptyFunction"),s=t("./mixInto"),a={initialize:r,close:function(){p.isBatchingUpdates=!1}},l={initialize:r,close:o.flushBatchedUpdates.bind(o)},u=[l,a];s(n,i.Mixin),s(n,{getTransactionWrappers:function(){return u}});var c=new n,p={isBatchingUpdates:!1,batchedUpdates:function(t,e,n){var o=p.isBatchingUpdates;p.isBatchingUpdates=!0,o?t(e,n):c.perform(t,null,e,n)}};e.exports=p},{"./ReactUpdates":87,"./Transaction":104,"./emptyFunction":116,"./mixInto":147}],53:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactDefaultInjection
 */
"use strict";function n(){_.EventEmitter.injectReactEventListener(E),_.EventPluginHub.injectEventPluginOrder(a),_.EventPluginHub.injectInstanceHandle(w),_.EventPluginHub.injectMount(D),_.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:M,EnterLeaveEventPlugin:l,ChangeEventPlugin:i,CompositionEventPlugin:s,MobileSafariClickEventPlugin:p,SelectEventPlugin:j,BeforeInputEventPlugin:o}),_.DOM.injectComponentClasses({button:g,form:v,img:y,input:b,option:C,select:P,textarea:x,html:T(m.html),head:T(m.head),body:T(m.body)}),_.CompositeComponent.injectMixin(d),_.DOMProperty.injectDOMPropertyConfig(c),_.DOMProperty.injectDOMPropertyConfig(O),_.EmptyComponent.injectEmptyComponent(m.noscript),_.Updates.injectReconcileTransaction(h.ReactReconcileTransaction),_.Updates.injectBatchingStrategy(f),_.RootIndex.injectCreateReactRootIndex(u.canUseDOM?r.createReactRootIndex:S.createReactRootIndex),_.Component.injectEnvironment(h);var e=u.canUseDOM&&window.location.href||"";if(/[?&]react_perf\b/.test(e)){var n=t("./ReactDefaultPerf");n.start()}}var o=t("./BeforeInputEventPlugin"),i=t("./ChangeEventPlugin"),r=t("./ClientReactRootIndex"),s=t("./CompositionEventPlugin"),a=t("./DefaultEventPluginOrder"),l=t("./EnterLeaveEventPlugin"),u=t("./ExecutionEnvironment"),c=t("./HTMLDOMPropertyConfig"),p=t("./MobileSafariClickEventPlugin"),d=t("./ReactBrowserComponentMixin"),h=t("./ReactComponentBrowserEnvironment"),f=t("./ReactDefaultBatchingStrategy"),m=t("./ReactDOM"),g=t("./ReactDOMButton"),v=t("./ReactDOMForm"),y=t("./ReactDOMImg"),b=t("./ReactDOMInput"),C=t("./ReactDOMOption"),P=t("./ReactDOMSelect"),x=t("./ReactDOMTextarea"),E=t("./ReactEventListener"),_=t("./ReactInjection"),w=t("./ReactInstanceHandles"),D=t("./ReactMount"),j=t("./SelectEventPlugin"),S=t("./ServerReactRootIndex"),M=t("./SimpleEventPlugin"),O=t("./SVGDOMPropertyConfig"),T=t("./createFullPageComponent");e.exports={inject:n}},{"./BeforeInputEventPlugin":2,"./ChangeEventPlugin":7,"./ClientReactRootIndex":8,"./CompositionEventPlugin":9,"./DefaultEventPluginOrder":14,"./EnterLeaveEventPlugin":15,"./ExecutionEnvironment":22,"./HTMLDOMPropertyConfig":23,"./MobileSafariClickEventPlugin":27,"./ReactBrowserComponentMixin":30,"./ReactComponentBrowserEnvironment":36,"./ReactDOM":41,"./ReactDOMButton":42,"./ReactDOMForm":44,"./ReactDOMImg":46,"./ReactDOMInput":47,"./ReactDOMOption":48,"./ReactDOMSelect":49,"./ReactDOMTextarea":51,"./ReactDefaultBatchingStrategy":52,"./ReactDefaultPerf":54,"./ReactEventListener":61,"./ReactInjection":62,"./ReactInstanceHandles":64,"./ReactMount":67,"./SVGDOMPropertyConfig":89,"./SelectEventPlugin":90,"./ServerReactRootIndex":91,"./SimpleEventPlugin":92,"./createFullPageComponent":112}],54:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactDefaultPerf
 * @typechecks static-only
 */
"use strict";function n(t){return Math.floor(100*t)/100}function o(t,e,n){t[e]=(t[e]||0)+n}var i=t("./DOMProperty"),r=t("./ReactDefaultPerfAnalysis"),s=t("./ReactMount"),a=t("./ReactPerf"),l=t("./performanceNow"),u={_allMeasurements:[],_mountStack:[0],_injected:!1,start:function(){u._injected||a.injection.injectMeasure(u.measure),u._allMeasurements.length=0,a.enableMeasure=!0},stop:function(){a.enableMeasure=!1},getLastMeasurements:function(){return u._allMeasurements},printExclusive:function(t){t=t||u._allMeasurements;var e=r.getExclusiveSummary(t);console.table(e.map(function(t){return{"Component class name":t.componentName,"Total inclusive time (ms)":n(t.inclusive),"Exclusive mount time (ms)":n(t.exclusive),"Exclusive render time (ms)":n(t.render),"Mount time per instance (ms)":n(t.exclusive/t.count),"Render time per instance (ms)":n(t.render/t.count),Instances:t.count}}))},printInclusive:function(t){t=t||u._allMeasurements;var e=r.getInclusiveSummary(t);console.table(e.map(function(t){return{"Owner > component":t.componentName,"Inclusive time (ms)":n(t.time),Instances:t.count}})),console.log("Total time:",r.getTotalTime(t).toFixed(2)+" ms")},printWasted:function(t){t=t||u._allMeasurements;var e=r.getInclusiveSummary(t,!0);console.table(e.map(function(t){return{"Owner > component":t.componentName,"Wasted time (ms)":t.time,Instances:t.count}})),console.log("Total time:",r.getTotalTime(t).toFixed(2)+" ms")},printDOM:function(t){t=t||u._allMeasurements;var e=r.getDOMSummary(t);console.table(e.map(function(t){var e={};return e[i.ID_ATTRIBUTE_NAME]=t.id,e.type=t.type,e.args=JSON.stringify(t.args),e})),console.log("Total time:",r.getTotalTime(t).toFixed(2)+" ms")},_recordWrite:function(t,e,n,o){var i=u._allMeasurements[u._allMeasurements.length-1].writes;i[t]=i[t]||[],i[t].push({type:e,time:n,args:o})},measure:function(t,e,n){return function(){var i,r,a,c=Array.prototype.slice.call(arguments,0);if("_renderNewRootComponent"===e||"flushBatchedUpdates"===e)return u._allMeasurements.push({exclusive:{},inclusive:{},render:{},counts:{},writes:{},displayNames:{},totalTime:0}),a=l(),r=n.apply(this,c),u._allMeasurements[u._allMeasurements.length-1].totalTime=l()-a,r;if("ReactDOMIDOperations"===t||"ReactComponentBrowserEnvironment"===t){if(a=l(),r=n.apply(this,c),i=l()-a,"mountImageIntoNode"===e){var p=s.getID(c[1]);u._recordWrite(p,e,i,c[0])}else"dangerouslyProcessChildrenUpdates"===e?c[0].forEach(function(t){var e={};null!==t.fromIndex&&(e.fromIndex=t.fromIndex),null!==t.toIndex&&(e.toIndex=t.toIndex),null!==t.textContent&&(e.textContent=t.textContent),null!==t.markupIndex&&(e.markup=c[1][t.markupIndex]),u._recordWrite(t.parentID,t.type,i,e)}):u._recordWrite(c[0],e,i,Array.prototype.slice.call(c,1));return r}if("ReactCompositeComponent"!==t||"mountComponent"!==e&&"updateComponent"!==e&&"_renderValidatedComponent"!==e)return n.apply(this,c);var d="mountComponent"===e?c[0]:this._rootNodeID,h="_renderValidatedComponent"===e,f="mountComponent"===e,m=u._mountStack,g=u._allMeasurements[u._allMeasurements.length-1];if(h?o(g.counts,d,1):f&&m.push(0),a=l(),r=n.apply(this,c),i=l()-a,h)o(g.render,d,i);else if(f){var v=m.pop();m[m.length-1]+=i,o(g.exclusive,d,i-v),o(g.inclusive,d,i)}else o(g.inclusive,d,i);return g.displayNames[d]={current:this.constructor.displayName,owner:this._owner?this._owner.constructor.displayName:"<root>"},r}}};e.exports=u},{"./DOMProperty":11,"./ReactDefaultPerfAnalysis":55,"./ReactMount":67,"./ReactPerf":71,"./performanceNow":151}],55:[function(t,e){function n(t){for(var e=0,n=0;n<t.length;n++){var o=t[n];e+=o.totalTime}return e}function o(t){for(var e=[],n=0;n<t.length;n++){var o,i=t[n];for(o in i.writes)i.writes[o].forEach(function(t){e.push({id:o,type:u[t.type]||t.type,args:t.args})})}return e}function i(t){for(var e,n={},o=0;o<t.length;o++){var i=t[o],r=a(i.exclusive,i.inclusive);for(var s in r)e=i.displayNames[s].current,n[e]=n[e]||{componentName:e,inclusive:0,exclusive:0,render:0,count:0},i.render[s]&&(n[e].render+=i.render[s]),i.exclusive[s]&&(n[e].exclusive+=i.exclusive[s]),i.inclusive[s]&&(n[e].inclusive+=i.inclusive[s]),i.counts[s]&&(n[e].count+=i.counts[s])}var u=[];for(e in n)n[e].exclusive>=l&&u.push(n[e]);return u.sort(function(t,e){return e.exclusive-t.exclusive}),u}function r(t,e){for(var n,o={},i=0;i<t.length;i++){var r,u=t[i],c=a(u.exclusive,u.inclusive);e&&(r=s(u));for(var p in c)if(!e||r[p]){var d=u.displayNames[p];n=d.owner+" > "+d.current,o[n]=o[n]||{componentName:n,time:0,count:0},u.inclusive[p]&&(o[n].time+=u.inclusive[p]),u.counts[p]&&(o[n].count+=u.counts[p])}}var h=[];for(n in o)o[n].time>=l&&h.push(o[n]);return h.sort(function(t,e){return e.time-t.time}),h}function s(t){var e={},n=Object.keys(t.writes),o=a(t.exclusive,t.inclusive);for(var i in o){for(var r=!1,s=0;s<n.length;s++)if(0===n[s].indexOf(i)){r=!0;break}!r&&t.counts[i]>0&&(e[i]=!0)}return e}/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactDefaultPerfAnalysis
 */
var a=t("./merge"),l=1.2,u={mountImageIntoNode:"set innerHTML",INSERT_MARKUP:"set innerHTML",MOVE_EXISTING:"move",REMOVE_NODE:"remove",TEXT_CONTENT:"set textContent",updatePropertyByID:"update attribute",deletePropertyByID:"delete attribute",updateStylesByID:"update styles",updateInnerHTMLByID:"set innerHTML",dangerouslyReplaceNodeWithMarkupByID:"replace"},c={getExclusiveSummary:i,getInclusiveSummary:r,getDOMSummary:o,getTotalTime:n};e.exports=c},{"./merge":144}],56:[function(t,e){/**
 * Copyright 2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactDescriptor
 */
"use strict";function n(t,e){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:function(){return this._store?this._store[e]:null},set:function(t){l(!1,"Don't set the "+e+" property of the component. Mutate the existing props object instead."),this._store[e]=t}})}function o(t){try{var e={props:!0};for(var o in e)n(t,o);u=!0}catch(i){}}function i(t,e){if("function"==typeof e)for(var n in e)if(e.hasOwnProperty(n)){var o=e[n];if("function"==typeof o){var i=o.bind(e);for(var r in o)o.hasOwnProperty(r)&&(i[r]=o[r]);t[n]=i}else t[n]=o}}var r=t("./ReactContext"),s=t("./ReactCurrentOwner"),a=t("./merge"),l=t("./warning"),u=!1,c=function(){};o(c.prototype),c.createFactory=function(t){var e=Object.create(c.prototype),n=function(t,n){null==t?t={}:"object"==typeof t&&(t=a(t));var o=arguments.length-1;if(1===o)t.children=n;else if(o>1){for(var i=Array(o),l=0;o>l;l++)i[l]=arguments[l+1];t.children=i}var c=Object.create(e);return c._owner=s.current,c._context=r.current,c._store={validated:!1,props:t},u?(Object.freeze(c),c):(c.props=t,c)};return n.prototype=e,n.type=t,e.type=t,i(n,t),e.constructor=n,n},c.cloneAndReplaceProps=function(t,e){var n=Object.create(t.constructor.prototype);return n._owner=t._owner,n._context=t._context,n._store={validated:t._store.validated,props:e},u?(Object.freeze(n),n):(n.props=e,n)},c.isValidFactory=function(t){return"function"==typeof t&&t.prototype instanceof c},c.isValidDescriptor=function(t){return t instanceof c},e.exports=c},{"./ReactContext":39,"./ReactCurrentOwner":40,"./merge":144,"./warning":158}],57:[function(t,e){/**
 * Copyright 2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactDescriptorValidator
 */
"use strict";function n(){var t=p.current;return t&&t.constructor.displayName||void 0}function o(t,e){t._store.validated||null!=t.props.key||(t._store.validated=!0,r("react_key_warning",'Each child in an array should have a unique "key" prop.',t,e))}function i(t,e,n){g.test(t)&&r("react_numeric_key_warning","Child objects should have non-numeric keys so ordering is preserved.",e,n)}function r(t,e,o,i){var r=n(),s=i.displayName,a=r||s,l=h[t];if(!l.hasOwnProperty(a)){l[a]=!0,e+=r?" Check the render method of "+r+".":" Check the renderComponent call using <"+s+">.";var u=null;o._owner&&o._owner!==p.current&&(u=o._owner.constructor.displayName,e+=" It was passed a child from "+u+"."),e+=" See http://fb.me/react-warning-keys for more information.",d(t,{component:a,componentOwner:u}),console.warn(e)}}function s(){var t=n()||"";f.hasOwnProperty(t)||(f[t]=!0,d("react_object_map_children"))}function a(t,e){if(Array.isArray(t))for(var n=0;n<t.length;n++){var r=t[n];u.isValidDescriptor(r)&&o(r,e)}else if(u.isValidDescriptor(t))t._store.validated=!0;else if(t&&"object"==typeof t){s();for(var a in t)i(a,t[a],e)}}function l(t,e,n,o){for(var i in e)if(e.hasOwnProperty(i)){var r;try{r=e[i](n,i,t,o)}catch(s){r=s}r instanceof Error&&!(r.message in m)&&(m[r.message]=!0,d("react_failed_descriptor_type_check",{message:r.message}))}}var u=t("./ReactDescriptor"),c=t("./ReactPropTypeLocations"),p=t("./ReactCurrentOwner"),d=t("./monitorCodeUse"),h={react_key_warning:{},react_numeric_key_warning:{}},f={},m={},g=/^\d+$/,v={createFactory:function(t,e,n){var o=function(){for(var o=t.apply(this,arguments),i=1;i<arguments.length;i++)a(arguments[i],o.type);var r=o.type.displayName;return e&&l(r,e,o.props,c.prop),n&&l(r,n,o._context,c.context),o};o.prototype=t.prototype,o.type=t.type;for(var i in t)t.hasOwnProperty(i)&&(o[i]=t[i]);return o}};e.exports=v},{"./ReactCurrentOwner":40,"./ReactDescriptor":56,"./ReactPropTypeLocations":74,"./monitorCodeUse":148}],58:[function(t,e){/**
 * Copyright 2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactEmptyComponent
 */
"use strict";function n(){return a(s,"Trying to return null from a render, but no null placeholder component was injected."),s()}function o(t){l[t]=!0}function i(t){delete l[t]}function r(t){return l[t]}var s,a=t("./invariant"),l={},u={injectEmptyComponent:function(t){s=t}},c={deregisterNullComponentID:i,getEmptyComponent:n,injection:u,isNullComponentID:r,registerNullComponentID:o};e.exports=c},{"./invariant":134}],59:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactErrorUtils
 * @typechecks
 */
"use strict";var n={guard:function(t){return t}};e.exports=n},{}],60:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactEventEmitterMixin
 */
"use strict";function n(t){o.enqueueEvents(t),o.processEventQueue()}var o=t("./EventPluginHub"),i={handleTopLevel:function(t,e,i,r){var s=o.extractEvents(t,e,i,r);n(s)}};e.exports=i},{"./EventPluginHub":18}],61:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactEventListener
 * @typechecks static-only
 */
"use strict";function n(t){var e=c.getID(t),n=u.getReactRootIDFromNodeID(e),o=c.findReactContainerForID(n),i=c.getFirstReactDOM(o);return i}function o(t,e){this.topLevelType=t,this.nativeEvent=e,this.ancestors=[]}function i(t){for(var e=c.getFirstReactDOM(d(t.nativeEvent))||window,o=e;o;)t.ancestors.push(o),o=n(o);for(var i=0,r=t.ancestors.length;r>i;i++){e=t.ancestors[i];var s=c.getID(e)||"";m._handleTopLevel(t.topLevelType,e,s,t.nativeEvent)}}function r(t){var e=h(window);t(e)}var s=t("./EventListener"),a=t("./ExecutionEnvironment"),l=t("./PooledClass"),u=t("./ReactInstanceHandles"),c=t("./ReactMount"),p=t("./ReactUpdates"),d=t("./getEventTarget"),h=t("./getUnboundedScrollPosition"),f=t("./mixInto");f(o,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),l.addPoolingTo(o,l.twoArgumentPooler);var m={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:a.canUseDOM?window:null,setHandleTopLevel:function(t){m._handleTopLevel=t},setEnabled:function(t){m._enabled=!!t},isEnabled:function(){return m._enabled},trapBubbledEvent:function(t,e,n){var o=n;if(o)return s.listen(o,e,m.dispatchEvent.bind(null,t))},trapCapturedEvent:function(t,e,n){var o=n;if(o)return s.capture(o,e,m.dispatchEvent.bind(null,t))},monitorScrollValue:function(t){var e=r.bind(null,t);s.listen(window,"scroll",e),s.listen(window,"resize",e)},dispatchEvent:function(t,e){if(m._enabled){var n=o.getPooled(t,e);try{p.batchedUpdates(i,n)}finally{o.release(n)}}}};e.exports=m},{"./EventListener":17,"./ExecutionEnvironment":22,"./PooledClass":28,"./ReactInstanceHandles":64,"./ReactMount":67,"./ReactUpdates":87,"./getEventTarget":125,"./getUnboundedScrollPosition":130,"./mixInto":147}],62:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactInjection
 */
"use strict";var n=t("./DOMProperty"),o=t("./EventPluginHub"),i=t("./ReactComponent"),r=t("./ReactCompositeComponent"),s=t("./ReactDOM"),a=t("./ReactEmptyComponent"),l=t("./ReactBrowserEventEmitter"),u=t("./ReactPerf"),c=t("./ReactRootIndex"),p=t("./ReactUpdates"),d={Component:i.injection,CompositeComponent:r.injection,DOMProperty:n.injection,EmptyComponent:a.injection,EventPluginHub:o.injection,DOM:s.injection,EventEmitter:l.injection,Perf:u.injection,RootIndex:c.injection,Updates:p.injection};e.exports=d},{"./DOMProperty":11,"./EventPluginHub":18,"./ReactBrowserEventEmitter":31,"./ReactComponent":35,"./ReactCompositeComponent":38,"./ReactDOM":41,"./ReactEmptyComponent":58,"./ReactPerf":71,"./ReactRootIndex":78,"./ReactUpdates":87}],63:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactInputSelection
 */
"use strict";function n(t){return i(document.documentElement,t)}var o=t("./ReactDOMSelection"),i=t("./containsNode"),r=t("./focusNode"),s=t("./getActiveElement"),a={hasSelectionCapabilities:function(t){return t&&("INPUT"===t.nodeName&&"text"===t.type||"TEXTAREA"===t.nodeName||"true"===t.contentEditable)},getSelectionInformation:function(){var t=s();return{focusedElem:t,selectionRange:a.hasSelectionCapabilities(t)?a.getSelection(t):null}},restoreSelection:function(t){var e=s(),o=t.focusedElem,i=t.selectionRange;e!==o&&n(o)&&(a.hasSelectionCapabilities(o)&&a.setSelection(o,i),r(o))},getSelection:function(t){var e;if("selectionStart"in t)e={start:t.selectionStart,end:t.selectionEnd};else if(document.selection&&"INPUT"===t.nodeName){var n=document.selection.createRange();n.parentElement()===t&&(e={start:-n.moveStart("character",-t.value.length),end:-n.moveEnd("character",-t.value.length)})}else e=o.getOffsets(t);return e||{start:0,end:0}},setSelection:function(t,e){var n=e.start,i=e.end;if("undefined"==typeof i&&(i=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(i,t.value.length);else if(document.selection&&"INPUT"===t.nodeName){var r=t.createTextRange();r.collapse(!0),r.moveStart("character",n),r.moveEnd("character",i-n),r.select()}else o.setOffsets(t,e)}};e.exports=a},{"./ReactDOMSelection":50,"./containsNode":109,"./focusNode":120,"./getActiveElement":122}],64:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactInstanceHandles
 * @typechecks static-only
 */
"use strict";function n(t){return d+t.toString(36)}function o(t,e){return t.charAt(e)===d||e===t.length}function i(t){return""===t||t.charAt(0)===d&&t.charAt(t.length-1)!==d}function r(t,e){return 0===e.indexOf(t)&&o(e,t.length)}function s(t){return t?t.substr(0,t.lastIndexOf(d)):""}function a(t,e){if(p(i(t)&&i(e),"getNextDescendantID(%s, %s): Received an invalid React DOM ID.",t,e),p(r(t,e),"getNextDescendantID(...): React has made an invalid assumption about the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.",t,e),t===e)return t;for(var n=t.length+h,s=n;s<e.length&&!o(e,s);s++);return e.substr(0,s)}function l(t,e){var n=Math.min(t.length,e.length);if(0===n)return"";for(var r=0,s=0;n>=s;s++)if(o(t,s)&&o(e,s))r=s;else if(t.charAt(s)!==e.charAt(s))break;var a=t.substr(0,r);return p(i(a),"getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s",t,e,a),a}function u(t,e,n,o,i,l){t=t||"",e=e||"",p(t!==e,"traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.",t);var u=r(e,t);p(u||r(t,e),"traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do not have a parent path.",t,e);for(var c=0,d=u?s:a,h=t;;h=d(h,e)){var m;if(i&&h===t||l&&h===e||(m=n(h,u,o)),m===!1||h===e)break;p(c++<f,"traverseParentPath(%s, %s, ...): Detected an infinite loop while traversing the React DOM ID tree. This may be due to malformed IDs: %s",t,e)}}var c=t("./ReactRootIndex"),p=t("./invariant"),d=".",h=d.length,f=100,m={createReactRootID:function(){return n(c.createReactRootIndex())},createReactID:function(t,e){return t+e},getReactRootIDFromNodeID:function(t){if(t&&t.charAt(0)===d&&t.length>1){var e=t.indexOf(d,1);return e>-1?t.substr(0,e):t}return null},traverseEnterLeave:function(t,e,n,o,i){var r=l(t,e);r!==t&&u(t,r,n,o,!1,!0),r!==e&&u(r,e,n,i,!0,!1)},traverseTwoPhase:function(t,e,n){t&&(u("",t,e,n,!0,!1),u(t,"",e,n,!1,!0))},traverseAncestors:function(t,e,n){u("",t,e,n,!0,!1)},_getFirstCommonAncestorID:l,_getNextDescendantID:a,isAncestorIDOf:r,SEPARATOR:d};e.exports=m},{"./ReactRootIndex":78,"./invariant":134}],65:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactLink
 * @typechecks static-only
 */
"use strict";function n(t,e){this.value=t,this.requestChange=e}function o(t){var e={value:"undefined"==typeof t?i.PropTypes.any.isRequired:t.isRequired,requestChange:i.PropTypes.func.isRequired};return i.PropTypes.shape(e)}var i=t("./React");n.PropTypes={link:o},e.exports=n},{"./React":29}],66:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactMarkupChecksum
 */
"use strict";var n=t("./adler32"),o={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(t){var e=n(t);return t.replace(">"," "+o.CHECKSUM_ATTR_NAME+'="'+e+'">')},canReuseMarkup:function(t,e){var i=e.getAttribute(o.CHECKSUM_ATTR_NAME);i=i&&parseInt(i,10);var r=n(t);return r===i}};e.exports=o},{"./adler32":107}],67:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactMount
 */
"use strict";function n(t){var e=y(t);return e&&I.getID(e)}function o(t){var e=i(t);if(e)if(w.hasOwnProperty(e)){var n=w[e];n!==t&&(C(!a(n,e),"ReactMount: Two valid but unequal nodes with the same `%s`: %s",_,e),w[e]=t)}else w[e]=t;return e}function i(t){return t&&t.getAttribute&&t.getAttribute(_)||""}function r(t,e){var n=i(t);n!==e&&delete w[n],t.setAttribute(_,e),w[e]=t}function s(t){return w.hasOwnProperty(t)&&a(w[t],t)||(w[t]=I.findReactNodeByID(t)),w[t]}function a(t,e){if(t){C(i(t)===e,"ReactMount: Unexpected modification of `%s`",_);var n=I.findReactContainerForID(e);if(n&&v(n,t))return!0}return!1}function l(t){delete w[t]}function u(t){var e=w[t];return e&&a(e,t)?void(R=e):!1}function c(t){R=null,m.traverseAncestors(t,u);var e=R;return R=null,e}var p=t("./DOMProperty"),d=t("./ReactBrowserEventEmitter"),h=t("./ReactCurrentOwner"),f=t("./ReactDescriptor"),m=t("./ReactInstanceHandles"),g=t("./ReactPerf"),v=t("./containsNode"),y=t("./getReactRootElementInContainer"),b=t("./instantiateReactComponent"),C=t("./invariant"),P=t("./shouldUpdateReactComponent"),x=t("./warning"),E=m.SEPARATOR,_=p.ID_ATTRIBUTE_NAME,w={},D=1,j=9,S={},M={},O={},T=[],R=null,I={_instancesByReactRootID:S,scrollMonitor:function(t,e){e()},_updateRootComponent:function(t,e,o,i){var r=e.props;return I.scrollMonitor(o,function(){t.replaceProps(r,i)}),O[n(o)]=y(o),t},_registerComponent:function(t,e){C(e&&(e.nodeType===D||e.nodeType===j),"_registerComponent(...): Target container is not a DOM element."),d.ensureScrollValueMonitoring();var n=I.registerContainer(e);return S[n]=t,n},_renderNewRootComponent:g.measure("ReactMount","_renderNewRootComponent",function(t,e,n){x(null==h.current,"_renderNewRootComponent(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.");var o=b(t),i=I._registerComponent(o,e);return o.mountComponentIntoNode(i,e,n),O[i]=y(e),o}),renderComponent:function(t,e,o){C(f.isValidDescriptor(t),"renderComponent(): Invalid component descriptor.%s",f.isValidFactory(t)?" Instead of passing a component class, make sure to instantiate it first by calling it with props.":"undefined"!=typeof t.props?" This may be caused by unintentionally loading two independent copies of React.":"");var i=S[n(e)];if(i){var r=i._descriptor;if(P(r,t))return I._updateRootComponent(i,t,e,o);I.unmountComponentAtNode(e)}var s=y(e),a=s&&I.isRenderedByReact(s),l=a&&!i,u=I._renderNewRootComponent(t,e,l);return o&&o.call(u),u},constructAndRenderComponent:function(t,e,n){return I.renderComponent(t(e),n)},constructAndRenderComponentByID:function(t,e,n){var o=document.getElementById(n);return C(o,'Tried to get element with id of "%s" but it is not present on the page.',n),I.constructAndRenderComponent(t,e,o)},registerContainer:function(t){var e=n(t);return e&&(e=m.getReactRootIDFromNodeID(e)),e||(e=m.createReactRootID()),M[e]=t,e},unmountComponentAtNode:function(t){x(null==h.current,"unmountComponentAtNode(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.");var e=n(t),o=S[e];return o?(I.unmountComponentFromNode(o,t),delete S[e],delete M[e],delete O[e],!0):!1},unmountComponentFromNode:function(t,e){for(t.unmountComponent(),e.nodeType===j&&(e=e.documentElement);e.lastChild;)e.removeChild(e.lastChild)},findReactContainerForID:function(t){var e=m.getReactRootIDFromNodeID(t),n=M[e],o=O[e];if(o&&o.parentNode!==n){C(i(o)===e,"ReactMount: Root element ID differed from reactRootID.");var r=n.firstChild;r&&e===i(r)?O[e]=r:console.warn("ReactMount: Root element has been removed from its original container. New container:",o.parentNode)}return n},findReactNodeByID:function(t){var e=I.findReactContainerForID(t);return I.findComponentRoot(e,t)},isRenderedByReact:function(t){if(1!==t.nodeType)return!1;var e=I.getID(t);return e?e.charAt(0)===E:!1},getFirstReactDOM:function(t){for(var e=t;e&&e.parentNode!==e;){if(I.isRenderedByReact(e))return e;e=e.parentNode}return null},findComponentRoot:function(t,e){var n=T,o=0,i=c(e)||t;for(n[0]=i.firstChild,n.length=1;o<n.length;){for(var r,s=n[o++];s;){var a=I.getID(s);a?e===a?r=s:m.isAncestorIDOf(a,e)&&(n.length=o=0,n.push(s.firstChild)):n.push(s.firstChild),s=s.nextSibling}if(r)return n.length=0,r}n.length=0,C(!1,"findComponentRoot(..., %s): Unable to find element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to forgetting a <tbody> when using tables, nesting <p> or <a> tags, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID `%s`.",e,I.getID(t))},getReactRootID:n,getID:o,setID:r,getNode:s,purgeID:l};e.exports=I},{"./DOMProperty":11,"./ReactBrowserEventEmitter":31,"./ReactCurrentOwner":40,"./ReactDescriptor":56,"./ReactInstanceHandles":64,"./ReactPerf":71,"./containsNode":109,"./getReactRootElementInContainer":128,"./instantiateReactComponent":133,"./invariant":134,"./shouldUpdateReactComponent":154,"./warning":158}],68:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactMultiChild
 * @typechecks static-only
 */
"use strict";function n(t,e,n){f.push({parentID:t,parentNode:null,type:u.INSERT_MARKUP,markupIndex:m.push(e)-1,textContent:null,fromIndex:null,toIndex:n})}function o(t,e,n){f.push({parentID:t,parentNode:null,type:u.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:e,toIndex:n})}function i(t,e){f.push({parentID:t,parentNode:null,type:u.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:e,toIndex:null})}function r(t,e){f.push({parentID:t,parentNode:null,type:u.TEXT_CONTENT,markupIndex:null,textContent:e,fromIndex:null,toIndex:null})}function s(){f.length&&(l.BackendIDOperations.dangerouslyProcessChildrenUpdates(f,m),a())}function a(){f.length=0,m.length=0}var l=t("./ReactComponent"),u=t("./ReactMultiChildUpdateTypes"),c=t("./flattenChildren"),p=t("./instantiateReactComponent"),d=t("./shouldUpdateReactComponent"),h=0,f=[],m=[],g={Mixin:{mountChildren:function(t,e){var n=c(t),o=[],i=0;this._renderedChildren=n;for(var r in n){var s=n[r];if(n.hasOwnProperty(r)){var a=p(s);n[r]=a;var l=this._rootNodeID+r,u=a.mountComponent(l,e,this._mountDepth+1);a._mountIndex=i,o.push(u),i++}}return o},updateTextContent:function(t){h++;var e=!0;try{var n=this._renderedChildren;for(var o in n)n.hasOwnProperty(o)&&this._unmountChildByName(n[o],o);this.setTextContent(t),e=!1}finally{h--,h||(e?a():s())}},updateChildren:function(t,e){h++;var n=!0;try{this._updateChildren(t,e),n=!1}finally{h--,h||(n?a():s())}},_updateChildren:function(t,e){var n=c(t),o=this._renderedChildren;if(n||o){var i,r=0,s=0;for(i in n)if(n.hasOwnProperty(i)){var a=o&&o[i],l=a&&a._descriptor,u=n[i];if(d(l,u))this.moveChild(a,s,r),r=Math.max(a._mountIndex,r),a.receiveComponent(u,e),a._mountIndex=s;else{a&&(r=Math.max(a._mountIndex,r),this._unmountChildByName(a,i));var h=p(u);this._mountChildByNameAtIndex(h,i,s,e)}s++}for(i in o)!o.hasOwnProperty(i)||n&&n[i]||this._unmountChildByName(o[i],i)}},unmountChildren:function(){var t=this._renderedChildren;for(var e in t){var n=t[e];n.unmountComponent&&n.unmountComponent()}this._renderedChildren=null},moveChild:function(t,e,n){t._mountIndex<n&&o(this._rootNodeID,t._mountIndex,e)},createChild:function(t,e){n(this._rootNodeID,e,t._mountIndex)},removeChild:function(t){i(this._rootNodeID,t._mountIndex)},setTextContent:function(t){r(this._rootNodeID,t)},_mountChildByNameAtIndex:function(t,e,n,o){var i=this._rootNodeID+e,r=t.mountComponent(i,o,this._mountDepth+1);t._mountIndex=n,this.createChild(t,r),this._renderedChildren=this._renderedChildren||{},this._renderedChildren[e]=t},_unmountChildByName:function(t,e){this.removeChild(t),t._mountIndex=null,t.unmountComponent(),delete this._renderedChildren[e]}}};e.exports=g},{"./ReactComponent":35,"./ReactMultiChildUpdateTypes":69,"./flattenChildren":119,"./instantiateReactComponent":133,"./shouldUpdateReactComponent":154}],69:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactMultiChildUpdateTypes
 */
"use strict";var n=t("./keyMirror"),o=n({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,TEXT_CONTENT:null});e.exports=o},{"./keyMirror":140}],70:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactOwner
 */
"use strict";var n=t("./emptyObject"),o=t("./invariant"),i={isValidOwner:function(t){return!(!t||"function"!=typeof t.attachRef||"function"!=typeof t.detachRef)},addComponentAsRefTo:function(t,e,n){o(i.isValidOwner(n),"addComponentAsRefTo(...): Only a ReactOwner can have refs. This usually means that you're trying to add a ref to a component that doesn't have an owner (that is, was not created inside of another component's `render` method). Try rendering this component inside of a new top-level component which will hold the ref."),n.attachRef(e,t)},removeComponentAsRefFrom:function(t,e,n){o(i.isValidOwner(n),"removeComponentAsRefFrom(...): Only a ReactOwner can have refs. This usually means that you're trying to remove a ref to a component that doesn't have an owner (that is, was not created inside of another component's `render` method). Try rendering this component inside of a new top-level component which will hold the ref."),n.refs[e]===t&&n.detachRef(e)},Mixin:{construct:function(){this.refs=n},attachRef:function(t,e){o(e.isOwnedBy(this),"attachRef(%s, ...): Only a component's owner can store a ref to it.",t);var i=this.refs===n?this.refs={}:this.refs;i[t]=e},detachRef:function(t){delete this.refs[t]}}};e.exports=i},{"./emptyObject":117,"./invariant":134}],71:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactPerf
 * @typechecks static-only
 */
"use strict";function n(t,e,n){return n}var o={enableMeasure:!1,storedMeasure:n,measure:function(t,e,n){var i=null;return function(){return o.enableMeasure?(i||(i=o.storedMeasure(t,e,n)),i.apply(this,arguments)):n.apply(this,arguments)}},injection:{injectMeasure:function(t){o.storedMeasure=t}}};e.exports=o},{}],72:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactPropTransferer
 */
"use strict";function n(t){return function(e,n,o){e[n]=e.hasOwnProperty(n)?t(e[n],o):o}}function o(t,e){for(var n in e)if(e.hasOwnProperty(n)){var o=u[n];o&&u.hasOwnProperty(n)?o(t,n,e[n]):t.hasOwnProperty(n)||(t[n]=e[n])}return t}var i=t("./emptyFunction"),r=t("./invariant"),s=t("./joinClasses"),a=t("./merge"),l=n(function(t,e){return a(e,t)}),u={children:i,className:n(s),key:i,ref:i,style:l},c={TransferStrategies:u,mergeProps:function(t,e){return o(a(t),e)},Mixin:{transferPropsTo:function(t){return r(t._owner===this,"%s: You can't call transferPropsTo() on a component that you don't own, %s. This usually means you are calling transferPropsTo() on a component passed in as props or children.",this.constructor.displayName,t.type.displayName),o(t.props,this.props),t}}};e.exports=c},{"./emptyFunction":116,"./invariant":134,"./joinClasses":139,"./merge":144}],73:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactPropTypeLocationNames
 */
"use strict";var n={};n={prop:"prop",context:"context",childContext:"child context"},e.exports=n},{}],74:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactPropTypeLocations
 */
"use strict";var n=t("./keyMirror"),o=n({prop:null,context:null,childContext:null});e.exports=o},{"./keyMirror":140}],75:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactPropTypes
 */
"use strict";function n(t){function e(e,n,o,i,r){if(i=i||b,null!=n[o])return t(n,o,i,r);var s=v[r];return e?new Error("Required "+s+" `"+o+"` was not specified in "+("`"+i+"`.")):void 0}var n=e.bind(null,!1);return n.isRequired=e.bind(null,!0),n}function o(t){function e(e,n,o,i){var r=e[n],s=f(r);if(s!==t){var a=v[i],l=m(r);return new Error("Invalid "+a+" `"+n+"` of type `"+l+"` "+("supplied to `"+o+"`, expected `"+t+"`."))}}return n(e)}function i(){return n(y.thatReturns())}function r(t){function e(e,n,o,i){var r=e[n];if(!Array.isArray(r)){var s=v[i],a=f(r);return new Error("Invalid "+s+" `"+n+"` of type "+("`"+a+"` supplied to `"+o+"`, expected an array."))}for(var l=0;l<r.length;l++){var u=t(r,l,o,i);if(u instanceof Error)return u}}return n(e)}function s(){function t(t,e,n,o){if(!g.isValidDescriptor(t[e])){var i=v[o];return new Error("Invalid "+i+" `"+e+"` supplied to "+("`"+n+"`, expected a React component."))}}return n(t)}function a(t){function e(e,n,o,i){if(!(e[n]instanceof t)){var r=v[i],s=t.name||b;return new Error("Invalid "+r+" `"+n+"` supplied to "+("`"+o+"`, expected instance of `"+s+"`."))}}return n(e)}function l(t){function e(e,n,o,i){for(var r=e[n],s=0;s<t.length;s++)if(r===t[s])return;var a=v[i],l=JSON.stringify(t);return new Error("Invalid "+a+" `"+n+"` of value `"+r+"` "+("supplied to `"+o+"`, expected one of "+l+"."))}return n(e)}function u(t){function e(e,n,o,i){var r=e[n],s=f(r);if("object"!==s){var a=v[i];return new Error("Invalid "+a+" `"+n+"` of type "+("`"+s+"` supplied to `"+o+"`, expected an object."))}for(var l in r)if(r.hasOwnProperty(l)){var u=t(r,l,o,i);if(u instanceof Error)return u}}return n(e)}function c(t){function e(e,n,o,i){for(var r=0;r<t.length;r++){var s=t[r];if(null==s(e,n,o,i))return}var a=v[i];return new Error("Invalid "+a+" `"+n+"` supplied to "+("`"+o+"`."))}return n(e)}function p(){function t(t,e,n,o){if(!h(t[e])){var i=v[o];return new Error("Invalid "+i+" `"+e+"` supplied to "+("`"+n+"`, expected a renderable prop."))}}return n(t)}function d(t){function e(e,n,o,i){var r=e[n],s=f(r);if("object"!==s){var a=v[i];return new Error("Invalid "+a+" `"+n+"` of type `"+s+"` "+("supplied to `"+o+"`, expected `object`."))}for(var l in t){var u=t[l];if(u){var c=u(r,l,o,i);if(c)return c}}}return n(e,"expected `object`")}function h(t){switch(typeof t){case"number":case"string":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(h);if(g.isValidDescriptor(t))return!0;for(var e in t)if(!h(t[e]))return!1;return!0;default:return!1}}function f(t){var e=typeof t;return Array.isArray(t)?"array":t instanceof RegExp?"object":e}function m(t){var e=f(t);if("object"===e){if(t instanceof Date)return"date";if(t instanceof RegExp)return"regexp"}return e}var g=t("./ReactDescriptor"),v=t("./ReactPropTypeLocationNames"),y=t("./emptyFunction"),b="<<anonymous>>",C={array:o("array"),bool:o("boolean"),func:o("function"),number:o("number"),object:o("object"),string:o("string"),any:i(),arrayOf:r,component:s(),instanceOf:a,objectOf:u,oneOf:l,oneOfType:c,renderable:p(),shape:d};e.exports=C},{"./ReactDescriptor":56,"./ReactPropTypeLocationNames":73,"./emptyFunction":116}],76:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactPutListenerQueue
 */
"use strict";function n(){this.listenersToPut=[]}var o=t("./PooledClass"),i=t("./ReactBrowserEventEmitter"),r=t("./mixInto");r(n,{enqueuePutListener:function(t,e,n){this.listenersToPut.push({rootNodeID:t,propKey:e,propValue:n})},putListeners:function(){for(var t=0;t<this.listenersToPut.length;t++){var e=this.listenersToPut[t];i.putListener(e.rootNodeID,e.propKey,e.propValue)}},reset:function(){this.listenersToPut.length=0},destructor:function(){this.reset()}}),o.addPoolingTo(n),e.exports=n},{"./PooledClass":28,"./ReactBrowserEventEmitter":31,"./mixInto":147}],77:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactReconcileTransaction
 * @typechecks static-only
 */
"use strict";function n(){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=o.getPooled(null),this.putListenerQueue=a.getPooled()}var o=t("./CallbackQueue"),i=t("./PooledClass"),r=t("./ReactBrowserEventEmitter"),s=t("./ReactInputSelection"),a=t("./ReactPutListenerQueue"),l=t("./Transaction"),u=t("./mixInto"),c={initialize:s.getSelectionInformation,close:s.restoreSelection},p={initialize:function(){var t=r.isEnabled();return r.setEnabled(!1),t},close:function(t){r.setEnabled(t)}},d={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},h={initialize:function(){this.putListenerQueue.reset()},close:function(){this.putListenerQueue.putListeners()}},f=[h,c,p,d],m={getTransactionWrappers:function(){return f},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){o.release(this.reactMountReady),this.reactMountReady=null,a.release(this.putListenerQueue),this.putListenerQueue=null}};u(n,l.Mixin),u(n,m),i.addPoolingTo(n),e.exports=n},{"./CallbackQueue":6,"./PooledClass":28,"./ReactBrowserEventEmitter":31,"./ReactInputSelection":63,"./ReactPutListenerQueue":76,"./Transaction":104,"./mixInto":147}],78:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactRootIndex
 * @typechecks
 */
"use strict";var n={injectCreateReactRootIndex:function(t){o.createReactRootIndex=t}},o={createReactRootIndex:null,injection:n};e.exports=o},{}],79:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @typechecks static-only
 * @providesModule ReactServerRendering
 */
"use strict";function n(t){u(i.isValidDescriptor(t),"renderComponentToString(): You must pass a valid ReactComponent."),u(!(2===arguments.length&&"function"==typeof arguments[1]),"renderComponentToString(): This function became synchronous and now returns the generated markup. Please remove the second parameter.");var e;try{var n=r.createReactRootID();return e=a.getPooled(!1),e.perform(function(){var o=l(t),i=o.mountComponent(n,e,0);return s.addChecksumToMarkup(i)},null)}finally{a.release(e)}}function o(t){u(i.isValidDescriptor(t),"renderComponentToStaticMarkup(): You must pass a valid ReactComponent.");var e;try{var n=r.createReactRootID();return e=a.getPooled(!0),e.perform(function(){var o=l(t);return o.mountComponent(n,e,0)},null)}finally{a.release(e)}}var i=t("./ReactDescriptor"),r=t("./ReactInstanceHandles"),s=t("./ReactMarkupChecksum"),a=t("./ReactServerRenderingTransaction"),l=t("./instantiateReactComponent"),u=t("./invariant");e.exports={renderComponentToString:n,renderComponentToStaticMarkup:o}},{"./ReactDescriptor":56,"./ReactInstanceHandles":64,"./ReactMarkupChecksum":66,"./ReactServerRenderingTransaction":80,"./instantiateReactComponent":133,"./invariant":134}],80:[function(t,e){/**
 * Copyright 2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactServerRenderingTransaction
 * @typechecks
 */
"use strict";function n(t){this.reinitializeTransaction(),this.renderToStaticMarkup=t,this.reactMountReady=i.getPooled(null),this.putListenerQueue=r.getPooled()}var o=t("./PooledClass"),i=t("./CallbackQueue"),r=t("./ReactPutListenerQueue"),s=t("./Transaction"),a=t("./emptyFunction"),l=t("./mixInto"),u={initialize:function(){this.reactMountReady.reset()},close:a},c={initialize:function(){this.putListenerQueue.reset()},close:a},p=[c,u],d={getTransactionWrappers:function(){return p},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){i.release(this.reactMountReady),this.reactMountReady=null,r.release(this.putListenerQueue),this.putListenerQueue=null}};l(n,s.Mixin),l(n,d),o.addPoolingTo(n),e.exports=n},{"./CallbackQueue":6,"./PooledClass":28,"./ReactPutListenerQueue":76,"./Transaction":104,"./emptyFunction":116,"./mixInto":147}],81:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactStateSetters
 */
"use strict";function n(t,e){var n={};return function(o){n[e]=o,t.setState(n)}}var o={createStateSetter:function(t,e){return function(n,o,i,r,s,a){var l=e.call(t,n,o,i,r,s,a);l&&t.setState(l)}},createStateKeySetter:function(t,e){var o=t.__keySetters||(t.__keySetters={});return o[e]||(o[e]=n(t,e))}};o.Mixin={createStateSetter:function(t){return o.createStateSetter(this,t)},createStateKeySetter:function(t){return o.createStateKeySetter(this,t)}},e.exports=o},{}],82:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactTestUtils
 */
"use strict";function n(){}function o(t){return function(e,o){var i;C.isDOMComponent(e)?i=e.getDOMNode():e.tagName&&(i=e);var r=new n;r.target=i;var s=new g(d.eventNameDispatchConfigs[t],h.getID(i),r);v(s,o),l.accumulateTwoPhaseDispatches(s),m.batchedUpdates(function(){a.enqueueEvents(s),a.processEventQueue()})}}function i(){C.Simulate={};var t;for(t in d.eventNameDispatchConfigs)C.Simulate[t]=o(t)}function r(t){return function(e,o){var i=new n(t);v(i,o),C.isDOMComponent(e)?C.simulateNativeEventOnDOMComponent(t,e,i):e.tagName&&C.simulateNativeEventOnNode(t,e,i)}}var s=t("./EventConstants"),a=t("./EventPluginHub"),l=t("./EventPropagators"),u=t("./React"),c=t("./ReactDescriptor"),p=t("./ReactDOM"),d=t("./ReactBrowserEventEmitter"),h=t("./ReactMount"),f=t("./ReactTextComponent"),m=t("./ReactUpdates"),g=t("./SyntheticEvent"),v=t("./mergeInto"),y=t("./copyProperties"),b=s.topLevelTypes,C={renderIntoDocument:function(t){var e=document.createElement("div");return u.renderComponent(t,e)},isDescriptor:function(t){return c.isValidDescriptor(t)},isDescriptorOfType:function(t,e){return c.isValidDescriptor(t)&&t.type===e.type},isDOMComponent:function(t){return!!(t&&t.mountComponent&&t.tagName)},isDOMComponentDescriptor:function(t){return!!(t&&c.isValidDescriptor(t)&&t.tagName)},isCompositeComponent:function(t){return"function"==typeof t.render&&"function"==typeof t.setState},isCompositeComponentWithType:function(t,e){return!(!C.isCompositeComponent(t)||t.constructor!==e.type)},isCompositeComponentDescriptor:function(t){if(!c.isValidDescriptor(t))return!1;var e=t.type.prototype;return"function"==typeof e.render&&"function"==typeof e.setState},isCompositeComponentDescriptorWithType:function(t,e){return!(!C.isCompositeComponentDescriptor(t)||t.constructor!==e)},isTextComponent:function(t){return t instanceof f.type},findAllInRenderedTree:function(t,e){if(!t)return[];var n=e(t)?[t]:[];if(C.isDOMComponent(t)){var o,i=t._renderedChildren;for(o in i)i.hasOwnProperty(o)&&(n=n.concat(C.findAllInRenderedTree(i[o],e)))}else C.isCompositeComponent(t)&&(n=n.concat(C.findAllInRenderedTree(t._renderedComponent,e)));return n},scryRenderedDOMComponentsWithClass:function(t,e){return C.findAllInRenderedTree(t,function(t){var n=t.props.className;return C.isDOMComponent(t)&&n&&-1!==(" "+n+" ").indexOf(" "+e+" ")})},findRenderedDOMComponentWithClass:function(t,e){var n=C.scryRenderedDOMComponentsWithClass(t,e);if(1!==n.length)throw new Error("Did not find exactly one match for class:"+e);return n[0]},scryRenderedDOMComponentsWithTag:function(t,e){return C.findAllInRenderedTree(t,function(t){return C.isDOMComponent(t)&&t.tagName===e.toUpperCase()})},findRenderedDOMComponentWithTag:function(t,e){var n=C.scryRenderedDOMComponentsWithTag(t,e);if(1!==n.length)throw new Error("Did not find exactly one match for tag:"+e);return n[0]},scryRenderedComponentsWithType:function(t,e){return C.findAllInRenderedTree(t,function(t){return C.isCompositeComponentWithType(t,e)})},findRenderedComponentWithType:function(t,e){var n=C.scryRenderedComponentsWithType(t,e);if(1!==n.length)throw new Error("Did not find exactly one match for componentType:"+e);return n[0]},mockComponent:function(t){var e=u.createClass({render:function(){var e=e||t.mockTagName||"div";return p[e](null,this.props.children)}});return y(t,e),t.mockImplementation(e),this},simulateNativeEventOnNode:function(t,e,n){n.target=e,d.ReactEventListener.dispatchEvent(t,n)},simulateNativeEventOnDOMComponent:function(t,e,n){C.simulateNativeEventOnNode(t,e.getDOMNode(),n)},nativeTouchData:function(t,e){return{touches:[{pageX:t,pageY:e}]}},Simulate:null,SimulateNative:{}},P=a.injection.injectEventPluginOrder;a.injection.injectEventPluginOrder=function(){P.apply(this,arguments),i()};var x=a.injection.injectEventPluginsByName;a.injection.injectEventPluginsByName=function(){x.apply(this,arguments),i()},i();var E;for(E in b){var _=0===E.indexOf("top")?E.charAt(3).toLowerCase()+E.substr(4):E;C.SimulateNative[_]=r(E)}e.exports=C},{"./EventConstants":16,"./EventPluginHub":18,"./EventPropagators":21,"./React":29,"./ReactBrowserEventEmitter":31,"./ReactDOM":41,"./ReactDescriptor":56,"./ReactMount":67,"./ReactTextComponent":83,"./ReactUpdates":87,"./SyntheticEvent":96,"./copyProperties":110,"./mergeInto":146}],83:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactTextComponent
 * @typechecks static-only
 */
"use strict";var n=t("./DOMPropertyOperations"),o=t("./ReactBrowserComponentMixin"),i=t("./ReactComponent"),r=t("./ReactDescriptor"),s=t("./escapeTextForBrowser"),a=t("./mixInto"),l=function(t){this.construct(t)};a(l,i.Mixin),a(l,o),a(l,{mountComponent:function(t,e,o){i.Mixin.mountComponent.call(this,t,e,o);var r=s(this.props);return e.renderToStaticMarkup?r:"<span "+n.createMarkupForID(t)+">"+r+"</span>"},receiveComponent:function(t){var e=t.props;e!==this.props&&(this.props=e,i.BackendIDOperations.updateTextContentByID(this._rootNodeID,e))}}),e.exports=r.createFactory(l)},{"./DOMPropertyOperations":12,"./ReactBrowserComponentMixin":30,"./ReactComponent":35,"./ReactDescriptor":56,"./escapeTextForBrowser":118,"./mixInto":147}],84:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @typechecks static-only
 * @providesModule ReactTransitionChildMapping
 */
"use strict";var n=t("./ReactChildren"),o={getChildMapping:function(t){return n.map(t,function(t){return t})},mergeChildMappings:function(t,e){function n(n){return e.hasOwnProperty(n)?e[n]:t[n]}t=t||{},e=e||{};var o={},i=[];for(var r in t)e.hasOwnProperty(r)?i.length&&(o[r]=i,i=[]):i.push(r);var s,a={};for(var l in e){if(o.hasOwnProperty(l))for(s=0;s<o[l].length;s++){var u=o[l][s];a[o[l][s]]=n(u)}a[l]=n(l)}for(s=0;s<i.length;s++)a[i[s]]=n(i[s]);return a}};e.exports=o},{"./ReactChildren":34}],85:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactTransitionEvents
 */
"use strict";function n(){var t=document.createElement("div"),e=t.style;"AnimationEvent"in window||delete s.animationend.animation,"TransitionEvent"in window||delete s.transitionend.transition;for(var n in s){var o=s[n];for(var i in o)if(i in e){a.push(o[i]);break}}}function o(t,e,n){t.addEventListener(e,n,!1)}function i(t,e,n){t.removeEventListener(e,n,!1)}var r=t("./ExecutionEnvironment"),s={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},a=[];r.canUseDOM&&n();var l={addEndEventListener:function(t,e){return 0===a.length?void window.setTimeout(e,0):void a.forEach(function(n){o(t,n,e)})},removeEndEventListener:function(t,e){0!==a.length&&a.forEach(function(n){i(t,n,e)})}};e.exports=l},{"./ExecutionEnvironment":22}],86:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactTransitionGroup
 */
"use strict";var n=t("./React"),o=t("./ReactTransitionChildMapping"),i=t("./cloneWithProps"),r=t("./emptyFunction"),s=t("./merge"),a=n.createClass({displayName:"ReactTransitionGroup",propTypes:{component:n.PropTypes.func,childFactory:n.PropTypes.func},getDefaultProps:function(){return{component:n.DOM.span,childFactory:r.thatReturnsArgument}},getInitialState:function(){return{children:o.getChildMapping(this.props.children)}},componentWillReceiveProps:function(t){var e=o.getChildMapping(t.children),n=this.state.children;this.setState({children:o.mergeChildMappings(n,e)});var i;for(i in e){var r=n&&n.hasOwnProperty(i);!e[i]||r||this.currentlyTransitioningKeys[i]||this.keysToEnter.push(i)}for(i in n){var s=e&&e.hasOwnProperty(i);!n[i]||s||this.currentlyTransitioningKeys[i]||this.keysToLeave.push(i)}},componentWillMount:function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},componentDidUpdate:function(){var t=this.keysToEnter;this.keysToEnter=[],t.forEach(this.performEnter);var e=this.keysToLeave;this.keysToLeave=[],e.forEach(this.performLeave)},performEnter:function(t){this.currentlyTransitioningKeys[t]=!0;var e=this.refs[t];e.componentWillEnter?e.componentWillEnter(this._handleDoneEntering.bind(this,t)):this._handleDoneEntering(t)},_handleDoneEntering:function(t){var e=this.refs[t];e.componentDidEnter&&e.componentDidEnter(),delete this.currentlyTransitioningKeys[t];var n=o.getChildMapping(this.props.children);n&&n.hasOwnProperty(t)||this.performLeave(t)},performLeave:function(t){this.currentlyTransitioningKeys[t]=!0;var e=this.refs[t];e.componentWillLeave?e.componentWillLeave(this._handleDoneLeaving.bind(this,t)):this._handleDoneLeaving(t)},_handleDoneLeaving:function(t){var e=this.refs[t];e.componentDidLeave&&e.componentDidLeave(),delete this.currentlyTransitioningKeys[t];var n=o.getChildMapping(this.props.children);if(n&&n.hasOwnProperty(t))this.performEnter(t);else{var i=s(this.state.children);delete i[t],this.setState({children:i})}},render:function(){var t={};for(var e in this.state.children){var n=this.state.children[e];n&&(t[e]=i(this.props.childFactory(n),{ref:e}))}return this.transferPropsTo(this.props.component(null,t))}});e.exports=a},{"./React":29,"./ReactTransitionChildMapping":84,"./cloneWithProps":108,"./emptyFunction":116,"./merge":144}],87:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactUpdates
 */
"use strict";function n(){h(E.ReactReconcileTransaction&&v,"ReactUpdates: must inject a reconcile transaction class and batching strategy")}function o(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=l.getPooled(null),this.reconcileTransaction=E.ReactReconcileTransaction.getPooled()}function i(t,e,o){n(),v.batchedUpdates(t,e,o)}function r(t,e){return t._mountDepth-e._mountDepth}function s(t){var e=t.dirtyComponentsLength;h(e===g.length,"Expected flush transaction's stored dirty-components length (%s) to match dirty-components array length (%s).",e,g.length),g.sort(r);for(var n=0;e>n;n++){var o=g[n];if(o.isMounted()){var i=o._pendingCallbacks;if(o._pendingCallbacks=null,o.performUpdateIfNecessary(t.reconcileTransaction),i)for(var s=0;s<i.length;s++)t.callbackQueue.enqueue(i[s],o)}}}function a(t,e){return h(!e||"function"==typeof e,"enqueueUpdate(...): You called `setProps`, `replaceProps`, `setState`, `replaceState`, or `forceUpdate` with a callback that isn't callable."),n(),m(null==c.current,"enqueueUpdate(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate."),v.isBatchingUpdates?(g.push(t),void(e&&(t._pendingCallbacks?t._pendingCallbacks.push(e):t._pendingCallbacks=[e]))):void v.batchedUpdates(a,t,e)}var l=t("./CallbackQueue"),u=t("./PooledClass"),c=t("./ReactCurrentOwner"),p=t("./ReactPerf"),d=t("./Transaction"),h=t("./invariant"),f=t("./mixInto"),m=t("./warning"),g=[],v=null,y={initialize:function(){this.dirtyComponentsLength=g.length},close:function(){this.dirtyComponentsLength!==g.length?(g.splice(0,this.dirtyComponentsLength),P()):g.length=0}},b={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},C=[y,b];f(o,d.Mixin),f(o,{getTransactionWrappers:function(){return C},destructor:function(){this.dirtyComponentsLength=null,l.release(this.callbackQueue),this.callbackQueue=null,E.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(t,e,n){return d.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,t,e,n)}}),u.addPoolingTo(o);var P=p.measure("ReactUpdates","flushBatchedUpdates",function(){for(;g.length;){var t=o.getPooled();t.perform(s,null,t),o.release(t)}}),x={injectReconcileTransaction:function(t){h(t,"ReactUpdates: must provide a reconcile transaction class"),E.ReactReconcileTransaction=t},injectBatchingStrategy:function(t){h(t,"ReactUpdates: must provide a batching strategy"),h("function"==typeof t.batchedUpdates,"ReactUpdates: must provide a batchedUpdates() function"),h("boolean"==typeof t.isBatchingUpdates,"ReactUpdates: must provide an isBatchingUpdates boolean attribute"),v=t}},E={ReactReconcileTransaction:null,batchedUpdates:i,enqueueUpdate:a,flushBatchedUpdates:P,injection:x};e.exports=E},{"./CallbackQueue":6,"./PooledClass":28,"./ReactCurrentOwner":40,"./ReactPerf":71,"./Transaction":104,"./invariant":134,"./mixInto":147,"./warning":158}],88:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactWithAddons
 */
"use strict";var n=t("./LinkedStateMixin"),o=t("./React"),i=t("./ReactComponentWithPureRenderMixin"),r=t("./ReactCSSTransitionGroup"),s=t("./ReactTransitionGroup"),a=t("./cx"),l=t("./cloneWithProps"),u=t("./update");o.addons={CSSTransitionGroup:r,LinkedStateMixin:n,PureRenderMixin:i,TransitionGroup:s,classSet:a,cloneWithProps:l,update:u},o.addons.Perf=t("./ReactDefaultPerf"),o.addons.TestUtils=t("./ReactTestUtils"),e.exports=o},{"./LinkedStateMixin":24,"./React":29,"./ReactCSSTransitionGroup":32,"./ReactComponentWithPureRenderMixin":37,"./ReactDefaultPerf":54,"./ReactTestUtils":82,"./ReactTransitionGroup":86,"./cloneWithProps":108,"./cx":114,"./update":157}],89:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule SVGDOMPropertyConfig
 */
"use strict";var n=t("./DOMProperty"),o=n.injection.MUST_USE_ATTRIBUTE,i={Properties:{cx:o,cy:o,d:o,dx:o,dy:o,fill:o,fillOpacity:o,fontFamily:o,fontSize:o,fx:o,fy:o,gradientTransform:o,gradientUnits:o,markerEnd:o,markerMid:o,markerStart:o,offset:o,opacity:o,patternContentUnits:o,patternUnits:o,points:o,preserveAspectRatio:o,r:o,rx:o,ry:o,spreadMethod:o,stopColor:o,stopOpacity:o,stroke:o,strokeDasharray:o,strokeLinecap:o,strokeOpacity:o,strokeWidth:o,textAnchor:o,transform:o,version:o,viewBox:o,x1:o,x2:o,x:o,y1:o,y2:o,y:o},DOMAttributeNames:{fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",patternContentUnits:"patternContentUnits",patternUnits:"patternUnits",preserveAspectRatio:"preserveAspectRatio",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox"}};e.exports=i},{"./DOMProperty":11}],90:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule SelectEventPlugin
 */
"use strict";function n(t){if("selectionStart"in t&&s.hasSelectionCapabilities(t))return{start:t.selectionStart,end:t.selectionEnd};if(document.selection){var e=document.selection.createRange();return{parentElement:e.parentElement(),text:e.text,top:e.boundingTop,left:e.boundingLeft}}var n=window.getSelection();return{anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}}function o(t){if(!v&&null!=f&&f==l()){var e=n(f);if(!g||!p(g,e)){g=e;var o=a.getPooled(h.select,m,t);return o.type="select",o.target=f,r.accumulateTwoPhaseDispatches(o),o}}}var i=t("./EventConstants"),r=t("./EventPropagators"),s=t("./ReactInputSelection"),a=t("./SyntheticEvent"),l=t("./getActiveElement"),u=t("./isTextInputElement"),c=t("./keyOf"),p=t("./shallowEqual"),d=i.topLevelTypes,h={select:{phasedRegistrationNames:{bubbled:c({onSelect:null}),captured:c({onSelectCapture:null})},dependencies:[d.topBlur,d.topContextMenu,d.topFocus,d.topKeyDown,d.topMouseDown,d.topMouseUp,d.topSelectionChange]}},f=null,m=null,g=null,v=!1,y={eventTypes:h,extractEvents:function(t,e,n,i){switch(t){case d.topFocus:(u(e)||"true"===e.contentEditable)&&(f=e,m=n,g=null);break;case d.topBlur:f=null,m=null,g=null;break;case d.topMouseDown:v=!0;break;case d.topContextMenu:case d.topMouseUp:return v=!1,o(i);case d.topSelectionChange:case d.topKeyDown:case d.topKeyUp:return o(i)}}};e.exports=y},{"./EventConstants":16,"./EventPropagators":21,"./ReactInputSelection":63,"./SyntheticEvent":96,"./getActiveElement":122,"./isTextInputElement":137,"./keyOf":141,"./shallowEqual":153}],91:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ServerReactRootIndex
 * @typechecks
 */
"use strict";var n=Math.pow(2,53),o={createReactRootIndex:function(){return Math.ceil(Math.random()*n)}};e.exports=o},{}],92:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule SimpleEventPlugin
 */
"use strict";var n=t("./EventConstants"),o=t("./EventPluginUtils"),i=t("./EventPropagators"),r=t("./SyntheticClipboardEvent"),s=t("./SyntheticEvent"),a=t("./SyntheticFocusEvent"),l=t("./SyntheticKeyboardEvent"),u=t("./SyntheticMouseEvent"),c=t("./SyntheticDragEvent"),p=t("./SyntheticTouchEvent"),d=t("./SyntheticUIEvent"),h=t("./SyntheticWheelEvent"),f=t("./invariant"),m=t("./keyOf"),g=n.topLevelTypes,v={blur:{phasedRegistrationNames:{bubbled:m({onBlur:!0}),captured:m({onBlurCapture:!0})}},click:{phasedRegistrationNames:{bubbled:m({onClick:!0}),captured:m({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:m({onContextMenu:!0}),captured:m({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:m({onCopy:!0}),captured:m({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:m({onCut:!0}),captured:m({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:m({onDoubleClick:!0}),captured:m({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:m({onDrag:!0}),captured:m({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:m({onDragEnd:!0}),captured:m({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:m({onDragEnter:!0}),captured:m({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:m({onDragExit:!0}),captured:m({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:m({onDragLeave:!0}),captured:m({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:m({onDragOver:!0}),captured:m({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:m({onDragStart:!0}),captured:m({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:m({onDrop:!0}),captured:m({onDropCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:m({onFocus:!0}),captured:m({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:m({onInput:!0}),captured:m({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:m({onKeyDown:!0}),captured:m({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:m({onKeyPress:!0}),captured:m({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:m({onKeyUp:!0}),captured:m({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:m({onLoad:!0}),captured:m({onLoadCapture:!0})}},error:{phasedRegistrationNames:{bubbled:m({onError:!0}),captured:m({onErrorCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:m({onMouseDown:!0}),captured:m({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:m({onMouseMove:!0}),captured:m({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:m({onMouseOut:!0}),captured:m({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:m({onMouseOver:!0}),captured:m({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:m({onMouseUp:!0}),captured:m({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:m({onPaste:!0}),captured:m({onPasteCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:m({onReset:!0}),captured:m({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:m({onScroll:!0}),captured:m({onScrollCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:m({onSubmit:!0}),captured:m({onSubmitCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:m({onTouchCancel:!0}),captured:m({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:m({onTouchEnd:!0}),captured:m({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:m({onTouchMove:!0}),captured:m({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:m({onTouchStart:!0}),captured:m({onTouchStartCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:m({onWheel:!0}),captured:m({onWheelCapture:!0})}}},y={topBlur:v.blur,topClick:v.click,topContextMenu:v.contextMenu,topCopy:v.copy,topCut:v.cut,topDoubleClick:v.doubleClick,topDrag:v.drag,topDragEnd:v.dragEnd,topDragEnter:v.dragEnter,topDragExit:v.dragExit,topDragLeave:v.dragLeave,topDragOver:v.dragOver,topDragStart:v.dragStart,topDrop:v.drop,topError:v.error,topFocus:v.focus,topInput:v.input,topKeyDown:v.keyDown,topKeyPress:v.keyPress,topKeyUp:v.keyUp,topLoad:v.load,topMouseDown:v.mouseDown,topMouseMove:v.mouseMove,topMouseOut:v.mouseOut,topMouseOver:v.mouseOver,topMouseUp:v.mouseUp,topPaste:v.paste,topReset:v.reset,topScroll:v.scroll,topSubmit:v.submit,topTouchCancel:v.touchCancel,topTouchEnd:v.touchEnd,topTouchMove:v.touchMove,topTouchStart:v.touchStart,topWheel:v.wheel};for(var b in y)y[b].dependencies=[b];var C={eventTypes:v,executeDispatch:function(t,e,n){var i=o.executeDispatch(t,e,n);i===!1&&(t.stopPropagation(),t.preventDefault())},extractEvents:function(t,e,n,o){var m=y[t];if(!m)return null;var v;switch(t){case g.topInput:case g.topLoad:case g.topError:case g.topReset:case g.topSubmit:v=s;break;case g.topKeyPress:if(0===o.charCode)return null;case g.topKeyDown:case g.topKeyUp:v=l;break;case g.topBlur:case g.topFocus:v=a;break;case g.topClick:if(2===o.button)return null;case g.topContextMenu:case g.topDoubleClick:case g.topMouseDown:case g.topMouseMove:case g.topMouseOut:case g.topMouseOver:case g.topMouseUp:v=u;break;case g.topDrag:case g.topDragEnd:case g.topDragEnter:case g.topDragExit:case g.topDragLeave:case g.topDragOver:case g.topDragStart:case g.topDrop:v=c;break;case g.topTouchCancel:case g.topTouchEnd:case g.topTouchMove:case g.topTouchStart:v=p;break;case g.topScroll:v=d;break;case g.topWheel:v=h;break;case g.topCopy:case g.topCut:case g.topPaste:v=r}f(v,"SimpleEventPlugin: Unhandled event type, `%s`.",t);var b=v.getPooled(m,n,o);return i.accumulateTwoPhaseDispatches(b),b}};e.exports=C},{"./EventConstants":16,"./EventPluginUtils":20,"./EventPropagators":21,"./SyntheticClipboardEvent":93,"./SyntheticDragEvent":95,"./SyntheticEvent":96,"./SyntheticFocusEvent":97,"./SyntheticKeyboardEvent":99,"./SyntheticMouseEvent":100,"./SyntheticTouchEvent":101,"./SyntheticUIEvent":102,"./SyntheticWheelEvent":103,"./invariant":134,"./keyOf":141}],93:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule SyntheticClipboardEvent
 * @typechecks static-only
 */
"use strict";function n(t,e,n){o.call(this,t,e,n)}var o=t("./SyntheticEvent"),i={clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}};o.augmentClass(n,i),e.exports=n},{"./SyntheticEvent":96}],94:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule SyntheticCompositionEvent
 * @typechecks static-only
 */
"use strict";function n(t,e,n){o.call(this,t,e,n)}var o=t("./SyntheticEvent"),i={data:null};o.augmentClass(n,i),e.exports=n},{"./SyntheticEvent":96}],95:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule SyntheticDragEvent
 * @typechecks static-only
 */
"use strict";function n(t,e,n){o.call(this,t,e,n)}var o=t("./SyntheticMouseEvent"),i={dataTransfer:null};o.augmentClass(n,i),e.exports=n},{"./SyntheticMouseEvent":100}],96:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule SyntheticEvent
 * @typechecks static-only
 */
"use strict";function n(t,e,n){this.dispatchConfig=t,this.dispatchMarker=e,this.nativeEvent=n;var o=this.constructor.Interface;for(var r in o)if(o.hasOwnProperty(r)){var s=o[r];this[r]=s?s(n):n[r]}var a=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;this.isDefaultPrevented=a?i.thatReturnsTrue:i.thatReturnsFalse,this.isPropagationStopped=i.thatReturnsFalse}var o=t("./PooledClass"),i=t("./emptyFunction"),r=t("./getEventTarget"),s=t("./merge"),a=t("./mergeInto"),l={type:null,target:r,currentTarget:i.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};a(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t.preventDefault?t.preventDefault():t.returnValue=!1,this.isDefaultPrevented=i.thatReturnsTrue},stopPropagation:function(){var t=this.nativeEvent;t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,this.isPropagationStopped=i.thatReturnsTrue},persist:function(){this.isPersistent=i.thatReturnsTrue},isPersistent:i.thatReturnsFalse,destructor:function(){var t=this.constructor.Interface;for(var e in t)this[e]=null;this.dispatchConfig=null,this.dispatchMarker=null,this.nativeEvent=null}}),n.Interface=l,n.augmentClass=function(t,e){var n=this,i=Object.create(n.prototype);a(i,t.prototype),t.prototype=i,t.prototype.constructor=t,t.Interface=s(n.Interface,e),t.augmentClass=n.augmentClass,o.addPoolingTo(t,o.threeArgumentPooler)},o.addPoolingTo(n,o.threeArgumentPooler),e.exports=n},{"./PooledClass":28,"./emptyFunction":116,"./getEventTarget":125,"./merge":144,"./mergeInto":146}],97:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule SyntheticFocusEvent
 * @typechecks static-only
 */
"use strict";function n(t,e,n){o.call(this,t,e,n)}var o=t("./SyntheticUIEvent"),i={relatedTarget:null};o.augmentClass(n,i),e.exports=n},{"./SyntheticUIEvent":102}],98:[function(t,e){/**
 * Copyright 2013 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule SyntheticInputEvent
 * @typechecks static-only
 */
"use strict";function n(t,e,n){o.call(this,t,e,n)}var o=t("./SyntheticEvent"),i={data:null};o.augmentClass(n,i),e.exports=n},{"./SyntheticEvent":96}],99:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule SyntheticKeyboardEvent
 * @typechecks static-only
 */
"use strict";function n(t,e,n){o.call(this,t,e,n)}var o=t("./SyntheticUIEvent"),i=t("./getEventKey"),r=t("./getEventModifierState"),s={key:i,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:r,charCode:function(t){return"keypress"===t.type?"charCode"in t?t.charCode:t.keyCode:0},keyCode:function(t){return"keydown"===t.type||"keyup"===t.type?t.keyCode:0},which:function(t){return t.keyCode||t.charCode}};o.augmentClass(n,s),e.exports=n},{"./SyntheticUIEvent":102,"./getEventKey":123,"./getEventModifierState":124}],100:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule SyntheticMouseEvent
 * @typechecks static-only
 */
"use strict";function n(t,e,n){o.call(this,t,e,n)}var o=t("./SyntheticUIEvent"),i=t("./ViewportMetrics"),r=t("./getEventModifierState"),s={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:r,button:function(t){var e=t.button;return"which"in t?e:2===e?2:4===e?1:0},buttons:null,relatedTarget:function(t){return t.relatedTarget||(t.fromElement===t.srcElement?t.toElement:t.fromElement)},pageX:function(t){return"pageX"in t?t.pageX:t.clientX+i.currentScrollLeft},pageY:function(t){return"pageY"in t?t.pageY:t.clientY+i.currentScrollTop}};o.augmentClass(n,s),e.exports=n},{"./SyntheticUIEvent":102,"./ViewportMetrics":105,"./getEventModifierState":124}],101:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule SyntheticTouchEvent
 * @typechecks static-only
 */
"use strict";function n(t,e,n){o.call(this,t,e,n)}var o=t("./SyntheticUIEvent"),i=t("./getEventModifierState"),r={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:i};o.augmentClass(n,r),e.exports=n},{"./SyntheticUIEvent":102,"./getEventModifierState":124}],102:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule SyntheticUIEvent
 * @typechecks static-only
 */
"use strict";function n(t,e,n){o.call(this,t,e,n)}var o=t("./SyntheticEvent"),i=t("./getEventTarget"),r={view:function(t){if(t.view)return t.view;var e=i(t);if(null!=e&&e.window===e)return e;var n=e.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(t){return t.detail||0}};o.augmentClass(n,r),e.exports=n},{"./SyntheticEvent":96,"./getEventTarget":125}],103:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule SyntheticWheelEvent
 * @typechecks static-only
 */
"use strict";function n(t,e,n){o.call(this,t,e,n)}var o=t("./SyntheticMouseEvent"),i={deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:null,deltaMode:null};o.augmentClass(n,i),e.exports=n},{"./SyntheticMouseEvent":100}],104:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule Transaction
 */
"use strict";var n=t("./invariant"),o={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(t,e,o,i,r,s,a,l){n(!this.isInTransaction(),"Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction.");var u,c;try{this._isInTransaction=!0,u=!0,this.initializeAll(0),c=t.call(e,o,i,r,s,a,l),u=!1}finally{try{if(u)try{this.closeAll(0)}catch(p){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return c},initializeAll:function(t){for(var e=this.transactionWrappers,n=t;n<e.length;n++){var o=e[n];try{this.wrapperInitData[n]=i.OBSERVED_ERROR,this.wrapperInitData[n]=o.initialize?o.initialize.call(this):null}finally{if(this.wrapperInitData[n]===i.OBSERVED_ERROR)try{this.initializeAll(n+1)}catch(r){}}}},closeAll:function(t){n(this.isInTransaction(),"Transaction.closeAll(): Cannot close transaction when none are open.");for(var e=this.transactionWrappers,o=t;o<e.length;o++){var r,s=e[o],a=this.wrapperInitData[o];try{r=!0,a!==i.OBSERVED_ERROR&&s.close&&s.close.call(this,a),r=!1}finally{if(r)try{this.closeAll(o+1)}catch(l){}}}this.wrapperInitData.length=0}},i={Mixin:o,OBSERVED_ERROR:{}};e.exports=i},{"./invariant":134}],105:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ViewportMetrics
 */
"use strict";var n=t("./getUnboundedScrollPosition"),o={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(){var t=n(window);o.currentScrollLeft=t.x,o.currentScrollTop=t.y}};e.exports=o},{"./getUnboundedScrollPosition":130}],106:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule accumulate
 */
"use strict";function n(t,e){if(o(null!=e,"accumulate(...): Accumulated items must be not be null or undefined."),null==t)return e;var n=Array.isArray(t),i=Array.isArray(e);return n?t.concat(e):i?[t].concat(e):[t,e]}var o=t("./invariant");e.exports=n},{"./invariant":134}],107:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule adler32
 */
"use strict";function n(t){for(var e=1,n=0,i=0;i<t.length;i++)e=(e+t.charCodeAt(i))%o,n=(n+e)%o;return e|n<<16}var o=65521;e.exports=n},{}],108:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @typechecks
 * @providesModule cloneWithProps
 */
"use strict";function n(t,e){r(!t.props.ref,"You are calling cloneWithProps() on a child with a ref. This is dangerous because you're creating a new child which will not be added as a ref to its parent.");var n=o.mergeProps(e,t.props);return!n.hasOwnProperty(s)&&t.props.hasOwnProperty(s)&&(n.children=t.props.children),t.constructor(n)}var o=t("./ReactPropTransferer"),i=t("./keyOf"),r=t("./warning"),s=i({children:null});e.exports=n},{"./ReactPropTransferer":72,"./keyOf":141,"./warning":158}],109:[function(t,e){function n(t,e){return t&&e?t===e?!0:o(t)?!1:o(e)?n(t,e.parentNode):t.contains?t.contains(e):t.compareDocumentPosition?!!(16&t.compareDocumentPosition(e)):!1:!1}/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule containsNode
 * @typechecks
 */
var o=t("./isTextNode");e.exports=n},{"./isTextNode":138}],110:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule copyProperties
 */
function n(t,e,n,o,i,r,s){if(t=t||{},s)throw new Error("Too many arguments passed to copyProperties");for(var a,l=[e,n,o,i,r],u=0;l[u];){a=l[u++];for(var c in a)t[c]=a[c];a.hasOwnProperty&&a.hasOwnProperty("toString")&&"undefined"!=typeof a.toString&&t.toString!==a.toString&&(t.toString=a.toString)}return t}e.exports=n},{}],111:[function(t,e){function n(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"length"in t&&!("setInterval"in t)&&"number"!=typeof t.nodeType&&(Array.isArray(t)||"callee"in t||"item"in t)}function o(t){return n(t)?Array.isArray(t)?t.slice():i(t):[t]}/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule createArrayFrom
 * @typechecks
 */
var i=t("./toArray");e.exports=o},{"./toArray":155}],112:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule createFullPageComponent
 * @typechecks
 */
"use strict";function n(t){var e=o.createClass({displayName:"ReactFullPageComponent"+(t.type.displayName||""),componentWillUnmount:function(){i(!1,"%s tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.",this.constructor.displayName)},render:function(){return this.transferPropsTo(t(null,this.props.children))}});return e}var o=t("./ReactCompositeComponent"),i=t("./invariant");e.exports=n},{"./ReactCompositeComponent":38,"./invariant":134}],113:[function(t,e){function n(t){var e=t.match(u);return e&&e[1].toLowerCase()}function o(t,e){var o=l;a(!!l,"createNodesFromMarkup dummy not initialized");var i=n(t),u=i&&s(i);if(u){o.innerHTML=u[1]+t+u[2];for(var c=u[0];c--;)o=o.lastChild}else o.innerHTML=t;var p=o.getElementsByTagName("script");p.length&&(a(e,"createNodesFromMarkup(...): Unexpected <script> element rendered."),r(p).forEach(e));for(var d=r(o.childNodes);o.lastChild;)o.removeChild(o.lastChild);return d}/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule createNodesFromMarkup
 * @typechecks
 */
var i=t("./ExecutionEnvironment"),r=t("./createArrayFrom"),s=t("./getMarkupWrap"),a=t("./invariant"),l=i.canUseDOM?document.createElement("div"):null,u=/^\s*<(\w+)/;e.exports=o},{"./ExecutionEnvironment":22,"./createArrayFrom":111,"./getMarkupWrap":126,"./invariant":134}],114:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule cx
 */
function n(t){return"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}).join(" "):Array.prototype.join.call(arguments," ")}e.exports=n},{}],115:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule dangerousStyleValue
 * @typechecks static-only
 */
"use strict";function n(t,e){var n=null==e||"boolean"==typeof e||""===e;if(n)return"";var o=isNaN(e);return o||0===e||i.hasOwnProperty(t)&&i[t]?""+e:("string"==typeof e&&(e=e.trim()),e+"px")}var o=t("./CSSProperty"),i=o.isUnitlessNumber;e.exports=n},{"./CSSProperty":4}],116:[function(t,e){function n(t){return function(){return t}}function o(){}/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule emptyFunction
 */
var i=t("./copyProperties");i(o,{thatReturns:n,thatReturnsFalse:n(!1),thatReturnsTrue:n(!0),thatReturnsNull:n(null),thatReturnsThis:function(){return this},thatReturnsArgument:function(t){return t}}),e.exports=o},{"./copyProperties":110}],117:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule emptyObject
 */
"use strict";var n={};Object.freeze(n),e.exports=n},{}],118:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule escapeTextForBrowser
 * @typechecks static-only
 */
"use strict";function n(t){return i[t]}function o(t){return(""+t).replace(r,n)}var i={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},r=/[&><"']/g;e.exports=o},{}],119:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule flattenChildren
 */
"use strict";function n(t,e,n){var o=t,i=!o.hasOwnProperty(n);r(i,"flattenChildren(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.",n),i&&null!=e&&(o[n]=e)}function o(t){if(null==t)return t;var e={};return i(t,n,e),e}var i=t("./traverseAllChildren"),r=t("./warning");e.exports=o},{"./traverseAllChildren":156,"./warning":158}],120:[function(t,e){/**
 * Copyright 2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule focusNode
 */
"use strict";function n(t){t.disabled||t.focus()}e.exports=n},{}],121:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule forEachAccumulated
 */
"use strict";var n=function(t,e,n){Array.isArray(t)?t.forEach(e,n):t&&e.call(n,t)};e.exports=n},{}],122:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule getActiveElement
 * @typechecks
 */
function n(){try{return document.activeElement||document.body}catch(t){return document.body}}e.exports=n},{}],123:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule getEventKey
 * @typechecks static-only
 */
"use strict";function n(t){if(t.key){var e=i[t.key]||t.key;if("Unidentified"!==e)return e}if("keypress"===t.type){var n="charCode"in t?t.charCode:t.keyCode;return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===t.type||"keyup"===t.type?r[t.keyCode]||"Unidentified":void o(!1,"Unexpected keyboard event type: %s",t.type)}var o=t("./invariant"),i={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};e.exports=n},{"./invariant":134}],124:[function(t,e){/**
 * Copyright 2013 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule getEventModifierState
 * @typechecks static-only
 */
"use strict";function n(t){var e=this,n=e.nativeEvent;if(n.getModifierState)return n.getModifierState(t);var o=i[t];return o?!!n[o]:!1}function o(){return n}var i={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};e.exports=o},{}],125:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule getEventTarget
 * @typechecks static-only
 */
"use strict";function n(t){var e=t.target||t.srcElement||window;return 3===e.nodeType?e.parentNode:e}e.exports=n},{}],126:[function(t,e){function n(t){return i(!!r,"Markup wrapping node not initialized"),p.hasOwnProperty(t)||(t="*"),s.hasOwnProperty(t)||(r.innerHTML="*"===t?"<link />":"<"+t+"></"+t+">",s[t]=!r.firstChild),s[t]?p[t]:null}/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule getMarkupWrap
 */
var o=t("./ExecutionEnvironment"),i=t("./invariant"),r=o.canUseDOM?document.createElement("div"):null,s={circle:!0,defs:!0,ellipse:!0,g:!0,line:!0,linearGradient:!0,path:!0,polygon:!0,polyline:!0,radialGradient:!0,rect:!0,stop:!0,text:!0},a=[1,'<select multiple="true">',"</select>"],l=[1,"<table>","</table>"],u=[3,"<table><tbody><tr>","</tr></tbody></table>"],c=[1,"<svg>","</svg>"],p={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:a,option:a,caption:l,colgroup:l,tbody:l,tfoot:l,thead:l,td:u,th:u,circle:c,defs:c,ellipse:c,g:c,line:c,linearGradient:c,path:c,polygon:c,polyline:c,radialGradient:c,rect:c,stop:c,text:c};e.exports=n},{"./ExecutionEnvironment":22,"./invariant":134}],127:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule getNodeForCharacterOffset
 */
"use strict";function n(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function o(t){for(;t;){if(t.nextSibling)return t.nextSibling;t=t.parentNode}}function i(t,e){for(var i=n(t),r=0,s=0;i;){if(3==i.nodeType){if(s=r+i.textContent.length,e>=r&&s>=e)return{node:i,offset:e-r};r=s}i=n(o(i))}}e.exports=i},{}],128:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule getReactRootElementInContainer
 */
"use strict";function n(t){return t?t.nodeType===o?t.documentElement:t.firstChild:null}var o=9;e.exports=n},{}],129:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule getTextContentAccessor
 */
"use strict";function n(){return!i&&o.canUseDOM&&(i="textContent"in document.documentElement?"textContent":"innerText"),i}var o=t("./ExecutionEnvironment"),i=null;e.exports=n},{"./ExecutionEnvironment":22}],130:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule getUnboundedScrollPosition
 * @typechecks
 */
"use strict";function n(t){return t===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:t.scrollLeft,y:t.scrollTop}}e.exports=n},{}],131:[function(t,e){function n(t){return t.replace(o,"-$1").toLowerCase()}/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule hyphenate
 * @typechecks
 */
var o=/([A-Z])/g;e.exports=n},{}],132:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule hyphenateStyleName
 * @typechecks
 */
"use strict";function n(t){return o(t).replace(i,"-ms-")}var o=t("./hyphenate"),i=/^ms-/;e.exports=n},{"./hyphenate":131}],133:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule instantiateReactComponent
 * @typechecks static-only
 */
"use strict";function n(t){return t&&"function"==typeof t.type&&"function"==typeof t.type.prototype.mountComponent&&"function"==typeof t.type.prototype.receiveComponent}function o(t){return i(n(t),"Only React Components are valid for mounting."),new t.type(t)}var i=t("./invariant");e.exports=o},{"./invariant":134}],134:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule invariant
 */
"use strict";var n=function(t,e,n,o,i,r,s,a){if(void 0===e)throw new Error("invariant requires an error message argument");if(!t){var l;if(void 0===e)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,o,i,r,s,a],c=0;l=new Error("Invariant Violation: "+e.replace(/%s/g,function(){return u[c++]}))}throw l.framesToPop=1,l}};e.exports=n},{}],135:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule isEventSupported
 */
"use strict";function n(t,e){if(!i.canUseDOM||e&&!("addEventListener"in document))return!1;var n="on"+t,r=n in document;if(!r){var s=document.createElement("div");s.setAttribute(n,"return;"),r="function"==typeof s[n]}return!r&&o&&"wheel"===t&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var o,i=t("./ExecutionEnvironment");i.canUseDOM&&(o=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),e.exports=n},{"./ExecutionEnvironment":22}],136:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule isNode
 * @typechecks
 */
function n(t){return!(!t||!("function"==typeof Node?t instanceof Node:"object"==typeof t&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName))}e.exports=n},{}],137:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule isTextInputElement
 */
"use strict";function n(t){return t&&("INPUT"===t.nodeName&&o[t.type]||"TEXTAREA"===t.nodeName)}var o={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};e.exports=n},{}],138:[function(t,e){function n(t){return o(t)&&3==t.nodeType}/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule isTextNode
 * @typechecks
 */
var o=t("./isNode");e.exports=n},{"./isNode":136}],139:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule joinClasses
 * @typechecks static-only
 */
"use strict";function n(t){t||(t="");var e,n=arguments.length;if(n>1)for(var o=1;n>o;o++)e=arguments[o],e&&(t+=" "+e);return t}e.exports=n},{}],140:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule keyMirror
 * @typechecks static-only
 */
"use strict";var n=t("./invariant"),o=function(t){var e,o={};n(t instanceof Object&&!Array.isArray(t),"keyMirror(...): Argument must be an object.");for(e in t)t.hasOwnProperty(e)&&(o[e]=e);return o};e.exports=o},{"./invariant":134}],141:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule keyOf
 */
var n=function(t){var e;for(e in t)if(t.hasOwnProperty(e))return e;return null};e.exports=n},{}],142:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule mapObject
 */
"use strict";function n(t,e,n){if(!t)return null;var o=0,i={};for(var r in t)t.hasOwnProperty(r)&&(i[r]=e.call(n,t[r],r,o++));return i}e.exports=n},{}],143:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule memoizeStringOnly
 * @typechecks static-only
 */
"use strict";function n(t){var e={};return function(n){return e.hasOwnProperty(n)?e[n]:e[n]=t.call(this,n)}}e.exports=n},{}],144:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule merge
 */
"use strict";var n=t("./mergeInto"),o=function(t,e){var o={};return n(o,t),n(o,e),o};e.exports=o},{"./mergeInto":146}],145:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule mergeHelpers
 *
 * requiresPolyfills: Array.isArray
 */
"use strict";var n=t("./invariant"),o=t("./keyMirror"),i=36,r=function(t){return"object"!=typeof t||null===t},s={MAX_MERGE_DEPTH:i,isTerminal:r,normalizeMergeArg:function(t){return void 0===t||null===t?{}:t},checkMergeArrayArgs:function(t,e){n(Array.isArray(t)&&Array.isArray(e),"Tried to merge arrays, instead got %s and %s.",t,e)},checkMergeObjectArgs:function(t,e){s.checkMergeObjectArg(t),s.checkMergeObjectArg(e)},checkMergeObjectArg:function(t){n(!r(t)&&!Array.isArray(t),"Tried to merge an object, instead got %s.",t)},checkMergeIntoObjectArg:function(t){n(!(r(t)&&"function"!=typeof t||Array.isArray(t)),"Tried to merge into an object, instead got %s.",t)},checkMergeLevel:function(t){n(i>t,"Maximum deep merge depth exceeded. You may be attempting to merge circular structures in an unsupported way.")},checkArrayStrategy:function(t){n(void 0===t||t in s.ArrayStrategies,"You must provide an array strategy to deep merge functions to instruct the deep merge how to resolve merging two arrays.")},ArrayStrategies:o({Clobber:!0,IndexByIndex:!0})};e.exports=s},{"./invariant":134,"./keyMirror":140}],146:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule mergeInto
 * @typechecks static-only
 */
"use strict";function n(t,e){if(r(t),null!=e){i(e);for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}}var o=t("./mergeHelpers"),i=o.checkMergeObjectArg,r=o.checkMergeIntoObjectArg;e.exports=n},{"./mergeHelpers":145}],147:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule mixInto
 */
"use strict";var n=function(t,e){var n;for(n in e)e.hasOwnProperty(n)&&(t.prototype[n]=e[n])};e.exports=n},{}],148:[function(t,e){/**
 * Copyright 2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule monitorCodeUse
 */
"use strict";function n(t){o(t&&!/[^a-z0-9_]/.test(t),"You must provide an eventName using only the characters [a-z0-9_]")}var o=t("./invariant");e.exports=n},{"./invariant":134}],149:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule onlyChild
 */
"use strict";function n(t){return i(o.isValidDescriptor(t),"onlyChild must be passed a children with exactly one child."),t}var o=t("./ReactDescriptor"),i=t("./invariant");e.exports=n},{"./ReactDescriptor":56,"./invariant":134}],150:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule performance
 * @typechecks
 */
"use strict";var n,o=t("./ExecutionEnvironment");o.canUseDOM&&(n=window.performance||window.msPerformance||window.webkitPerformance),e.exports=n||{}},{"./ExecutionEnvironment":22}],151:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule performanceNow
 * @typechecks
 */
var n=t("./performance");n&&n.now||(n=Date);var o=n.now.bind(n);e.exports=o},{"./performance":150}],152:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule setInnerHTML
 */
"use strict";var n=t("./ExecutionEnvironment"),o=function(t,e){t.innerHTML=e};if(n.canUseDOM){var i=document.createElement("div");i.innerHTML=" ",""===i.innerHTML&&(o=function(t,e){if(t.parentNode&&t.parentNode.replaceChild(t,t),e.match(/^[ \r\n\t\f]/)||"<"===e[0]&&(-1!==e.indexOf("<noscript")||-1!==e.indexOf("<script")||-1!==e.indexOf("<style")||-1!==e.indexOf("<meta")||-1!==e.indexOf("<link"))){t.innerHTML="\ufeff"+e;var n=t.firstChild;1===n.data.length?t.removeChild(n):n.deleteData(0,1)}else t.innerHTML=e})}e.exports=o},{"./ExecutionEnvironment":22}],153:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule shallowEqual
 */
"use strict";function n(t,e){if(t===e)return!0;var n;for(n in t)if(t.hasOwnProperty(n)&&(!e.hasOwnProperty(n)||t[n]!==e[n]))return!1;for(n in e)if(e.hasOwnProperty(n)&&!t.hasOwnProperty(n))return!1;return!0}e.exports=n},{}],154:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule shouldUpdateReactComponent
 * @typechecks static-only
 */
"use strict";function n(t,e){return t&&e&&t.type===e.type&&(t.props&&t.props.key)===(e.props&&e.props.key)&&t._owner===e._owner?!0:!1}e.exports=n},{}],155:[function(t,e){function n(t){var e=t.length;if(o(!Array.isArray(t)&&("object"==typeof t||"function"==typeof t),"toArray: Array-like object expected"),o("number"==typeof e,"toArray: Object needs a length property"),o(0===e||e-1 in t,"toArray: Object should have keys for indices"),t.hasOwnProperty)try{return Array.prototype.slice.call(t)}catch(n){}for(var i=Array(e),r=0;e>r;r++)i[r]=t[r];return i}/**
 * Copyright 2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule toArray
 * @typechecks
 */
var o=t("./invariant");e.exports=n},{"./invariant":134}],156:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule traverseAllChildren
 */
"use strict";function n(t){return d[t]}function o(t,e){return t&&t.props&&null!=t.props.key?r(t.props.key):e.toString(36)}function i(t){return(""+t).replace(h,n)}function r(t){return"$"+i(t)}function s(t,e,n){return null==t?0:f(t,"",0,e,n)}var a=t("./ReactInstanceHandles"),l=t("./ReactTextComponent"),u=t("./invariant"),c=a.SEPARATOR,p=":",d={"=":"=0",".":"=1",":":"=2"},h=/[=.:]/g,f=function(t,e,n,i,s){var a=0;if(Array.isArray(t))for(var d=0;d<t.length;d++){var h=t[d],m=e+(e?p:c)+o(h,d),g=n+a;a+=f(h,m,g,i,s)}else{var v=typeof t,y=""===e,b=y?c+o(t,0):e;if(null==t||"boolean"===v)i(s,null,b,n),a=1;else if(t.type&&t.type.prototype&&t.type.prototype.mountComponentIntoNode)i(s,t,b,n),a=1;else if("object"===v){u(!t||1!==t.nodeType,"traverseAllChildren(...): Encountered an invalid child; DOM elements are not valid children of React components.");for(var C in t)t.hasOwnProperty(C)&&(a+=f(t[C],e+(e?p:c)+r(C)+p+o(t[C],0),n+a,i,s))}else if("string"===v){var P=l(t);i(s,P,b,n),a+=1}else if("number"===v){var x=l(""+t);i(s,x,b,n),a+=1}}return a};e.exports=s},{"./ReactInstanceHandles":64,"./ReactTextComponent":83,"./invariant":134}],157:[function(t,e){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule update
 */
"use strict";function n(t){return Array.isArray(t)?t.concat():t&&"object"==typeof t?r(new t.constructor,t):t}function o(t,e,n){a(Array.isArray(t),"update(): expected target of %s to be an array; got %s.",n,t);var o=e[n];a(Array.isArray(o),"update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?",n,o)}function i(t,e){if(a("object"==typeof e,"update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?",f.join(", "),p),e.hasOwnProperty(p))return a(1===Object.keys(e).length,"Cannot have more than one key in an object with %s",p),e[p];var s=n(t);if(e.hasOwnProperty(d)){var g=e[d];a(g&&"object"==typeof g,"update(): %s expects a spec of type 'object'; got %s",d,g),a(s&&"object"==typeof s,"update(): %s expects a target of type 'object'; got %s",d,s),r(s,e[d])}e.hasOwnProperty(l)&&(o(t,e,l),e[l].forEach(function(t){s.push(t)})),e.hasOwnProperty(u)&&(o(t,e,u),e[u].forEach(function(t){s.unshift(t)})),e.hasOwnProperty(c)&&(a(Array.isArray(t),"Expected %s target to be an array; got %s",c,t),a(Array.isArray(e[c]),"update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",c,e[c]),e[c].forEach(function(t){a(Array.isArray(t),"update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",c,e[c]),s.splice.apply(s,t)})),e.hasOwnProperty(h)&&(a("function"==typeof e[h],"update(): expected spec of %s to be a function; got %s.",h,e[h]),s=e[h](s));for(var v in e)m.hasOwnProperty(v)&&m[v]||(s[v]=i(t[v],e[v]));return s}var r=t("./copyProperties"),s=t("./keyOf"),a=t("./invariant"),l=s({$push:null}),u=s({$unshift:null}),c=s({$splice:null}),p=s({$set:null}),d=s({$merge:null}),h=s({$apply:null}),f=[l,u,c,p,d,h],m={};f.forEach(function(t){m[t]=!0}),e.exports=i},{"./copyProperties":110,"./invariant":134,"./keyOf":141}],158:[function(t,e){/**
 * Copyright 2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule warning
 */
"use strict";var n=t("./emptyFunction"),o=n;o=function(t,e){var n=Array.prototype.slice.call(arguments,2);if(void 0===e)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(!t){var o=0;console.warn("Warning: "+e.replace(/%s/g,function(){return n[o++]}))}},e.exports=o},{"./emptyFunction":116}]},{},[88])(88)}),/* ========================================================================
 * Bootstrap: affix.js v3.2.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),i=o.data("bs.affix"),r="object"==typeof e&&e;i||o.data("bs.affix",i=new n(this,r)),"string"==typeof e&&i[e]()})}var n=function(e,o){this.options=t.extend({},n.DEFAULTS,o),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};n.VERSION="3.2.0",n.RESET="affix affix-top affix-bottom",n.DEFAULTS={offset:0,target:window},n.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(n.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},n.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},n.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=t(document).height(),o=this.$target.scrollTop(),i=this.$element.offset(),r=this.options.offset,s=r.top,a=r.bottom;"object"!=typeof r&&(a=s=r),"function"==typeof s&&(s=r.top(this.$element)),"function"==typeof a&&(a=r.bottom(this.$element));var l=null!=this.unpin&&o+this.unpin<=i.top?!1:null!=a&&i.top+this.$element.height()>=e-a?"bottom":null!=s&&s>=o?"top":!1;if(this.affixed!==l){null!=this.unpin&&this.$element.css("top","");var u="affix"+(l?"-"+l:""),c=t.Event(u+".bs.affix");this.$element.trigger(c),c.isDefaultPrevented()||(this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(n.RESET).addClass(u).trigger(t.Event(u.replace("affix","affixed"))),"bottom"==l&&this.$element.offset({top:e-this.$element.height()-a}))}}};var o=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=n,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var n=t(this),o=n.data();o.offset=o.offset||{},o.offsetBottom&&(o.offset.bottom=o.offsetBottom),o.offsetTop&&(o.offset.top=o.offsetTop),e.call(n,o)})})}(jQuery),/* ========================================================================
 * Bootstrap: alert.js v3.2.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),i=n.data("bs.alert");i||n.data("bs.alert",i=new o(this)),"string"==typeof e&&i[e].call(n)})}var n='[data-dismiss="alert"]',o=function(e){t(e).on("click",n,this.close)};o.VERSION="3.2.0",o.prototype.close=function(e){function n(){r.detach().trigger("closed.bs.alert").remove()}var o=t(this),i=o.attr("data-target");i||(i=o.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,""));var r=t(i);e&&e.preventDefault(),r.length||(r=o.hasClass("alert")?o:o.parent()),r.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(r.removeClass("in"),t.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",n).emulateTransitionEnd(150):n())};var i=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=i,this},t(document).on("click.bs.alert.data-api",n,o.prototype.close)}(jQuery),/* ========================================================================
 * Bootstrap: button.js v3.2.0
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),i=o.data("bs.button"),r="object"==typeof e&&e;i||o.data("bs.button",i=new n(this,r)),"toggle"==e?i.toggle():e&&i.setState(e)})}var n=function(e,o){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,o),this.isLoading=!1};n.VERSION="3.2.0",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(e){var n="disabled",o=this.$element,i=o.is("input")?"val":"html",r=o.data();e+="Text",null==r.resetText&&o.data("resetText",o[i]()),o[i](null==r[e]?this.options[e]:r[e]),setTimeout(t.proxy(function(){"loadingText"==e?(this.isLoading=!0,o.addClass(n).attr(n,n)):this.isLoading&&(this.isLoading=!1,o.removeClass(n).removeAttr(n))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var n=this.$element.find("input");"radio"==n.prop("type")&&(n.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&n.prop("checked",!this.$element.hasClass("active")).trigger("change")}t&&this.$element.toggleClass("active")};var o=t.fn.button;t.fn.button=e,t.fn.button.Constructor=n,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(n){var o=t(n.target);o.hasClass("btn")||(o=o.closest(".btn")),e.call(o,"toggle"),n.preventDefault()})}(jQuery),/* ========================================================================
 * Bootstrap: carousel.js v3.2.0
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),i=o.data("bs.carousel"),r=t.extend({},n.DEFAULTS,o.data(),"object"==typeof e&&e),s="string"==typeof e?e:r.slide;i||o.data("bs.carousel",i=new n(this,r)),"number"==typeof e?i.to(e):s?i[s]():r.interval&&i.pause().cycle()})}var n=function(e,n){this.$element=t(e).on("keydown.bs.carousel",t.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};n.VERSION="3.2.0",n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},n.prototype.keydown=function(t){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()},n.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},n.prototype.to=function(e){var n=this,o=this.getItemIndex(this.$active=this.$element.find(".item.active"));return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){n.to(e)}):o==e?this.pause().cycle():this.slide(e>o?"next":"prev",t(this.$items[e]))},n.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){return this.sliding?void 0:this.slide("next")},n.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},n.prototype.slide=function(e,n){var o=this.$element.find(".item.active"),i=n||o[e](),r=this.interval,s="next"==e?"left":"right",a="next"==e?"first":"last",l=this;if(!i.length){if(!this.options.wrap)return;i=this.$element.find(".item")[a]()}if(i.hasClass("active"))return this.sliding=!1;var u=i[0],c=t.Event("slide.bs.carousel",{relatedTarget:u,direction:s});if(this.$element.trigger(c),!c.isDefaultPrevented()){if(this.sliding=!0,r&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var p=t(this.$indicators.children()[this.getItemIndex(i)]);p&&p.addClass("active")}var d=t.Event("slid.bs.carousel",{relatedTarget:u,direction:s});return t.support.transition&&this.$element.hasClass("slide")?(i.addClass(e),i[0].offsetWidth,o.addClass(s),i.addClass(s),o.one("bsTransitionEnd",function(){i.removeClass([e,s].join(" ")).addClass("active"),o.removeClass(["active",s].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(d)},0)}).emulateTransitionEnd(1e3*o.css("transition-duration").slice(0,-1))):(o.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger(d)),r&&this.cycle(),this}};var o=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=n,t.fn.carousel.noConflict=function(){return t.fn.carousel=o,this},t(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(n){var o,i=t(this),r=t(i.attr("data-target")||(o=i.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""));if(r.hasClass("carousel")){var s=t.extend({},r.data(),i.data()),a=i.attr("data-slide-to");a&&(s.interval=!1),e.call(r,s),a&&r.data("bs.carousel").to(a),n.preventDefault()}}),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var n=t(this);e.call(n,n.data())})})}(jQuery),/* ========================================================================
 * Bootstrap: collapse.js v3.2.0
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),i=o.data("bs.collapse"),r=t.extend({},n.DEFAULTS,o.data(),"object"==typeof e&&e);!i&&r.toggle&&"show"==e&&(e=!e),i||o.data("bs.collapse",i=new n(this,r)),"string"==typeof e&&i[e]()})}var n=function(e,o){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,o),this.transitioning=null,this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};n.VERSION="3.2.0",n.DEFAULTS={toggle:!0},n.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var n=t.Event("show.bs.collapse");if(this.$element.trigger(n),!n.isDefaultPrevented()){var o=this.$parent&&this.$parent.find("> .panel > .in");if(o&&o.length){var i=o.data("bs.collapse");if(i&&i.transitioning)return;e.call(o,"hide"),i||o.data("bs.collapse",null)}var r=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[r](0),this.transitioning=1;var s=function(){this.$element.removeClass("collapsing").addClass("collapse in")[r](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return s.call(this);var a=t.camelCase(["scroll",r].join("-"));this.$element.one("bsTransitionEnd",t.proxy(s,this)).emulateTransitionEnd(350)[r](this.$element[0][a])}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return t.support.transition?void this.$element[n](0).one("bsTransitionEnd",t.proxy(o,this)).emulateTransitionEnd(350):o.call(this)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var o=t.fn.collapse;t.fn.collapse=e,t.fn.collapse.Constructor=n,t.fn.collapse.noConflict=function(){return t.fn.collapse=o,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(n){var o,i=t(this),r=i.attr("data-target")||n.preventDefault()||(o=i.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""),s=t(r),a=s.data("bs.collapse"),l=a?"toggle":i.data(),u=i.attr("data-parent"),c=u&&t(u);a&&a.transitioning||(c&&c.find('[data-toggle="collapse"][data-parent="'+u+'"]').not(i).addClass("collapsed"),i[s.hasClass("in")?"addClass":"removeClass"]("collapsed")),e.call(s,l)})}(jQuery),/* ========================================================================
 * Bootstrap: dropdown.js v3.2.0
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){e&&3===e.which||(t(i).remove(),t(r).each(function(){var o=n(t(this)),i={relatedTarget:this};o.hasClass("open")&&(o.trigger(e=t.Event("hide.bs.dropdown",i)),e.isDefaultPrevented()||o.removeClass("open").trigger("hidden.bs.dropdown",i))}))}function n(e){var n=e.attr("data-target");n||(n=e.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var o=n&&t(n);return o&&o.length?o:e.parent()}function o(e){return this.each(function(){var n=t(this),o=n.data("bs.dropdown");o||n.data("bs.dropdown",o=new s(this)),"string"==typeof e&&o[e].call(n)})}var i=".dropdown-backdrop",r='[data-toggle="dropdown"]',s=function(e){t(e).on("click.bs.dropdown",this.toggle)};s.VERSION="3.2.0",s.prototype.toggle=function(o){var i=t(this);if(!i.is(".disabled, :disabled")){var r=n(i),s=r.hasClass("open");if(e(),!s){"ontouchstart"in document.documentElement&&!r.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var a={relatedTarget:this};if(r.trigger(o=t.Event("show.bs.dropdown",a)),o.isDefaultPrevented())return;i.trigger("focus"),r.toggleClass("open").trigger("shown.bs.dropdown",a)}return!1}},s.prototype.keydown=function(e){if(/(38|40|27)/.test(e.keyCode)){var o=t(this);if(e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled")){var i=n(o),s=i.hasClass("open");if(!s||s&&27==e.keyCode)return 27==e.which&&i.find(r).trigger("focus"),o.trigger("click");var a=" li:not(.divider):visible a",l=i.find('[role="menu"]'+a+', [role="listbox"]'+a);if(l.length){var u=l.index(l.filter(":focus"));38==e.keyCode&&u>0&&u--,40==e.keyCode&&u<l.length-1&&u++,~u||(u=0),l.eq(u).trigger("focus")}}}};var a=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=s,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,s.prototype.toggle).on("keydown.bs.dropdown.data-api",r+', [role="menu"], [role="listbox"]',s.prototype.keydown)}(jQuery),/* ========================================================================
 * Bootstrap: tab.js v3.2.0
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),i=o.data("bs.tab");i||o.data("bs.tab",i=new n(this)),"string"==typeof e&&i[e]()})}var n=function(e){this.element=t(e)};n.VERSION="3.2.0",n.prototype.show=function(){var e=this.element,n=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var i=n.find(".active:last a")[0],r=t.Event("show.bs.tab",{relatedTarget:i});if(e.trigger(r),!r.isDefaultPrevented()){var s=t(o);this.activate(e.closest("li"),n),this.activate(s,s.parent(),function(){e.trigger({type:"shown.bs.tab",relatedTarget:i})})}}},n.prototype.activate=function(e,n,o){function i(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),s?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),o&&o()}var r=n.find("> .active"),s=o&&t.support.transition&&r.hasClass("fade");s?r.one("bsTransitionEnd",i).emulateTransitionEnd(150):i(),r.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=n,t.fn.tab.noConflict=function(){return t.fn.tab=o,this},t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(n){n.preventDefault(),e.call(t(this),"show")})}(jQuery),/* ========================================================================
 * Bootstrap: transition.js v3.2.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}t.fn.emulateTransitionEnd=function(e){var n=!1,o=this;t(this).one("bsTransitionEnd",function(){n=!0});var i=function(){n||t(o).trigger(t.support.transition.end)};return setTimeout(i,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),/* ========================================================================
 * Bootstrap: scrollspy.js v3.2.0
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(n,o){var i=t.proxy(this.process,this);this.$body=t("body"),this.$scrollElement=t(t(n).is("body")?window:n),this.options=t.extend({},e.DEFAULTS,o),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",i),this.refresh(),this.process()}function n(n){return this.each(function(){var o=t(this),i=o.data("bs.scrollspy"),r="object"==typeof n&&n;i||o.data("bs.scrollspy",i=new e(this,r)),"string"==typeof n&&i[n]()})}e.VERSION="3.2.0",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e="offset",n=0;t.isWindow(this.$scrollElement[0])||(e="position",n=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var o=this;this.$body.find(this.selector).map(function(){var o=t(this),i=o.data("target")||o.attr("href"),r=/^#./.test(i)&&t(i);return r&&r.length&&r.is(":visible")&&[[r[e]().top+n,i]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){o.offsets.push(this[0]),o.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),o=this.options.offset+n-this.$scrollElement.height(),i=this.offsets,r=this.targets,s=this.activeTarget;if(this.scrollHeight!=n&&this.refresh(),e>=o)return s!=(t=r[r.length-1])&&this.activate(t);if(s&&e<=i[0])return s!=(t=r[0])&&this.activate(t);for(t=i.length;t--;)s!=r[t]&&e>=i[t]&&(!i[t+1]||e<=i[t+1])&&this.activate(r[t])},e.prototype.activate=function(e){this.activeTarget=e,t(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var n=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=t(n).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")};var o=t.fn.scrollspy;t.fn.scrollspy=n,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=o,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);n.call(e,e.data())})})}(jQuery),/* ========================================================================
 * Bootstrap: modal.js v3.2.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e,o){return this.each(function(){var i=t(this),r=i.data("bs.modal"),s=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e);r||i.data("bs.modal",r=new n(this,s)),"string"==typeof e?r[e](o):s.show&&r.show(o)})}var n=function(e,n){this.options=n,this.$body=t(document.body),this.$element=t(e),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};n.VERSION="3.2.0",n.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},n.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},n.prototype.show=function(e){var n=this,o=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop(function(){var o=t.support.transition&&n.$element.hasClass("fade");n.$element.parent().length||n.$element.appendTo(n.$body),n.$element.show().scrollTop(0),o&&n.$element[0].offsetWidth,n.$element.addClass("in").attr("aria-hidden",!1),n.enforceFocus();var i=t.Event("shown.bs.modal",{relatedTarget:e});o?n.$element.find(".modal-dialog").one("bsTransitionEnd",function(){n.$element.trigger("focus").trigger(i)}).emulateTransitionEnd(300):n.$element.trigger("focus").trigger(i)}))},n.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},n.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},n.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},n.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$element.trigger("hidden.bs.modal")})},n.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},n.prototype.backdrop=function(e){var n=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=t.support.transition&&o;if(this.$backdrop=t('<div class="modal-backdrop '+o+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;i?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(150):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var r=function(){n.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",r).emulateTransitionEnd(150):r()}else e&&e()},n.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},n.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",t+this.scrollbarWidth)},n.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},n.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=n,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(n){var o=t(this),i=o.attr("href"),r=t(o.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),s=r.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(i)&&i},r.data(),o.data());o.is("a")&&n.preventDefault(),r.one("show.bs.modal",function(t){t.isDefaultPrevented()||r.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(r,s,this)})}(jQuery),/* ========================================================================
 * Bootstrap: tooltip.js v3.2.0
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),i=o.data("bs.tooltip"),r="object"==typeof e&&e;(i||"destroy"!=e)&&(i||o.data("bs.tooltip",i=new n(this,r)),"string"==typeof e&&i[e]())})}var n=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)};n.VERSION="3.2.0",n.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},n.prototype.init=function(e,n,o){this.enabled=!0,this.type=e,this.$element=t(n),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport);for(var i=this.options.trigger.split(" "),r=i.length;r--;){var s=i[r];if("click"==s)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",l="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},n.prototype.getDelegateOptions=function(){var e={},n=this.getDefaults();return this._options&&t.each(this._options,function(t,o){n[t]!=o&&(e[t]=o)}),e},n.prototype.enter=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),clearTimeout(n.timeout),n.hoverState="in",n.options.delay&&n.options.delay.show?void(n.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show)):n.show()},n.prototype.leave=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),clearTimeout(n.timeout),n.hoverState="out",n.options.delay&&n.options.delay.hide?void(n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)):n.hide()},n.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var n=t.contains(document.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!n)return;var o=this,i=this.tip(),r=this.getUID(this.type);this.setContent(),i.attr("id",r),this.$element.attr("aria-describedby",r),this.options.animation&&i.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,i[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,l=a.test(s);l&&(s=s.replace(a,"")||"top"),i.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?i.appendTo(this.options.container):i.insertAfter(this.$element);var u=this.getPosition(),c=i[0].offsetWidth,p=i[0].offsetHeight;if(l){var d=s,h=this.$element.parent(),f=this.getPosition(h);s="bottom"==s&&u.top+u.height+p-f.scroll>f.height?"top":"top"==s&&u.top-f.scroll-p<0?"bottom":"right"==s&&u.right+c>f.width?"left":"left"==s&&u.left-c<f.left?"right":s,i.removeClass(d).addClass(s)}var m=this.getCalculatedOffset(s,u,c,p);this.applyPlacement(m,s);var g=function(){o.$element.trigger("shown.bs."+o.type),o.hoverState=null};t.support.transition&&this.$tip.hasClass("fade")?i.one("bsTransitionEnd",g).emulateTransitionEnd(150):g()}},n.prototype.applyPlacement=function(e,n){var o=this.tip(),i=o[0].offsetWidth,r=o[0].offsetHeight,s=parseInt(o.css("margin-top"),10),a=parseInt(o.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),e.top=e.top+s,e.left=e.left+a,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,u=o[0].offsetHeight;"top"==n&&u!=r&&(e.top=e.top+r-u);var c=this.getViewportAdjustedDelta(n,e,l,u);c.left?e.left+=c.left:e.top+=c.top;var p=c.left?2*c.left-i+l:2*c.top-r+u,d=c.left?"left":"top",h=c.left?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(p,o[0][h],d)},n.prototype.replaceArrow=function(t,e,n){this.arrow().css(n,t?50*(1-t/e)+"%":"")},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},n.prototype.hide=function(){function e(){"in"!=n.hoverState&&o.detach(),n.$element.trigger("hidden.bs."+n.type)}var n=this,o=this.tip(),i=t.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(i),i.isDefaultPrevented()?void 0:(o.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),this.hoverState=null,this)},n.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},n.prototype.hasContent=function(){return this.getTitle()},n.prototype.getPosition=function(e){e=e||this.$element;var n=e[0],o="BODY"==n.tagName;return t.extend({},"function"==typeof n.getBoundingClientRect?n.getBoundingClientRect():null,{scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop(),width:o?t(window).width():e.outerWidth(),height:o?t(window).height():e.outerHeight()},o?{top:0,left:0}:e.offset())},n.prototype.getCalculatedOffset=function(t,e,n,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-n/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-n/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-n}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},n.prototype.getViewportAdjustedDelta=function(t,e,n,o){var i={top:0,left:0};if(!this.$viewport)return i;var r=this.options.viewport&&this.options.viewport.padding||0,s=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-r-s.scroll,l=e.top+r-s.scroll+o;a<s.top?i.top=s.top-a:l>s.top+s.height&&(i.top=s.top+s.height-l)}else{var u=e.left-r,c=e.left+r+n;u<s.left?i.left=s.left-u:c>s.width&&(i.left=s.left+s.width-c)}return i},n.prototype.getTitle=function(){var t,e=this.$element,n=this.options;return t=e.attr("data-original-title")||("function"==typeof n.title?n.title.call(e[0]):n.title)},n.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},n.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},n.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},n.prototype.enable=function(){this.enabled=!0},n.prototype.disable=function(){this.enabled=!1},n.prototype.toggleEnabled=function(){this.enabled=!this.enabled},n.prototype.toggle=function(e){var n=this;e&&(n=t(e.currentTarget).data("bs."+this.type),n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n))),n.tip().hasClass("in")?n.leave(n):n.enter(n)},n.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=n,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),/* ========================================================================
 * Bootstrap: popover.js v3.2.0
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),i=o.data("bs.popover"),r="object"==typeof e&&e;(i||"destroy"!=e)&&(i||o.data("bs.popover",i=new n(this,r)),"string"==typeof e&&i[e]())})}var n=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");n.VERSION="3.2.0",n.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),n.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),n.prototype.constructor=n,n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").empty()[this.options.html?"string"==typeof n?"html":"append":"text"](n),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},n.prototype.hasContent=function(){return this.getTitle()||this.getContent()},n.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},n.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=n,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery),function(){var t,e,n,o,i,r;r=React.DOM,n=r.a,o=r.div,i=r.strong,t=React.createClass({render:function(){var t,e,o,i;return i=this.props.competition,e=i.title,o=i.url,t="",this.props.active===!0&&(t=" active"),n({className:"list-group-item"+t,href:o||"#missing"},e)}}),e=React.createClass({render:function(){var e,r,s,a;return a=this.props,e=a.competitions,r=a.current_competition,s=a.more_competitions_url,o({className:"list-group",ref:"linkParent"},e.map(function(e){return t({key:e.id,competition:e,active:e.active===!0})}),n({className:"list-group-item",href:s},i({},"More Competitions")))}}),window.OrganizationNavigation=e}.call(this),function(){var t,e,n,o,i,r,s,a,l;l=React.DOM,r=l.nav,o=l.div,n=l.button,s=l.span,a=l.ul,i=l.li,e=l.a,t=React.createClass({render:function(){var t,l,u,c;return c=this.props.competition,u=c.title,l=c.short_name,t=this.props.navigation,r({className:"navbar navbar-default",role:"navigation"},o({className:"navbar-header"},n({className:"navbar-toggle","data-target":"#curlcast-navigation","data-toggle":"collapse",type:"button"},s({className:"sr-only"},"Toggle navigation"),s({className:"icon-bar"}),s({className:"icon-bar"}),s({className:"icon-bar"})),s({className:"navbar-brand"},l||u)),o({className:"collapse navbar-collapse",id:"curlcast-navigation"},a({className:"nav navbar-nav"},i({className:null==this.props.highlight||"scoreboard"===this.props.highlight?"active":null},e({href:t.scoreboard||"#scoreboard"},"Scoreboard")),i({className:"standings"===this.props.highlight?"active":null},e({href:t.standings_draw||"#standings_draw"},"Standings / Draw")),i({className:"teams"===this.props.highlight?"active":null},e({href:t.teams||"#teams"},"Teams")),i({className:"visible-xs"},e({href:t.more_competitions||"#more_competitions"},"More Competitions")))))}}),window.CompetitionNavigation=t}.call(this),function(){var t,e;e=React.DOM.div,t=React.createClass({getInitialState:function(){return{navigation:null,competitions:[],status:"Loading curling data...",retryDelay:5e3}},loadDataFromServer:function(){var t,e,n,o;return e=this.props.componentProps.url.split("/"),t=e.indexOf("competitions"),n=e.slice(0,+(t+1)+1||9e9),n.push("navigation.js"),o=n.join("/"),jQuery.ajax({url:o,dataType:"jsonp",cache:!0,success:function(t){return function(e){return t.setState({navigation:e.navigation,competitions:e.competitions})}}(this),error:function(t){return function(){var e,n;return n=t.state.retryDelay/1e3,e="Could not load data, retrying in "+n+" seconds...",n>5&&(e="Still having connectivity problems, retrying in "+n+" seconds..."),t.setState({status:e,retryDelay:t.state.retryDelay>=3e4?t.state.retryDelay:t.state.retryDelay+5e3}),setTimeout(t.loadDataFromServer,1e3*n)}}(this)})},fixLinks:function(t){var e;return null==t&&(t=null),t=t||this.getDOMNode(),e=this.props.componentProps.pathPrefix,jQuery("a",this.getDOMNode()).each(function(t,n){var o,i,r;if(i=jQuery(n).attr("href"),"/stats/organizations/"===i.substr(0,21)){for(o=i.substr(1).split("/"),t=r=0;2>=r;t=++r)o.shift();return o.unshift(e),jQuery(n).attr("href",o.join("/"))}})},componentWillMount:function(){return this.loadDataFromServer()},render:function(){var t,n,o,i,r,s,a,l,u,c,p,d;if(null==this.state.navigation)return e({className:"row"},e({className:"col-xs-12"},this.state.status));for(l=this.props.componentProps.pathPrefix,d=this.state,i=d.competitions,a=d.navigation,o=i[0],c=0,p=i.length;p>c;c++)if(n=i[c],n.active===!0){o=n;break}r=this.props.componentProps,t={fixLinks:this.fixLinks,competition:o,navigation:a};for(s in t)u=t[s],r[s]=u;return e({className:"row"},e({className:"col-sm-3 hidden-xs",id:"organization-nav"},OrganizationNavigation({competitions:i,more_competitions_url:a.more_competitions,pathPrefix:l})),e({className:"col-sm-9 col-xs-12",id:"scoreboard"},CompetitionNavigation({competition:o,navigation:a||{},pathPrefix:l,highlight:this.props.highlight}),this.props.component(r)))}}),window.CurlcastShell=t}.call(this),function(){var t,e,n,o,i,r,s,a,l,u,c,p,d,h,f,m,g;g=React.DOM,l=g.div,c=g.p,s=g.a,p=g.strong,a=g.br,u=g.h4,d=g.table,h=g.tbody,m=g.tr,f=g.td,r=React.createClass({getInitialState:function(){return{placeholderMessage:"Loading competitions...",competitions:[]}},loadDataFromServer:function(){return jQuery.ajax({url:this.props.url,dataType:"jsonp",cache:!0,jsonpCallback:"curlcastJSONP",success:function(t){return function(e){return t.setState({placeholderMessage:"There are no active competitions.",competitions:e})}}(this),error:function(){return console.log("there was an error")}})},componentWillMount:function(){return this.loadDataFromServer(),setInterval(this.loadDataFromServer,this.props.pollInterval)},render:function(){return 0===this.state.competitions.length?l(null,c(null,p(null,this.state.placeholderMessage))):l({id:"curlcast_accordion",className:"panel-group"},this.state.competitions.map(function(e){return function(n){return t({key:n.id,competition:n,pathPrefix:e.props.pathPrefix})}}(this)))}}),t=React.createClass({render:function(){var t,n,o,i,r,a,p;return p=this.props.competition,n=p.id,a=p.title,r=p.short_name,t=p.current_draw,i=p.path,o=p.open,l({className:"panel panel-default"},l({className:"panel-heading"},u({className:"panel-title",title:a},s({"data-parent":"#curlcast_accordion","data-toggle":"collapse",href:"#comp-"+n,title:a},{short_name:r}))),l({className:"panel-collapse collapse"+(o?" in":""),id:"comp-"+n},l({className:"panel-body"},l({className:"row"},null!=t?e({draw:t,pathPrefix:this.props.pathPrefix}):void 0,l({className:"col-xs-12"},null!=t?c(null,s({href:"/"+this.props.pathPrefix+i,dangerouslySetInnerHTML:{__html:"Full Scoreboard &raquo;"}})):c(null,"No Draws Scheduled Yet"))))))}}),e=React.createClass({render:function(){var t,e,o,i,r;return r=this.props.draw,e=r.id,o=r.label,i=r.starts,t=r.games,l({className:"col-xs-12"},c(null,p(null,"Draw "+o+": "),i),0===t.length?c(null,"No Games Scheduled Yet"):(c(null,"Prefix: "+this.props.pathPrefix),d({className:"table table-bordered table-condensed"},t.map(function(t){return function(e){return n({key:e.id,game:e,pathPrefix:t.props.pathPrefix})}}(this)))))}}),n=React.createClass({render:function(){var t,e,n,r,l;return l=this.props.game,e=l.id,r=l.state,n=l.path,t=l.game_positions,h(null,m(null,o({key:t[0].id,game_position:t[0],pathPrefix:this.props.pathPrefix}),i({key:"score-"+t[0].id,game_position:t[0]}),f({className:"game-state",rowSpan:"2"},p(null,r),a(null),s({href:"/"+this.props.pathPrefix+n},"Box"))),m(null,o({key:t[1].id,game_position:t[1],pathPrefix:this.props.pathPrefix}),i({key:"score-"+t[1].id,game_position:t[1]})))}}),o=React.createClass({render:function(){var t,e,n,o,i;return i=this.props.game_position,t=i.name,n=i.short_name,o=i.team_path,e=i.result,f({className:"game-name"},null!==o?s({href:"/"+this.props.pathPrefix+o,title:t},"won"===e?p(null,n):n):t)}}),i=React.createClass({render:function(){var t,e,n;return n=this.props.game_position,e=n.total,t=n.result,f({className:"game-score"},"won"===t?p(null,e):e)}}),window.CurlcastScoreboardWidget=r}.call(this),function(){var t,e,n,o,i,r,s,a,l,u,c,p,d,h,f,m,g,v,y,b,C,P,x,E,_,w,D,j,S,M,O,T,R;M=React.DOM,h=M.div,b=M.p,c=M.a,P=M.strong,p=M.br,y=M.nav,d=M.button,C=M.span,P=M.strong,O=React.DOM,x=O.table,D=O.thead,E=O.tbody,j=O.tr,_=O.td,w=O.th,T=React.DOM,g=T.h6,m=T.h4,f=T.h3,R=React.DOM,S=R.ul,v=R.li,e=React.createClass({changeDraw:function(){return this.props.changeDraw(this.props.day),!1},render:function(){var t,e,n,o;return o=this.props.day,e=o.date,n=o.day,t="",this.props.active===!0&&(t=" active"),v({className:"text-center"+t},c({href:"#day-"+e+"-"+n,onClick:this.changeDraw},e,p({}),n))}}),n=React.createClass({render:function(){var t,n,o,i,r;return r=this.props,o=r.days,i=r.filter,n=r.day,t=r.changeDraw,S({className:"pagination"},o.map(function(o){return e({key:o.id,day:o,active:n.id===o.id,changeDraw:t})}))}}),r=React.createClass({changeDraw:function(){return this.props.changeDraw(this.props.day,this.props.draw),!1},render:function(){var t,e;return e=this.props.draw,t="",this.props.active===!0&&(t="active"),v({className:t},c({href:"#draw"+e.label,role:"tab",onClick:this.changeDraw},"Draw "+e.label,p({}),e.starts_at))}}),i=React.createClass({render:function(){var t,e,n,o,i;return i=this.props,o=i.draws,t=i.changeDraw,e=i.day,n=this.props.draw,S({className:"nav nav-tabs",role:"tablist"},o.map(function(o){return r({key:o.id,draw:o,day:e,active:o.id===n.id,changeDraw:t})}))}}),l=React.createClass({render:function(){var t,e,n,o,i,r,s,a,l,u,d,h,f,m,g,v,y,b;for(y=this.props,i=y.game,l=y.position,t=y.boxscore,n=y.ends,s="",l.first_hammer===!0&&(s="*"),e=l.end_scores||[],r="final"===i.state.toLowerCase(),h=0,g=e.length;g>h;h++)o=e[h],null==o.score?r&&(o.score="X"):o.score=o.score.toString();if(e.length<n)for(a=n-e.length,o=f=0;a>=0?a>=f:f>=a;o=a>=0?++f:--f)e.push({score:""});if(d="",null!=l.end_scores)for(d=0,m=0,v=e.length;v>m;m++)u=e[m],d+=parseInt(u.score)||0;return j({},_({},null!=l.team?c({href:l.team.url},C({className:"hidden-xs"},l.team.name),C({className:"visible-xs"},l.team.short_name)):"TBD"),_({className:"lsfe"},""+s),function(){b=[];for(var t=0,e=n-1;e>=0?e>=t:t>=e;e>=0?t++:t--)b.push(t);return b}.apply(this).map(function(t,n){return _({key:n,className:"end-score"},e[t].score)}),_({className:"total"},d),t===!0?_({rowSpan:"2",className:"hidden-xs"},P({},i.state),p({}),c({href:i.boxscore_url||"#boxscore-missing"},"Boxscore")):void 0)}}),s=React.createClass({render:function(){var t,e,n,o,i,r,s,a;return s=this.props,e=s.competition,i=s.sheet,o=Math.max(e.number_of_ends||(i.game_positions[0].end_scores||[]).length,(i.game_positions[1].end_scores||[]).length),n=i.game.state.toLowerCase(),t="final"===n||"after"===n.substr(0,5),r=i.name,i.game.is_bracket===!0&&(r+=" : "+i.game.name),h({className:"row"},h({className:"col-xs-12"},h({className:"table-responsive"},x({className:"table table-bordered table-condensed"},D({},j({},w({},P({},r)),w({className:"lsfe"},C({className:"hidden-xs"},"LSFE")),function(){a=[];for(var t=1;o>=1?o>=t:t>=o;o>=1?t++:t--)a.push(t);return a}.apply(this).map(function(t,e){return w({className:"end-score",key:e},""+t)}),w({className:"total"},C({className:"hidden-xs"},"TOT"),C({className:"visible-xs"},"T")),t?w({className:"hidden-xs",width:"10%"},""):void 0)),E({},l({position:i.game_positions[0],ends:o,game:i.game,boxscore:t}),l({position:i.game_positions[1],ends:o,game:i.game}))))))}}),a=React.createClass({render:function(){var t,e,n,o;return o=this.props,n=o.draw,e=o.competition,t="",this.props.active===!0&&(t=" in active"),h({className:"tab-pane fade"+t,id:"draw"+n.id},h({className:"spacer"}),n.draw_sheets.map(function(t,o){return s({key:o,draw:n,sheet:t,competition:e})}))}}),o=React.createClass({render:function(){var t,e,n,o;return o=this.props,n=o.draws,t=o.competition,e=o.draw,h({className:"tab-content"},n.map(function(n){return a({key:n.id,draw:n,competition:t,active:e.id===n.id})}))}}),t=React.createClass({getInitialState:function(){return{day:null,draw:null}},changeDraw:function(t,e){return null==e&&(e=null),this.setState({day:t,draw:e||t.draws[0]}),this.props.drawChanged()},discoverActiveDraw:function(){var t,e,n,o,i,r,s,a;if(null==this.state.draw||null==this.state.day){for(s=this.props.days,n=0,i=s.length;i>n;n++)for(t=s[n],a=t.draws,o=0,r=a.length;r>o;o++)if(e=a[o],null!=e.active)return void this.changeDraw(t,e);return this.changeDraw(this.props.days[0],this.props.days[0].draws[0])}},refreshActiveDraw:function(){var t,e,n,o,i,r,s,a;if(null!=this.state.draw&&null!=this.state.day)for(s=this.props.days,n=0,i=s.length;i>n;n++)if(t=s[n],t.id===this.state.day.id)for(a=t.draws,o=0,r=a.length;r>o;o++)if(e=a[o],e.id===this.state.draw.id)return this.state.day=t,void(this.state.draw=e)},componentWillMount:function(){return this.discoverActiveDraw()},render:function(){var t,e,r,s,a,l,u,c;return u=this.props,t=u.competition,r=u.days,l=u.scoreboard,this.refreshActiveDraw(),c=this.state,e=c.day,s=c.draw,null==e||null==s?h({className:"col-xs-12"},"Loading Competition..."):(a="",null!=l.location&&null!=l.venue&&(a=[l.venue,l.location].join(", ")),h({className:"row"},h({className:"col-xs-12 col-sm-10"},h({className:"row"},h({className:"col-xs-12"},b({},a,p({}),l.starts_on," to ",l.ends_on),n({days:r,day:e,changeDraw:this.changeDraw}),f({className:"hidden-xs"},e.starts_on),m({className:"visible-xs"},e.starts_on)))),h({className:"col-sm-2 hidden-xs"},g({className:"text-right"},"Current Time",p({}),l.time_now)),h({className:"col-xs-12"},h({className:"row"},h({className:"col-xs-12"},i({competition:t,draws:e.draws,day:e,draw:s,changeDraw:this.changeDraw}),o({competition:t,draws:e.draws,day:e,draw:s}),b({},"LSFE: Last shot in the first end"))))))}}),u=React.createClass({getInitialState:function(){return{scoreboard:null,days:[]}},drawChanged:function(){return this.props.fixLinks()},loadDataFromServer:function(){return jQuery.ajax({url:this.props.url,dataType:"jsonp",cache:!0,success:function(t){return function(e){var n,o,i,r,s,a,l,u,c,p,d;for(o=[],l=-1,r=0,d=e.draws,s=c=0,p=d.length;p>c;s=++c)i=d[s],n=o[o.length-1]||null,n&&(a=n.day),a!==i.starts_at_day&&(u={day:i.starts_at_day,draws:[],date:i.starts_at_date,id:r,starts_on:i.starts_on,starts_at_timestamp:i.starts_at_timestamp},o.push(u),l=o.length-1,r++),o[l].draws.push(i);return t.setState({scoreboard:e,days:o}),setTimeout(t.loadDataFromServer,t.props.pollInterval)}}(this)})},componentWillMount:function(){return this.loadDataFromServer()},componentDidUpdate:function(){return this.props.fixLinks()},componentDidMount:function(){return this.props.fixLinks()},render:function(){var e,n,o,i;return null==this.state.scoreboard?h({className:"row"},h({className:"col-xs-12"},"Loading Scoreboard...")):(n=this.props.pathPrefix,i=this.state,e=i.days,o=i.scoreboard,t({competition:this.props.competition,days:e,scoreboard:o,pathPrefix:n,drawChanged:this.drawChanged}))}}),window.CurlcastScoreboard=u}.call(this),function(){var t,e,n,o,i,r,s,a,l,u,c,p,d,h,f,m,g,v,y,b,C,P,x,E,_,w,D,j,S,M,O,T,R;M=React.DOM,m=M.div,C=M.span,f=M.a,O=React.DOM,b=O.ol,S=O.ul,y=O.li,T=React.DOM,P=T.table,D=T.thead,j=T.tr,w=T.th,x=T.tbody,E=T.td,_=T.tfoot,R=React.DOM,g=R.h1,v=R.h6,p=React.createClass({render:function(){var t;return t="",this.props.active===!0&&(t="active"),y({className:t},f({href:this.props.draw.game_url},"Draw "+this.props.draw.label+", "+this.props.draw.start_at_hour))}}),d=React.createClass({render:function(){var t;return t="",this.props.active===!0&&(t="active"),y({className:t},f({href:this.props.game.boxscore_url},this.props.game.display_name))}}),h=React.createClass({render:function(){var t,e,n,o,i;return i=this.props,o=i.scoreboard_url,n=i.draws,t=i.active_draw,e=i.active_game,null==t||null==e?C({},"Waiting for navigation data..."):b({className:"breadcrumb"},y({},f({href:o||"#"},"Scores")),y({className:"dropdown hidden-xs"},f({href:t.game_url},"Draw "+t.label+", "+t.start_at_hour),f({href:"#",className:"dropdown-toggle","data-toggle":"dropdown"},C({className:"caret"})),S({className:"dropdown-menu",role:"menu"},n.map(function(e){return p({key:e.id,draw:e,active:e.id===t.id})}))),y({className:"dropdown active"},""+e.display_name,f({href:"#",className:"dropdown-toggle","data-toggle":"dropdown"},C({className:"caret"})),S({className:"dropdown-menu",role:"menu"},t.games.map(function(t){return d({key:t.id,game:t,active:t.id===e.id})}))))}}),i=React.createClass({render:function(){var t,e,n,o,i,r,s,a,l,u,c,p,d,h,m;if(h=this.props,o=h.game,a=h.position,n=h.ends,r="",a.first_hammer===!0&&(r="*"),e=a.end_scores||[],c="",i="final"===o.state.toLowerCase(),null!=a.end_scores)for(c=0,p=0,d=e.length;d>p;p++)t=e[p],c+=parseInt(t.score)||0,null==t.score?i===!0&&(t.score="X"):t.score=t.score.toString();return u="00:00",s=Math.floor(a.time_remaining/60)+"",l=a.time_remaining-60*s,10>l&&(l="0"+l),u=""+s+":"+l,j({},E({},null!=a.team?f({href:a.team.url||"#team-url"},C({className:"hidden-xs"},a.team.name),C({className:"visible-xs"},a.team.short_name)):"TBD"),E({className:"lsfe"},r),function(){m=[];for(var t=0,e=n-1;e>=0?e>=t:t>=e;e>=0?t++:t--)m.push(t);return m}.apply(this).map(function(t,n){return E({key:n,className:"end-score"},e[t].score)}),E({className:"total"},c),E({className:"time-remaining"},u))}}),o=React.createClass({render:function(){var t,e,n,o,r,s;return null==this.props.draw?C({},"Loading Scores..."):(r=this.props,t=r.competition,n=r.game,e=r.draw,o=Math.max(t.number_of_ends||(n.positions[0].end_scores||[]).length,(n.positions[1].end_scores||[]).length),m({className:"jumbotron"},m({className:"row"},m({className:"col-xs-12 text-center"},v({},this.props.draw.starts_at))),m({className:"row spacer"}),m({className:"row"},m({className:"col-xs-12"},m({className:"table-responsive"},P({className:"table table-bordered table-condensed"},D({},j({},w({},n.name),w({className:"lsfe"},C({className:"hidden-xs"},"LSFE")),function(){s=[];for(var t=1;o>=1?o>=t:t>=o;o>=1?t++:t--)s.push(t);return s}.apply(this).map(function(t,e){return w({className:"end-score",key:e},""+t)}),w({className:"total"},C({className:"hidden-xs"},"TOT"),C({className:"visible-xs"},"T")),w({className:"time-remaining"},C({className:"visible-xs"},""),C({className:"hidden-xs"},"Time")))),null!=n.positions?x({},i({position:n.positions[0],ends:o,game:n}),i({position:n.positions[1],ends:o,game:n})):void 0))))))}}),u=React.createClass({render:function(){return j({},E({},this.props.athlete.name),E({},this.props.athlete.position),E({className:"hidden-xs"},this.props.athlete.delivery))}}),l=React.createClass({render:function(){var t;return t=this.props.team,m({className:"col-sm-6 col-xs-12"},P({className:"table table-bordered table-condensed table-striped"},D({},j({},w({colSpan:"3"},t.name)),j({},w({},"Athlete"),w({width:"35%"},"Position"),w({className:"hidden-xs",width:"25%"},"Delivery"))),x({},t.athletes.map(function(t){return u({key:t.id,athlete:t})}))))}}),c=React.createClass({render:function(){var t;return t=this.props.positions,m({className:"row"},m({className:"col-xs-12"},g({},"Team Rosters")),null!=t?t.map(function(t){return null!=t.team&&t.team.athletes.length>0?l({key:t.team.id,team:t.team}):void 0}):C({},"Loading positions..."))}}),n=React.createClass({render:function(){var t;return t=this.props.team,x({},j({},E({rowSpan:"2"},C({className:"hidden-xs"},t.name),C({className:"visible-xs"},t.short_name)),E({rowSpan:"2"},t.games_started||0),E({rowSpan:"2"},t.number_of_ends||0),E({},"For"),E({},t.lsfe_for||0),E({},t.blank_ends_for||0),E({},t.ends_for_with_points_1||0),E({},t.ends_for_with_points_2||0),E({},t.ends_for_with_points_3||0),E({},t.ends_for_with_points_4||0),E({},t.ends_for_with_points_gt_4||0),E({},t.ends_for_total_points||0),E({},t.games_for_average_points||0)),j({},E({},"Against"),E({},t.lsfe_against||0),E({},t.blank_ends_against||0),E({},t.ends_against_with_points_1||0),E({},t.ends_against_with_points_2||0),E({},t.ends_against_with_points_3||0),E({},t.ends_against_with_points_4||0),E({},t.ends_against_with_points_gt_4||0),E({},t.ends_against_total_points||0),E({},t.games_against_average_points||0)))}}),e=React.createClass({render:function(){var t;return t=this.props.teams,m({className:"row"},m({className:"col-xs-12"},g({},"Scoring Analysis")),m({className:"col-xs-12"},m({className:"table-responsive"},P({className:"table table-bordered table-condensed table-striped table-hover"},D({},j({},w({},"Team"),w({},"Games"),w({},"Ends"),w({}),w({},"LSFE"),w({},"Blank Ends"),w({},"1pt"),w({},"2pt"),w({},"3pt"),w({},"4pt"),w({},">4pt"),w({},"Tot"),w({},"Avg"))),t.map(function(t){return n({key:t.id,team:t})})))))}}),a=React.createClass({render:function(){var t,e;return t=this.props.athlete,e={position:"",name:"",statistics:{shot_count:"",total_actual:"",percentage:""}},t||(t=e),j({},E({},t.name),E({},t.position),E({},t.statistics.shot_count),E({},t.statistics.total_actual),E({},t.statistics.percentage))}}),s=React.createClass({matchTeamPositionsFromBothTeams:function(){var t,e,n,o,i,r,s,a,l,u;for(l=this.props.teams,e={team:l[0],counter:0},a={team:l[1],counter:0},s=["Fourth","Third","Second","Lead"],o=[],n=Math.max(e.team.athletes.length,a.team.athletes.length),t=u=0;n>=0?n>u:u>n;t=n>=0?++u:--u)if(i=r=-1,e.team.athletes.length>e.counter&&(i=s.indexOf(e.team.athletes[e.counter].position)),a.team.athletes.length>a.counter&&(r=s.indexOf(l[1].athletes[a.counter].position)),i===r&&i>=0)o.push([e.team.athletes[e.counter],a.team.athletes[a.counter]]),e.counter++,a.counter++;else if(i>r)o.push([e.team.athletes[e.counter],null]),e.counter++;else{if(!(r>i))break;o.push([null,a.team.athletes[a.counter]]),a.counter++}return o},totalTeamScore:function(t){var e,n,o,i,r;for(n={shots:0,points:0,percentage:0},r=this.props.teams[t].athletes,o=0,i=r.length;i>o;o++)e=r[o],n.shots+=e.statistics.shot_count||0,n.points+=e.statistics.total_actual||0;return n.shots>0&&(n.percentage=Math.round(n.points/(4*n.shots)*100)),n},render:function(){var t,e;return e=this.props.teams,t=this.matchTeamPositionsFromBothTeams(),m({className:"row"},m({className:"col-xs-12"},g({},"Shooting Percentages")),[0,1].map(function(n){return function(o){var i;return i=n.totalTeamScore(o),m({key:o,className:"col-xs-12 col-sm-6"},m({className:"table-responsive"},P({className:"table table-bordered table-condensed table-hover"},D({},j({},w({colSpan:5},e[o].name)),j({},w({},"Athlete"),w({},"Position"),w({},"Shots"),w({},"Pts"),w({},"%"))),x({},t.map(function(t,e){return a({key:e,athlete:t[o]})})),_({},j({},w({colSpan:2},"Team Total"),E({},i.shots),E({},i.points),E({},""+i.percentage+"%"))))))}}(this)))}}),r=React.createClass({componentDidMount:function(){},render:function(){var t,n,i,r,a,l,u,p,d,f,g,v,y,b,C,P,x,E,_,w;for(x=this.props,p=x.navigation,a=x.draws,n=x.competitions,t=x.competition,r=u=null,E=this.props.draws,g=0,b=E.length;b>g;g++)for(i=E[g],_=i.games,v=0,C=_.length;C>v;v++)if(l=_[v],null!=l.active){r=i,u=l;break}if(f=[],null==u)return m({className:"row"},m({className:"col-xs-12"},"Loading Boxscore..."));for(w=u.positions,y=0,P=w.length;P>y;y++)d=w[y],f.push(d.team);return m({className:"row"},m({className:"col-xs-12"},h({scoreboard_url:p.scoreboard,draws:a,active_draw:r,active_game:u}),o({draw:r,game:u,competition:t}),null!=u.positions[0].team&&null!=u.positions[1].team?c({positions:u.positions}):void 0,null!=u.positions[0].team&&null!=u.positions[1].team?e({teams:f}):void 0,u.shot_by_shot===!0?s({teams:f}):void 0))}}),t=React.createClass({getInitialState:function(){return{game:null,draws:[]}},loadDataFromServer:function(){return jQuery.ajax({url:this.props.url,dataType:"jsonp",cache:!0,success:function(t){return function(e){return t.setState({game:e,draws:e.draws,draw_games:e.draw_games}),setTimeout(t.loadDataFromServer,t.props.pollInterval)}}(this)})},componentWillMount:function(){return this.loadDataFromServer()},componentDidUpdate:function(){return this.props.fixLinks()},render:function(){var t,e,n,o;return null==this.state.game?m({className:"row"},m({className:"col-xs-12"},"Loading Boxscore...")):(n=this.props.pathPrefix,o=this.state,e=o.game,t=o.draws,r({draws:t,competition:this.props.competition,navigation:this.props.navigation}))}}),window.CurlcastBoxScore=t}.call(this),function(){var t,e,n,o,i,r,s,a,l,u,c,p,d,h,f,m,g,v,y;v=React.DOM,u=v.nav,s=v.div,r=v.button,c=v.span,i=v.a,a=v.form,l=v.input,y=React.DOM,p=y.table,m=y.thead,g=y.tr,f=y.th,d=y.tbody,h=y.td,o=React.createClass({cancelSubmission:function(t){return t.preventDefault(),!1},setFilter:function(){var t;return t={search:{q:this.refs.search.getDOMNode().value},"utf-8":this.refs.utf8.getDOMNode().value},this.props.changeFilter(t)},filterChanged:function(){return null!=this.props.timeout&&clearTimeout(this.props.timeout),this.props.timeout=setTimeout(this.setFilter,1e3)},componentWillMount:function(){return this.props.timeout=null},render:function(){return a({className:"simple_form search",onSubmit:this.cancelSubmission},s({style:{display:"none"}},l({name:"utf8",type:"hidden",value:"\u2713",ref:"utf8"})),s({className:"form-group string optional search_q"},l({className:"string optional form-control",ref:"search",placeholder:"Search Competitions",autoComplete:"off",type:"text",onChange:this.filterChanged})))}}),e=React.createClass({render:function(){var t;return t=this.props.competition,g({},h({},i({href:t.url},t.title)),h({},t.location),h({},t.occurs))}}),n=React.createClass({render:function(){return s({className:"table-responsive"},p({className:"table table-bordered table-striped"},m({},g({},f({},"Competition"),f({},"Location"),f({},"Occurs"))),d({},this.props.competitions.map(function(t){return e({key:t.id,competition:t})}))))}}),t=React.createClass({getInitialState:function(){return{competitions:null,search:null}},changeFilter:function(t){return t!==window.undefined?(this.setState({search:t}),this.loadDataFromServer()):void 0},loadDataFromServer:function(){return jQuery.ajax({url:this.props.url,type:"GET",data:this.state.search,dataType:"jsonp",cache:!0,jsonpCallback:"curlcastJSONP",success:function(t){return function(e){return t.setState({competitions:e.competitions})}}(this)})},componentWillMount:function(){return this.loadDataFromServer()},fixLinks:function(){var t;return t=this.props.pathPrefix,jQuery(this.getDOMNode()).find("a").each(function(){var e,n,o,i;if(o=jQuery(this).attr("href"),null!=o&&"/stats/organizations/"===o.substr(0,21)){for(n=o.substr(1).split("/"),e=i=0;2>=i;e=++i)n.shift();return n.unshift(t),jQuery(this).attr("href",n.join("/"))}})},componentDidUpdate:function(){return this.fixLinks()},render:function(){return null==this.state.competitions?s({className:"col-xs-12"},"Loading competition list..."):s({className:"col-xs-12"},o({changeFilter:this.changeFilter}),n({competitions:this.state.competitions}))}}),window.CurlcastCompetitions=t}.call(this),function(){var t,e,n,o,i,r,s,a,l,u,c,p,d,h,f,m,g,v,y,b,C,P,x;P=React.DOM,c=P.div,C=P.ul,d=P.li,u=P.a,h=P.p,p=React.DOM.h4,x=React.DOM,f=x.table,y=x.thead,b=x.tr,v=x.th,m=x.tbody,g=x.td,o=React.createClass({render:function(){var t;return t=this.props.position,c({className:"game-team-name"},t.team.short_name.split().slice(0,11).join(""))}}),n=React.createClass({popoverHtml:function(){var t,e,n;return t=this.props.game,e="Not yet scheduled",null!=t.draw&&(e="Draw "+t.draw.label+", "+t.draw.starts_at_formatted),n=[],null!=t.winner_to&&n.push("Winner to "+t.winner_to.game.name),null!=t.loser_to&&n.push("Loser to "+t.loser_to.game.name),n=n.join(", "),"<div class='game-positions'>"+t.game_positions.map(function(t){return"<div class='game-position game-position-result-"+t.result+"'><div class='game-position-name'>"+t.team.short_name+"</div></div>"}).join("")+"</div><div class='game-date'>"+e+"</div><div class='game-moves-to'>"+n+"</div>"},popOver:function(){return jQuery(this.refs.container.getDOMNode()).popover({trigger:"hover",placement:"top",container:jQuery(jQuery(this).parent(".tab-content")[0]).parent(".row")[0],html:!0,template:"<div class='popover game-popover' style='z-index:99999;'><div class='arrow'></div><div class='popover-content'></div></div>",content:this.popoverHtml()})},componentDidMount:function(){return this.popOver()},componentDidUpdate:function(){return this.popOver()},render:function(){var t,e,n,i,r;return r=this.props,n=r.group,t=r.game,i=r.zoom_factor,e={id:t.id,"data-group":t.group_id,className:"game game-state-"+t.state,style:{left:Math.round(t.x*i.x)+"px",top:Math.round((t.y-n.y)*i.y)+"px"},"data-top-connecting-input":t.top_connecting_input.id,"data-top-connecting-input-group":t.top_connecting_input.group_id,"data-top-connecting-input-result":t.top_connecting_input.result,"data-bottom-connecting-input":t.bottom_connecting_input.id,"data-bottom-connecting-input-group":t.bottom_connecting_input.group_id,"data-bottom-connecting-input-result":t.bottom_connecting_input.result,ref:"container"},c(e,c({className:"game-name"},t.name.split().slice(0,7).join("")),t.game_positions.map(function(t,e){return o({key:e,position:t})}))}}),i=React.createClass({render:function(){var t,e,o,i;return i=this.props,t=i.group,o=i.zoom_factor,e={},t.games.length>0&&(e={height:Math.round((this.props.group.games[this.props.group.games.length-1].y+200-t.y)*o.y)+"px"}),c({className:"bracket-group",id:t.id,style:e},1!==this.props.bracket.groups.length?p({className:"group-name"},t.name||"A Event"):void 0,t.games.map(function(){return function(e){return n({key:e.id,group:t,game:e,zoom_factor:o})}}(this)))}}),e=React.createClass({getInitialState:function(){return{zoom_factor:{x:.8,y:.55}}},render:function(){return c({className:"row"},c({className:"col-xs-12"},h({},"Mouse-over or tap on a game below to view game details."),this.props.round.groups.length>1?C({className:"pagination"},this.props.round.groups.map(function(t,e){return d({key:e},u({href:"#"+t.id},t.name||"A Event"))})):void 0,this.props.round.groups.map(function(t){return function(e,n){return i({key:n,bracket:t.props.round,group:e,zoom_factor:t.state.zoom_factor})}}(this))))}}),s=React.createClass({render:function(){return c({className:"row"},c({className:"col-sm-6"},p({},this.props.round.name),f({className:"table table-bordered table-condensed"},y({},b({},v({},"Team"),v({className:"round-robin-won"},"W"),v({className:"round-robin-lost"},"L"))),m({},this.props.round.teams.map(function(t,e){return b({key:e},g({},t.team_name),g({className:"round-robin-win"},t.games_won),g({className:"round-robin-lost"},t.games_lost))})))))}}),r=React.createClass({render:function(){var t;return t="","bracket"===this.props.round.type&&(t=" bracket"),this.props.isActive(this.props.round)===!0&&(t+=" active in"),c({className:"tab-pane fade"+t,id:this.props.id},c({className:"row"},c({className:"col-xs-12",style:{height:"1em"}})),"round_robin"===this.props.round.type?s(this.props):e(this.props))}}),a=React.createClass({propogateTab:function(){return this.props.setActive(this.props.round.type,this.props.round.id)},render:function(){return d({className:this.props.isActive(this.props.round)===!0?"active":""},u({href:this.props.href,"data-toggle":"tab",onClick:this.propogateTab},this.props.round.name))}}),l=React.createClass({render:function(){var t;return t=this.props.rounds,c({className:"col-xs-12"},C({className:"nav nav-tabs",role:"tablist"},t.map(function(t){return function(e,n){return a({key:"tab-"+e.type+"-"+e.id,href:"#tab"+(n+1),round:e,setActive:t.props.setActive,isActive:t.props.isActive})}}(this))),c({className:"tab-content"},t.map(function(t){return function(e,n){return r({key:"pane-"+e.type+"-"+e.id,round:e,id:"tab"+(n+1),isActive:t.props.isActive})}}(this))))}}),t=React.createClass({getInitialState:function(){return{active:null,rounds:null}},updateActive:function(t){var e;return null==t&&(t=this.state.rounds),e=this.state.active,null!=e&&null!=e.type&&null!=e.id?e:t.length>0?{type:t[0].type,id:t[0].id}:null},isActive:function(t){var e;return e=this.updateActive(),null==t||null==e?!1:t.type===e.type&&t.id===e.id?!0:!1},getActive:function(){var t,e,n,o,i;if(t=this.updateActive(),null==t)return null;for(i=this.state.rounds,n=0,o=i.length;o>n;n++)if(e=i[n],e.type===t.type&&e.id===t.id)return e;return this.state.active=null,this.getActive()},setActive:function(t,e){return this.setState({active:{type:t,id:e}})
},doPlumbing:function(){var t;return t=function(t,e){var n,o,i;return t.attr("data-"+e+"-connecting-input")&&t.attr("data-group")===t.attr("data-"+e+"-connecting-input-group")?(n=jsPlumb.getInstance(),n.importDefaults({Connector:"Flowchart"}),o=null!=(i="W"===t.attr("data-"+e+"-connecting-input-result"))?i:{.25:.75},n.connect({source:t.attr("id"),target:t.attr("data-"+e+"-connecting-input"),endpoint:"Blank",anchors:[[0,.5,-1,0],[1,.5,1,0]],paintStyle:{strokeStyle:"#ccc",lineWidth:1}})):void 0},jQuery("a[data-toggle='tab']").on("shown.bs.tab",function(e){var n;return n=jQuery(jQuery(e.target).attr("href")),n.find(".game").each(function(){var e;return e=jQuery(this),t(jQuery(this),"top"),t(jQuery(this),"bottom")})}),jQuery("a[data-toggle='tab']").first().trigger("shown.bs.tab")},loadDataFromServer:function(){return jQuery.ajax({url:this.props.url,dataType:"jsonp",cache:!0,success:function(t){return function(e){var n;return n=[],e.round_robins.map(function(t,e){var o;return o=t,o.type="round_robin",o.index=e+1,n.push(o)}),e.brackets.map(function(t,o){var i;return i=t,i.type="bracket",i.index=e.round_robins.length+o+1,n.push(i)}),t.setState({rounds:n,active:t.updateActive(n)}),setTimeout(t.loadDataFromServer,t.props.pollInterval)}}(this)})},componentWillMount:function(){return this.loadDataFromServer()},componentDidUpdate:function(){return this.props.fixLinks(),this.doPlumbing()},componentDidMount:function(){return this.doPlumbing()},render:function(){var t,e;return t=this.props.pathPrefix,e=this.state.rounds,null==e?c({},"Loading Standings..."):c({className:"row"},l({rounds:e,isActive:this.isActive,setActive:this.setActive}))}}),window.CurlcastStandings=t}.call(this),function(){var t,e,n,o,i,r,s,a,l,u,c,p,d,h,f,m,g,v,y,b,C,P,x,E,_,w,D,j,S,M,O;j=React.DOM,d=j.div,C=j.p,c=j.a,g=j.hr,v=j.img,p=j.br,S=React.DOM,P=S.table,w=S.thead,x=S.tbody,D=S.tr,E=S.td,_=S.th,M=React.DOM,m=M.h6,f=M.h4,h=M.h3,O=React.DOM,b=O.ol,y=O.li,r=React.createClass({showTeamIndex:function(){return this.props.showTeam(null)},render:function(){return b({className:"breadcrumb"},y({},c({href:"#",onClick:this.showTeamIndex},"Teams")),y({className:"active"},this.props.team.name))}}),o=React.createClass({render:function(){var t,e;return e=this.props.team_athlete,t=e.position,null!=e.role&&(t=e.role+", "+t),d({className:"col-xs-6 col-sm-3 col-md-2"},v({src:this.props.absoluteUrl(e.athlete.photo_url),width:105,height:105}),d({className:"caption"},C({},e.athlete.last_first,p({}),""+t)))}}),i=React.createClass({render:function(){return d({className:"col-xs-12"},d({className:"row"},this.props.team_athletes.map(function(t){return function(e){return o({key:e.id,team_athlete:e,absoluteUrl:t.props.absoluteUrl})}}(this))))}}),a=React.createClass({render:function(){var t,e,n;return t=this.props.game,n=t.game_positions[0].team_id===this.props.team.id?0:1,e=1===n?0:1,D({},E({},t.draw.label),E({},t.draw.starts_at),E({},t.result),E({},""+(t.game_positions[n].total||"")+" - "+(t.game_positions[e].total||"")),E({className:"hidden-xs"},t.game_positions[e].name))}}),s=React.createClass({render:function(){return P({className:"table table-bordered table-condensed"},w({},D({},_({},"Draw"),_({},"Started at"),_({},"Result"),_({},"Score"),_({className:"hidden-xs"},"Opponent"))),x({},this.props.games.map(function(t){return function(e){return a({key:e.id,game:e,team:t.props.team})}}(this))))}}),l=React.createClass({render:function(){var t;return t=this.props.team,P({className:"table table-bordered table-condensed"},w({},D({},_({},"Games"),_({className:"hidden-xs"},"Ends"),_({}),_({className:"hidden-xs"},"LSFE"),_({className:"hidden-xs"},"Blank Ends"),_({className:"hidden-xs"},"1pt"),_({className:"hidden-xs"},"2pt"),_({className:"hidden-xs"},"3pt"),_({className:"hidden-xs"},"4pt"),_({className:"hidden-xs"},">4pt"),_({},"Tot"),_({className:"hidden-xs"},"Avg"))),x({},D({},E({rowSpan:"2"},t.games_started),E({rowSpan:"2",className:"hidden-xs"},t.number_of_ends),E({},"For"),E({className:"hidden-xs"},t.lsfe_for),E({className:"hidden-xs"},t.blank_ends_for),E({className:"hidden-xs"},t.ends_for_with_1pt),E({className:"hidden-xs"},t.ends_for_with_2pt),E({className:"hidden-xs"},t.ends_for_with_3pt),E({className:"hidden-xs"},t.ends_for_with_4pt),E({className:"hidden-xs"},t.ends_for_with_gt_4pt),E({},t.ends_for_total_points),E({className:"hidden-xs"},t.games_for_average_points)),D({},E({},"Against"),E({className:"hidden-xs"},t.lsfe_against),E({className:"hidden-xs"},t.blank_ends_against),E({className:"hidden-xs"},t.ends_against_with_1pt),E({className:"hidden-xs"},t.ends_against_with_2pt),E({className:"hidden-xs"},t.ends_against_with_3pt),E({className:"hidden-xs"},t.ends_against_with_4pt),E({className:"hidden-xs"},t.ends_against_with_gt_4pt),E({},t.ends_against_total_points),E({className:"hidden-xs"},t.games_against_average_points))))}}),n=React.createClass({render:function(){return d({className:"row"},d({className:"col-xs-12"},r({team:this.props.team,showTeam:this.props.showTeam})),d({className:"col-xs-12"},h({},this.props.team.name),i({team_athletes:this.props.team.team_athletes,absoluteUrl:this.props.absoluteUrl}),g({}),h({},"Team Scores"),s({games:this.props.team.games,team:this.props.team}),h({},"Scoring Analysis"),l({team:this.props.team})))}}),e=React.createClass({showTeam:function(){return this.props.showTeam(this.props.absoluteUrl(this.props.team.url)+".js")},render:function(){var t;return t=this.props.team,D({},E({},c({href:"#!"+t.url,onClick:this.showTeam},t.name)),E({},t.coach||""),E({},t.affliliation),E({},t.location))}}),t=React.createClass({render:function(){return P({className:"table table-bordered table-condensed"},w({},D({},_({},"Team Name"),_({},"Coach"),_({},"Affliation"),_({},"Location"))),x({},this.props.teams.map(function(t){return function(n){return e({key:n.id,team:n,showTeam:t.props.showTeam,absoluteUrl:t.props.absoluteUrl})}}(this))))}}),u=React.createClass({getInitialState:function(){return{teams:null,team:null,base_url:null}},baseUrl:function(){return this.props.url.substr(0,this.props.url.indexOf("/",8))},loadDataFromServer:function(){return null==this.state.base_url&&this.setState({base_url:this.baseUrl()}),jQuery.ajax({url:this.props.url,dataType:"jsonp",cache:!0,success:function(t){return function(e){return t.setState({teams:e}),setTimeout(t.loadDataFromServer,t.props.pollInterval)}}(this)})},absoluteUrl:function(){var t,e,n,o,i,r,s;if(!(arguments.length>0))return this.state.base_url;for(t=[],n=r=0,s=arguments.length-1;s>=0?s>=r:r>=s;n=s>=0?++r:--r)t.push(arguments[n]);return o=t.join("/"),e=this.baseUrl(),i="",0!==o.toLowerCase().indexOf(e.toLowerCase())&&(i=e),i+o},showTeam:function(t){return null==t&&(t=null),null!=t?jQuery.ajax({url:t,dataType:"jsonp",cache:!0,success:function(t){return function(e){return t.setState({team:e})}}(this)}):this.setState({team:null})},parseUrl:function(){return window.location.hash&&"!"===window.location.hash[1]?this.showTeam(this.absoluteUrl(window.location.hash.substr(2)+".js")):void 0},componentWillMount:function(){return this.loadDataFromServer(),this.parseUrl()},componentDidMount:function(){return this.props.fixLinks()},componentDidUpdate:function(){return this.props.fixLinks()},render:function(){return null==this.state.teams?d({className:"row"},d({className:"col-xs-12"},"Loading Teams...")):null===this.state.team?t({teams:this.state.teams,showTeam:this.showTeam,absoluteUrl:this.absoluteUrl}):n({team:this.state.team,teams:this.state.teams,showTeam:this.showTeam,absoluteUrl:this.absoluteUrl})}}),window.CurlcastTeams=u}.call(this);