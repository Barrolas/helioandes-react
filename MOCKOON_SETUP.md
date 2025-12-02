# 🚀 Guía de Configuración de Mockoon para HelioAndes

Esta guía te ayudará a configurar Mockoon paso a paso para simular la API de servicios y planes usando los datos JSON del proyecto.

---

## 📋 Prerrequisitos

1. **Instalar Mockoon**
   - Descargar desde: https://mockoon.com/download/
   - O instalar vía npm: `npm install -g @mockoon/cli`

2. **Archivos JSON necesarios** (ya están en el proyecto):
   - `src/data/mockServices.json` → Contiene 6 servicios
   - `src/data/mockPlans.json` → Contiene 5 planes

---

## 🎯 Configuración Paso a Paso

### Paso 1: Crear Nuevo Entorno en Mockoon

1. Abrir Mockoon
2. Click en **"New environment"** o **"Nuevo entorno"**
3. Nombrar: `HelioAndes API`
4. Configurar puerto: `3001`
5. **Habilitar CORS** (importante):
   - En la configuración del entorno, buscar "CORS"
   - Activar la opción o agregar manualmente:
     - `Access-Control-Allow-Origin: *`
     - `Access-Control-Allow-Methods: GET, POST, PUT, DELETE`
     - `Access-Control-Allow-Headers: Content-Type`

---

### Paso 2: Crear Ruta GET /api/services (Lista de Servicios)

1. Click en **"Add route"** o el botón **"+"**
2. Configurar:
   - **Method**: `GET`
   - **Endpoint**: `/api/services`
   - **Status Code**: `200`
3. En **Headers**, agregar:
   - `Content-Type: application/json`
4. En **Body**:
   - Seleccionar tipo: **"JSON"**
   - Copiar y pegar el **contenido completo** de `src/data/mockServices.json`

**Ejemplo del contenido que debes pegar:**
```json
[
  {
    "id": 1,
    "nombre": "Estudio energético",
    "descripcion": "Análisis de consumo y propuesta ajustada a tu perfil.",
    "precio": 150000,
    "estado": "activo",
    "iconName": "bolt",
    "iconColor": "#FF6B35",
    "iconTransform": "rotate(-10deg)",
    "categoria": "consultoria",
    "duracion": "2-3 semanas",
    "createdAt": "2024-01-15T00:00:00Z",
    "updatedAt": "2024-01-15T00:00:00Z"
  },
  ... (resto de servicios)
]
```

---

### Paso 3: Crear Ruta GET /api/services/:id (Servicio por ID)

1. Click en **"Add route"**
2. Configurar:
   - **Method**: `GET`
   - **Endpoint**: `/api/services/:id`
   - **Status Code**: `200`
3. En **Headers**:
   - `Content-Type: application/json`
4. En **Body**:
   - Seleccionar tipo: **"JSON"**
   - Copiar y pegar **UN servicio** de `mockServices.json` (por ejemplo, el servicio con `id: 1`):

**Ejemplo del contenido que debes pegar:**
```json
{
  "id": 1,
  "nombre": "Estudio energético",
  "descripcion": "Análisis de consumo y propuesta ajustada a tu perfil.",
  "precio": 150000,
  "estado": "activo",
  "iconName": "bolt",
  "iconColor": "#FF6B35",
  "iconTransform": "rotate(-10deg)",
  "categoria": "consultoria",
  "duracion": "2-3 semanas",
  "createdAt": "2024-01-15T00:00:00Z",
  "updatedAt": "2024-01-15T00:00:00Z"
}
```

**Nota**: Para una implementación más completa, puedes crear múltiples respuestas con reglas basadas en el parámetro `:id`, pero para desarrollo simple, puedes usar el mismo servicio para todos los IDs.

---

### Paso 4: Crear Ruta GET /api/plans (Lista de Planes)

1. Click en **"Add route"**
2. Configurar:
   - **Method**: `GET`
   - **Endpoint**: `/api/plans`
   - **Status Code**: `200`
3. En **Headers**:
   - `Content-Type: application/json`
4. En **Body**:
   - Seleccionar tipo: **"JSON"**
   - Copiar y pegar el **contenido completo** de `src/data/mockPlans.json`

**Ejemplo del contenido que debes pegar:**
```json
[
  {
    "id": 1,
    "nombre": "Básico",
    "potencia": "3-5 kW",
    "badge": "Básico",
    "descripcion": "Plan ideal para hogares pequeños con consumo moderado",
    "precioMensual": 0,
    "precioAnual": 0,
    "precioContado": 2500000,
    "estado": "activo",
    "caracteristicas": [...],
    "incluye": [...],
    "noIncluye": [...],
    ...
  },
  ... (resto de planes)
]
```

---

### Paso 5: Crear Ruta GET /api/plans/:id (Plan por ID)

1. Click en **"Add route"**
2. Configurar:
   - **Method**: `GET`
   - **Endpoint**: `/api/plans/:id`
   - **Status Code**: `200`
3. En **Headers**:
   - `Content-Type: application/json`
4. En **Body**:
   - Seleccionar tipo: **"JSON"**
   - Copiar y pegar **UN plan** de `mockPlans.json` (por ejemplo, el plan con `id: 1`):

**Ejemplo del contenido que debes pegar:**
```json
{
  "id": 1,
  "nombre": "Básico",
  "potencia": "3-5 kW",
  "badge": "Básico",
  "descripcion": "Plan ideal para hogares pequeños con consumo moderado",
  "precioMensual": 0,
  "precioAnual": 0,
  "precioContado": 2500000,
  "estado": "activo",
  "caracteristicas": [
    "Estudio energético",
    "Instalación estándar",
    "Monitoreo básico",
    "Garantía 5 años"
  ],
  "incluye": [
    "Paneles solares 3-5 kW",
    "Inversor básico",
    "Instalación estándar",
    "Sistema de monitoreo básico"
  ],
  "noIncluye": [
    "Baterías",
    "Mantención extendida",
    "Soporte premium"
  ],
  "duracionContrato": "Sin contrato",
  "createdAt": "2024-01-15T00:00:00Z",
  "updatedAt": "2024-01-15T00:00:00Z"
}
```

---

## 🎬 Iniciar Mockoon

### Opción 1: Desde la aplicación desktop
1. Click en el botón **"Start"** o **"Iniciar"** del entorno
2. Verificar que el puerto esté activo (debería mostrar `http://localhost:3001` en verde)

### Opción 2: Desde la línea de comandos (CLI)
```bash
mockoon-cli start --data ./mockoon-environment.json --port 3001
```

---

## ✅ Verificar que Funciona

### Prueba 1: Desde el navegador
Abrir en el navegador y verificar que retornen datos JSON:

- ✅ `http://localhost:3001/api/services` 
  - Debe mostrar un array con 6 servicios
  
- ✅ `http://localhost:3001/api/plans`
  - Debe mostrar un array con 5 planes
  
- ✅ `http://localhost:3001/api/services/1`
  - Debe mostrar un objeto con el servicio id: 1
  
- ✅ `http://localhost:3001/api/plans/1`
  - Debe mostrar un objeto con el plan id: 1

### Prueba 2: Desde la aplicación React
1. Asegurarse de que Mockoon esté corriendo en el puerto 3001
2. Iniciar la aplicación React: `npm start`
3. Navegar a:
   - Landing Page → Sección "Servicios" y "Planes"
   - Dashboard → `/dashboard/services` o `/dashboard/plans`
4. Verificar que los datos se carguen correctamente sin errores en la consola

---

## 📝 Resumen de Rutas Configuradas

```
GET /api/services          → Retorna array de 6 servicios (JSON)
GET /api/services/:id      → Retorna un servicio específico (JSON)
GET /api/plans             → Retorna array de 5 planes (JSON)
GET /api/plans/:id         → Retorna un plan específico (JSON)
```

---

## 🔄 Exportar/Importar Configuración

### Exportar configuración de Mockoon:
1. En Mockoon, click en **"Export"** o **"Exportar"**
2. Guardar como `mockoon-environment.json` en la raíz del proyecto
3. Compartir con el equipo (agregar al repositorio)

### Importar configuración:
1. En Mockoon, click en **"Import"** o **"Importar"**
2. Seleccionar el archivo `mockoon-environment.json`
3. Todas las rutas se cargarán automáticamente

---

## 🐛 Solución de Problemas

### Error: "Port already in use"
- **Solución**: Cambiar el puerto en Mockoon a otro (ej: 3002)
- **Actualizar código**: Cambiar `http://localhost:3001` a `http://localhost:3002` en:
  - `src/pages/dashboard/ServiceList.js`
  - `src/pages/dashboard/ServiceDetail.js`
  - `src/pages/dashboard/PlanList.js`
  - `src/pages/dashboard/PlanDetail.js`
  - `src/components/sections/Servicios.js`
  - `src/components/sections/Planes.js`

### Error: CORS bloqueado
- **Solución**: Habilitar CORS en la configuración del entorno de Mockoon
- O agregar headers manualmente en cada ruta:
  - `Access-Control-Allow-Origin: *`
  - `Access-Control-Allow-Methods: GET, POST, PUT, DELETE`
  - `Access-Control-Allow-Headers: Content-Type`

### Los datos no se cargan en React
1. Verificar que Mockoon esté corriendo (botón "Start" activo)
2. Verificar que el puerto sea 3001
3. Revisar la consola del navegador (F12) para errores
4. Verificar que las rutas en Mockoon coincidan exactamente:
   - `/api/services` (no `/api/service`)
   - `/api/plans` (no `/api/plan`)
5. Verificar que el tipo de respuesta sea "JSON" y no "Text"

### Error 404 en las rutas
- Verificar que el endpoint esté escrito exactamente igual:
  - ✅ `/api/services`
  - ❌ `/api/service`
  - ❌ `/services`
  - ❌ `/api/services/`

### Los datos aparecen como texto plano
- Verificar que el header `Content-Type: application/json` esté configurado
- Verificar que el body esté en formato JSON válido (usar un validador JSON si es necesario)

---

## 📚 Archivos de Referencia en el Proyecto

### Datos Mock:
- `src/data/mockServices.json` → 6 servicios
- `src/data/mockPlans.json` → 5 planes

### Componentes que consumen la API:
- `src/pages/dashboard/ServiceList.js` → `GET /api/services`
- `src/pages/dashboard/ServiceDetail.js` → `GET /api/services/:id`
- `src/pages/dashboard/PlanList.js` → `GET /api/plans`
- `src/pages/dashboard/PlanDetail.js` → `GET /api/plans/:id`
- `src/components/sections/Servicios.js` → `GET /api/services` (filtra activos)
- `src/components/sections/Planes.js` → `GET /api/plans` (filtra activos)

---

## 🎉 ¡Listo!

Una vez configurado Mockoon, tu aplicación React podrá consumir los datos mock como si fuera una API real. Esto es perfecto para desarrollo y testing antes de tener el backend real.

**Próximos pasos:**
1. Iniciar Mockoon
2. Iniciar React (`npm start`)
3. Probar la aplicación en el navegador
4. Verificar que los datos se muestren correctamente

---

## 💡 Tips Adicionales

- **Guardar el entorno**: Mockoon guarda automáticamente, pero puedes exportar para respaldo
- **Múltiples entornos**: Puedes crear diferentes entornos para desarrollo, testing, producción
- **Reglas dinámicas**: Puedes configurar reglas para que `/api/services/:id` retorne diferentes servicios según el ID
- **Variables de entorno**: Puedes usar variables en Mockoon para hacer las respuestas más dinámicas
