const express = require('express');
const { registerMember, authMember, forgotPassword } = require('../controllers/membercontrollers');

const router = express.Router();

router.post('/',registerMember);
router.post('/login',authMember);
router.put('/:gtfID',forgotPassword);
module.exports = router;
