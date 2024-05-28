const mongoose = require('mongoose');

const captainSchema = new mongoose.Schema({
    captainID:{type:String, required:true},
    captainName:{type:String, required:true},
    nic:{type:String, required:true},
    address:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    dob:{type:String, required:true},
    mobile:{type:String,required:true},
    
});

const Captain = mongoose.model('captain',captainSchema);

module.exports = Captain;
