import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';

export const inputMotorcycle1: IMotorcycle = {
  model: 'Honda CG Titan 125',
  year: 1983,
  color: 'Red',
  buyValue: 1000,
  category: 'Street',
  engineCapacity: 125,
};

export const outputMotorcycle1: IMotorcycle = {
  id: '6348513f34c397abcad040b2',
  model: 'Honda CG Titan 125',
  year: 1983,
  color: 'Red',
  status: true,
  buyValue: 1000,
  category: 'Street',
  engineCapacity: 125,
};

export const outputMotorcyclesArray: IMotorcycle[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];