import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

const mockServices = [
    { id: 1, name: 'Instalación Residencial', description: 'Paneles solares para casas', price: '$1,500,000', details: 'Incluye 8 paneles, inversor y batería.' },
    { id: 2, name: 'Instalación Comercial', description: 'Soluciones para empresas', price: '$3,500,000', details: 'Sistema escalable para oficinas y galpones.' },
    { id: 3, name: 'Mantenimiento', description: 'Limpieza y revisión técnica', price: '$150,000', details: 'Visita técnica semestral.' },
];

const ServiceDetail = () => {
    const { id } = useParams();
    const service = mockServices.find(s => s.id === parseInt(id));

    if (!service) {
        return (
            <Container className="py-5">
                <h2>Servicio no encontrado</h2>
                <Link to="/dashboard/servicios">
                    <Button variant="secondary">Volver</Button>
                </Link>
            </Container>
        );
    }

    return (
        <Container className="py-5">
            <Card>
                <Card.Header as="h5">Detalle del Servicio</Card.Header>
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <Card.Text><strong>Precio:</strong> {service.price}</Card.Text>
                    <Card.Text><strong>Detalles:</strong> {service.details}</Card.Text>
                    <Link to="/dashboard/servicios">
                        <Button variant="secondary">Volver a la lista</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ServiceDetail;
