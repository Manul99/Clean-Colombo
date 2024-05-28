const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        const MOGONGO_URI = `mongodb+srv://manulperera5:Manu19990305@cluster0.cbbcvpm.mongodb.net/cmcProject`
    const con = await mongoose.connect(MOGONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });

    console.log(`MongoDB connected ${con.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error}`);
        process.exit();
    }
}

module.exports = connectDB;