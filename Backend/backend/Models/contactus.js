const mongoose = require('mongoose');

const contactusSchema = new mongoose.Schema({
    name:{type:String, requireed:true},
    email:{type:String, required:true},
    subject:{type:String, required:true},
    message:{type:String, required:true},
});

const Contact = mongoose.model('contact', contactusSchema);

module.exports = Contact;