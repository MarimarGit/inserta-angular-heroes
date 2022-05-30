import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesService } from './services/heroes.service';
import { EsPeligrosoPipe } from './pipes/es-peligroso.pipe';



@NgModule({
  declarations: [
    EsPeligrosoPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    HeroesService
  ],
  exports: [
    EsPeligrosoPipe
  ]
})
export class SharedModule { }
