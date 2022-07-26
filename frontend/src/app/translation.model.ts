export class Translation {
  constructor(private _word: string, private _definition: string, private _isOpen: boolean, private _hovering: boolean) { }

  public get word() {
    return this._word;
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

  public get hovering() {
    return this._hovering;
  }

  public set hovering(hover: boolean) {
    this._hovering = hover;
  }
}