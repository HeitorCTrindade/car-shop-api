import IVehicle from './IVehicle';
import MotorcycleCategory from './types/MotorcycleCategory';

interface IMotorcycle extends IVehicle {  
  category: MotorcycleCategory;
  engineCapacity: number;
}

export default IMotorcycle;