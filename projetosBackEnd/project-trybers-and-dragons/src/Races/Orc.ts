import Race from './Race';

class Orc extends Race {
  private LifePointsOrc = 74;
  private static _counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._counter += 1;
  }

  static createdRacesInstances(): number { return Orc._counter; }

  get maxLifePoints(): number { return this.LifePointsOrc; }
}

export default Orc;