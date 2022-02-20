const express = require('express');
const router = express.Router();

const TempInt = require('../models/esquemas')


router.get('/',(req,res)=>{
    res.json({
        status:"API WORKS"
    });
});

router.get('/temperatura',async(req,res)=>{
    const temperatura = await TempInt.find({Luz:0});
    res.json(temperatura);
});

module.exports=router;