import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardTopbar from '../components/dashboard/DashboardTopbar';

const DashboardLayout = () => {
    // En desktop, el sidebar inicia abierto. En móvil, inicia cerrado.
    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            // En móvil, cerrar el sidebar. En desktop, mantener el estado actual.
            if (mobile) {
                setSidebarOpen(false);
            } else {
                setSidebarOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="dashboard-container">
            <DashboardSidebar isOpen={sidebarOpen} onToggle={toggleSidebar} isMobile={isMobile} />
            <div className={`dashboard-main ${!sidebarOpen ? 'expanded' : ''}`}>
                <DashboardTopbar onToggleSidebar={toggleSidebar} />
                <div className="dashboard-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;

