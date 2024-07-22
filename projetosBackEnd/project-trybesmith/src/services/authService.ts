import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../interfaces/interface';

dotenv.config();
const secretJWT = process.env.JWT_SECRET || 'senhasupersecreta';

const authService = {
  async token(user: User): Promise<string> {
    const { password, ...newUser } = user;
    const payload = { data: newUser };
    const token = jwt.sign(payload, secretJWT);
    
    return token;
  },

};

export default authService;
