import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { PieComponent } from './components/pie/pie.component';
import { PagePrincipalComponent } from './components/page-principal/page-principal.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    CuerpoComponent,
    PieComponent,
    PagePrincipalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagePrincipalComponent
  ]
})
export class EstructuraModule { }
