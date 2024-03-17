"use strict";var e=require("react");!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===t&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}("body {\n    padding: 100px;\n    font-size: large;\n    text-align: left;\n}\n\nspan {\n    margin-left: 10px;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    :hover {\n        color: grey;\n    }\n}\n\n.star {\n    font-size: large;\n}\n.starActive {\n    color: red;\n}\n.starInactive {\n    color: #ccc;\n}\n\n.rating-secondary {\n    background-color: black;\n    color: white;\n    padding: 6px;\n}\n");exports.Button=n=>e.createElement("button",{disabled:n.disabled},n.children),exports.Rating=n=>{const t=Array.from({length:5},((e,n)=>n+1)),[r,a]=e.useState(0);return e.createElement("div",{className:`star-rating rating-${n.theme}`},e.createElement("h1",null,n.title),t.map(((t,o)=>{const s=t<=r?"starActive":"starInactive";return e.createElement("button",{disabled:n.disabled,"data-testid":`${n.idPrefix}-${o}`,key:t,className:`${s}`,onClick:()=>a(t)},e.createElement("span",{className:"star"},"★"))})))};
//# sourceMappingURL=index.js.map
