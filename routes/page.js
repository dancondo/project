const express = require('express');
const pagesController = require('../controllers/pages_controller');

const router = express.Router();
router.get('/', pagesController.home);
router.use('/', pagesController.notFound);

module.exports = router;