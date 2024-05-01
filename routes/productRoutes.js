const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const checkPermission = require('../middleware/permissionMiddleware');

router.get('/', checkPermission('view_product'), productController.getAllProducts);
router.post('/create', checkPermission('create_product'), productController.createProduct);
router.put('/:productId', checkPermission('update_product'), productController.updateProduct);
router.delete('/:productId', checkPermission('delete_product'), productController.deleteProduct);

module.exports = router;

