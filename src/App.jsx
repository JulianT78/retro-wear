import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContext } from './context/CartContext'
import Carrito from './components/Carrito'

function App() {
  const [count, setCount] = useState(0)

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };

    const nuevoCarrito = [...carrito];
    const estaElProducto = nuevoCarrito.find(producto => producto.id === itemAgregado.id);

    if (estaElProducto) {
      estaElProducto.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
  }

  const cantidadCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  }

  return (
    <div>
      <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadCarrito }}>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>

        </BrowserRouter>
      </CartContext.Provider>
    </div>
  )
}

export default App
