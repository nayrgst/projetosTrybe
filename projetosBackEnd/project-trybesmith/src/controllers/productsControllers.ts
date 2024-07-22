import { Request, Response } from 'express';
import productService from '../services/productsServices';

const productController = {

  async registerProduct(req: Request, res: Response) { 
    const { body } = req;
    const item = await productService.registerProduct(body);
    res.status(201).json(item);
  },

  async listAllProducts(_req: Request, res: Response) {
    const item = await productService.listAllProducts();
    res.json(item);
  },
};

export default productController;
