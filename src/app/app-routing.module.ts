import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './estructura/components/error404/error404.component';
import { HomeComponent } from './estructura/components/home/home.component';
import { ListadoTablaComponent } from './estructura/components/listado-tabla/listado-tabla.component';
import { ListadoTarjetaComponent } from './estructura/components/listado-tarjeta/listado-tarjeta.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "listado-tabla", component: ListadoTablaComponent },
  { path: "listado-tarjeta", component: ListadoTarjetaComponent },
  // { path: "**", redirectTo: ""} //este con ** tiene que ser el último, no poner nada después
  { path: "**", component: Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
