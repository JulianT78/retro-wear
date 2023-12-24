import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">RetroWear</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#remeras">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#pantalones">Pantalones</NavDropdown.Item>
              <NavDropdown.Item href="#calzado">Calzado</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar