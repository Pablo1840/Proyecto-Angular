import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostulanteService {
  private url='http://localhost:8080/api/v1/postulante';

  constructor(private http: HttpClient) { 
  }

  getAllPostulantes(): Observable<any>{
    return this.http.get(this.url).pipe(
      map(response => response),
      catchError(error =>{
        alert(error.error);
        return error;
      })
    )
  }

  getPostulanteById(codPostulante:String):Observable<any>{
    return this.http.get(this.url+"/"+codPostulante).pipe(
      map(response => response),
      catchError(error =>{
        alert(error.error);
          return error;
      })
    )
  }
  
  updatePostulante(codPostulante:String, value:any):Observable<object>{
    return this.http.put(this.url + "/"+codPostulante,value);
  }
}
  