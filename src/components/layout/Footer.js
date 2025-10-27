import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const FooterInicio = () => {
    return (
        <footer className="py-4" style={{ backgroundColor: 'var(--helio-bg-dark)' }}>
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col xs={12} md={6} className="text-center text-md-start mb-3 mb-md-0">
                        <p className="mb-0 text-light fs-6" style={{ whiteSpace: 'nowrap' }}>
                            © 2025 HelioAndes Energía
                        </p>
                    </Col>
                    
                    <Col xs={12} md={6} className="text-center text-md-end">
                        <Nav className="justify-content-center justify-content-md-end align-items-center">
                            <Nav.Link 
                                href="/privacidad" 
                                className="text-light text-decoration-none px-2 py-1 d-flex align-items-center"
                                style={{ 
                                    color: 'var(--helio-text-light) !important',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--helio-primary-light)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--helio-text-light)'}
                            >
                                Privacidad
                            </Nav.Link>
                            <span className="text-light mx-2 d-flex align-items-center">•</span>
                            <Nav.Link 
                                href="/terminos" 
                                className="text-light text-decoration-none px-2 py-1 d-flex align-items-center"
                                style={{ 
                                    color: 'var(--helio-text-light) !important',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--helio-primary-light)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--helio-text-light)'}
                            >
                                Términos
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default FooterInicio;