import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private readonly damageType = 'stamina';
  static numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger.numberOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.numberOfInstances;
  }

  get energyType(): EnergyType {
    return this.damageType;
  }
}

export default Ranger;