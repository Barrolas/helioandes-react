import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ServiceList from './pages/dashboard/ServiceList';
import ServiceDetail from './pages/dashboard/ServiceDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/servicios" element={<ServiceList />} />
        <Route path="/dashboard/servicios/:id" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
