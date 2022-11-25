const express = require('express');
const upload = require('../../middlewares/upload.files');
const {isAuth} = require('../../middlewares/auth');

const {getAllUsers, getUsers, register, login, logout, putUsers, deleteUsers} = require('../controller/users.controllers');

const router = express.Router();



router.get('/', getAllUsers);
router.get('/:id', [isAuth], getUsers);
router.post('/register',upload.single('userImage'), register);
router.post('/login', login);
router.post('/logout', [isAuth], logout);
router.put('/:id', upload.single('userImage'), putUsers);
router.delete('/:id', deleteUsers);


module.exports = router; 