const Joi = require('joi');
const saleModel = require('../models/salesModels');
const { runSchema } = require('./validator');

const saleService = {
  validatorBody: runSchema(Joi.object({
    productId: Joi.number().required(),
    quantity: Joi.number().required().min(1),
  })),

  async createProduct(item) {
    const id = await saleModel.registerProduct();
    await Promise.all(item.map((items) => 
      saleModel.createProduct(id, items)));

    const obj = {
      id,
      itemsSold: item,
    };

    return obj;
  },

  async listAllProducts() {
    const items = await saleModel.listAllProducts();
    return items;
  },

  async listProductById(id) {
    const items = await saleModel.listProductById(id);
    if (!items || items.length === 0) {
      throw new Error('Sale not found');
    }
    return items;
  },
};

module.exports = saleService;