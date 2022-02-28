const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const aviariosController = require('../controllers/aviariosController');

router.get('/', aviariosController.getAviarios);
router.get('/:aviarioId', aviariosController.getOneAviario);
router.post('/', login.required, aviariosController.postAviario);
router.patch('/', login.required, aviariosController.updateAviario);
router.delete('/', login.required, aviariosController.deleteAviario);

module.exports = router;