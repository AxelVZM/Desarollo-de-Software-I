import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Container fluid className="flex-grow-1">
        <Row className="h-100">
          <Col xs={12} md={3} lg={2} className="p-0">
            <Sidebar />
          </Col>
          <Col xs={12} md={9} lg={10} className="p-4 main-content">
            {children}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;