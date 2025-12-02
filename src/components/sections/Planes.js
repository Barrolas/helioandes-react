import React, { useState, useEffect } from 'react';
import Section from '../ui/Section';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import Button from '../ui/Button';
import axios from 'axios';

const Planes = () => {
    const [planesData, setPlanesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/api/plans')
            .then(response => {
                // Filtrar solo planes activos
                const activePlans = response.data.filter(plan => plan.estado === 'activo');
                setPlanesData(activePlans);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener los planes:', error);
                setError('Error al cargar los planes');
                setLoading(false);
            });
    }, []);

    return (
        <Section 
            id="planes"
            title="Planes" 
            description="Elige el plan que se ajusta a tu proyecto"
            bgColor="var(--helio-bg-light)"
        >
            <Container>
                {loading && (
                    <div className="text-center py-5">
                        <Spinner animation="border" role="status" style={{ color: 'var(--helio-primary)' }}>
                            <span className="visually-hidden">Cargando planes...</span>
                        </Spinner>
                        <p className="mt-3 text-muted">Cargando planes...</p>
                    </div>
                )}

                {error && (
                    <Alert variant="warning" className="mb-4">
                        <Alert.Heading>Error al cargar planes</Alert.Heading>
                        <p>{error}</p>
                        <p className="mb-0">
                            <small>Por favor, verifica tu conexión o intenta nuevamente más tarde.</small>
                        </p>
                    </Alert>
                )}

                {!loading && !error && planesData.length > 0 && (
                    <Row className="g-4">
                        {planesData.map((plan) => (
                            <Col key={plan.id} xs={12} lg={4}>
                                <Card className="border-0 p-3 shadow-sm rounded-4 h-100">
                                    <Card.Body className="text-center justify-content-center">
                                        <span 
                                            className="badge p-2 mb-2" 
                                            style={{
                                                backgroundColor: 'var(--helio-badge-bg)',
                                                color: 'var(--helio-badge-text)',
                                                fontSize: '14px', 
                                                borderRadius: '64px',
                                                fontWeight: '500'
                                            }}
                                        >
                                            {plan.badge || plan.nombre}
                                        </span>
                                        <h4><strong>{plan.potencia}</strong></h4>
                                        {plan.caracteristicas && plan.caracteristicas.map((caracteristica, index) => (
                                            <p key={index} className="text-muted mb-1">{caracteristica}</p>
                                        ))}
                                        <Button 
                                            variant="primary" 
                                            className="w-100 p-3 rounded-4" 
                                            helioStyle="filled" 
                                            href="#contacto"
                                        >
                                            Solicitar Evaluación
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}

                {!loading && !error && planesData.length === 0 && (
                    <Alert variant="info" className="mb-4">
                        <p className="mb-0">No hay planes disponibles en este momento.</p>
                    </Alert>
                )}
            </Container>
        </Section>
    );
};

export default Planes;