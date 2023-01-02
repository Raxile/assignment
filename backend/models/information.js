const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const informationSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    country:{
        type:String,
        required :true
    }
});

module.exports = mongoose.model('Information',informationSchema);