const ClienteModel = require('../models/clientes.model');

// Obtener todos los clientes
const obtenerClientes = (req, res) => {
    ClienteModel.obtenerClientes((err, rows) => {
        if (err) return res.status(500).json({ error: err });
        res.json(rows);
    });
};

// Obtener un cliente por ID
const obtenerClientePorId = (req, res) => {
    ClienteModel.obtenerClientePorId(req.params.id, (err, rows) => {
        if (err) return res.status(500).json({ error: err });
        if (rows.length === 0) return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        res.json(rows[0]);
    });
};

// Crear un nuevo cliente
const crearCliente = (req, res) => {
    ClienteModel.crearCliente(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ mensaje: 'Cliente creado', id: result.insertId });
    });
};

// Actualizar cliente
const actualizarCliente = (req, res) => {
    ClienteModel.actualizarCliente(req.params.id, req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ mensaje: 'Cliente actualizado' });
    });
};

// Eliminar cliente
const eliminarCliente = (req, res) => {
    ClienteModel.eliminarCliente(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ mensaje: 'Cliente eliminado' });
    });
};

module.exports = {
    obtenerClientes,
    obtenerClientePorId,
    crearCliente,
    actualizarCliente,
    eliminarCliente,
};