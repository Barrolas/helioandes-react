import React from 'react';
import Section from '../ui/Section';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


const Testimonios = () => {
    return (
        <Section 
            id="testimonios"
            title="Testimonios" 
            description="Clientes que ya confían en HelioAndes"
            bgColor="var(--helio-bg-light)"
        >
            {/* Contenido de testimonios aquí */}
            <Container>
                <Row className="g-4">
                    <Col xs={12} md={4}>
                        <Card className="border-0 p-3 shadow-sm rounded-4 h-100">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="mb-3"><FontAwesomeIcon icon={faUserCircle} className="me-2" size="xl" color="var(--helio-primary)"/><strong>María, Las Condes</strong></Card.Title>
                                <Card.Text className="text-muted flex-grow-1">
                                    "Mi cuenta de luz bajó 80% desde que instalé los paneles. La inversión se pagó sola en 3 años."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="border-0 p-3 shadow-sm rounded-4 h-100">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="mb-3"><FontAwesomeIcon icon={faUserCircle} className="me-2" size="xl" color="var(--helio-primary)"/><strong>Carlos, Maipú</strong></Card.Title>
                                <Card.Text className="text-muted flex-grow-1">
                                    "Tengo una pequeña empresa. Los paneles solares redujeron mis costos operativos significativamente."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="border-0 p-3 shadow-sm rounded-4 h-100">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="mb-3"><FontAwesomeIcon icon={faUserCircle} className="me-2" size="xl" color="var(--helio-primary)"/><strong>Ana, Providencia</strong></Card.Title>
                                <Card.Text className="text-muted flex-grow-1">
                                    "Instalación profesional y rápida. Ahora genero mi propia energía limpia y ahorro dinero."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default Testimonios;