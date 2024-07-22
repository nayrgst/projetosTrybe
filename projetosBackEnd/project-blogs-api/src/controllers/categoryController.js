const categoryService = require('../services/categoryService');
const authService = require('../services/authService');

const categoryController = { 
      async category(req, res) {
      const { authorization } = req.headers;
      const { body } = req;
      await authService.validationToken(authorization);
      await authService.authToken(authorization);
      const categoryNameValidade = await categoryService.validatorBody(body);
      const listCategory = await categoryService.listCategory(categoryNameValidade);
      res.status(201).json(listCategory);
    },

    async listAll(req, res) {
      const { authorization } = req.headers;
      await authService.validationToken(authorization);
      await authService.authToken(authorization);
      const list = await categoryService.listAll();
     res.json(list);
  },  
};

module.exports = categoryController;