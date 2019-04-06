const express = require('express');
const router = express.Router();
const Driver = require('../models/drivers');

//get list of driver from db
router.get('/driver', function(req,res){
   
    res.send({type:"GET"});
});

//add new driver to db
router.post('/driver', function(req,res){
    Driver.create(req.body).then(function(driver){
        res.send(driver);
    });
    
});

//update driver in db
router.put('/driver/:id', function(req,res){
    
    res.send({type:"PUT"});
});

//delete driver from db
router.delete('/driver/:id', function(req,res){
 
    res.send({type: "DELETE"});
});

module.exports = router;