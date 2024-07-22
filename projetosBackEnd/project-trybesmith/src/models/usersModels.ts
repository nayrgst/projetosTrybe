import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { User } from '../interfaces/interface';
import connection from './connection';

const UserModel = {

  async registerUser(item: User): Promise<number> {
    const { username, classe, level, password } = item;
    const [{ insertId: id }] = await connection
      .query<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return id;
  },

  async listUserById(id: User['id']): Promise<User> { 
    const [[item]] = await connection
      .query<RowDataPacket[]>('SELECT * FROM Trybesmith.Users WHERE id=?', [id]);
    return item as User;
  },
};

export default UserModel;
