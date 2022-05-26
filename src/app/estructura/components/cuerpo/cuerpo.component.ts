import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  public heroeFavorito?: Heroe | null;

  constructor() {

  }

  ngOnInit(): void {

  }

  public procesarFavorito(heroeEnviado: Heroe){
    console.log("El padre le dice al hijo... estoy capturando tu evento. He recibido", heroeEnviado);
    this.heroeFavorito = heroeEnviado;
  }

}
