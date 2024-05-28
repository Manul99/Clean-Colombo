const asynHandler = require('express-async-handler');
const Poster = require('../Models/poster');
const { google } = require('googleapis');

const auth = new google.auth.GoogleAuth({
  keyFile: `${__dirname}/cmcimage-5778d22b3f99.json`,
  scopes: ['https://www.googleapis.com/auth/drive'],
});

const drive = google.drive({ version: 'v3', auth });




async function submitPoster(req, res) {
  try {
    const { posterID } = req.body;

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

    const newPoster = new Poster({
      posterID,
      image: imageLink, // Store the Google Drive image link in MongoDB
     
    });

    await newPoster.save();

    res.json({ image: imageLink });

  } catch (error) {
    console.log(error);
    res.status(500).json({error:'Failed to insert data'});
  }
}

// Update poster
const updatePoster = asynHandler(async(req,res) =>{
   const posterID = req.params.posterID;
   const {image} = req.body;

   try {
    const fileMetadata = {
      name:image.originalname,
    };

    const media ={
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

    const updatePoster = {
      image:imageLink,
    };

    await Poster.findOneAndUpdate({posterID},updatePoster,{new:true});
    res.status(200).json({message:'Data updated successfully'});
   } catch (error) {
     console.log('Failed to update data');
     res.status(500).json({error:'Fail to update data'});
   }
})

//Delete post
const deletePost = asynHandler(async(req,res) =>{
  const posterID = req.params.posterID;
  try {
    const deletePoster = await Poster.findOneAndDelete({posterID});
    res.status(200).json({message:'Data deleted succefully'});
  } catch (error) {
    console.log('Fail to delete data');
    res.status(500).json({error:'Fail to delete data'});
  }
})

const getPoster = asynHandler(async(req,res) =>{
  await drive.permissions.create({
    fileId: fileId,
    requestBody: {
      role: 'reader',
      type: 'anyone',
    },
  });
  
   try {
    const poster = await Poster.find()
    res.status(200).send(poster)
   } catch (error) {
    console.log(error)
    res.status(500).send(error);
   }
});

module.exports = {submitPoster,updatePoster,deletePost,getPoster};