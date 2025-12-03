import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PlanList = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/api/plans')
            .then(response => {
                setPlans(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener los planes:', error);
                setError('Error al cargar los planes');
                setLoading(false);
            });
    }, []);

    const handleViewDetails = (planId) => {
        navigate(`/dashboard/plans/${planId}`);
    };

    const formatPrice = (price) => {
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
                    <p>Cargando planes...</p>
                </div>
            );
        }

        if (error) {
            return (
                <div className="dashboard-error">
                    <h4>Error al cargar planes</h4>
                    <p>{error}</p>
                </div>
            );
        }

        if (plans.length === 0) {
            return (
                <div className="dashboard-error dashboard-error-info">
                    <h4>No hay planes disponibles</h4>
                    <p>No se encontraron planes en el sistema.</p>
                </div>
            );
        }

        return (
            <div className="dashboard-cards-grid">
                {plans.map((plan) => (
                    <div key={plan.id} className="dashboard-card">
                        <div className="dashboard-card-header">
                            <h3 className="dashboard-card-title">{plan.nombre}</h3>
                            <p className="dashboard-text-muted-md dashboard-margin-0">
                                {plan.potencia}
                            </p>
                        </div>
                        <div className="dashboard-card-body">
                            <p className="dashboard-card-description">{plan.descripcion}</p>
                            <div className="dashboard-mt-1">
                                <h4 className="dashboard-text-primary-h4">
                                    {formatPrice(plan.precioContado)}
                                </h4>
                                {plan.caracteristicas && plan.caracteristicas.length > 0 && (
                                    <ul className="dashboard-list-unstyled">
                                        {plan.caracteristicas.slice(0, 4).map((caracteristica, index) => (
                                            <li key={index} className={index < 3 ? 'dashboard-list-item' : 'dashboard-list-item-feature'}>
                                                <span className="dashboard-text-primary">✓</span>
                                                {caracteristica}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="dashboard-card-footer">
                            <span className={`dashboard-badge ${plan.estado === 'activo' ? 'dashboard-badge-success' : 'dashboard-badge-secondary'}`}>
                                {plan.estado}
                            </span>
                            <button
                                className="dashboard-btn"
                                onClick={() => handleViewDetails(plan.id)}
                            >
                                Ver Detalles
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="dashboard-page-header">
                <h1 className="dashboard-page-title">Gestión de Planes</h1>
                <p className="dashboard-page-subtitle">Administra los planes de energía solar disponibles</p>
            </div>

            {renderContent()}
        </>
    );
};

export default PlanList;
