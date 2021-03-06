import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComponent } from './components/list/list.component';
import { TitleComponent } from './components/title/title.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { ListScreenComponent } from './screens/list-screen/list-screen.component';
import { ButtonCardComponent } from './components/button-card/button-card.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AlimentacionComponent } from './screens/alimentacion/alimentacion.component';
import { SaludMentalComponent } from './screens/salud-mental/salud-mental.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FooterComponent} from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ModificarComponent } from './components/modificar/modificar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListComponent,
    TitleComponent,
    HomeScreenComponent,
    ListScreenComponent,
    ButtonCardComponent,
    AlimentacionComponent,
    SaludMentalComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    AgregarComponent,
    ModificarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
