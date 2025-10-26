import React from 'react';
import Section from '../ui/Section';

const Calculadoralntegral = () => {
    return (
        <Section 
            id="calculadora"
            title="DEMO Calculadora" 
            description="Maquetado de formulario y resumen."
            bgColor="var(--helio-bg-medium)"
        >
            {/* Contenido de calculadora aquí */}
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h2>Formulario</h2>
                    </Col>
                    <Col xs={12} md={6}>
                        <h2>Resumen</h2>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default Calculadoralntegral;