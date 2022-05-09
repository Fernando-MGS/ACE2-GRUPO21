const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const { default: mongoose } = require('./database');
const Magnitud = require('./models/esquemas');
const Tiempo = require('./models/esquema2');
const PORT = process.env.PORT || 8080;
const app = express();



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

app.listen(PORT, () => console.log('Server running on port ${PORT} '));
app.get('/', function (req, res) {
  res.send(" WELCOME TO APP1!");
});

app.use('/grafica', require('./routes/task.route'));

app.get('/temperatura', async (req, res) => {
  //const Magnitudes = await Magnitud.findOne();
  //res.send(JSON(Magnitudes["TemperaturaInterior"]));
  const Magnitudes = await Magnitud.findOne({}, {}, { sort: { "Fecha": -1 } });
  //console.log(Magnitudes)
  res.send(JSON.stringify(Magnitudes["TemperaturaInterior"]));
});


app.get('/Magnitudes', async (req, res) => {
  console.log("---")
  const Magnitudes = await Magnitud.findOne({}, {}, { sort: { "Fecha": -1 } });
  console.log(Magnitudes)
  res.send(Magnitudes);
})

app.get('/Magnitudes1', async (req, res) => {
  console.log("---")
  const Magnitudes = await Magnitud.find()
  console.log(Magnitudes)
  res.send(Magnitudes.map((data)=>data.Humedad));
})

app.get('/temperaturaExt', async (req, res) => {
  //const Magnitudes = await Magnitud.findOne();
  //res.send(JSON(Magnitudes["TemperaturaInterior"]));
  const Magnitudes = await Magnitud.findOne({}, {}, { sort: { "Fecha": -1 } });
  //console.log(Magnitudes)
  res.send(JSON.stringify(Magnitudes["TemperaturaExterior"]));

  //res.send(JSON.stringify(data));
});


app.get('/Metano', async (req, res) => {
  const Magnitudes = await Magnitud.findOne({}, {}, { sort: { "Fecha": -1 } });
  //console.log(Magnitudes)
  res.send(JSON.stringify(Magnitudes["Metano"]));
});

app.get('/Temperatura', async (req, res) => {
  const Magnitudes = await Magnitud.findOne({}, {}, { sort: { "Fecha": -1 } });
  //console.log(Magnitudes)
  res.send(JSON.stringify(Magnitudes["Temperatura"]));
});

app.get('/CantidadMT', async (req, res) => {
  const Magnitudes = await Magnitud.findOne({}, {}, { sort: { "Temperatura": -1 } });
  //console.log(Magnitudes)
  res.send(JSON.stringify(Magnitudes["Metano"]));
});

app.get('/velocidad', function (req, res) {
  data = Math.random() * (100 - 1) + 1

  res.send(JSON.stringify(data));
});

app.get('/ChartTemp', async (req, res)=> {
  console.log("asdasd")
  const Magnitudes = await Magnitud.find()
  const datos = [{
    labels: Magnitudes.map((data) => data.Fecha),
    datasets: [{
      label: "Suciedad en el agua",
      data:   Magnitudes.map((data) => data.Suciedad1),
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
    ],
  },{
    labels: Magnitudes.map((data) => data.Fecha),
    datasets: [{
      label: "Humedad en el suelo del jardin",
      data:   Magnitudes.map((data) => data.Humedad),
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
    ],
  },{
    labels: Magnitudes.map((data) => data.Fecha),
    datasets: [{
      label: "Cantidad de Agua",
      data:   Magnitudes.map((data) => data.CantidadAgua),
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
    ],
  },{
    labels: Magnitudes.map((data) => data.Fecha),
    datasets: [{
      label: "Suciedad Post-Filtrado",
      data:   Magnitudes.map((data) => data.Suciedad2),
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
    ],
  },{
    labels: Magnitudes.map((data) => data.Fecha),
    datasets: [{
      label: "Prueba",
      data:   Magnitudes.map((data) => data.Suciedad2),
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
    ],
  },
];
 // console.log(datos)
  res.send(datos);
});


