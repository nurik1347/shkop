const express = require('express');
const router = express.Router();
const { createUser, getUsers, updateUser, deleteUser, getUserById } = require('../controllers/UserController');

router.post('/create', createUser);

router.get('/', getUsers);

router.get('/:id', getUserById);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;
