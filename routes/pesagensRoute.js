const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const pesagensController = require('../controllers/pesagensController');

router.get('/', pesagensController.getPesagens);
router.get('/:pesagemId', pesagensController.getOnePesagem);
router.post('/', login.required, pesagensController.postPesagem);
router.patch('/', login.required, pesagensController.updatePesagem);
router.delete('/', login.required, pesagensController.deletePesagem);

module.exports = router;