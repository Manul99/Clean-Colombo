const express = require('express');
const multer = require('multer');
const { submitGarbage, updateGarbage, deleteGarbage, getGarbage } = require('../controllers/garbageconotrollers');
const upload = multer();
const router = express.Router();

router.post('/',upload.single('image'),submitGarbage);
router.put('/:titleid',updateGarbage);
router.delete('/:titleid',deleteGarbage);
router.get('/',getGarbage);
module.exports = router;

