const joi = require('joi');
const models = require('../database/models');
const { runSchema } = require('./schema');
const ErrorHttp = require('./ultils');

const loginService = {
  validatorBody: runSchema(joi.object({
    displayName: joi.string().required().min(8),
    email: joi.string().required().email(),
    password: joi.string().required().min(6),
    image: joi.string().required(),
  })),

  async validationUsers(body) {
    const { email, password, displayName, image } = body;
    const user = await models.User.findOne({ where: { email }, raw: true });
    if (user) throw new ErrorHttp('User already registered', 409);
    const data = { email, password, displayName, image };
    const dataUser = await models.User.create(data, { raw: true });
    return dataUser;
  },
  
  async listAll() {
    const list = await models.User.findAll(
      { attributes: { exclude: ['password'] } }, { raw: true },
  );         
      return list;
  },
  
  async listById(body) {
    const { id } = body;
    const listId = await models.User.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
    });
  
    if (!listId) throw new ErrorHttp('User does not exist', 404);
    return listId;
  },

};

module.exports = loginService;