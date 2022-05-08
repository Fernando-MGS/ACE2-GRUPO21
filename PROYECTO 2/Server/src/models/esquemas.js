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

/*const TempIntEsquema = new Schema({
    TemperaturaInterior:Number,
    Fecha:Date
}, {collection:'Magnitudes'});*/

module.exports = mongoose.model('Magnitudes', MagnitudEsquema);
//module.exports = mongoose.model('TempInt', TempIntEsquema);