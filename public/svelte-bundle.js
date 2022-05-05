var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function u(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function r(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function d(){return a(" ")}function f(){return a("")}function p(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t,n){t.value=null==n?"":n}function w(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}let g;function $(t){g=t}function b(){if(!g)throw new Error("Function called outside component initialization");return g}const k=[],v=[],y=[],x=[],C=Promise.resolve();let R=!1;function O(t){y.push(t)}const S=new Set;let P=0;function N(){const t=g;do{for(;P<k.length;){const t=k[P];P++,$(t),_(t.$$)}for($(null),k.length=0,P=0;v.length;)v.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];S.has(n)||(S.add(n),n())}y.length=0}while(k.length);for(;x.length;)x.pop()();R=!1,S.clear(),$(t)}function _(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}const M=new Set;let T;function I(){T={r:0,c:[],p:T}}function E(){T.r||o(T.c),T=T.p}function G(t,n){t&&t.i&&(M.delete(t),t.i(n))}function j(t,n,e,o){if(t&&t.o){if(M.has(t))return;M.add(t),T.c.push((()=>{M.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function A(t,n){const e=n.token={};function o(t,o,u,c){if(n.token!==e)return;n.resolved=c;let r=n.ctx;void 0!==u&&(r=r.slice(),r[u]=c);const i=t&&(n.current=t)(r);let l=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==o&&t&&(I(),j(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),E())})):n.block.d(1),i.c(),G(i,1),i.m(n.mount(),n.anchor),l=!0),n.block=i,n.blocks&&(n.blocks[o]=i),l&&N()}if((u=t)&&"object"==typeof u&&"function"==typeof u.then){const e=b();if(t.then((t=>{$(e),o(n.then,1,n.value,t),$(null)}),(t=>{if($(e),o(n.catch,2,n.error,t),$(null),!n.hasCatch)throw t})),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var u}function U(t){t&&t.c()}function L(t,e,c,r){const{fragment:i,on_mount:l,on_destroy:s,after_update:a}=t.$$;i&&i.m(e,c),r||O((()=>{const e=l.map(n).filter(u);s?s.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(O)}function V(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function B(t,n){-1===t.$$.dirty[0]&&(k.push(t),R||(R=!0,C.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function q(n,u,c,r,i,s,a,d=[-1]){const f=g;$(n);const p=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u.context||(f?f.$$.context:[])),callbacks:e(),dirty:d,skip_bound:!1,root:u.target||f.$$.root};a&&a(p.root);let m=!1;if(p.ctx=c?c(n,u.props||{},((t,e,...o)=>{const u=o.length?o[0]:e;return p.ctx&&i(p.ctx[t],p.ctx[t]=u)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](u),m&&B(n,t)),e})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!r&&r(p.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();u.intro&&G(n.$$.fragment),L(n,u.target,u.anchor,u.customElement),N()}$(f)}class z{$destroy(){V(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function D(n){let e,u,c,f,h,w,g,$,b,k,v,y,x;return{c(){e=s("button"),e.textContent="🠔 Back",u=d(),c=s("div"),f=a("Total Volume:\r\n    "),h=s("input"),w=a("\r\n    Music Volume:\r\n    "),g=s("input"),$=a("\r\n    Sound Effects Volume:\r\n    "),b=s("input"),k=d(),v=s("button"),v.textContent="Re-prompt Cookie Consent",m(e,"type","button"),m(h,"type","range"),h.value=100*window.volume,m(h,"min","0"),m(h,"max","100"),m(g,"type","range"),g.value=100*window.volumeMusic,m(g,"min","0"),m(g,"max","100"),m(b,"type","range"),b.value=100*window.volumeGame,m(b,"min","0"),m(b,"max","100"),m(v,"type","button")},m(t,o){i(t,e,o),i(t,u,o),i(t,c,o),r(c,f),r(c,h),r(c,w),r(c,g),r(c,$),r(c,b),i(t,k,o),i(t,v,o),y||(x=[p(e,"click",n[2]),p(h,"input",F),p(g,"input",H),p(b,"input",J),p(v,"click",n[3])],y=!0)},p:t,i:t,o:t,d(t){t&&l(e),t&&l(u),t&&l(c),t&&l(k),t&&l(v),y=!1,o(x)}}}function F(t){window.changeVolume(t.target.value/100)}function H(t){window.changeVolumeMusic(t.target.value/100)}function J(t){window.changeVolumeGame(t.target.value/100)}function Q(t,n,e){let{setRoute:o}=n,{lastRoute:u}=n;return t.$$set=t=>{"setRoute"in t&&e(0,o=t.setRoute),"lastRoute"in t&&e(1,u=t.lastRoute)},[o,u,()=>o(u),()=>window.cookieConsentPopup(!0)]}class Y extends z{constructor(t){super(),q(this,t,Q,D,c,{setRoute:0,lastRoute:1})}}function K(t){let n,e,u,c,r,a,h,w,g,$,b,k={ctx:t,current:null,token:null,hasCatch:!0,pending:ot,then:Z,catch:X};return A(window.setupPixiPromise,k),{c(){n=s("div"),e=d(),u=s("button"),u.textContent="Singleplayer",c=d(),r=s("button"),r.textContent="Multiplayer",a=d(),h=s("br"),w=d(),g=f(),k.block.c(),m(n,"id","websocket-pie-connection-status")},m(o,l){i(o,n,l),i(o,e,l),i(o,u,l),i(o,c,l),i(o,r,l),i(o,a,l),i(o,h,l),i(o,w,l),i(o,g,l),k.block.m(o,k.anchor=l),k.mount=()=>g.parentNode,k.anchor=g,$||(b=[p(u,"click",t[8]),p(r,"click",t[9])],$=!0)},p(n,e){!function(t,n,e){const o=n.slice(),{resolved:u}=t;t.current===t.then&&(o[t.value]=u),t.current===t.catch&&(o[t.error]=u),t.block.p(o,e)}(k,t=n,e)},d(t){t&&l(n),t&&l(e),t&&l(u),t&&l(c),t&&l(r),t&&l(a),t&&l(h),t&&l(w),t&&l(g),k.block.d(t),k.token=null,k=null,$=!1,o(b)}}}function W(n){let e,u,c,a,f,h,w,g;return{c(){e=s("div"),u=s("button"),u.textContent="Resume Game",c=d(),a=s("button"),a.textContent="Options",f=d(),h=s("button"),h.textContent="Quit to Main Menu",m(u,"class","svelte-1snxd9a"),m(a,"class","svelte-1snxd9a"),m(h,"class","svelte-1snxd9a"),m(e,"class","list svelte-1snxd9a")},m(t,o){i(t,e,o),r(e,u),r(e,c),r(e,a),r(e,f),r(e,h),w||(g=[p(u,"click",rt),p(a,"click",n[13]),p(h,"click",ct)],w=!0)},p:t,d(t){t&&l(e),w=!1,o(g)}}}function X(n){let e;return{c(){e=s("p"),e.textContent="Something went wrong loading assets",w(e,"color","red")},m(t,n){i(t,e,n)},p:t,d(t){t&&l(e)}}}function Z(t){let n,e=!1===t[4]&&tt(t);return{c(){e&&e.c(),n=f()},m(t,o){e&&e.m(t,o),i(t,n,o)},p(t,o){!1===t[4]?e?e.p(t,o):(e=tt(t),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},d(t){e&&e.d(t),t&&l(n)}}}function tt(t){let n,e,u,c,m,w,g,$,b,k,v,y,x,C,R,O=t[3]&&nt(),S=t[7]&&et(t);return{c(){n=a("Server Url\r\n            "),e=s("div"),u=s("input"),c=d(),m=s("button"),w=a("Connect"),g=d(),$=s("button"),b=a("Disconnect"),v=d(),O&&O.c(),y=d(),S&&S.c(),x=f(),m.disabled=t[7],$.disabled=k=!t[7]},m(o,l){i(o,n,l),i(o,e,l),r(e,u),h(u,t[5]),r(e,c),r(e,m),r(m,w),r(e,g),r(e,$),r($,b),i(o,v,l),O&&O.m(o,l),i(o,y,l),S&&S.m(o,l),i(o,x,l),C||(R=[p(u,"input",t[14]),p(u,"keypress",t[15]),p(m,"click",t[10]),p($,"click",t[11])],C=!0)},p(t,n){32&n&&u.value!==t[5]&&h(u,t[5]),128&n&&(m.disabled=t[7]),128&n&&k!==(k=!t[7])&&($.disabled=k),t[3]?O||(O=nt(),O.c(),O.m(y.parentNode,y)):O&&(O.d(1),O=null),t[7]?S?S.p(t,n):(S=et(t),S.c(),S.m(x.parentNode,x)):S&&(S.d(1),S=null)},d(t){t&&l(n),t&&l(e),t&&l(v),O&&O.d(t),t&&l(y),S&&S.d(t),t&&l(x),C=!1,o(R)}}}function nt(t){let n;return{c(){n=a("Connecting...")},m(t,e){i(t,n,e)},d(t){t&&l(n)}}}function et(t){let n,e,u,c,a,f,m,g,$,b;return{c(){n=s("p"),n.textContent="Game name",e=d(),u=s("input"),c=d(),a=s("div"),f=s("button"),f.textContent="Host",m=d(),g=s("button"),g.textContent="Join",w(a,"display","flex")},m(o,l){i(o,n,l),i(o,e,l),i(o,u,l),h(u,t[6]),i(o,c,l),i(o,a,l),r(a,f),r(a,m),r(a,g),$||(b=[p(u,"input",t[16]),p(u,"keypress",t[17]),p(f,"click",t[12]),p(g,"click",t[12])],$=!0)},p(t,n){64&n&&u.value!==t[6]&&h(u,t[6])},d(t){t&&l(n),t&&l(e),t&&l(u),t&&l(c),t&&l(a),$=!1,o(b)}}}function ot(n){let e;return{c(){e=a("loading assets...")},m(t,n){i(t,e,n)},p:t,d(t){t&&l(e)}}}function ut(n){let e;function o(t,n){return t[2]?W:K}let u=o(n),c=u(n);return{c(){c.c(),e=f()},m(t,n){c.m(t,n),i(t,e,n)},p(t,[n]){u===(u=o(t))&&c?c.p(t,n):(c.d(1),c=u(t),c&&(c.c(),c.m(e.parentNode,e)))},i:t,o:t,d(t){c.d(t),t&&l(e)}}}function ct(){confirm("Are you sure you want to quit to Main Menu?")&&window.exitCurrentGame()}function rt(){window.closeMenu()}function it(t,n,e){let o,{setRoute:u}=n,{OPTIONS:c}=n,{inGame:r}=n,i=!1;function l(){window.playMusic(),o&&h(),e(4,o=!1)}let s,a=new URLSearchParams(location.search),d=a.get("pieUrl"),f=a.get("game");function p(){e(7,s=window.pie.isConnected()),e(3,i=!1)}function m(){if(d){console.log("Menu: Connect to server",d),e(3,i=!0);const t=new URL(location.href);return t.searchParams.set("pieUrl",d),window.history.pushState(null,null,t),window.connect_to_wsPie_server(d).then(p)}return Promise.reject("No wsUrl defined to connect to")}function h(){window.pie.disconnect().then(p)}function w(){f?window.pie.isConnected()?(console.log("Menu: Connect to game name",f),window.joinRoom({name:f}).then((()=>{const t=new URL(location.href);t.searchParams.set("game",f),window.history.pushState(null,null,t)}))):console.error("Cannot join room until pieClient is connected to a pieServer"):console.log("Cannot join game until a gameName is provided")}d&&(console.log("Menu: Start auto connect"),l(),m());return t.$$set=t=>{"setRoute"in t&&e(0,u=t.setRoute),"OPTIONS"in t&&e(1,c=t.OPTIONS),"inGame"in t&&e(2,r=t.inGame)},[u,c,r,i,o,d,f,s,function(){window.playMusic(),e(4,o=!0),window.startSingleplayer().then((()=>{p()}))},l,m,h,w,()=>u(c),function(){d=this.value,e(5,d)},t=>{"Enter"==t.key&&m()},function(){f=this.value,e(6,f)},t=>{"Enter"==t.key&&w()}]}class lt extends z{constructor(t){super(),q(this,t,it,ut,c,{setRoute:0,OPTIONS:1,inGame:2})}}function st(n){let e,u,c,a,f,h,w,g;return{c(){e=s("div"),u=s("button"),u.textContent="Resume Tutorial",c=d(),a=s("button"),a.textContent="Options",f=d(),h=s("button"),h.textContent="Skip Tutorial",m(e,"class","list")},m(t,o){i(t,e,o),r(e,u),r(e,c),r(e,a),r(e,f),r(e,h),w||(g=[p(u,"click",dt),p(a,"click",n[2]),p(h,"click",at)],w=!0)},p:t,i:t,o:t,d(t){t&&l(e),w=!1,o(g)}}}function at(){confirm("Are you sure you want to skip the tutorial?")&&(window.skipTutorial(),window.exitCurrentGame())}function dt(){window.closeMenu()}function ft(t,n,e){let{OPTIONS:o}=n,{setRoute:u}=n;return t.$$set=t=>{"OPTIONS"in t&&e(0,o=t.OPTIONS),"setRoute"in t&&e(1,u=t.setRoute)},[o,u,()=>u(o)]}class pt extends z{constructor(t){super(),q(this,t,ft,st,c,{OPTIONS:0,setRoute:1})}}function mt(n){let e,o;return e=new pt({props:{setRoute:n[3],OPTIONS:$t}}),{c(){U(e.$$.fragment)},m(t,n){L(e,t,n),o=!0},p:t,i(t){o||(G(e.$$.fragment,t),o=!0)},o(t){j(e.$$.fragment,t),o=!1},d(t){V(e,t)}}}function ht(t){let n,e;return n=new Y({props:{setRoute:t[3],lastRoute:t[0]}}),{c(){U(n.$$.fragment)},m(t,o){L(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.lastRoute=t[0]),n.$set(o)},i(t){e||(G(n.$$.fragment,t),e=!0)},o(t){j(n.$$.fragment,t),e=!1},d(t){V(n,t)}}}function wt(t){let n,e;return n=new lt({props:{setRoute:t[3],OPTIONS:$t,inGame:t[2]}}),{c(){U(n.$$.fragment)},m(t,o){L(n,t,o),e=!0},p(t,e){const o={};4&e&&(o.inGame=t[2]),n.$set(o)},i(t){e||(G(n.$$.fragment,t),e=!0)},o(t){j(n.$$.fragment,t),e=!1},d(t){V(n,t)}}}function gt(t){let n,e,o,u;const c=[wt,ht,mt],r=[];function s(t,n){return t[1]==bt?0:t[1]==$t?1:t[1]==kt?2:-1}return~(n=s(t))&&(e=r[n]=c[n](t)),{c(){e&&e.c(),o=f()},m(t,e){~n&&r[n].m(t,e),i(t,o,e),u=!0},p(t,[u]){let i=n;n=s(t),n===i?~n&&r[n].p(t,u):(e&&(I(),j(r[i],1,1,(()=>{r[i]=null})),E()),~n?(e=r[n],e?e.p(t,u):(e=r[n]=c[n](t),e.c()),G(e,1),e.m(o.parentNode,o)):e=null)},i(t){u||(G(e),u=!0)},o(t){j(e),u=!1},d(t){~n&&r[n].d(t),t&&l(o)}}}const $t="OPTIONS",bt="PLAY",kt="TUTORIAL";function vt(t,n,e){let o,u;console.log("Menu: Svelte menu is running");let c=!1;function r(t){console.log("Menu: Route:",t),e(0,o=u),e(1,u=t),window.updateInGameMenuStatus()}return window.updateInGameMenuStatus=()=>{e(2,c=void 0!==window.underworld)},r(bt),window.setMenu=r,[o,u,c,r]}return new class extends z{constructor(t){super(),q(this,t,vt,gt,c,{})}}({target:document.getElementById("menu-inner")||document.body,props:{}})}();
//# sourceMappingURL=svelte-bundle.js.map
