import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Teams extends Model {
  id!: number;
  teamName!: string;
}

Teams.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  teamName: {
    type: STRING(30),
    allowNull: false,
    field: 'team_name',
  },
}, {
  sequelize: db,
  modelName: 'Teams',
  tableName: 'teams',
  timestamps: false,
});

export default Teams;
