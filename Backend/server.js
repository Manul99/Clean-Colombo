const express = require('express')
const connectDB = require('./backend/config/db')
const cors = require('cors');
const memberRoutes = require('./backend/Routes/MemeberRoutes');
const captainRoutes = require('./backend/Routes/captainRoutes');
const reportRoutes = require('./backend/Routes/reportRoutes');
const staffRoutes = require('./backend/Routes/staffRoutes');
const posterRoutes = require('./backend/Routes/posterRoutes');
const contactusRoutes = require('./backend/Routes/contactusRoutes');
const garbageRoutes = require('./backend/Routes/garbageRoutes');
const bodyParser = require('body-parser');

const app = express()

connectDB();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());




app.use('/api/members',cors(),memberRoutes);
app.use('/api/captain',cors(),captainRoutes);
app.use('/api/reports',cors(),reportRoutes);
app.use('/api/staff',cors(),staffRoutes);
app.use('/api/posters',cors(),posterRoutes);
app.use('/api/contactus',cors(),contactusRoutes);
app.use('/api/garbage',cors(),garbageRoutes);


const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Server is running on ${port}...`))