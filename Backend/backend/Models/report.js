const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    reportid:{type:String, required:true},
    image:{type:String, required:true},
    impact:{type:String, required:true},
    location:{type:String, required:true},
});

const Report = mongoose.model('report',reportSchema);

module.exports = Report;