import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro1'
})
export class Filtro1Pipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultPostulante = [];
    for(const postulante of value){
      if(postulante.ci.indexOf(arg) > -1){
        resultPostulante.push(postulante);
      }
    }
    return resultPostulante;
  }

}
