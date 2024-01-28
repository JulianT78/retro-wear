import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">RetroWear</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown" to="/">
              <NavDropdown.Item as={Link} to="/productos/remeras">Remeras</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/pantalones">Pantalones</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/calzado">Calzado</NavDropdown.Item>
            </NavDropdown>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar