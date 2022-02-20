const express= require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const app= express();

app.use(cors({
    "methods": "GET,PUT,POST",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    credentials: true
}));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.listen(PORT, ()=> console.log(`Server running on port ${PORT} `));
app.get('/',  function(req, res){
    res.send(" WELCOME TO APP!");
});

app.get('/temperatura',  function(req, res){
    data=  Math.random() * (60 - 15) + 15
    
    res.send(JSON.stringify(data));
});

app.get('/luz',  function(req, res){
    data=  Math.random() * (500) + 0
    
    res.send(JSON.stringify(data));
});

app.get('/humedad',  function(req, res){
    data=  Math.random() * (100) + 0
    
    res.send(JSON.stringify(data));
});
