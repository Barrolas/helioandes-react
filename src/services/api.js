/**
 * Servicio API para HelioAndes
 * 
 * Proporciona funciones para interactuar con la API de servicios y planes.
 * Incluye manejo de errores y estados de carga.
 */

import { API_CONFIG, API_ENDPOINTS } from '../config/api';

/**
 * Función helper para realizar peticiones HTTP con timeout
 * @param {string} url - URL completa de la petición
 * @param {Object} options - Opciones de fetch
 * @returns {Promise<Response>} Respuesta de la petición
 */
const fetchWithTimeout = (url, options = {}) => {
  const { timeout = API_CONFIG.TIMEOUT, ...fetchOptions } = options;

  return Promise.race([
    fetch(url, {
      ...API_CONFIG.DEFAULT_OPTIONS,
      ...fetchOptions,
    }),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timeout')), timeout)
    ),
  ]);
};

/**
 * Función helper para manejar respuestas de la API
 * @param {Response} response - Respuesta de fetch
 * @returns {Promise<Object>} Datos parseados o error
 */
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: `Error ${response.status}: ${response.statusText}`,
    }));
    throw new Error(errorData.message || `Error ${response.status}`);
  }

  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return await response.json();
  }
  return await response.text();
};

/**
 * Función helper para manejar errores de la API
 * @param {Error} error - Error capturado
 * @returns {Object} Objeto de error formateado
 */
const handleError = (error) => {
  console.error('API Error:', error);

  if (error.message === 'Request timeout') {
    return {
      message: 'La petición tardó demasiado. Por favor, intenta nuevamente.',
      type: 'timeout',
    };
  }

  if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
    return {
      message: 'No se pudo conectar con el servidor. Verifica tu conexión a internet.',
      type: 'network',
    };
  }

  return {
    message: error.message || 'Ocurrió un error inesperado',
    type: 'unknown',
  };
};

/**
 * Obtiene todos los servicios desde la API
 * @returns {Promise<Array>} Array de servicios
 * @throws {Error} Si la petición falla
 */
export const getServices = async () => {
  try {
    const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.SERVICES}`;
    const response = await fetchWithTimeout(url, {
      method: 'GET',
    });
    return await handleResponse(response);
  } catch (error) {
    const errorInfo = handleError(error);
    throw new Error(errorInfo.message);
  }
};

/**
 * Obtiene un servicio específico por ID desde la API
 * @param {number} id - ID del servicio
 * @returns {Promise<Object>} Servicio encontrado
 * @throws {Error} Si la petición falla o el servicio no existe
 */
export const getServiceById = async (id) => {
  try {
    if (!id) {
      throw new Error('ID de servicio es requerido');
    }

    const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.SERVICES_BY_ID(id)}`;
    const response = await fetchWithTimeout(url, {
      method: 'GET',
    });
    return await handleResponse(response);
  } catch (error) {
    const errorInfo = handleError(error);
    throw new Error(errorInfo.message);
  }
};

/**
 * Obtiene todos los planes desde la API
 * @returns {Promise<Array>} Array de planes
 * @throws {Error} Si la petición falla
 */
export const getPlans = async () => {
  try {
    const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.PLANS}`;
    const response = await fetchWithTimeout(url, {
      method: 'GET',
    });
    return await handleResponse(response);
  } catch (error) {
    const errorInfo = handleError(error);
    throw new Error(errorInfo.message);
  }
};

/**
 * Obtiene un plan específico por ID desde la API
 * @param {number} id - ID del plan
 * @returns {Promise<Object>} Plan encontrado
 * @throws {Error} Si la petición falla o el plan no existe
 */
export const getPlanById = async (id) => {
  try {
    if (!id) {
      throw new Error('ID de plan es requerido');
    }

    const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.PLANS_BY_ID(id)}`;
    const response = await fetchWithTimeout(url, {
      method: 'GET',
    });
    return await handleResponse(response);
  } catch (error) {
    const errorInfo = handleError(error);
    throw new Error(errorInfo.message);
  }
};

/**
 * Obtiene solo los servicios activos desde la API
 * @returns {Promise<Array>} Array de servicios activos
 * @throws {Error} Si la petición falla
 */
export const getActiveServices = async () => {
  try {
    const services = await getServices();
    return services.filter((service) => service.estado === 'activo');
  } catch (error) {
    throw error;
  }
};

/**
 * Obtiene solo los planes activos desde la API
 * @returns {Promise<Array>} Array de planes activos
 * @throws {Error} Si la petición falla
 */
export const getActivePlans = async () => {
  try {
    const plans = await getPlans();
    return plans.filter((plan) => plan.estado === 'activo');
  } catch (error) {
    throw error;
  }
};

// Exportar todas las funciones
export default {
  getServices,
  getServiceById,
  getActiveServices,
  getPlans,
  getPlanById,
  getActivePlans,
};

