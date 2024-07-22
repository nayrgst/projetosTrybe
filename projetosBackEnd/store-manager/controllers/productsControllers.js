const productService = require('../services/productsServices');

const productController = {
  /** @type {import('express').RequestHandler} */
  
   async listAllProducts(_req, res) {
    const item = await productService.listAllProducts();
    if (!item) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.json(item);
    }
  },
  
  async listProductById(req, res) {
    try {
      const { id } = req.params;
      const item = await productService.listProductById(Number(id));
      res.json(item);
    } catch (err) {
      res.status(404).json({ message: err.message });
     }
  },
   
  async registerProduct(req, res, next) { 
    const { body } = req;
    try {
      const product = await productService.validatorBody(body);
      const item = await productService.registerProduct(product);
      const productId = await productService.listProductById(item);
      res.status(201).json(productId);
    } catch (err) { 
      next(err);
    }
  },
};

module.exports = productController;
