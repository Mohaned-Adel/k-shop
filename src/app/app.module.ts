import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { RecentlyVisitComponent } from './recently-visit/recently-visit.component';
import { RecentlyArrivedComponent } from './recently-arrived/recently-arrived.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    MainComponent,
    RecentlyVisitComponent,
    RecentlyArrivedComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
