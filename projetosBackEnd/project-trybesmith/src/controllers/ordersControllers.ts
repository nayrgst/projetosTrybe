import { Request, Response } from 'express';
import orderService from '../services/ordersServices';

const productController = {

  async listAllOrders(_req: Request, res: Response) {
    const item = await orderService.listAllOrders();
    res.json(item);
  },
};

export default productController;