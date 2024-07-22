const joi = require('joi');
const Sequelize = require('sequelize');
const models = require('../database/models');
const { runSchema } = require('./schema');
const ErrorHttp = require('./ultils');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);
const error = 'Some required fields are missing';

const postCategoryService = {
  validatorBody: runSchema(joi.object({
      title: joi.string().required()
        .messages({
          'string.empty': error,
          'any.required': error,
        }),
      content: joi.string().required().messages({
        'string.empty': error,
        'any.required': error,
      }),
      categoryIds: joi.array().required().items(joi.number())
      .messages({
        'string.empty': error,
        'any.required': error,
      }),

  })),
  
  async validateCategory(id) {
    const category = await models.Category.findOne(
      { where: { id } },
      { raw: true },
      );
      
      if (!category) throw new ErrorHttp('"categoryIds" not found', 400);
      return category;
    },
    
    async createPost(id, { title, content, categoryIds }) {
        const category = await sequelize.transaction(async (value) => {
          const postCategory = await models.BlogPost.create({
            title, content, userId: id, published: new Date(), updated: new Date() },
            { transaction: value, raw: true });
            
            await Promise.all(categoryIds.map((vrf) => models.PostCategory.create({
              postId: postCategory.id, categoryId: vrf }, 
              { transaction: value, raw: true })));
              const newCategory = postCategory.toJSON();
              return newCategory;
            });
          return category;        
    },

    async listAll() {
      const list = await models.BlogPost.findAll({
        include: [{
          model: models.User,
          as: 'user',
          attributes: { exclude: ['password'] },
          raw: true, 
        },
        {
          model: models.Category,
          as: 'categories',
          attributes: { exclude: ['postId', 'categoryId'] },
          raw: true, 
        }],
      });         
        return list;
    },
  };

module.exports = postCategoryService;