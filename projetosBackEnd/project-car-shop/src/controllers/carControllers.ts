import { Request, Response } from 'express';
import CarService from '../services/carServices';
import ErrorHttp from '../utils/utils';

class CarController {
  constructor(private _service: CarService) {}

  public async create(req: Request, res: Response) {
    const { body } = req;
    const car = await this._service.create(body);
    if (!car) throw new ErrorHttp('Element not found', 400);
    res.status(201).json(car);
  }

  public async read(req: Request, res: Response) {
    const listAllCars = await this._service.read();
    res.json(listAllCars);
  }
}

export default CarController;