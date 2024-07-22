import Race from './Race';

class Dwarf extends Race {
  private LifePointsDwarf = 80;
  private static _counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._counter += 1;
  }

  static createdRacesInstances(): number { return Dwarf._counter; }

  get maxLifePoints(): number { return this.LifePointsDwarf; }
}

export default Dwarf;