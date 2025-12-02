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

⚠️ **IMPORTANTE**: Esta ruta retorna **UN SOLO servicio** (un objeto), NO la lista completa.

Para que funcione correctamente con diferentes IDs (1, 2, 3, etc.), necesitas configurar **reglas** en Mockoon.

#### Opción A: Configurar Reglas (Recomendado) - Retorna diferentes servicios según el ID

1. Click en **"Add route"**
2. Configurar:
   - **Method**: `GET`
   - **Endpoint**: `/api/services/:id`
   - **Status Code**: `200`
3. En **Headers**:
   - `Content-Type: application/json`
4. **Configurar múltiples respuestas con reglas:**
   
   En Mockoon, puedes agregar múltiples respuestas a la misma ruta. Para cada servicio:
   
   a. Click en **"Add response"** o **"Agregar respuesta"**
   
   b. **Para el servicio con id: 1:**
      - Click en **"Rules"** o **"Reglas"**
      - Agregar regla: `{{params 'id'}} equals '1'`
      - En el **Body** (JSON), pegar:
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
   
   c. **Para el servicio con id: 2:**
      - Click en **"Add response"** nuevamente
      - Regla: `{{params 'id'}} equals '2'`
      - Body (JSON):
      ```json
      {
        "id": 2,
        "nombre": "Instalación certificada",
        "descripcion": "Ejecutada por personal acreditado y normativa vigente.",
        "precio": 0,
        "estado": "activo",
        "iconName": "wrench",
        "iconColor": "#8B4513",
        "iconTransform": "rotate(10deg)",
        "categoria": "instalacion",
        "duracion": "1-2 días",
        "createdAt": "2024-01-15T00:00:00Z",
        "updatedAt": "2024-01-15T00:00:00Z"
      }
      ```
   
   d. Repetir para los servicios con id: 3, 4, 5, 6 (copiar cada objeto de `mockServices.json`)

#### Opción B: Solución Simple (Solo para desarrollo rápido)

Si no quieres configurar reglas, puedes:
1. Crear la ruta `/api/services/:id`
2. Poner en el body el servicio con `id: 1`
3. **Nota**: Esto retornará siempre el mismo servicio sin importar el ID que consultes

**Diferencia clave:**
- ❌ `/api/services` → Retorna: `[{...}, {...}, {...}]` (array con corchetes `[]`)
- ✅ `/api/services/:id` → Retorna: `{...}` (un solo objeto, SIN corchetes)

**💡 Tip**: Si usas la Opción A con reglas, cuando consultes:
- `http://localhost:3001/api/services/1` → Retorna servicio id: 1
- `http://localhost:3001/api/services/2` → Retorna servicio id: 2
- `http://localhost:3001/api/services/3` → Retorna servicio id: 3
- etc.

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

⚠️ **IMPORTANTE**: Esta ruta retorna **UN SOLO plan** (un objeto), NO la lista completa.

Para que funcione correctamente con diferentes IDs, sigue el mismo proceso que en el Paso 3:

#### Opción A: Configurar Reglas (Recomendado)

1. Click en **"Add route"**
2. Configurar:
   - **Method**: `GET`
   - **Endpoint**: `/api/plans/:id`
   - **Status Code**: `200`
3. En **Headers**:
   - `Content-Type: application/json`
4. **Configurar múltiples respuestas con reglas:**
   
   Para cada plan (id: 1, 2, 3, 4, 5):
   
   a. Click en **"Add response"**
   
   b. **Para el plan con id: 1:**
      - Regla: `{{params 'id'}} equals '1'`
      - Body (JSON): Copiar el plan con id: 1 de `mockPlans.json`
   
   c. Repetir para los planes con id: 2, 3, 4, 5

#### Opción B: Solución Simple

1. Crear la ruta `/api/plans/:id`
2. Poner en el body el plan con `id: 1`
3. **Nota**: Esto retornará siempre el mismo plan sin importar el ID

**Diferencia clave:**
- ❌ `/api/plans` → Retorna: `[{...}, {...}, {...}]` (array con corchetes `[]`)
- ✅ `/api/plans/:id` → Retorna: `{...}` (un solo objeto, SIN corchetes)

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

## 🔧 Configuración Avanzada: Reglas en Mockoon

### ¿Cómo funcionan las reglas?

Las reglas permiten que Mockoon retorne diferentes respuestas según el valor del parámetro `:id` en la URL.

### Ejemplo práctico para `/api/services/:id`:

1. **Crear la ruta base**: `GET /api/services/:id`

2. **Agregar primera respuesta (id: 1)**:
   - Click en "Add response" dentro de la ruta
   - En "Rules", agregar: `{{params 'id'}} equals '1'`
   - En "Body", pegar el servicio con id: 1

3. **Agregar segunda respuesta (id: 2)**:
   - Click en "Add response" nuevamente
   - Regla: `{{params 'id'}} equals '2'`
   - Body: pegar el servicio con id: 2

4. **Repetir para todos los servicios** (id: 3, 4, 5, 6)

5. **Agregar respuesta por defecto (opcional)**:
   - Si consultas un ID que no existe (ej: id: 99), puedes agregar una respuesta sin regla que retorne un error 404

### Sintaxis de reglas en Mockoon:

- `{{params 'id'}} equals '1'` → Cuando el parámetro `id` es igual a "1"
- `{{params 'id'}} equals '2'` → Cuando el parámetro `id` es igual a "2"
- etc.

**Nota**: El valor siempre es un string, por eso usas `'1'` con comillas.

### Orden de evaluación:

Mockoon evalúa las reglas de arriba hacia abajo. La primera regla que coincida será la respuesta que se retorne.

---

## 🔧 Configuración Avanzada: Reglas en Mockoon

### ¿Cómo funcionan las reglas?

Las reglas permiten que Mockoon retorne diferentes respuestas según el valor del parámetro `:id` en la URL.

### Ejemplo práctico para `/api/services/:id`:

1. **Crear la ruta base**: `GET /api/services/:id`

2. **Agregar primera respuesta (id: 1)**:
   - Click en **"Add response"** dentro de la ruta (no "Add route")
   - En **"Rules"**, agregar: `{{params 'id'}} equals '1'`
   - En **"Body"**, pegar el servicio con id: 1 (solo el objeto, sin corchetes)

3. **Agregar segunda respuesta (id: 2)**:
   - Click en **"Add response"** nuevamente (en la misma ruta)
   - Regla: `{{params 'id'}} equals '2'`
   - Body: pegar el servicio con id: 2

4. **Repetir para todos los servicios** (id: 3, 4, 5, 6)

5. **Agregar respuesta por defecto (opcional)**:
   - Si consultas un ID que no existe (ej: id: 99), puedes agregar una respuesta sin regla que retorne un error 404:
     - Status: `404`
     - Body: `{"error": "Servicio no encontrado"}`

### Sintaxis de reglas en Mockoon:

- `{{params 'id'}} equals '1'` → Cuando el parámetro `id` es igual a "1"
- `{{params 'id'}} equals '2'` → Cuando el parámetro `id` es igual a "2"
- etc.

**Nota**: El valor siempre es un string, por eso usas `'1'` con comillas simples.

### Orden de evaluación:

Mockoon evalúa las reglas de arriba hacia abajo. La primera regla que coincida será la respuesta que se retorne. Si ninguna regla coincide, retornará la primera respuesta sin regla (o un error si no hay ninguna).

### 📸 Visualización en Mockoon:

```
GET /api/services/:id
├── Response 1 (Rules: {{params 'id'}} equals '1')
│   └── Body: { servicio con id: 1 }
├── Response 2 (Rules: {{params 'id'}} equals '2')
│   └── Body: { servicio con id: 2 }
├── Response 3 (Rules: {{params 'id'}} equals '3')
│   └── Body: { servicio con id: 3 }
└── ... (más respuestas)
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
