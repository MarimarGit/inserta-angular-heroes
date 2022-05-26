import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-principal',
  templateUrl: './page-principal.component.html',
  styleUrls: ['./page-principal.component.css']
})
export class PagePrincipalComponent implements OnInit {
  public year_padre: number = 1983;

  constructor() { }

  ngOnInit(): void {
  }

}
