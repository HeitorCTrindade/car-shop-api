import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import { 
  inputMotorcycle1, outputMotorcycle1, outputMotorcyclesArray } from './mocks/Motorcycle.mock';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Motorcycle Service unit test', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Should be add a Motorcycle1 with sucess', async function () {
    sinon.stub(Model, 'create').resolves(outputMotorcycle1);
    const service = new MotorcycleService();
    const result = await service.addMotorcycle(inputMotorcycle1);
    expect(result).to.be.deep.equal(outputMotorcycle1);
  });

  it('Should be ocurred error in add a Motorcycle1', async function () {
    sinon.stub(Model, 'create').resolves(null);
    const service = new MotorcycleService();
    const result = await service.addMotorcycle(inputMotorcycle1);
    expect(result).to.be.deep.equal(null);
  });

  it('Should be get a Motorcycle by id', async function () {
    sinon.stub(Model, 'findById').resolves(outputMotorcycle1);
    const service = new MotorcycleService();
    const result = await service.getMotorcycleById('6348513f34c397abcad040b2');
    expect(result).to.be.deep.equal(outputMotorcycle1);
  });

  it('Should be get all Motorcycles', async function () {
    sinon.stub(Model, 'find').resolves(outputMotorcyclesArray);
    const service = new MotorcycleService();
    const result = await service.getAllMotorcycles();
    expect(result).to.be.deep.equal(outputMotorcyclesArray);
  });
});