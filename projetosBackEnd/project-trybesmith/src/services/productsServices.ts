import productModel from '../models/productsModels';
import { Product } from '../interfaces/interface';

const productService = {
 
  async registerProduct(item: Product): Promise<Product> {
    const items = await productModel.registerProduct(item);
    return items;
  },

  async listAllProducts(): Promise<Product[]> {
    const items = await productModel.listAllProducts();
    return items;
  }, 
};

export default productService;
