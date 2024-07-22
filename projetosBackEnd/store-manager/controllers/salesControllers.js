const productService = require('../services/productsServices');
const saleService = require('../services/salesServices');

const saleController = {
  /** @type {import('express').RequestHandler} */

  async registerProduct(req, res, next) {
    try {
      const item = req.body;
      await Promise.all(item.map((items) => saleService.validatorBody(items)));
      
      await Promise.all(item.map((items) => productService.listProductById(items.productId)));

      const product = await saleService.createProduct(item);
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  },

  async listAllProducts(_req, res) {
    const items = await saleService.listAllProducts();
    res.json(items);
  },

  async listProductById(req, res) {
    try {
      const { id } = req.params;
      const items = await saleService.listProductById(Number(id));
      res.json(items);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

};

module.exports = saleController;