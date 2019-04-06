const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express applicatiion

const app = express();
//connect mongoDB
mongoose.connect('mongodb://localhost/drivergo');
mongoose.Promise = global.Promise;
//body parser
app.use(bodyParser.json());
//initilize routes
app.use('/api',require('./routes/api'));
//listen port

app.listen(process.env.port || 3000, function(){
    console.log("Listening...");
});