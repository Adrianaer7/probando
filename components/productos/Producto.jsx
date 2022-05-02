import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import productoContext from "../../context/productos/productoContext";
import faltanteContext from "../../context/faltantes/faltantesContext";
import authContext from "../../context/auth/authContext";
import Swal from "sweetalert2";

const Producto = ({producto}) => {
    const [colorFaltante, setColorFaltante] = useState(null)
    const {
        nombre, 
        marca, 
        codigo, 
        precio_venta_conocidos, 
        precio_venta_efectivo, 
        precio_venta_tarjeta, 
        disponibles, 
        modelo, 
        _id, 
        faltante,
        limiteFaltante
    } = producto
    
    const conocidos = (nombre + " " + marca + " " + modelo + " " + "$" + Math.round(precio_venta_conocidos)).trim().replace(/\s\s+/g, ' ')   //datos que se copian al hacer click en el precio. El trim elimina los espacios en blanco al principio y al final, y el replace quita 2 o mas espacio entre palabra y palabra
    const efectivo = (nombre + " " + marca + " " + modelo + " " + "$" + Math.round(precio_venta_efectivo)).trim().replace(/\s\s+/g, ' ')
    const tarjeta = (nombre + " " + marca + " " + modelo + " " + "$" + Math.round(precio_venta_tarjeta)).trim().replace(/\s\s+/g, ' ')

    const AuthContext = useContext(authContext)
    const {modo} = AuthContext

    const productosContext = useContext(productoContext)
    const {productoActual, venderProducto} = productosContext

    const faltantesContext = useContext(faltanteContext)
    const {agregarFaltante, eliminarFaltante} = faltantesContext


    useEffect(() => {
        if(colorFaltante) {
            agregarFaltante(_id)
        }
        if(colorFaltante === false) {
            eliminarFaltante(_id)
            Copiado.fire({
                icon: 'error',
                title: 'Quitado de faltantes',
                background: `${modo ? "#505050"  : "white"}`,
                color: `${modo ? "white" : "#545454"}`,
              })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [colorFaltante])

    const Copiado = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
    })

    const venderElProducto = async () => {
        const valor = await Swal.fire({ //modal del input
            title: `${modo ? '<h5 style="color:white">Unidades</h5>' : '<h5 style="color:#545454">Unidades</h5>'}`,
            background: `${modo ? "rgb(31 41 55)" : "white"}`,
            html:`${modo ? '<input id="swal-input" type="tel" value="1" style="color: white; width: 100px; text-align:center" class="swal2-input">' : '<input id="swal-input" type="tel" value="1" style="color: black; width: 100px; text-align:center;" class="swal2-input">'}`,
            width:"25rem",
            focusConfirm: true,
            preConfirm: () => {
                return [
                document.getElementById('swal-input').value
                ]
            },
            showCloseButton: true,
        })
        if(valor.isConfirmed) {
            const unidades = Number(valor.value[0])
            if(unidades < 1 || !unidades || isNaN(unidades) || !Number.isInteger(unidades)) {
                    await Swal.fire({ //le pongo el await para que la siguiente funcion se ejecute cuando quite el modal de error
                    icon: 'error',
                    title: 'Error',
                    color:`${modo ? "white" : "rgb(31 41 55)"}`,
                    background: `${modo ? "rgb(31 41 55)" : "white"}`,
                    html: `${modo ? '<p style="color:#a59ff3">Los <b>unidades a vender</b> deben ser un número entero mayor a 0.</p>' : '<p style="color: #545454">Los <b>unidades a vender</b> deben ser un número entero mayor a 0.</p>'}`,
                })
                return venderElProducto()   //luego de mostrar el modal de error, vuelvo a ejecutar la funcion desde 0
            }
            if(unidades > disponibles) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    color:`${modo ? "white" : "rgb(31 41 55)"}`,
                    background: `${modo ? "rgb(31 41 55)" : "white"}`,
                    html: `${modo ? '<p style="color:#a59ff3"><b>No se pueden vender</b> más unidades de las que hay.</p>' : '<p style="color: #545454">No se pueden vender</b> más unidades de las que hay..</p>'}`,
                })
                return venderElProducto()
            }
            await venderProducto(producto, unidades)
            await Copiado.fire({    //luego de descontar de la bd, muestro alerta de venta correcta
                icon: 'success',
                title: `${unidades > 1 ? "Se vendieron " + unidades + " unidades de" + nombre : "Se vendió " + unidades + " unidad de " + nombre }`,
                background: `${modo ? "#505050" : "white"}`,
                width: "25%",
                color: `${modo ? "white" : "#545454"}`,
                })

            const resta = disponibles - limiteFaltante
            if(resta == 1) { //si el producto que vendi entró a faltantes, muestro alerta luego de la alerta de vendido
                Copiado.fire({
                    icon: 'success',
                    title: 'Agregado a faltante',
                    color: `${modo ? "white" : "#545454"}`,
                    background: `${modo ? "#505050"  : "white"}`,
                  })
            }
        }
    }
      

    const añadirFaltante = () => {
        Copiado.fire({
            icon: 'success',
            title: 'Agregado a faltante',
            color: `${modo ? "white" : "#545454"}`,
            background: `${modo ? "#505050"  : "white"}`,
          })
        setColorFaltante(!colorFaltante)
        if(colorFaltante === null && faltante) {
            setColorFaltante(false)
        }
    }
    

    const copiarPrecioTarjeta = () => {
        navigator.clipboard.writeText(`${tarjeta}`)
          Copiado.fire({
            icon: 'success',
            title: 'Copiado',
            color: `${modo ? "white" : "#545454"}`,
            background: `${modo ? "#505050"  : "white"}`,
          })
    }
    const copiarPrecioEfectivo = () => {
        navigator.clipboard.writeText(`${efectivo}`)
          Copiado.fire({
            icon: 'success',
            title: 'Copiado',
            color: `${modo ? "white" : "#545454"}`,
            background: `${modo ? "#505050"  : "white"}`,
          })
    }
    const copiarPrecioConocidoss = () => {
        navigator.clipboard.writeText(`${conocidos}`)
          Copiado.fire({
            icon: 'success',
            title: 'Copiado',
            color: `${modo ? "white" : "#545454"}`,
            background: `${modo ? "#505050"  : "white"}`,
          })
    }

    return (
        <tr className="border-b dark:border-none hover:bg-gray-50 dark:hover:bg-gray-700">
            <td className="p-3 dark:text-gray-50 text-center font-semibold">{codigo}</td>
            <td className="dark:text-gray-50 p-3">{nombre}</td>
            <td className="p-3 dark:text-gray-50 text-center">{marca}</td>
            <td className="p-3 dark:text-gray-50 text-center">{modelo}</td>
            <td className="dark:text-gray-50 text-center uppercase">{!disponibles ? <span className="bg-red-600 font-black text-white p-1  rounded-sm">Sin stock</span> : disponibles && !faltante && colorFaltante === null || disponibles && colorFaltante === false ? disponibles : disponibles && faltante || disponibles && colorFaltante || disponibles && faltante && colorFaltante === false ? <span className="text-red-600 font-bold">{disponibles}</span> : null}</td>
            <td className="p-2 dark:text-gray-50 text-center  text-lg hover:cursor-pointer ">
                <div className="flex flex-col">
                    <p className="mb-4 pb-2 pt-2 px-2 hover:rounded-md hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 text-3xl font-black " onClick={copiarPrecioTarjeta}>${precio_venta_tarjeta}</p>
                    <p className="pb-2 pt-2 hover:rounded-md hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 text-2xl font-medium" onClick={copiarPrecioEfectivo}>${precio_venta_efectivo}</p>
                    <p className="mt-4 pb-2 pt-2 hover:rounded-md hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 text-xl" onClick={copiarPrecioConocidoss}>${precio_venta_conocidos}</p>
                </div>
            </td>

            <td className="p-3 w-40 mt-2  ">
                <Link passHref href="">
                    <button
                        type="button"
                        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mb-2 w-full text-black p-2 uppercase font-bold text-xs mr-3 rounded-md"
                        onClick={venderElProducto}
                    >Vender</button>
                </Link>
                <Link passHref href={`/producto/${_id}`}>
                    <button
                        type="button"
                        className="bg-blue-600 hover:bg-blue-900 mb-2 w-full text-white p-2 uppercase font-bold text-xs mr-3 rounded-md"
                        onClick={() => productoActual(producto)}
                    >Detalles</button>
                </Link>
                <Link passHref href={`/producto/editar/${_id}`}>
                    <button
                        type="button"
                        className="bg-green-600 hover:bg-green-900 mb-2 w-full text-white p-2 uppercase font-bold text-xs mr-3 rounded-md"
                        onClick={() => productoActual(producto)}
                    >Editar</button>
                </Link>
                <Link passHref href="">
                    <button
                        type="button"
                        className="bg-red-600 hover:bg-red-900  w-full text-white p-2 uppercase font-bold text-xs mr-3 rounded-md"
                        onClick={añadirFaltante}
                    >{!faltante && colorFaltante === null || !faltante && colorFaltante === false || faltante && colorFaltante === false ? "Agregar faltante" : "Quitar faltante"}</button>
                </Link>
                
            </td>
        </tr>
    );
};

export default Producto;
