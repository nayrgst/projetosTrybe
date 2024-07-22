import { Router } from 'express';
import teamControllers from '../controllers/teamControllers';

const teamRoute = Router();

teamRoute.get('/', teamControllers.listAll);
teamRoute.get('/:id', teamControllers.listById);

export default teamRoute;
