import { Router } from 'express';
import leaderboardController from '../controllers/leaderboardControllers';

const leaderRoute = Router();

leaderRoute.get('/home', leaderboardController.listResults);

export default leaderRoute;
