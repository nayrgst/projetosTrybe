import Joi = require('joi');
import ErrorHttp, { runSchema } from '../utils/utils';
import users from '../database/models/Users';

const errorMsg = 'All fields must be filled';

const loginService = {
  validateBody: runSchema(Joi.object({
    email: Joi.string().required().email().messages({
      'string.empty': errorMsg,
      'any.required': errorMsg,
    }),
    password: Joi.string().required().min(8).messages({
      'string.empty': errorMsg,
      'any.required': errorMsg,
    }),
  })),

  async listUser(email: string) {
    const user = await users.findOne({
      where: { email }, raw: true });

    if (!user) throw new ErrorHttp('Incorrect email or password', 401);
    return user;
  },

};

export default loginService;
