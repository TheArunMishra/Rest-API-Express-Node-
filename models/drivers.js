const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create driver schema

const driverSchema = new Schema({
    name: {
        type : String,
        required : [true, 'Name is require']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
    //add in gio location
});

//create Models

const Driver = mongoose.model('driver',driverSchema);
module.exports = Driver;