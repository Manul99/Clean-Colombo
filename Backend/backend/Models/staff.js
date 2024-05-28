const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    empID:{type:String, required:true},
    empName:{type:String, requred:true},
    nic:{type:String, required:true},
    address:{type:String, required:true},
    email:{type:String, required:true},
    dob:{type:String, required:true},
    mobile:{type:String, required:true},
});

const Staff = mongoose.model('staff',staffSchema);

module.exports = Staff;