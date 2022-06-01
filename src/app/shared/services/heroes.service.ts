import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from 'src/app/estructura/models/heroe.model';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  // public urlBase = 'https://borilio.github.io/curso-angular/img/avatars/';

  constructor(private _http : HttpClient) { }

  public getHeroes(): Observable<Heroe[]> {
    let datos = this._http.get<Heroe[]>("https://my-json-server.typicode.com/borilio/curso-angular/heroes");
    return datos;
  }

  // public getHeroe(posicion: number): Heroe {
  //   let lista = this.getHeroes();
  //   var numAleatorio = Math.floor(Math.random() * lista.length);
  //   return lista[numAleatorio];
  // }
}
