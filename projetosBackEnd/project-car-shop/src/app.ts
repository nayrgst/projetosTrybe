import express from 'express';
import 'express-async-errors';
import carRoute from './Routes/carRouters';
import errorHandlerMiddleware from './middlewares/Error';

const app = express();
app.use(express.json());
app.use(carRoute);
app.use(errorHandlerMiddleware);

export default app;