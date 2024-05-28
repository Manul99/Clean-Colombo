const asyncHandler = require('express-async-handler');
const Staff = require('../Models/staff');

const registerstaff = asyncHandler(async(req, res) =>{
    const {empID,empName,nic,address,email,dob,mobile} = req.body;

    if(!empID || !empName || !nic || !address || !email || !dob || !mobile){
        res.status(400);
        throw new Error('Please enter all fields');
    }

     const staffExists = await Staff.findOne({email});
     if(staffExists){
        res.status(400);
        throw new Error('This staff is exists');
     }
     else{
        try {
            const newStaff = new Staff({
                empID,
                empName,
                nic,
                address,
                email,
                dob,
                mobile,
            });
            await newStaff.save();
            res.status(201).json(newStaff);
        } catch (error) {
            console.log('Failed to insert data',error);
            res.status(500).json({error:'Failed to insert data'});
        }

     }
});

const updateStaff = asyncHandler(async(req,res) =>{
    const empID = req.params.empID;
    const{empName,nic,address,email,dob,mobile} = req.body;

    try {
        const updateStaff = await Staff.findOneAndUpdate({empID},{empName,nic,address,email,dob,mobile},{new:true});
        if(!updateStaff){
            res.status(404).json({error:'Staff can not find'});   
        }

        res.status(200).json({message:'Staff data updated successfully'});
    } catch (error) {
        console.log('Failed to update data');
        res.status(500).json({error:'Failed to update data'});

    }
});

const deleteStaff = asyncHandler(async(req,res) =>{
    const empID = req.params.empID;
    try {
        const deleteStaff = await Staff.findOneAndDelete({empID});
        if(!deleteStaff){
            res.status(404).json({error:'Staff can not find'});
        }
        res.status(200).json({message:'Data deleted successfully'});
    } catch (error) {
        console.log('Failed to delete data');
        res.status(500).json({error:'Failed to delete data'});
    }
})

module.exports = {registerstaff , updateStaff, deleteStaff};