"use strict";(self.webpackChunkwebpack_react_webpack=self.webpackChunkwebpack_react_webpack||[]).push([[179],{638:function(M,t,i){var e=i(935),n=i(100),r=i(727),u=i(294),j=i(977),N=i(893);function c(M,t){(null==t||t>M.length)&&(t=M.length);for(var i=0,e=new Array(t);i<t;i++)e[i]=M[i];return e}var a=(0,u.createContext)({authentify:!1});function l(M){var t,i,e=(t=(0,u.useState)(!1),i=2,function(M){if(Array.isArray(M))return M}(t)||function(M,t){var i=null==M?null:"undefined"!=typeof Symbol&&M[Symbol.iterator]||M["@@iterator"];if(null!=i){var e,n,r=[],u=!0,j=!1;try{for(i=i.call(M);!(u=(e=i.next()).done)&&(r.push(e.value),!t||r.length!==t);u=!0);}catch(M){j=!0,n=M}finally{try{u||null==i.return||i.return()}finally{if(j)throw n}}return r}}(t,i)||function(M,t){if(M){if("string"==typeof M)return c(M,t);var i=Object.prototype.toString.call(M).slice(8,-1);return"Object"===i&&M.constructor&&(i=M.constructor.name),"Map"===i||"Set"===i?Array.from(M):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?c(M,t):void 0}}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n={authentify:e[0],setAuthentify:e[1]};return(0,N.jsx)(a.Provider,{value:n,children:M.children})}var L=a,s=i(493),I=function(){(0,u.useContext)(L);var M=(0,n.D3)(),t=M.isAuthenticated,i=M.logout,e=M.user;return M.getAccessTokenSilently,(0,N.jsxs)("div",{id:"header",children:[(0,N.jsx)(r.rU,{to:"/",children:(0,N.jsx)("img",{className:"navigation-logo",src:s,width:"75",alt:"SportFly Logo"})}),(0,N.jsx)("h1",{children:"Un modulo de autentificación "}),(0,N.jsx)("div",{children:t&&(0,N.jsx)("img",{className:"header-user-img",src:e.picture,alt:e.name},e.id)}),(0,N.jsx)("nav",{className:"navigation-nav",children:(0,N.jsx)("ul",{className:"navigation-ul",children:t?(0,N.jsx)("li",{className:"navigation-li",children:(0,N.jsx)(r.rU,{className:"navigation-link",to:"/",onClick:function(){i()},children:"Logout"})}):(0,N.jsx)("li",{className:"navigation-li",children:(0,N.jsx)(r.rU,{className:"navigation-link",to:"/login",children:"Login"})})})})]})},y=i(516),T=i(792),g=i(781),o=i(337),D=function(){return(0,N.jsxs)("div",{id:"Contacto",children:[(0,N.jsxs)("ul",{children:[(0,N.jsx)("li",{children:(0,N.jsx)("a",{target:"_blank",id:"profile-link",className:"nav-link",href:"https://m.facebook.com/yordanis.perez",children:(0,N.jsxs)("i",{children:[(0,N.jsx)(T.Z,{}),"Facebook"]})})}),(0,N.jsx)("li",{children:(0,N.jsx)("a",{target:"_blank",id:"profile-link",className:"nav-link",href:"https://github.com/yordanisperez",children:(0,N.jsxs)("i",{children:[(0,N.jsx)(y.Z,{}),"GitHub"]})})}),(0,N.jsx)("li",{children:(0,N.jsx)("a",{target:"_blank",className:"nav-link",href:"5352121494",children:(0,N.jsxs)("i",{alt:"+5352121494",children:[(0,N.jsx)(o.Z,{}),"Llamame"]})})}),(0,N.jsx)("li",{children:(0,N.jsx)("a",{target:"_blank",className:"nav-link",href:"yordanis@gmail.com",children:(0,N.jsxs)("i",{children:[(0,N.jsx)(g.Z,{}),"Mail"]})})})]}),(0,N.jsx)("span",{children:"Copyright 2021, Original Proyecto SportFly"})]})},z=function(M){return(0,N.jsxs)("div",{children:[(0,N.jsx)(I,{}),(0,N.jsx)("div",{className:"main",children:M.children}),(0,N.jsx)(D,{})]})},x=function(M){return(0,N.jsx)("div",{className:"backdrop",onClick:M.onCancel})};function A(M,t){(null==t||t>M.length)&&(t=M.length);for(var i=0,e=new Array(t);i<t;i++)e[i]=M[i];return e}var d=function(M){var t,i,e=(t=(0,u.useState)(!0),i=2,function(M){if(Array.isArray(M))return M}(t)||function(M,t){var i=null==M?null:"undefined"!=typeof Symbol&&M[Symbol.iterator]||M["@@iterator"];if(null!=i){var e,n,r=[],u=!0,j=!1;try{for(i=i.call(M);!(u=(e=i.next()).done)&&(r.push(e.value),!t||r.length!==t);u=!0);}catch(M){j=!0,n=M}finally{try{u||null==i.return||i.return()}finally{if(j)throw n}}return r}}(t,i)||function(M,t){if(M){if("string"==typeof M)return A(M,t);var i=Object.prototype.toString.call(M).slice(8,-1);return"Object"===i&&M.constructor&&(i=M.constructor.name),"Map"===i||"Set"===i?Array.from(M):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?A(M,t):void 0}}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=e[0],c=e[1],a=(0,j.k6)(),l=(0,n.D3)().loginWithRedirect;function L(){c(!1),a.replace("/")}return(0,N.jsxs)("div",{className:"welcome-section",children:[r&&(0,N.jsx)(x,{onCancel:L}),(0,N.jsxs)("div",{className:"login",children:[(0,N.jsx)("img",{className:"login-logo",src:M.logo,width:"75",alt:"SportFly Logo"}),(0,N.jsx)("h3",{children:M.title}),(0,N.jsx)("button",{className:"login-btn",onClick:function(){l()},children:"Iniciar sección con 0Auth2.0"}),(0,N.jsx)("button",{className:"login-btn login-btn--alt",onClick:L,children:"Cancelar"})]})]})},S=i(666),O=i.n(S);function h(M,t,i,e,n,r,u){try{var j=M[r](u),N=j.value}catch(M){return void i(M)}j.done?t(N):Promise.resolve(N).then(e,n)}function E(M,t){(null==t||t>M.length)&&(t=M.length);for(var i=0,e=new Array(t);i<t;i++)e[i]=M[i];return e}var w="sportslysesting.us.auth0.com",C=function(){var M,t,i=(0,n.D3)(),e=i.isLoading,r=i.user,c=i.getAccessTokenSilently,a=i.isAuthenticated,l=(M=(0,u.useState)(null),t=2,function(M){if(Array.isArray(M))return M}(M)||function(M,t){var i=null==M?null:"undefined"!=typeof Symbol&&M[Symbol.iterator]||M["@@iterator"];if(null!=i){var e,n,r=[],u=!0,j=!1;try{for(i=i.call(M);!(u=(e=i.next()).done)&&(r.push(e.value),!t||r.length!==t);u=!0);}catch(M){j=!0,n=M}finally{try{u||null==i.return||i.return()}finally{if(j)throw n}}return r}}(M,t)||function(M,t){if(M){if("string"==typeof M)return E(M,t);var i=Object.prototype.toString.call(M).slice(8,-1);return"Object"===i&&M.constructor&&(i=M.constructor.name),"Map"===i||"Set"===i?Array.from(M):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?E(M,t):void 0}}(M,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),L=l[0],I=l[1];return(0,u.useEffect)((function(){!function(){var M,t=(M=O().mark((function M(){var t,i,e,n,u;return O().wrap((function(M){for(;;)switch(M.prev=M.next){case 0:return M.prev=0,M.next=3,c({audience:"https://".concat(w,"/api/v2/"),scope:"read:current_user"});case 3:return t=M.sent,i="https://".concat(w,"/api/v2/users/").concat(r.sub),M.next=7,fetch(i,{headers:{Authorization:"Bearer ".concat(t)}});case 7:return e=M.sent,M.next=10,e.json();case 10:n=M.sent,u=n.user_metadata,I(u),M.next=18;break;case 15:M.prev=15,M.t0=M.catch(0),console.log(M.t0.message);case 18:case"end":return M.stop()}}),M,null,[[0,15]])})),function(){var t=this,i=arguments;return new Promise((function(e,n){var r=M.apply(t,i);function u(M){h(r,e,n,u,j,"next",M)}function j(M){h(r,e,n,u,j,"throw",M)}u(void 0)}))});return function(){return t.apply(this,arguments)}}()()}),[c,null==r?void 0:r.sub]),e?(0,N.jsxs)("div",{className:"welcome-section",children:[(0,N.jsx)(x,{}),"Loading ..."]}):(0,N.jsx)(u.Fragment,{children:(0,N.jsx)(z,{children:(0,N.jsxs)(j.rs,{children:[(0,N.jsx)(j.AW,{path:"/",exact:!0,children:(0,N.jsx)("div",{className:"welcome-section",children:a&&(0,N.jsxs)("div",{children:[(0,N.jsx)("p",{children:JSON.stringify(r).replace(/,/gi,", ")}),(0,N.jsx)("h3",{children:"User Metadata"}),L?(0,N.jsx)("pre",{children:JSON.stringify(L,null,2).replace(/,/gi,", ")}):"No user metadata defined"]})})}),(0,N.jsx)(j.AW,{path:"/login",children:(0,N.jsx)(d,{title:"Inicie sección con sus pérfiles de redes sociales",logo:s})})]})})})},k="sportslysesting.us.auth0.com";(0,e.render)((0,N.jsx)(l,{children:(0,N.jsx)(n.tw,{domain:k,clientId:"9QgX4azYM6KWwPe9dm3HpBkz4KQqQNHu",redirectUri:"https://yordanisperez.github.io/SportFly",audience:"https://".concat(k,"/api/v2/"),scope:"read:current_user update:current_user_metadata",children:(0,N.jsx)(r.VK,{children:(0,N.jsx)(C,{})})})}),document.getElementById("app"))},493:function(M){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDQwIiBoZWlnaHQ9IjYyNi42NyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDQwIDYyNi42NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZGVmcz4KICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhckdyYWRpZW50NjE5NTQiIHgxPSI3NzIuOTMiIHgyPSI5ODUuMTgiIHkxPSIxMzcuOTkiIHkyPSIxMzcuOTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzljOWI5YSIgb2Zmc2V0PSIwIi8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiM5YzliOWEiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhckdyYWRpZW50NjE5NjIiIHgxPSI1NDMuNDEiIHgyPSI5ODMuODUiIHkxPSIzMDcuNDYiIHkyPSIzMDcuNDYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI2MzYzRjNSIgb2Zmc2V0PSIwIi8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiNjM2M0YzUiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KIDwvZGVmcz4KIDxnPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01NDQsMzIpIiBzdHJva2U9IiNlY2YwZGQiIHN0cm9rZS13aWR0aD0iMyI+CiAgIDxwYXRoIGQ9Im04OTAuMTQgMjU3LjcyYzExLjkxOC0xNS4wMDYgMzAuNjM5LTE4LjUyIDQ2LjYxOS0xMy4xNyAxMS45MDUgMi41NjI0IDIxLjE3NCAxMi4zNzUgMjYuNjMxIDMyLjY3IDEwLjk0MSA2LjM3NzIgMTkuMjQ2IDEzLjg1MyAxOC45NDkgMjQuOTEzLTEyLjgzMyAwLjcwMjE2LTUwLjY5Mi04LjM1NjMtNTMuNzQgMzIuODgtNS42MjE3IDMyLjQxNC0xMy4yOTYgNjMuNjI4LTQzLjQ4NyA4MS42NzEtMTMuODQ0IDEyLjcyNC0zMi4zMTMgMTkuNTAxLTM3LjEyMyA0My44NDEgMTEuOTE0IDUuOTQ2MSAyNi44MDMgMTAuNDA1IDM1LjM1NSAxOC4wMzEgOC45ODg1IDguMjQ5NiA3Ljk1MTIgMTYuNDk5IDEuNDE0MiAyNC43NDktMC42MTYwMiA1LjE0OC00LjI2MzIgNi4wNTIzLTcuMDcxMSA4LjEzMTdsLTAuNzA3MS02LjgwNTktMy40NDcyIDAuMDg4NGMtMC45Mjg5OSA0LjgwODQtMy43NjM4IDYuNzU4Mi03LjUxMyA3LjMzNjJsMC4wODg0LTkuMjgwOC0xLjg1NjItMTQuMzE5Yy0xLjU2MTItMy43OTUzLTIuODAyOC04LjAzOC02LjYyOTEtOC42NjIxLTMuNTY0NCAxLjAxMjYtNC44MDMgNS45MDE1LTUuNTY4NSAxMS41Nzl2OS44OTk1Yy0yLjk1MzctMi4wNjctNS41MTUyLTQuMjgxLTUuODMzNi03LjMzNjItMy43OTIzLTEuODMyMy01Ljc3NTMtNC44NzA4LTUuNTY4NS05LjM2OTJsNC44NjE0LTcuODY2NmMxLjIwNDEtMi44NDc2IDEuMDgxMi01LjI4Ny0yLjAzMjktNi44MDU5bC00LjMzMS0yLjgyODRjLTkuOTE0IDMuNzIzNC0yMC42NTEgMy4wNTY1LTMxLjU1NSAxLjUwMjYgMzIuNDY1IDE4LjA4IDQwLjU3NyAyOS45NTcgMzcuODMgMzkuMDY4LTAuNzgxMjcgNC41NzM1LTMuNzQ3OSA2LjU5NzQtNi40NTI0IDguOTI3Mi0yLjAxNTEgNC45NDQzLTUuMDU4MSA2LjgwNDgtOC4zOTY5IDcuNzc4MmwtMC4xNzY3OC03LjY4OTgtMy43MTIzLTAuMDg4NGMtMS4yMjkxIDUuNzAyOS0zLjkwMjcgOC41MTctOC4xMzE3IDguMjIwMWwwLjcwNzExLTkuNTQ1OS0xLjQxNDItMi42NTE3IDAuMDg4NC0xOC4wMzFjLTMuNjYzMi02LjE1NzctNy4wNzg3LTcuMTEzOC0xMC4wNzYgMC43MDcxMWwtMi43NCA2LjYyOTEgMC42MTg3MiA5LjI4MDhjLTMuMDU4LTEuMTA4My02LjE2ODctMi4xMjQyLTYuNjI5MS03Ljc3ODItNS4xMDc2LTMuMzI1Ni00Ljg2MTQtNS4yNTA1LTQuODYxNC0xMC45Nmw4LjY2MjEtMTAuMDc2Yy0yLjg5NzYtNC4xNDIzLTUuOTIyMS04LjEzNjYtMTAuNzgzLTkuOTg3OS01Ljc0MzMgMS42NjQ5LTkuNTkwNSA0Ljg4MTEtMTEuNjY3IDkuNTQ1OWw1LjgzMzYgNDYuNDkyYy0yLjM4MTUgMTAuNDc3LTYuMjA1IDE3LjEzMy0xNS4yMDMgMTAuMDc2LTUuNTk0NiAxNi41NDEtOC4wNjI4IDM5LjI2NS0yNy45MzEgMjcuNTc3LTkuNTk5NiAxNC4yOTktMTkuMTg4IDI3LjUyMi0yOC40NjEgMTEuMTM3LTkuMzE4MiA3LjEyMDctMjEuOTE3IDE5LjQyNy0zMi4zMDktMS4yMjcxLTE0LjEzNyA2LjAyMDUtMjYuMzUgNi44ODk2LTMwLjI1LTE0LjUtMjguMDc3IDEuMTk2NS00MC4wMTQtNy42Mjg4LTE3LjI1LTM4IDEzLjI0My0xMi4yMTQgMjcuNzY5LTIzLjM1OSA0NS0zMi4yNWw0NS4yNS0zMS41YzEwLjIwNi02Ljg4NDIgMTcuMDQyLTE2Ljk1MSAyMS4yNS0yOS41bDIyLjI1LTUwLjVjLTcuNjkzMiAxLjI3MDQtMTkuNzg1IDAuODczNTYtMjMuNzktMi4xMDIyLTEuMDc5Ny0wLjE2ODY1LTAuNTkzNTItMi42MDYgMi4wNDAyLTguNjQ3OC0xMS42NDMgMi4xMzI5LTIzLjQwMSAyLjQ0MjMtMzUuMzc3LTAuNzQ1ODEtMC4yMjM3OC0zLjAxMDMgMC4yMDAxNy02LjUwNjMgMi42MjY2LTExLjUwNC0xMC42OC0wLjg1MjQ2LTIxLjA4Mi0wLjI1MzAyLTMzLjM1Ny05LjM5OTQgMS42ODEtMy43MTMgNS41MDk2LTYuMjYyNSA4Ljg1Ny04Ljk3NTYtMTcuMTgzLTEuMjU3OC0zNC41NDgtMi4zNDA4LTQzLjYxNi0xMS4zODkgMi4xNTI3LTMuNDYxIDQuNzc0Mi02Ljg1NSA5LjI0MDYtOS45ODU1LTE4LjY2NS00LjYxNjEtMzMuNzAzLTEyLjcyNS00My4zNzUtMjYgMy4wMjE5LTMuMjM0OSA2LjMxMi01LjI2MjUgMTAtNS41LTE3LjQ3LTExLjEwNS0zNC40MzEtMjMuMDU5LTQ2LTQ0IDQuOTE2Ny0yLjQzNzcgOS4wODMzLTIuMzY3NiAxNC0yLjg3NS0yNi4xMzgtMjMuOTg2LTIyLjk4Ni0yOS45NDYtMjQuMjUtMzguNjI1IDkuMjgwNS0yLjcwMzIgMTkuMDU3LTEuOTM2NCAyOSAwLTI3LjEzMy0yMi4wODYtNTIuNDQyLTQ0Ljk1OC00OS41LTgwIDkuNDc1NiAwLjQ4OTExIDE3LjM3NSAzLjQ5OTkgMjQuNSA3Ljc1LTE0LjE0OC0yOC4yNDgtMjguMDI4LTU2LjQ3NS0zLjUtODEuNSA2Ljc1NDYgMy41NzI4IDE0LjExNSAxMS4yMzcgMjIuNzUgMjcuNS0xLjUzMTktMTcuMjY4IDAuNTA0MDItMzIuOTAxIDEwLjI1LTQ1IDYuMDk1NyAxMC43NDkgMTMuNzMyIDIwLjcxNCAxOS43MDQgMzAuODQ3IDEyLjc4OSAyMS42OTggMjMuODIgNDIuOTI2IDM2LjA0MiA1OS45MzcgMjAuNjAzIDI4LjY3NSAzOS44MDEgNDkuMjEgNTQuMDAzIDU4Ljk2NiAzMi42NDkgMTIuOTYzIDQ4LjMxMiAzNi4yMiA2NiA1OC4yNSAzNC4wNjMgNTkuNDgzIDczLjM0MSA3MS42NzUgMTE1LjI1IDIxeiIgY29sb3I9IiMwMDAwMDAiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQ2MTk2MikiLz4KICAgPHBhdGggZD0ibTg5MC4xNCAyNTcuNzJjLTAuNzIzOTUtMTIuOTk1LTAuNDgzNjItMjYuMDc3IDktNDAgMy42ODc2LTUuMTQgMTEuNDY1LTE0LjkwNyAxOS45MzctMjguODkzIDUuMDIxMS0xMy40MzggOC4xODk3LTI5LjgzMiA5LjU2MzUtNDcuMTA3IDEyLjIxOS00Ny4xNTYgMzAuNDY4LTk2LjMyMyA1NC0xNDcuMjUtMTIuMTE4IDEuODg4OS0zNS4wNDUgMC4yMTkxMS02MS43NSA0OC43NSAzLjkwMjYtMTcuNzM0IDYuMjEwMi0zNi4wNjcgOC4yNS01NC41LTMzLjE3OCAxMy43MjktNDAuNDY4IDQ0LjAyNy01MSA3Mi4yNWwtMS41LTM3LjVjLTEzLjU1OSA2Ljk2OTctMjYuMjU5IDE2LjgxMS0zMSA1My4yNWwtNS0xMi41Yy0yMC4zNjcgMTIuMTUxLTE5LjQxIDMwLjk2Ni0yMS43NSA0OC43NWwtNi41LTguNzVjLTEzLjkxMiAxMy44MDMtMTAuOTQ4IDMwLjg3Mi0xMC45NDIgNDcuMzY5LTMuNDA5LTMuNzQyNS02LjI2MTEtOC4yNDE4LTEwLjgwOC0xMC42MTktNS41Nzc0IDE2Ljg3OC0yLjMxNTkgMjguNjI0LTEgNDEuNS0zLjU4MzMtMy42NTk0LTcuMTY2Ny01LjQyNTEtMTAuNzUtNy4yNS0yLjg4NjYgMTIuMDI5IDEuMTMwNiAyMi4zMzMgNC42MzEzIDMyLjc2NWwtNy4xNDY0LTMuMTQ2NGMtMS4xNTA4IDUuNjgxNS0xLjQ0NTQgMTIuNzg0LTAuODQ0MzQgMTguMTg2IDEuNTMwOSA1LjE3NDQtMi4zMjE2IDEwLjI5My0wLjY0MDQ5IDEzLjY5NSAyMS40MjUgNDMuMzU3IDY4LjAxOSA3OS4zNDcgMTE1LjI1IDIxeiIgY29sb3I9IiMwMDAwMDAiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQ2MTk1NCkiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo="}},function(M){M.O(0,[10,741,4,586],(function(){return 638,M(M.s=638)})),M.O()}]);