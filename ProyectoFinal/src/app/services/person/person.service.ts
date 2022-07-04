import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url='/api';
  constructor(private http: HttpClient) { }



  //get usuarios
  getUsuarios(){
    return this.http.get(this.url);
  }

  //agregar usuario
  addUsuario(usuario:any){
    return this.http.post(this.url, usuario);
  }

  //buscar usuario
  buscarUsuario(rut:any){
    return this.http.get(`${this.url}/${rut}`);
  }

  //validar respuesta de recuperar contraseña
  validarRespuesta(rut:any,respuesta:any){
    return this.http.get(`${this.url}/recuperar/${rut}/${respuesta}`);
  }
  //cambiar contraseña
  cambiarContra(rut:any , contrasena:any){
    return this.http.put(`${this.url}/cambiarContrasena/${rut}`,contrasena);
  }


}
