import React, { useState } from 'react';
import Section from '../ui/Section';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Calculadoralntegral = () => {

    const [potenciaPanel, setPotenciaPanel] = useState(0);
    const [cantidadPaneles, setCantidadPaneles] = useState(0);
    const [inversorPrecio, setInversorPrecio] = useState(0);
    const [bateriaPrecio, setBateriaPrecio] = useState(0);
    const [cantidadBaterias, setCantidadBaterias] = useState(0);
    const [estructuraCableado, setEstructuraCableado] = useState(0);
    const [instalacionBase, setInstalacionBase] = useState(0);
    const [pesoEnvio, setPesoEnvio] = useState(0);
    const [tipoTecho, setTipoTecho] = useState('1');
    const [region, setRegion] = useState('1');
    const [complejidadInstalacion, setComplejidadInstalacion] = useState('1');
    const [subsidio, setSubsidio] = useState('0');
    const [metodoEnvio, setMetodoEnvio] = useState('1');
    const [garantia, setGarantia] = useState('1');
    const [planPago, setPlanPago] = useState('1');
    const [tipoPie, setTipoPie] = useState('1');
    const [valorPie, setValorPie] = useState(0);

    // limpiar todos los campos del formulario
    const limpiarFormulario = () => {
        setPotenciaPanel(0);
        setCantidadPaneles(0);
        setInversorPrecio(0);
        setBateriaPrecio(0);
        setCantidadBaterias(0);
        setEstructuraCableado(0);
        setInstalacionBase(0);
        setPesoEnvio(0);
        setTipoTecho('1');
        setRegion('1');
        setComplejidadInstalacion('1');
        setSubsidio('0');
        setMetodoEnvio('1');
        setGarantia('1');
        setPlanPago('1');
        setTipoPie('1');
        setValorPie(0);
    };

    const handleCopySummary = () => {
        // Función para copiar resumen (por implementar)
        console.log('Copiar resumen');
    };

    return (
        <Section 
            id="calculadora"
            title="DEMO Calculadora" 
            description="Maquetado de formulario y resumen."
            bgColor="var(--helio-bg-medium)"
        >
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h2 className="text-start">Formulario</h2>
                        <Form>
                            <Row>
                                <Col xs={12} md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Potencia del panel (W)</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={potenciaPanel}
                                            onChange={(e) => setPotenciaPanel(Number(e.target.value) || 0)}
                                            min="0"
                                            placeholder="Ej: 450"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Inversor (precio)</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={inversorPrecio}
                                            onChange={(e) => setInversorPrecio(Number(e.target.value) || 0)}
                                            min="0"
                                            placeholder="Ej: 650000"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Cantidad baterías</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={cantidadBaterias}
                                            onChange={(e) => setCantidadBaterias(Number(e.target.value) || 0)}
                                            min="0"
                                            placeholder="Ej: 1"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Instalación base</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={instalacionBase}
                                            onChange={(e) => setInstalacionBase(Number(e.target.value) || 0)}
                                            min="0"
                                            placeholder="Ej: 350000"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Tipo de techo</Form.Label>
                                        <Form.Select
                                            value={tipoTecho}
                                            onChange={(e) => setTipoTecho(e.target.value)}
                                        >
                                            <option value="1">Teja/Asfalto (+5%)</option>
                                            <option value="2">Zinc/Planchas (+2%)</option>
                                            <option value="3">Hormigón (+7%)</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Complejidad instalación</Form.Label>
                                        <Form.Select
                                            value={complejidadInstalacion}
                                            onChange={(e) => setComplejidadInstalacion(e.target.value)}
                                        >
                                            <option value="1">Baja (0%)</option>
                                            <option value="2">Media (+8%)</option>
                                            <option value="3">Alta (+15%)</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Método de envío</Form.Label>
                                        <Form.Select
                                            value={metodoEnvio}
                                            onChange={(e) => setMetodoEnvio(e.target.value)}
                                        >
                                            <option value="1">Estándar (x1.00)</option>
                                            <option value="2">Exprés (x1.20)</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Plan de pago</Form.Label>
                                        <Form.Select
                                            value={planPago}
                                            onChange={(e) => setPlanPago(e.target.value)}
                                        >
                                            <option value="1">Contado (0%)</option>
                                            <option value="2">6 cuotas (1.2% mensual)</option>
                                            <option value="3">12 cuotas (1.1% mensual)</option>
                                            <option value="4">24 cuotas (1.0% mensual)</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Valor de pie</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={valorPie}
                                            onChange={(e) => setValorPie(Number(e.target.value) || 0)}
                                            min="0"
                                            placeholder="Ej: 10"
                                        />
                                        <Form.Text className="text-muted">
                                            Si es porcentaje, 10 = 10%.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>

                                <Col xs={12} md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Cantidad de paneles</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={cantidadPaneles}
                                            onChange={(e) => setCantidadPaneles(Number(e.target.value) || 0)}
                                            min="0"
                                            placeholder="Ej: 8"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Batería (precio unidad)</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={bateriaPrecio}
                                            onChange={(e) => setBateriaPrecio(Number(e.target.value) || 0)}
                                            min="0"
                                            placeholder="Ej: 320000"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Estruct./cableado</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={estructuraCableado}
                                            onChange={(e) => setEstructuraCableado(Number(e.target.value) || 0)}
                                            min="0"
                                            placeholder="Ej: 180000"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Peso envío (kg)</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={pesoEnvio}
                                            onChange={(e) => setPesoEnvio(Number(e.target.value) || 0)}
                                            min="0"
                                            placeholder="Ej: 90"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Región</Form.Label>
                                        <Form.Select
                                            value={region}
                                            onChange={(e) => setRegion(e.target.value)}
                                        >
                                            <option value="1">RM ($5.000)</option>
                                            <option value="2">Norte ($9.000)</option>
                                            <option value="3">Sur ($10.000)</option>
                                            <option value="4">Austral ($15.000)</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Subsidio</Form.Label>
                                        <Form.Select
                                            value={subsidio}
                                            onChange={(e) => setSubsidio(e.target.value)}
                                        >
                                            <option value="0">Sin subsidio (0%)</option>
                                            <option value="1">Residencial (-8%)</option>
                                            <option value="2">Pyme (-5%)</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Garantía</Form.Label>
                                        <Form.Select
                                            value={garantia}
                                            onChange={(e) => setGarantia(e.target.value)}
                                        >
                                            <option value="1">12 meses (+2%)</option>
                                            <option value="2">24 meses (+4%)</option>
                                            <option value="3">36 meses (+6%)</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Tipo de pie</Form.Label>
                                        <Form.Select
                                            value={tipoPie}
                                            onChange={(e) => setTipoPie(e.target.value)}
                                        >
                                            <option value="1">Porcentaje</option>
                                            <option value="2">Monto fijo</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mt-4">
                                <Col xs={6}>
                                    <Button variant="secondary" onClick={limpiarFormulario} className="w-100">
                                        Limpiar
                                    </Button>
                                </Col>
                                <Col xs={6}>
                                    <Button variant="primary" onClick={handleCopySummary} className="w-100 helio-btn-filled">
                                        Copiar resumen
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
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