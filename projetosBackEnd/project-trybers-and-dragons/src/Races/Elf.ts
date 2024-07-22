import Race from './Race';

class Elf extends Race {
  private LifePointsElf = 99;
  private static _counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._counter += 1;
  }

  static createdRacesInstances(): number { return Elf._counter; }

  get maxLifePoints(): number { return this.LifePointsElf; }
}

export default Elf;