import React, { useState } from 'react';
import { Table, Button, Card, Form, Modal, Row, Col, Badge } from 'react-bootstrap';

function Clientes() {
  const [showModal, setShowModal] = useState(false);
  const [clientes, setClientes] = useState([
    { 
      id: 1, 
      "nombre": "Marco Vargas",
      "documento_identidad": "46183879",
      "direccion": "Av Siempre Viva",
      "telefono": "910388470"
    },
    { 
      id: 2, 
      nombre: 'Luigui Rivas', 
      documento_identidad: '97584312', 
      direccion: 'Apv Miraflores', 
      telefono: '952875218' 
    }
  ]);

  const [formData, setFormData] = useState({
    nombre: '',
    documento_identidad: '',
    direccion: '',
    telefono: ''
  });

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setFormData({ nombre: '', documento_identidad: '', direccion: '', telefono: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoCliente = {
      id: clientes.length + 1,
      ...formData
    };
    setClientes([...clientes, nuevoCliente]);
    handleClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const eliminarCliente = (id) => {
    setClientes(clientes.filter(c => c.id !== id));
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Gestión de Clientes</h1>
        <Button variant="success" onClick={handleShow}>
           Registrar Cliente
        </Button>
      </div>

      <Card>
        <Card.Header>
          <h5 className="mb-0">Clientes Registrados</h5>
        </Card.Header>
        <Card.Body>
          <Table responsive striped hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>DNI</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.id}</td>
                  <td>
                    <strong>{cliente.nombre}</strong>
                  </td>
                  <td>
                    <Badge bg="secondary">{cliente.documento_identidad}</Badge>
                  </td>
                  <td>{cliente.direccion}</td>
                  <td>{cliente.telefono}</td>
                  <td>
                    <Button variant="outline-primary" size="sm" className="me-2">
                      Editar
                    </Button>
                    <Button 
                      variant="outline-danger" 
                      size="sm"
                      onClick={() => eliminarCliente(cliente.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal para agregar cliente */}
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Registrar Nuevo Cliente</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre Completo</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej: Juan Pérez García"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Documento de Identidad</Form.Label>
                  <Form.Control
                    type="text"
                    name="documento_identidad"
                    value={formData.documento_identidad}
                    onChange={handleChange}
                    placeholder="Ej: 12345678"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={8}>
                <Form.Group className="mb-3">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    placeholder="Ej: Av. Ejemplo 123, Cusco"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Ej: 987654321"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="success" type="submit">
              Registrar Cliente
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default Clientes;