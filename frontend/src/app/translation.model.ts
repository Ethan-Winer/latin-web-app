export class Translation {
  constructor(private _word: string, private _definition: string) { }

  public get word() {
    return this._word;
  }

  public get definition() {
    return this._definition;
  }
}