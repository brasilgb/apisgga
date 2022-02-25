const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const productsController = require('../controllers/productsController');

router.get('/', productsController.getProducts);
router.get('/:productId', productsController.getOneProduct);
router.post('/', login.required, productsController.postProduct);
router.patch('/', login.required, productsController.updateProduct);
router.delete('/', login.required, productsController.deleteProduct);

module.exports = router;