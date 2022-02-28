const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const lotesController = require('../controllers/lotesController');

router.get('/', lotesController.getLotes);
router.get('/:loteId', lotesController.getOneLote);
router.post('/', login.required, lotesController.postLote);
router.patch('/', login.required, lotesController.updateLote);
router.delete('/', login.required, lotesController.deleteLote);

module.exports = router;