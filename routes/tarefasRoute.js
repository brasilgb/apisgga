const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const tarefasController = require('../controllers/tarefasController');

router.get('/', tarefasController.getTarefas);
router.get('/:tarefaId', tarefasController.getOneTarefa);
router.post('/', login.required, tarefasController.postTarefa);
router.patch('/', login.required, tarefasController.updateTarefa);
router.delete('/', login.required, tarefasController.deleteTarefa);

module.exports = router;