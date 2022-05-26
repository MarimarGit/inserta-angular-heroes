import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  @Input() public year_hijo: number;
  @Input() public texto: string;

  constructor() {
    this.year_hijo = new Date().getFullYear();
    this.texto = '© SuperHéroes en Angular by Marimar';
   }

  ngOnInit(): void {

  }

}
