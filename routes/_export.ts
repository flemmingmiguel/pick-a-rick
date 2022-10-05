// Re-imports route modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.
// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
var g=Object.defineProperty;var e=(t,r)=>{for(var c in r)g(t,c,{get:r[c],enumerable:!0})};var a={};e(a,{ButtonCool:()=>x,default:()=>y});import{escape as o}from"solid-js/web";import{createComponent as i}from"solid-js/web";import{ssr as f}from"solid-js/web";import{ssrHydrationKey as u}from"solid-js/web";import{createSignal as K,Suspense as R}from"solid-js";import{client as C}from"~/utils/urql/client.ts";import"solid-js/web";import{ssrAttribute as h}from"solid-js/web";import{escape as s}from"solid-js/web";import{createComponent as $}from"solid-js/web";import{ssr as l}from"solid-js/web";import{ssrHydrationKey as d}from"solid-js/web";import{For as w}from"solid-js/web";var k=["<div",' class="flex flex-wrap items-center mx-auto">',"</div>"],b=["<div",' class="w-full max-w-sm bg-white m-4 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 "><a href="#"><img class="p-8 rounded-t-lg"',' alt="product image"></a><div class="px-5 pb-5"><a href="#"><h5 class="text-2xl font-black tracking-tight text-gray-900 dark:text-white">',"</h5></a></div></div>"];var p=({data:t})=>l(k,d(),s($(w,{each:t,children:r=>l(b,d(),h("src",s(r.image,!0),!1),s(r.name))})));var H=["<div",' class="rounded-full bg-white text-gray-400 font-semibold px-4 py-2">is this a button</div>'],A=["<div",' class="h-screen w-screen text-white text-8xl font-black text-center pt-40 justify-center items-center bg-gray-600 flex-rows "><div>this is the pick-a-rick finally</div><!--#-->',"<!--/--><div><!--#-->",'<!--/-->h</div><div>creating a meta-framework</div><div><div class="bg-gray-500 h-full font-black text-white text-4xl  flex items-center justify-center flex-col">',"</div></div></div>"];function x(){return f(H,u())}var P=()=>C.query(`{
      characters(filter: {name: "rick"}) {
        results {
          name
          image
          location {
            name
          }
        }
      }
    }`,{}).toPromise().then(t=>t),D=await P();function y(){let[t,r]=K(0);return f(A,u(),o(i(x,{})),o(t()),o(i(R,{get children(){return i(p,{get data(){return D.data.characters.results}})}})))}var n={};e(n,{default:()=>_});import{ssr as E}from"solid-js/web";import{ssrHydrationKey as F}from"solid-js/web";var L=["<div",">Ruuuuut</div>"];function _(){return E(L,F())}var m={};e(m,{default:()=>v});import{ssr as j}from"solid-js/web";import{ssrHydrationKey as N}from"solid-js/web";var S=["<div",">New DF</div>"];function v(){return j(S,N())}var nt={"/":a,"/rut":n,"/:df+":m,depGraph:{"modules":[{"specifier":"./routes/index.tsx","deps":[{"specifier":"./components/rickton.tsx"}]},{"specifier":"./routes/rut.tsx"},{"specifier":"./routes/[...df].tsx"},{"specifier":"./components/rickton.tsx"}]}};export{nt as default};
