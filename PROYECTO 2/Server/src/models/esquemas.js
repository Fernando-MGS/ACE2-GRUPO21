const mongoose = require('mongoose');
const { mongo } = require('../database');
const { Schema } = mongoose;

const MagnitudEsquema = new Schema({
    Metano: Number,
    Temperatura:Number,
    Fecha:Date,
}, {collection: 'Magnitudes'});


module.exports = mongoose.model('Magnitudes', MagnitudEsquema);
//module.exports = mongoose.model('TempInt', TempIntEsquema);