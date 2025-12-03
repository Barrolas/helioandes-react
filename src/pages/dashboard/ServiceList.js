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
                <div className="dashboard-error dashboard-error-info">
                    <h4>No hay servicios disponibles</h4>
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
                                    <div className="dashboard-icon-container">
                                        <FontAwesomeIcon 
                                            icon={icon} 
                                            size="2x" 
                                            className="dashboard-icon-primary"
                                            style={{ color: service.iconColor || undefined }} 
                                        />
                                        <h3 className="dashboard-card-title">{service.nombre}</h3>
                                    </div>
                                )}
                                {!icon && <h3 className="dashboard-card-title">{service.nombre}</h3>}
                            </div>
                            <div className="dashboard-card-body">
                                <p className="dashboard-card-description">{service.descripcion}</p>
                                <div className="dashboard-mt-1">
                                    <ul className="dashboard-list-unstyled">
                                        <li className="dashboard-list-item">
                                            <span className="dashboard-text-primary">$</span>
                                            <strong>Precio:</strong> {formatPrice(service.precio)}
                                        </li>
                                        <li className="dashboard-list-item-feature">
                                            <span className="dashboard-text-primary">⏱</span>
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
