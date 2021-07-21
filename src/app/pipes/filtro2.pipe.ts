import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro2'
})
export class Filtro2Pipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultPuntuacion = [];
    for(const puntuacion of value){
      if(puntuacion.calificador.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPuntuacion.push(puntuacion);
      }
    }
    return resultPuntuacion;
  }
}
