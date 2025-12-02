import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const DashboardTopbar = ({ onToggleSidebar }) => {
    const location = useLocation();
    
    const getBreadcrumbs = () => {
        const paths = location.pathname.split('/').filter(Boolean);
        const breadcrumbs = [{ label: 'Dashboard', path: '/dashboard' }];
        
        if (paths.length > 1) {
            if (paths[1] === 'services') {
                breadcrumbs.push({ label: 'Servicios', path: '/dashboard/services' });
                if (paths[2]) {
                    breadcrumbs.push({ label: 'Detalle', path: location.pathname });
                }
            } else if (paths[1] === 'plans') {
                breadcrumbs.push({ label: 'Planes', path: '/dashboard/plans' });
                if (paths[2]) {
                    breadcrumbs.push({ label: 'Detalle', path: location.pathname });
                }
            }
        }
        
        return breadcrumbs;
    };

    const breadcrumbs = getBreadcrumbs();
    
    // Detectar si estamos en una página de detalle
    const isDetailPage = location.pathname.includes('/services/') || location.pathname.includes('/plans/');
    const backPath = location.pathname.includes('/services/') 
        ? '/dashboard/services' 
        : location.pathname.includes('/plans/')
        ? '/dashboard/plans'
        : '/dashboard';

    return (
        <div className="dashboard-topbar">
            <div className="dashboard-topbar-left">
                <button 
                    className="dashboard-toggle-btn"
                    onClick={onToggleSidebar}
                    aria-label="Toggle sidebar"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                
                <nav className="dashboard-breadcrumb">
                    {breadcrumbs.map((crumb, index) => (
                        <React.Fragment key={crumb.path}>
                            {index > 0 && <span className="dashboard-breadcrumb-separator">/</span>}
                            {index === breadcrumbs.length - 1 ? (
                                <span>{crumb.label}</span>
                            ) : (
                                <Link to={crumb.path}>{crumb.label}</Link>
                            )}
                        </React.Fragment>
                    ))}
                </nav>
            </div>
            
            <div className="dashboard-topbar-right">
                {isDetailPage && (
                    <Link to={backPath} className="dashboard-back-btn">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <span>Volver</span>
                    </Link>
                )}
                <Link to="/" className="dashboard-back-btn">
                    <span>Ir al Sitio</span>
                </Link>
            </div>
        </div>
    );
};

export default DashboardTopbar;

