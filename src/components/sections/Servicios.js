import React from 'react';
import Section from '../ui/Section';
import { Card, CardGroup } from 'react-bootstrap';
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
            <CardGroup>
                <Card style={{ border: 'none' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                        <div style={{ 
                            width: '80px', 
                            height: '80px', 
                            backgroundColor: '#BCE0D4', 
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '16px',
                            flexShrink: 0
                        }}>
                            <FontAwesomeIcon icon={faBolt} size="2x" style={{ color: '#FF6B35', transform: 'rotate(-10deg)' }} />
                        </div>
                        <div>
                            <Card.Title style={{ fontWeight: 'bold', marginBottom: '8px' }}>Estudio energético</Card.Title>
                            <Card.Text style={{ color: '#6c757d', lineHeight: '1.5' }}>
                                Análisis de consumo y propuesta ajustada a tu perfil.
                            </Card.Text>
                        </div>
                    </div>
                </Card>
                
                <Card style={{ border: 'none' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                        <div style={{ 
                            width: '80px', 
                            height: '80px', 
                            backgroundColor: '#BCE0D4', 
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '16px',
                            flexShrink: 0
                        }}>
                            <FontAwesomeIcon icon={faWrench} size="2x" style={{ color: '#8B4513', transform: 'rotate(10deg)' }} />
                        </div>
                        <div>
                            <Card.Title style={{ fontWeight: 'bold', marginBottom: '8px' }}>Instalación certificada</Card.Title>
                            <Card.Text style={{ color: '#6c757d', lineHeight: '1.5' }}>
                                Ejecutada por personal acreditado y normativa vigente.
                            </Card.Text>
                        </div>
                    </div>
                </Card>
                
                <Card style={{ border: 'none' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                        <div style={{ 
                            width: '80px', 
                            height: '80px', 
                            backgroundColor: '#BCE0D4', 
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '16px',
                            flexShrink: 0
                        }}>
                            <FontAwesomeIcon icon={faChartLine} size="2x" style={{ color: '#9370DB' }} />
                        </div>
                        <div>
                            <Card.Title style={{ fontWeight: 'bold', marginBottom: '8px' }}>Monitoreo</Card.Title>
                            <Card.Text style={{ color: '#6c757d', lineHeight: '1.5' }}>
                                Seguimiento de rendimiento y alertas preventivas.
                            </Card.Text>
                        </div>
                    </div>
                </Card>
                
                <Card style={{ border: 'none' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                        <div style={{ 
                            width: '80px', 
                            height: '80px', 
                            backgroundColor: '#BCE0D4', 
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '16px',
                            flexShrink: 0
                        }}>
                            <FontAwesomeIcon icon={faBriefcase} size="2x" style={{ color: '#FF69B4' }} />
                        </div>
                        <div>
                            <Card.Title style={{ fontWeight: 'bold', marginBottom: '8px' }}>Mantención</Card.Title>
                            <Card.Text style={{ color: '#6c757d', lineHeight: '1.5' }}>
                                Planes periódicos para extender la vida útil del sistema.
                            </Card.Text>
                        </div>
                    </div>
                </Card>
            </CardGroup>
        </Section>
    );
};

export default Servicios;
