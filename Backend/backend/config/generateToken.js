const jwt = require('jsonwebtoken')

const generateToken = (id) =>{
    const JWT_SECRET = 'manuss';
    return jwt.sign({id},JWT_SECRET,{
        expiresIn:"30d",
    });
};

module.exports = generateToken