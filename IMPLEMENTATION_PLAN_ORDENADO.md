# Plan de Implementación Ordenado - Dashboard AdminLTE

Este documento define el orden específico de implementación para integrar todas las funcionalidades en `master`.

## 📊 Estado Actual

### ✅ Completado (en ramas separadas)
- **Sección 1**: Configuración Inicial (Nicole) - ✅ En master
- **Sección 3**: Mock Data (Nicolas) - ✅ En `feature/mock-data`
- **Sección 7**: Servicios API (Nicolas) - ✅ En `feature/api-services`
- **Sección 8**: Integración Landing Page (Nicolas) - ✅ En `feature/landing-page-api-integration`

### ⏳ Pendiente
- **Sección 2**: Dashboard Layout (Nicole)
- **Sección 4**: Módulo Servicios Dashboard (Mati)
- **Sección 5**: Módulo Planes Dashboard (Mati)
- **Sección 6**: Rutas Dashboard (Nicole)

---

## 🎯 Orden de Implementación en Master

### **FASE 1: Preparación y Base de Datos** ✅ (Ya completado en ramas)
- [x] Paso 1.1: Merge `feature/mock-data` → master
- [x] Paso 1.2: Merge `feature/api-services` → master
- [x] Paso 1.3: Merge `feature/landing-page-api-integration` → master

### **FASE 2: Instalación y Configuración AdminLTE** 🔄 (NUEVO - Requerido)
- [ ] **Paso 2.1**: Instalar AdminLTE
  ```bash
  npm install admin-lte
  ```
- [ ] **Paso 2.2**: Importar estilos de AdminLTE en `src/index.js`
- [ ] **Paso 2.3**: Verificar compatibilidad con Bootstrap existente

### **FASE 3: Layout del Dashboard** (Nicole)
- [ ] **Paso 3.1**: Crear estructura base `src/layouts/DashboardLayout.js`
  - Sidebar básico
  - Navbar superior
  - Contenedor principal
- [ ] **Paso 3.2**: Implementar navegación en Sidebar
  - Enlace a Servicios
  - Enlace a Planes
  - Enlace a Home/Dashboard
- [ ] **Paso 3.3**: Aplicar estilos AdminLTE al layout
  - Clases CSS de AdminLTE
  - Responsive design
  - Toggle sidebar en móvil

### **FASE 4: Rutas del Dashboard** (Nicole)
- [ ] **Paso 4.1**: Crear componente `src/pages/dashboard/DashboardHome.js`
  - Vista de resumen o redirección
- [ ] **Paso 4.2**: Actualizar `App.js` con todas las rutas
  - `/` → LandingPage
  - `/dashboard` → DashboardHome (envuelto en DashboardLayout)
  - `/dashboard/services` → ServiceList (envuelto en DashboardLayout)
  - `/dashboard/services/:id` → ServiceDetail (envuelto en DashboardLayout)
  - `/dashboard/plans` → PlanList (envuelto en DashboardLayout)
  - `/dashboard/plans/:id` → PlanDetail (envuelto en DashboardLayout)
- [ ] **Paso 4.3**: Probar navegación entre rutas

### **FASE 5: Módulo de Servicios Dashboard** (Mati)
- [ ] **Paso 5.1**: Crear `src/pages/dashboard/ServiceList.js`
  - Usar `getServices()` de la API
  - Mostrar cards con servicios
  - Botón "Ver detalles" en cada card
  - Estados de carga y error
- [ ] **Paso 5.2**: Crear `src/pages/dashboard/ServiceDetail.js`
  - Modal o página de detalle
  - Mostrar toda la información del servicio
  - Botón "Volver" o cerrar modal
  - Navegación con `useParams` y `useNavigate`

### **FASE 6: Módulo de Planes Dashboard** (Mati)
- [ ] **Paso 6.1**: Crear `src/pages/dashboard/PlanList.js`
  - Usar `getPlans()` de la API
  - Mostrar cards con planes
  - Botón "Ver detalles" en cada card
  - Estados de carga y error
- [ ] **Paso 6.2**: Crear `src/pages/dashboard/PlanDetail.js`
  - Modal o página de detalle
  - Mostrar toda la información del plan
  - Botón "Volver" o cerrar modal
  - Navegación con `useParams` y `useNavigate`

### **FASE 7: Integración y Pruebas Finales** (Todos)
- [ ] **Paso 7.1**: Probar flujo completo
  - Landing Page → Dashboard
  - Navegación dentro del dashboard
  - Visualización de servicios y planes
  - Detalles de servicios y planes
- [ ] **Paso 7.2**: Ajustes de estilo y UX
  - Consistencia visual
  - Responsive design
  - Manejo de errores
- [ ] **Paso 7.3**: Documentación final
  - Actualizar README si es necesario
  - Comentarios en código complejo

---

## 📋 Checklist de Dependencias

### Antes de FASE 3 (Dashboard Layout)
- ✅ Datos mock disponibles (`src/data/`)
- ✅ Servicios API disponibles (`src/services/api.js`)
- ⏳ AdminLTE instalado (FASE 2)

### Antes de FASE 4 (Rutas)
- ⏳ DashboardLayout creado (FASE 3)

### Antes de FASE 5 y 6 (Módulos Dashboard)
- ⏳ DashboardLayout creado (FASE 3)
- ⏳ Rutas configuradas (FASE 4)
- ✅ API disponible (FASE 1)

---

## 🔄 Estrategia de Merge

### Opción A: Merge directo a master (Recomendado para este caso)
1. Merge `feature/mock-data` → master
2. Merge `feature/api-services` → master
3. Merge `feature/landing-page-api-integration` → master
4. Continuar con FASE 2 en master

### Opción B: Crear rama de integración
1. Crear `feature/dashboard-integration` desde master
2. Merge todas las ramas de Nicolas
3. Implementar FASE 2-6
4. Merge final a master

---

## 📝 Notas Importantes

1. **AdminLTE**: Necesario instalar antes de crear el layout
2. **Orden crítico**: Layout → Rutas → Módulos
3. **Testing**: Probar cada fase antes de continuar
4. **Conflictos**: Resolver conflictos de merge antes de continuar

---

## 🎯 Siguiente Paso Inmediato

**Hacer merge de las ramas de Nicolas a master y luego instalar AdminLTE**

