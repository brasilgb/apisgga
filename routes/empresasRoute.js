const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const empresasController = require('../controllers/empresasController');

router.get('/', empresasController.getEmpresas);
router.get('/:empresaId', empresasController.getOneEmpresa);
router.post('/', login.required, empresasController.postEmpresa);
router.patch('/', login.required, empresasController.updateEmpresa);
router.delete('/', login.required, empresasController.deleteEmpresa);

module.exports = router;