import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <>
            <div className="dashboard-page-header">
                <h1 className="dashboard-page-title">Panel de Control</h1>
                <p className="dashboard-page-subtitle">Bienvenido al panel de administración de HelioAndes</p>
            </div>

            <div className="dashboard-cards-grid">
                <div className="dashboard-card">
                    <div className="dashboard-card-header">
                        <h3 className="dashboard-card-title">Gestión de Servicios</h3>
                    </div>
                    <div className="dashboard-card-body">
                        <p className="dashboard-card-description">
                            Administra los servicios disponibles en el sistema. Visualiza, edita y gestiona todos los servicios ofrecidos.
                        </p>
                    </div>
                    <div className="dashboard-card-footer">
                        <Link to="/dashboard/services" className="dashboard-btn">
                            Ver Servicios
                        </Link>
                    </div>
                </div>

                <div className="dashboard-card">
                    <div className="dashboard-card-header">
                        <h3 className="dashboard-card-title">Gestión de Planes</h3>
                    </div>
                    <div className="dashboard-card-body">
                        <p className="dashboard-card-description">
                            Administra los planes de energía solar disponibles. Gestiona características, precios y disponibilidad.
                        </p>
                    </div>
                    <div className="dashboard-card-footer">
                        <Link to="/dashboard/plans" className="dashboard-btn">
                            Ver Planes
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardHome;
