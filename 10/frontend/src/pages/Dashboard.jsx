import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Dashboard() {
  const stats = [
    { title: 'Total Productos', value: '45', color: 'primary', link: '/productos' },
    { title: 'Clientes Registrados', value: '128', color: 'success', link: '/clientes' },
    { title: 'Ventas del Mes', value: '89', color: 'warning', link: '/ventas' },
    { title: 'Ingresos Totales', value: 'S/ 25,430', color: 'info', link: '/ventas' }
  ];

  const recentActivities = [
    { type: 'product', message: 'Nuevo producto agregado', time: 'Hace 2 horas' },
    { type: 'sale', message: 'Venta realizada', time: 'Hace 5 horas' },
    { type: 'client', message: 'Cliente registrado', time: 'Hace 1 día' }
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div className="container">
          <Row>
            <Col>
              <h1 className="display-4 mb-3">Dashboard Principal</h1>
              <p className="lead mb-0">Bienvenido al Sistema de Ventas</p>
            </Col>
          </Row>
        </div>
      </div>

      <div className="container">
        {/* Estadísticas */}
        <Row className="dashboard-stats">
          {stats.map((stat, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <div className={`stat-card stat-card-${stat.color}`}>
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.title}</div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Contenido principal */}
        <Row>
          <Col lg={8}>
            <Card className="mb-4">
              <Card.Header className="bg-primary text-white">
                <h5 className="mb-0">Acciones Rápidas</h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={4} className="mb-3">
                    <Button as={Link} to="/productos" variant="outline-primary" className="action-card w-100 h-100">
                      <div className="action-title">Gestionar Productos</div>
                    </Button>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Button as={Link} to="/clientes" variant="outline-success" className="action-card w-100 h-100">
                      <div className="action-title">Gestionar Clientes</div>
                    </Button>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Button as={Link} to="/ventas" variant="outline-warning" className="action-card w-100 h-100">
                      <div className="action-title">Realizar Venta</div>
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4}>
            <Card>
              <Card.Header className="bg-secondary text-white">
                <h5 className="mb-0">Actividad Reciente</h5>
              </Card.Header>
              <Card.Body>
                {recentActivities.map((activity, index) => (
                  <div key={index} className="activity-item">
                    <div className="activity-content">
                      <div className="activity-message">{activity.message}</div>
                      <div className="activity-time">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Dashboard;