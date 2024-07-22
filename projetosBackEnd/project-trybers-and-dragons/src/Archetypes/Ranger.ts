import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina'; 
  private static _counter = 0;
  
  constructor(name: string) {
    super(name);
    Ranger._counter += 1;
  }

  static createdArchetypeInstances(): number { return Ranger._counter; }

  get energyType(): EnergyType {
    return this._energyType;  
  }
}

export default Ranger;