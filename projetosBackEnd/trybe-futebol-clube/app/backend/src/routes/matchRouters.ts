import { Router } from 'express';
import matchController from '../controllers/matchControllers';

const matchRoute = Router();

matchRoute.get('/', matchController.listAll);
matchRoute.post('/', matchController.postMatch);
matchRoute.patch('/:id/finish', matchController.finishPatch);
matchRoute.patch('/:id', matchController.updateMatches);

export default matchRoute;
