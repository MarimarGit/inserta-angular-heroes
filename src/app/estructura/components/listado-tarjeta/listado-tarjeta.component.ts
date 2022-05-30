import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/shared/services/heroes.service';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-listado-tarjeta',
  templateUrl: './listado-tarjeta.component.html',
  styleUrls: ['./listado-tarjeta.component.css']
})
export class ListadoTarjetaComponent implements OnInit {

  public heroes?: Heroe[];

  constructor(private _heroesService: HeroesService) {

  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log("Arrancamos el componente ListadoTarjetaComponent");
  }

}
