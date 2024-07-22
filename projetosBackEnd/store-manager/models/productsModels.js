const db = require('./db');

const productModel = {
   async listAllProducts() { 
    const [item] = await db.query('SELECT * FROM products');
    return item;
  },
  
   async listProductById(id) { 
    const [[item]] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    return item;
  },

  async registerProduct(item) {
    const [{ insertId: id }] = await db.query(
      'INSERT INTO products (name) VALUES (?)', [item.name],
);
    return id;
   },
};

module.exports = productModel;