import express from 'express';
import CarController from './Controllers/CarController';
import MotorcycleController from './Controllers/MotorcycleController';

const app = express();

app.use(express.json());
app.post('/cars', (req, res, next) => new CarController(req, res, next).createCar());
app.get('/cars', (req, res, next) => new CarController(req, res, next).listAllCars());
app.get('/cars/:id', (req, res, next) => new CarController(req, res, next).listCarById());
app.put('/cars/:id', (req, res, next) => new CarController(req, res, next).UpdateCarById());

app.post('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next)
  .createMotorcycle());
app.get('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next)
  .listAllMotorcycles());
app.get('/motorcycles/:id', (req, res, next) => new MotorcycleController(req, res, next)
  .listMotorcyclesById());
app.put('/motorcycles/:id', (req, res, next) => new MotorcycleController(req, res, next)
  .updateMotorcycleById());

export default app;

// iniciando projeto VQV!
