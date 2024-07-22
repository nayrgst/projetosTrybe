const { Router } = require('express');
const userController = require('../controllers/userController');

const userRoute = Router();

userRoute.post('/', userController.user);
userRoute.get('/', userController.listAll);
userRoute.get('/:id', userController.listById);

module.exports = userRoute;