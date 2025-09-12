const mongoose = require('mongoose'); // Importando el componente mongoose

const animalSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Animal', animalSchema);
