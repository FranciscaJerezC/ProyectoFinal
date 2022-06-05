import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
import { ApiService } from 'src/app/shared/api.service';
import { UsuarioModel } from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  formValue !:FormGroup;
  usuarioModelObj : UsuarioModel = new UsuarioModel();
  usuarioData !: any;
  showAdd !: boolean;
  showUpdate !:boolean;
  constructor(private formbuilder: FormBuilder, 
    private api : ApiService)  { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      email : [''],
      password : [''],
    })
    this.getAllUsuario();
  }
clickAddUsuario(){
  this.formValue.reset();
  this.showAdd = true;
  this.showUpdate = false;
}
  postUsuarioDetails(){
    this.usuarioModelObj.email = this.formValue.value.email;
    this.usuarioModelObj.password = this.formValue.value.password;

    this.api.postUsuario(this.usuarioModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Usuario fue agregado de manera correcta")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllUsuario();
    },
    err=>{
      alert("Algo salio mal")
    })
  }

  getAllUsuario(){
    this.api.getUsuario()
    .subscribe(res=>{
      this.usuarioData = res;
    })
  }

  deleteUsuario(row : any){
    this.api.deleteUsuario(row.id)
    .subscribe(res=>{
      alert("Usuario eliminado");
      this.getAllUsuario();
    })
  }

  onEdit(row: any){
    this.showAdd = false;
    this.showUpdate = true;
    
    this.usuarioModelObj.id = row.id;
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['password'].setValue(row.password);

  }
  updateUsuarioDetails(){
    this.usuarioModelObj.email = this.formValue.value.email;
    this.usuarioModelObj.password = this.formValue.value.password;

    this.api.updateUsuario(this.usuarioModelObj,this.usuarioModelObj.id)
    .subscribe(res=>{
      alert("Actualizado correctamente");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllUsuario();
    })

  }
}
