import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">RetroWear</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#remeras">Remeras</Nav.Link>
            <Nav.Link href="#pantalones">Pantalones</Nav.Link>
            <Nav.Link href="#calzado">Calzado</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar