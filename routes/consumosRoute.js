const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const consumosController = require('../controllers/consumosController');

router.get('/', consumosController.getConsumos);
router.get('/:consumoId', consumosController.getOneConsumo);
router.post('/', login.required, consumosController.postConsumo);
router.patch('/', login.required, consumosController.updateConsumo);
router.delete('/', login.required, consumosController.deleteConsumo);

module.exports = router;