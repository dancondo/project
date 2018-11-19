const express = require('express');
const rootDir = require('../../util/path');
const adminProductsController = require('../../controllers/admin/admin_products_controller');

const router = express.Router();
router.get('/new', adminProductsController.new)
router.post('/', adminProductsController.create);
router.get('/:id/edit', adminProductsController.edit);
router.post('/:id', adminProductsController.update);
router.put('/:id', adminProductsController.update);
router.delete('/:id', adminProductsController.destroy);

module.exports = router; 