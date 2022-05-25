import { Injectable } from '@angular/core';
import { Heroe } from 'src/app/estructura/models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  public urlBase = 'https://borilio.github.io/curso-angular/img/avatars/';

  constructor() { }

  public getHeroes(): Heroe[] {
    let lista = [
      new Heroe('Superman', 350, 94, 80, 93, 100, this.urlBase + 'superman.svg'),
      new Heroe('Batman', 50, 75, 60, 75, 100, this.urlBase + 'batman.svg'),
      new Heroe('Capitana Marvel', 355, 70, 85, 80, 100, ''),
      new Heroe('Catwoman', 50, -5, 63, 72, 100, ''),
      new Heroe('Spiderman', 150, 85, 86, 89, 100, this.urlBase + 'spiderman.svg'),
      new Heroe('Viuda Negra', 35, 37, 88, 83, 100, ''),
      new Heroe('Thanos', 250, -92, 90, 95, 100, ''),
      new Heroe('Linterna Verde', 200, 80, 82, 83, 100, this.urlBase + 'linternaverde.svg'),
      new Heroe('Ironman', 150, 69, 83, 85, 100, this.urlBase + 'ironman.svg'),
      new Heroe('Capitán América', 135, 95, 64, 95, 100, this.urlBase + 'capitanamerica.svg'),
      new Heroe('Thor', 275, 60, 92, 75, 100, ''),
      new Heroe('Caballero Luna', 130, 0, 100, 100, 100, '')
    ];

    return lista;
  }


  public getHeroe(posicion: number): Heroe {
    let lista = this.getHeroes();
    var numAleatorio = Math.floor(Math.random()*lista.length);
    return lista[numAleatorio];
  }

}
