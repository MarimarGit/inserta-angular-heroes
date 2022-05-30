import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { PieComponent } from './components/pie/pie.component';
import { PagePrincipalComponent } from './components/page-principal/page-principal.component';
import { ListadoTablaComponent } from './components/listado-tabla/listado-tabla.component';
import { SharedModule } from '../shared/shared.module';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { ListadoTarjetaComponent } from './components/listado-tarjeta/listado-tarjeta.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    CuerpoComponent,
    PieComponent,
    PagePrincipalComponent,
    ListadoTablaComponent,
    NavegacionComponent,
    ListadoTarjetaComponent

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PagePrincipalComponent
  ]
})
export class EstructuraModule { }
