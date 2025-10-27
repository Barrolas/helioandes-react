import React, { useState } from 'react';
import Section from '../ui/Section';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const FAQ = () => {
    const [activeKey, setActiveKey] = useState('0');

    return (
        <Section 
            id="faq"
            title="Preguntas Frecuentes" 
            description="Resolvemos tus dudas sobre energía solar"
            bgColor="var(--helio-bg-light)"
        >
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} lg={8}>
                        <Accordion 
                            activeKey={activeKey} 
                            onSelect={(eventKey) => setActiveKey(eventKey)}
                            className="border-0"
                        >
                            <Accordion.Item eventKey="0" className="border-0 mb-3 shadow-sm" style={{borderRadius: '12px', overflow: 'hidden'}}>
                                <Accordion.Header className="border-0 bg-white">
                                    <strong>¿Incluye trámites y certificación?</strong>
                                </Accordion.Header>
                                <Accordion.Body className="bg-white">
                                    Sí, incluimos todos los trámites necesarios ante la SEC (Superintendencia de Electricidad y Combustibles) y la certificación del sistema. Nos encargamos de toda la documentación técnica y legal para que tu instalación esté completamente regularizada.
                                </Accordion.Body>
                            </Accordion.Item>
                            
                            <Accordion.Item eventKey="1" className="border-0 mb-3 shadow-sm" style={{borderRadius: '12px', overflow: 'hidden'}}>
                                <Accordion.Header className="border-0 bg-white">
                                    <strong>¿Ofrecen financiamiento?</strong>
                                </Accordion.Header>
                                <Accordion.Body className="bg-white">
                                    Sí, ofrecemos diferentes opciones de financiamiento. Trabajamos con bancos y entidades financieras para ofrecerte cuotas cómodas desde 6 hasta 24 meses, con tasas preferenciales para proyectos de energía solar.
                                </Accordion.Body>
                            </Accordion.Item>
                            
                            <Accordion.Item eventKey="2" className="border-0 mb-3 shadow-sm" style={{borderRadius: '12px', overflow: 'hidden'}}>
                                <Accordion.Header className="border-0 bg-white">
                                    <strong>¿Tienen despacho a regiones?</strong>
                                </Accordion.Header>
                                <Accordion.Body className="bg-white">
                                    Sí, realizamos instalaciones en todo Chile. Tenemos equipos técnicos especializados en las principales regiones del país y coordinamos la logística para entregar e instalar tu sistema solar sin importar dónde te encuentres.
                                </Accordion.Body>
                            </Accordion.Item>
                            
                            <Accordion.Item eventKey="3" className="border-0 mb-3 shadow-sm" style={{borderRadius: '12px', overflow: 'hidden'}}>
                                <Accordion.Header className="border-0 bg-white">
                                    <strong>¿Cuánto tiempo toma recuperar la inversión en paneles solares?</strong>
                                </Accordion.Header>
                                <Accordion.Body className="bg-white ">
                                    En promedio, la inversión se recupera entre 3 a 5 años, dependiendo del tamaño del sistema y tu consumo eléctrico actual. Después de este período, disfrutas de energía prácticamente gratuita por más de 20 años.
                                </Accordion.Body>
                            </Accordion.Item>
                            
                            <Accordion.Item eventKey="4" className="border-0 mb-3 shadow-sm" style={{borderRadius: '12px', overflow: 'hidden'}}>
                                <Accordion.Header className="border-0 bg-white">
                                    <strong>¿Los paneles solares funcionan en días nublados o lluviosos?</strong>
                                </Accordion.Header>
                                <Accordion.Body className="bg-white">
                                    Sí, aunque con menor eficiencia. Los paneles modernos pueden generar electricidad incluso con luz difusa. En días nublados producen aproximadamente 10-25% de su capacidad máxima, y en días soleados alcanzan el 100%.
                                </Accordion.Body>
                            </Accordion.Item>
                            
                            <Accordion.Item eventKey="5" className="border-0 mb-3 shadow-sm" style={{borderRadius: '12px', overflow: 'hidden'}}>
                                <Accordion.Header className="border-0 bg-white">
                                    <strong>¿Qué mantenimiento requieren los paneles solares?</strong>
                                </Accordion.Header>
                                <Accordion.Body className="bg-white">
                                    Los paneles solares requieren muy poco mantenimiento. Solo necesitas limpiarlos 2-3 veces al año para remover polvo y hojas. La mayoría de sistemas incluyen monitoreo automático y garantías de 20-25 años en los paneles.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default FAQ; 