const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const despesasController = require('../controllers/despesasController');

router.get('/', despesasController.getDespesas);
router.get('/:despesaId', despesasController.getOneDespesa);
router.post('/', login.required, despesasController.postDespesa);
router.patch('/', login.required, despesasController.updateDespesa);
router.delete('/', login.required, despesasController.deleteDespesa);

module.exports = router;