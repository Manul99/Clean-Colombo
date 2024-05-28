const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const memberSchema = new mongoose.Schema({
    fname:{type:String, required:true},
    lname:{type:String, required:true},
    mobile:{type:String, required:true},
    username:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true},
    
});

memberSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

// When member password is going to save in database it encrypt the password
memberSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    next();
    
});

const Member = mongoose.model('member',memberSchema);

module.exports = Member;