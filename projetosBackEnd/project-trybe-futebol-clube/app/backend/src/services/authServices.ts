import * as Jwt from 'jsonwebtoken';
import ErrorHttp from '../utils/utils';
import { Login, TokenInterface } from '../interfaces/interfaces';

const secretJWT = process.env.JWT_SECRET || 'senhasupersecreta';

class authService {
  static token(user: Login) {
    const { password, ...newUser } = user;
    const payload = { data: newUser };
    const token = Jwt.sign(payload, secretJWT);
    return token;
  }

  static validationToken(token: string) {
    try {
      const vrfToken = Jwt.verify(token, secretJWT);
      return vrfToken as TokenInterface;
    } catch (error) {
      throw new ErrorHttp('Token must be a valid token', 401);
    }
  }
}

export default authService;
