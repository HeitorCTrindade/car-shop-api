import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractVehiclesODM from './AbstractODM';

class CarODM extends AbstractVehiclesODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },      
    });
    super(schema, 'cars');
  }
}

export default CarODM;
