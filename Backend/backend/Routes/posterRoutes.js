const express = require('express');
const {  getPoster, submitPoster, updatePoster, deletePost } = require('../controllers/postercontrollers');
const multer = require('multer');
const upload = multer();
const router = express.Router();

router.post('/',upload.single('image'),submitPoster);
router.put('/:posterID',updatePoster);
router.delete('/:posterID',deletePost);
router.get('/',getPoster);

module.exports = router;