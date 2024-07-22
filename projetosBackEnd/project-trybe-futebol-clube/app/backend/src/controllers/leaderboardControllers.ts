import { Response, Request } from 'express';
import TeamServices from '../services/teamServices';
import matchServices from '../services/matcheServices';
import leaderboardService from '../services/leaderboardServices';

const leaderboardController = {
  async listResults(req: Request, res: Response) {
    const teams = await TeamServices.listAll();
    const leaderboard = await Promise.all(teams.map(async (team) => {
      const { id } = team;

      if (req.url === '/home') {
        const listLeaders = {
          name: team.teamName,
          totalPoints: 0,
          totalGames: 0,
          totalVictories: 0,
          totalDraws: 0,
          totalLosses: 0,
          goalsFavor: 0,
          goalsOwn: 0,
          goalsBalance: 0,
          efficiency: 0,
        };

        const matches = await matchServices.matchesOn(id);
        matches.forEach((match) => {
          const { homeTeamGoals, awayTeamGoals } = match;
          listLeaders.totalGames += 1;
          if (homeTeamGoals > awayTeamGoals) listLeaders.totalVictories += 1;
          if (homeTeamGoals < awayTeamGoals) listLeaders.totalLosses += 1;
          if (homeTeamGoals === awayTeamGoals) listLeaders.totalDraws += 1;
          listLeaders.goalsFavor += homeTeamGoals;
          listLeaders.goalsOwn += awayTeamGoals;
          listLeaders.goalsBalance += homeTeamGoals - awayTeamGoals;
        });
        listLeaders
          .totalPoints = listLeaders.totalVictories * 3 + listLeaders.totalDraws;
        listLeaders
          .efficiency = Number((listLeaders.totalPoints / (listLeaders
            .totalGames * 3) * 100).toFixed(2));
        return listLeaders;
      }
    }));

    const result = await leaderboardService.listAll(leaderboard);
    res.json(result);
  },
};

export default leaderboardController;
