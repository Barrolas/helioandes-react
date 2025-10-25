import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarInicio = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow-sm" sticky='top'>
            <Container id="navbar">
            
                <Navbar.Brand href="Inicio " className="d-flex align-items-center"><img src="/helioandes-logo.png" alt="HelioAndes Logo" style={{height: '30px', marginRight: '10px'}} /> HelioAndes</Navbar.Brand>   
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#">Inicio</Nav.Link>
                        <Nav.Link href="#servicios">Servicios</Nav.Link>
                        <Nav.Link href="#soluciones">Soluciones</Nav.Link>
                        <Nav.Link href="#calculadora">DEMO</Nav.Link>
                        <Nav.Link href="#planes">Planes</Nav.Link>
                        <Nav.Link href="#testimonios">Testimonios</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarInicio;