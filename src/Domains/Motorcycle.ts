import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Interfaces/types/MotorcycleCategory';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle { 
  private category: MotorcycleService;
  private engineCapacity: number;

  constructor({ id, model, year, color, status, buyValue, category, engineCapacity }: IMotorcycle) {
    super({ id, model, year, color, status, buyValue });    
    this.category = category;
    this.engineCapacity = engineCapacity;
  } 
}

export default Motorcycle;