"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[57],{57:(e,s,t)=>{t.r(s),t.d(s,{default:()=>i});var n=t(43),r=t(213),a=t(579);const i=function(){const[e,s]=(0,n.useState)([]),[t,i]=(0,n.useState)(null),c=(0,n.useRef)([]),[l,u]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{(async()=>{try{const e=await r.A.get("http://localhost:3000/faqs.txt"),t=e.data.replace(/\r\n/g,"\n").trim().split(/\n\n+/).map((e=>{const s=e.split(/\nA: /);return{question:s[0].replace(/^Q: /,"").trim(),answer:s[1]?s[1].trim():""}})).filter((e=>e.question&&e.answer));s(t),u(!1)}catch(e){console.error("Error fetching FAQs:",e)}})();const e=setTimeout((()=>{u(!0)}),100);return()=>clearTimeout(e)}),[]),(0,a.jsx)("center",{children:(0,a.jsxs)("div",{className:"content",children:[(0,a.jsx)("h2",{children:"Frequently Asked Questions"}),(0,a.jsx)("div",{className:"faqs "+(l?"visible":""),children:e.map(((e,s)=>{var n;return(0,a.jsxs)("div",{className:"faq-item",onClick:()=>(e=>{i(t===e?null:e)})(s),children:[(0,a.jsx)("div",{className:"faq-question",children:(0,a.jsx)("h5",{children:e.question})}),(0,a.jsx)("div",{ref:e=>c.current[s]=e,className:"faq-answer",style:{maxHeight:t===s?`${null===(n=c.current[s])||void 0===n?void 0:n.scrollHeight}px`:0,opacity:t===s?1:0,transition:"max-height 0.3s ease, opacity 0.3s ease"},children:(0,a.jsx)("p",{children:e.answer})})]},s)}))})]})})}}}]);
//# sourceMappingURL=57.84ad4cf4.chunk.js.map