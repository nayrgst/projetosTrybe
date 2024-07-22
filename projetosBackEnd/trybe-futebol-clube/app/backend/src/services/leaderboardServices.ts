import { leaderboardTypes } from '../interfaces/interfaces';

const leaderboardService = {
  async listAll(leaderboard: any) {
    const result = leaderboard.sort((teamA: leaderboardTypes, teamB: leaderboardTypes) => {
      if (teamA.totalPoints < teamB.totalPoints) return 1;
      if (teamA.totalPoints > teamB.totalPoints) return -1;
      if (teamA.goalsBalance < teamB.goalsBalance) return 1;
      if (teamA.goalsBalance > teamB.goalsBalance) return -1;
      if (teamA.goalsFavor < teamB.goalsFavor) return 1;
      if (teamA.goalsFavor > teamB.goalsFavor) return -1;
      if (teamA.goalsOwn < teamB.goalsOwn) return 1;
      if (teamA.goalsOwn > teamB.goalsOwn) return -1;
    });
    return result;
  },
};

export default leaderboardService;
