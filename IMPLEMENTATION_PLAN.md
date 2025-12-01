# Plan de Implementación: Dashboard AdminLTE para HelioAndes

Este documento detalla los pasos para implementar un dashboard administrativo para gestionar servicios y planes en la aplicación HelioAndes.

## 1. Configuración Inicial
- [ ] Instalar `react-router-dom` para el manejo de rutas.
- [ ] Reestructurar `App.js` para soportar navegación entre la Landing Page y el Dashboard.
- [ ] Mover el contenido actual de `App.js` a un nuevo componente `src/pages/LandingPage.js`.

## 2. Estructura del Dashboard (AdminLTE Style)
- [ ] Crear `src/layouts/DashboardLayout.js`:
    - Sidebar con navegación (Servicios, Planes).
    - Navbar superior.
    - Contenedor principal para el contenido dinámico.
- [ ] Utilizar Bootstrap (ya instalado) para los estilos base.

## 3. Gestión de Datos (Mock)
- [ ] Crear `src/data/mockData.js` con datos de prueba para:
    - Servicios (id, nombre, descripción, precio, estado, etc.).
    - Planes (id, nombre, características, precio mensual/anual, etc.).

## 4. Módulo de Servicios
- [ ] Crear `src/pages/dashboard/ServiceList.js`:
    - Tabla listando los servicios.
    - Botón para ver detalles.
- [ ] Crear `src/pages/dashboard/ServiceDetail.js`:
    - Vista detallada de un servicio seleccionado.
    - Botón para volver a la lista.

## 5. Módulo de Planes
- [ ] Crear `src/pages/dashboard/PlanList.js`:
    - Tabla listando los planes.
    - Botón para ver detalles.
- [ ] Crear `src/pages/dashboard/PlanDetail.js`:
    - Vista detallada de un plan seleccionado.
    - Botón para volver a la lista.

## 6. Integración y Rutas
- [ ] Definir las rutas en `App.js`:
    - `/` -> Landing Page
    - `/dashboard` -> Dashboard Home (Resumen o redirección a Servicios)
    - `/dashboard/services` -> Lista de Servicios
    - `/dashboard/services/:id` -> Detalle de Servicio
    - `/dashboard/plans` -> Lista de Planes
    - `/dashboard/plans/:id` -> Detalle de Plan
