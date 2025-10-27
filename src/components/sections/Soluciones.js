import React from 'react';
import Section from '../ui/Section';
import { Card, CardGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faIndustry, faBatteryFull } from '@fortawesome/free-solid-svg-icons';

const Soluciones = () => {
    return (
        <Section 
            id="soluciones"
            title="Soluciones" 
            description="Kits residenciales, PyME, off-grid con baterías e híbridos"
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
                            <FontAwesomeIcon icon={faHouse} size="2x" style={{ color: '#FF6B35' }} />
                        </div>
                        <div>
                            <Card.Title style={{ fontWeight: 'bold', marginBottom: '8px' }}>Hogar 3-5 kW</Card.Title>
                            <Card.Text style={{ color: '#6c757d', lineHeight: '1.5' }}>
                                Balance ideal entre costo y ahorro mensual.
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
                            <FontAwesomeIcon icon={faIndustry} size="2x" style={{ color: '#9370DB' }} />
                        </div>
                        <div>
                            <Card.Title style={{ fontWeight: 'bold', marginBottom: '8px' }}>PyME 10-20 kW</Card.Title>
                            <Card.Text style={{ color: '#6c757d', lineHeight: '1.5' }}>
                                Para operación diurna con buena irradiación.
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
                            <FontAwesomeIcon icon={faBatteryFull} size="2x" style={{ color: '#00B04F' }} />
                        </div>
                        <div>
                            <Card.Title style={{ fontWeight: 'bold', marginBottom: '8px' }}>Off-grid con baterías</Card.Title>
                            <Card.Text style={{ color: '#6c757d', lineHeight: '1.5' }}>
                                Autonomía en zonas sin red eléctrica.
                            </Card.Text>
                        </div>
                    </div>
                </Card>
            </CardGroup>
        </Section>
    );
};
   
export default Soluciones;