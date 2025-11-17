const db = require('../db/connection');

const obtenerVentas = (callback) => {
    db.query('SELECT * FROM ventas', callback);
};

const obtenerVentaPorId = (id, callback) => {
    db.query('SELECT * FROM ventas WHERE id = ?', [id], callback);
};

const crearVenta = (datos, callback) => {
    const { cliente_id, usuario_id, total } = datos;
    db.query(
        'INSERT INTO ventas (cliente_id, usuario_id, total) VALUES (?, ?, ?)',
        [cliente_id, usuario_id, total],
        callback
    );
};

const actualizarVenta = (id, datos, callback) => {
    const { cliente_id, usuario_id, total } = datos;
    db.query(
        'UPDATE ventas SET cliente_id = ?, usuario_id = ?, total = ? WHERE id = ?',
        [cliente_id, usuario_id, total, id],
        callback
    );
};

const eliminarVenta = (id, callback) => {
    db.query('DELETE FROM ventas WHERE id = ?', [id], callback);
};

module.exports = {
    obtenerVentas,
    obtenerVentaPorId,
    crearVenta,
    actualizarVenta,
    eliminarVenta,
};