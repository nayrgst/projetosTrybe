import { Request, Response } from 'express';
import authService from '../services/authService';
import userService from '../services/usersServices';

const userController = {

  async resgisterUser(req: Request, res: Response) { 
    const { body } = req;
    const user = await userService.registerUser(body);
    const validationUsers = await userService.listUserById(user);
    const token = await authService.token(validationUsers);
    
    res.status(201).json({ token });
  },
};

export default userController;
