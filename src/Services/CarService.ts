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
    console.log(newCar);    
    return this.createCarDomain(newCar);
  }
}

export default CarService;