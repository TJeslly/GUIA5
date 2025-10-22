// routes/paquetes.routes.js
const { Router } = require('express');
const {
  crearPaquete,
  obtenerPaquetes,
  obtenerPaquetePorId,
  actualizarEstadoPaquete,
  eliminarPaquete
} = require('../Controllers/paquetes.controller'); // 'controllers' en minúscula

const router = Router();

router.post('/', crearPaquete);
router.get('/', obtenerPaquetes);
router.get('/:id', obtenerPaquetePorId);
router.put('/:id', actualizarEstadoPaquete);
router.delete('/:id', eliminarPaquete);

module.exports = router;




