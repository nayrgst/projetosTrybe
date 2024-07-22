import Teams from '../database/models/Teams';

const TeamServices = {
  async listAll() {
    const items = await Teams.findAll();
    return items;
  },

  async listById(id: number) {
    const team = await Teams.findOne({
      where: { id }, raw: true,
    });

    return team;
  },
};

export default TeamServices;
