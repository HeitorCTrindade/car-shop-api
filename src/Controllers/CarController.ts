import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async createCar() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    
    try {
      const newCar = await this.service.addCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }  

  public async listAllCars() {
    try {
      const allCars = await this.service.getAllCars();
      return this.res.status(201).json(allCars);
    } catch (error) {
      this.next(error);
    }
  } 

  public async listCarById() {
    const { id } = this.req.params;
    try {
      const car = await this.service.getCarById(id);
      if (!car) return this.res.status(404).json({ message: 'Car not found' });
      return this.res.status(201).json(car);
    } catch (erro: any) {
      this.res.status(422).json({ message: erro.message });     
    }
  }
}

export default CarController;
