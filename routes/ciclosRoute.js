const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const ciclosController = require('../controllers/ciclosController');

router.get('/', ciclosController.getCiclos);
router.get('/:cicloId', ciclosController.getOneCiclo);
router.post('/', login.required, ciclosController.postCiclo);
router.patch('/', login.required, ciclosController.updateCiclo);
router.delete('/', login.required, ciclosController.deleteCiclo);

module.exports = router;