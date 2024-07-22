import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
import ErrorHttp, { ErrorTypes } from '../utils/utils';
import { IModel } from '../interfaces/IModel';

abstract class MainModel<T> implements IModel<T> {
  protected _model: Model<T>;
  constructor(model: Model<T>) { this._model = model; }
  
  public async create(obj: T): Promise<T> {
    const create = await this._model.create(obj);
    return create;
  }
  
  public async read(): Promise<T[]> {
    const listAll = await this._model.find();
    return listAll;
  }
  
  public async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new ErrorHttp(ErrorTypes.MongoId, 400);
    
    const listByOne = await this._model.findOne({ _id });
    return listByOne;
  }
  
  public async update(_id: string, payload: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new ErrorHttp(ErrorTypes.MongoId, 400);
    const update = await this._model.findByIdAndUpdate(
      { _id },
      { ...payload } as UpdateQuery<T>,
      { new: true },
    );

    if (!update) return null;
    return update as T;
  }
  public async delete(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new ErrorHttp(ErrorTypes.MongoId, 400);

    const del = await this._model.deleteOne({ _id });
    return del as unknown as T; 
  }
}

export default MainModel;