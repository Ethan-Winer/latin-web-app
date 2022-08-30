export class Translation {
  constructor(private _word: string, private _definition: string, private _isOpen: boolean) { }
  public get word() {
    return this._word;
  }

  public set definition(def: string) {
    this._definition = def;
  }
  public get definition() {
    return this._definition;
  }

  public get isOpen() {
    return this._isOpen;
  }

  public set isOpen(open: boolean) {
    this._isOpen = open;
  }
}