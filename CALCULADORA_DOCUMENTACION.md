# 🧮 Calculadora Integral HelioAndes - Documentación Técnica Completa

## 📋 Tabla de Contenidos

- [🎯 ¿Qué es la Calculadora?](#-qué-es-la-calculadora)
- [🏗️ Arquitectura del Sistema](#️-arquitectura-del-sistema)
- [💻 Frontend - Interfaz de Usuario](#-frontend---interfaz-de-usuario)
- [🧠 Lógica de Negocio](#-lógica-de-negocio)
- [📊 Flujo de Cálculos](#-flujo-de-cálculos)
- [🔧 Funcionalidades Avanzadas](#-funcionalidades-avanzadas)
- [📱 Responsividad](#-responsividad)
- [🎨 Componentes UI](#-componentes-ui)
- [⚡ Estado y Reactividad](#-estado-y-reactividad)
- [🔍 Validaciones](#-validaciones)
- [📋 Ejemplos Prácticos](#-ejemplos-prácticos)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)

---

## 🎯 ¿Qué es la Calculadora?

La **Calculadora Integral HelioAndes** es una aplicación web interactiva que permite a usuarios calcular el costo total de un sistema de energía solar, incluyendo equipos, instalación, financiamiento y todos los costos asociados.

### **¿Para quién está diseñada?**
- **Propietarios de casas** que quieren instalar paneles solares
- **Empresas PyME** que buscan reducir costos energéticos
- **Asesores comerciales** que necesitan cotizar sistemas
- **Cualquier persona** interesada en energía solar

### **¿Qué problemas resuelve?**
- ✅ **Cálculo complejo**: Automatiza cálculos que normalmente requieren hojas de cálculo
- ✅ **Transparencia**: Muestra todos los costos desglosados
- ✅ **Financiamiento**: Calcula diferentes opciones de pago
- ✅ **Personalización**: Adapta cálculos según ubicación y tipo de instalación

---

## 🏗️ Arquitectura del Sistema

### **Estructura General**
```
Calculadora Integral
├── 🎨 Frontend (React)
│   ├── Formulario de Entrada
│   ├── Tabla de Resultados
│   └── Botones de Acción
├── 🧠 Lógica de Cálculo
│   ├── Cálculos Base
│   ├── Factores de Ajuste
│   └── Financiamiento
└── 📊 Presentación de Datos
    ├── Tabla Resumen
    ├── Formato de Moneda
    └── Exportación
```

### **Flujo de Datos**
```
Usuario ingresa datos → Validación → Cálculos → Presentación → Exportación
     ↓                    ↓           ↓          ↓           ↓
  Formulario          Validaciones  Lógica    Tabla      Copiar
```

---

## 💻 Frontend - Interfaz de Usuario

### **Componentes Principales**

#### **1. Formulario de Entrada**
```jsx
<Form>
  <Row>
    <Col xs={12} md={6}>
      {/* Campos del sistema */}
    </Col>
    <Col xs={12} md={6}>
      {/* Campos de configuración */}
    </Col>
  </Row>
</Form>
```

**Características:**
- **Layout responsivo**: 2 columnas en desktop, 1 en móvil
- **Validación en tiempo real**: Los campos se validan mientras el usuario escribe
- **Placeholders informativos**: Ejemplos de valores típicos
- **Controles inteligentes**: Los campos se adaptan según las selecciones

#### **2. Tabla de Resultados**
```jsx
<Table bordered hover>
  <tbody>
    <tr>
      <td>Potencia estimada</td>
      <td className="text-end">{potenciaEstimada.toFixed(2)} kW</td>
    </tr>
    {/* Más filas... */}
  </tbody>
</Table>
```

**Características:**
- **Actualización automática**: Se recalcula cuando cambian los inputs
- **Formato de moneda**: Números con separadores de miles
- **Colores corporativos**: Usa la paleta de colores de HelioAndes
- **Responsive**: Se adapta a diferentes tamaños de pantalla

#### **3. Botones de Acción**
```jsx
<Button variant="secondary" onClick={limpiarFormulario}>
  Reiniciar
</Button>
<Button variant="primary" onClick={handleCopySummary}>
  Copiar resumen
</Button>
```

---

## 🧠 Lógica de Negocio

### **Variables de Estado (useState)**

La calculadora maneja **17 variables de estado** que representan todos los aspectos del sistema:

#### **🔋 Sistema de Paneles**
```javascript
const [potenciaPanel, setPotenciaPanel] = useState(0);        // Watts por panel
const [cantidadPaneles, setCantidadPaneles] = useState(0);     // Número de paneles
```

#### **⚡ Equipos Adicionales**
```javascript
const [inversorPrecio, setInversorPrecio] = useState(0);       // Precio del inversor
const [bateriaPrecio, setBateriaPrecio] = useState(0);         // Precio por batería
const [cantidadBaterias, setCantidadBaterias] = useState(0);   // Número de baterías
const [estructuraCableado, setEstructuraCableado] = useState(0); // Estructura y cableado
```

#### **🏠 Instalación**
```javascript
const [instalacionBase, setInstalacionBase] = useState(0);     // Costo base instalación
const [tipoTecho, setTipoTecho] = useState('1');              // Tipo de techo
const [complejidadInstalacion, setComplejidadInstalacion] = useState('1'); // Complejidad
```

#### **🚚 Envío**
```javascript
const [pesoEnvio, setPesoEnvio] = useState(0);                 // Peso para envío
const [region, setRegion] = useState('1');                     // Región geográfica
const [metodoEnvio, setMetodoEnvio] = useState('1');           // Método de envío
```

#### **💰 Financiamiento**
```javascript
const [subsidio, setSubsidio] = useState('0');                 // Tipo de subsidio
const [garantia, setGarantia] = useState('1');                 // Tipo de garantía
const [planPago, setPlanPago] = useState('1');                 // Plan de pago
const [tipoPie, setTipoPie] = useState('1');                   // Tipo de pie
const [valorPie, setValorPie] = useState(0);                   // Valor del pie
```

#### **🔔 Control de UI**
```javascript
const [warningPotenciaMostrado, setWarningPotenciaMostrado] = useState(false); // Control de alertas
```

---

## 📊 Flujo de Cálculos

### **Paso 1: Potencia del Sistema**
```javascript
const potenciaEstimada = (potenciaPanel * cantidadPaneles) / 1000;
```
**Ejemplo:** 450W × 8 paneles = 3.6 kW

### **Paso 2: Costo Base de Equipos**
```javascript
const subtotalEquipos = Math.round(inversorPrecio + (bateriaPrecio * cantidadBaterias) + estructuraCableado);
```
**Ejemplo:** $650,000 (inversor) + $320,000 (1 batería) + $180,000 (estructura) = $1,150,000

### **Paso 3: Recargo por Tipo de Techo**
```javascript
const recargoTecho = tipoTecho === '1' ? 0.05 : tipoTecho === '2' ? 0.02 : 0.07;
const recargoTechoAplicado = Math.round(subtotalEquipos * recargoTecho);
```
**Factores:**
- Teja/Asfalto: +5%
- Zinc/Planchas: +2%
- Hormigón: +7%

**Ejemplo:** $1,150,000 × 5% = $57,500

### **Paso 4: Garantía**
```javascript
const garantiaAplicada = Math.round(garantia === '1' ? subtotalEquipos * 0.02 : 
                                   garantia === '2' ? subtotalEquipos * 0.04 : 
                                   subtotalEquipos * 0.06);
```
**Opciones:**
- 12 meses: +2%
- 24 meses: +4%
- 36 meses: +6%

### **Paso 5: Subsidio**
```javascript
const subsidioAplicado = subsidio === '1' ? (subtotalEquipos + recargoTechoAplicado) * 0.08 : 
                        subsidio === '2' ? (subtotalEquipos + recargoTechoAplicado) * 0.05 : 0;
```
**Tipos:**
- Residencial: -8%
- PyME: -5%
- Sin subsidio: 0%

### **Paso 6: Instalación Final**
```javascript
const instalacionFinal = complejidadInstalacion === '1' ? instalacionBase : 
                        complejidadInstalacion === '2' ? instalacionBase + (instalacionBase * 0.08) : 
                        instalacionBase + (instalacionBase * 0.15);
```
**Complejidades:**
- Baja: Sin recargo
- Media: +8%
- Alta: +15%

### **Paso 7: IVA (19%)**
```javascript
const ivaAplicado = Math.round((subtotalEquipos + recargoTechoAplicado - subsidioAplicado + instalacionFinal) * 0.19);
```

### **Paso 8: Envío**
```javascript
const valorEnvioRegion = region === '1' ? 5000 : region === '2' ? 9000 : region === '3' ? 10000 : 15000;
const costoBaseEnvio = valorEnvioRegion + (pesoEnvio * 700);
const multiplicadorEnvio = metodoEnvio === '1' ? 1.00 : 1.20;
const valorEnvio = Math.round(costoBaseEnvio * multiplicadorEnvio);
```
**Regiones:**
- RM: $5,000 base
- Norte: $9,000 base
- Sur: $10,000 base
- Austral: $15,000 base

**Métodos:**
- Estándar: ×1.00
- Express: ×1.20

### **Paso 9: Total Antes de Financiar**
```javascript
const totalAntesFinanciar = Math.round(subtotalEquipos + recargoTechoAplicado - subsidioAplicado + 
                                     instalacionFinal + ivaAplicado + valorEnvio + garantiaAplicada);
```

### **Paso 10: Cálculo del Pie**
```javascript
let pieCalculado = 0;
if (tipoPie === '1') {
    // Porcentaje - limitar entre 0% y 95%
    const porcentajeLimitado = Math.min(Math.max(valorPie, 0), 95);
    pieCalculado = Math.round(totalAntesFinanciar * (porcentajeLimitado / 100));
} else if (tipoPie === '2') {
    // Monto fijo - limitar entre 0 y 95% del total
    const montoMaximo = Math.round(totalAntesFinanciar * 0.95);
    const montoLimitado = Math.min(Math.max(valorPie, 0), montoMaximo);
    pieCalculado = Math.round(montoLimitado);
}
```

### **Paso 11: Financiamiento**
```javascript
const nCuotas = planPago === '1' ? 0 : planPago === '2' ? 6 : planPago === '3' ? 12 : 24;
const tasaMensual = planPago === '1' ? 0 : planPago === '2' ? 0.012 : planPago === '3' ? 0.011 : 0.010;
const interesTotal = Math.round(montoFinanciar * tasaMensual * nCuotas);
const cuota = nCuotas > 1 ? Math.round((montoFinanciar + interesTotal) / nCuotas) : 0;
```

**Planes de Pago:**
- Contado: 0 cuotas, 0% interés
- 6 cuotas: 1.2% mensual
- 12 cuotas: 1.1% mensual
- 24 cuotas: 1.0% mensual

### **Paso 12: Total Final**
```javascript
const total = totalAntesFinanciar + interesTotal;
```

---

## 🔧 Funcionalidades Avanzadas

### **1. Función de Limpieza**
```javascript
const limpiarFormulario = () => {
    setPotenciaPanel(0);
    setCantidadPaneles(0);
    // ... resetear todos los campos
    setWarningPotenciaMostrado(false);
};
```
**Propósito:** Permite al usuario reiniciar todos los campos con un solo clic.

### **2. Exportación de Resumen**
```javascript
const handleCopySummary = async () => {
    const resumenTexto = `
RESUMEN CALCULADORA HELIOANDES
==================================
Potencia estimada: ${potenciaEstimada.toFixed(2)} kW
Subtotal equipos: $${subtotalEquipos.toLocaleString('es-CL')}
// ... más datos
    `.trim();
    
    await navigator.clipboard.writeText(resumenTexto);
    // Mostrar confirmación con SweetAlert
};
```
**Características:**
- Genera texto formateado
- Copia automáticamente al portapapeles
- Incluye fecha y hora de generación
- Muestra confirmación visual

### **3. Validaciones Inteligentes**
```javascript
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
```
**Validaciones:**
- Valores mínimos y máximos
- Tipos de datos correctos
- Límites de porcentaje
- Cálculos dinámicos de límites

---

## 📱 Responsividad

### **Breakpoints Bootstrap**
- **xs**: < 576px (Móvil)
- **sm**: ≥ 576px (Móvil grande)
- **md**: ≥ 768px (Tablet)
- **lg**: ≥ 992px (Desktop)

### **Comportamiento por Dispositivo**

#### **Móvil (< 768px)**
```jsx
<Col xs={12} lg={6}>
```
- Formulario en columna única
- Tabla de resultados en columna única
- Botones de ancho completo
- Texto más pequeño para ahorrar espacio

#### **Tablet (768px - 991px)**
- Layout similar a móvil
- Mejor aprovechamiento del espacio horizontal
- Formulario y tabla en columnas separadas

#### **Desktop (≥ 992px)**
- Layout de dos columnas
- Formulario a la izquierda
- Tabla de resultados a la derecha
- Botones tamaño normal

---

## 🎨 Componentes UI

### **1. Form Controls**
```jsx
<Form.Control
    type="number"
    placeholder="Ej: 450"
    value={potenciaPanel}
    onChange={(e) => setPotenciaPanel(Number(e.target.value) || 0)}
    min="0"
/>
```

### **2. Form Selects**
```jsx
<Form.Select
    value={tipoTecho}
    onChange={(e) => setTipoTecho(e.target.value)}
>
    <option value="1">Teja/Asfalto (+5%)</option>
    <option value="2">Zinc/Planchas (+2%)</option>
    <option value="3">Hormigón (+7%)</option>
</Form.Select>
```

### **3. Botones Personalizados**
```jsx
<Button 
    variant="secondary" 
    onClick={limpiarFormulario} 
    className="w-100" 
    helioStyle="secondary"
>
    Reiniciar
</Button>
```

### **4. Tabla de Resultados**
```jsx
<Table bordered hover>
    <tbody>
        <tr>
            <td style={{ backgroundColor: 'var(--helio-bg-light-medium)' }}>
                Potencia estimada
            </td>
            <td className="text-end">
                {potenciaEstimada.toFixed(2)} kW
            </td>
        </tr>
    </tbody>
</Table>
```

---

## ⚡ Estado y Reactividad

### **Reactividad Automática**
La calculadora es **completamente reactiva**. Esto significa que:

1. **Cambios instantáneos**: Cuando el usuario modifica cualquier campo, los cálculos se actualizan inmediatamente
2. **Sin botón "Calcular"**: No necesita que el usuario presione ningún botón
3. **Cálculos en tiempo real**: Todos los valores se recalculan automáticamente

### **Flujo de Reactividad**
```
Usuario cambia campo → useState actualiza → Componente se re-renderiza → 
Nuevos cálculos → Tabla se actualiza → Usuario ve resultado
```

### **Optimización de Rendimiento**
- **Cálculos directos**: No usa `useMemo` porque los cálculos son simples
- **Re-renderizado eficiente**: Solo se actualiza cuando cambian los valores
- **Estado mínimo**: Solo almacena los valores necesarios

---

## 🔍 Validaciones

### **Validaciones de Entrada**
```javascript
// Valores numéricos
const valor = Number(e.target.value) || 0;

// Límites de porcentaje
const porcentajeLimitado = Math.min(Math.max(valor, 0), 95);

// Límites de monto
const montoMaximo = Math.round(totalAntesFinanciar * 0.95);
const montoLimitado = Math.min(Math.max(valor, 0), montoMaximo);
```

### **Validaciones de Negocio**
- **Potencia mínima**: Sistema debe generar al menos 1kW
- **Cantidad de paneles**: Mínimo 1 panel
- **Valores positivos**: Todos los costos deben ser mayores a 0
- **Límites de pie**: Máximo 95% del total

### **Validaciones de UI**
- **Campos requeridos**: Algunos campos tienen validación visual
- **Formatos de entrada**: `type="number"` para campos numéricos
- **Placeholders informativos**: Ayudan al usuario a entender qué ingresar

---

## 📋 Ejemplos Prácticos

### **Ejemplo 1: Sistema Residencial Básico**

**Entrada:**
- Potencia panel: 450W
- Cantidad paneles: 8
- Inversor: $650,000
- Baterías: 0
- Estructura: $180,000
- Instalación base: $350,000
- Tipo techo: Teja/Asfalto
- Región: Metropolitana
- Complejidad: Baja
- Plan pago: Contado

**Cálculo paso a paso:**
1. Potencia: 450W × 8 = 3.6 kW
2. Equipos: $650,000 + $0 + $180,000 = $830,000
3. Recargo techo: $830,000 × 5% = $41,500
4. Garantía: $830,000 × 2% = $16,600
5. Subsidio: $0 (sin subsidio)
6. Instalación: $350,000 (sin recargo)
7. IVA: ($830,000 + $41,500 + $350,000) × 19% = $232,175
8. Envío: $5,000 + (90kg × $700) = $68,000
9. Total: $830,000 + $41,500 + $16,600 + $350,000 + $232,175 + $68,000 = $1,538,275

### **Ejemplo 2: Sistema con Financiamiento**

**Entrada:** (mismos datos del ejemplo 1)
- Plan pago: 12 cuotas
- Tipo pie: Porcentaje
- Valor pie: 20%

**Cálculo de financiamiento:**
1. Total antes financiar: $1,538,275
2. Pie: $1,538,275 × 20% = $307,655
3. Monto a financiar: $1,538,275 - $307,655 = $1,230,620
4. Interés total: $1,230,620 × 1.1% × 12 = $162,442
5. Cuota: ($1,230,620 + $162,442) ÷ 12 = $116,088
6. Total final: $1,538,275 + $162,442 = $1,700,717

### **Ejemplo 3: Sistema PyME con Subsidio**

**Entrada:**
- Potencia panel: 500W
- Cantidad paneles: 20
- Inversor: $1,200,000
- Baterías: 2 × $400,000 = $800,000
- Estructura: $300,000
- Instalación base: $500,000
- Tipo techo: Hormigón
- Región: Norte
- Complejidad: Media
- Subsidio: PyME (-5%)
- Plan pago: 24 cuotas

**Cálculo:**
1. Potencia: 500W × 20 = 10 kW
2. Equipos: $1,200,000 + $800,000 + $300,000 = $2,300,000
3. Recargo techo: $2,300,000 × 7% = $161,000
4. Subsidio: ($2,300,000 + $161,000) × 5% = $123,050
5. Instalación: $500,000 + ($500,000 × 8%) = $540,000
6. IVA: ($2,300,000 + $161,000 - $123,050 + $540,000) × 19% = $546,800
7. Envío: $9,000 + (200kg × $700) = $149,000
8. Total antes financiar: $3,573,750
9. Financiamiento: 24 cuotas a 1.0% mensual
10. Total final: $3,573,750 + $857,700 = $4,431,450

---

## 🛠️ Tecnologías Utilizadas

### **Frontend**
- **React 19.2.0**: Biblioteca principal para la interfaz
- **React Bootstrap 2.10.10**: Componentes UI pre-construidos
- **Bootstrap 5.3.8**: Framework CSS para diseño responsivo

### **Estado y Reactividad**
- **useState**: Manejo de estado local de cada campo
- **Event Handlers**: Actualización de estado en tiempo real
- **Conditional Rendering**: Mostrar/ocultar elementos según el estado

### **UI/UX**
- **SweetAlert2**: Notificaciones elegantes
- **Form Controls**: Inputs, selects y validaciones
- **Responsive Design**: Adaptación a diferentes dispositivos

### **Funcionalidades**
- **Clipboard API**: Copia al portapapeles
- **Number Formatting**: Formato de moneda chilena
- **Date/Time**: Timestamps en exportaciones

---

## 🎯 Conclusión

La **Calculadora Integral HelioAndes** es una herramienta completa que combina:

- ✅ **Simplicidad de uso**: Interfaz intuitiva para cualquier usuario
- ✅ **Precisión técnica**: Cálculos detallados y exactos
- ✅ **Flexibilidad**: Adaptable a diferentes tipos de proyectos
- ✅ **Transparencia**: Muestra todos los costos desglosados
- ✅ **Modernidad**: Tecnologías web actuales y responsivas

Es una solución integral que facilita la toma de decisiones en proyectos de energía solar, desde el cálculo inicial hasta las opciones de financiamiento.

---

**Desarrollado con ❤️ para HelioAndes Energía**
