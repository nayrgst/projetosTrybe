import { ResultSetHeader } from 'mysql2';
import { Product } from '../interfaces/interface';
import connection from './connection';

const productModel = {

  async registerProduct(item: Product): Promise<Product> {
    const { name, amount } = item;
    const [{ insertId: id }] = await connection
      .query<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id, ...item };
  },

  async listAllProducts(): Promise<Product[]> { 
    const [item] = await connection.query('SELECT * FROM Trybesmith.Products');
    return item as Product[];
  },
};

export default productModel;
