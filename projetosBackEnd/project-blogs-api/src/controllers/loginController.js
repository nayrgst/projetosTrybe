const loginService = require('../services/loginService');
const authService = require('../services/authService');

const loginController = { 
  async login(req, res) {
  const { body } = req;
  const user = await loginService.validatorBody(body);
  const validationUsers = await loginService.validationUsers(user);
  const token = await authService.token(validationUsers);
  
  res.json({ token });
  },  
};

module.exports = loginController;