# ✅ Verificación Rápida de Mockoon

## 🔍 Checklist de Problemas Comunes

### 1. ¿Mockoon está corriendo?

**Verificar:**
- Abre Mockoon
- Busca el entorno "HelioAndes API" o el que creaste
- Debe tener un botón **"Start"** activo (verde)
- El puerto debe mostrar `3001`

**Si no está corriendo:**
- Click en **"Start"** o **"Iniciar"**
- Debe cambiar a **"Stop"** y el puerto debe estar en verde

---

### 2. ¿Las rutas están configuradas?

**Rutas necesarias:**
- ✅ `GET /api/services` → Debe retornar array de servicios
- ✅ `GET /api/services/:id` → Debe retornar un servicio
- ✅ `GET /api/plans` → Debe retornar array de planes
- ✅ `GET /api/plans/:id` → Debe retornar un plan

**Verificar en Mockoon:**
1. Abre el entorno
2. Revisa que existan estas 4 rutas
3. Cada ruta debe tener:
   - Method: `GET`
   - Endpoint correcto (exactamente como se muestra arriba)
   - Status: `200`
   - Headers: `Content-Type: application/json`
   - Body: JSON con los datos

---

### 3. ¿El puerto es correcto?

**Verificar:**
- Mockoon debe estar en puerto `3001`
- Si cambiaste el puerto, actualiza las URLs en:
  - `src/components/sections/Servicios.js`
  - `src/components/sections/Planes.js`
  - `src/pages/dashboard/ServiceList.js`
  - `src/pages/dashboard/ServiceDetail.js`
  - `src/pages/dashboard/PlanList.js`
  - `src/pages/dashboard/PlanDetail.js`

---

### 4. ¿CORS está habilitado?

**Verificar:**
- En Mockoon, abre la configuración del entorno
- Busca "CORS" o "Cross-Origin"
- Debe estar **habilitado**

**O agregar headers manualmente en cada ruta:**
- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: GET, POST, PUT, DELETE`
- `Access-Control-Allow-Headers: Content-Type`

---

### 5. Probar endpoints directamente

**Abrir en el navegador:**
```
http://localhost:3001/api/services
http://localhost:3001/api/plans
```

**Debe mostrar:**
- JSON con los datos (no error 404)
- Si ves 404, Mockoon no está corriendo o la ruta no existe

---

## 🚨 Solución Rápida

### Si ves errores 404:

1. **Verifica que Mockoon esté corriendo:**
   - Abre Mockoon
   - Click en "Start" si no está activo

2. **Verifica las rutas:**
   - Abre cada ruta en Mockoon
   - Revisa que el endpoint sea exactamente:
     - `/api/services` (no `/api/service` ni `/services`)
     - `/api/plans` (no `/api/plan` ni `/plans`)

3. **Prueba en el navegador:**
   - Abre `http://localhost:3001/api/services`
   - Si no funciona, Mockoon no está corriendo o la ruta no existe

4. **Reinicia Mockoon:**
   - Click en "Stop"
   - Espera 2 segundos
   - Click en "Start" nuevamente

---

## 📝 Configuración Mínima Requerida

### Ruta 1: GET /api/services
- Method: `GET`
- Endpoint: `/api/services`
- Status: `200`
- Headers: `Content-Type: application/json`
- Body: Copiar contenido de `src/data/mockoon/services-all.json`

### Ruta 2: GET /api/plans
- Method: `GET`
- Endpoint: `/api/plans`
- Status: `200`
- Headers: `Content-Type: application/json`
- Body: Copiar contenido de `src/data/mockoon/plans-all.json`

---

## ✅ Verificación Final

1. Mockoon corriendo en puerto 3001 ✅
2. Rutas `/api/services` y `/api/plans` configuradas ✅
3. CORS habilitado ✅
4. Probar en navegador: `http://localhost:3001/api/services` ✅
5. React app corriendo: `npm start` ✅

Si todo está correcto, los errores 404 deberían desaparecer.

