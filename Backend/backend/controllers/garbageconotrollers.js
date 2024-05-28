const asyncHandler = require('express-async-handler');
const { google } = require('googleapis');
const Garbage = require('../Models/Garbage');


const auth = new google.auth.GoogleAuth({
  keyFile: `${__dirname}/cmcimage-5778d22b3f99.json`,
  scopes: ['https://www.googleapis.com/auth/drive'],
});

const drive = google.drive({version:'v3', auth});

async function submitGarbage(req,res){
    try {
        const { titleid,title, location } = req.body;
    
        const fileMetadata = {
          name: req.file.originalname,
        };
    
        const media = {
          mimeType: req.file.mimetype,
          body: req.file.stream, // Use req.file.stream instead of creating a new stream
        };
    
        const response = await drive.files.create({
          resource: fileMetadata,
          media: media,
          fields: 'id, webViewLink',
        });
    
        const fileId = response.data.id;
        const imageLink = response.data.webViewLink; // Google Drive image link
    
        const newGarbage = new Garbage({
          titleid,
          title,// Store the Google Drive image link in MongoDB
          image: imageLink,
          location,
        });
    
        await newGarbage.save();
    
        res.json({ image: imageLink });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to upload image.' });
      }
    }
const updateGarbage = asyncHandler(async(req,res) =>{
    const titleid = req.params.titleid;
  const{title,image,location} = req.body;

  try {
    const fileMetadata = {
      name:image.originalname,
    };

    const media = {
      mimeType:image.mimetype,
      body:image.stream,
    };

    const response = await drive.files.create({
      resource:fileMetadata,
      media:media,
      fields:'id, webViewLink',
    });

    const fileId = response.data.id;
    const imageLink = response.data.webViewLink;

    const updateGarbage = {
      title,
      image: imageLink,
      location,
    }
    await Garbage.findOneAndUpdate({titleid},updateGarbage,{new:true});
    res.status(200).json({message:'Data update succefully'});
  } catch (error) {
     console.error('Failed to update data',error);
     res.status(500).json({error:'Fail to update data'});
  }
})

const deleteGarbage = asyncHandler(async(req,res) =>{
    const titleid = req.params.titleid;
    try {
        const deleteGarbage = await Garbage.findOneAndDelete({titleid});
        res.status(200).json({message:'Data deleted successfully'});
    } catch (error) {
        console.log('Fail to delete data');
        res.status(500).json({message:'Fail to delete data'});
    }
})

const getGarbage = asyncHandler(async(req,res) =>{
  try {
    const getGarbage = await Garbage.find();
    res.status(200).json(getGarbage);

  } catch (error) {
    console.log('Failed to fetch data');
    res.status(500).json({error:'Failed to fetch data'});
  }
})
module.exports = {submitGarbage,updateGarbage,deleteGarbage,getGarbage};