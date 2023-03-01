import ICar from '../../../../src/Interfaces/ICar';

export const inputCar1: ICar = {
  model: 'Uno da Escada',
  year: 1960,
  color: 'Red',
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const inputCar2: ICar = {
  model: 'Gol da Escada',
  year: 2000,
  color: 'Red',
  status: true,
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const outputCar1: ICar = {
  id: '6348513f34c397abcad040b2',
  model: 'Uno da Escada',
  year: 1960,
  color: 'Red',
  status: false,
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const outputCar2: ICar = {
  id: '6348513f34c397abcad040b2',
  model: 'Gol da Escada',
  year: 2000,
  color: 'Red',
  status: true,
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const outputCarsArray: ICar[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea2f',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    buyValue: 39.000,
    doorsQty: 2,
    seatsQty: 5,
  },
];
