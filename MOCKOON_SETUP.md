# Guía de Configuración de Mockoon para HelioAndes

Esta guía explica cómo configurar Mockoon para simular la API de servicios y planes de forma simple.

## 📋 Prerrequisitos

1. **Instalar Mockoon**
   - Descargar desde: https://mockoon.com/download/
   - O instalar vía npm: `npm install -g @mockoon/cli`

2. **Tener los archivos JSON de datos mock**
   - `src/data/mockServices.json`
   - `src/data/mockPlans.json`

---

## 🚀 Configuración Paso a Paso

### Paso 1: Crear un Nuevo Entorno en Mockoon

1. Abrir Mockoon
2. Click en **"New environment"** o **"Nuevo entorno"**
3. Nombrar el entorno: `HelioAndes API`
4. Configurar el puerto: `3001`

### Paso 2: Crear Rutas para Servicios

#### Ruta 1: GET /api/services (Lista de todos los servicios)

1. Click en **"Add route"** o **"Agregar ruta"**
2. Configurar:
   - **Method**: `GET`
   - **Endpoint**: `/api/services`
   - **Status**: `200`
   - **Headers**: 
     - `Content-Type: application/json`
3. En el body de la respuesta:
   - Seleccionar **"JSON"**
   - Copiar y pegar el contenido completo de `src/data/mockServices.json`

#### Ruta 2: GET /api/services/:id (Servicio por ID)

1. Click en **"Add route"**
2. Configurar:
   - **Method**: `GET`
   - **Endpoint**: `/api/services/:id`
   - **Status**: `200`
   - **Headers**: 
     - `Content-Type: application/json`
3. En el body de la respuesta, copiar uno de los servicios de `mockServices.json` (por ejemplo, el servicio con id: 1)

**Nota**: Para una implementación más completa, puedes crear múltiples respuestas con reglas para cada ID, pero para desarrollo simple, puedes usar el mismo servicio para todos los IDs.

### Paso 3: Crear Rutas para Planes

#### Ruta 3: GET /api/plans (Lista de todos los planes)

1. Click en **"Add route"**
2. Configurar:
   - **Method**: `GET`
   - **Endpoint**: `/api/plans`
   - **Status**: `200`
   - **Headers**: 
     - `Content-Type: application/json`
3. En el body de la respuesta:
   - Seleccionar **"JSON"**
   - Copiar y pegar el contenido completo de `src/data/mockPlans.json`

#### Ruta 4: GET /api/plans/:id (Plan por ID)

1. Click en **"Add route"**
2. Configurar:
   - **Method**: `GET`
   - **Endpoint**: `/api/plans/:id`
   - **Status**: `200`
   - **Headers**: 
     - `Content-Type: application/json`
3. En el body de la respuesta, copiar uno de los planes de `mockPlans.json` (por ejemplo, el plan con id: 1)

---

## 🎯 Iniciar Mockoon

1. **Desde la aplicación desktop**:
   - Click en el botón **"Start"** o **"Iniciar"** del entorno
   - Verificar que el puerto esté activo (debería mostrar `http://localhost:3001`)

2. **Desde la línea de comandos** (CLI):
   ```bash
   mockoon-cli start --data ./mockoon-environment.json --port 3001
   ```

---

## ✅ Verificar que Funciona

### Opción 1: Desde el navegador
Abrir en el navegador:
- `http://localhost:3001/api/services` → Debe mostrar array de servicios
- `http://localhost:3001/api/plans` → Debe mostrar array de planes
- `http://localhost:3001/api/services/1` → Debe mostrar un servicio
- `http://localhost:3001/api/plans/1` → Debe mostrar un plan

### Opción 2: Desde la aplicación React
1. Asegurarse de que Mockoon esté corriendo en el puerto 3001
2. Iniciar la aplicación React: `npm start`
3. Navegar al dashboard (`/dashboard/services` o `/dashboard/plans`)
4. Verificar que los datos se carguen correctamente

---

## 📝 Estructura de Rutas Requeridas

```
GET /api/services          → Retorna array de servicios (JSON)
GET /api/services/:id      → Retorna un servicio específico (JSON)
GET /api/plans             → Retorna array de planes (JSON)
GET /api/plans/:id         → Retorna un plan específico (JSON)
```

---

## 🔄 Exportar/Importar Configuración

### Exportar configuración de Mockoon:
1. En Mockoon, click en **"Export"** o **"Exportar"**
2. Guardar como `mockoon-environment.json`
3. Compartir con el equipo

### Importar configuración:
1. En Mockoon, click en **"Import"** o **"Importar"**
2. Seleccionar el archivo `mockoon-environment.json`

---

## 🐛 Solución de Problemas

### Error: "Port already in use"
- Cambiar el puerto en Mockoon a otro (ej: 3002)
- Actualizar las URLs en los componentes de `http://localhost:3001` a `http://localhost:3002`

### Error: CORS
- Habilitar CORS en la configuración del entorno de Mockoon
- O agregar headers manualmente:
  - `Access-Control-Allow-Origin: *`
  - `Access-Control-Allow-Methods: GET, POST, PUT, DELETE`
  - `Access-Control-Allow-Headers: Content-Type`

### Los datos no se cargan en React
- Verificar que Mockoon esté corriendo
- Verificar que el puerto sea 3001
- Revisar la consola del navegador para errores
- Verificar que las rutas en Mockoon coincidan exactamente con las del código

---

## 📚 Archivos de Referencia

- Datos mock: `src/data/mockServices.json` y `src/data/mockPlans.json`
- Componentes que usan la API:
  - `src/pages/dashboard/ServiceList.js`
  - `src/pages/dashboard/ServiceDetail.js`
  - `src/pages/dashboard/PlanList.js`
  - `src/pages/dashboard/PlanDetail.js`
  - `src/components/sections/Servicios.js`
  - `src/components/sections/Planes.js`

---

## 🎉 ¡Listo!

Una vez configurado Mockoon, tu aplicación React podrá consumir los datos mock como si fuera una API real. Esto es perfecto para desarrollo y testing antes de tener el backend real.
