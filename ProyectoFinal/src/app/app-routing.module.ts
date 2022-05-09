import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { ListScreenComponent } from './screens/list-screen/list-screen.component';
import { AlimentacionComponent } from './screens/alimentacion/alimentacion.component';
import { SaludMentalComponent } from './screens/salud-mental/salud-mental.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent },
  { path: 'list', component: ListScreenComponent },
  { path: 'alimentacion', component: AlimentacionComponent },
  { path: 'salud-mental', component: SaludMentalComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
