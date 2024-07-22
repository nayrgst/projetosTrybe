import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType = 'mana'; 
  private static _counter = 0;
  
  constructor(name: string) {
    super(name);
    Mage._counter += 1;
  }

  static createdArchetypeInstances(): number { return Mage._counter; }

  get energyType(): EnergyType {
    return this._energyType;  
  }
}

export default Mage;