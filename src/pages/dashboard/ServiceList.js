import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { getIconByName } from '../../utils/iconMapper';

const ServiceList = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/api/services')
            .then(response => {
                setServices(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener los servicios:', error);
                setError('Error al cargar los servicios');
                setLoading(false);
            });
    }, []);

    const handleViewDetails = (serviceId) => {
        navigate(`/dashboard/services/${serviceId}`);
    };

    const formatPrice = (price) => {
        if (price === 0) return 'Incluido';
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP'
        }).format(price);
    };

    const renderContent = () => {
        if (loading) {
            return (
                <div className="dashboard-loading">
                    <div className="dashboard-spinner"></div>
                    <p>Cargando servicios...</p>
                </div>
            );
        }

        if (error) {
            return (
                <div className="dashboard-error">
                    <h4>Error al cargar servicios</h4>
                    <p>{error}</p>
                </div>
            );
        }

        if (services.length === 0) {
            return (
                <div className="dashboard-error" style={{ backgroundColor: '#d1ecf1', borderColor: '#17a2b8', color: '#0c5460' }}>
                    <h4 style={{ color: '#0c5460' }}>No hay servicios disponibles</h4>
                    <p>No se encontraron servicios en el sistema.</p>
                </div>
            );
        }

        return (
            <div className="dashboard-cards-grid">
                {services.map((service) => {
                    const icon = getIconByName(service.iconName);
                    return (
                        <div key={service.id} className="dashboard-card">
                            <div className="dashboard-card-header">
                                {icon && (
                                    <div style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '1rem',
                                        marginBottom: '0.5rem'
                                    }}>
                                        <FontAwesomeIcon 
                                            icon={icon} 
                                            size="2x" 
                                            style={{ color: service.iconColor || 'var(--helio-primary)' }} 
                                        />
                                        <h3 className="dashboard-card-title">{service.nombre}</h3>
                                    </div>
                                )}
                                {!icon && <h3 className="dashboard-card-title">{service.nombre}</h3>}
                            </div>
                            <div className="dashboard-card-body">
                                <p className="dashboard-card-description">{service.descripcion}</p>
                                <div style={{ marginTop: '1rem' }}>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        <li style={{ 
                                            padding: '0.5rem 0',
                                            borderBottom: '1px solid var(--helio-bg-light)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.9rem',
                                            color: 'var(--helio-text-medium)'
                                        }}>
                                            <span style={{ color: 'var(--helio-primary)' }}>$</span>
                                            <strong>Precio:</strong> {formatPrice(service.precio)}
                                        </li>
                                        <li style={{ 
                                            padding: '0.5rem 0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.9rem',
                                            color: 'var(--helio-text-medium)'
                                        }}>
                                            <span style={{ color: 'var(--helio-primary)' }}>⏱</span>
                                            <strong>Duración:</strong> {service.duracion}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="dashboard-card-footer">
                                <span className={`dashboard-badge ${service.estado === 'activo' ? 'dashboard-badge-success' : 'dashboard-badge-secondary'}`}>
                                    {service.estado}
                                </span>
                                <button
                                    className="dashboard-btn"
                                    onClick={() => handleViewDetails(service.id)}
                                >
                                    Ver Detalles
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <>
            <div className="dashboard-page-header">
                <h1 className="dashboard-page-title">Gestión de Servicios</h1>
                <p className="dashboard-page-subtitle">Administra los servicios disponibles en el sistema</p>
            </div>

            {renderContent()}
        </>
    );
};

export default ServiceList;
