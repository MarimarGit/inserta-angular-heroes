import { HttpErrorResponse } from '@angular/common/http';
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
  public error?: HttpErrorResponse;
  public cargando: boolean;

  constructor(private _heroesService: HeroesService) {
    this.cargando = false;
  }

  ngOnInit(): void {
    this.heroes = [];
    let datosQueLlegan = this._heroesService.getHeroes();
    this.cargando = true;

    datosQueLlegan.subscribe({
      next: (resp) => {
        this.heroes = resp;
      },
      error: (error) => {
        console.log("Hubo un error en la petición ", error);
        this.heroes = [];
      },
      complete: () => {
        this.cargando = false;
      }
    });

    console.log("Arrancamos el componente ListadoTarjetaComponent");
  }

}
