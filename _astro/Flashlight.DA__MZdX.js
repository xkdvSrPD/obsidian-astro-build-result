import{j as u}from"./jsx-runtime.BMN_4_xO.js";import{r as e}from"./index.CMQ3OGCn.js";function d(){const[s,n]=e.useState(0),[a,i]=e.useState(0),t=!window.matchMedia("(hover: hover)").matches;if(t)return null;const c=`radial-gradient(
    circle 16vmax at ${s}px ${a}px,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 80%,
    rgba(0, 0, 0, 0.8) 100%
  )`;return e.useLayoutEffect(()=>{const o=r=>{n(r.clientX),i(r.clientY)};return document.addEventListener("mousemove",o),()=>{document.removeEventListener("mousemove",o)}},[]),u.jsx("div",{className:"fixed inset-0 z-50 pointer-events-none",style:{backgroundImage:c,display:t?"none":"block"}})}export{d as Flashlight};
