# 🔗 Integración Frontend con Mockoon

## 📊 Cómo tu Frontend Llama a la API

### 1. **Lista de Servicios** (`/api/services`)

**Componentes que usan esto:**
- `src/pages/dashboard/ServiceList.js` → Línea 15
- `src/components/sections/Servicios.js` → Línea 14

**Código:**
```javascript
axios.get('http://localhost:3001/api/services')
```

**Qué espera recibir:**
```json
[
  { "id": 1, "nombre": "Estudio energético", ... },
  { "id": 2, "nombre": "Instalación certificada", ... },
  ...
]
```

**Configuración en Mockoon:**
- Ruta: `GET /api/services`
- Body: Copiar contenido de `services-all.json` (con corchetes `[ ]`)

---

### 2. **Servicio por ID** (`/api/services/:id`)

**Componentes que usan esto:**
- `src/pages/dashboard/ServiceDetail.js` → Línea 18

**Código:**
```javascript
axios.get(`http://localhost:3001/api/services/${id}`)
// Ejemplo: http://localhost:3001/api/services/1
// Ejemplo: http://localhost:3001/api/services/2
```

**Qué espera recibir:**
```json
{
  "id": 1,
  "nombre": "Estudio energético",
  "descripcion": "...",
  ...
}
```

**Configuración en Mockoon:**
- Ruta: `GET /api/services/:id`
- Agregar múltiples respuestas con reglas:
  - Respuesta 1: Regla `{{params 'id'}} equals '1'` → Body: servicio con id: 1
  - Respuesta 2: Regla `{{params 'id'}} equals '2'` → Body: servicio con id: 2
  - etc.

---

## 🎯 Flujo Completo

### Escenario 1: Usuario ve la lista de servicios

1. Usuario navega a `/dashboard/services`
2. `ServiceList.js` se monta
3. `useEffect` ejecuta: `axios.get('http://localhost:3001/api/services')`
4. Mockoon retorna: Array completo de servicios (desde `services-all.json`)
5. Frontend muestra todos los servicios en cards

### Escenario 2: Usuario hace click en un servicio

1. Usuario hace click en un servicio (ej: id: 1)
2. `handleViewDetails(1)` ejecuta: `navigate('/dashboard/services/1')`
3. `ServiceDetail.js` se monta con `id = 1`
4. `useEffect` ejecuta: `axios.get('http://localhost:3001/api/services/1')`
5. Mockoon retorna: Objeto del servicio con id: 1 (según la regla configurada)
6. Frontend muestra los detalles del servicio

---

## ⚙️ Configuración Paso a Paso en Mockoon

### Paso 1: Configurar `/api/services` (Lista completa)

1. Crear ruta: `GET /api/services`
2. Headers: `Content-Type: application/json`
3. Body (JSON): Copiar TODO el contenido de `src/data/mockoon/services-all.json`
   - Debe incluir los corchetes `[ ]` del inicio y final

**Resultado:** Cuando tu frontend llame a `http://localhost:3001/api/services`, recibirá todos los servicios.

---

### Paso 2: Configurar `/api/services/:id` (Servicio individual)

1. Crear ruta: `GET /api/services/:id`

2. **Agregar Respuesta 1 (para id: 1):**
   - Click en "Add response"
   - En "Rules": `{{params 'id'}} equals '1'`
   - En "Body" (JSON): Copiar contenido de `src/data/mockServices.json` - solo el objeto con id: 1
     ```json
     {
       "id": 1,
       "nombre": "Estudio energético",
       "descripcion": "Análisis de consumo y propuesta ajustada a tu perfil.",
       ...
     }
     ```

3. **Agregar Respuesta 2 (para id: 2):**
   - Click en "Add response" (en la misma ruta)
   - Regla: `{{params 'id'}} equals '2'`
   - Body: Objeto con id: 2

4. **Repetir para id: 3, 4, 5, 6**

**Resultado:** 
- Cuando tu frontend llame a `http://localhost:3001/api/services/1` → Retorna servicio id: 1
- Cuando llame a `http://localhost:3001/api/services/2` → Retorna servicio id: 2
- etc.

---

## ✅ Verificación

### Probar desde el navegador:

1. **Lista completa:**
   ```
   http://localhost:3001/api/services
   ```
   Debe retornar: Array con 6 servicios

2. **Servicio por ID:**
   ```
   http://localhost:3001/api/services/1
   http://localhost:3001/api/services/2
   http://localhost:3001/api/services/3
   ```
   Cada uno debe retornar el servicio correspondiente

### Probar desde tu aplicación React:

1. Iniciar Mockoon (puerto 3001)
2. Iniciar React: `npm start`
3. Navegar a `/dashboard/services` → Debe mostrar lista de servicios
4. Hacer click en un servicio → Debe mostrar detalles del servicio

---

## 🔄 Lo Mismo para Planes

**Rutas necesarias:**
- `GET /api/plans` → Usa `plans-all.json` (lista completa)
- `GET /api/plans/:id` → Usa archivos individuales con reglas (igual que servicios)

**Componentes que usan planes:**
- `src/pages/dashboard/PlanList.js` → `GET /api/plans`
- `src/pages/dashboard/PlanDetail.js` → `GET /api/plans/:id`
- `src/components/sections/Planes.js` → `GET /api/plans`

---

## 💡 Resumen

| Ruta | Archivo JSON | Tipo de Respuesta |
|------|--------------|-------------------|
| `GET /api/services` | `services-all.json` | Array `[ ... ]` |
| `GET /api/services/:id` | Archivos individuales con reglas | Objeto `{ ... }` |
| `GET /api/plans` | `plans-all.json` | Array `[ ... ]` |
| `GET /api/plans/:id` | Archivos individuales con reglas | Objeto `{ ... }` |

---

## 🎉 ¡Listo!

Una vez configurado Mockoon así, tu frontend funcionará perfectamente:
- ✅ Lista de servicios se carga correctamente
- ✅ Detalles de servicio se cargan por ID
- ✅ Lista de planes se carga correctamente
- ✅ Detalles de plan se cargan por ID

