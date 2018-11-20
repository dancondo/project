const express = require('express');
const cartsController = require('../controllers/carts_controller');

const router = express.Router();
router.get('/', cartsController.index);

module.exports = router;