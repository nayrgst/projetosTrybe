import { ICar, carAttributes } from '../interfaces/ICar';
import ErrorHttp, { ErrorTypes } from '../utils/utils';
import { IModel } from '../interfaces/IModel';

class CarService {
  constructor(private _car: IModel<ICar>) { }

  public async create(obj: unknown): Promise<ICar> {
    const attributes = carAttributes.safeParse(obj);
    
    if (!attributes.success) throw attributes.error;
    const carAttribute = await this._car.create(attributes.data);
    return carAttribute;
  }

  public async read(): Promise<ICar[]> {
    const listAll = await this._car.read();
    return listAll;
  }

  public async readOne(_id: string): Promise<ICar> {
    const listByOne = await this._car.readOne(_id);
    
    if (!listByOne) throw new ErrorHttp(ErrorTypes.NotFound, 400);
    return listByOne;
  }

  public async update(_id: string, payload: unknown): Promise<ICar> {
    const attributes = carAttributes.safeParse(payload);
    
    if (!attributes.success) throw attributes.error;
    const update = await this._car.update(_id, attributes.data);
    
    if (!update) throw new ErrorHttp(ErrorTypes.NotFound, 400);
    return update;
  }

  public async delete(_id: string): Promise<ICar | null> {
    const listByOne = await this._car.readOne(_id);
    
    if (!listByOne) throw new ErrorHttp(ErrorTypes.NotFound, 400);
    return this._car.delete(_id);
  }
}

export default CarService;