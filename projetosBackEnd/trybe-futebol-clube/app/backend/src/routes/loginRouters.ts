import { Router } from 'express';
import loginController from '../controllers/loginControllers';

const loginRoute = Router();

loginRoute.post('/', loginController.login);
loginRoute.get('/validate', loginController.validationLogin);

export default loginRoute;
