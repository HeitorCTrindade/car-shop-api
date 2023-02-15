import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async createMotorcycle() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    
    try {
      const newMotorcycle = await this.service.addMotorcycle(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }  

  public async listAllMotorcycles() {
    try {
      const allMotorcycles = await this.service.getAllMotorcycles();
      console.log(allMotorcycles);      
      return this.res.status(200).json(allMotorcycles);
    } catch (error) {
      this.next(error);
    }
  } 

  public async listMotorcyclesById() {
    const { id } = this.req.params;
    try {
      const motorcycles = await this.service.getMotorcycleById(id);
      if (!motorcycles) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(motorcycles);
    } catch (erro: any) {
      this.res.status(422).json({ message: erro.message });     
    }
  }

  public async updateMotorcycleById() {
    const { id } = this.req.params;
    const { model, year, color, status, buyValue, category, engineCapacity } = this.req.body;
    const motorcycleToUpdate:
    IMotorcycle = { model, year, color, status, buyValue, category, engineCapacity };
    try {
      const motorcycle = await this.service.updateById(id, motorcycleToUpdate);
      if (!motorcycle) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(motorcycle);
    } catch (erro: any) {
      this.res.status(422).json({ message: erro.message });     
    }
  }
}

export default MotorcycleController;