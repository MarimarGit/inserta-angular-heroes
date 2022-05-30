export class Heroe {

  //Constructor con sintaxis azucarada
  constructor(
    public nombre: string,
    public poder: number,
    public honor: number,
    public ataque: number,
    public defensa: number,
    public vida: number,
    public imagen: string
  ) {}

  public esPoderoso():boolean {
    return this.poder > 200;
  }

  public esVillano():boolean {
      return this.honor < -50;
  }


}
