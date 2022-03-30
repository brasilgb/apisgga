const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const emailsController = require('../controllers/emailsController');

router.get('/', emailsController.getEmails);
router.get('/:emailId', emailsController.getOneEmail);
router.post('/', login.required, emailsController.postEmail);
router.patch('/', login.required, emailsController.updateEmail);
router.delete('/', login.required, emailsController.deleteEmail);

module.exports = router;