export class RoleUser{
  private _idUser:number;
  private _Role:string;

  get idUser(): number {
    return this._idUser;
  }

  set idUser(value: number) {
    this._idUser = value;
  }

  get Role(): string {
    return this._Role;
  }

  set Role(value: string) {
    this._Role = value;
  }
}
