import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from './races/races.component';
import { RaceService } from './race.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RacesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
