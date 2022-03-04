const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const coletasController = require('../controllers/coletasController');

router.get('/', coletasController.getColetas);
router.get('/:coletaId', coletasController.getOneColeta);
router.post('/', login.required, coletasController.postColeta);
router.patch('/', login.required, coletasController.updateColeta);
router.delete('/', login.required, coletasController.deleteColeta);

module.exports = router;