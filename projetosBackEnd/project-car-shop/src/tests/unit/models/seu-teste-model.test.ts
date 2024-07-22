import * as chai from "chai";
import * as sinon from 'sinon'
import CarModel from "../../../models/carModels";
import { Model } from "mongoose";
import { mockCar, mockDelete, mockUpdate } from "./Mocks/MockModel";

const CarModels = new CarModel();

describe('carModels.ts', () => {
  before(() => {
    sinon.stub(Model, 'create').resolves(mockCar);
    sinon.stub(Model, 'find').resolves([mockCar]);
    sinon.stub(Model, 'findOne').resolves(mockCar)
    sinon.stub(Model, 'findByIdAndUpdate').resolves(mockUpdate)
    sinon.stub(Model, 'deleteOne').resolves(mockDelete)
  })
  after(() => { sinon.restore() })

  it('Verifica se a função create funciona corretamente', async () => {
    const createCar = await CarModels.create(mockCar);
    chai.expect(createCar).to.equal(mockCar)
  })

  it('Verifica se a função read funciona corretamente', async () => {
    const listAllCars = await CarModels.read();
    chai.expect(listAllCars).to.be.deep.equal([mockCar])
  })

  it('Verifica se a função readOne funciona corretamente', async () => {
    const listOneCar = await CarModels.readOne(mockCar._id)
    chai.expect(listOneCar).to.equal(mockCar)
  })

  it('Verifica se a função update funciona corretamente', async () => {
    const updateCar = await CarModels.update(mockCar._id, mockUpdate)
    chai.expect(updateCar).to.equal(mockUpdate)
  })

  it('Verifica se a função delete funciona corretamente', async () => {
    const del = await CarModels.delete(mockCar._id)
    chai.expect(del).to.equal(mockDelete)
  })

})