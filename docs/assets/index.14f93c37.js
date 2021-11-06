var e=Object.defineProperty,t=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(t,i,n)=>i in t?e(t,i,{enumerable:1,configurable:1,writable:1,value:n}):t[i]=n,o=(e,o)=>{for(var l in o||(o={}))i.call(o,l)&&r(e,l,o[l]);if(t)for(var l of t(o))n.call(o,l)&&r(e,l,o[l]);return e};import{h as l,s as a,a as s,t as u,o as c,f as d,G as p,b as m,c as b,d as f,g,e as h,i as y,j as v,I as w,A as z,k as x,l as O,u as k,R as j,r as L}from"./vendor.61d8d0f5.js";(()=>{const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:1,subtree:1})}function t(e){if(e.ep)return;e.ep=1;const t=(e=>{const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t})(e);fetch(e.href,t)}})();const P={};function E(e){return l((t=>e.apply(null,t)))}var C,R,S,A;function _(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function I(e,t,i,n,r){var o={};return Object.keys(n).forEach((e=>{o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=1),o=i.slice().reverse().reduce(((i,n)=>n(e,t,i)||i),o),r&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(r):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}E(((e,t)=>e+t)),E(((e,t)=>e+(t||1))),E(((e,t)=>e===t)),E(((e,t)=>e>t)),E(((e,t)=>e>=t)),E(((...e)=>Array.from(e))),C=e=>e,l(((e,t)=>C.apply(null,[Object.assign({},t)])));const D=E((e=>e?"font-bold":""));let N=a(u({id:"dgGwKyQd",block:'[[[1,"\\n  "],[10,0],[14,0,"grid grid-cols-4 gap-4"],[12],[1,"\\n    "],[10,0],[14,0,"col-span-1"],[12],[1,"\\n      "],[10,"ul"],[12],[1,"\\n"],[42,[30,0,["model"]],null,[[[1,"          "],[10,"li"],[14,0,"text-left hover:text-black underline bg-blue-100 rounded-md mb-2 mt-2 p-1"],[12],[1,"\\n            "],[10,3],[15,6,[29,["/users/",[30,1,["login"]]]]],[15,0,[28,[32,0],[[30,1,["isActive"]]],null]],[12],[1,[30,1,["login"]]],[13],[1,"\\n"],[41,[30,1,["canRemove"]],[[[1,"              "],[11,"button"],[24,0,"ml-2 float-right mt-1 font-mono text-sm"],[24,4,"button"],[4,[32,1],["click",[28,[32,2],[[30,0,["onRemove"]],[30,1,["login"]]],null]],null],[12],[1,"[X]"],[13],[1,"\\n"]],[]],null],[1,"          "],[13],[1,"\\n"]],[1]],null],[1,"      "],[13],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,0],[14,0,"col-span-3"],[12],[1,"\\n"],[41,[30,2],[[[1,"        "],[18,3,null],[1,"\\n"]],[]],[[[1,"\\n        "],[10,0],[14,0,"rounded-md bg-blue-50 p-4"],[12],[1,"\\n          "],[10,0],[14,0,"flex"],[12],[1,"\\n            "],[10,0],[14,0,"ml-3 flex-1 md:flex md:justify-between"],[12],[1,"\\n              "],[10,2],[14,0,"text-sm text-blue-700"],[12],[1,"\\n                No user selected\\n              "],[13],[1,"\\n            "],[13],[1,"\\n          "],[13],[1,"\\n        "],[13],[1,"\\n"]],[]]],[1,"    "],[13],[1,"\\n  "],[13],[1,"\\n  "]],["user","@hasChildren","&default"],false,["each","if","yield"]]',moduleName:"(unknown template module)",scope:()=>[D,c,d],isStrictMode:1}),(S=I((R=class extends p{constructor(...e){super(...e),_(this,"state",S,this),_(this,"router",A,this)}get model(){return Array.from(new Set([...this.state.users,...this.args.model])).map((e=>{var t;return{login:e,canRemove:!this.args.model.includes(e),isActive:(null==(t=this.router.activeRoute)?void 0:t.page.params.login)===e}}))}onRemove(e){this.state.removeUser(e),this.router.open("/users")}}).prototype,"state",[m],{configurable:1,enumerable:1,writable:1,initializer:null}),A=I(R.prototype,"router",[m],{configurable:1,enumerable:1,writable:1,initializer:null}),I(R.prototype,"onRemove",[s],Object.getOwnPropertyDescriptor(R.prototype,"onRemove"),R.prototype),R));var M,U,V,q,B,F=a(u({id:"HbWO2jPw",block:'[[[10,0],[14,0,"py-3 text-sm"],[12],[1,"\\n"],[42,[30,1],null,[[[1,"    "],[10,0],[14,0,"flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2"],[12],[1,"\\n      "],[10,1],[14,0,"bg-green-600 h-2 w-2 m-2 rounded-full min-w-[0.5rem]"],[12],[13],[1,"\\n      "],[10,0],[14,0,"grid w-full gap-2"],[12],[1,"\\n        "],[10,0],[14,0,"row text-left"],[12],[1,"\\n          "],[10,3],[14,0,"flex-grow font-mono px-2 text-left"],[14,"target","_blank"],[15,6,[29,["https://github.com/",[30,2,["login"]],"/",[30,2,["name"]]]]],[14,"rel","noopener noreferrer"],[12],[1,[30,2,["name"]]],[13],[1,"\\n        "],[13],[1,"\\n"],[41,[30,2,["description"]],[[[1,"          "],[10,0],[14,0,"row text-left"],[12],[1,"\\n            "],[10,0],[14,0,"pl-4 text-sm font-normal text-gray-500 tracking-wide"],[12],[1,[30,2,["description"]]],[13],[1,"\\n          "],[13],[1,"\\n"]],[]],null],[1,"      "],[13],[1,"\\n    "],[13],[1,"\\n"]],[2]],[[[1,"    "],[10,0],[14,0,"rounded-md bg-blue-50 p-4"],[12],[1,"\\n      "],[10,0],[14,0,"flex"],[12],[1,"\\n        "],[10,0],[14,0,"ml-3 flex-1 md:flex md:justify-between"],[12],[1,"\\n          "],[10,2],[14,0,"text-sm text-blue-700"],[12],[1,"\\n            no data to show\\n          "],[13],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n"]],[]]],[13]],["@model","repo"],false,["each","if"]]',moduleName:"(unknown template module)",scope:null,isStrictMode:1}),b("index","_index"));function H(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function $(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:1,configurable:1,writable:1}):e[t]=i,e}function G(e,t,i,n,r){var o={};return Object.keys(n).forEach((e=>{o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=1),o=i.slice().reverse().reduce(((i,n)=>n(e,t,i)||i),o),r&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(r):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}let T=(M=class{constructor(e){this.fn=e,H(this,"isLoading",U,this),H(this,"isError",V,this),H(this,"isLoaded",q,this),H(this,"Component",B,this),$(this,"_isLoaded",0),$(this,"_isLoading",0)}unloadComponent(){this.isLoaded=0,this._isLoaded=0}preload(){return this.loadComponent(),this}async loadComponent(){if(!this._isLoaded&&!this._isLoading)try{this.isError=0,this.isLoading=1,this._isLoading=1;const e=await this.fn();this.Component=e.default,this.isLoaded=1,this.isLoading=0,this._isLoaded=1}catch(e){this.isError=1}finally{this.isLoading=0,this._isLoading=0}}},U=G(M.prototype,"isLoading",[f],{configurable:1,enumerable:1,writable:1,initializer:()=>0}),V=G(M.prototype,"isError",[f],{configurable:1,enumerable:1,writable:1,initializer:()=>0}),q=G(M.prototype,"isLoaded",[f],{configurable:1,enumerable:1,writable:1,initializer:()=>0}),B=G(M.prototype,"Component",[f],{configurable:1,enumerable:1,writable:1,initializer:null}),M);const J=a(u({id:"Bt/8nmUy",block:'[[[1,"\\n  "],[41,[30,1],[[[1," "],[18,2,null],[1," "]],[]],null],[1,"\\n"]],["@hasChildren","&default"],false,["if","yield"]]',moduleName:"(unknown template module)",scope:null,isStrictMode:1}),b("NestedRouter","DefaultRoute"));class K extends p{get tail(){return this.parts.tail}get parts(){const[e,...t]=this.args.stack;return{head:e,tail:t}}get components(){var e;return null!=(e=this.args.components)?e:{}}get Component(){var e;return(null==(e=this.model)?void 0:e.component)||this.components[this.route]||J}get route(){return this.parts.head.name}get model(){return this.parts.head.data||{}}}a(u({id:"FPwAY6JJ",block:'[[[1,"\\n"],[41,[30,1,["length"]],[[[1,"        "],[8,[30,0,["Component"]],null,[["@route","@hasChildren","@model","@params"],[[30,0,["route"]],[30,0,["tail","length"]],[30,0,["model"]],[30,2]]],[["default"],[[[[1,"\\n          "],[8,[32,0],null,[["@components","@stack","@params"],[[30,0,["components"]],[30,0,["tail"]],[30,2]]],null],[1,"\\n        "]],[]]]]],[1,"\\n"]],[]],null],[1,"    "]],["@stack","@params"],false,["if"]]',moduleName:"(unknown template module)",scope:()=>[K],isStrictMode:1}),K);const X=a(u({id:"H5hYy8LP",block:'[[[1,"\\n"],[10,"section"],[14,0,"text-gray-600 body-font"],[12],[1,"\\n    "],[10,0],[14,0,"container px-5 py-24 mx-auto"],[12],[1,"\\n        "],[10,0],[14,0,"xl:w-1/2 lg:w-3/4 w-full mx-auto text-center"],[12],[1,"\\n            "],[18,1,null],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n"],[13],[1,"\\n"]],["&default"],false,["yield"]]',moduleName:"(unknown template module)",scope:null,isStrictMode:1}),b("AppContainer","AppContainer")),W=a(u({id:"nDOtM8nB",block:'[[[1,"\\n    "],[11,0],[24,0,"flex"],[17,1],[12],[1,"\\n        "],[10,0],[12],[1,"\\n            "],[10,3],[14,6,"/"],[12],[1,"\\n                "],[10,"img"],[14,"alt","GlimmerX"],[14,0,"w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"],[15,"src",[30,2]],[12],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"flex-grow"],[12],[1,"\\n            "],[11,"input"],[24,"placeholder","specify github username"],[24,0,"shadow mt-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"],[4,[32,0],["change",[30,3]],null],[12],[13],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n  "]],["&attrs","@logo","@updateValue"],false,[]]',moduleName:"(unknown template module)",scope:()=>[c],isStrictMode:1}),b("InputForm","InputForm"));var Y,Q,Z;function ee(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function te(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:1,configurable:1,writable:1}):e[t]=i,e}function ie(e,t,i,n,r){var o={};return Object.keys(n).forEach((e=>{o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=1),o=i.slice().reverse().reduce(((i,n)=>n(e,t,i)||i),o),r&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(r):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}const ne=a(u({id:"5bAKnGrX",block:'[[[1,"\\n    "],[10,"h1"],[14,0,"sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"],[12],[1,[30,1]],[13],[1,"\\n"]],["@title"],false,[]]',moduleName:"(unknown template module)",scope:null,isStrictMode:1}),b("App","Heading"));let re=a(u({id:"7dTDxB/O",block:'[[[1,"\\n        "],[8,[32,0],null,null,[["default"],[[[[1,"\\n            "],[8,[32,1],null,[["@title"],[[30,0,["title"]]]],null],[1,"\\n\\n            "],[8,[32,2],[[24,0,"mb-2"]],[["@logo","@updateValue"],[[30,0,["assets","logo"]],[30,0,["updateValue"]]]],null],[1,"\\n\\n            "],[8,[32,3],null,[["@components","@stack"],[[30,0,["components"]],[30,0,["router","stack"]]]],null],[1,"\\n\\n"],[41,[30,0,["Icon","isLoaded"]],[[[1,"                "],[8,[30,0,["Icon","Component"]],null,null,null],[1,"\\n"]],[]],[[[41,[30,0,["Icon","isLoading"]],[[[1,"                Loading...\\n"]],[]],[[[41,[30,0,["Icon","isError"]],[[[1,"                Loading error..\\n            "]],[]],null]],[]]]],[]]],[1,"        "]],[]]]]],[1,"\\n  "]],[],false,["if"]]',moduleName:"(unknown template module)",scope:()=>[X,ne,W,K],isStrictMode:1}),(Q=ie((Y=class extends p{constructor(...e){super(...e),te(this,"title","Hello, Holy!"),te(this,"assets",{logo:"/assets/glimmer-logo.658634d2.png"}),te(this,"components",{users:N,"users.user":F}),te(this,"Icon",new T((()=>{return e=()=>import("./LazyIcon.63c0e768.js"),(t=["assets/LazyIcon.63c0e768.js","assets/vendor.61d8d0f5.js"])&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in P)return;P[e]=1;const t=e.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${i}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e();var e,t}))),ee(this,"router",Q,this),ee(this,"state",Z,this)}updateValue(e){const t=e.target,i=t.value;this.state.addUser(i),t.value="","icon"===i?this.Icon.loadComponent():"-icon"===i&&this.Icon.unloadComponent(),this.router.open(`/users/${i}`)}}).prototype,"router",[m],{configurable:1,enumerable:1,writable:1,initializer:null}),Z=ie(Y.prototype,"state",[m],{configurable:1,enumerable:1,writable:1,initializer:null}),ie(Y.prototype,"updateValue",[s],Object.getOwnPropertyDescriptor(Y.prototype,"updateValue"),Y.prototype),Y));const oe={};function le(e){g(e)||h(e,oe);const t=y({uri:"https://api.github.com/graphql",headers:{Authorization:"Bearer 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"},fetch:v}),i=new w,n=new z({link:t,cache:i});x(e,n,"default")}const ae=O`
    query ListOfRepositories($login: String!) {
        repositoryOwner(login: $login) {
            login
            repositories(first: 20, orderBy: {field: UPDATED_AT, direction: DESC}, privacy: PUBLIC, isFork: false) {
            nodes {
                description
                id
                name
            }
            }
        }
    }
`;var se,ue,ce,de;function pe(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function me(e,t,i,n,r){var o={};return Object.keys(n).forEach((e=>{o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=1),o=i.slice().reverse().reduce(((i,n)=>n(e,t,i)||i),o),r&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(r):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}a(u({id:"VFctwwFH",block:'[[[1,"\\n        "],[18,1,[[30,0,["repos"]]]],[1,"\\n    "]],["&default"],false,["yield"]]',moduleName:"(unknown template module)",scope:null,isStrictMode:1}),class extends p{constructor(){var e,t,i;super(...arguments),e=this,t="query",i=k(this,(()=>[ae,{variables:{login:this.args.login}}])),t in e?Object.defineProperty(e,t,{value:i,enumerable:1,configurable:1,writable:1}):e[t]=i,le(this)}get repos(){var e,t;return null!=(t=null==(e=this.query.data)?void 0:e.repositoryOwner.repositories.nodes)?t:[]}});const be=new(ue=me((se=class extends j{constructor(...e){super(...e),pe(this,"stack",ue,this),pe(this,"prevRoute",ce,this),pe(this,"activeRoute",de,this)}}).prototype,"stack",[f],{configurable:1,enumerable:1,writable:1,initializer:()=>[]}),ce=me(se.prototype,"prevRoute",[f],{configurable:1,enumerable:1,writable:1,initializer:()=>null}),de=me(se.prototype,"activeRoute",[f],{configurable:1,enumerable:1,writable:1,initializer:()=>null}),se)({main:"",users:"/users","users.user":"/users/:login"});var fe,ge;function he(e,t,i,n,r){var o={};return Object.keys(n).forEach((e=>{o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=1),o=i.slice().reverse().reduce(((i,n)=>n(e,t,i)||i),o),r&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(r):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}le(be),be.addResolver("users.user",(async e=>{var t,i;const n=k(be,(()=>[ae,{variables:{login:e.login}}]));try{await n.promise}catch(r){return[]}return((null==(i=null==(t=n.data)?void 0:t.repositoryOwner)?void 0:i.repositories.nodes)||[]).map((t=>o(o({},t),{login:e.login})))})),be.addResolver("users",(async({login:e})=>{const t=["lifeart","wycats","tomdale"];return e&&!t.includes(e)?[e,...t]:t}));const ye=new(ge=he((fe=class{constructor(){var e;(e=ge)&&Object.defineProperty(this,"users",{enumerable:e.enumerable,configurable:e.configurable,writable:e.writable,value:e.initializer?e.initializer.call(this):void 0})}addUser(e){this.users=Array.from(new Set([e,...this.users]))}removeUser(e){this.users=this.users.filter((t=>t!==e))}}).prototype,"users",[f],{configurable:1,enumerable:1,writable:1,initializer:()=>[]}),he(fe.prototype,"addUser",[s],Object.getOwnPropertyDescriptor(fe.prototype,"addUser"),fe.prototype),he(fe.prototype,"removeUser",[s],Object.getOwnPropertyDescriptor(fe.prototype,"removeUser"),fe.prototype),fe);function ve(e=0){const t=document.querySelector("#app");return L(re,{element:t,rehydrate:e,services:{router:be,state:ye}})}document.addEventListener("DOMContentLoaded",(async()=>{await be.mount();try{await ve(1)}catch(e){await ve(0)}}),{once:1});