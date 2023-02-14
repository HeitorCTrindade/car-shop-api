import ICar from '../Interfaces/ICar';

class Car {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor({ id, model, year, color, status, buyValue, doorsQty, seatsQty }: ICar) {    
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status || false;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  // get id() {
  //   return this._id;
  // }

  // set id(value: string | undefined) {
  //   this._id = value;
  // }

  // get model() {
  //   return this._model;
  // }

  // set model(value: string) {
  //   this._model = value;
  // }

  // get year() {
  //   return this._year;
  // }

  // set year(value: number) {
  //   this._year = value;
  // }

  // get color() {
  //   return this._color;
  // }

  // set color(value: string) {
  //   this._color = value;
  // }

  // get status() {
  //   return this._status;
  // }

  // set status(value: boolean) {
  //   this._status = value;
  // }

  // get buyValue() {
  //   return this._buyValue;
  // }

  // set buyValue(value: number) {
  //   this._buyValue = value;
  // }

  // get doorsQty() {
  //   return this._doorsQty;
  // }

  // set doorsQty(value: number) {
  //   this._doorsQty = value;
  // }

  // get seatsQty() {
  //   return this._seatsQty;
  // }

  // set seatsQty(value: number) {
  //   this._seatsQty = value;
  // }
}

export default Car;