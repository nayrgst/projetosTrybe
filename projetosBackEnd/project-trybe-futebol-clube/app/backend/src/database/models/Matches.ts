import { Model, INTEGER, BOOLEAN } from 'sequelize';
import Teams from './Teams';
import db from '.';

class Matches extends Model {
  id!: number;
  homeTeam!: string;
  homeTeamGoals!: number;
  awayTeam!: number;
  awayTeamGoals!: number;
  inProgress!: boolean;
}

Matches.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  homeTeam: {
    type: INTEGER,
    field: 'home_team',
  },

  homeTeamGoals: {
    type: INTEGER,
    field: 'home_team_goals',
  },

  awayTeam: {
    type: INTEGER,
    field: 'away_team',
  },

  awayTeamGoals: {
    type: INTEGER,
    field: 'away_team_goals',
  },

  inProgress: {
    type: BOOLEAN,
    field: 'in_progress',
  },
}, {
  sequelize: db,
  modelName: 'Matches',
  tableName: 'matches',
  timestamps: false,
});

Teams.hasMany(Matches, { foreignKey: 'homeTeam', as: 'teamHome' });
Teams.hasMany(Matches, { foreignKey: 'awayTeam', as: 'teamAway' });
Matches.belongsTo(Teams, { foreignKey: 'homeTeam', as: 'teamHome' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeam', as: 'teamAway' });

export default Matches;
