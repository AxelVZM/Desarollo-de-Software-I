const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventas.controller');

router.get('/', ventasController.obtenerVentas);
router.get('/:id', ventasController.obtenerVentaPorId);
router.post('/', ventasController.crearVenta);
router.put('/:id', ventasController.actualizarVenta);
router.delete('/:id', ventasController.eliminarVenta);

module.exports = router;