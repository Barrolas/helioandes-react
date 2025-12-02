import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Spinner, Alert, Badge, Button, Row, Col, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Datos mock temporales - se reemplazarán con API cuando esté disponible
const mockPlans = [
    {
        id: 1,
        nombre: "Básico",
        potencia: "3-5 kW",
        badge: "Básico",
        descripcion: "Plan ideal para hogares pequeños con consumo moderado",
        precioContado: 2500000,
        estado: "activo",
        caracteristicas: [
            "Estudio energético",
            "Instalación estándar",
            "Monitoreo básico",
            "Garantía 5 años"
        ],
        incluye: [
            "Paneles solares 3-5 kW",
            "Inversor básico",
            "Instalación estándar",
            "Sistema de monitoreo básico"
        ],
        noIncluye: [
            "Baterías",
            "Mantención extendida",
            "Soporte premium"
        ]
    },
    {
        id: 2,
        nombre: "Optimizado",
        potencia: "10-15 kW",
        badge: "Optimizado",
        descripcion: "Solución completa para hogares grandes y pequeñas empresas",
        precioContado: 6500000,
        estado: "activo",
        caracteristicas: [
            "Estudio avanzado",
            "Instalación optimizada",
            "Monitoreo avanzado",
            "Garantía 10 años"
        ],
        incluye: [
            "Paneles solares 10-15 kW",
            "Inversor de alta eficiencia",
            "Instalación optimizada",
            "Sistema de monitoreo avanzado",
            "Mantención anual incluida"
        ],
        noIncluye: [
            "Baterías",
            "Soporte 24/7"
        ]
    },
    {
        id: 3,
        nombre: "Autónomo",
        potencia: "Híbrido + Baterías",
        badge: "Autónomo",
        descripcion: "Sistema completo con almacenamiento para máxima independencia energética",
        precioContado: 12000000,
        estado: "activo",
        caracteristicas: [
            "Diseño off-grid",
            "Almacenamiento",
            "Soporte preferente",
            "Garantía 15 años"
        ],
        incluye: [
            "Paneles solares configurables",
            "Sistema de baterías",
            "Inversor híbrido",
            "Instalación especializada",
            "Sistema de monitoreo premium",
            "Mantención bianual incluida",
            "Soporte técnico preferente"
        ],
        noIncluye: [
            "Instalación en ubicaciones remotas (costo adicional)"
        ]
    }
];

const PlanDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlan = async () => {
            try {
                setLoading(true);
                setError(null);
                
                // TODO: Reemplazar con llamada a API cuando esté disponible
                // const planData = await getPlanById(id);
                
                // Por ahora usar datos mock
                await new Promise(resolve => setTimeout(resolve, 300)); // Simular carga
                const foundPlan = mockPlans.find(p => p.id === parseInt(id));
                
                if (!foundPlan) {
                    throw new Error('Plan no encontrado');
                }
                
                setPlan(foundPlan);
            } catch (err) {
                console.error('Error al cargar plan:', err);
                setError(err.message || 'Error al cargar el plan');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPlan();
        }
    }, [id]);

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
                        <span className="visually-hidden">Cargando plan...</span>
                    </Spinner>
                    <p className="mt-3 text-muted">Cargando detalles del plan...</p>
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
                    <Button variant="outline-primary" onClick={() => navigate('/dashboard/plans')}>
                        Volver a la lista
                    </Button>
                </Alert>
            </Container>
        );
    }

    if (!plan) {
        return (
            <Container className="py-5">
                <Alert variant="warning">
                    <Alert.Heading>Plan no encontrado</Alert.Heading>
                    <p>El plan solicitado no existe.</p>
                    <Button variant="outline-primary" onClick={() => navigate('/dashboard/plans')}>
                        Volver a la lista
                    </Button>
                </Alert>
            </Container>
        );
    }

    return (
        <Container fluid className="py-4">
            <Button 
                variant="outline-secondary" 
                className="mb-4"
                onClick={() => navigate('/dashboard/plans')}
            >
                <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                Volver a la lista
            </Button>

            <Card className="shadow-sm">
                <Card.Header className="bg-white">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
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
                            <h3 className="mb-0 mt-2">{plan.nombre}</h3>
                            <h4 className="text-muted">{plan.potencia}</h4>
                        </div>
                        <Badge 
                            bg={plan.estado === 'activo' ? 'success' : 'secondary'}
                            className="fs-6"
                        >
                            {plan.estado}
                        </Badge>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Row className="g-4">
                        <Col md={6}>
                            <h5>Descripción</h5>
                            <p className="text-muted">{plan.descripcion}</p>
                            
                            <h5 className="mt-4">Precio</h5>
                            <h3 className="text-primary">{formatPrice(plan.precioContado)}</h3>
                        </Col>
                        <Col md={6}>
                            <h5>Características Principales</h5>
                            <ListGroup>
                                {plan.caracteristicas && plan.caracteristicas.map((caracteristica, index) => (
                                    <ListGroup.Item key={index}>
                                        {caracteristica}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>

                    <Row className="g-4 mt-2">
                        <Col md={6}>
                            <h5 className="text-success">✓ Incluye</h5>
                            <ListGroup>
                                {plan.incluye && plan.incluye.map((item, index) => (
                                    <ListGroup.Item key={index} variant="success">
                                        {item}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                        <Col md={6}>
                            <h5 className="text-warning">✗ No Incluye</h5>
                            <ListGroup>
                                {plan.noIncluye && plan.noIncluye.map((item, index) => (
                                    <ListGroup.Item key={index} variant="warning">
                                        {item}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default PlanDetail;
