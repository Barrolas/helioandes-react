import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faCopy, faHome } from '@fortawesome/free-solid-svg-icons';

const DashboardSidebar = ({ isOpen, onToggle, isMobile = false }) => {
    const location = useLocation();
    
    const logoPath = process.env.NODE_ENV === 'production' 
        ? './helioandes-logo.png'
        : `${process.env.PUBLIC_URL}/helioandes-logo.png`;

    const navItems = [
        {
            path: '/dashboard',
            label: 'Dashboard',
            icon: faHome
        },
        {
            path: '/dashboard/services',
            label: 'Servicios',
            icon: faTh
        },
        {
            path: '/dashboard/plans',
            label: 'Planes',
            icon: faCopy
        }
    ];

    const isActive = (path) => {
        if (path === '/dashboard') {
            return location.pathname === '/dashboard';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <>
            {/* Overlay para móvil */}
            {isOpen && isMobile && (
                <div 
                    className="dashboard-sidebar-overlay"
                    onClick={onToggle}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 999
                    }}
                />
            )}
            
            <aside className={`dashboard-sidebar ${!isOpen ? 'collapsed' : ''}`}>
                <div className="dashboard-sidebar-header">
                    <img src={logoPath} alt="HelioAndes Logo" />
                    <h4>HelioAndes Admin</h4>
                </div>
                
                <nav className="dashboard-sidebar-nav">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`dashboard-nav-item ${isActive(item.path) ? 'active' : ''}`}
                            data-tooltip={item.label}
                            onClick={() => {
                                if (isMobile) {
                                    onToggle();
                                }
                            }}
                            title={!isOpen ? item.label : ''}
                        >
                            <FontAwesomeIcon icon={item.icon} />
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default DashboardSidebar;

