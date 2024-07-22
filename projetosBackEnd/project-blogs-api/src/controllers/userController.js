const authService = require('../services/authService');
const userService = require('../services/userService');

const userController = { 
  async user(req, res) {
  const { body } = req;
  const user = await userService.validatorBody(body);
  const validationUsers = await userService.validationUsers(user);
  const token = await authService.token(validationUsers);
  
  res.status(201).json({ token });
},

  async listAll(req, res) {
    const { authorization } = req.headers;
    await authService.validationToken(authorization);
    await authService.authToken(authorization);
    const list = await userService.listAll();
   res.json(list);
},  

async listById(req, res) {
  const { authorization } = req.headers;
  const { params } = req;
  await authService.validationToken(authorization);
  await authService.authToken(authorization);
  const list = await userService.listById(params);
 res.json(list);
}, 
};

module.exports = userController;