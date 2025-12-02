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
            <div className="dashboard-error" style={{ backgroundColor: '#fff3cd', borderColor: '#ffc107', color: '#856404' }}>
                <h4 style={{ color: '#856404' }}>Plan no encontrado</h4>
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
                    <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '1rem',
                        marginBottom: '0.5rem'
                    }}>
                        <span className="dashboard-badge dashboard-badge-success" style={{ 
                            padding: '0.5rem 1rem',
                            fontSize: '1rem'
                        }}>
                            {plan.badge || plan.nombre}
                        </span>
                        <span className={`dashboard-badge ${plan.estado === 'activo' ? 'dashboard-badge-success' : 'dashboard-badge-secondary'}`}>
                            {plan.estado}
                        </span>
                    </div>
                    <h2 className="dashboard-detail-title">{plan.nombre}</h2>
                    <p style={{ color: 'var(--helio-text-medium)', fontSize: '1.1rem', marginTop: '0.5rem' }}>
                        {plan.potencia}
                    </p>
                </div>
            </div>

            <div className="dashboard-detail-section">
                <h3 className="dashboard-detail-section-title">Descripción</h3>
                <p style={{ color: 'var(--helio-text-medium)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                    {plan.descripcion}
                </p>
            </div>

            <div className="dashboard-detail-section">
                <h3 className="dashboard-detail-section-title">Precio</h3>
                <h2 style={{ color: 'var(--helio-primary)', marginTop: '0.5rem' }}>
                    {formatPrice(plan.precioContado)}
                </h2>
            </div>

            {plan.caracteristicas && plan.caracteristicas.length > 0 && (
                <div className="dashboard-detail-section">
                    <h3 className="dashboard-detail-section-title">Características Principales</h3>
                    <ul className="dashboard-detail-list">
                        {plan.caracteristicas.map((caracteristica, index) => (
                            <li key={index} className="dashboard-detail-list-item">
                                <span style={{ color: 'var(--helio-primary)' }}>✓</span>
                                <div>{caracteristica}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {plan.incluye && plan.incluye.length > 0 && (
                <div className="dashboard-detail-section">
                    <h3 className="dashboard-detail-section-title" style={{ color: 'var(--helio-primary)' }}>
                        ✓ Incluye
                    </h3>
                    <ul className="dashboard-detail-list">
                        {plan.incluye.map((item, index) => (
                            <li key={index} className="dashboard-detail-list-item">
                                <span style={{ color: 'var(--helio-primary)' }}>✓</span>
                                <div>{item}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {plan.noIncluye && plan.noIncluye.length > 0 && (
                <div className="dashboard-detail-section">
                    <h3 className="dashboard-detail-section-title" style={{ color: '#ffc107' }}>
                        ✗ No Incluye
                    </h3>
                    <ul className="dashboard-detail-list">
                        {plan.noIncluye.map((item, index) => (
                            <li key={index} className="dashboard-detail-list-item">
                                <span style={{ color: '#ffc107' }}>✗</span>
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
