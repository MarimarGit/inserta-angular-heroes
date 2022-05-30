import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from 'src/app/estructura/models/heroe.model';

@Pipe({
  name: 'esPeligroso'
})
export class EsPeligrosoPipe implements PipeTransform {

  transform(value: Heroe): string {
    //si el honor es negativo(es malvado) y es poderoso devolverá true
    if (value.honor <= 0 && value.poder > 200) {
      return '⚠️';
    } else {
      return '😇';
    }
  }

}
