const joi = require('joi');
const models = require('../database/models');
const { runSchema } = require('./schema');

const categoryService = {
  validatorBody: runSchema(joi.object({
    name: joi.string().required(),
  })),

  async listCategory(body) {
    const { name } = body;
    const listNewCategory = await models.Category.create({
      name, 
      raw: true, 
    });
    return listNewCategory;
  },

  async listAll() {
    const list = await models.Category.findAll(
      { attributes: { exclude: ['password'] } }, { raw: true },
  );         
      return list;
  },
};

module.exports = categoryService;