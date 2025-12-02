# Guía de Configuración de Mockoon para HelioAndes

Esta guía explica cómo configurar Mockoon para simular la API de servicios y planes.

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
4. Configurar el puerto: `3001` (o el que prefieras)

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
   - Copiar y pegar el contenido de `src/data/mockServices.json`

#### Ruta 2: GET /api/services/:id (Servicio por ID)

1. Click en **"Add route"**
2. Configurar:
   - **Method**: `GET`
   - **Endpoint**: `/api/services/:id`
   - **Status**: `200`
   - **Headers**: 
     - `Content-Type: application/json`
3. En el body de la respuesta, usar una función para buscar por ID:

```json
{
  "id": {{ params 'id' }},
  "nombre": "Estudio energético",
  "descripcion": "Análisis de consumo y propuesta ajustada a tu perfil.",
  "precio": 150000,
  "estado": "activo",
  "iconName": "bolt",
  "iconColor": "#FF6B35",
  "categoria": "consultoria",
  "duracion": "2-3 semanas"
}
```

**Nota**: Para una implementación más realista, puedes usar el contenido completo de `mockServices.json` y filtrar por ID usando reglas de Mockoon.

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
   - Copiar y pegar el contenido de `src/data/mockPlans.json`

#### Ruta 4: GET /api/plans/:id (Plan por ID)

1. Click en **"Add route"**
2. Configurar:
   - **Method**: `GET`
   - **Endpoint**: `/api/plans/:id`
   - **Status**: `200`
   - **Headers**: 
     - `Content-Type: application/json`
3. En el body de la respuesta, usar una función similar a la de servicios.

---

## 🔧 Configuración Avanzada (Opcional)

### Usar Reglas para Filtrar por ID

Para hacer que la ruta `/api/services/:id` retorne el servicio correcto:

1. En la ruta `GET /api/services/:id`
2. Click en **"Rules"** o **"Reglas"**
3. Agregar una regla:
   - **Condition**: `{{ params 'id' }} equals '1'`
   - **Response**: Seleccionar una respuesta específica con el servicio ID 1
4. Repetir para cada ID

**Alternativa más simple**: Usar el array completo y filtrar en el frontend, o crear múltiples respuestas con diferentes IDs.

### Configurar CORS (si es necesario)

Si tienes problemas de CORS:

1. En la configuración del entorno
2. Habilitar **"Enable CORS"**
3. O agregar headers manualmente:
   - `Access-Control-Allow-Origin: *`
   - `Access-Control-Allow-Methods: GET, POST, PUT, DELETE`
   - `Access-Control-Allow-Headers: Content-Type`

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
- `http://localhost:3001/api/services`
- `http://localhost:3001/api/plans`
- `http://localhost:3001/api/services/1`
- `http://localhost:3001/api/plans/1`

Deberías ver los datos JSON.

### Opción 2: Desde la aplicación React
1. Asegurarse de que la variable de entorno esté configurada:
   - En desarrollo, por defecto usa `http://localhost:3001`
   - O crear un archivo `.env` con:
     ```
     REACT_APP_API_BASE_URL=http://localhost:3001
     ```
2. Iniciar la aplicación React: `npm start`
3. Navegar al dashboard y verificar que los datos se carguen

---

## 📝 Estructura de Rutas Requeridas

```
GET /api/services          → Retorna array de servicios
GET /api/services/:id      → Retorna un servicio específico
GET /api/plans             → Retorna array de planes
GET /api/plans/:id         → Retorna un plan específico
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
- Actualizar `src/config/api.js` con el nuevo puerto

### Error: CORS
- Habilitar CORS en la configuración del entorno
- O agregar los headers manualmente

### Los datos no se cargan en React
- Verificar que Mockoon esté corriendo
- Verificar la URL en `src/config/api.js`
- Revisar la consola del navegador para errores
- Verificar que las rutas en Mockoon coincidan exactamente con las del código

---

## 📚 Recursos Adicionales

- Documentación oficial de Mockoon: https://mockoon.com/docs/
- Archivos de datos mock: `src/data/mockServices.json` y `src/data/mockPlans.json`
- Configuración de API: `src/config/api.js`

---

## 🎉 ¡Listo!

Una vez configurado Mockoon, tu aplicación React podrá consumir los datos mock como si fuera una API real. Esto es perfecto para desarrollo y testing antes de tener el backend real.

