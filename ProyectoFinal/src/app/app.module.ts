import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComponent } from './components/list/list.component';
import { TitleComponent } from './components/title/title.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { ListScreenComponent } from './screens/list-screen/list-screen.component';
import { ButtonCardComponent } from './components/button-card/button-card.component';
import { FormsModule } from "@angular/forms";
import { AlimentacionComponent } from './screens/alimentacion/alimentacion.component';
import { SaludMentalComponent } from './screens/salud-mental/salud-mental.component';

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
    SaludMentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
