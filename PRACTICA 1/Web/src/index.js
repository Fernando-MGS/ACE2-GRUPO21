const express = require('express');
const app=express();
const morgan = require ('morgan');
const path = require ('path');
//Settings
app.set('port',process.env.PORT||3000)
//Middlewares
app.use(morgan('dev'));
app.use(express.json());
//Routes
app.use(require('./routes/task.route'));
//Static files
 app.use(express.static(path.join(__dirname,'public')));
console.log(__dirname+'\\public')
//Starting server


app.listen(app.get('port'),()=>{
    console.log('server on port 3000');
});