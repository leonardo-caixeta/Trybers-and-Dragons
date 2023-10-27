abstract class Race {
  constructor(
    private readonly _name: string,
    private readonly _dexterity: number,
  ) {}

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;
}

export default Race;