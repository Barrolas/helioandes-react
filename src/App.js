import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PlanList from './pages/dashboard/PlanList';
import PlanDetail from './pages/dashboard/PlanDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/planes" element={<PlanList />} />
        <Route path="/dashboard/planes/:id" element={<PlanDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
