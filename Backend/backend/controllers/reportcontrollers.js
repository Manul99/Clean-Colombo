const asyncHandler = require('express-async-handler');
const Report = require('../Models/report');
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const { response } = require('express');



// const keyFile = require('../cmcimage-5778d22b3f99.json')

const auth = new google.auth.GoogleAuth({
  keyFile: `${__dirname}/cmcimage-5778d22b3f99.json`,
  scopes: ['https://www.googleapis.com/auth/drive'],
});

const drive = google.drive({ version: 'v3', auth });

async function uploadImage(req, res) {
  try {
    const { reportid, impact, location } = req.body;

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

    const newReport = new Report({
      reportid,
      image: imageLink, // Store the Google Drive image link in MongoDB
      impact,
      location,
    });

    await newReport.save();

    res.json({ image: imageLink });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to upload image.' });
  }
}

//Update data
const updateReport = asyncHandler(async(req,res) =>{
  const reportid = req.params.reportid;
  const{image,impact,location} = req.body;

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

    const updateReportData = {
      image: imageLink,
      impact,
      location,
    }
    await Report.findOneAndUpdate({reportid},updateReportData,{new:true});
    res.status(200).json({message:'Data update succefully'});
  } catch (error) {
     console.error('Failed to update data',error);
     res.status(500).json({error:'Fail to update data'});
  }
});

//Delete data
const deleteReport = asyncHandler(async(req,res) =>{
  const reportid = req.params.reportid;
  try {
    const deleteReport = await Report.findOneAndUpdate({reportid});
    res.status(200).json({message:'Data succefully'});
  } catch (error) {
    console.log('Fail to delete data');
    res.status(500).json({error:'Fail to delete data'});
  }
})

const getReport = asyncHandler(async(req,res) =>{
  await drive.permissions.create({
    fileId: fileId,
    requestBody: {
      role: 'reader',
      type: 'anyone',
    },
  });
  
  try {
    const reports = await Report.find(); // Fetch all reports from MongoDB
    res.json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch reports.' });
  }
})


module.exports = { uploadImage , updateReport , deleteReport , getReport };
