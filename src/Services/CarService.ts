import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async addCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);    
    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const carODM = new CarODM();
    const allCars = await carODM.getAll(); 
    const allCarsFormated = allCars.map((car) => this.createCarDomain(car));    
    return allCarsFormated;
  }

  public async getCarById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.getById(id); 
    return this.createCarDomain(car);
  }

  public async updateById(id: string, car: ICar) {
    const carODM = new CarODM();
    const updatedCar = await carODM.updateById(id, car); 
    return this.createCarDomain(updatedCar);
  }
}

export default CarService;