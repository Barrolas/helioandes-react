# 🌞 HelioAndes - Sistema de Energía Solar

Una aplicación web React para dimensionar sistemas de energía solar, calcular costos y solicitar asesoría para hogares y PyMEs.

## 📋 Tabla de Contenidos

- [🌐 URLs y Entornos](#-urls-y-entornos)
- [🚀 Instalación y Configuración](#-instalación-y-configuración)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [⚡ Funcionalidades Principales](#-funcionalidades-principales)
- [🧮 Calculadora Integral](#-calculadora-integral)
- [📝 Formulario de Contacto](#-formulario-de-contacto)
- [🎨 Componentes UI](#-componentes-ui)
- [📱 Responsividad](#-responsividad)
- [🔧 Scripts Disponibles](#-scripts-disponibles)
- [🚀 Deployment](#-deployment)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)

## 🌐 URLs y Entornos

### **Desarrollo Local**
- **URL**: `http://localhost:3000`
- **Comando**: `npm start`
- **Configuración**: Rutas absolutas (`/imagen.png`)

### **Producción (GitHub Pages)**
- **URL**: `https://barrolas.github.io/helioandes-react`
- **Comando**: `npm run deploy`
- **Configuración**: Rutas relativas (`./imagen.png`)

### **Repositorio**
- **GitHub**: `https://github.com/Barrolas/helioandes-react`
- **Rama principal**: `master` (código fuente)
- **Rama deploy**: `gh-pages` (archivos compilados - automática)

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/Barrolas/helioandes-react.git

# Navegar al directorio
cd helioandes-react

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

## 📁 Estructura del Proyecto

```
helioandes-react/
├── public/                     # Archivos estáticos
│   ├── catalogo-helioandes.pdf # Catálogo descargable
│   ├── helioandes-logo.png     # Logo de la empresa
│   ├── hero-image.png          # Imagen principal
│   └── index.html              # HTML base
├── src/
│   ├── components/
│   │   ├── layout/             # Componentes de layout
│   │   │   ├── Navbar.js       # Barra de navegación
│   │   │   └── Footer.js       # Pie de página
│   │   ├── sections/           # Secciones principales
│   │   │   ├── Hero.js         # Sección principal
│   │   │   ├── Servicios.js    # Tarjetas de servicios
│   │   │   ├── Soluciones.js   # Tarjetas de soluciones
│   │   │   ├── Calculadoralntegral.js # Calculadora principal
│   │   │   ├── Planes.js       # Planes de financiamiento
│   │   │   ├── Testimonios.js  # Testimonios de clientes
│   │   │   ├── FAQ.js          # Preguntas frecuentes
│   │   │   └── Contacto.js     # Formulario de contacto
│   │   └── ui/                 # Componentes reutilizables
│   │       ├── Button.js       # Botón personalizado
│   │       ├── Section.js      # Contenedor de sección
│   │       ├── SectionHeader.js # Encabezado de sección
│   │       ├── BasicCard.js    # Tarjeta básica
│   │       └── BasicCardGrid.js # Grid de tarjetas
│   ├── styles/
│   │   └── styles.css          # Estilos globales y variables CSS
│   └── App.js                  # Componente principal
└── package.json                # Configuración del proyecto
```

## ⚡ Funcionalidades Principales

### 🏠 **Sección Hero**
- Presentación principal de la empresa
- Botones de acción (DEMO y Descargar catálogo)
- Imagen responsiva (móvil/tablet: columna única, desktop: lado a lado)

### 🔧 **Servicios**
- **Estudio energético**: Análisis de consumo y propuesta
- **Instalación certificada**: Personal acreditado y normativa vigente
- **Monitoreo**: Seguimiento de rendimiento y alertas
- **Mantención**: Planes periódicos para extender vida útil

### 💡 **Soluciones**
- **Hogar 3-5 kW**: Balance ideal entre costo y ahorro
- **PyME 10-20 kW**: Para operación diurna con buena irradiación
- **Off-grid con baterías**: Autonomía en zonas sin red eléctrica

### 💰 **Planes de Financiamiento**
- **Contado**: Descuento por pago al contado
- **Financiamiento**: Opciones de pago a plazos
- **Leasing**: Modalidad de arrendamiento

### 💬 **Testimonios**
- Experiencias reales de clientes
- Casos de éxito en diferentes comunas
- Validación social del servicio

### ❓ **FAQ**
- Preguntas frecuentes sobre energía solar
- Información técnica y comercial
- Resolución de dudas comunes

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

### **🎯 Orden de Cálculo Crítico**

**IMPORTANTE:** El orden de los cálculos es fundamental porque algunos valores dependen de otros. El flujo sigue esta secuencia específica:

```
1. Potencia → 2. Subtotal Equipos → 3. Recargo Techo → 4. Garantía → 5. Subsidio → 
6. Instalación → 7. IVA → 8. Envío → 9. Total Antes Financiar → 10. Pie → 
11. Financiamiento → 12. Total Final
```

---

### **Paso 1: Potencia del Sistema**
```javascript
const potenciaEstimada = (potenciaPanel * cantidadPaneles) / 1000;
```
**Ejemplo:** 450W × 8 paneles = 3.6 kW
**Propósito:** Referencia técnica, no afecta costos directamente

---

### **Paso 2: Subtotal de Equipos (BASE FUNDAMENTAL)**
```javascript
const subtotalEquipos = Math.round(inversorPrecio + (bateriaPrecio * cantidadBaterias) + estructuraCableado);
```

**🔍 DESGLOSE DETALLADO:**
- **Inversor**: Precio unitario del inversor
- **Baterías**: Precio unitario × cantidad de baterías
- **Estructura/Cableado**: Costo fijo de estructura y cableado

**Ejemplo Práctico:**
```
Inversor: $650,000
Baterías: $320,000 × 1 unidad = $320,000
Estructura: $180,000
─────────────────────────────
Subtotal Equipos: $1,150,000
```

**⚠️ CRÍTICO:** Este valor es la **base** para múltiples cálculos posteriores (garantía, subsidio, etc.)

---

### **Paso 3: Recargo por Tipo de Techo**
```javascript
const recargoTecho = tipoTecho === '1' ? 0.05 : tipoTecho === '2' ? 0.02 : 0.07;
const recargoTechoAplicado = Math.round(subtotalEquipos * recargoTecho);
```

**🔍 FACTORES POR TIPO:**
- **Teja/Asfalto**: +5% (instalación más compleja)
- **Zinc/Planchas**: +2% (instalación estándar)
- **Hormigón**: +7% (instalación más difícil)

**Ejemplo:** $1,150,000 × 5% = $57,500

**⚠️ IMPORTANTE:** Se calcula sobre el **subtotal de equipos**, no sobre el total

---

### **Paso 4: Garantía (SOBRE SUBTOTAL EQUIPOS)**
```javascript
const garantiaAplicada = Math.round(garantia === '1' ? subtotalEquipos * 0.02 : 
                                   garantia === '2' ? subtotalEquipos * 0.04 : 
                                   subtotalEquipos * 0.06);
```

**🔍 OPCIONES DE GARANTÍA:**
- **12 meses**: +2% sobre subtotal equipos
- **24 meses**: +4% sobre subtotal equipos  
- **36 meses**: +6% sobre subtotal equipos

**Ejemplo:** $1,150,000 × 2% = $23,000

**⚠️ CRÍTICO:** 
- Se calcula **SOLO** sobre el subtotal de equipos
- **NO** incluye recargo de techo ni instalación
- Se suma al final del cálculo total

---

### **Paso 5: Subsidio (SOBRE EQUIPOS + RECARGO TECHO)**
```javascript
const subsidioAplicado = subsidio === '1' ? (subtotalEquipos + recargoTechoAplicado) * 0.08 : 
                        subsidio === '2' ? (subtotalEquipos + recargoTechoAplicado) * 0.05 : 0;
```

**🔍 TIPOS DE SUBSIDIO:**
- **Residencial**: -8% sobre (equipos + recargo techo)
- **PyME**: -5% sobre (equipos + recargo techo)
- **Sin subsidio**: 0%

**Ejemplo:** 
```
Subtotal equipos: $1,150,000
Recargo techo: $57,500
Base para subsidio: $1,207,500
Subsidio residencial: $1,207,500 × 8% = $96,600
```

**⚠️ CRÍTICO:** 
- Se calcula sobre **equipos + recargo techo**
- **NO** incluye instalación ni garantía
- Es un **descuento** (valor negativo)

---

### **🔗 Estructura de Dependencias en el Cálculo**

**DIAGRAMA DE DEPENDENCIAS:**
```
Subtotal Equipos (BASE)
    ↓
    ├── Recargo Techo (sobre equipos)
    ├── Garantía (sobre equipos únicamente)
    └── Subsidio (sobre equipos + recargo techo)
        ↓
        ├── IVA (sobre equipos + recargo - subsidio + instalación)
        └── Total Antes Financiar
```

**📋 EXPLICACIÓN DE LA ESTRUCTURA:**

#### **1️⃣ Nivel Base: Subtotal de Equipos**
- **Función**: Base fundamental para todos los cálculos
- **Componentes**: Inversor + Baterías + Estructura
- **Independiente**: No depende de otros cálculos

#### **2️⃣ Nivel Secundario: Factores sobre Equipos**
- **Recargo Techo**: Se aplica sobre subtotal equipos
- **Garantía**: Se aplica sobre subtotal equipos (independiente)
- **Subsidio**: Se aplica sobre (equipos + recargo techo)

#### **3️⃣ Nivel Terciario: Cálculos Compuestos**
- **IVA**: Se aplica sobre (equipos + recargo - subsidio + instalación)
- **Total Antes Financiar**: Suma de todos los componentes

**⚠️ REGLAS CRÍTICAS:**
1. **Garantía** siempre se calcula solo sobre equipos
2. **Subsidio** siempre incluye equipos + recargo techo
3. **IVA** se calcula después de aplicar subsidios
4. **Orden** debe respetarse para cálculos correctos

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

---

### **📊 Ejemplo Completo del Flujo de Cálculo**

**ENTRADA:**
- Inversor: $650,000
- Baterías: $320,000 × 1 = $320,000
- Estructura: $180,000
- Tipo techo: Teja/Asfalto (+5%)
- Garantía: 12 meses (+2%)
- Subsidio: Residencial (-8%)
- Instalación base: $350,000
- Complejidad: Baja (sin recargo)

**CÁLCULO PASO A PASO:**

#### **Paso 1: Subtotal Equipos**
```
$650,000 + $320,000 + $180,000 = $1,150,000
```

#### **Paso 2: Recargo Techo**
```
$1,150,000 × 5% = $57,500
```

#### **Paso 3: Garantía**
```
$1,150,000 × 2% = $23,000
```

#### **Paso 4: Subsidio**
```
Base: $1,150,000 + $57,500 = $1,207,500
Subsidio: $1,207,500 × 8% = $96,600
```

#### **Paso 5: Instalación**
```
$350,000 (sin recargo por complejidad baja)
```

#### **Paso 6: IVA**
```
Base IVA: $1,150,000 + $57,500 - $96,600 + $350,000 = $1,460,900
IVA: $1,460,900 × 19% = $277,571
```

#### **Paso 7: Total Antes Financiar**
```
$1,150,000 + $57,500 - $96,600 + $350,000 + $277,571 + $23,000 = $1,761,471
```

**RESULTADO FINAL:** $1,761,471

**🔍 ANÁLISIS DEL FLUJO:**
- **Equipos**: $1,150,000 (base)
- **Recargos**: $57,500 (techo) + $23,000 (garantía) = $80,500
- **Descuentos**: -$96,600 (subsidio)
- **Servicios**: $350,000 (instalación) + $277,571 (IVA) = $627,571
- **Neto**: $1,150,000 + $80,500 - $96,600 + $627,571 = $1,761,471

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

## 📝 Formulario de Contacto

### **Funcionalidades**
Formulario de contacto con validaciones y feedback visual para solicitar asesoría personalizada.

### **Campos del Formulario**
- **Nombre**: Campo obligatorio, mínimo 2 caracteres
- **Correo electrónico**: Campo obligatorio, validación con regex
- **Mensaje**: Campo opcional, mínimo 10 caracteres si se completa

### **Validaciones Implementadas**

#### **Validación de Nombre**
```javascript
if (nombre.trim().length < 2) {
    errores.nombre = 'El nombre debe tener al menos 2 caracteres';
}
```

#### **Validación de Email**
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!correo.trim()) {
    errores.correo = 'El correo electrónico es obligatorio';
} else if (!emailRegex.test(correo)) {
    errores.correo = 'Ingresa un correo electrónico válido';
}
```

#### **Validación de Mensaje**
```javascript
if (mensaje.trim() && mensaje.trim().length < 10) {
    errores.mensaje = 'El mensaje debe tener al menos 10 caracteres';
}
```

### **Funcionalidades Adicionales**
- **Botón Limpiar**: Resetea todos los campos y errores
- **Feedback Visual**: Campos inválidos se marcan en rojo
- **SweetAlert**: Notificación de éxito al enviar
- **Responsive**: Botones adaptados para móvil y desktop

## 🎨 Componentes UI

### **Button Component**
Botón personalizado con múltiples variantes y estilos corporativos.

```javascript
<Button 
    variant="primary" 
    helioStyle="filled"
    size="lg"
    className="custom-class"
>
    Texto del botón
</Button>
```

**Props disponibles:**
- `variant`: primary, secondary, outline-primary
- `helioStyle`: filled, outlined, secondary
- `size`: sm, md, lg
- `className`: clases CSS adicionales

### **Section Component**
Contenedor estandarizado para todas las secciones.

```javascript
<Section 
    id="servicios"
    title="Servicios" 
    description="Descripción de la sección"
    bgColor="var(--helio-bg-light)"
>
    Contenido de la sección
</Section>
```

### **BasicCard Component**
Tarjeta reutilizable para servicios y soluciones.

```javascript
<BasicCard 
    icon={faBolt}
    title="Título de la tarjeta"
    description="Descripción detallada"
    iconColor="#FF6B35"
    iconTransform="rotate(-10deg)"
/>
```

### **BasicCardGrid Component**
Grid responsivo para múltiples tarjetas.

```javascript
<BasicCardGrid 
    cards={serviciosData} 
    gridConfig={{ lg: 6, xl: 3 }} 
    gapClass="g-4"
/>
```

## 📱 Responsividad

### **Breakpoints Bootstrap**
- **xs**: < 576px (Móvil)
- **sm**: ≥ 576px (Móvil grande)
- **md**: ≥ 768px (Tablet)
- **lg**: ≥ 992px (Desktop)
- **xl**: ≥ 1200px (Desktop grande)

### **Comportamiento por Dispositivo**

#### **Móvil (< 768px)**
- Navegación colapsable
- Imágenes en columna única
- Botones de ancho completo
- Formularios en columna única

#### **Tablet (768px - 991px)**
- Layout similar a móvil
- Formulario calculadora en columna única
- Tarjetas en columna única
- Imágenes centradas

#### **Desktop (≥ 992px)**
- Layout de dos columnas
- Imágenes lado a lado
- Botones tamaño normal
- Formularios en múltiples columnas

### **Configuración de Rutas de Imágenes**
```javascript
// Configuración condicional según entorno
const imagePath = process.env.NODE_ENV === 'production' 
    ? './hero-image.png'  // GitHub Pages
    : '/hero-image.png';  // Desarrollo local
```

## 🔧 Scripts Disponibles

### **Desarrollo**
```bash
npm start          # Inicia servidor de desarrollo en http://localhost:3000
npm test           # Ejecuta tests en modo interactivo
npm run build      # Construye la aplicación para producción
```

### **Deployment**
```bash
npm run predeploy  # Ejecuta npm run build automáticamente
npm run deploy     # Despliega a GitHub Pages (rama gh-pages)
```

### **Utilidades**
```bash
npm run eject      # Expone configuración de webpack (irreversible)
```

## 🚀 Deployment

### **Flujo de Deployment**
1. **Desarrollo**: Trabajar en rama `master`
2. **Commit**: Hacer commit de cambios
3. **Push**: Subir cambios a GitHub
4. **Deploy**: Ejecutar `npm run deploy`
5. **Propagación**: Esperar 2-10 minutos para que GitHub Pages actualice

### **Configuración de GitHub Pages**
- **Rama fuente**: `gh-pages` (generada automáticamente)
- **Directorio**: `/` (raíz)
- **URL**: `https://barrolas.github.io/helioandes-react`

### **Variables de Entorno**
El proyecto usa configuración condicional para manejar diferentes entornos:

```javascript
// En Hero.js y Navbar.js
const imagePath = process.env.NODE_ENV === 'production' 
    ? './hero-image.png'  // Para GitHub Pages
    : '/hero-image.png';  // Para desarrollo local
```

## 🛠️ Tecnologías Utilizadas

### **Frontend Core**
- **React 19.2.0**: Biblioteca principal para la interfaz de usuario
- **React DOM 19.2.0**: Renderizado de React en el DOM
- **React Scripts 5.0.1**: Scripts de build, desarrollo y testing

### **UI Framework y Componentes**
- **Bootstrap 5.3.8**: Framework CSS para diseño responsivo
- **React Bootstrap 2.10.10**: Componentes React basados en Bootstrap
- **FontAwesome**: Librería completa de iconografía
  - **@fortawesome/fontawesome-free 7.1.0**: Iconos gratuitos base
  - **@fortawesome/free-solid-svg-icons 7.1.0**: Iconos sólidos
  - **@fortawesome/free-regular-svg-icons 7.1.0**: Iconos regulares
  - **@fortawesome/free-brands-svg-icons 7.1.0**: Iconos de marcas
  - **@fortawesome/react-fontawesome 3.1.0**: Componente React para FontAwesome

### **Notificaciones y Alertas**
- **SweetAlert2 11.26.3**: Librería para alertas y notificaciones elegantes

### **Herramientas de Desarrollo**
- **Create React App**: Configuración base del proyecto
- **ESLint**: Linting de código JavaScript/React
- **Webpack**: Bundling y optimización (configurado por CRA)
- **Babel**: Transpilación de JavaScript moderno

### **Deployment y Build**
- **gh-pages 6.3.0**: Deployment automático a GitHub Pages
- **cross-env 10.1.0**: Variables de entorno multiplataforma
- **web-vitals 2.1.4**: Métricas de rendimiento web

### **Configuración del Proyecto**
- **Node.js**: Entorno de ejecución JavaScript
- **npm**: Gestor de paquetes
- **Git**: Control de versiones
- **GitHub Pages**: Hosting estático

## 📄 Licencia

Este proyecto está desarrollado para fines educativos y de presentación académica.

---

**Desarrollado por Nicolás Barra || Nicole Chávez**