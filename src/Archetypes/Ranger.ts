import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private readonly damageType = 'stamina';
  static numberOfInstances = 0;

  constructor(name: string, special: number, cost: number) {
    super(name, special, cost);
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