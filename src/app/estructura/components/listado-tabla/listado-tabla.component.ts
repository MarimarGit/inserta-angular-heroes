import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroesService } from 'src/app/shared/services/heroes.service';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-listado-tabla',
  templateUrl: './listado-tabla.component.html',
  styleUrls: ['./listado-tabla.component.css']
})
export class ListadoTablaComponent implements OnInit {
  public lista: Heroe[];
  public heroeElegido : Heroe | null;
  public urlBase = 'https://borilio.github.io/curso-angular/img/avatars/';

  //Creamos el evento que se propagará al ejecutar la función seleccionarFavorito()
  @Output()
  public eventoFavorito = new EventEmitter<Heroe>();
  public error?: HttpErrorResponse;
  public cargando: boolean;


  constructor( private _heroesService: HeroesService) {
    this.lista = [];
    //inicializo heroeElegido
    this.heroeElegido = null;
    this.cargando = false;
  }

  //El método ngOnInit se ejecuta inmediatamente después del constructor()

  ngOnInit(): void {
    //Hacemos la llamada al servicio desde el ngOnInit, ya que no se aconseja
    //hacer tareas pesadas desde el constructor
    let datosQueLlegan = this._heroesService.getHeroes();
    this.cargando = true;

    datosQueLlegan.subscribe({
      next: (resp) => {
        this.lista = resp;
      },
      error: (error) => {
        console.log("Hubo un error en la petición " , error);
        this.lista = [];
      },
      complete: () => {
        this.cargando = false;
      }
    })


    // this.heroeElegido = this._heroesService.getHeroe(1);
    // this.urlBase = this._heroesService.urlBase;
    console.log("Arrancamos el componente ListadoTablaComponent");
  }

  public seleccionarFavorito(heroe: Heroe): void {
    console.log ("El hijo le dice al padre... mi héroe favorito es " + heroe.nombre);
    this.eventoFavorito.emit(heroe);
  }

}
