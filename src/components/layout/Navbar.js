import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCog } from '@fortawesome/free-solid-svg-icons';

const NavbarInicio = () => {
    // Configuración condicional para las rutas de imágenes
    const logoPath = process.env.NODE_ENV === 'production' 
        ? './helioandes-logo.png'  // Para GitHub Pages
        : `${process.env.PUBLIC_URL}/helioandes-logo.png`;  // Para desarrollo local

    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow-sm" sticky='top'>
            <Container id="navbar">
            
                <Navbar.Brand href="Inicio" className="d-flex align-items-center"><img src={logoPath} alt="HelioAndes Logo" style={{height: '40px', marginRight: '10px'}} /><b> HelioAndes</b></Navbar.Brand>   
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
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#top">Inicio</Nav.Link>
                        <Nav.Link href="#servicios">Servicios</Nav.Link>
                        <Nav.Link href="#soluciones">Soluciones</Nav.Link>
                        <Nav.Link href="#calculadora">DEMO</Nav.Link>
                        <Nav.Link href="#planes">Planes</Nav.Link>
                        <Nav.Link href="#testimonios">Testimonios</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard" className="ms-2">
                            <Button 
                                className="helio-btn-outlined"
                                size="sm"
                            >
                                <FontAwesomeIcon icon={faCog} className="me-1" />
                                Admin
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarInicio;