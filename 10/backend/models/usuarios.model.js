const db = require('../db/connection');

// Obtener todos los usuarios
const obtenerUsuarios = (callback) => {
    db.query('SELECT id, nombre, email FROM usuarios', callback);
};

// Obtener un usuario por ID
const obtenerUsuarioPorId = (id, callback) => {
    db.query('SELECT id, nombre, email FROM usuarios WHERE id = ?', [id], callback);
};

// Crear un nuevo usuario
const crearUsuario = (datos, callback) => {
    const { nombre, email, password } = datos;
    db.query(
        'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)',
        [nombre, email, password],
        callback
    );
};

// Actualizar usuario
const actualizarUsuario = (id, datos, callback) => {
    const { nombre, email } = datos;
    db.query(
        'UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?',
        [nombre, email, id],
        callback
    );
};

// Eliminar usuario
const eliminarUsuario = (id, callback) => {
    db.query('DELETE FROM usuarios WHERE id = ?', [id], callback);
};

// Buscar usuario por email (para login)
const buscarPorEmail = (email, callback) => {
    db.query('SELECT * FROM usuarios WHERE email = ?', [email], callback);
};

module.exports = {
    obtenerUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
    buscarPorEmail,
};