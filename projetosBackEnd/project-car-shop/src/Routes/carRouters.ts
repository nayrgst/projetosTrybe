import { Router } from 'express';
import CarModel from '../models/carModels';
import CarService from '../services/carServices';
import CarController from '../controllers/carControllers';

const route = Router();

const Car = new CarModel();
const carService = new CarService(Car);
const carController = new CarController(carService);

route.post('/cars', (req, res) => carController.create(req, res));
route.get('/cars', (req, res) => carController.read(req, res));
  
export default route;