var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");function r(e,t){const n=Math.random()>.3;new Promise(((o,i)=>{n?o({position:e,delay:t}):i({position:e,delay:t})})).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:t,step:n,amount:o}}=e.currentTarget;!function(e,t,n){for(let o=0;o<n;o+=1){let n=e+t*o;setTimeout((()=>{r(o+1,n)}),n)}}(Number(t.value),Number(n.value),Number(o.value))}));
//# sourceMappingURL=03-promises.0f16d8f3.js.map