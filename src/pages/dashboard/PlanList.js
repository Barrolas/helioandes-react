import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner, Alert, Badge, Button } from 'react-bootstrap';
import { getPlans } from '../../services/api';

const PlanList = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                setLoading(true);
                setError(null);
                
                // Llamada a la API
                const plansData = await getPlans();
                setPlans(plansData);
            } catch (err) {
                console.error('Error al cargar planes:', err);
                setError(err.message || 'Error al cargar los planes');
            } finally {
                setLoading(false);
            }
        };

        fetchPlans();
    }, []);

    const handleViewDetails = (planId) => {
        navigate(`/dashboard/plans/${planId}`);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP'
        }).format(price);
    };

    if (loading) {
        return (
            <Container className="py-5">
                <div className="text-center">
                    <Spinner animation="border" role="status" style={{ color: 'var(--helio-primary)' }}>
                        <span className="visually-hidden">Cargando planes...</span>
                    </Spinner>
                    <p className="mt-3 text-muted">Cargando planes...</p>
                </div>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="py-5">
                <Alert variant="danger">
                    <Alert.Heading>Error al cargar planes</Alert.Heading>
                    <p>{error}</p>
                </Alert>
            </Container>
        );
    }

    return (
        <Container fluid className="py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Gestión de Planes</h2>
                <Badge bg="info" className="fs-6">
                    {plans.length} {plans.length === 1 ? 'plan' : 'planes'}
                </Badge>
            </div>

            {plans.length === 0 ? (
                <Alert variant="info">
                    <p className="mb-0">No hay planes disponibles.</p>
                </Alert>
            ) : (
                <Row className="g-4">
                    {plans.map((plan) => (
                        <Col key={plan.id} xs={12} md={6} lg={4}>
                            <Card className="h-100 shadow-sm border-0">
                                <Card.Body className="d-flex flex-column">
                                    <div className="text-center mb-3">
                                        <Badge 
                                            bg="primary" 
                                            className="p-2 mb-2"
                                            style={{
                                                fontSize: '14px',
                                                borderRadius: '64px',
                                                fontWeight: '500'
                                            }}
                                        >
                                            {plan.badge || plan.nombre}
                                        </Badge>
                                        <h4 className="mt-2"><strong>{plan.potencia}</strong></h4>
                                    </div>
                                    <Card.Text className="text-muted text-center mb-3">
                                        {plan.descripcion}
                                    </Card.Text>
                                    <div className="mb-3">
                                        <h5 className="text-center">
                                            {formatPrice(plan.precioContado)}
                                        </h5>
                                    </div>
                                    <div className="mb-3 flex-grow-1">
                                        <h6>Características:</h6>
                                        <ul className="list-unstyled">
                                            {plan.caracteristicas && plan.caracteristicas.map((caracteristica, index) => (
                                                <li key={index} className="mb-1">
                                                    <small className="text-muted">• {caracteristica}</small>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-auto">
                                        <Badge 
                                            bg={plan.estado === 'activo' ? 'success' : 'secondary'}
                                            className="mb-3 d-block text-center"
                                        >
                                            {plan.estado}
                                        </Badge>
                                        <Button
                                            variant="primary"
                                            className="w-100"
                                            onClick={() => handleViewDetails(plan.id)}
                                        >
                                            Ver Detalles
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default PlanList;
