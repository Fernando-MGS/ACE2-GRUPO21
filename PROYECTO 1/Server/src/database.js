const mongoose = require("mongoose")

const mongoDb = 'mongodb://localhost/Pozo';

mongoose.connect(mongoDb)
    .then(db => console.log('se conecto'))
    .catch(err => console.error(err));

module.exports = mongoose;


