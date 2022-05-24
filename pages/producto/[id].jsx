import Layout from '../../components/layout/Layout';
import VerProducto from '../../components/productos/VerProducto';
import clienteAxios from "../../config/axios"
import authContext from '../../context/auth/authContext';
import { useContext, useEffect, useState } from 'react';
import productoContext from '../../context/productos/productoContext';
import NoEncontrado from '../../components/productos/NoEncontrado';




export async function getServerSideProps({ params: {id} }) {
  const {data} = await clienteAxios.get(`/api/productos/${id}`)
  if(data.redireccionar) {  //si es true
    return {notFound: true} //redirecciono a la pagina 404. notFound es una funcion de next
  }
  const producto = data.producto
  return { props: { producto }}
}


const Ver = ({producto}) => { 

  const AuthContext = useContext(authContext)
  const {usuarioAutenticado, usuario} = AuthContext
  
  const productosContext = useContext(productoContext)
  const {productoActual} = productosContext

  const [coincide, setCoincide] = useState(true)

  //Autentico al usuario y agrego el producto actual al state
  useEffect(() => {
    usuarioAutenticado()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  //Cuando me autentique, verifico que el producto que traigo es el del usuario que está logueado
   useEffect(() => {
    if(usuario) {
      productoActual(producto)
      if(producto.creador !== usuario._id) {
        setCoincide(false)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [usuario])

  return (
    <>
      {coincide ? (
        <Layout pagina={`Ver - ${producto.nombre}`}>
          <VerProducto
            key={producto._id}
            producto={producto}
          />
        </Layout>
      ): <NoEncontrado/>
      }
    </>
  )
};



export default Ver;
