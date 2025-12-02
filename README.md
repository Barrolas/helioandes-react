# 🌞 HelioAndes - Sistema de Energía Solar

Una aplicación web React para dimensionar sistemas de energía solar, calcular costos y solicitar asesoría para hogares y PyMEs.

## 📋 Tabla de Contenidos

- [🌐 URLs y Entornos](#-urls-y-entornos)
- [🚀 Instalación y Configuración](#-instalación-y-configuración)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [⚡ Funcionalidades Principales](#-funcionalidades-principales)
- [📊 Dashboard Administrativo](#-dashboard-administrativo)
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
- Mockoon (para desarrollo local con API mock)

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

### Configuración de API (Desarrollo)
Para que la aplicación funcione correctamente, necesitas tener Mockoon corriendo:

1. **Instalar Mockoon**: Descargar desde [mockoon.com](https://mockoon.com)
2. **Configurar Environment**:
   - Puerto: `3001`
   - Rutas necesarias:
     - `GET /api/services` - Lista de servicios
     - `GET /api/services/:id` - Detalle de servicio
     - `GET /api/plans` - Lista de planes
     - `GET /api/plans/:id` - Detalle de plan
3. **Iniciar Mockoon**: El servidor debe estar corriendo en `http://localhost:3001`

**Nota**: Sin Mockoon corriendo, la aplicación mostrará mensajes de error al intentar cargar servicios y planes.

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
- **Integración con API**: Los servicios se obtienen dinámicamente desde `GET /api/services`
- **Filtrado automático**: Solo se muestran servicios con `estado: "activo"` en la landing page

### 💡 **Soluciones**
- **Hogar 3-5 kW**: Balance ideal entre costo y ahorro
- **PyME 10-20 kW**: Para operación diurna con buena irradiación
- **Off-grid con baterías**: Autonomía en zonas sin red eléctrica

### 💰 **Planes de Financiamiento**
- **Contado**: Descuento por pago al contado
- **Financiamiento**: Opciones de pago a plazos
- **Leasing**: Modalidad de arrendamiento
- **Integración con API**: Los planes se obtienen dinámicamente desde `GET /api/plans`
- **Filtrado automático**: Solo se muestran planes con `estado: "activo"` en la landing page

### 💬 **Testimonios**
- Experiencias reales de clientes
- Casos de éxito en diferentes comunas
- Validación social del servicio

### ❓ **FAQ**
- Preguntas frecuentes sobre energía solar
- Información técnica y comercial
- Resolución de dudas comunes

## 📊 Dashboard Administrativo

### **Funcionalidades**
Panel de administración para gestionar servicios y planes de energía solar con diseño personalizado usando los colores de HelioAndes.

### **Características del Dashboard**

#### **🎨 Diseño Personalizado**
- Sidebar colapsable que muestra solo iconos cuando está cerrado
- Diseño responsive para desktop y móvil
- Paleta de colores consistente con HelioAndes
- Transiciones suaves y animaciones

#### **📱 Navegación**
- **Sidebar**: Navegación lateral con iconos y tooltips
  - Dashboard Home
  - Gestión de Servicios
  - Gestión de Planes
- **Topbar**: Barra superior con breadcrumbs y botón de volver
- **Breadcrumbs**: Indicador de ubicación actual en el dashboard

#### **📋 Módulos Disponibles**

##### **Servicios**
- **Lista de Servicios** (`/dashboard/services`): Grid de cards con todos los servicios
- **Detalle de Servicio** (`/dashboard/services/:id`): Vista detallada de un servicio específico
- Información mostrada: nombre, descripción, precio, duración, categoría, estado

##### **Planes**
- **Lista de Planes** (`/dashboard/plans`): Grid de cards con todos los planes
- **Detalle de Plan** (`/dashboard/plans/:id`): Vista detallada de un plan específico
- Información mostrada: nombre, potencia, descripción, precio, características, incluye/no incluye

#### **🔌 Integración con API**

##### **Endpoints Implementados**
La aplicación consume datos desde una API REST. En desarrollo se utiliza Mockoon como servidor mock.

**Base URL**: `http://localhost:3001`

**Endpoints de Servicios**:
- `GET /api/services` - Obtiene lista completa de servicios
  - Retorna: Array de objetos servicio
  - Uso: Landing page (filtra activos) y Dashboard (muestra todos)
- `GET /api/services/:id` - Obtiene detalle de un servicio específico
  - Parámetros: `id` (número)
  - Retorna: Objeto servicio único
  - Uso: Página de detalle en dashboard

**Endpoints de Planes**:
- `GET /api/plans` - Obtiene lista completa de planes
  - Retorna: Array de objetos plan
  - Uso: Landing page (filtra activos) y Dashboard (muestra todos)
- `GET /api/plans/:id` - Obtiene detalle de un plan específico
  - Parámetros: `id` (número)
  - Retorna: Objeto plan único
  - Uso: Página de detalle en dashboard

##### **Estructura de Datos**

**Servicio**:
```json
{
  "id": 1,
  "nombre": "Estudio Energético",
  "descripcion": "Análisis detallado...",
  "precio": 150000,
  "duracion": "2-3 semanas",
  "categoria": "Consultoría",
  "estado": "activo",
  "iconName": "lightbulb",
  "iconColor": "#FF6B35"
}
```

**Plan**:
```json
{
  "id": 1,
  "nombre": "Básico",
  "potencia": "3-5 kW",
  "descripcion": "Plan ideal para...",
  "precioContado": 2500000,
  "badge": "Básico",
  "estado": "activo",
  "caracteristicas": ["Estudio energético", "..."],
  "incluye": ["Instalación estándar", "..."],
  "noIncluye": ["Baterías", "..."]
}
```

##### **Configuración de Mockoon**
Para desarrollo local, se requiere Mockoon corriendo en el puerto 3001:
1. Instalar Mockoon desde [mockoon.com](https://mockoon.com)
2. Crear un nuevo environment
3. Configurar las rutas mencionadas arriba
4. Iniciar el servidor en el puerto 3001

##### **Manejo de Estados**
- **Loading**: Spinner y mensaje mientras se cargan los datos
- **Error**: Mensajes descriptivos si falla la conexión o el servidor no responde
- **Empty**: Mensaje cuando no hay datos disponibles
- **Filtrado**: En la landing page se muestran solo elementos con `estado: "activo"`

##### **Componentes que Consumen la API**
- `src/components/sections/Servicios.js` - Landing page (filtra solo activos)
- `src/components/sections/Planes.js` - Landing page (filtra solo activos)
- `src/pages/dashboard/ServiceList.js` - Dashboard (muestra todos)
- `src/pages/dashboard/ServiceDetail.js` - Dashboard (detalle individual)
- `src/pages/dashboard/PlanList.js` - Dashboard (muestra todos)
- `src/pages/dashboard/PlanDetail.js` - Dashboard (detalle individual)

##### **Estado Actual de la Implementación**

**✅ Implementado**:
- ✅ Landing page con consumo de API para servicios y planes
- ✅ Dashboard administrativo completo
- ✅ Listado y detalle de servicios
- ✅ Listado y detalle de planes
- ✅ Filtrado automático de elementos activos en landing page
- ✅ Manejo de estados de carga y error
- ✅ Sidebar colapsable con iconos
- ✅ Navegación con breadcrumbs
- ✅ Diseño responsive

**🔧 Configuración Requerida**:
- Mockoon corriendo en puerto 3001 (desarrollo)
- Endpoints configurados según especificación arriba
- Datos JSON con estructura definida

**📝 Notas**:
- Los datos se obtienen dinámicamente desde la API
- No se usan archivos JSON locales (carpeta `data` eliminada)
- La landing page muestra solo elementos con `estado: "activo"`
- El dashboard muestra todos los elementos (activos e inactivos)

#### **🎯 Acceso al Dashboard**
- Botón "Admin" en la barra de navegación principal
- Ruta: `/dashboard`
- Diseño coherente con el resto de la aplicación

## 🧮 Calculadora Integral

### **📋 Índice de la Calculadora**
- [Funcionalidades](#funcionalidades)
- [Campos de Entrada](#campos-de-entrada)
- [Flujo de Cálculo - Orden Crítico](#-flujo-de-cálculo---orden-crítico)
- [Validaciones](#validaciones)
- [Resumen de Resultados](#resumen-de-resultados)

### **Funcionalidades**
La calculadora permite dimensionar sistemas de energía solar con cálculos detallados de costos y financiamiento.

### **Campos de Entrada**

#### **Configuración del Sistema**
- `potenciaPanel`: Potencia individual de cada panel (W)
- `cantidadPaneles`: Número de paneles solares
- `inversorPrecio`: Costo del inversor
- `bateriaPrecio`: Costo por batería
- `cantidadBaterias`: Número de baterías
- `estructuraCableado`: Costo de estructura y cableado

#### **Instalación y Envío**
- `instalacionBase`: Costo base de instalación
- `pesoEnvio`: Peso total para cálculo de envío
- `tipoTecho`: Tipo de techo (1: Tejado, 2: Losa, 3: Metálico)
- `region`: Región de instalación (1: Metropolitana, 2: Norte, 3: Sur)
- `complejidadInstalacion`: Nivel de complejidad (1: Simple, 2: Media, 3: Compleja)

#### **Financiamiento**
- `subsidio`: Tipo de subsidio aplicable
- `metodoEnvio`: Método de envío (1: Estándar, 2: Express)
- `garantia`: Tipo de garantía (1: Estándar, 2: Extendida)
- `planPago`: Modalidad de pago (1: Contado, 2: Financiado)
- `tipoPie`: Tipo de pie inicial
- `valorPie`: Valor del pie inicial

### **📊 Flujo de Cálculo - Orden Crítico**

**⚠️ IMPORTANTE:** El orden de los cálculos es fundamental porque algunos valores dependen de otros. El flujo sigue esta secuencia específica:

```
1. Potencia → 2. Subtotal Equipos → 3. Recargo Techo → 4. Garantía → 5. Subsidio → 
6. Instalación → 7. IVA → 8. Envío → 9. Total Antes Financiar → 10. Pie → 
11. Financiamiento → 12. Total Final
```

#### **🔋 Paso 1: Potencia del Sistema**
```javascript
const potenciaEstimada = (potenciaPanel * cantidadPaneles) / 1000;
```
**Ejemplo:** 450W × 8 paneles = 3.6 kW
**Propósito:** Referencia técnica, no afecta costos directamente

#### **⚡ Paso 2: Subtotal de Equipos (BASE FUNDAMENTAL)**
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

#### **🏠 Paso 3: Recargo por Tipo de Techo**
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

#### **🛡️ Paso 4: Garantía (SOBRE SUBTOTAL EQUIPOS)**
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

#### **💰 Paso 5: Subsidio (SOBRE EQUIPOS + RECARGO TECHO)**
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

#### **🔗 Estructura de Dependencias en el Cálculo**

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

##### **1️⃣ Nivel Base: Subtotal de Equipos**
- **Función**: Base fundamental para todos los cálculos
- **Componentes**: Inversor + Baterías + Estructura
- **Independiente**: No depende de otros cálculos

##### **2️⃣ Nivel Secundario: Factores sobre Equipos**
- **Recargo Techo**: Se aplica sobre subtotal equipos
- **Garantía**: Se aplica sobre subtotal equipos (independiente)
- **Subsidio**: Se aplica sobre (equipos + recargo techo)

##### **3️⃣ Nivel Terciario: Cálculos Compuestos**
- **IVA**: Se aplica sobre (equipos + recargo - subsidio + instalación)
- **Total Antes Financiar**: Suma de todos los componentes

**⚠️ REGLAS CRÍTICAS:**
1. **Garantía** siempre se calcula solo sobre equipos
2. **Subsidio** siempre incluye equipos + recargo techo
3. **IVA** se calcula después de aplicar subsidios
4. **Orden** debe respetarse para cálculos correctos

#### **📊 Ejemplo Completo del Flujo de Cálculo**

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

##### **Paso 1: Subtotal Equipos**
```
$650,000 + $320,000 + $180,000 = $1,150,000
```

##### **Paso 2: Recargo Techo**
```
$1,150,000 × 5% = $57,500
```

##### **Paso 3: Garantía**
```
$1,150,000 × 2% = $23,000
```

##### **Paso 4: Subsidio**
```
Base: $1,150,000 + $57,500 = $1,207,500
Subsidio: $1,207,500 × 8% = $96,600
```

##### **Paso 5: Instalación**
```
$350,000 (sin recargo por complejidad baja)
```

##### **Paso 6: IVA**
```
Base IVA: $1,150,000 + $57,500 - $96,600 + $350,000 = $1,460,900
IVA: $1,460,900 × 19% = $277,571
```

##### **Paso 7: Total Antes Financiar**
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

### **Validaciones**
- **Potencia mínima**: Sistema debe generar al menos 1kW
- **Cantidad de paneles**: Mínimo 1 panel
- **Valores positivos**: Todos los costos deben ser mayores a 0

### **Resumen de Resultados**
La calculadora genera un resumen detallado que incluye:
- Costo total del sistema
- Desglose por componentes
- Costos de instalación y envío
- Opciones de financiamiento
- Ahorro estimado mensual
- Tiempo de retorno de inversión

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

### **Routing y Navegación**
- **React Router DOM 7.9.6**: Manejo de rutas y navegación
  - Rutas para landing page y dashboard
  - Rutas anidadas para módulos del dashboard
  - Configuración de basename para GitHub Pages

### **HTTP Client**
- **Axios 1.13.2**: Cliente HTTP para consumo de APIs
  - Integración con Mockoon para desarrollo
  - Manejo de errores y estados de carga

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