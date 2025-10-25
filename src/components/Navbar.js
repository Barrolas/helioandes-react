import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarInicio = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="Inicio">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="Inicio">Inicio</Nav.Link>
                        <Nav.Link href="Servicios">Servicios</Nav.Link>
                        <Nav.Link href="DEMO">Demo</Nav.Link>
                        <Nav.Link href="Planes">Planes</Nav.Link>
                        <Nav.Link href="Testimonios">Testimonios</Nav.Link>
                        <Nav.Link href="FAQ">FAQ</Nav.Link>
                        <Nav.Link href="contactos">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarInicio;