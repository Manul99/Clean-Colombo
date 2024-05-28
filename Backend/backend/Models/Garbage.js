const mongoose = require('mongoose');

const garbageSchema = new mongoose.Schema({
    titleid:{type:String, required:true},
    title:{type:String, required:true},
    image:{type:String, required:true},
    location:{type:String, required:true},
})

const Garbage = mongoose.model('garbage',garbageSchema);

module.exports = Garbage;