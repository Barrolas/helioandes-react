# Plan de Implementación: Dashboard AdminLTE para HelioAndes

Este documento detalla los pasos para implementar un dashboard administrativo para gestionar servicios y planes en la aplicación HelioAndes.

## 1. Configuración Inicial - Nicole
- [ x] Instalar `react-router-dom` para el manejo de rutas.
- [x] Reestructurar `App.js` para soportar navegación entre la Landing Page y el Dashboard.
- [x ] Mover el contenido actual de `App.js` a un nuevo componente `src/pages/LandingPage.js`.

## 2. Estructura del Dashboard (AdminLTE Style) - Nicole
- [ ] Crear `src/layouts/DashboardLayout.js`:
    - Sidebar con navegación (Servicios, Planes).
    - Navbar superior.
    - Contenedor principal para el contenido dinámico.
- [ ] Utilizar Bootstrap (ya instalado) para los estilos base.

## 3. Gestión de Datos (Mockoon) - Nicolas
- [ ] Crear `mockData` con datos de prueba (json) para:
    - Servicios (id, nombre, descripción, precio, estado, etc.).
    - Planes (id, nombre, características, precio mensual/anual, etc.).

## 4. Módulo de Servicios - Mati
- [ ] Crear `src/pages/dashboard/ServiceList.js`:
    - Cards listando los servicios.
    - Botón para ver detalles.
- [ ] Crear `src/pages/dashboard/ServiceDetail.js`:
    - Vista detallada de un servicio seleccionado (modal).
    - Botón para volver a la lista.

## 5. Módulo de Planes - mati
- [ ] Crear `src/pages/dashboard/PlanList.js`:
    - Cards listando los planes.
    - Botón para ver detalles.
- [ ] Crear `src/pages/dashboard/PlanDetail.js`:
    - Vista detallada de un plan seleccionado con modal.
    - Botón para volver a la lista.

## 6. Integración y Rutas 
- [ ] Definir las rutas en `App.js`:
    - `/` -> Landing Page
    - `/dashboard` -> Dashboard Home (Resumen o redirección a Servicios)
    - `/dashboard/services` -> Lista de Servicios
    - `/dashboard/services/:id` -> Detalle de Servicio
    - `/dashboard/plans` -> Lista de Planes
    - `/dashboard/plans/:id` -> Detalle de Plan

## 7. Servicios API y Consumo de Datos - Nicolas
- [ ] Crear `src/services/api.js` o `src/utils/api.js`:
    - Funciones para obtener servicios desde la API (GET `/api/services`)
    - Funciones para obtener planes desde la API (GET `/api/plans`)
    - Manejo de errores y estados de carga
- [ ] Configurar la URL base de la API (Mockoon o backend real)

## 8. Integración Landing Page con Datos Administrados - Nicolas
- [ ] Actualizar `src/components/sections/Servicios.js`:
    - Reemplazar datos hardcodeados por llamada a API
    - Usar `useState` y `useEffect` para cargar datos
    - Mostrar estado de carga mientras se obtienen los datos
    - Manejar errores de forma elegante
- [ ] Actualizar `src/components/sections/Planes.js`:
    - Reemplazar datos hardcodeados por llamada a API
    - Usar `useState` y `useEffect` para cargar datos
    - Mostrar estado de carga mientras se obtienen los datos
    - Manejar errores de forma elegante