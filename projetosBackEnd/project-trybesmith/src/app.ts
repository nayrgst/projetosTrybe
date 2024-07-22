import express from 'express';
import productRouter from './Routes/productsRoutes';
import userRouter from './Routes/usersRoutes';
import orderRouter from './Routes/ordersRoutes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
