const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const recebimentosController = require('../controllers/recebimentosController');

router.get('/', recebimentosController.getRecebimentos);
router.get('/:recebimentoId', recebimentosController.getOneRecebimento);
router.post('/', login.required, recebimentosController.postRecebimento);
router.patch('/', login.required, recebimentosController.updateRecebimento);
router.delete('/', login.required, recebimentosController.deleteRecebimento);

module.exports = router;