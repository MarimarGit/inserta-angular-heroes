import { Injectable } from '@angular/core';
import { Heroe } from 'src/app/estructura/models/heroe.model';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  public urlBase = 'https://borilio.github.io/curso-angular/img/avatars/';

  constructor() {}

  public getHeroes(): Heroe[] {
    let lista = [
      {
        nombre: 'Superman',
        imagen: 'https://borilio.github.io/curso-angular/img/avatars/superman.svg',
        ataque: 95,
        defensa: 93,
        poder: 250,
        vida: 100,
        honor: 76,
      },
      {
        nombre: 'Thor',
        imagen: '',
        ataque: 92,
        defensa: 75,
        poder: 175,
        vida: 100,
        honor: 100,
      },
      {
        nombre: 'Wonder Woman',
        imagen: '',
        ataque: 150,
        defensa: 200,
        poder: 230,
        vida: 100,
        honor: 110,
      },
      {
        nombre: 'Capitán América',
        imagen: 'https://borilio.github.io/curso-angular/img/avatars/capitanamerica.svg',
        ataque: 120,
        defensa: 129,
        poder: 160,
        vida: 110,
        honor: 100,
      },
      {
        nombre: 'Thanos',
        imagen: '',
        ataque: 110,
        defensa: 180,
        poder: 250,
        vida: 110,
        honor: -80,
      },
      {
        nombre: 'Batman',
        imagen:  'https://borilio.github.io/curso-angular/img/avatars/batman.svg',
        ataque: 75,
        defensa: 90,
        poder: 190,
        vida: 100,
        honor: 50,
      },
      {
        nombre: 'Viuda Negra',
        imagen:'',
        ataque: 75,
        defensa: 90,
        poder: 3,
        vida: 1,
        honor: 100,
      },
      {
        nombre: 'Catwoman',
        imagen: '',
        ataque: 63,
        defensa: 72,
        poder: 50,
        vida: 100,
        honor: -5,
      },
      {
        nombre: 'Spiderman',
        imagen: 'https://borilio.github.io/curso-angular/img/avatars/spiderman.svg',
        ataque: 86,
        defensa: 89,
        poder: 150,
        vida: 100,
        honor: 85,
      },
      {
        nombre: 'Linterna Verde',
        imagen:
          'https://borilio.github.io/curso-angular/img/avatars/linternaverde.svg',
        ataque: 82,
        defensa: 83,
        poder: 200,
        vida: 100,
        honor: 80,
      },
      {
        nombre: 'Ironman',
        imagen:
          'https://borilio.github.io/curso-angular/img/avatars/ironman.svg',
        ataque: 83,
        defensa: 85,
        poder: 150,
        vida: 100,
        honor: 69,
      },
      {
        nombre: 'Caballero Luna',
        imagen:
          'https://borilio.github.io/curso-angular/img/avatars/defaultheroe.svg',
        ataque: 75,
        defensa: 90,
        poder: 110,
        vida: 100,
        honor: 0,
      },
      {
        nombre: 'Loki',
        imagen:
          'https://borilio.github.io/curso-angular/img/avatars/defaultheroe.svg',
        ataque: 80,
        defensa: 90,
        poder: 90,
        vida: 100,
        honor: -55,
      },
      {
        nombre: 'Wanda',
        imagen:
          'https://borilio.github.io/curso-angular/img/avatars/defaultheroe.svg',
        ataque: 130,
        defensa: 90,
        poder: 210,
        vida: 100,
        honor: -76,
      },
      {
        nombre: 'Dr Strange',
        imagen:
          'https://borilio.github.io/curso-angular/img/avatars/defaultheroe.svg',
        ataque: 150,
        defensa: 100,
        poder: 220,
        vida: 100,
        honor: 80,
      },
    ];

    return lista;
  }

  public getHeroe(posicion: number): Heroe {
    let lista = this.getHeroes();
    var numAleatorio = Math.floor(Math.random() * lista.length);
    return lista[numAleatorio];
  }
}
