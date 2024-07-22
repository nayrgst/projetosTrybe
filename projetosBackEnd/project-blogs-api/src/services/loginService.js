const joi = require('joi');
const models = require('../database/models');
const { runSchema } = require('./schema');
const ErrorHttp = require('./ultils');

const loginService = {
  validatorBody: runSchema(joi.object({
    email: joi.string().required().email()
.messages({
  'string.empty': 'Some required fields are missing',
  'any.required': 'Some required fields are missing',
}),
password: joi.string().required().messages({
  'string.empty': 'Some required fields are missing',
  'any.required': 'Some required fields are missing',
}),
  })),

  async validationUsers(body) {
    const { email, password } = body;
    const user = await models.User.findOne({ where: { email }, raw: true });
    if (!user || user.password !== password) throw new ErrorHttp('Invalid fields', 400);
    const { password: _, ...newUser } = user;
    return newUser;
  },
};

module.exports = loginService;