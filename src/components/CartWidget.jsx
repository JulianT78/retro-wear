import React, { useContext } from 'react'
import { MdShoppingCart } from 'react-icons/md';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

  const {cantidadCarrito} = useContext(CartContext);

  return (
    <div>
      <Nav.Link as={Link} to="/carrito">
        <MdShoppingCart />
        <span className='numero'>{cantidadCarrito()}</span>
      </Nav.Link>
    </div>
  )
}

export default CartWidget