import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
  <div className="home-page">
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="hero-title">
                Sistema de Ventas
              </h1>
              <p className="hero-description">
                Sistema de Gestion para manejar tu negocio
                Inventario, clientes, ventas todo desde tu comodidad
              </p>
              <div className="d-flex gap-3">
                <Button as={Link} to="/login" variant="light" size="lg">
                  Iniciar Sesión
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="text-center">
                <img 
                src="https://www.muycanal.com/wp-content/uploads/2021/03/tienda_tecnologia.jpg"
                className='imagen'
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;