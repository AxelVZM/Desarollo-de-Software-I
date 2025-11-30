import React, { useState } from 'react';
import { Table, Button, Card, Form, Modal, Row, Col, Alert } from 'react-bootstrap';

function Productos() {
  const [showModal, setShowModal] = useState(false);
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Laptop HP', precio: 3200.50, stock: 15 },
    { id: 2, nombre: 'Mouse Inalámbrico', precio: 45.00, stock: 30 },
    { id: 3, nombre: 'Teclado Mecánico', precio: 120.00, stock: 20 }
  ]);

  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    stock: ''
  });

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setFormData({ nombre: '', precio: '', stock: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoProducto = {
      id: productos.length + 1,
      nombre: formData.nombre,
      precio: parseFloat(formData.precio),
      stock: parseInt(formData.stock)
    };
    setProductos([...productos, nuevoProducto]);
    handleClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter(p => p.id !== id));
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Gestión de Productos</h1>
        <Button variant="primary" onClick={handleShow}>
          + Agregar Producto
        </Button>
      </div>

      <Card>
        <Card.Header>
          <h5 className="mb-0">Lista de Productos</h5>
        </Card.Header>
        <Card.Body>
          <Table responsive striped hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio (S/)</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>{producto.nombre}</td>
                  <td>S/ {producto.precio.toFixed(2)}</td>
                  <td>
                    <span className={`badge ${producto.stock > 10 ? 'bg-success' : 'bg-warning'}`}>
                      {producto.stock} unidades
                    </span>
                  </td>
                  <td>
                    <Button variant="outline-primary" size="sm" className="me-2">
                      Editar
                    </Button>
                    <Button 
                      variant="outline-danger" 
                      size="sm"
                      onClick={() => eliminarProducto(producto.id)}
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

      {/* Modal para agregar producto */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre del Producto</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej: Laptop Dell Inspiron"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Precio (S/)</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    name="precio"
                    value={formData.precio}
                    onChange={handleChange}
                    placeholder="0.00"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    placeholder="0"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Guardar Producto
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default Productos;