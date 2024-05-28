const asynHandler = require('express-async-handler');
const Member = require('../Models/GTFmembers');
const generateToken = require('../config/generateToken');

const registerMember = asynHandler(async(req, res) =>{
    const {fname,lname,mobile,username,email,password} = req.body;

    // Checking all the fields are compelted
    if(!fname || !lname || !mobile || !username || !email || !password){
        res.status(400);
        throw new Error("Please enter all the fields");
    }
    //Checing the member is exists or not using member email
    const memberExists = await Member.findOne({email});

    if(memberExists){
        res.status(400);
        throw new Error("This member is alreadt exists");
    }
    else{
    //If there isn't member this will create a new memeber
    const newmember = await Member.create({
        fname,
        lname,
        mobile,
        username,
        email,
        password,
    });

    if(newmember){
        res.status(201).json({
            _id:newmember._id,
            fname: newmember.fname,
            lname:newmember.lname,
            mobile:newmember.mobile,
            username:newmember.username,
            email:newmember.email,
            token:generateToken(newmember._id),
        })
    }
    else{
        res.status(400);
        throw new Error("Failed to create the member");
    }

}
});

const authMember = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const member = await Member.findOne({ username });
  
      if (member && (await member.matchPassword(password))) {
        res.json({
          _id: member._id,
          fname: member.fname,
          lname: member.lname,
          mobile: member.mobile,
          username: member.username,
          email: member.email,
          token: generateToken(member._id),
        });
      } else {
        res.status(401).json({ error: 'Invalid username or password' });
      }
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'An error occurred during login' });
    }
  };
  


const forgotPassword = asynHandler(async(req,res) =>{
  const email = req.params.email;
  const {password} = req.body;

  try {
    const forgotPassword = await Member.findOneAndUpdate({email},{password},{new:true});
    res.status(200).json({message:'Password changed'});
  } catch (error) {
    console.log('Failed to change password');
    res.status(500).json({error:'Failed to change the password'});
  }
})

module.exports = {registerMember, authMember,forgotPassword}

