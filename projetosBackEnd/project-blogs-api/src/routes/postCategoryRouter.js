const { Router } = require('express');
const postCategoryController = require('../controllers/postCategoryController');

const postCategoryRoute = Router();

postCategoryRoute.post('/', postCategoryController.post);
postCategoryRoute.get('/', postCategoryController.listAll);

module.exports = postCategoryRoute;