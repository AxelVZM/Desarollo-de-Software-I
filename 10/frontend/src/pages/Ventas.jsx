import React, { useState } from 'react';
import { Table, Button, Card, Form, Row, Col, Alert, ListGroup, Badge } from 'react-bootstrap';

function Ventas() {
  const [carrito, setCarrito] = useState([]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState('');
  
  const productosDisponibles = [
    { id: 1, nombre: 'Laptop HP', precio: 3200.50, stock: 15 },
    { id: 2, nombre: 'Mouse Inalámbrico', precio: 45.00, stock: 30 },
    { id: 3, nombre: 'Teclado Mecánico', precio: 120.00, stock: 20 },
    { id: 4, nombre: 'Monitor 24"', precio: 450.00, stock: 10 }
  ];

  const clientes = [
    { id: 1, nombre: 'Marco Vargas', documento: '46183879' },
    { id: 2, nombre: 'Luigui Rivas', documento: '97584312' }
  ];

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);
    
    if (productoExistente) {
      setCarrito(carrito.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1, subtotal: (item.cantidad + 1) * item.precio }
          : item
      ));
    } else {
      setCarrito([...carrito, {
        ...producto,
        cantidad: 1,
        subtotal: producto.precio
      }]);
    }
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) {
      eliminarDelCarrito(id);
      return;
    }

    setCarrito(carrito.map(item =>
      item.id === id
        ? { ...item, cantidad: nuevaCantidad, subtotal: nuevaCantidad * item.precio }
        : item
    ));
  };

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.subtotal, 0);
  };

  const realizarVenta = () => {
    if (!clienteSeleccionado) {
      alert('Por favor selecciona un cliente');
      return;
    }

    if (carrito.length === 0) {
      alert('El carrito está vacío');
      return;
    }

    alert(`Venta realizada exitosamente!\nTotal: S/ ${calcularTotal().toFixed(2)}`);
    setCarrito([]);
    setClienteSeleccionado('');
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Realizar Venta</h1>
        <Badge bg="primary" className="fs-6">
          Total: S/ {calcularTotal().toFixed(2)}
        </Badge>
      </div>

      <Row>
        {/* Selección de Cliente y Productos */}
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">Información de la Venta</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Seleccionar Cliente</Form.Label>
                    <Form.Select
                      value={clienteSeleccionado}
                      onChange={(e) => setClienteSeleccionado(e.target.value)}
                    >
                      <option value="">Selecciona un cliente</option>
                      {clientes.map(cliente => (
                        <option key={cliente.id} value={cliente.id}>
                          {cliente.nombre} - {cliente.documento}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <div className="d-flex align-items-end h-100">
                    <Button variant="outline-success" className="w-100">
                      + Nuevo Cliente
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <h5 className="mb-0">Productos Disponibles</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                {productosDisponibles.map(producto => (
                  <Col md={6} lg={4} key={producto.id} className="mb-3">
                    <Card className="h-100">
                      <Card.Body className="d-flex flex-column">
                        <h6 className="card-title">{producto.nombre}</h6>
                        <p className="text-muted mb-2">S/ {producto.precio.toFixed(2)}</p>
                        <div className="mt-auto">
                          <Badge bg="secondary" className="mb-2">
                            Stock: {producto.stock}
                          </Badge>
                          <Button
                            variant="primary"
                            size="sm"
                            className="w-100"
                            onClick={() => agregarAlCarrito(producto)}
                          >
                            Agregar al Carrito
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Carrito de Compras */}
        <Col md={4}>
          <Card className="sticky-top" style={{ top: '20px' }}>
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">🛒 Carrito de Compras</h5>
            </Card.Header>
            <Card.Body>
              {carrito.length === 0 ? (
                <Alert variant="info" className="text-center">
                  El carrito está vacío
                </Alert>
              ) : (
                <>
                  <ListGroup variant="flush">
                    {carrito.map(item => (
                      <ListGroup.Item key={item.id} className="px-0">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <div>
                            <h6 className="mb-1">{item.nombre}</h6>
                            <small>S/ {item.precio.toFixed(2)} c/u</small>
                          </div>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => eliminarDelCarrito(item.id)}
                          >
                            ×
                          </Button>
                        </div>
                        <div className="d-flex align-items-center">
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                          >
                            -
                          </Button>
                          <span className="mx-3">{item.cantidad}</span>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                          >
                            +
                          </Button>
                          <strong className="ms-auto">S/ {item.subtotal.toFixed(2)}</strong>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  
                  <div className="border-top pt-3 mt-3">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5 className="mb-0">Total:</h5>
                      <h5 className="mb-0 text-primary">S/ {calcularTotal().toFixed(2)}</h5>
                    </div>
                    <Button
                      variant="success"
                      size="lg"
                      className="w-100"
                      onClick={realizarVenta}
                    >
                       Confirmar Venta
                    </Button>
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Ventas;