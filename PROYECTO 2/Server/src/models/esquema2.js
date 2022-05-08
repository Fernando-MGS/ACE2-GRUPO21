const mongoose = require('mongoose');
const { mongo } = require('../database');
const { Schema } = mongoose;


const TiempoEsquema = new Schema({
    TiempoNecesario:Number
}, {collection: 'Tiempo'});

module.exports = mongoose.model('Tiempo', TiempoEsquema);