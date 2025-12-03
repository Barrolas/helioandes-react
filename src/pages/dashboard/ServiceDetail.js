import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faClock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { getIconByName } from '../../utils/iconMapper';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/api/services/${id}`)
                .then(response => {
                    setService(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error al obtener el servicio:', error);
                    setError('Error al cargar el servicio');
                    setLoading(false);
                });
        }
    }, [id]);

    const formatPrice = (price) => {
        if (price === 0) return 'Incluido';
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP'
        }).format(price);
    };

    if (loading) {
        return (
            <div className="dashboard-loading">
                <div className="dashboard-spinner"></div>
                <p>Cargando detalles del servicio...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="dashboard-error">
                <h4>Error</h4>
                <p>{error}</p>
                <button className="dashboard-btn" onClick={() => navigate('/dashboard/services')}>
                    Volver a la lista
                </button>
            </div>
        );
    }

    if (!service) {
        return (
            <div className="dashboard-error dashboard-error-warning">
                <h4>Servicio no encontrado</h4>
                <p>El servicio solicitado no existe.</p>
                <button className="dashboard-btn" onClick={() => navigate('/dashboard/services')}>
                    Volver a la lista
                </button>
            </div>
        );
    }

    const icon = getIconByName(service.iconName);

    return (
        <div className="dashboard-detail-card">
            <div className="dashboard-detail-header">
                {icon && (
                    <div className="dashboard-detail-icon">
                        <FontAwesomeIcon 
                            icon={icon} 
                            className="dashboard-icon-primary"
                        />
                    </div>
                )}
                <div className="dashboard-detail-info">
                    <h2 className="dashboard-detail-title">{service.nombre}</h2>
                    <div className="dashboard-detail-meta">
                        <div className="dashboard-detail-meta-item">
                            <span className="dashboard-detail-meta-label">Estado</span>
                            <span className={`dashboard-badge ${service.estado === 'activo' ? 'dashboard-badge-success' : 'dashboard-badge-secondary'}`}>
                                {service.estado}
                            </span>
                        </div>
                        <div className="dashboard-detail-meta-item">
                            <span className="dashboard-detail-meta-label">Categoría</span>
                            <span className="dashboard-badge dashboard-badge-success">
                                {service.categoria}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dashboard-detail-section">
                <h3 className="dashboard-detail-section-title">Descripción</h3>
                <p className="dashboard-text-muted-lg">
                    {service.descripcion}
                </p>
            </div>

            <div className="dashboard-detail-section">
                <h3 className="dashboard-detail-section-title">Información del Servicio</h3>
                <ul className="dashboard-detail-list">
                    <li className="dashboard-detail-list-item">
                        <FontAwesomeIcon icon={faDollarSign} />
                        <div>
                            <strong>Precio:</strong> {formatPrice(service.precio)}
                        </div>
                    </li>
                    <li className="dashboard-detail-list-item">
                        <FontAwesomeIcon icon={faClock} />
                        <div>
                            <strong>Duración:</strong> {service.duracion}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ServiceDetail;
