import { Response, Request } from 'express';
import * as bcrypt from 'bcryptjs';
import ErrorHttp from '../utils/utils';
import authService from '../services/authServices';
import loginService from '../services/loginServices';

const loginController = {
  async login(req: Request, res: Response) {
    const { body } = req;
    const { email, password } = req.body;
    await loginService.validateBody(body);
    const user = await loginService.listUser(email);
    const passwd = await bcrypt.compare(password, user.password);
    if (!passwd) throw new ErrorHttp('Incorrect email or password', 401);
    const token = authService.token(user);
    return res.json({ token });
  },

  async validationLogin(req: Request, res: Response) {
    const auth = req.headers.authorization;
    if (!auth) throw new ErrorHttp('token is required', 404);
    const token = authService.validationToken(auth);
    const { email } = token.data;
    const validateLogin = await loginService.listUser(email);
    res.json({ role: validateLogin.role });
  },
};

export default loginController;
