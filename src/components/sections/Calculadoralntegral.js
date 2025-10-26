import React from 'react';
import Section from '../ui/Section';
import { Container, Row, Col, Table } from 'react-bootstrap';

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
                        <Table striped bordered hover>
                            <thead>
                                
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pontencia estimda</td>
                                    <td>$--</td>
                                    
                                </tr>
                                <tr>
                                    <td>Subtotal equipos</td>
                                    <td>$--</td>
                                   
                                </tr>
                                <tr>
                                    <td>Recargo techo </td>
                                    <td>$--</td>
                                    
                                </tr>
                                <tr>
                                    <td>Subsidio </td>
                                    <td>$--</td>
                                    
                                </tr>
                                <tr>
                                    <td>Instalacion final </td>
                                    <td>$--</td>
                                    
                                </tr>
                                <tr>
                                    <td>IVA 19% </td>
                                    <td>$--</td>
                                    
                                </tr>
                                <tr>
                                    <td>Envio</td>
                                    <td>$--</td>
                                    
                                </tr>
                                <tr>
                                    <td>Garantia </td>
                                    <td>$--</td>
                                    
                                </tr>
                                <tr>
                                    <td>Total antes de financiar</td>
                                    <td>$--</td>
                                    
                                </tr>
                                <tr>
                                    <td>Pie</td>
                                    <td>$--</td>
                                    
                                </tr>
                                <tr>
                                    <td>Interes total</td>
                                    <td>$--</td>
                                    
                                </tr>
                                <tr>
                                    <td>Cuota</td>
                                    <td>$--</td>
                                    
                                </tr>
                                <tr style={{backgroundColor: '#f5f5dc', fontWeight: 'bold'}}>
                                    <td>Total</td>
                                    <td>$--</td>
                                </tr>
                            </tbody>
                        </Table>
                        <div style={{fontSize: '0.85rem', color: 'red', padding:'8px', marginTop: '10px', textAlign: 'center'}}>
                            Valores referenciales para el prototipo
                        </div>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default Calculadoralntegral;