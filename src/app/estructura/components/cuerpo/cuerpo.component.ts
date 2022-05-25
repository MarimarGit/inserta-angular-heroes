import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/shared/services/heroes.service';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  public lista: Heroe[];
  private _heroesService : HeroesService;
  public heroeElegido : Heroe | null;

  constructor(heroesService: HeroesService) {
    this._heroesService = heroesService;
    this.lista = [];
    //inicializo heroeElegido
    this.heroeElegido = null;

  }

  //El método ngOnInit se ejecuta inmediatamente después del constructor()
  ngOnInit(): void {
    //Hacemos la llamada al servicio desde el ngOnInit, ya que no se aconseja
    //hacer tareas pesadas desde el constructor
    this.lista = this._heroesService.getHeroes();
    this.heroeElegido = this._heroesService.getHeroe(1);
  }

}
