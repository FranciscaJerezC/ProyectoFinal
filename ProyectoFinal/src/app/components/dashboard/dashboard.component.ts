import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person/person.service'
import { Usuario } from '../../interfaces/usuario'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent  implements OnInit {

  listaUsuarios: Usuario[];

  constructor(private PersonService: PersonService) { }

  ngOnInit(): void {
    let datos = JSON.parse(localStorage.getItem('sitiomovil'));
    if(datos && datos.usuario){
      window.location.href="";
      return;
    } 
    let datos2 = JSON.parse(localStorage.getItem('modoAdmin'));
    if(datos2 == null && datos == null){
      window.location.href="";
      return;
    } 
    this.listarUsuarios();
  }


  listarUsuarios(){
    this.PersonService.getUsuarios().subscribe(res=>{
      this.listaUsuarios = <any>res;
      for(let i=0;i<this.listaUsuarios.length;i++){
        if(this.listaUsuarios[i].rut  == "00000000-0"){
        this.listaUsuarios.splice(i,1);
        }
      }
    },
    err => console.log(err)
    );
  }
}