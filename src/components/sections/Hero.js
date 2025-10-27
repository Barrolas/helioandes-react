import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Button from '../ui/Button';

const HeroInicio = () => {
    return (
        <div as="section" id="inicio" className="py-5" style={{
            backgroundColor: 'var(--helio-bg-light)', 
            minHeight: '50vh'
        }}>
            <Container className="px-4 px-md-5">
                <Row className="align-items-center" style={{minHeight: '50vh'}}>
                    {/* Contenido de texto - siempre primera columna */}
                    <Col xs={12} lg={6} className="pe-lg-5 mb-4 mb-lg-0 order-1 order-lg-1">
                        <div className="mb-3 mb-md-1 text-start">
                            <span className="badge p-2" style={{
                                backgroundColor: 'var(--helio-badge-bg)',
                                color: 'var(--helio-badge-text)',
                                fontSize: '14px', 
                                borderRadius: '64px',
                                fontWeight: '500'
                            }}>
                                Energía solar
                            </span>
                        </div>
                        <h1 className="mb-3 mb-md-4 text-start" style={{
                            fontSize: 'clamp(2rem, 5vw, 3.2rem)', 
                            fontWeight: '700',
                            color: 'var(--helio-text-dark)',
                            lineHeight: '1.2',
                            marginBottom: '1.5rem'
                        }}>
                            Energía solar accesible y confiable para tu hogar o pyme
                        </h1>
                        <p className="mb-4 mb-md-5 text-start" style={{
                            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                            color: 'var(--helio-text-medium)',
                            lineHeight: '1.6',
                            marginBottom: '2rem'
                        }}>
                            Dimensiona tu sistema, conoce el costo estimado y solicita asesoría en minutos. La DEMO te guía con valores referenciales.
                        </p>
                        
                        {/* Imagen - visible en móvil y tablet, después de descripción */}
                        <div className="d-lg-none mb-4 text-center">
                            <Image 
                                src="/hero-image.png" 
                                fluid 
                                alt="Sistema de energía solar HelioAndes"
                                style={{maxHeight: '300px', width: 'auto'}}
                                className="img-fluid"
                            />
                        </div>
                        
                        <div className="d-flex flex-column flex-lg-row gap-3">
                            <Button 
                                href="#calculadora" 
                                variant="primary" 
                                size="lg" 
                                className="flex-fill flex-lg-fill-0"
                                helioStyle="filled"
                                style={{
                                    padding: '12px 24px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    borderRadius: '8px',
                                    minWidth: '140px'
                                }}
                            >
                                Ver DEMO
                            </Button>
                            <Button 
                                href="/catalogo-helioandes.pdf" 
                                target="_blank" 
                                variant="outline-primary" 
                                size="lg"
                                className="flex-fill flex-lg-fill-0"
                                helioStyle="outlined"
                                style={{
                                    padding: '12px 24px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    borderRadius: '8px',
                                    minWidth: '180px'
                                }}
                            >
                                Descargar catálogo
                            </Button>
                        </div>
                    </Col>
                    
                    {/* Imagen - solo visible en desktop */}
                    <Col xs={12} lg={6} className="ps-lg-4 order-2 order-lg-2 d-none d-lg-block">
                        <div className="d-flex justify-content-center justify-content-md-start align-items-center" style={{height: '100%'}}>
                            <Image 
                                src="/hero-image.png" 
                                fluid 
                                alt="Sistema de energía solar HelioAndes"
                                style={{maxHeight: '400px', width: 'auto'}}
                                className="img-fluid"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroInicio;