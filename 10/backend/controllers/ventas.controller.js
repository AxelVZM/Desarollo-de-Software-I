const VentaModel = require('../models/ventas.model');

const obtenerVentas = (req, res) => {
    VentaModel.obtenerVentas((err, rows) => {
        if (err) return res.status(500).json({ error: err });
        res.json(rows);
    });
};

const obtenerVentaPorId = (req, res) => {
    VentaModel.obtenerVentaPorId(req.params.id, (err, rows) => {
        if (err) return res.status(500).json({ error: err });
        if (rows.length == 0) return res.status(404).json({ mensaje: 'Venta no encontrada' });
        res.json(rows[0]);
    });
};

const crearVenta = (req, res) => {
    VentaModel.crearVenta(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ mensaje: 'Venta creada', id: result.insertId });
    });
};

const actualizarVenta = (req, res) => {
    VentaModel.actualizarVenta(req.params.id, req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ mensaje: 'Venta actualizada' });
    });
};

const eliminarVenta = (req, res) => {
    VentaModel.eliminarVenta(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ mensaje: 'Venta eliminada' });
    });
};

module.exports = {
    obtenerVentas,
    obtenerVentaPorId,
    crearVenta,
    actualizarVenta,
    eliminarVenta,
};