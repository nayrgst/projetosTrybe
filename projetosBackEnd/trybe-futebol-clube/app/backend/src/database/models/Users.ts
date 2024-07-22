import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class Users extends Model {
  id!: number;
  username!: string;
  role!: string;
  email!: string;
  password!: string;
}

Users.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  username: {
    type: STRING(30),
    allowNull: false,
  },

  role: {
    type: STRING(30),
    allowNull: false,
  },

  email: {
    type: STRING(30),
    allowNull: false,
  },

  password: {
    type: STRING(30),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'Users',
  tableName: 'users',
  timestamps: false });

export default Users;
