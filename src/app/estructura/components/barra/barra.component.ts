import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})

export class BarraComponent implements OnInit {

  //TODO: arreglar el atributo ancho que debería llamarse alto

  @Input() public texto :string="";

  @Input() public color :string="bg-primary";

  @Input() public alto :string="1rem";

  @Input() public fuente :number=7; //Por defecto es 7, y como no existe fs-7, no aplica nada. Si recibe un número de 1 al 6, lo aplica

  @Input() public min :number=0;

  @Input() public max :number=100;

  @Input() public valor :number=100;


  constructor(){
  }

  ngOnInit(): void {
  }

}
