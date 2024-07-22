import { Request, Response } from 'express';
import authService from '../services/authServices';
import matchService from '../services/matcheServices';
import ErrorHttp from '../utils/utils';

const matchController = {
  async listAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (inProgress) {
      const progress = inProgress === 'true';
      const result = await matchService.listInProgress(progress);
      return res.json(result);
    }
    const result = await matchService.listAll();
    res.json(result);
  },

  async postMatch(req: Request, res: Response) {
    const { body } = req;
    const token = req.headers.authorization;
    if (!token) throw new ErrorHttp('Token invalid or missing', 401);
    authService.validationToken(token);
    await matchService.singleMatch(body);
    const result = await matchService.postMatch(body);
    res.status(201).json(result);
  },

  async finishPatch(req: Request, res: Response) {
    const { id } = req.params;
    await matchService.finishPatch(Number(id));
    res.json({ message: 'Finished' });
  },

  async updateMatches(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;
    await matchService.updateMatches(Number(id), body);
    res.json({ message: 'updated' });
  },
};

export default matchController;
