import { Router } from 'express';
import orderController from '../controllers/ordersControllers';

const userRouter = Router();

userRouter.get('/', orderController.listAllOrders);

export default userRouter;