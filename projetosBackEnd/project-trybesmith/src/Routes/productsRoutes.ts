import { Router } from 'express';
import productController from '../controllers/productsControllers';

const productRouter = Router();

productRouter.post('/', productController.registerProduct);
productRouter.get('/', productController.listAllProducts);

export default productRouter;