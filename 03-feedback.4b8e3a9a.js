function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",o=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,v="object"==typeof self&&self&&self.Object===Object&&self,d=s||v||Function("return this")(),m=Object.prototype.toString,g=Math.max,p=Math.min,b=function(){return d.Date.now()};function y(e,t,n){var o,r,a,u,f,l,c=0,s=!1,v=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function m(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function y(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function O(){var e=b();if(y(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-l);return v?p(n,a-(e-c)):n}(e))}function T(e){return f=void 0,d&&o?m(e):(o=r=void 0,u)}function w(){var e=b(),n=y(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(O,t),s?m(e):u}(l);if(v)return f=setTimeout(O,t),m(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=j(t)||0,h(n)&&(s=!!n.leading,a=(v="maxWait"in n)?g(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},w.flush=function(){return void 0===f?u:T(b())},w}function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&m.call(e)==r}(e))return o;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):u.test(e)?o:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return h(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:o,maxWait:t,trailing:r})};const O=document.querySelector(".feedback-form"),{email:T,message:w}=O.elements;O.addEventListener("input",e(t)((function(){const e={email:T.value,message:w.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500));const S=localStorage.getItem("feedback-form-state");S?(T.value=JSON.parse(S).email,w.value=JSON.parse(S).message):(T.value="",w.value=""),O.addEventListener("submit",(function(e){if(e.preventDefault(),(T.value.length&&w.value.length)<1)alert("Всі поля повинні бути заповнені!");else{const t={email:T.value,message:w.value};console.log(t),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}}));
//# sourceMappingURL=03-feedback.4b8e3a9a.js.map
