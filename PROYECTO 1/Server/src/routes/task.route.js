const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();

const Magnitud = require('../models/esquemas')


router.get('/',(req,res)=>{
    res.json({
        status:"API WORKS"
    });
});

router.get('/Magnitudes',async(req,res)=>{
    const Magnitudes = await Magnitud.findOne({}, {}, {sort: {"Fecha": -1}});
    console.log(Magnitudes["Humedad"]);
    res.json(Magnitudes);
});

module.exports=router;