import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PlanDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/api/plans/${id}`)
                .then(response => {
                    setPlan(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error al obtener el plan:', error);
                    setError('Error al cargar el plan');
                    setLoading(false);
                });
        }
    }, [id]);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP'
        }).format(price);
    };

    if (loading) {
        return (
            <div className="dashboard-loading">
                <div className="dashboard-spinner"></div>
                <p>Cargando detalles del plan...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="dashboard-error">
                <h4>Error</h4>
                <p>{error}</p>
                <button className="dashboard-btn" onClick={() => navigate('/dashboard/plans')}>
                    Volver a la lista
                </button>
            </div>
        );
    }

    if (!plan) {
        return (
            <div className="dashboard-error dashboard-error-warning">
                <h4>Plan no encontrado</h4>
                <p>El plan solicitado no existe.</p>
                <button className="dashboard-btn" onClick={() => navigate('/dashboard/plans')}>
                    Volver a la lista
                </button>
            </div>
        );
    }

    return (
        <div className="dashboard-detail-card">
            <div className="dashboard-detail-header">
                <div className="dashboard-detail-info">
                    <div className="dashboard-badge-container">
                        <span className="dashboard-badge dashboard-badge-success dashboard-badge-lg">
                            {plan.badge || plan.nombre}
                        </span>
                        <span className={`dashboard-badge ${plan.estado === 'activo' ? 'dashboard-badge-success' : 'dashboard-badge-secondary'}`}>
                            {plan.estado}
                        </span>
                    </div>
                    <h2 className="dashboard-detail-title">{plan.nombre}</h2>
                    <p className="dashboard-text-muted-xl">
                        {plan.potencia}
                    </p>
                </div>
            </div>

            <div className="dashboard-detail-section">
                <h3 className="dashboard-detail-section-title">Descripción</h3>
                <p className="dashboard-text-muted-lg">
                    {plan.descripcion}
                </p>
            </div>

            <div className="dashboard-detail-section">
                <h3 className="dashboard-detail-section-title">Precio</h3>
                <h2 className="dashboard-text-primary-lg">
                    {formatPrice(plan.precioContado)}
                </h2>
            </div>

            {plan.caracteristicas && plan.caracteristicas.length > 0 && (
                <div className="dashboard-detail-section">
                    <h3 className="dashboard-detail-section-title">Características Principales</h3>
                    <ul className="dashboard-detail-list">
                        {plan.caracteristicas.map((caracteristica, index) => (
                            <li key={index} className="dashboard-detail-list-item">
                                <span className="dashboard-text-primary">✓</span>
                                <div>{caracteristica}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {plan.incluye && plan.incluye.length > 0 && (
                <div className="dashboard-detail-section">
                    <h3 className="dashboard-detail-section-title dashboard-section-title-primary">
                        ✓ Incluye
                    </h3>
                    <ul className="dashboard-detail-list">
                        {plan.incluye.map((item, index) => (
                            <li key={index} className="dashboard-detail-list-item">
                                <span className="dashboard-text-primary">✓</span>
                                <div>{item}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {plan.noIncluye && plan.noIncluye.length > 0 && (
                <div className="dashboard-detail-section">
                    <h3 className="dashboard-detail-section-title dashboard-section-title-warning">
                        ✗ No Incluye
                    </h3>
                    <ul className="dashboard-detail-list">
                        {plan.noIncluye.map((item, index) => (
                            <li key={index} className="dashboard-detail-list-item">
                                <span className="dashboard-icon-warning">✗</span>
                                <div>{item}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PlanDetail;
