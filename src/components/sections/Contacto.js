import React from 'react';
import Section from '../ui/Section';
import { Form, Row, Col, Button } from 'react-bootstrap';

const Contacto = () => {
    return (
        <Section
            id="contacto"
            title="Contacto"
            description="Cuéntanos tu proyecto y agenda una asesoría"
            bgColor="var(--helio-bg-light)"
        >
            <Form>
                <Row>
                    <Col md={6}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control placeholder="Tu nombre" />
                    </Col>
                    <Col md={6}>
                        <Form.Label>Correo electronico</Form.Label>
                        <Form.Control placeholder="correo@gmail.com" />
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={5}
                                placeholder="Describe brevemente tu necesidad" 
                            />
                        </Form.Group>
                    </Col>
                </Row>
                
                <Button variant="primary" className="me-2">Enviar</Button>
                <Button variant="dark">Limpiar</Button>
            </Form>
        </Section>
    );
};

export default Contacto;
