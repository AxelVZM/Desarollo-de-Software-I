import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login.jsx';
import Home from '../pages/Home.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Productos from '../pages/Productos.jsx';
import Clientes from '../pages/Clientes.jsx';
import Ventas from '../pages/Ventas.jsx';
import Layout from '../layouts/Layout.jsx';

// Componente para proteger rutas
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Layout><Dashboard /></Layout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/productos" 
          element={
            <ProtectedRoute>
              <Layout><Productos /></Layout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/clientes" 
          element={
            <ProtectedRoute>
              <Layout><Clientes /></Layout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/ventas" 
          element={
            <ProtectedRoute>
              <Layout><Ventas /></Layout>
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}