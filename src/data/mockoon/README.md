# 📁 Archivos JSON para Mockoon

Esta carpeta contiene los archivos JSON listos para copiar y pegar en Mockoon.

## 📋 Archivos Disponibles

### Para Servicios:
- **`services-all.json`** → Lista completa de 6 servicios (para `/api/services`)
- **`service-1.json` hasta `service-6.json`** → Servicios individuales (para `/api/services/:id`)

### Para Planes:
- **`plans-all.json`** → Lista completa de 5 planes (para `/api/plans`)
- **`plan-1.json` hasta `plan-5.json`** → Planes individuales (para `/api/plans/:id`)

---

## 🚀 Cómo Usar en Mockoon

### Para la ruta `/api/services` (Lista completa):

1. **Crear la ruta en Mockoon:**
   - Method: `GET`
   - Endpoint: `/api/services`
   - Status: `200`

2. **Configurar Headers:**
   - `Content-Type: application/json`

3. **En el Body:**
   - Seleccionar tipo: **"JSON"**
   - **Abrir el archivo** `services-all.json`
   - **Copiar TODO el contenido** (incluyendo los corchetes `[ ]` del inicio y final)
   - **Pegar en el Body de Mockoon**

**Resultado:** Cuando consultes `http://localhost:3001/api/services`, retornará un array con los 6 servicios.

---

### Para la ruta `/api/plans` (Lista completa):

1. **Crear la ruta en Mockoon:**
   - Method: `GET`
   - Endpoint: `/api/plans`
   - Status: `200`

2. **Configurar Headers:**
   - `Content-Type: application/json`

3. **En el Body:**
   - Seleccionar tipo: **"JSON"**
   - **Abrir el archivo** `plans-all.json`
   - **Copiar TODO el contenido** (incluyendo los corchetes `[ ]`)
   - **Pegar en el Body de Mockoon**

**Resultado:** Cuando consultes `http://localhost:3001/api/plans`, retornará un array con los 5 planes.

---

## ⚠️ Importante

- **Para listas** (`/api/services`, `/api/plans`): Usa los archivos `*-all.json` → **Con corchetes `[ ]`**
- **Para individuales** (`/api/services/:id`, `/api/plans/:id`): Usa los archivos `*-1.json`, `*-2.json`, etc. → **Sin corchetes, solo el objeto `{ }`**

---

## 📝 Ejemplo Visual

### `/api/services` → Usa `services-all.json`:
```json
[
  { "id": 1, "nombre": "Estudio energético", ... },
  { "id": 2, "nombre": "Instalación certificada", ... },
  ...
]
```

### `/api/services/1` → Usa `service-1.json`:
```json
{
  "id": 1,
  "nombre": "Estudio energético",
  ...
}
```

---

## ✅ Verificación

Después de configurar, prueba en el navegador:
- `http://localhost:3001/api/services` → Debe retornar array con 6 servicios
- `http://localhost:3001/api/plans` → Debe retornar array con 5 planes

