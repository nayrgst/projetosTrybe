import * as sinon from 'sinon'
import * as chai from 'chai'
import { mockCar, mockUpdate } from '../models/Mocks/MockModel'
import CarModel from '../../../models/carModels'
import CarService from '../../../services/carServices'

const CarModels = new CarModel();
const CarServices = new CarService(CarModels);

describe('carServices.ts', () => {
  beforeEach(sinon.restore);

  it('Verifica se a função create funciona corretamente', async () => {
    sinon.stub(CarModels, 'create').resolves(mockCar)
    const createCar = await CarServices.create(mockCar)
    chai.expect(createCar).to.equal(mockCar)
  })

  it('Verifica se a função read funciona corretamente', async () => {
    sinon.stub(CarModels, 'read').resolves([mockCar])
    const listAllCars = await CarServices.read()
    chai.expect(listAllCars).to.be.deep.equal([mockCar])
  })

  it('Verifica se a função readOne funciona corretamente', async () => {
    sinon.stub(CarModels, 'readOne').resolves(mockCar)
    const listOneCar = await CarServices.readOne(mockCar._id)
    chai.expect(listOneCar).to.equal(mockCar)
  })

  it('Verifica se a função update funciona corretamente', async () => {
    sinon.stub(CarModels, 'update').resolves(mockUpdate)
    const updateCar = await CarServices.update(mockCar._id, mockUpdate)
    chai.expect(updateCar).to.equal(mockUpdate)
  })

  it('Verifica se a função delete funciona corretamente', async () => {
    sinon.stub(CarModels, 'readOne').resolves(mockCar)
    sinon.stub(CarModels, 'delete').resolves(mockCar)
    const del = await CarServices.delete(mockCar._id)
    chai.expect(del).to.equal(mockCar);
  })
})

