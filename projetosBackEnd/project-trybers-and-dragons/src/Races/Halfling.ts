import Race from './Race';

class Halfling extends Race {
  private LifePointsHalfling = 60;
  private static _counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._counter += 1;
  }

  static createdRacesInstances(): number { return Halfling._counter; }

  get maxLifePoints(): number { return this.LifePointsHalfling; }
}

export default Halfling;