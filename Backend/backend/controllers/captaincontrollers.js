const asynHandler = require('express-async-handler');
const Captain = require('../Models/Captain');

const registercaptain = asynHandler(async(req, res) =>{
    const{captainID,captainName,nic,address,email,dob,mobile } = req.body;

    if(!captainID || !captainName || !nic || !address || !email || !dob || !mobile){
        res.status(400);
        throw new Error('Please enter all the fields');
    }

    const captainExists = await Captain.findOne({email});
    if(captainExists){
        res.status(400);
        throw new Error('This captain still exists');
    }

    else{
        
        try {
            const newcaptain = new Captain({
                captainID,
                captainName,
                nic,
                address,
                email,
                dob,
                mobile,
            });

            await newcaptain.save();
            res.status(201).json(newcaptain);
        } catch (error) {
            console.log('Failed to insert data',error);
            res.status(500).json({error:'Failed to insert data'});
        }

    
    }


});

// Update captain
const updatecaptain = asynHandler(async(req ,res) =>{
    const captainID = req.params.captainID;
    const {captainName,nic,address,email,dob,mobile} = req.body;

    try {
        const updateCaptain = await Captain.findOneAndUpdate({captainID},{captainName,nic,address,email,dob,mobile},{new:true});

        if(!updateCaptain){
            return res.status(404).json({error:"Captain not found"});
        }
        res.status(200).json(updateCaptain);
    } catch (error) {
        console.error('Failed to update captain data:',error);
        res.status(500).json({error:'Failed to update captain data'});
    }
});

const deletecaptain = asynHandler(async(req, res) =>{
    const captainID = req.params.captainID;

    try {
        const deletecaptain = await Captain.findOneAndDelete({captainID});
        if(!deletecaptain){
            res.status(404).json({error:'Can not find this captain'});
        }
        res.status(200).json({message:'captains data deleted successfully'});
    } catch (error) {
        console.error('Failed to delete captains data',error);
        res.status(500).json({error:'Failed to delete captains data'});
    }
})

module.exports = {registercaptain,updatecaptain ,deletecaptain};