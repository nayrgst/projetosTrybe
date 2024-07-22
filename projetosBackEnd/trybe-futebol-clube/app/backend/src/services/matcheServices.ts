import ErrorHttp from '../utils/utils';
import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';
import { matchTypes } from '../interfaces/interfaces';
import TeamServices from './teamServices';

const matchService = {
  async listAll() {
    const result = await Matches.findAll({
      include: [{
        model: Teams,
        as: 'teamHome',
        attributes: ['teamName'],
      },
      {
        model: Teams,
        as: 'teamAway',
        attributes: ['teamName'],
      }],
    });
    return result;
  },

  async listInProgress(inProgress: boolean) {
    const result = await Matches.findAll({
      where: { inProgress },
      include: [{
        model: Teams,
        as: 'teamHome',
        attributes: ['teamName'],
      },
      {
        model: Teams,
        as: 'teamAway',
        attributes: ['teamName'],
      }],
    });
    return result;
  },

  async postMatch(matches: matchTypes) {
    matches.inProgress = true;
    const result = await Matches.create(matches);
    return result;
  },

  async finishPatch(id: number) {
    const result = await Matches.update(
      { inProgress: false },
      { where: { id } },
    );
    if (!result) throw new ErrorHttp('id not found or missing', 401);
  },

  async singleMatch(matches: matchTypes) {
    const { homeTeam, awayTeam } = matches;
    if (homeTeam === awayTeam) {
      throw new ErrorHttp('It is not possible to create a match with two equal teams', 401);
    }

    const homeT = await TeamServices.listById(homeTeam);
    const awayT = await TeamServices.listById(awayTeam);
    if (!homeT || !awayT) throw new ErrorHttp('There is no team with such id!', 404);
  },

  async updateMatches(id: number, matches: matchTypes) {
    await Matches.update({
      homeTeamGoals: matches.homeTeamGoals,
      awayTeamGoals: matches.awayTeamGoals,
    }, { where: { id } });
  },

  async matchesOn(homeTeam: number) {
    const endedMatches = await Matches.findAll(
      { where: { homeTeam, inProgress: false },
      },
    );
    return endedMatches;
  },
};

export default matchService;
