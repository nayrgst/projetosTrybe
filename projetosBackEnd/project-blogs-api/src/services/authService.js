const jwt = require('jsonwebtoken');
const joi = require('joi');
const ErrorHttp = require('./ultils');
require('dotenv').config();

const secretJWT = process.env.JWT_SECRET;

const authService = {
  async token(user) {
    const { password, ...newUser } = user;
    const payload = { data: newUser };
    const token = jwt.sign(payload, secretJWT);
    
    return token;
  },

  async authToken(token) {
    try {
      const { data } = jwt.verify(token, secretJWT);
      return data;
    } catch (error) {
      throw new ErrorHttp('Expired or invalid token', 401);
    }
  },
    
  async validationToken(token) {
    const auth = joi.string().required();
    try {
      const data = await auth.validateAsync(token);
      return data;
    } catch (error) {
      throw new ErrorHttp('Token not found', 401);
    }
  },

};

module.exports = authService;