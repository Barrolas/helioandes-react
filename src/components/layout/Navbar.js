import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavbarInicio = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow-sm" sticky='top'>
            <Container id="navbar">
            
                <Navbar.Brand href="Inicio" className="d-flex align-items-center"><img src="./helioandes-logo.png" alt="HelioAndes Logo" style={{height: '40px', marginRight: '10px'}} /><b> HelioAndes</b></Navbar.Brand>   
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    style={{
                        borderColor: 'var(--helio-primary)',
                        backgroundColor: 'transparent',
                        borderWidth: '3px'
                    }}
                >
                    <FontAwesomeIcon icon={faBars} style={{ color: 'var(--helio-primary)' }} />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#top">Inicio</Nav.Link>
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