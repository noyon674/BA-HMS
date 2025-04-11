const express = require('express');
const { createStaff } = require('../controllers/staff.controller');
const router = express.Router();

router.post('/staff', createStaff);

module.exports = router;
