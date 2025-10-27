import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

// Clases principales:
// - bg-dark (fondo)
// - text-white (texto)
// - py-3 (espaciado)
// - text-start y text-end (alineación)
// - text-decoration-underline (subrayado)

const FooterInicio = () => {
    return (
        <footer className="bg-dark text-white py-3">
            <Container>
                <Row className="align-items-center">
                    <Col className="text-start">
                        <p className="mb-0">© 2025 HelioAndes Energía</p>
                    </Col>
                    
                    <Col className="text-end">
                        <Nav>
                            <Nav.Link href="/privacidad" className="text-white text-decoration-underline">
                                Privacidad
                            </Nav.Link>
                            <span className="mx-2">•</span>
                            <Nav.Link href="/terminos" className="text-white text-decoration-underline">
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