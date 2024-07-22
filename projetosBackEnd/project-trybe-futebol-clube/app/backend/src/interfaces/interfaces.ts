export interface Login {
  email: string,
  password: string,
}

export interface TokenInterface extends Login {
  data: {
    email: string;
    password: string; }
}

export type matchTypes = {
  homeTeam: number,
  awayTeam: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
  inProgress?: boolean,
};

export type leaderboardTypes = {
  name: string
  totalPoints: number
  totalGames: number
  totalVictories: number
  totalDraws: number
  totalLosses: number
  goalsFavor: number
  goalsOwn: number
  goalsBalance: number
  efficiency: number
};
