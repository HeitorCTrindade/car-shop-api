type MotorcycleCategory = 'street' | 'custom' | 'trail';

interface IMotorcycle {
  id?: string;
  model: string;
  year: number;
  color: string;
  status: boolean;
  buyValue: number;
  category: MotorcycleCategory;
  engineCapacity: number;
}

export default IMotorcycle;