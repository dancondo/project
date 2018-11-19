const express = require('express');
const adminProductsController = require('../../controllers/admin/admin_products_controller');

const router = express.Router();

// Default Routing
router.get('/new', adminProductsController.new)
router.post('/', adminProductsController.create);
router.get('/:id/edit', adminProductsController.edit);

// The Routes should like this: 
// router.post('/:id', adminProductsController.update);
// router.put('/:id', adminProductsController.update);
// router.delete('/:id', adminProductsController.destroy);


// But they will look like this due to the hassle of doing put/ patch/ delete method with raw html 
router.post('/:id/update', adminProductsController.update)
router.post('/:id/destroy', adminProductsController.destroy)


module.exports = router; 