import { Request, Response } from 'express';
import ErrorHttp from '../utils/utils';
import TeamServices from '../services/teamServices';

const teamControllers = {
  async listAll(_req: Request, res: Response) {
    const items = await TeamServices.listAll();
    res.json(items);
  },

  async listById(req: Request, res: Response) {
    const { id } = req.params;
    const team = await TeamServices.listById(Number(id));
    if (!team) throw new ErrorHttp('invalid team or does not exist', 401);
    res.json(team);
  },
};

export default teamControllers;
