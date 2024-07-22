const { Router } = require('express');
const categoryController = require('../controllers/categoryController');

const categoryRoute = Router();

categoryRoute.post('/', categoryController.category);
categoryRoute.get('/', categoryController.listAll);

module.exports = categoryRoute;