import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Páginas
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Votacion from './pages/Votacion';
import Confirmacion from './pages/Confirmacion';
import Admin from './pages/Admin';
import YaVotaste from './pages/YaVotaste';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/admin" element={<Admin />} />
  <Route path="/votacion" element={<Votacion />} />
  <Route path="/confirmacion" element={<Confirmacion />} />
  <Route path="/ya-votaste" element={<YaVotaste />} />
</Routes>
    </BrowserRouter>
  </React.StrictMode>
);
