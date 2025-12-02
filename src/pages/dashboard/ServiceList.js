import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const mockServices = [
  { id: 1, name: 'Instalación Residencial', description: 'Paneles solares para casas', price: '$1,500,000' },
  { id: 2, name: 'Instalación Comercial', description: 'Soluciones para empresas', price: '$3,500,000' },
  { id: 3, name: 'Mantenimiento', description: 'Limpieza y revisión técnica', price: '$150,000' },
];

const ServiceList = () => {
  return (
    <Container className="py-5">
      <h2 className="mb-4">Gestión de Servicios</h2>
      <Row>
        {mockServices.map((service) => (
          <Col key={service.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Card.Text className="fw-bold">{service.price}</Card.Text>
                <Link to={`/dashboard/servicios/${service.id}`}>
                  <Button variant="primary">Ver Detalle</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceList;
