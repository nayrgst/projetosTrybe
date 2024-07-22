import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MainModel from './models';

const carSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

export default class CarModel extends MainModel<ICar> {
  constructor(model = mongooseCreateModel('Car', carSchema)) {
    super(model);
  }
}
