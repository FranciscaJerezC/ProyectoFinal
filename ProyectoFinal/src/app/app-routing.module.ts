import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { ListScreenComponent } from './screens/list-screen/list-screen.component';
import { AlimentacionComponent } from './screens/alimentacion/alimentacion.component';
import { SaludMentalComponent } from './screens/salud-mental/salud-mental.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ModificarComponent } from './components/modificar/modificar.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'login', component:LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'home', component: HomeScreenComponent },
  { path: 'list', component: ListScreenComponent },
  { path: 'alimentacion', component: AlimentacionComponent },
  { path: 'salud-mental', component: SaludMentalComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'modificar', component: ModificarComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
