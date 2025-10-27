import React from 'react';
import Section from '../ui/Section';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Button from '../ui/Button';


const Planes = () => {
    return (
        <Section 
            id="planes"
            title="Planes" 
            description="Elige el plan que se ajusta a tu proyecto"
            bgColor="var(--helio-bg-light)"
        >
            {/* Contenido de planes aquí */}
            <Container>
                <Row className="g-4">
                    <Col xs={12} md={4}>
                        <Card className="border-0 p-3 shadow-sm rounded-4 h-100">
                            <Card.Body className="text-center justify-content-center">
                                <span className="badge p-2 mb-2" style={{
                                backgroundColor: 'var(--helio-badge-bg)',
                                color: 'var(--helio-badge-text)',
                                fontSize: '14px', 
                                borderRadius: '64px',
                                fontWeight: '500'
                            }}>
                                Básico
                            </span>
                            <h4><strong>3-5 kW</strong></h4>
                                <p className="text-muted mb-1">Estudio energético</p>
                                <p className="text-muted mb-1">Instalación estándar</p>
                                <p className="text-muted mb-3">Monitoreo básico</p>
                                <Button variant="primary" className="w-100 p-3 rounded-4" helioStyle="filled" href="#contacto">Solicitar Evaluación</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="border-0 p-3 shadow-sm rounded-4 h-100">
                            <Card.Body className="text-center justify-content-center">
                            <span className="badge p-2 mb-2" style={{
                                backgroundColor: 'var(--helio-badge-bg)',
                                color: 'var(--helio-badge-text)',
                                fontSize: '14px', 
                                borderRadius: '64px',
                                fontWeight: '500'
                            }}>
                                Optimizado
                            </span>
                            <h4><strong>10-15 kW</strong></h4>
                                    <p className="text-muted mb-1">Estudio avanzado</p>
                                    <p className="text-muted mb-1">Instalación optimizada</p>
                                    <p className="text-muted mb-3">Monitoreo avanzado</p>    
                                    <Button variant="primary" className="w-100 p-3 rounded-4" helioStyle="filled" href="#contacto">Solicitar Evaluación</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="border-0 p-3 shadow-sm rounded-4 h-100">
                            <Card.Body className="text-center justify-content-center">
                                <span className="badge p-2 mb-2" style={{
                                backgroundColor: 'var(--helio-badge-bg)',
                                color: 'var(--helio-badge-text)',
                                fontSize: '14px', 
                                borderRadius: '64px',
                                fontWeight: '500'
                            }}>
                                Autónomo
                            </span>
                            <h4><strong>Híbrido + Baterías</strong></h4>
                                <p className="text-muted mb-1">Diseño off-grid</p>
                                <p className="text-muted mb-1">Almacenamiento</p>
                                <p className="text-muted mb-3">Soporte preferente</p>
                                <Button variant="primary" className="w-100 p-3 rounded-4" helioStyle="filled" href="#contacto">Solicitar Evaluación</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </Section>
    );
};

export default Planes;