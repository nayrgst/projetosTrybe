const Joi = require('joi');
const productModel = require('../models/productsModels');
const { runSchema } = require('./validator');

const productService = {

  validatorBody: runSchema(Joi.object({
  name: Joi.string().required().min(5),
})),

  async listAllProducts() {
    const items = await productModel.listAllProducts();
    return items;
  }, 
  
  async listProductById(id) { 
    const items = await productModel.listProductById(id);
    if (!items) { 
      throw new Error('Product not found');
    }
    return items;
  },
  
  async registerProduct(item) {
    const items = await productModel.registerProduct(item);
    return items;
  },
};

module.exports = productService;