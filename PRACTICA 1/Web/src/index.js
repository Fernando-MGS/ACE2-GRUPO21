const express= require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const { default: mongoose } = require('./database');

const PORT = process.env.PORT || 8080;
const app= express();

const UserData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2022,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];


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

app.listen(PORT, ()=> console.log('Server running on port ${PORT} '));
app.get('/',  function(req, res){
    res.send(" WELCOME TO APP1!");
});

app.use('/grafica', require('./routes/task.route'));

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

app.get('/carbono',  function(req, res){
  data=  Math.random() * (600) + 0  
  res.send(JSON.stringify(data));
});

app.get('/velocidad',  function(req, res){
  data= Math.random() * (100 - 1) + 1
  
  res.send(JSON.stringify(data));
});

app.get('/ChartTemp',  function(req, res){
    const datos ={
        labels:UserData.map((data)=>data.year),
        datasets:[{
            label:"Humedad del ambiente",
            data:UserData.map((data)=>data.userGain),
            fill:true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"}
        ],
    };
    res.send(datos);
});


