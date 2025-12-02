/**
 * Configuración de la API
 * 
 * Define la URL base de la API según el entorno.
 * En desarrollo, puede apuntar a Mockoon (puerto 3001 por defecto)
 * o a un backend real.
 */

// URL base de la API
// En desarrollo: puede ser Mockoon (http://localhost:3001) o backend real
// En producción: URL del backend en producción
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

// Timeout para las peticiones (en milisegundos)
const API_TIMEOUT = 10000; // 10 segundos

// Configuración por defecto para fetch
const DEFAULT_FETCH_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: API_TIMEOUT,
};

export const API_CONFIG = {
  BASE_URL: API_BASE_URL,
  TIMEOUT: API_TIMEOUT,
  DEFAULT_OPTIONS: DEFAULT_FETCH_OPTIONS,
};

// Endpoints
export const API_ENDPOINTS = {
  SERVICES: '/api/services',
  SERVICES_BY_ID: (id) => `/api/services/${id}`,
  PLANS: '/api/plans',
  PLANS_BY_ID: (id) => `/api/plans/${id}`,
};

export default API_CONFIG;

