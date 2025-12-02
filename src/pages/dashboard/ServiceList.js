import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner, Alert, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBolt, 
    faWrench, 
    faChartLine, 
    faBriefcase,
    faLightbulb,
    faTools
} from '@fortawesome/free-solid-svg-icons';
import { getIconByName } from '../../utils/iconMapper';

// Datos mock temporales - se reemplazarán con API cuando esté disponible
const mockServices = [
    {
        id: 1,
        nombre: "Estudio energético",
        descripcion: "Análisis de consumo y propuesta ajustada a tu perfil.",
        precio: 150000,
        estado: "activo",
        iconName: "bolt",
        iconColor: "#FF6B35",
        categoria: "consultoria",
        duracion: "2-3 semanas"
    },
    {
        id: 2,
        nombre: "Instalación certificada",
        descripcion: "Ejecutada por personal acreditado y normativa vigente.",
        precio: 0,
        estado: "activo",
        iconName: "wrench",
        iconColor: "#8B4513",
        categoria: "instalacion",
        duracion: "1-2 días"
    },
    {
        id: 3,
        nombre: "Monitoreo",
        descripcion: "Seguimiento de rendimiento y alertas preventivas.",
        precio: 50000,
        estado: "activo",
        iconName: "chart-line",
        iconColor: "#9370DB",
        categoria: "monitoreo",
        duracion: "Continuo"
    },
    {
        id: 4,
        nombre: "Mantención",
        descripcion: "Planes periódicos para extender la vida útil del sistema.",
        precio: 80000,
        estado: "activo",
        iconName: "briefcase",
        iconColor: "#FF69B4",
        categoria: "mantencion",
        duracion: "Anual"
    }
];

const ServiceList = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                setError(null);
                
                // TODO: Reemplazar con llamada a API cuando esté disponible
                // const servicesData = await getServices();
                
                // Por ahora usar datos mock
                await new Promise(resolve => setTimeout(resolve, 500)); // Simular carga
                setServices(mockServices);
            } catch (err) {
                console.error('Error al cargar servicios:', err);
                setError(err.message || 'Error al cargar los servicios');
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
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
