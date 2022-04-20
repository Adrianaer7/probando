(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{6902:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/producto/[id]",function(){return t(741)}])},7207:function(e,r,t){"use strict";var a=t(5893),s=t(7294),o=t(9008),d=t(1664),n=t.n(d),c=t(5675),l=t.n(c),i=t(1163),x=t(1146),g=t(7581);r.Z=function(e){var r=e.children,t=e.pagina,d=(0,s.useContext)(x.Z),c=d.usuario,h=d.cerrarSesion,m=d.token,p=d.traerTema,u=(0,s.useContext)(g.Z),b=u.limpiarSeleccionado,y=u.limpiarApp,f=(0,s.useState)(!1),w=f[0],k=f[1],N=(0,s.useState)(!1),j=N[0],v=N[1],E=(0,i.useRouter)(),C=E.route;(0,s.useEffect)((function(){m||E.push("/")}),[m]),(0,s.useEffect)((function(){var e,r=null!==(e=JSON.parse(localStorage.getItem("Modo oscuro")))&&void 0!==e&&e;k(r)}),[]),(0,s.useEffect)((function(){localStorage.setItem("Modo oscuro",JSON.stringify(w)),p(w)}),[w]);return(0,a.jsxs)("div",{className:"min-h-screen",children:[(0,a.jsx)(o.default,{children:(0,a.jsxs)("title",{children:["Inventario - ",t]})}),(0,a.jsxs)("div",{className:"lg:flex md:min-h-screen sm:min-h-screen bg-gray-100 ".concat(w&&"dark"),children:[(0,a.jsxs)("div",{className:"lg:w-1/5 bg-blue-900 dark:bg-gray-900 flex flex-col justify-between lg:justify-start ",children:[(0,a.jsxs)("div",{className:"flex justify-between mt-1 px-5",children:[(0,a.jsxs)("p",{className:"text-white text-2xl md:text-4xl font-black text-center",children:["Hola, ",c?(0,a.jsx)("span",{children:c.nombre}):null]}),(0,a.jsx)(l(),{src:"/settings-claro.svg",alt:"Settings",width:30,height:30,priority:!0,className:"cursor-pointer",onClick:function(){v(!j)}})]}),j?(0,a.jsxs)("div",{className:"flex flex-col mt-2 ml-5 py-2",children:[(0,a.jsx)("button",{onClick:function(){k(!w)},className:"".concat(w&&"text-white"," text-left py-2 hover:text-blue-300 hover:translate-x-3"),children:w?"Tema claro":"Tema oscuro"}),(0,a.jsx)("button",{onClick:function(){h(),y()},className:"".concat(w&&"text-white"," text-left py-2 hover:text-blue-300"),children:"Cerrar sesi\xf3n"})]}):null,(0,a.jsxs)("nav",{className:"grid grid-cols-3 lg:px-5 mt-4 sm:mt-10 lg:flex lg:flex-col lg:justify-start h-5/6",children:[(0,a.jsx)(n(),{href:"/productos",children:(0,a.jsx)("a",{className:"".concat("/productos"===C?"lg:bg-blue-300 lg:border-none border-b-gray-300 border-b-2 lg:bg-opacity-10 lg:rounded-md  text-white":"text-white"," text-sm text-center lg:text-left sm:text-2xl block p-2 mt-2 hover:text-blue-300"),children:"Productos"})}),(0,a.jsx)(n(),{href:"/nuevoproducto",children:(0,a.jsx)("a",{onClick:function(){return b()},className:"".concat("/nuevoproducto"===C?"lg:bg-blue-300 lg:border-none border-b-gray-300 border-b-2 lg:bg-opacity-10 lg:rounded-md  text-white":"text-white"," text-sm text-center lg:text-left sm:text-2xl block p-2 mt-2 hover:text-blue-300"),children:"Nuevo Producto"})}),(0,a.jsx)(n(),{href:"/faltantes",children:(0,a.jsx)("a",{onClick:function(){return b()},className:"".concat("/faltantes"===C?"lg:bg-blue-300 lg:border-none border-b-gray-300 border-b-2 lg:bg-opacity-10 lg:rounded-md  text-white":"text-white"," text-sm text-center lg:text-left sm:text-2xl block p-2 mt-2 hover:text-blue-300"),children:"Faltantes"})})]})]}),(0,a.jsx)("div",{className:" lg:w-4/5 lg:p-10 h-screen dark:bg-gray-800 overflow-x-auto ",children:r})]})]})}},6282:function(e,r,t){"use strict";var a=t(5893),s=t(1664),o=t.n(s),d=t(1172),n=t.n(d),c=t(9008);r.Z=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.default,{children:(0,a.jsx)("title",{children:"P\xe1gina no encontrada"})}),(0,a.jsxs)("div",{className:n().no_encontrado,children:[(0,a.jsx)("h1",{className:"heading",children:"Pagina no encontrada"}),(0,a.jsx)(o(),{href:"/productos",children:(0,a.jsx)("a",{children:"Volver a inicio"})})]})]})}},463:function(e,r,t){"use strict";t.d(r,{Ns:function(){return s},qU:function(){return a}});var a=function(e){return new Date(e+"T00:00:00").toLocaleString("es-AR",{year:"numeric",month:"long",day:"2-digit"})},s=new Date(Date.now()).toISOString().slice(0,10)},741:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSP:function(){return m},default:function(){return p}});var a=t(5893),s=t(7207),o=t(7294),d=t(463),n=t(1163),c=t(7581),l=t(1146),i=t(6455),x=t.n(i),g=function(e){var r=e.producto,t=(0,n.useRouter)(),s=(0,o.useContext)(c.Z).eliminarProducto,i=(0,o.useContext)(l.Z).modo,g=r._id,h=r.nombre,m=r.codigo,p=r.rubro,u=r.marca,b=r.precio_venta_tarjeta,y=r.precio_venta_efectivo,f=r.precio_venta_conocidos,w=r.precio_compra_dolar,k=r.precio_compra_peso,N=r.valor_dolar_compra,j=r.fecha_compra,v=r.proveedor,E=r.disponibles,C=r.rentabilidad,_=r.modelo,O=r.notas,A=(0,d.qU)(j),S=x().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:" lg:w-2/3 mx-auto dark:bg-gray-800 bg-slate-100 flex flex-col gap-4",children:[(0,a.jsx)("h1",{className:"font-black text-2xl lg:text-4xl dark:text-blue-300 text-blue-900 text-center",children:h}),(0,a.jsx)("div",{className:" overflow-x-auto shadow-md sm:rounded-lg",children:(0,a.jsx)("table",{className:" sm:table-fixed w-screen sm:w-full text-sm lg:text-lg text-left text-gray-500 dark:text-gray-400",children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{className:"dark:bg-gray-900 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-700 flex flex-col sm:flex-row sm:flex-row",children:[(0,a.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap",children:"NOMBRE"}),(0,a.jsx)("td",{className:"px-6 py-4 ",children:h})]}),(0,a.jsxs)("tr",{className:" dark:bg-gray-900 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-700 flex flex-col sm:flex-row",children:[(0,a.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap",children:"MARCA"}),(0,a.jsx)("td",{className:"px-6 py-4",children:u||"-"})]}),(0,a.jsxs)("tr",{className:" dark:bg-gray-900 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-700 flex flex-col sm:flex-row",children:[(0,a.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap",children:"MODELO"}),(0,a.jsx)("td",{className:"px-6 py-4",children:_||"-"})]}),(0,a.jsxs)("tr",{className:" dark:bg-gray-900 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-700 flex flex-col sm:flex-row",children:[(0,a.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap",children:"C\xd3DIGO"}),(0,a.jsx)("td",{className:"px-6 py-4",children:m})]}),(0,a.jsxs)("tr",{className:" dark:bg-gray-900 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-700 flex flex-col sm:flex-row",children:[(0,a.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap ",children:"PRECIO DE VENTA CON TARJETA"}),(0,a.jsx)("td",{className:"px-6 py-4",children:b?"$"+b:"-"})]}),(0,a.jsxs)("tr",{className:" dark:bg-gray-900 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-700 flex flex-col sm:flex-row",children:[(0,a.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap",children:"PRECIO DE VENTA EN EFECTIVO"}),(0,a.jsx)("td",{className:"px-6 py-4",children:y?"$"+y:"-"})]}),(0,a.jsxs)("tr",{className:" dark:bg-gray-900 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-700 flex flex-col sm:flex-row",children:[(0,a.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap",children:"PRECIO DE VENTA CONOCIDOS"}),(0,a.jsx)("td",{className:"px-6 py-4",children:f?"$"+b:"-"})]}),(0,a.jsxs)("tr",{className:" dark:bg-gray-900 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-700 flex flex-col sm:flex-row",children:[(0,a.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap",children:"RUBRO"}),(0,a.jsx)("td",{className:"px-6 py-4",children:p||"-"})]}),(0,a.jsxs)("tr",{className:" dark:bg-gray-900 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-700 flex flex-col sm:flex-row",children:[(0,a.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap",children:"PROVEEDOR"}),(0,a.jsx)("td",{className:"px-6 py-4",children:v||"-"})]}),(0,a.jsxs)("tr",{className:" dark:bg-gray-900 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-700 flex flex-col sm:flex-row",children:[(0,a.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap",children:"VALOR DEL D\xd3LAR AL COMPRARLO"}),(0,a.jsxs)("td",{className:"px-6 py-4",children:["$",N]})]}),(0,a.jsxs)("tr",{className:" dark:bg-gray-900 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-700 flex flex-col sm:flex-row",children:[(0,a.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap",children:"PRECIO DE LA COMPRA EN D\xd3LARES"}),(0,a.jsx)("td",{className:"px-6 py-4",children:w?"$"+w:"-"})]}),(0,a.jsxs)("tr",{className:" dark:bg-gray-900 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-700 flex flex-col sm:flex-row",children:[(0,a.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap",children:"PRECIO DE LA COMPRA EN PESOS"}),(0,a.jsx)("td",{className:"px-6 py-4",children:k?"$"+k:"-"})]}),(0,a.jsxs)("tr",{className:" dark:bg-gray-900 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-700 flex flex-col sm:flex-row",children:[(0,a.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap",children:"DISPONIBLES"}),(0,a.jsx)("td",{className:"px-6 py-4",children:E>0?E:"SIN STOCK"})]}),(0,a.jsxs)("tr",{className:" dark:bg-gray-900 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-700 flex flex-col sm:flex-row",children:[(0,a.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap",children:"FECHA DE LA ULTIMA COMPRA"}),(0,a.jsx)("td",{className:"px-6 py-4 uppercase",children:A})]}),(0,a.jsxs)("tr",{className:" dark:bg-gray-900 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-700 flex flex-col sm:flex-row",children:[(0,a.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap",children:"RENTABILIDAD"}),(0,a.jsx)("td",{className:"px-6 py-4",children:C?C+"%":"-"})]}),(0,a.jsxs)("tr",{className:" dark:bg-gray-900 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-700 break-words flex flex-col sm:flex-row",children:[(0,a.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap",children:"NOTAS"}),(0,a.jsx)("td",{className:"px-6 py-4",children:O||"-"})]})]})})}),(0,a.jsx)("button",{type:"button",className:"bg-red-600 hover:bg-red-900 sm:w-1/4 text-white p-4 uppercase font-bold my-4 mx-auto block rounded-md",onClick:function(){x().fire({title:"".concat(i?'<h5 style="color:white">\xbfEst\xe1s seguro?</h5>':'<h5 style="color:#545454">\xbfEst\xe1s seguro?</h5>'),text:"\xa1No se puede revertir esto!",icon:"warning",color:"".concat(i?"white":"#545454"),showCloseButton:!0,showCancelButton:!0,confirmButtonText:"<b>Si, eliminar!</b>",confirmButtonColor:"#d33",cancelButtonText:"<p>Cancelar</p>",background:"".concat(i?"rgb(31 41 55)":"white")}).then((function(e){e.isConfirmed&&(s(g),t.push("/productos"),S.fire({icon:"success",title:"Se elimin\xf3 el producto correctamente",background:"".concat(i?"#505050":"white"),width:"25%",color:"".concat(i?"white":"#545454")}))}))},children:"Eliminar Producto"})]})})},h=t(6282),m=!0,p=function(e){var r=e.producto,t=(0,o.useContext)(l.Z),d=t.usuarioAutenticado,n=t.usuario,i=(0,o.useContext)(c.Z).productoActual,x=(0,o.useState)(!0),m=x[0],p=x[1];return(0,o.useEffect)((function(){d()}),[]),(0,o.useEffect)((function(){n&&(i(r),r.creador!==n._id&&p(!1))}),[n]),(0,a.jsx)(a.Fragment,{children:m?(0,a.jsx)(s.Z,{pagina:"Ver - ".concat(r.nombre),children:(0,a.jsx)(g,{producto:r},r._id)}):(0,a.jsx)(h.Z,{})})}},1172:function(e){e.exports={no_encontrado:"NoEncontrado_no_encontrado__VDndg"}}},function(e){e.O(0,[511,774,888,179],(function(){return r=6902,e(e.s=r);var r}));var r=e.O();_N_E=r}]);