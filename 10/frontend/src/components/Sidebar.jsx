import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar p-3" style={{ width: '250px' }}>
      <Nav className="flex-column">
        <Nav.Link 
          as={Link} 
          to="/dashboard" 
          className={location.pathname === '/dashboard' ? 'active' : ''}
        >
           Dashboard
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="/productos" 
          className={location.pathname === '/productos' ? 'active' : ''}
        >
           Productos
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="/clientes" 
          className={location.pathname === '/clientes' ? 'active' : ''}
        >
           Clientes
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="/ventas" 
          className={location.pathname === '/ventas' ? 'active' : ''}
        >
           Ventas
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;