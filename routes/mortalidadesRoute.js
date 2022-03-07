const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const mortalidadesController = require('../controllers/mortalidadesController');

router.get('/', mortalidadesController.getMortalidades);
router.get('/:mortalidadeId', mortalidadesController.getOneMortalidade);
router.post('/', login.required, mortalidadesController.postMortalidade);
router.patch('/', login.required, mortalidadesController.updateMortalidade);
router.delete('/', login.required, mortalidadesController.deleteMortalidade);

module.exports = router;