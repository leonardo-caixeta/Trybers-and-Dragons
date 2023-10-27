import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private readonly damageType = 'mana';
  static numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer.numberOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.numberOfInstances;
  }

  get energyType(): EnergyType {
    return this.damageType;
  }
}

export default Necromancer;