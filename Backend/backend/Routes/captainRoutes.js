const express  = require('express');
const { registercaptain, updatecaptain, deletecaptain } = require('../controllers/captaincontrollers');

const router = express.Router();

router.post('/',registercaptain)
router.put('/:captainID',updatecaptain)
router.delete('/:captainID',deletecaptain)

module.exports = router;