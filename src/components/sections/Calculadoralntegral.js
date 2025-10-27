import React, { useState } from 'react';
import Section from '../ui/Section';
import { Container, Row, Col, Form, Table } from 'react-bootstrap';
import Button from '../ui/Button';
import Swal from 'sweetalert2';

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
    
    // para controlar si ya se mostró el warning de potencia
    const [warningPotenciaMostrado, setWarningPotenciaMostrado] = useState(false);

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
        setWarningPotenciaMostrado(false);
    };

    const handleCopySummary = async () => {
        try {
            // generar texto del resumen con formato legible
            const resumenTexto = `
RESUMEN CALCULADORA HELIOANDES
==================================

Potencia estimada: ${potenciaEstimada.toFixed(2)} kW
Subtotal equipos: $${subtotalEquipos.toLocaleString('es-CL')}
Recargo techo: $${recargoTechoAplicado.toLocaleString('es-CL')}
Subsidio: -$${subsidioAplicado.toLocaleString('es-CL')}
Instalación final: $${instalacionFinal.toLocaleString('es-CL')}
IVA 19%: $${ivaAplicado.toLocaleString('es-CL')}
Envío: $${valorEnvio.toLocaleString('es-CL')}
Garantía: $${garantiaAplicada.toLocaleString('es-CL')}
Total antes de financiar: $${totalAntesFinanciar.toLocaleString('es-CL')}
Pie: $${pieCalculado.toLocaleString('es-CL')}
Interés total: $${interesTotal.toLocaleString('es-CL')}
Cuota: $${cuota.toLocaleString('es-CL')}
TOTAL FINAL: $${total.toLocaleString('es-CL')}

==================================
Valores referenciales para el prototipo
Generado el: ${new Date().toLocaleDateString('es-CL')} a las ${new Date().toLocaleTimeString('es-CL')}
            `.trim();

            // Copiar al portapapeles
            await navigator.clipboard.writeText(resumenTexto);

            // Mostrar alert de confirmación
            Swal.fire({
                title: '¡Éxito!',
                text: 'Resumen copiado al portapapeles',
                icon: 'success',
                confirmButtonText: 'Entendido',
                confirmButtonColor: 'var(--helio-primary)'
            });

        } catch (error) {
            console.error('Error al copiar:', error);
            Swal.fire({
                title: 'Error',
                text: 'Error al copiar el resumen. Intenta nuevamente.',
                icon: 'error',
                confirmButtonText: 'Entendido',
                confirmButtonColor: 'var(--helio-primary)'
            });
        }
    };

    //Reglas de negocio

    //Variables para el resumen - ORDEN CORRECTO DE APLICACIÓN

    // 1. Potencia estimada (referencia en kW)
    const potenciaEstimada = (potenciaPanel * cantidadPaneles) / 1000;

    // 2. Subtotal equipos (Inversor + Baterías + Estructura/Cableado)
    const subtotalEquipos = Math.round(inversorPrecio + (bateriaPrecio * cantidadBaterias) + estructuraCableado);

    // 3. Recargo por techo (sobre subtotal equipos)
    const recargoTecho = tipoTecho === '1' ? 0.05 : tipoTecho === '2' ? 0.02 : 0.07;
    const recargoTechoAplicado = Math.round(subtotalEquipos * recargoTecho);

    // 4. Garantía (sobre subtotal equipos, ANTES del subsidio)
    const garantiaAplicada = Math.round(garantia === '1' ? subtotalEquipos * 0.02 : garantia === '2' ? subtotalEquipos * 0.04 : subtotalEquipos * 0.06);

    // 5. Subsidio (sobre subtotal equipos + recargo techo)
    const subsidioAplicado = subsidio === '1' ? (subtotalEquipos + recargoTechoAplicado) * 0.08 : subsidio === '2' ? (subtotalEquipos + recargoTechoAplicado) * 0.05 : 0;

    // 6. Instalación final (instalación base + % por complejidad)
    const instalacionFinal = complejidadInstalacion === '1' ? instalacionBase : complejidadInstalacion === '2' ? instalacionBase + (instalacionBase * 0.08) : instalacionBase + (instalacionBase * 0.15);

    // 7. IVA (sobre equipos con recargos - subsidios + instalación final)
    const ivaAplicado = Math.round((subtotalEquipos + recargoTechoAplicado - subsidioAplicado + instalacionFinal) * 0.19);

    // 8. Envío (base por región + pesoKg * 700; método exprés multiplica por 1.2)
    const valorEnvioRegion = region === '1' ? 5000 : region === '2' ? 9000 : region === '3' ? 10000 : 15000;
    const costoBaseEnvio = valorEnvioRegion + (pesoEnvio * 700);
    const multiplicadorEnvio = metodoEnvio === '1' ? 1.00 : 1.20;
    const valorEnvio = Math.round(costoBaseEnvio * multiplicadorEnvio);

    // 9. Total antes de financiar
    const totalAntesFinanciar = Math.round(subtotalEquipos + recargoTechoAplicado - subsidioAplicado + instalacionFinal + ivaAplicado + valorEnvio + garantiaAplicada);

    // 10. Calcular pie con validaciones
    let pieCalculado = 0;
    if (tipoPie === '1') {
        // Porcentaje - limitar entre 0% y 95% (dejar al menos 5% para financiar)
        const porcentajeLimitado = Math.min(Math.max(valorPie, 0), 95);
        pieCalculado = Math.round(totalAntesFinanciar * (porcentajeLimitado / 100));
    } else if (tipoPie === '2') {
        // Monto fijo - limitar entre 0 y 95% del total
        const montoMaximo = Math.round(totalAntesFinanciar * 0.95);
        const montoLimitado = Math.min(Math.max(valorPie, 0), montoMaximo);
        pieCalculado = Math.round(montoLimitado);
    }

    // 11. Pie final (asegurar que no exceda el total)
    const pie = Math.min(pieCalculado, totalAntesFinanciar);

    // 12. Monto a financiar
    const montoFinanciar = totalAntesFinanciar - pie;

    // 13. Calcular interés y cuota según plan de pago
    const nCuotas = planPago === '1' ? 0 : planPago === '2' ? 6 : planPago === '3' ? 12 : 24;
    const tasaMensual = planPago === '1' ? 0 : planPago === '2' ? 0.012 : planPago === '3' ? 0.011 : 0.010;

    const interesTotal = Math.round(montoFinanciar * tasaMensual * nCuotas);

    let cuota = 0;
    if (nCuotas > 1) {
        cuota = Math.round((montoFinanciar + interesTotal) / nCuotas);
    }

    // 14. Total final
    const total = totalAntesFinanciar + interesTotal;



    //1. Validar potencia estimada
    if (potenciaEstimada > 7 && cantidadBaterias === 0 && !warningPotenciaMostrado) {
        setWarningPotenciaMostrado(true); // para que no aparezca a cada rato
        Swal.fire({
            title: 'Recomendación',
            text: 'Recomendado considerar almacenamiento para estabilidad del sistema.',
            icon: 'warning',
            confirmButtonText: 'Entendido',
            confirmButtonColor: 'var(--helio-primary)'
        });
    }


    return (
        <Section 
            id="calculadora"
            title="DEMO Calculadora" 
            description="Calcula aquí el costo de tu sistema de energía solar"
            bgColor="var(--helio-bg-medium)"
        >
            <Container>
                <Row className="g-4">
                    <Col xs={12} md={6}>
                        <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                            <h4 className="text-start mb-4 fw-bold">Formulario</h4>
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
                                                onChange={(e) => {
                                                    const valor = Number(e.target.value) || 0;
                                                    if (tipoPie === '1') {
                                                        // Porcentaje: limitar entre 0 y 95
                                                        setValorPie(Math.min(Math.max(valor, 0), 95));
                                                    } else {
                                                        // Monto fijo: limitar entre 0 y 95% del total estimado
                                                        const montoMaximo = Math.round(totalAntesFinanciar * 0.95);
                                                        setValorPie(Math.min(Math.max(valor, 0), montoMaximo));
                                                    }
                                                }}
                                                min="0"
                                                max={tipoPie === '1' ? "95" : Math.round(totalAntesFinanciar * 0.95)}
                                                placeholder={tipoPie === '1' ? "Ej: 10" : "Ej: 500000"}
                                            />
                                            <Form.Text className="text-muted">
                                                {tipoPie === '1'
                                                    ? "Porcentaje (máximo 95%): 10 = 10%"
                                                    : `Monto fijo (máximo $${Math.round(totalAntesFinanciar * 0.95).toLocaleString('es-CL')})`
                                                }
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
                                        <Button variant="secondary" onClick={limpiarFormulario} className="w-100" helioStyle="secondary">
                                            Reiniciar
                                        </Button>
                                    </Col>
                                    <Col xs={6}>
                                        <Button variant="primary" onClick={handleCopySummary} className="w-100" helioStyle="filled">
                                            Copiar resumen
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                            <h4 className="mb-4 fw-bold">Resumen</h4>
                            <Table bordered hover>
                                <tbody>
                                    <tr>
                                        <td style={{ backgroundColor: 'var(--helio-bg-light-medium)' }}>Potencia estimada</td>
                                        <td className="text-end">{potenciaEstimada.toFixed(2)} kW</td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: 'var(--helio-bg-light-medium)' }}>Subtotal equipos</td>
                                        <td className="text-end">${subtotalEquipos.toLocaleString('es-CL')}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: 'var(--helio-bg-light-medium)' }}>Recargo techo</td>
                                        <td className="text-end">${recargoTechoAplicado.toLocaleString('es-CL')}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: 'var(--helio-bg-light-medium)' }}>Subsidio</td>
                                        <td className="text-end">-${subsidioAplicado.toLocaleString('es-CL')}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: 'var(--helio-bg-light-medium)' }}>Instalación final</td>
                                        <td className="text-end">${instalacionFinal.toLocaleString('es-CL')}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: 'var(--helio-bg-light-medium)' }}>IVA 19%</td>
                                        <td className="text-end">${ivaAplicado.toLocaleString('es-CL')}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: 'var(--helio-bg-light-medium)' }}>Envío</td>
                                        <td className="text-end">${valorEnvio.toLocaleString('es-CL')}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: 'var(--helio-bg-light-medium)' }}>Garantía</td>
                                        <td className="text-end">${garantiaAplicada.toLocaleString('es-CL')}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: 'var(--helio-bg-light-medium)' }}>Total antes de financiar</td>
                                        <td className="text-end">${totalAntesFinanciar.toLocaleString('es-CL')}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: 'var(--helio-bg-light-medium)' }}>Pie</td>
                                        <td className="text-end">${pieCalculado.toLocaleString('es-CL')}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: 'var(--helio-bg-light-medium)' }}>Interés total</td>
                                        <td className="text-end">${interesTotal.toLocaleString('es-CL')}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: 'var(--helio-bg-light-medium)' }}>Cuota</td>
                                        <td className="text-end">${cuota.toLocaleString('es-CL')}</td>
                                    </tr>
                                    <tr style={{ backgroundColor: '#f5f5dc', fontWeight: 'bold' }}>
                                        <td style={{ backgroundColor: 'var(--helio-bg-light-medium)' }}>Total final</td>
                                        <td className="text-end">${total.toLocaleString('es-CL')}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <span className="badge p-2 px-3 bg-warning text-dark mt-1 rounded-pill">
                                Valores referenciales para el prototipo
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default Calculadoralntegral;