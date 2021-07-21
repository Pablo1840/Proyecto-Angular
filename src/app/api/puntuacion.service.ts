import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PuntuacionService {
  private url='http://localhost:8080/api/v1/puntuacion';

  constructor(private http: HttpClient) { 
  }

  getAllPuntuaciones(): Observable<any>{
    return this.http.get(this.url).pipe(
      map(response => response),
      catchError(error => {
        alert(error.error);
        return error;
      })
    )
  }
}
