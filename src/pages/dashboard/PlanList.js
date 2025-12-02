import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const mockPlans = [
    { id: 1, name: 'Plan Básico', price: '$25.000/mes', features: ['Mantenimiento anual', 'Soporte 24/7', 'Monitoreo básico'] },
    { id: 2, name: 'Plan Pro', price: '$45.000/mes', features: ['Mantenimiento semestral', 'Soporte prioritario', 'Monitoreo avanzado', 'Seguro incluido'] },
    { id: 3, name: 'Plan Enterprise', price: '$80.000/mes', features: ['Mantenimiento trimestral', 'Gerente de cuenta', 'Monitoreo en tiempo real', 'Seguro total', 'Reemplazo de equipos'] },
];

const PlanList = () => {
    return (
        <Container className="py-5">
            <h2 className="mb-4">Planes de Suscripción</h2>
            <Row>
                {mockPlans.map((plan) => (
                    <Col key={plan.id} md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="text-center mb-3">{plan.name}</Card.Title>
                                <h3 className="text-center text-primary mb-4">{plan.price}</h3>
                                <Card.Text>
                                    <ul className="list-unstyled">
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="mb-2">✓ {feature}</li>
                                        ))}
                                    </ul>
                                </Card.Text>
                                <div className="mt-auto text-center">
                                    <Link to={`/dashboard/plans/${plan.id}`}>
                                        <Button variant="outline-primary">Ver Detalles</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default PlanList;
