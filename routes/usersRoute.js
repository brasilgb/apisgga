const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/', usersController.getUsers);
router.get('/:userId', usersController.getOneUser);
router.post('/', usersController.postUser);
router.patch('/', usersController.updateUser);
router.delete('/', usersController.deleteUser);
router.post('/login', usersController.Login);

module.exports = router;