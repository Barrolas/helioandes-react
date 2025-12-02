/**
 * Mapeador de iconos de FontAwesome
 * 
 * Convierte nombres de iconos (strings) a objetos de iconos de FontAwesome
 */

import {
  faBolt,
  faWrench,
  faChartLine,
  faBriefcase,
  faLightbulb,
  faTools,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Mapa de nombres de iconos a objetos de FontAwesome
 */
const iconMap = {
  bolt: faBolt,
  wrench: faWrench,
  'chart-line': faChartLine,
  briefcase: faBriefcase,
  lightbulb: faLightbulb,
  tools: faTools,
};

/**
 * Obtiene el icono de FontAwesome por nombre
 * @param {string} iconName - Nombre del icono
 * @returns {Object|null} Objeto del icono o null si no se encuentra
 */
export const getIconByName = (iconName) => {
  if (!iconName) return null;
  return iconMap[iconName] || null;
};

export default getIconByName;

