const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const categoriesController = require('../controllers/categoriesController');

router.get('/', categoriesController.getCategories);
router.get('/:productId', categoriesController.getOneCategory);
router.post('/', login.required, categoriesController.postCategory);
router.patch('/', login.required, categoriesController.updateCategory);
router.delete('/', login.required, categoriesController.deleteCategory);

module.exports = router;