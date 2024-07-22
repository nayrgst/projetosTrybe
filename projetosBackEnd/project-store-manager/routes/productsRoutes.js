const { Router } = require('express');
const productController = require('../controllers/productsControllers');

const productRouter = Router();

productRouter.get('/', productController.listAllProducts);
productRouter.get('/:id', productController.listProductById);
productRouter.post('/', productController.registerProduct);

module.exports = productRouter;