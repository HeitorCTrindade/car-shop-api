import express from 'express';
import CarController from './Controllers/CarController';

const app = express();

app.use(express.json());
app.post('/cars', (req, res, next) => new CarController(req, res, next).createCar());
app.get('/cars', (req, res, next) => new CarController(req, res, next).listAllCars());
app.get('/cars/:id', (req, res, next) => new CarController(req, res, next).listCarById());
app.put('/cars/:id', (req, res, next) => new CarController(req, res, next).UpdateCarById());

export default app;

// iniciando projeto VQV!
