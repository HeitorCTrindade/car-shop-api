import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import { inputCar1, inputCar2, outputCar1, outputCar2, outputCarsArray } from './mocks/Car.mock';
import CarService from '../../../src/Services/CarService';

describe('Car Service unit test', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Should be add a Car1 with sucess', async function () {
    sinon.stub(Model, 'create').resolves(outputCar1);
    const service = new CarService();
    const result = await service.addCar(inputCar1);
    expect(result).to.be.deep.equal(outputCar1);
  });

  it('Should be add a Car2 with sucess', async function () {
    sinon.stub(Model, 'create').resolves(outputCar2);
    const service = new CarService();
    const result = await service.addCar(inputCar2);
    expect(result).to.be.deep.equal(outputCar2);
  });

  it('Should be ocurred error in add a Car1', async function () {
    sinon.stub(Model, 'create').resolves(null);
    const service = new CarService();
    const result = await service.addCar(inputCar1);
    expect(result).to.be.deep.equal(null);
  });

  it('Should be get a Car by id', async function () {
    sinon.stub(Model, 'findById').resolves(outputCar1);
    const service = new CarService();
    const result = await service.getCarById('6348513f34c397abcad040b2');
    expect(result).to.be.deep.equal(outputCar1);
  });

  it('Should be get all Cars', async function () {
    sinon.stub(Model, 'find').resolves(outputCarsArray);
    const service = new CarService();
    const result = await service.getAllCars();
    expect(result).to.be.deep.equal(outputCarsArray);
  });
});