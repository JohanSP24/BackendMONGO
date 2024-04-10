const mongoose = require('mongoose');

//el modelo que se cree aca debe ser igual al de la base de datos

const distribuidorSchema = mongoose.Schema({
    razonSocial: {
        type: String,
        required: true
    },
    NIT: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    }    
},{versionkey:false});

module.exports = mongoose.model('Distribuidor',distribuidorSchema);