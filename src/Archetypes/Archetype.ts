import { EnergyType } from '../Energy';

abstract class Archetype {
  private readonly _special: number = 0;
  private readonly _cost: number = 0;
  constructor(
    private readonly _name: string,
  ) { }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;