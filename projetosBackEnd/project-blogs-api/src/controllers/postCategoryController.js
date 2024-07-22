const postCategoryService = require('../services/postCategoryService');
const authService = require('../services/authService');

const postCategoryController = {
  async post(req, res) {
    const { authorization } = req.headers;
    const { body } = req;
    const { categoryIds } = req.body;
    await authService.validationToken(authorization);
    const { id } = await authService.authToken(authorization);
    await postCategoryService.validatorBody(body);
    await Promise.all(categoryIds.map((categoryId) => 
    postCategoryService.validateCategory(categoryId)));
    const blogPosts = await postCategoryService.createPost(id, body);
    res.status(201).json(blogPosts);
  },

  async listAll(req, res) {
    const { authorization } = req.headers;
    await authService.validationToken(authorization);
    await authService.authToken(authorization);
    const listAll = await postCategoryService.listAll();

    res.json(listAll);
  },
};

module.exports = postCategoryController;
