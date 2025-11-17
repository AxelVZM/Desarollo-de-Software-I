const ProductoModel = require('../models/productos.model');

// Obtener todos los productos
const obtenerProductos = (req, res) => {
    ProductoModel.obtenerProductos((err, rows) => {
        if (err) return res.status(500).json({ error: err });
        res.json(rows);
    });
};

// Obtener un producto por ID
const obtenerProductoPorId = (req, res) => {
    ProductoModel.obtenerProductoPorId(req.params.id, (err, rows) => {
        if (err) return res.status(500).json({ error: err });
        if (rows.length === 0) return res.status(404).json({ mensaje: 'Producto no encontrado' });
        res.json(rows[0]);
    });
};

// Crear un nuevo producto
const crearProducto = (req, res) => {
    ProductoModel.crearProducto(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ mensaje: 'Producto creado', id: result.insertId });
    });
};

// Actualizar producto
const actualizarProducto = (req, res) => {
    ProductoModel.actualizarProducto(req.params.id, req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ mensaje: 'Producto actualizado' });
    });
};

// Eliminar producto
const eliminarProducto = (req, res) => {
    ProductoModel.eliminarProducto(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ mensaje: 'Producto eliminado' });
    });
};

module.exports = {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
};