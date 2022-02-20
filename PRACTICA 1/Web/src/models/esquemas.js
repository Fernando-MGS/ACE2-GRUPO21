const mongoose = require('mongoose');
const { mongo } = require('../database');
const { Schema } = mongoose;

/*const MagnitudEsquema = new Schema({
    Luz: Number,
    Humedad:Number,
    CO2:Number,
    Fecha:Date,
    TemperaturaInterior:Number,
    TemperaturaExterior:Number
}, {collection: 'Magnitudes'});*/

const TempIntEsquema = new Schema({
    TemperaturaInterior:Number,
    Fecha:Date
}, {collection:'Magnitudes'});

//module.exports = mongoose.model('Magnitudes', MagnitudEsquema);
module.exports = mongoose.model('TempInt', TempIntEsquema);