import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import ServiceList from './pages/dashboard/ServiceList';
import ServiceDetail from './pages/dashboard/ServiceDetail';
import PlanList from './pages/dashboard/PlanList';
import PlanDetail from './pages/dashboard/PlanDetail';
import './App.css';

function App() {
  // Configurar basename solo para producción (GitHub Pages)
  // En desarrollo, basename será undefined (usa "/")
  const basename = process.env.NODE_ENV === 'production' 
    ? '/helioandes-react' 
    : undefined;

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="services" element={<ServiceList />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="plans" element={<PlanList />} />
          <Route path="plans/:id" element={<PlanDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
