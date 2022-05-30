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
  public urlBase = '';

  //Creamos el evento que se propagará al ejecutar la función seleccionarFavorito()
  @Output()
  public eventoFavorito = new EventEmitter<Heroe>();

  constructor( private _heroesService: HeroesService) {
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
    this.urlBase = this._heroesService.urlBase;
    console.log("Arrancamos el componente ListadoTablaComponent");
  }

  public seleccionarFavorito(heroe: Heroe): void {
    console.log ("El hijo le dice al padre... mi héroe favorito es " + heroe.nombre);
    this.eventoFavorito.emit(heroe);
  }

}
