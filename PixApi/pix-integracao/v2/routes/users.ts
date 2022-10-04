const routerUser = require('express').Router();
const usersController = require('../controllers/UsersController');

routerUser.get('/users', usersController.index);

module.exports = routerUser;
