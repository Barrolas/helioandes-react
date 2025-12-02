import React, { useState, useEffect } from 'react';
import Section from '../ui/Section';
import { BasicCardGrid } from '../ui';
import axios from 'axios';
import { mapServicesWithIcons } from '../../utils/iconMapper';
import { Spinner, Alert } from 'react-bootstrap';

const Servicios = () => {
    const [serviciosData, setServiciosData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/api/services')
            .then(response => {
                // Filtrar solo servicios activos
                const activeServices = response.data.filter(service => service.estado === 'activo');
                // Mapear servicios con iconos de FontAwesome
                const servicesWithIcons = mapServicesWithIcons(activeServices);
                // Transformar datos para que coincidan con la estructura esperada por BasicCardGrid
                const formattedServices = servicesWithIcons.map(service => ({
                    icon: service.icon,
                    title: service.nombre,
                    description: service.descripcion,
                    iconColor: service.iconColor,
                    iconTransform: service.iconTransform || null,
                }));
                setServiciosData(formattedServices);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener los servicios:', error);
                if (error.response) {
                    // El servidor respondió con un código de error
                    setError(`Error ${error.response.status}: No se pudo conectar con el servidor. Verifica que Mockoon esté corriendo en el puerto 3001.`);
                } else if (error.request) {
                    // La petición se hizo pero no hubo respuesta
                    setError('No se pudo conectar con el servidor. Verifica que Mockoon esté corriendo en http://localhost:3001');
                } else {
                    // Algo más causó el error
                    setError('Error al cargar los servicios. Por favor, intenta nuevamente.');
                }
                setLoading(false);
            });
    }, []);

    return (
        <Section 
            id="servicios"
            title="Servicios" 
            description="Estudio energético, instalación certificada, monitoreo y mantención"
            bgColor="var(--helio-bg-light)"
        >
            {loading && (
                <div className="text-center py-5">
                    <Spinner animation="border" role="status" style={{ color: 'var(--helio-primary)' }}>
                        <span className="visually-hidden">Cargando servicios...</span>
                    </Spinner>
                    <p className="mt-3 text-muted">Cargando servicios...</p>
                </div>
            )}
            
            {error && (
                <Alert variant="warning" className="mb-4">
                    <Alert.Heading>Error al cargar servicios</Alert.Heading>
                    <p>{error}</p>
                    <p className="mb-0">
                        <small>Por favor, verifica tu conexión o intenta nuevamente más tarde.</small>
                    </p>
                </Alert>
            )}

            {!loading && !error && serviciosData.length > 0 && (
                <BasicCardGrid 
                    cards={serviciosData} 
                    gridConfig={{ lg: 6, xl: 3 }} 
                />
            )}

            {!loading && !error && serviciosData.length === 0 && (
                <Alert variant="info" className="mb-4">
                    <p className="mb-0">No hay servicios disponibles en este momento.</p>
                </Alert>
            )}
        </Section>
    );
};

export default Servicios;
