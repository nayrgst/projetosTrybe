const { Router } = require('express');
const saleController = require('../controllers/salesControllers');

const saleRouter = Router();

saleRouter.post('/', saleController.registerProduct);
saleRouter.get('/', saleController.listAllProducts);
saleRouter.get('/:id', saleController.listProductById);

module.exports = saleRouter;