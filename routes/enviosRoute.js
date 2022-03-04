const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const enviosController = require('../controllers/enviosController');

router.get('/', enviosController.getEnvios);
router.get('/:envioId', enviosController.getOneEnvio);
router.post('/', login.required, enviosController.postEnvio);
router.patch('/', login.required, enviosController.updateEnvio);
router.delete('/', login.required, enviosController.deleteEnvio);

module.exports = router;