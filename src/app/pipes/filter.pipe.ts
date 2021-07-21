import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultSolicitud = [];
    for(const solicitud of value){
      if(solicitud.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultSolicitud.push(solicitud);
      }
    }
    return resultSolicitud;
  }

}
