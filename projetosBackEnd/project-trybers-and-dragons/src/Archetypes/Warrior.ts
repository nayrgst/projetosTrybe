import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina'; 
  private static _counter = 0;
  
  constructor(name: string) {
    super(name);
    Warrior._counter += 1;
  }

  static createdArchetypeInstances(): number { return Warrior._counter; }

  get energyType(): EnergyType {
    return this._energyType;  
  }
}

export default Warrior;