(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[334],{4426:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faltantes",function(){return r(6155)}])},7207:function(e,t,r){"use strict";var n=r(5893),o=r(7294),s=r(9008),a=r(1664),l=r.n(a),c=r(5675),i=r.n(c),d=r(1163),u=r(1146),x=r(7581);t.Z=function(e){var t=e.children,r=e.pagina,a=(0,o.useContext)(u.Z),c=a.usuario,f=a.cerrarSesion,h=a.token,m=a.traerTema,g=(0,o.useContext)(x.Z),b=g.limpiarSeleccionado,p=g.limpiarApp,j=(0,o.useState)(!1),v=j[0],N=j[1],k=(0,o.useState)(!1),w=k[0],y=k[1],C=(0,d.useRouter)(),E=C.route;(0,o.useEffect)((function(){h||C.push("/")}),[h]),(0,o.useEffect)((function(){var e,t=null!==(e=JSON.parse(localStorage.getItem("Modo oscuro")))&&void 0!==e&&e;N(t)}),[]),(0,o.useEffect)((function(){localStorage.setItem("Modo oscuro",JSON.stringify(v)),m(v)}),[v]);return(0,n.jsxs)("div",{className:"min-h-screen",children:[(0,n.jsx)(s.default,{children:(0,n.jsxs)("title",{children:["Inventario - ",r]})}),(0,n.jsxs)("div",{className:"lg:flex md:min-h-screen sm:min-h-screen bg-gray-100 ".concat(v&&"dark"),children:[(0,n.jsxs)("div",{className:"lg:w-1/5 bg-blue-900 dark:bg-gray-900 flex flex-col justify-between lg:justify-start ",children:[(0,n.jsxs)("div",{className:"flex justify-between mt-1 px-5",children:[(0,n.jsxs)("p",{className:"text-white text-2xl md:text-4xl font-black text-center",children:["Hola, ",c?(0,n.jsx)("span",{children:c.nombre}):null]}),(0,n.jsx)(i(),{src:"/settings-claro.svg",alt:"Settings",width:30,height:30,priority:!0,className:"cursor-pointer",onClick:function(){y(!w)}})]}),w?(0,n.jsxs)("div",{className:"flex flex-col mt-2 ml-5 py-2",children:[(0,n.jsx)("button",{onClick:function(){N(!v)},className:"".concat(v&&"text-white"," text-left py-2 hover:text-blue-300 hover:translate-x-3"),children:v?"Tema claro":"Tema oscuro"}),(0,n.jsx)("button",{onClick:function(){f(),p()},className:"".concat(v&&"text-white"," text-left py-2 hover:text-blue-300"),children:"Cerrar sesi\xf3n"})]}):null,(0,n.jsxs)("nav",{className:"grid grid-cols-3 lg:px-5 mt-4 sm:mt-10 lg:flex lg:flex-col lg:justify-start h-5/6",children:[(0,n.jsx)(l(),{href:"/productos",children:(0,n.jsx)("a",{className:"".concat("/productos"===E?"lg:bg-blue-300 lg:border-none border-b-gray-300 border-b-2 lg:bg-opacity-10 lg:rounded-md  text-white":"text-white"," text-sm text-center lg:text-left sm:text-2xl block p-2 mt-2 hover:text-blue-300"),children:"Productos"})}),(0,n.jsx)(l(),{href:"/nuevoproducto",children:(0,n.jsx)("a",{onClick:function(){return b()},className:"".concat("/nuevoproducto"===E?"lg:bg-blue-300 lg:border-none border-b-gray-300 border-b-2 lg:bg-opacity-10 lg:rounded-md  text-white":"text-white"," text-sm text-center lg:text-left sm:text-2xl block p-2 mt-2 hover:text-blue-300"),children:"Nuevo Producto"})}),(0,n.jsx)(l(),{href:"/faltantes",children:(0,n.jsx)("a",{onClick:function(){return b()},className:"".concat("/faltantes"===E?"lg:bg-blue-300 lg:border-none border-b-gray-300 border-b-2 lg:bg-opacity-10 lg:rounded-md  text-white":"text-white"," text-sm text-center lg:text-left sm:text-2xl block p-2 mt-2 hover:text-blue-300"),children:"Faltantes"})})]})]}),(0,n.jsx)("div",{className:" lg:w-4/5 lg:p-10 h-screen dark:bg-gray-800 overflow-x-auto ",children:t})]})]})}},6155:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(5893),o=r(7294),s=r(4051),a=r.n(s),l=r(1664),c=r.n(l),i=r(7581),d=r(349),u=r(1146),x=r(6455),f=r.n(x);function h(e,t,r,n,o,s,a){try{var l=e[s](a),c=l.value}catch(i){return void r(i)}l.done?t(c):Promise.resolve(c).then(n,o)}var m=function(e){var t=e.producto,r=t.nombre,s=t.marca,l=t.codigo,x=t.disponibles,m=t.modelo,g=t.rubro,b=t._id,p=t.faltante,j=t.proveedor,v=(0,o.useContext)(u.Z).modo,N=(0,o.useContext)(i.Z).productoActual,k=(0,o.useContext)(d.Z).eliminarFaltante,w=f().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3}),y=function(){var e,t=(e=a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(b);case 2:w.fire({icon:"error",title:"Quitado de faltantes",color:"".concat(v?"white":"#545454"),background:"".concat(v?"#505050":"white")});case 3:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var s=e.apply(t,r);function a(e){h(s,n,o,a,l,"next",e)}function l(e){h(s,n,o,a,l,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,n.jsxs)("tr",{className:"border-b dark:border-none hover:bg-gray-50 dark:hover:bg-gray-700",children:[(0,n.jsx)("td",{className:"p-3 dark:text-gray-50 text-center font-semibold",children:l}),(0,n.jsx)("td",{className:"dark:text-gray-50 p-3",children:r}),(0,n.jsx)("td",{className:"p-3 dark:text-gray-50 text-center",children:s}),(0,n.jsx)("td",{className:"p-3 dark:text-gray-50 text-center",children:m}),(0,n.jsx)("td",{className:"p-3 dark:text-gray-50 text-center",children:g}),(0,n.jsx)("td",{className:"p-3 dark:text-gray-50 text-center",children:j}),(0,n.jsx)("td",{className:"p-3 dark:text-gray-50 text-center uppercase",children:x&&p?(0,n.jsx)("span",{className:"font-bold text-red-600 p-1",children:x}):x&&!p?x:(0,n.jsx)("span",{className:"font-black text-white bg-red-600 p-1 uppercase",children:"Sin stock"})}),(0,n.jsxs)("td",{className:"p-3 w-40 mt-2 ",children:[(0,n.jsx)(c(),{passHref:!0,href:"/producto/".concat(b),children:(0,n.jsx)("button",{type:"button",className:"bg-blue-600 hover:bg-blue-900 mb-2 w-full text-white p-2 uppercase font-bold text-xs mr-3 rounded-md",onClick:function(){return N(t)},children:"Detalles"})}),(0,n.jsx)(c(),{passHref:!0,href:"",children:(0,n.jsx)("button",{type:"button",className:"bg-red-600 hover:bg-red-900 mb-2 w-full text-white p-2 uppercase font-bold text-xs mr-3 rounded-md",onClick:y,children:"Quitar de faltantes"})})]})]})},g=function(){var e=(0,o.useContext)(d.Z),t=e.faltantes,r=e.traerFaltantes,s=e.filtroFaltante,a=e.filtrados,l=e.orderCodigo,c=e.orderCodigoFiltrados,i=e.orderNombre,x=e.orderNombreFiltrados,f=e.orderMarca,h=e.orderMarcaFiltrados,g=e.orderModelo,b=e.orderModeloFiltrados,p=e.orderRubro,j=e.orderRubroFiltrados,v=e.orderProveedor,N=e.orderProveedorFiltrados,k=e.orderDisponibles,w=e.orderDisponiblesFiltrados,y=(0,o.useState)(""),C=y[0],E=y[1],S=(0,o.useState)(!1),F=S[0],O=S[1],_=(0,o.useState)(!1),P=_[0],M=_[1],R=(0,o.useState)(!1),Z=R[0],D=R[1],I=(0,o.useState)(!1),A=I[0],B=I[1],T=(0,o.useState)(!1),H=T[0],L=T[1],J=(0,o.useState)(!1),Q=J[0],X=J[1],G=(0,o.useState)(!1),U=G[0],V=G[1],q=(0,o.useState)(!1),z=q[0],K=q[1],W=(0,o.useContext)(u.Z).usuarioAutenticado;(0,o.useEffect)((function(){W()}),[]),(0,o.useEffect)((function(){r()}),[]),(0,o.useEffect)((function(){C&&c(P),l(P)}),[P]),(0,o.useEffect)((function(){C&&x(Z),i(Z)}),[Z]),(0,o.useEffect)((function(){C&&h(A),f(A)}),[A]),(0,o.useEffect)((function(){C&&b(H),g(H)}),[H]),(0,o.useEffect)((function(){C&&j(Q),p(Q)}),[Q]),(0,o.useEffect)((function(){C&&N(U),v(U)}),[U]),(0,o.useEffect)((function(){C&&w(z),k(z)}),[z]),(0,o.useEffect)((function(){O(!!C)}),[C]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"absolute lg:relative min-w-full",children:[(0,n.jsx)("h1",{className:"font-black dark:text-red-500 text-3xl sm:text-4xl text-red-500 text-center mt-2 sm:mt-0 mb-4 ",children:"Faltantes"}),(0,n.jsx)("p",{className:"mt-3 text-center text-black dark:text-gray-50",children:"Lista de todos los productos con poco stock"}),(0,n.jsx)("div",{className:"flex flex-col-reverse sm:flex-row justify-between ",children:(0,n.jsx)("input",{type:"text",className:"w-full md:w-2/6 p-4 shadow dark:bg-gray-900 focus:outline-none focus:ring focus:border-blue-300 dark:text-gray-50 rounded-md md:rounded-lg",placeholder:"Buscar alg\xfan producto faltante",onChange:function(e){E(e.target.value),s(e.target.value)}})})]}),(0,n.jsxs)("table",{className:"relative top-44 sm:top-44 lg:top-0 w-full mt-5 table-auto shadow rounded-lg dark:bg-gray-900 bg-white ",children:[(0,n.jsx)("thead",{className:"bg-red-600 text-white",children:(0,n.jsxs)("tr",{className:"hover:cursor-pointer select-none",children:[(0,n.jsx)("th",{onClick:function(){M(!P)},className:"p-2 rounded-tl-lg",children:"CODIGO"}),(0,n.jsx)("th",{onClick:function(){D(!Z)},children:"NOMBRE"}),(0,n.jsx)("th",{onClick:function(){B(!A)},children:"MARCA"}),(0,n.jsx)("th",{onClick:function(){L(!H)},children:"MODELO"}),(0,n.jsx)("th",{onClick:function(){X(!Q)},children:"RUBRO"}),(0,n.jsx)("th",{onClick:function(){V(!U)},children:"PROVEEDOR"}),(0,n.jsx)("th",{onClick:function(){K(!z)},children:"DISPONIBLES"}),(0,n.jsx)("th",{className:"rounded-tr-lg",children:"ACCIONES"})]})}),(0,n.jsx)("tbody",{children:0===Object.keys(a).length&&F?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("tr",{className:"relative p-3 text-2xl dark:text-gray-50",children:(0,n.jsx)("td",{children:"No hay resultados"})})}):Object.keys(a).length>0&&F?(0,n.jsx)(n.Fragment,{children:a.map((function(e){return(0,n.jsx)(m,{producto:e},e._id)}))}):(0,n.jsx)(n.Fragment,{children:t.map((function(e){return(0,n.jsx)(m,{producto:e},e._id)}))})})]})]})},b=r(7207),p=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(b.Z,{pagina:"Faltantes",children:(0,n.jsx)(g,{})})})}}},function(e){e.O(0,[511,774,888,179],(function(){return t=4426,e(e.s=t);var t}));var t=e.O();_N_E=t}]);