import React, { useState } from 'react';
import Section from '../ui/Section';
import { Form, Row, Col, Container } from 'react-bootstrap';
import Button from '../ui/Button';
import Swal from 'sweetalert2';

const Contacto = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [errores, setErrores] = useState({});

    const limpiarFormulario = () => {
        setNombre('');
        setCorreo('');
        setMensaje('');
        setErrores({});
    };

    const validarFormulario = () => {
        const errores = {};
        
        // Validación del nombre (mínimo 2 caracteres)
        if (nombre.trim().length < 2) {
            errores.nombre = 'El nombre debe tener al menos 2 caracteres';
        }
        
        // Validación del correo (patrón regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correo.trim()) {
            errores.correo = 'El correo electrónico es requerido';
        } else if (!emailRegex.test(correo)) {
            errores.correo = 'Ingresa un correo electrónico válido';
        }
        
        // Validación del mensaje (opcional pero si se llena debe tener contenido)
        if (mensaje.trim() && mensaje.trim().length < 10) {
            errores.mensaje = 'El mensaje debe tener al menos 10 caracteres';
        }
        
        setErrores(errores);
        return Object.keys(errores).length === 0;
    };

    const handleEnviar = (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            // Aquí se enviaría el formulario
            console.log('Formulario válido:', { nombre, correo, mensaje });
            
            // Mostrar SweetAlert de éxito
            Swal.fire({
                title: '¡Mensaje enviado!',
                text: 'Gracias por contactarnos. Te responderemos pronto.',
                icon: 'success',
                confirmButtonText: 'Entendido',
                confirmButtonColor: 'var(--helio-primary)'
            });
            
            limpiarFormulario();
        }
    };

    return (
        <Section
            id="contacto"
            title="Contacto"
            description="Cuéntanos tu proyecto y agenda una asesoría"
            bgColor="var(--helio-bg-light)"
        >
            <Container>
                <Row className="justify-content-start">
                    <Col xs={12} lg={9}>
                        <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                            <h4 className="text-start mb-4 fw-bold">Formulario de Contacto</h4>
                            <Form onSubmit={handleEnviar}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nombre *</Form.Label>
                                            <Form.Control 
                                                placeholder="Tu nombre" 
                                                value={nombre}
                                                onChange={(e) => setNombre(e.target.value)}
                                                isInvalid={!!errores.nombre}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errores.nombre}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Correo electrónico *</Form.Label>
                                            <Form.Control 
                                                type="email"
                                                placeholder="correo@gmail.com" 
                                                value={correo}
                                                onChange={(e) => setCorreo(e.target.value)}
                                                isInvalid={!!errores.correo}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errores.correo}
                                            </Form.Control.Feedback>
                                        </Form.Group>
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
                                                value={mensaje}
                                                onChange={(e) => setMensaje(e.target.value)}
                                                isInvalid={!!errores.mensaje}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errores.mensaje}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                
                                <Row>
                                    <Col xs={2}>
                                        <Button 
                                            type="submit"
                                            variant="primary" 
                                            className="w-100" 
                                            helioStyle="filled"
                                        >
                                            Enviar
                                        </Button>
                                    </Col>
                                    <Col xs={2}>
                                        <Button 
                                            type="button"
                                            variant="secondary" 
                                            className="w-100" 
                                            helioStyle="secondary"
                                            onClick={limpiarFormulario}
                                        >
                                            Limpiar
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default Contacto;
