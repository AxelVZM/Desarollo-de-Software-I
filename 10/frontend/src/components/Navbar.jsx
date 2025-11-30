import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  const isAuthenticated = localStorage.getItem('isAuthenticated');

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <BootstrapNavbar.Brand as={Link} to="/" className="navbar-brand">
          Sistema de Ventas
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                <Nav.Link as={Link} to="/clientes">Clientes</Nav.Link>
                <Nav.Link as={Link} to="/ventas">Ventas</Nav.Link>
                <Nav.Link onClick={handleLogout}>Cerrar Sesión</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;