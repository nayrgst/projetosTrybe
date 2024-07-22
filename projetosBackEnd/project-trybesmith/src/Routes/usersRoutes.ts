import { Router } from 'express';
import userController from '../controllers/usersControllers';

const userRouter = Router();

userRouter.post('/', userController.resgisterUser);

export default userRouter;