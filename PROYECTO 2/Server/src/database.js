const mongoose = require("mongoose")

const mongoDb = 'mongodb://localhost/Filtro';

mongoose.connect(mongoDb)
    .then(db => console.log('se conecto'))
    .catch(err => console.error(err));

module.exports = mongoose;


