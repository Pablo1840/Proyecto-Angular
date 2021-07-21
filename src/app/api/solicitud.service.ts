import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private url='http://localhost:8080/api/v1/solicitud';

  constructor(private http: HttpClient) { 
  }

  getAllSolicituds(): Observable<any>{
    return this.http.get(this.url).pipe(
     map(response => response),
      catchError(error => {
        alert(error.error);
        return error;
     })
    )
  }

  createSolicitud(solicitud:object): Observable<object> {
    return this.http.post(this.url,solicitud);
  }
}
