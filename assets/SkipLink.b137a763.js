import{f as a,j as c,k as p,l as w,h as o}from"./app.f46207d0.js";var k=a({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(i){const l=c(),t=p();w(()=>l.path,()=>t.value.focus());const r=({target:s})=>{const e=document.querySelector(s.hash);if(e){const n=()=>{e.removeAttribute("tabindex"),e.removeEventListener("blur",n)};e.setAttribute("tabindex","-1"),e.addEventListener("blur",n),e.focus(),window.scrollTo(0,0)}};return()=>[o("span",{ref:t,tabindex:"-1"}),o("a",{href:`#${i.content}`,class:"skip-link sr-only",onClick:r},"Skip to content")]}});export{k as S};