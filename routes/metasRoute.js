const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const metasController = require('../controllers/metasController');

router.get('/', metasController.getMetas);
router.get('/:metaId', metasController.getOneMeta);
router.post('/', login.required, metasController.postMeta);
router.patch('/', login.required, metasController.updateMeta);
router.delete('/', login.required, metasController.deleteMeta);

module.exports = router;