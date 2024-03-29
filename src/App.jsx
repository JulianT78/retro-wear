import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from './context/CartContext'
import Carrito from './components/Carrito'
import Checkout from './components/Checkout';
import Contacto from './components/Contacto';

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
