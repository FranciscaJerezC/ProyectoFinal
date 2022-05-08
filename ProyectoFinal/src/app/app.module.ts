import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteComponent } from './componente/componente.component';
import { ListComponent } from './componente/list/list.component';
import { NavbarComponent } from './componente/navbar/navbar.component';
import { TitleComponent } from './componente/title/title.component';
import { ScreensComponent } from './screens/screens.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { ListScreenComponent } from './screens/list-screen/list-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    ListComponent,
    NavbarComponent,
    TitleComponent,
    ScreensComponent,
    ServiciosComponent,
    HomeScreenComponent,
    ListScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
