const express = require('express');
const rootDir = require('../../util/path');
const adminProductsController = require('../../controllers/admin/admin_products_controller');

const router = express.Router();
router.get('/new', adminProductsController.new)
router.post('/create', adminProductsController.create);
router.get('/:id/edit', adminProductsController.edit);

module.exports = router; 