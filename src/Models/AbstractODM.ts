import { 
  isValidObjectId, 
  model, 
  Model, 
  models, 
  Schema, 
  UpdateQuery } from 'mongoose';

abstract class AbstractVehiclesODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async updateById(id: string, obj: Partial<T>):
  Promise<T | null> {
    if (!isValidObjectId(id)) throw new Error('Invalid mongo id');
    
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );    
  }

  public async getAll(): Promise<T[]> {
    return this.model.find({});
  }

  public async getById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new Error('Invalid mongo id');
    return this.model.findById(id);
  }
}

export default AbstractVehiclesODM;