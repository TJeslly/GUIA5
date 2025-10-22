// controllers/paquetes.controller.js
const Paquete = require('../models/paquete.model');

const esObjectId = (id) => /^[0-9a-fA-F]{24}$/.test(id);

// POST /api/paquetes
exports.crearPaquete = async (req, res) => {
  try {
    const { numeroGuia } = req.body;
    const existe = await Paquete.findOne({ numeroGuia });
    if (existe) return res.status(409).json({ message: 'numeroGuia ya existe' });

    const paquete = await Paquete.create(req.body);
    res.status(201).json(paquete);
  } catch (err) {
    res.status(500).json({ message: 'Error al crear paquete', error: err.message });
  }
};

// GET /api/paquetes
exports.obtenerPaquetes = async (_req, res) => {
  try {
    const paquetes = await Paquete.find();
    res.json(paquetes);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener paquetes', error: err.message });
  }
};

// GET /api/paquetes/:id (id = _id o numeroGuia)
exports.obtenerPaquetePorId = async (req, res) => {
  try {
    const { id } = req.params;
    const filtro = esObjectId(id) ? { _id: id } : { numeroGuia: id };
    const paquete = await Paquete.findOne(filtro);
    if (!paquete) return res.status(404).json({ message: 'Paquete no encontrado' });
    res.json(paquete);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener paquete', error: err.message });
  }
};

// PUT /api/paquetes/:id
exports.actualizarEstadoPaquete = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;
    const filtro = esObjectId(id) ? { _id: id } : { numeroGuia: id };

    const actualizado = await Paquete.findOneAndUpdate(
      filtro,
      { estado },
      { new: true }
    );
    if (!actualizado) return res.status(404).json({ message: 'Paquete no encontrado' });
    res.json({ message: 'Paquete actualizado', paquete: actualizado });
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizar paquete', error: err.message });
  }
};

// DELETE /api/paquetes/:id
exports.eliminarPaquete = async (req, res) => {
  try {
    const { id } = req.params;
    const filtro = esObjectId(id) ? { _id: id } : { numeroGuia: id };

    const eliminado = await Paquete.findOneAndDelete(filtro);
    if (!eliminado) return res.status(404).json({ message: 'Paquete no encontrado' });
    res.json({ message: 'Paquete eliminado correctamente', paquete: eliminado });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar paquete', error: err.message });
  }
};

