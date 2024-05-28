const express = require('express');
const { uploadImage, updateReport, deleteReport, getReport } = require('../controllers/reportcontrollers');
const router = express.Router();
const multer = require('multer');
const upload = multer();


router.post('/', upload.single('image'), uploadImage);
router.put('/:reportid',updateReport);
router.delete('/:reportid',deleteReport);
router.get('/',getReport);
    

module.exports = router;