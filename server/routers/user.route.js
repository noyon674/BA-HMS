const express = require('express');
const { createUser, getAllUsers } = require('../controllers/user.controller');
const { authenticate, authorize } = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/create-user', authenticate, authorize('admin'), createUser);
router.get('/get-user', authenticate, authorize('admin'), getAllUsers);

module.exports = router;
