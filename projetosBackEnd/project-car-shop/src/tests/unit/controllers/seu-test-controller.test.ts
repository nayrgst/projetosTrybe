import Sinon,* as sinon from 'sinon'
import * as chai from 'chai'
import { Request, Response } from 'express'
import CarModel from '../../../models/carModels'
import CarService from '../../../services/carServices'
import CarController from '../../../controllers/carControllers'
import { mockCar, mockUpdate } from '../models/Mocks/MockModel'

const req = {} as Request;
const res = {} as Response;
const CarModels = new CarModel();
const CarServices = new CarService(CarModels);
const CarControllers = new CarController(CarServices);

describe('CarController.ts', () => {
  beforeEach(() => {
    sinon.restore
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  it('Verifica se a função create funciona corretamente', async () => {
    req.body = mockCar;
    sinon.stub(CarServices, 'create').resolves(mockCar)
    await CarControllers.create(req, res)
    const resStatus = res.status as sinon.SinonStub
    const resJson = res.json as sinon.SinonStub
    //https://sinonjs.org/releases/latest/assertions/
    chai.expect(resStatus.calledWith(201)).to.be.true
    chai.expect(resJson.calledWith(mockCar)).to.be.true
  })
})