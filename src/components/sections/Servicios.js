import React from 'react';
import Section from '../ui/Section';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faWrench, faChartLine, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Servicios = () => {
    return (
        <Section 
            id="servicios"
            title="Servicios" 
            description="Estudio energético, instalación certificada, monitoreo y mantención"
            bgColor="var(--helio-bg-light)"
        >
            <Row className="g-4">
                <Col lg={6} xl={3} className="mb-4">
                    <Card className="bg-white border-0 shadow-sm rounded-4 h-100 p-4 d-flex flex-column">
                        <div className="service-icon mb-3">
                            <FontAwesomeIcon icon={faBolt} size="2x" style={{ color: '#FF6B35', transform: 'rotate(-10deg)' }} />
                        </div>
                        <Card.Title className="fw-bold mb-2">Estudio energético</Card.Title>
                        <Card.Text className="text-muted lh-base">
                            Análisis de consumo y propuesta ajustada a tu perfil.
                        </Card.Text>
                    </Card>
                </Col>
                
                <Col lg={6} xl={3} className="mb-4">
                    <Card className="bg-white border-0 shadow-sm rounded-4 h-100 p-4 d-flex flex-column">
                        <div className="service-icon mb-3">
                            <FontAwesomeIcon icon={faWrench} size="2x" style={{ color: '#8B4513', transform: 'rotate(10deg)' }} />
                        </div>
                        <Card.Title className="fw-bold mb-2">Instalación certificada</Card.Title>
                        <Card.Text className="text-muted lh-base">
                            Ejecutada por personal acreditado y normativa vigente.
                        </Card.Text>
                    </Card>
                </Col>
                
                <Col lg={6} xl={3} className="mb-4">
                    <Card className="bg-white border-0 shadow-sm rounded-4 h-100 p-4 d-flex flex-column">
                        <div className="service-icon mb-3">
                            <FontAwesomeIcon icon={faChartLine} size="2x" style={{ color: '#9370DB' }} />
                        </div>
                        <Card.Title className="fw-bold mb-2">Monitoreo</Card.Title>
                        <Card.Text className="text-muted lh-base">
                            Seguimiento de rendimiento y alertas preventivas.
                        </Card.Text>
                    </Card>
                </Col>
                
                <Col lg={6} xl={3} className="mb-4">
                    <Card className="bg-white border-0 shadow-sm rounded-4 h-100 p-4 d-flex flex-column">
                        <div className="service-icon mb-3">
                            <FontAwesomeIcon icon={faBriefcase} size="2x" style={{ color: '#FF69B4' }} />
                        </div>
                        <Card.Title className="fw-bold mb-2">Mantención</Card.Title>
                        <Card.Text className="text-muted lh-base">
                            Planes periódicos para extender la vida útil del sistema.
                        </Card.Text>
                    </Card>
                </Col>
            </Row>
        </Section>
    );
};

export default Servicios;
