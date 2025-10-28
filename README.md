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

## 🧮 Calculadora Integral

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

### **Métodos de Cálculo**

#### **Cálculo de Potencia Total**
```javascript
const potenciaTotal = potenciaPanel * cantidadPaneles;
```

#### **Cálculo de Costos Base**
```javascript
const costoPaneles = potenciaPanel * cantidadPaneles * precioPorWatt;
const costoInversor = inversorPrecio;
const costoBaterias = bateriaPrecio * cantidadBaterias;
const costoEstructura = estructuraCableado;
```

#### **Cálculo de Instalación**
```javascript
// Factor por tipo de techo
const factoresTecho = { '1': 1.0, '2': 1.2, '3': 1.5 };
const factorTecho = factoresTecho[tipoTecho];

// Factor por región
const factoresRegion = { '1': 1.0, '2': 1.1, '3': 1.15 };
const factorRegion = factoresRegion[region];

// Factor por complejidad
const factoresComplejidad = { '1': 1.0, '2': 1.3, '3': 1.6 };
const factorComplejidad = factoresComplejidad[complejidadInstalacion];

const costoInstalacion = instalacionBase * factorTecho * factorRegion * factorComplejidad;
```

#### **Cálculo de Envío**
```javascript
// Factor por método de envío
const factoresEnvio = { '1': 1.0, '2': 1.5 };
const factorEnvio = factoresEnvio[metodoEnvio];

const costoEnvio = pesoEnvio * precioPorKg * factorEnvio;
```

#### **Cálculo de Financiamiento**
```javascript
// Cálculo de pie inicial
const pieInicial = tipoPie === '1' ? valorPie : (costoTotal * porcentajePie);

// Cálculo de saldo a financiar
const saldoFinanciar = costoTotal - pieInicial;

// Cálculo de cuotas (si aplica)
const cuotas = planPago === '2' ? calcularCuotas(saldoFinanciar, tasaInteres, plazo) : 0;
```

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