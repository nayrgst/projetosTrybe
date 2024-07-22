import userModel from '../models/usersModels';
import { User } from '../interfaces/interface';

const userService = {
  async registerUser(item: User) {
    const items = await userModel.registerUser(item);
    return items;
  },

  async listUserById(id: User['id']): Promise<User> {
    const items = await userModel.listUserById(id);
    return items;
  }, 
};

export default userService;
