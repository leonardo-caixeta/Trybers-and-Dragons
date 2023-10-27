import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private readonly damageType = 'stamina';
  static numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    Warrior.numberOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.numberOfInstances;
  }

  get energyType(): EnergyType {
    return this.damageType;
  }
}

export default Warrior;