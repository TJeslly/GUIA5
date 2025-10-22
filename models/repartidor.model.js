const { Schema, model } = require('mongoose');

// Esquema de repartidor
const repartidorSchema = new Schema({
  nombre: { type: String, required: true },
  identificacion: { type: String, required: true, unique: true },
  ubicacionActual: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitud, latitud]
      required: true,
      validate: v => v.length === 2
    }
  }
}, { timestamps: true });

// Índice geoespacial (para búsquedas por cercanía)
repartidorSchema.index({ ubicacionActual: '2dsphere' });

// Exportar el modelo
module.exports = model('Repartidor', repartidorSchema);
