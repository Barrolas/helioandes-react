# Servicios API - HelioAndes

Este directorio contiene los servicios para interactuar con la API de HelioAndes.

## Archivos

- `api.js`: Funciones principales para consumir la API
- `../config/api.js`: Configuración de la API (URL base, endpoints, etc.)

## Configuración

### Variables de Entorno

Puedes configurar la URL base de la API usando una variable de entorno:

```bash
# En desarrollo (Mockoon)
REACT_APP_API_BASE_URL=http://localhost:3001

# En producción
REACT_APP_API_BASE_URL=https://api.helioandes.com
```

Si no se define `REACT_APP_API_BASE_URL`, por defecto usará `http://localhost:3001` (Mockoon).

### Configuración en Mockoon

Para usar con Mockoon, asegúrate de:

1. Tener Mockoon corriendo en el puerto 3001 (o cambiar la URL en la configuración)
2. Crear las siguientes rutas en Mockoon:
   - `GET /api/services` → Retorna array de servicios
   - `GET /api/services/:id` → Retorna un servicio específico
   - `GET /api/plans` → Retorna array de planes
   - `GET /api/plans/:id` → Retorna un plan específico

3. Importar los archivos JSON desde `src/data/`:
   - `mockServices.json` para las rutas de servicios
   - `mockPlans.json` para las rutas de planes

## Uso

### Importar funciones

```javascript
import { getServices, getPlans, getServiceById } from './services/api';
```

### Ejemplo básico

```javascript
import { getServices } from './services/api';

// Obtener todos los servicios
try {
  const services = await getServices();
  console.log(services);
} catch (error) {
  console.error('Error al obtener servicios:', error.message);
}
```

### Ejemplo con React (useState/useEffect)

```javascript
import { useState, useEffect } from 'react';
import { getServices } from './services/api';

function MyComponent() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const data = await getServices();
        setServices(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {services.map(service => (
        <div key={service.id}>{service.nombre}</div>
      ))}
    </div>
  );
}
```

## Funciones Disponibles

### Servicios

- `getServices()`: Obtiene todos los servicios
- `getServiceById(id)`: Obtiene un servicio por ID
- `getActiveServices()`: Obtiene solo servicios activos

### Planes

- `getPlans()`: Obtiene todos los planes
- `getPlanById(id)`: Obtiene un plan por ID
- `getActivePlans()`: Obtiene solo planes activos

## Manejo de Errores

Todas las funciones lanzan errores que deben ser capturados con `try/catch`. Los errores incluyen:

- **Timeout**: La petición tardó demasiado (10 segundos por defecto)
- **Network**: No se pudo conectar con el servidor
- **HTTP Errors**: Errores 4xx, 5xx del servidor
- **Unknown**: Errores inesperados

## Timeout

El timeout por defecto es de 10 segundos. Puedes cambiarlo en `src/config/api.js`.

