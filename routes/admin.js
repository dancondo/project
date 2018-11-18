const express = require('express');
const rootDir = require('../util/path');
const adminsController = require('../controllers/admins_controller');

const router = express.Router();
router.get('/', adminsController.index)

module.exports = router; 