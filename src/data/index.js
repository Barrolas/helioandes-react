/**
 * Mock Data para HelioAndes
 * 
 * Este archivo exporta los datos mock para servicios y planes.
 * Estos datos pueden ser usados tanto para desarrollo local como para Mockoon.
 */

import servicesData from './mockServices.json';
import plansData from './mockPlans.json';

/**
 * Obtiene todos los servicios
 * @returns {Array} Array de servicios
 */
export const getServices = () => {
  return servicesData;
};

/**
 * Obtiene un servicio por ID
 * @param {number} id - ID del servicio
 * @returns {Object|null} Servicio encontrado o null
 */
export const getServiceById = (id) => {
  return servicesData.find(service => service.id === id) || null;
};

/**
 * Obtiene servicios activos
 * @returns {Array} Array de servicios activos
 */
export const getActiveServices = () => {
  return servicesData.filter(service => service.estado === 'activo');
};

/**
 * Obtiene todos los planes
 * @returns {Array} Array de planes
 */
export const getPlans = () => {
  return plansData;
};

/**
 * Obtiene un plan por ID
 * @param {number} id - ID del plan
 * @returns {Object|null} Plan encontrado o null
 */
export const getPlanById = (id) => {
  return plansData.find(plan => plan.id === id) || null;
};

/**
 * Obtiene planes activos
 * @returns {Array} Array de planes activos
 */
export const getActivePlans = () => {
  return plansData.filter(plan => plan.estado === 'activo');
};

// Exportar los datos directamente también
export { servicesData, plansData };

export default {
  getServices,
  getServiceById,
  getActiveServices,
  getPlans,
  getPlanById,
  getActivePlans,
  servicesData,
  plansData
};

