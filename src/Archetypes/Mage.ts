import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private readonly damageType = 'mana';
  static numberOfInstances = 0;

  constructor(name: string, special: number, cost: number) {
    super(name, special, cost);
    Mage.numberOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.numberOfInstances;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this.damageType;
  }
}

export default Mage;