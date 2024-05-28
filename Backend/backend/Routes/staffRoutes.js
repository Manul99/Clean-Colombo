const express = require('express');
const { registerstaff, updateStaff, deleteStaff } = require('../controllers/staffcontrollers');
const router = express.Router()

router.post('/',registerstaff);
router.put('/:empID',updateStaff);
router.delete('/:empID',deleteStaff);
module.exports = router;

