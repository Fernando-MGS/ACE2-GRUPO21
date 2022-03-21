const mongoose = require('mongoose');
const { mongo } = require('../database');
const { Schema } = mongoose;

const MagnitudEsquema = new Schema({
    Suciedad1: Number,
    Humedad:Number,
    CantidadAgua:Number,
    Suciedad2:Number,
    Fecha:Date,
}, {collection: 'Magnitudes'});

const TiempoEsquema = new Schema({
    TiempoNecesario:Number
}, {collation: 'Tiempo'});

/*const TempIntEsquema = new Schema({
    TemperaturaInterior:Number,
    Fecha:Date
}, {collection:'Magnitudes'});*/

module.exports = mongoose.model('Magnitudes', MagnitudEsquema);
module.exports = mongoose.model('Tiempo', TiempoEsquema);
//module.exports = mongoose.model('TempInt', TempIntEsquema);