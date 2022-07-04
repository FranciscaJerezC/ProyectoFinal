import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  url='/api';
  constructor(private http: HttpClient) { }

  validarLogin(rut:string, contrasena:string):Observable<any>{
    return this.http.get(`${this.url}/login/${rut}/${contrasena}`);
  }
}
