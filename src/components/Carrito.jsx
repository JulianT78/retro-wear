import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    <div className='container'>
      <h1>Carrito</h1>

      {
        carrito.map((prod) => (
          <div key={prod.id}>
            <br />
            <h3>{prod.nombre}</h3>
            <p>Precio unitario:{prod.precio}</p>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio total: ${prod.precio * prod.cantidad}</p>
          </div>
        ))
      }

      {
        carrito.length > 0 ?
        <div>
          <h2>Precio total: ${precioTotal()}</h2>
          <button onClick={handleVaciar} className='btn btn-danger'>Vaciar</button>
        </div> :
        <h2>El carrito está vacío</h2>
      }

    </div>
  )
}

export default Carrito