import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner, Alert, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { getIconByName } from '../../utils/iconMapper';

const ServiceList = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/api/services')
            .then(response => {
                setServices(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener los servicios:', error);
                setError('Error al cargar los servicios');
                setLoading(false);
            });
    }, []);

    const handleViewDetails = (serviceId) => {
        navigate(`/dashboard/services/${serviceId}`);
    };

    const formatPrice = (price) => {
        if (price === 0) return 'Incluido';
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
                        <span className="visually-hidden">Cargando servicios...</span>
                    </Spinner>
                    <p className="mt-3 text-muted">Cargando servicios...</p>
                </div>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="py-5">
                <Alert variant="danger">
                    <Alert.Heading>Error al cargar servicios</Alert.Heading>
                    <p>{error}</p>
                </Alert>
            </Container>
        );
    }

    return (
        <Container fluid className="py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Gestión de Servicios</h2>
                <Badge bg="info" className="fs-6">
                    {services.length} {services.length === 1 ? 'servicio' : 'servicios'}
                </Badge>
            </div>

            {services.length === 0 ? (
                <Alert variant="info">
                    <p className="mb-0">No hay servicios disponibles.</p>
                </Alert>
            ) : (
                <Row className="g-4">
                    {services.map((service) => {
                        const icon = getIconByName(service.iconName);
                        return (
                            <Col key={service.id} xs={12} md={6} lg={4} xl={3}>
                                <Card className="h-100 shadow-sm border-0">
                                    <Card.Body className="d-flex flex-column">
                                        <div className="mb-3">
                                            {icon && (
                                                <FontAwesomeIcon 
                                                    icon={icon} 
                                                    size="3x" 
                                                    style={{ color: service.iconColor || '#007bff' }} 
                                                />
                                            )}
                                        </div>
                                        <Card.Title className="fw-bold">{service.nombre}</Card.Title>
                                        <Card.Text className="text-muted flex-grow-1">
                                            {service.descripcion}
                                        </Card.Text>
                                        <div className="mt-auto">
                                            <div className="mb-2">
                                                <small className="text-muted">Precio: </small>
                                                <strong>{formatPrice(service.precio)}</strong>
                                            </div>
                                            <div className="mb-2">
                                                <small className="text-muted">Duración: </small>
                                                <span>{service.duracion}</span>
                                            </div>
                                            <Badge 
                                                bg={service.estado === 'activo' ? 'success' : 'secondary'}
                                                className="mb-3"
                                            >
                                                {service.estado}
                                            </Badge>
                                            <button
                                                className="btn btn-primary w-100"
                                                onClick={() => handleViewDetails(service.id)}
                                            >
                                                Ver Detalles
                                            </button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            )}
        </Container>
    );
};

export default ServiceList;
