const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const entradasController = require('../controllers/entradasController');

router.get('/', entradasController.getEntradas);
router.get('/:entradaId', entradasController.getOneEntrada);
router.post('/', login.required, entradasController.postEntrada);
router.patch('/', login.required, entradasController.updateEntrada);
router.delete('/', login.required, entradasController.deleteEntrada);

module.exports = router;