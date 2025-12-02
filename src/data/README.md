# Mock Data - HelioAndes

Este directorio contiene los datos mock para servicios y planes que se utilizan en la aplicación HelioAndes.

## Archivos

- `mockServices.json`: Datos de servicios disponibles
- `mockPlans.json`: Datos de planes de energía solar
- `index.js`: Funciones helper para acceder a los datos

## Estructura de Datos

### Servicios (`mockServices.json`)

Cada servicio contiene:
- `id`: Identificador único
- `nombre`: Nombre del servicio
- `descripcion`: Descripción del servicio
- `precio`: Precio del servicio (0 si está incluido en otro servicio)
- `estado`: Estado del servicio (`activo` o `inactivo`)
- `iconName`: Nombre del icono de FontAwesome
- `iconColor`: Color del icono (hex)
- `iconTransform`: Transformación CSS del icono (opcional)
- `categoria`: Categoría del servicio
- `duracion`: Duración estimada del servicio
- `createdAt`: Fecha de creación (ISO 8601)
- `updatedAt`: Fecha de última actualización (ISO 8601)

### Planes (`mockPlans.json`)

Cada plan contiene:
- `id`: Identificador único
- `nombre`: Nombre del plan
- `potencia`: Rango de potencia del plan
- `badge`: Etiqueta del plan (para UI)
- `descripcion`: Descripción del plan
- `precioMensual`: Precio mensual (0 si no aplica)
- `precioAnual`: Precio anual (0 si no aplica)
- `precioContado`: Precio de contado
- `estado`: Estado del plan (`activo` o `inactivo`)
- `caracteristicas`: Array de características principales
- `incluye`: Array de elementos incluidos
- `noIncluye`: Array de elementos no incluidos
- `duracionContrato`: Duración del contrato
- `createdAt`: Fecha de creación (ISO 8601)
- `updatedAt`: Fecha de última actualización (ISO 8601)

## Uso

### Importar datos directamente

```javascript
import { servicesData, plansData } from './data';
```

### Usar funciones helper

```javascript
import { getActiveServices, getPlanById } from './data';

// Obtener solo servicios activos
const activeServices = getActiveServices();

// Obtener un plan por ID
const plan = getPlanById(1);
```

## Integración con Mockoon

Estos archivos JSON pueden ser importados directamente en Mockoon para crear un mock API:

1. Crear rutas en Mockoon:
   - `GET /api/services` → Retorna `mockServices.json`
   - `GET /api/services/:id` → Retorna servicio específico
   - `GET /api/plans` → Retorna `mockPlans.json`
   - `GET /api/plans/:id` → Retorna plan específico

2. Configurar respuestas:
   - Usar los archivos JSON directamente como respuesta
   - Agregar filtros para servicios/planes activos si es necesario

## Notas

- Los datos con `estado: "inactivo"` no deberían mostrarse en la landing page pública
- Los iconos usan FontAwesome, asegúrate de tener los iconos correspondientes importados
- Las fechas están en formato ISO 8601 para compatibilidad

