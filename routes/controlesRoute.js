const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const controlesController = require('../controllers/controlesController');

router.get('/', controlesController.getControles);
router.get('/:controleId', controlesController.getOneControle);
router.post('/', login.required, controlesController.postControle);
router.patch('/', login.required, controlesController.updateControle);
router.delete('/', login.required, controlesController.deleteControle);

module.exports = router;