import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Spinner, Alert, Badge, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { getIconByName } from '../../utils/iconMapper';
import { getServiceById } from '../../services/api';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchService = async () => {
            try {
                setLoading(true);
                setError(null);
                
                // Llamada a la API
                const serviceData = await getServiceById(id);
                setService(serviceData);
            } catch (err) {
                console.error('Error al cargar servicio:', err);
                setError(err.message || 'Error al cargar el servicio');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchService();
        }
    }, [id]);

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
                        <span className="visually-hidden">Cargando servicio...</span>
                    </Spinner>
                    <p className="mt-3 text-muted">Cargando detalles del servicio...</p>
                </div>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="py-5">
                <Alert variant="danger">
                    <Alert.Heading>Error</Alert.Heading>
                    <p>{error}</p>
                    <Button variant="outline-primary" onClick={() => navigate('/dashboard/services')}>
                        Volver a la lista
                    </Button>
                </Alert>
            </Container>
        );
    }

    if (!service) {
        return (
            <Container className="py-5">
                <Alert variant="warning">
                    <Alert.Heading>Servicio no encontrado</Alert.Heading>
                    <p>El servicio solicitado no existe.</p>
                    <Button variant="outline-primary" onClick={() => navigate('/dashboard/services')}>
                        Volver a la lista
                    </Button>
                </Alert>
            </Container>
        );
    }

    const icon = getIconByName(service.iconName);

    return (
        <Container fluid className="py-4">
            <Button 
                variant="outline-secondary" 
                className="mb-4"
                onClick={() => navigate('/dashboard/services')}
            >
                <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                Volver a la lista
            </Button>

            <Card className="shadow-sm">
                <Card.Header className="bg-white">
                    <div className="d-flex align-items-center">
                        {icon && (
                            <FontAwesomeIcon 
                                icon={icon} 
                                size="2x" 
                                className="me-3"
                                style={{ color: service.iconColor || '#007bff' }} 
                            />
                        )}
                        <div>
                            <h3 className="mb-0">{service.nombre}</h3>
                            <Badge 
                                bg={service.estado === 'activo' ? 'success' : 'secondary'}
                                className="mt-2"
                            >
                                {service.estado}
                            </Badge>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Row className="g-4">
                        <Col md={6}>
                            <h5>Descripción</h5>
                            <p className="text-muted">{service.descripcion}</p>
                        </Col>
                        <Col md={6}>
                            <h5>Información del Servicio</h5>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td><strong>Precio:</strong></td>
                                        <td>{formatPrice(service.precio)}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Duración:</strong></td>
                                        <td>{service.duracion}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Categoría:</strong></td>
                                        <td>
                                            <Badge bg="info">{service.categoria}</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Estado:</strong></td>
                                        <td>
                                            <Badge bg={service.estado === 'activo' ? 'success' : 'secondary'}>
                                                {service.estado}
                                            </Badge>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ServiceDetail;
