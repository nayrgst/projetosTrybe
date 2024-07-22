import { RowDataPacket } from 'mysql2';
import connection from './connection';

const productModel = {

  async listAllOrders(): Promise<RowDataPacket[]> { 
    const [items] = await connection
      .query<RowDataPacket[]>(`
      SELECT o.userId, o.id, JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.Orders AS o
      INNER JOIN Trybesmith.Products AS p ON o.id = orderId
      GROUP BY o.id
      ORDER BY o.userId;`);
    return items;
  },
};

export default productModel;