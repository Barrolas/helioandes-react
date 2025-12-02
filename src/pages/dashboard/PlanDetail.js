import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button, ListGroup } from 'react-bootstrap';

const mockPlans = [
    { id: 1, name: 'Plan Básico', price: '$25.000/mes', description: 'Ideal para hogares pequeños con consumo moderado.', features: ['Mantenimiento anual', 'Soporte 24/7', 'Monitoreo básico'] },
    { id: 2, name: 'Plan Pro', price: '$45.000/mes', description: 'Perfecto para familias y pequeñas empresas que requieren mayor seguridad.', features: ['Mantenimiento semestral', 'Soporte prioritario', 'Monitoreo avanzado', 'Seguro incluido'] },
    { id: 3, name: 'Plan Enterprise', price: '$80.000/mes', description: 'Solución integral para grandes instalaciones y empresas.', features: ['Mantenimiento trimestral', 'Gerente de cuenta', 'Monitoreo en tiempo real', 'Seguro total', 'Reemplazo de equipos'] },
];

const PlanDetail = () => {
    const { id } = useParams();
    const plan = mockPlans.find(p => p.id === parseInt(id));

    if (!plan) {
        return (
            <Container className="py-5">
                <h2>Plan no encontrado</h2>
                <Link to="/dashboard/plans">
                    <Button variant="secondary">Volver</Button>
                </Link>
            </Container>
        );
    }

    return (
        <Container className="py-5">
            <Card>
                <Card.Header as="h5">Detalle del Plan</Card.Header>
                <Card.Body>
                    <Card.Title className="display-6 mb-3">{plan.name}</Card.Title>
                    <Card.Subtitle className="mb-4 text-muted">{plan.price}</Card.Subtitle>
                    <Card.Text className="lead">{plan.description}</Card.Text>

                    <h5 className="mt-4">Características Incluidas:</h5>
                    <ListGroup variant="flush" className="mb-4">
                        {plan.features.map((feature, index) => (
                            <ListGroup.Item key={index}>{feature}</ListGroup.Item>
                        ))}
                    </ListGroup>

                    <Link to="/dashboard/plans">
                        <Button variant="secondary">Volver a la lista</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default PlanDetail;
