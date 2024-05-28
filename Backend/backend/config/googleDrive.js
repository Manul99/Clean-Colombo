const { google } = require('googleapis');
const { client_id, client_secret, redirect_uris } = require('./client_secret_925647457553-3c1nb41si9ohi3or54e2hbh7t3n5uu54.apps.googleusercontent.com.json').web;

const oauth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

const drive = google.drive({ version: 'v3', auth: oauth2Client });

module.exports = drive;

const fs = require('fs');
const Plant = require('../models/plantModel');
const { google } = require('googleapis');

// Replace with your Google Drive API credentials
const auth = new google.auth.GoogleAuth({
    keyFile: '',
    scopes: ['https://www.googleapis.com/auth/drive'],
  });
/*
  const drive = google.drive({ version: 'v3', auth });

  async function uploadImage(req, res) {
    try {
      const { name, description, aisle } = req.body;
  
      const fileMetadata = {
        name: req.file.originalname,
      };
  
      const media = {
        mimeType: req.file.mimetype,
        body: require('fs').createReadStream(req.file.path),
      };
  s
      const response = await drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id, webViewLink', // Include 'id' in the fields to get the fileId
      });
  
      const fileId = response.data.id;
  
      // Update the file permissions to allow anyone with the link to view
        await drive.permissions.create({
        fileId: fileId,
        requestBody: {
          role: 'reader',
          type: 'anyone',
        },
      });

      const plantImage = response.data.webViewLink;
  
      const newPlant = new Plant({
        name,
        description,
        aisle,
        plantImage,
      });
  
      await newPlant.save();
  
      res.json({ plantImage });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to upload image.' });
    }
  }
  

  const getPlantsByAisle = async (req, res) => {
    const { aisle } = req.params;
  
    try {
      const plants = await Plant.find({ aisle: aisle });
      // Map the plants array to include only the required fields (name, description, aisle, and imageUrl)
      const plantsWithPlantImage = plants.map((plant) => ({
        name: plant.name,
        description: plant.description,
        aisle: plant.aisle,
        plantImage: plant.plantImage, // Include the imageUrl (plantImage) in the response
      }));
      res.json(plantsWithPlantImage);
    } catch (error) {
      console.error('Error retrieving plants:', error);
      res.status(500).json({ message: 'Failed to retrieve plants.' });
    }
  };
module.exports = { uploadImage, getPlantsByAisle };
*/