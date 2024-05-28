const asyncHandler = require('express-async-handler');
const Contact = require('../Models/contactus');

const submitContact = asyncHandler(async(req,res) =>{
    try {
        const{name,email,subject,message} = req.body;
        const newContact = new Contact({
            name,
            email,
            subject,
            message,
        });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        console.log('Failed to insert data',error);
        res.status(500).json({error:'Failed to insert data'});
    }

})

module.exports = {submitContact};