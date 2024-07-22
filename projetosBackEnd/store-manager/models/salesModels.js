const db = require('./db');

const saleModel = {

  async registerProduct() {
    const [{ insertId }] = await db.query(
      'INSERT INTO sales (date) VALUES (NOW())',
    );
    
    return insertId;
  },
  
  async createProduct(id, { productId, quantity }) {
    const [{ insertId }] = await db.query(
      `INSERT INTO sales_products (sale_id, product_id, quantity)
    VALUES (?,?,?)`, [id, productId, quantity],
    );
      return insertId;
  },

  async listAllProducts() {
    const [item] = await db.query(`SELECT sale_id AS saleId, date, product_id AS productId, quantity
        FROM sales_products INNER JOIN sales ON id = sale_id`);
        return item;
  },

  async listProductById(id) {
    const [item] = await db.query(`SELECT date, product_id as productId, quantity
        FROM sales_products INNER JOIN sales ON id = sale_id WHERE id = ? `, [id]);
    return item;
  },
};

module.exports = saleModel;